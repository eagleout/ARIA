# 🦒 Les Petitous — Page Établissement (Villemomble)

## 7 blocs à coller dans Elementor

| # | Fichier | Section |
|---|---------|---------|
| 01 | `01-HERO.html` | Hero avec H1, breadcrumb, infos clés, grille photos |
| 02 | `02-INFOS-PRATIQUES.html` | 4 cartes : horaires, capacité, locaux, équipe |
| 03 | `03-LOCAUX-ACTIVITES.html` | Description des espaces + grille d'activités |
| 04 | `04-EQUIPE.html` | Présentation de l'équipe (4 membres) |
| 05 | `05-TEMOIGNAGES.html` | Avis parents + note Google |
| 06 | `06-CARTE-ACCES.html` | Google Maps + infos d'accès |
| 07 | `07-FORMULAIRE-SCHEMA.html` | CTA pré-inscription + Schema SEO |

## Installation
Même procédure que la page d'accueil :
1. Crée une page dans WordPress : "Micro-crèche Villemomble"
2. URL : `/nos-creches/villemomble/`
3. Template Elementor : Pleine largeur
4. Ajoute 7 sections, chacune avec un widget HTML
5. Colle les blocs dans l'ordre

## SEO — À configurer dans Rank Math / Yoast
- **Title** : `Micro-crèche Villemomble | Les Petitous – Places disponibles`
- **Meta description** : `Micro-crèche Les Petitous à Villemomble (93). Accueil de 14 enfants de 10 semaines à 3 ans. Professionnels diplômés, aide CAF. Réservez une visite.`
- **URL** : `/nos-creches/villemomble/`

## Dupliquer pour les autres crèches

Pour créer les pages Juvisy et Kremlin-Bicêtre :
1. Copie tous les fichiers
2. Fais un chercher-remplacer sur :
   - "Villemomble" → "Juvisy-sur-Orge" ou "Kremlin-Bicêtre"
   - "93250" → "91260" ou "94270"
   - "Seine-Saint-Denis (93)" → "Essonne (91)" ou "Val-de-Marne (94)"
   - L'adresse complète
   - Les contacts (email, téléphone)
   - Le statut : `eph-status-open` → `eph-status-soon`
   - Le texte du badge : "Places disponibles" → "Ouverture prochaine"
   - Les coordonnées GPS dans le Schema
   - L'iframe Google Maps

3. Modifie les témoignages (contenu unique par page = meilleur SEO)
4. Change les descriptions des locaux si les crèches sont différentes

## Checklist avant publication
- [ ] Toutes les infos (adresse, tel, email) sont correctes
- [ ] Les photos placeholder sont remplacées par des vraies photos
- [ ] L'iframe Google Maps est intégrée
- [ ] Le Schema JSON-LD a les bonnes coordonnées GPS
- [ ] Les liens internes pointent vers les bonnes pages
- [ ] Le breadcrumb est correct
- [ ] Le Title SEO et la Meta Description sont configurés dans Rank Math
