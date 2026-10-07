-- Midori High V14 — fonctions portail (1 compte = plusieurs fonctions)
-- À exécuter dans Supabase SQL Editor.

create table if not exists public.midori_person_functions (
  id uuid primary key default gen_random_uuid(),
  person_id uuid not null references public.midori_people(id) on delete cascade,
  function_code text not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  unique(person_id, function_code)
);

create index if not exists midori_person_functions_person_idx
  on public.midori_person_functions(person_id);

alter table public.midori_person_functions enable row level security;

-- Lecture uniquement des fonctions du compte connecté.
drop policy if exists midori_person_functions_read_own on public.midori_person_functions;
create policy midori_person_functions_read_own
on public.midori_person_functions
for select to authenticated
using (
  exists (
    select 1
    from public.midori_people mp
    where mp.id = midori_person_functions.person_id
      and mp.auth_user_id = auth.uid()
      and mp.active = true
  )
  or public.midori_is_admin()
);

-- Seul un administrateur peut attribuer une fonction portail.
drop policy if exists midori_person_functions_admin_write on public.midori_person_functions;
create policy midori_person_functions_admin_write
on public.midori_person_functions
for all to authenticated
using (public.midori_is_admin())
with check (public.midori_is_admin());

-- Retourne les fonctions réellement disponibles pour le compte connecté.
create or replace function public.midori_get_my_functions()
returns table (
  function_code text,
  label text,
  icon text
)
language sql stable security definer set search_path=public
as $$
  select
    f.function_code,
    case f.function_code
      when 'cpe' then 'CPE / Administration'
      when 'recruteur_wl' then 'Recruteur WL'
      else f.function_code
    end as label,
    case f.function_code
      when 'cpe' then '🏫'
      when 'recruteur_wl' then '📋'
      else '⚙️'
    end as icon
  from public.midori_person_functions f
  join public.midori_people mp on mp.id = f.person_id
  where mp.auth_user_id = auth.uid()
    and mp.active = true
    and f.active = true
  order by case f.function_code when 'cpe' then 1 when 'recruteur_wl' then 2 else 99 end;
$$;

grant execute on function public.midori_get_my_functions() to authenticated;

-- Permet à un administrateur d'ajouter/activer une fonction sur une personne.
create or replace function public.midori_set_person_function(
  p_person_id uuid,
  p_function_code text,
  p_active boolean default true
)
returns void
language plpgsql security definer set search_path=public
as $$
begin
  if not public.midori_is_admin() then
    raise exception 'Accès administrateur requis';
  end if;

  if p_function_code not in ('cpe','recruteur_wl') then
    raise exception 'Fonction portail inconnue';
  end if;

  if not exists (select 1 from public.midori_people where id=p_person_id and active=true) then
    raise exception 'Personne introuvable ou inactive';
  end if;

  insert into public.midori_person_functions(person_id,function_code,active)
  values(p_person_id,p_function_code,p_active)
  on conflict (person_id,function_code)
  do update set active=excluded.active;
end;
$$;

grant execute on function public.midori_set_person_function(uuid,text,boolean) to authenticated;

-- Initialisation des fonctions pour les comptes déjà existants.
-- Admin = CPE/Administration + Recruteur WL.
insert into public.midori_person_functions(person_id,function_code)
select p.person_id,'cpe'
from public.profiles p
where p.role='admin' and p.person_id is not null
on conflict do nothing;

insert into public.midori_person_functions(person_id,function_code)
select p.person_id,'recruteur_wl'
from public.profiles p
where p.role in ('admin','recruteur_wl') and p.person_id is not null
on conflict do nothing;

-- Contrôle pratique : doit retourner les deux fonctions pour un admin.
-- select * from public.midori_get_my_functions();
