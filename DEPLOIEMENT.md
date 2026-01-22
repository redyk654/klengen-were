# 🚀 GUIDE DE DÉPLOIEMENT - KLENGEN-WERE

## 📋 Prérequis

- ✅ Hébergement O2switch configuré
- ✅ Nom de domaine `klengenwere.com` configuré
- ✅ Certificat SSL actif
- ✅ Accès FTP/cPanel O2switch

---

## 📦 ÉTAPE 1 : PRÉPARATION DES FICHIERS

### Fichiers à déployer

Tous les fichiers du projet sont prêts pour la production :

```
/
├── index.html                      ✅ Page d'accueil
├── services.html                   ✅ Page services
├── contact.html                    ✅ Page contact
├── .htaccess                       ✅ Configuration Apache
├── css/
│   ├── style.min.css              ✅ Styles principaux (minifié)
│   ├── pages.min.css              ✅ Styles pages (minifié)
│   └── responsive.min.css         ✅ Styles responsive (minifié)
├── js/
│   ├── main.min.js                ✅ Script principal (minifié)
│   ├── language.min.js            ✅ Gestion multilingue (minifié)
│   └── translations.min.js        ✅ Traductions (minifié)
├── assets/
│   ├── images/                    ✅ Images optimisées
│   ├── videos/                    ✅ Vidéo hero banner
│   └── logo/                      ✅ Logo + favicons
```

### Fichiers à NE PAS déployer

- `node_modules/` (dépendances de développement)
- `.git/` (historique Git)
- `.claude/` (configuration Claude Code)
- `PRD_KLENGEN-WERE.docx`
- `GUIDE_UTILISATION_CLAUDE_CODE.md`
- `DEPLOIEMENT.md` (ce fichier)
- `package.json` et `package-lock.json`
- Fichiers CSS/JS non minifiés (optionnel - garder les .min seulement)

---

## 🌐 ÉTAPE 2 : CONNEXION À L'HÉBERGEMENT O2SWITCH

### Option A : Via FTP (FileZilla recommandé)

1. **Télécharger FileZilla** : https://filezilla-project.org/
2. **Récupérer les identifiants FTP** depuis l'email de bienvenue O2switch
3. **Se connecter** :
   - Hôte : `ftp.klengenwere.com` ou l'IP fournie par O2switch
   - Utilisateur : `votre_utilisateur_ftp`
   - Mot de passe : `votre_mot_de_passe`
   - Port : `21`

### Option B : Via cPanel

1. **Se connecter à cPanel** : https://cpanel.o2switch.fr
2. **Utiliser le gestionnaire de fichiers** (File Manager)

---

## 📤 ÉTAPE 3 : UPLOAD DES FICHIERS

### Via FileZilla (FTP)

1. **Naviguer vers le dossier racine web**
   - Sur O2switch, c'est généralement : `/public_html/` ou `/www/`

