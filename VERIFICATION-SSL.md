# 🔒 GUIDE DE VÉRIFICATION ET CORRECTION SSL

## ✅ Modifications effectuées

### 1. Fichier .htaccess
Ajout des en-têtes de sécurité SSL :
- **HSTS (HTTP Strict Transport Security)** : Force HTTPS pendant 1 an
- **Content-Security-Policy** : Force toutes les ressources en HTTPS
- Redirection HTTP → HTTPS déjà configurée

### 2. Fichiers HTML (index.html, services.html, contact.html)
Ajout de la balise meta :
```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```
Cette balise force le navigateur à charger toutes les ressources en HTTPS.

---

## 🔍 ÉTAPE 1 : VÉRIFIER LE CERTIFICAT SSL SUR O2SWITCH

### A. Via cPanel O2switch

1. **Se connecter à cPanel** : https://cpanel.o2switch.fr
2. **Aller dans "SSL/TLS Status"** ou "Let's Encrypt SSL"
3. **Vérifier que le certificat est actif** pour `klengenwere.com` et `www.klengenwere.com`

### B. Installer/Renouveler le certificat SSL (si nécessaire)

**O2switch utilise Let's Encrypt (gratuit et automatique) :**

1. Dans cPanel, chercher **"Let's Encrypt SSL"**
2. Sélectionner le domaine **klengenwere.com**
3. Cocher :
   - ☑️ klengenwere.com
   - ☑️ www.klengenwere.com
4. Cliquer sur **"Issue"** ou **"Install"**
5. Attendre 1-2 minutes pour l'installation

### C. Vérifier que le certificat est valide

**Méthode 1 : Via navigateur**
- Aller sur https://klengenwere.com
- Cliquer sur le cadenas dans la barre d'adresse
- Vérifier les informations du certificat

**Méthode 2 : Via outil en ligne**
- Aller sur https://www.ssllabs.com/ssltest/
- Entrer : `klengenwere.com`
- Lancer le test
- **Résultat attendu : Note A ou A+**

---

## 🔍 ÉTAPE 2 : VÉRIFIER LE CONTENU MIXTE

### Qu'est-ce que le contenu mixte ?
C'est quand une page HTTPS charge des ressources en HTTP (images, CSS, JS, etc.). Cela empêche l'affichage du cadenas.

### Comment vérifier ?

1. **Ouvrir le site** : https://klengenwere.com
2. **Ouvrir la console du navigateur** :
   - Chrome/Edge : F12 → onglet "Console"
   - Firefox : F12 → onglet "Console"
   - Safari : Cmd+Option+C
3. **Chercher les erreurs** comme :
   ```
   Mixed Content: The page was loaded over HTTPS, but requested an insecure resource 'http://...'
   ```

### Correction automatique
Grâce aux modifications effectuées :
- **En-tête HSTS** dans .htaccess
- **Meta CSP** dans les HTML
- **Redirection HTTP → HTTPS** dans .htaccess

→ **Toutes les ressources HTTP seront automatiquement converties en HTTPS**

---

## 🔍 ÉTAPE 3 : VÉRIFICATIONS POST-DÉPLOIEMENT

### A. Checklist de vérification

Après avoir uploadé les fichiers sur O2switch :

1. ☑️ **Le site charge en HTTPS** : https://klengenwere.com
2. ☑️ **Le cadenas s'affiche** dans la barre d'adresse
3. ☑️ **Redirection HTTP → HTTPS** fonctionne : http://klengenwere.com redirige vers https://
4. ☑️ **Redirection www → non-www** fonctionne : https://www.klengenwere.com redirige vers https://klengenwere.com
5. ☑️ **Aucune erreur** dans la console du navigateur
6. ☑️ **Toutes les images** s'affichent correctement
7. ☑️ **La vidéo hero** se charge correctement

### B. Tester depuis plusieurs navigateurs

- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile (Chrome/Safari)

---

## 🔍 ÉTAPE 4 : PROBLÈMES COURANTS ET SOLUTIONS

### Problème 1 : "Certificat non valide" ou "Erreur SSL"

**Cause :** Le certificat SSL n'est pas installé ou a expiré

**Solution :**
1. Aller dans cPanel → Let's Encrypt SSL
2. Réinstaller le certificat pour klengenwere.com
3. Attendre 5 minutes et vider le cache du navigateur (Ctrl+Shift+R)

---

### Problème 2 : "Le cadenas a un triangle jaune" ou "Connexion non sécurisée"

**Cause :** Contenu mixte (ressources HTTP sur page HTTPS)

**Solution :**
Les modifications effectuées dans .htaccess et les HTML devraient corriger automatiquement ce problème. Si ce n'est pas le cas :

1. Ouvrir la console du navigateur (F12)
2. Noter les URLs des ressources en HTTP
3. Les forcer manuellement en HTTPS dans le code

---

### Problème 3 : "Le site ne charge pas en HTTPS"

**Cause :** .htaccess non uploadé ou mod_rewrite désactivé

**Solution :**
1. Vérifier que le fichier `.htaccess` est bien présent dans `/public_html/`
2. Vérifier qu'il commence bien par un point : `.htaccess` (pas `htaccess`)
3. Contacter le support O2switch si le problème persiste

---

### Problème 4 : "NET::ERR_CERT_COMMON_NAME_INVALID"

**Cause :** Le certificat ne couvre pas le bon domaine

**Solution :**
1. Vérifier que le certificat SSL couvre à la fois :
   - klengenwere.com
   - www.klengenwere.com
2. Réinstaller le certificat avec les deux variantes

---

## 📞 SUPPORT O2SWITCH

Si le problème persiste après toutes ces vérifications :

**Contact O2switch :**
- Email : support@o2switch.fr
- Téléphone : +33 4 44 44 60 40
- Ticket cPanel : Section "Support" dans cPanel

**Informations à fournir :**
- Nom de domaine : klengenwere.com
- Description du problème : "Le cadenas HTTPS ne s'affiche pas"
- Fichier .htaccess uploadé avec les configurations SSL

---

## ✅ RÉSUMÉ DES CORRECTIONS APPORTÉES

1. ✅ **HSTS activé** : Force HTTPS pendant 1 an
2. ✅ **CSP upgrade-insecure-requests** : Convertit automatiquement HTTP → HTTPS
3. ✅ **Redirection HTTP → HTTPS** : Déjà configurée dans .htaccess
4. ✅ **Balise meta CSP** : Dans tous les fichiers HTML
5. ✅ **Aucun lien HTTP en dur** : Tous les liens sont relatifs ou HTTPS

**Avec ces modifications, le site devrait afficher le cadenas vert dès que le certificat SSL est installé sur O2switch.**
