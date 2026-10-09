# Midori High — mise à jour du tableau de bord

Cette mise à jour conserve la page de connexion et son style existant. Elle refait le tableau de bord avec une bannière d'accueil, des cartes KPI, des panneaux annonces/événements, des accès rapides et une carte de messagerie.

## Installation
1. Faire une copie du dépôt GitHub actuel.
2. Décompresser le ZIP.
3. Dans le dossier `midori-high-main`, remplacer uniquement `app.js` et `styles.css` dans le dépôt par les versions de ce paquet.
4. Ne pas remplacer `config.js`, `index.html` ni `midori-high-logo.jpg` : ils restent inchangés.
5. Valider les modifications (Commit changes), attendre GitHub Pages, puis recharger avec Ctrl+F5.

## Notes techniques
- La page de connexion (`index.html`) n'a pas été modifiée.
- Le tableau de bord ne fait plus planter toute la page si une table facultative est absente.
- Les annonces indiquent clairement que le module doit être relié, car `public.announcements` est absent du schéma actuel. Aucun contenu fictif n'est créé.
- Les compteurs testent les noms de tables possibles et affichent « — » si aucune table compatible n'est accessible. Les règles RLS de Supabase restent applicables.
- Cette mise à jour ne répare pas les pages modules qui utilisent encore les anciennes tables.
