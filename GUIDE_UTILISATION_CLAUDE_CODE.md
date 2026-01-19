# 🚀 Guide d'utilisation : Comment utiliser le PRD avec Claude Code

## 📋 Vue d'ensemble

Ce guide vous explique comment utiliser le document **PRD_KLENGEN-WERE.docx** avec Claude Code pour développer automatiquement le site web vitrine de KLENGEN-WERE.

---

## 🎯 Prérequis

### 1. Installation de Claude Code
- Téléchargez Claude Code depuis [claude.ai](https://claude.ai) ou via votre terminal
- Installez l'application sur votre machine
- Connectez-vous avec votre compte Anthropic

### 2. Préparation du projet
- Créez un dossier vide pour le projet (ex: `klengen-were-website`)
- Placez le fichier `PRD_KLENGEN-WERE.docx` dans ce dossier
- Ayez le logo de l'entreprise prêt (format PNG ou JPG)

---

## 📝 Étapes d'utilisation

### **Étape 1 : Démarrer Claude Code**

1. Ouvrez votre terminal
2. Naviguez vers le dossier du projet :
   ```bash
   cd chemin/vers/klengen-were-website
   ```
3. Lancez Claude Code :
   ```bash
   claude-code
   ```

### **Étape 2 : Présenter le PRD à Claude Code**

Une fois Claude Code ouvert, envoyez ce message :

```
Bonjour Claude, je veux développer un site web vitrine pour KLENGEN-WERE. 
J'ai préparé un PRD complet qui décrit tous les aspects du projet. 

Peux-tu lire le document PRD_KLENGEN-WERE.docx et me confirmer que tu as 
bien compris le projet avant de commencer le développement ?
```

**Claude Code va alors :**
- Lire le PRD
- Analyser les spécifications
- Vous poser des questions de clarification si nécessaire
- Confirmer sa compréhension du projet

---

### **Étape 3 : Développement par phases**

Pour un meilleur résultat, procédez par phases comme indiqué dans le PRD :

#### **Phase 1 : Structure et Design**
```
Claude, commençons par la Phase 1 du PRD : crée la structure de fichiers, 
le design système (couleurs, typographie), le header et le footer.
```

**Attendez que Claude termine** avant de passer à la phase suivante.

#### **Phase 2 : Pages et Contenu**
```
Passons maintenant à la Phase 2 : développe les trois pages (Accueil, 
Services, Contact) avec leur contenu. Génère tous les textes en français 
selon les indications du PRD.
```

#### **Phase 3 : Fonctionnalités**
```
Phase 3 : implémente le système multilingue (FR/EN/AR), le bouton retour 
en haut, les liens WhatsApp, et le fil d'Ariane.
```

#### **Phase 4 : Responsive et Accessibilité**
```
Phase 4 : rends le site complètement responsive (mobile, tablette, desktop) 
et assure-toi qu'il respecte les normes d'accessibilité WCAG AA.
```

#### **Phase 5 : Optimisation**
```
Phase 5 : optimise les images, minifie le CSS/JS, et effectue tous les 
tests de validation W3C et Lighthouse.
```

---

### **Étape 4 : Fournir les médias**

Quand Claude vous demandera le logo et les médias :

```
Claude, voici le logo de l'entreprise [glissez le fichier logo].
Pour les images et vidéos, utilise des sources libres de droit 
(Unsplash, Pexels) selon les thématiques indiquées dans le PRD.
```

---

### **Étape 5 : Personnalisation et ajustements**

Si vous voulez modifier quelque chose :

```
Claude, j'aimerais que tu changes [élément spécifique] comme ceci : 
[description de la modification].
```

**Exemples :**
- "Change la couleur du bouton CTA en un orange plus vif"
- "Ajoute une section témoignages sur la page d'accueil"
- "Augmente la taille du logo dans le header"

---

### **Étape 6 : Tests et validation**

Demandez à Claude de tester :

```
Claude, effectue tous les tests listés dans la section 9.4 du PRD 
(multi-navigateurs, mobile, validation W3C, audit Lighthouse).
Donne-moi un rapport détaillé des résultats.
```

---

## 💡 Bonnes pratiques

### ✅ À FAIRE

1. **Procéder étape par étape** : Ne demandez pas tout d'un coup
2. **Vérifier chaque phase** : Testez localement avant de passer à la suite
3. **Être précis** : Si vous voulez une modification, décrivez-la clairement
4. **Fournir le contexte** : Rappelez à Claude le PRD si nécessaire
5. **Sauvegarder régulièrement** : Faites des commits Git après chaque phase

### ❌ À ÉVITER

1. **Ne pas demander tout en une fois** : "Fais-moi tout le site maintenant"
2. **Ne pas négliger les tests** : Testez après chaque phase
3. **Ne pas modifier manuellement** : Passez toujours par Claude Code
4. **Ne pas sauter les phases** : Suivez l'ordre logique du PRD

---

## 🔧 Commandes utiles pour Claude Code

### Génération de contenu
```
Claude, génère le contenu pour la section [nom] en te basant sur 
la charte de projet et les indications du PRD.
```

### Correction de bugs
```
Claude, il y a un problème avec [description]. Peux-tu le corriger ?
```

### Ajout de fonctionnalité
```
Claude, ajoute [fonctionnalité] selon les standards définis dans le PRD.
```

### Optimisation
```
Claude, optimise [élément] pour améliorer les performances/accessibilité.
```

---

## 📊 Suivi de progression

Utilisez cette checklist pour suivre votre avancement :

### Phase 1 : Structure et design
- [ ] Structure de dossiers créée
- [ ] Design système défini
- [ ] Header codé
- [ ] Footer codé
- [ ] Composants UI créés

### Phase 2 : Pages et contenu
- [ ] Page d'accueil complète
- [ ] Page Services complète
- [ ] Page Contact complète
- [ ] Tous les textes générés
- [ ] Images/vidéos intégrées

### Phase 3 : Fonctionnalités
- [ ] Système multilingue (FR/EN/AR)
- [ ] Bouton retour en haut
- [ ] Liens WhatsApp fonctionnels
- [ ] Fil d'Ariane
- [ ] Smooth scroll

### Phase 4 : Responsive et accessibilité
- [ ] Mobile responsive
- [ ] Tablette responsive
- [ ] Menu hamburger
- [ ] Navigation clavier
- [ ] ARIA labels et alt texts
- [ ] Contrastes WCAG AA

### Phase 5 : Optimisation et tests
- [ ] Images optimisées
- [ ] CSS/JS minifiés
- [ ] Validation W3C
- [ ] Tests multi-navigateurs
- [ ] Tests mobiles
- [ ] Audit Lighthouse > 90

### Phase 6 : Déploiement
- [ ] Hébergement configuré
- [ ] DNS configuré
- [ ] SSL activé
- [ ] Fichiers uploadés
- [ ] Tests post-déploiement
- [ ] Livraison client

---

## 🎨 Exemples de prompts avancés

### Pour le hero banner
```
Claude, pour le hero banner, trouve une vidéo libre de droit sur Pexels 
qui montre le port de Douala ou des activités d'import-export au Cameroun. 
La vidéo doit être courte (15-30s), professionnelle, et en bonne résolution.
```

### Pour les traductions
```
Claude, traduis tous les textes du site en anglais et en arabe. 
Assure-toi que les traductions sont professionnelles et adaptées au 
secteur de l'import-export. Pour l'arabe, n'oublie pas d'activer 
le support RTL (right-to-left).
```

### Pour l'optimisation
```
Claude, analyse la performance du site avec Lighthouse et corrige 
tous les points qui empêchent d'atteindre un score de 90+. 
Concentre-toi particulièrement sur :
- Le temps de chargement des images
- L'optimisation du CSS/JS
- Les bonnes pratiques SEO
```

---

## 🚨 Résolution de problèmes courants

### Problème 1 : Claude ne trouve pas le PRD
**Solution :**
```
Claude, le fichier PRD_KLENGEN-WERE.docx est dans le dossier actuel. 
Peux-tu lister les fichiers présents pour le confirmer ?
```

### Problème 2 : Les couleurs ne correspondent pas
**Solution :**
```
Claude, réfère-toi à la section 4.1 du PRD pour la palette de couleurs. 
Les couleurs exactes sont :
- Bleu marin : #1B4F72
- Bleu secondaire : #2874A6
- Orange : #E67E22
```

### Problème 3 : Le responsive ne fonctionne pas bien
**Solution :**
```
Claude, teste le site sur différentes tailles d'écran et corrige 
les problèmes d'affichage. Utilise les breakpoints définis dans 
la section 8.3 du PRD.
```

### Problème 4 : Les liens WhatsApp ne fonctionnent pas
**Solution :**
```
Claude, vérifie le format des URL WhatsApp. Elles doivent suivre 
ce format : https://wa.me/237XXXXXXXXX?text=Message
Assure-toi que les numéros sont au format international.
```

---

## 📞 Après le développement

Une fois le site terminé :

1. **Testez localement** : Ouvrez `index.html` dans plusieurs navigateurs
2. **Vérifiez mobile** : Utilisez les DevTools pour tester responsive
3. **Validez W3C** : Allez sur validator.w3.org
4. **Audit Lighthouse** : Lancez l'audit dans Chrome DevTools
5. **Demandez à Claude** un rapport final :

```
Claude, génère un rapport final qui liste :
1. Toutes les fonctionnalités implémentées
2. Les résultats des tests (W3C, Lighthouse)
3. Les fichiers créés et leur rôle
4. Les prochaines étapes pour le déploiement sur O2switch
```

---

## 🎯 Déploiement sur O2switch

Quand vous êtes prêt à déployer :

```
Claude, prépare les fichiers pour le déploiement sur O2switch :
1. Crée le fichier .htaccess selon la section 9.3 du PRD
2. Minifie tous les CSS et JS
3. Compresse toutes les images
4. Génère un fichier README.txt avec les instructions de déploiement
5. Crée une archive ZIP du site complet
```

---

## ✨ Astuces pro

### Astuce 1 : Révisions par sections
```
Claude, montre-moi uniquement le code de la section hero banner. 
Je veux vérifier les styles avant de continuer.
```

### Astuce 2 : Demander des explications
```
Claude, explique-moi comment fonctionne le système de traduction 
que tu as implémenté.
```

### Astuce 3 : Backup automatique
```
Claude, avant de faire cette modification importante, crée une 
sauvegarde du fichier style.css avec la date d'aujourd'hui.
```

### Astuce 4 : Documentation
```
Claude, documente tout le code JavaScript avec des commentaires 
en français qui expliquent chaque fonction.
```

---

## 📚 Ressources utiles

- **PRD complet** : PRD_KLENGEN-WERE.docx
- **Charte projet** : Charte_Projet_KLENGEN-WERE_v2.docx
- **Validation W3C** : https://validator.w3.org
- **Images libres** : 
  - https://unsplash.com
  - https://pexels.com
  - https://pixabay.com
- **Polices Google** : https://fonts.google.com
- **Audit Lighthouse** : Chrome DevTools > Lighthouse

---

## 🎉 Bon développement !

Suivez ce guide étape par étape et vous aurez un site web professionnel, 
performant et accessible pour KLENGEN-WERE. 

N'oubliez pas : Claude Code est votre assistant, utilisez-le intelligemment 
en lui donnant des instructions claires et en procédant par phases.

**Bonne chance ! 🚀**
