# 🦒 Les Petitous — Blocs Elementor V2 (Autonomes)

## Changement par rapport à V1
Tous les blocs sont maintenant **100% autonomes**.
Plus besoin du fichier CSS global. Chaque bloc contient ses propres styles et importe ses propres polices.

## Installation

### Dans Elementor :
1. Crée une page > **Modifier avec Elementor**
2. Choisis le modèle **"Elementor Pleine largeur"**
3. Pour chaque bloc (01 à 10) :
   - Ajoute une section 1 colonne
   - Section > Disposition > **Pleine largeur**, Écart **0**
   - Section > Avancé > Marges et padding : **tout à 0**
   - Glisse un widget **HTML** dans la colonne
   - Colle le contenu du fichier correspondant
4. Publie !

### Ordre des blocs :
1. `01-HERO.html` — Section héro avec mascotte
2. `02-TRUST-BAR.html` — Barre de réassurance 4 piliers
3. `03-ABOUT.html` — Qui sommes-nous
4. `04-VALUES.html` — Nos valeurs / pédagogie
5. `05-CRECHES.html` — Les 3 établissements
6. `06-STEPS.html` — Inscription en 3 étapes
7. `07-TESTIMONIALS.html` — Témoignages parents
8. `08-FAQ.html` — FAQ accordéon (JS inclus)
9. `09-CTA-FINAL.html` — Appel à l'action final
10. `10-FOOTER.html` — Pied de page

### Définir comme page d'accueil :
WordPress > Réglages > Lecture > Page statique > Sélectionne ta page

## Personnalisation rapide

### Remplacer un emoji par une vraie photo :
Cherche l'emoji (ex: 🧸) et remplace par :
```html
<img src="https://tonsite.fr/wp-content/uploads/ta-photo.jpg" alt="Description" style="width:100%;height:100%;object-fit:cover;border-radius:32px;">
```

### Modifier les couleurs :
Cherche-remplace dans chaque fichier :
- Orange : `#E8813A`
- Vert boutons : `#5BBD72`
- Vert hover : `#4AA862`
- Texte : `#2A2A2A`
- Fond sable : `#FAF3EB`
- Fond crème : `#FFF9F3`

### Modifier les liens :
Remplace `/pre-inscription/` par ton URL réelle de formulaire.

## Couleurs & Polices de référence
- Titres : **Nunito** (800 Extra Bold)
- Corps : **Quicksand** (400/600)
- Orange : `#E8813A`
- Vert : `#5BBD72`
- Fond sable : `#FAF3EB`