2. **Vider le dossier** (s'il contient des fichiers de test)
   - Supprimer tous les fichiers existants (index.html par défaut, etc.)

3. **Uploader tous les fichiers du projet**
   - Sélectionner tous les fichiers/dossiers du projet local
   - Glisser-déposer dans `/public_html/`
   - Attendre la fin du transfert

4. **Vérifier la structure**
   ```
   /public_html/
   ├── index.html
   ├── services.html
   ├── contact.html
   ├── .htaccess
   ├── css/
   ├── js/
   └── assets/
   ```

### Via cPanel File Manager

1. **Ouvrir le gestionnaire de fichiers**
2. **Aller dans `/public_html/`**
3. **Cliquer sur "Upload"**
4. **Glisser-déposer tous les fichiers**
5. **Ou utiliser "Compress" pour uploader un ZIP** :
   - Créer un ZIP du projet localement
   - Uploader le ZIP dans `/public_html/`
   - Clic droit → Extract (Extraire)
   - Supprimer le ZIP après extraction

---

## ⚙️ ÉTAPE 4 : VÉRIFICATION DU .HTACCESS

Le fichier `.htaccess` est déjà configuré avec :

- ✅ Redirection HTTP → HTTPS (obligatoire)
- ✅ Redirection www → non-www
- ✅ Compression Gzip (performance)
- ✅ Mise en cache du navigateur
- ✅ Protection des fichiers sensibles

**Vérifier que le fichier est bien présent** dans `/public_html/.htaccess`

> ⚠️ **Important** : Les fichiers commençant par `.` sont cachés. Dans FileZilla, activer "Afficher les fichiers cachés" (Serveur → Forcer l'affichage des fichiers cachés).

---

## 🔍 ÉTAPE 5 : TESTS POST-DÉPLOIEMENT

### 1. Test de base
- ✅ Accéder à `https://klengenwere.com`
- ✅ Vérifier que la page d'accueil s'affiche correctement
- ✅ Vérifier le logo et les favicons

### 2. Test de navigation
- ✅ Cliquer sur "Services" → vérifier la page
- ✅ Cliquer sur "Contact" → vérifier la page
- ✅ Tester le retour à l'accueil

### 3. Test multilingue
- ✅ Cliquer sur "EN" → vérifier la traduction en anglais
- ✅ Cliquer sur "AR" → vérifier la traduction en arabe
- ✅ Retour au "FR"

### 4. Test WhatsApp
- ✅ Cliquer sur les boutons WhatsApp (hero banner, CTA, contact)
- ✅ Vérifier que WhatsApp s'ouvre avec le message pré-rempli
- ✅ Tester les numéros dans le footer

### 5. Test responsive
- ✅ Ouvrir le site sur mobile (ou mode responsive navigateur)
- ✅ Tester le menu hamburger
- ✅ Vérifier l'affichage des cartes et du contenu

### 6. Test SSL/HTTPS
- ✅ Vérifier le cadenas vert dans la barre d'adresse
- ✅ Accéder à `http://klengenwere.com` → doit rediriger vers HTTPS
- ✅ Accéder à `https://www.klengenwere.com` → doit rediriger vers version sans www

### 7. Test performance
- ✅ Ouvrir Chrome DevTools (F12)
- ✅ Onglet "Network" → recharger la page
- ✅ Vérifier que le temps de chargement est < 3 secondes
- ✅ Vérifier que la compression Gzip est active (Content-Encoding: gzip)

---

## 📊 ÉTAPE 6 : VALIDATION FINALE

### Outils de validation en ligne

1. **Test multi-navigateurs** :
   - Chrome, Firefox, Safari, Edge
   - iOS Safari et Android Chrome

2. **Test SSL** :
   - https://www.ssllabs.com/ssltest/
   - Vérifier le score SSL (A ou A+ attendu)

3. **Test Google PageSpeed** :
   - https://pagespeed.web.dev/
   - Tester `https://klengenwere.com`
   - Score attendu : > 90/100

4. **Test Google Mobile-Friendly** :
   - https://search.google.com/test/mobile-friendly
   - Vérifier que le site est "Adapté aux mobiles"

---

## 🔧 CONFIGURATION OPTIONNELLE O2SWITCH

### 1. Activer la compression Brotli (meilleure que Gzip)

Dans cPanel :
1. Aller dans "MultiPHP INI Editor"
2. Chercher "output_compression"
3. Activer si disponible

### 2. Configurer les erreurs personnalisées

Dans `.htaccess`, ajouter :
```apache
ErrorDocument 404 /index.html
ErrorDocument 500 /index.html
```

### 3. Activer le cache du navigateur

Déjà configuré dans `.htaccess`, mais vérifier avec :
- Chrome DevTools → Network → Headers
- Chercher "Cache-Control" dans les réponses HTTP

---

## 📧 ÉTAPE 7 : CONFIGURATION EMAIL (OPTIONNEL)

Si vous souhaitez créer des emails professionnels (@klengenwere.com) :

1. **Dans cPanel O2switch** :
   - Aller dans "Comptes Email"
   - Créer `contact@klengenwere.com`
   - Créer `info@klengenwere.com`

2. **Configurer dans Outlook/Gmail** :
   - Serveur IMAP : fourni par O2switch
   - Serveur SMTP : fourni par O2switch
   - Suivre le guide O2switch

---

## 🚨 DÉPANNAGE

### Le site n'affiche rien / Erreur 404
- Vérifier que les fichiers sont dans `/public_html/` et non dans un sous-dossier
- Vérifier que `index.html` existe à la racine

### Le SSL ne fonctionne pas
- Attendre 15-30 minutes après le déploiement
- Vérifier dans cPanel → SSL/TLS Status
- Contacter le support O2switch si nécessaire

### Les images ne s'affichent pas
- Vérifier les permissions des dossiers (755 pour dossiers, 644 pour fichiers)
- Dans cPanel File Manager : clic droit → Change Permissions
- Vérifier que le dossier `assets/` a bien été uploadé

### La compression Gzip ne fonctionne pas
- Vérifier que le module Apache `mod_deflate` est actif (géré par O2switch)
- Tester avec : https://www.giftofspeed.com/gzip-test/

### Les changements ne sont pas visibles
- Vider le cache du navigateur (Ctrl + Shift + R)
- Tester en navigation privée
- Attendre quelques minutes pour la propagation DNS

---

## 📞 SUPPORT

### Support O2switch
- Email : support@o2switch.fr
- Téléphone : +33 4 44 44 60 40
- Documentation : https://faq.o2switch.fr/

### Ressources utiles
- Documentation Apache : https://httpd.apache.org/docs/
- Guide cPanel : https://docs.cpanel.net/

---

## ✅ CHECKLIST DE DÉPLOIEMENT

- [ ] Connexion FTP/cPanel réussie
- [ ] Fichiers uploadés dans `/public_html/`
- [ ] Fichier `.htaccess` présent
- [ ] Page d'accueil accessible via HTTPS
- [ ] Navigation entre pages fonctionnelle
- [ ] Multilingue (FR/EN/AR) fonctionnel
- [ ] Boutons WhatsApp fonctionnels
- [ ] Menu mobile/hamburger fonctionnel
- [ ] Images et vidéos affichées correctement
- [ ] Favicons visibles dans l'onglet
- [ ] SSL actif (cadenas vert)
- [ ] Test responsive OK (mobile/tablette)
- [ ] Performance > 85/100 sur PageSpeed
- [ ] Aucune erreur dans la console navigateur

---

## 🎉 FÉLICITATIONS !

Votre site KLENGEN-WERE est maintenant en ligne et accessible au monde entier !

**URL du site** : https://klengenwere.com

**Prochaines étapes suggérées** :
1. Soumettre le site à Google Search Console
2. Créer un compte Google Analytics (optionnel)
3. Créer une page Google My Business
4. Partager le site sur les réseaux sociaux

---

*Document créé le 22 janvier 2026*
*Site développé avec Claude Code*
