/* ==========================================================================
   KLENGEN-WERE - Script principal
   Gère : header sticky, menu mobile, bouton retour en haut, smooth scroll
   ========================================================================== */

(function() {
    'use strict';

    // -------------------------------------------------------------------------
    // Sélection des éléments DOM
    // -------------------------------------------------------------------------
    const elements = {
        header: document.getElementById('header'),
        menuToggle: document.getElementById('menu-toggle'),
        nav: document.getElementById('nav-principal'),
        btnHaut: document.getElementById('btn-haut'),
        body: document.body
    };

    // -------------------------------------------------------------------------
    // Configuration
    // -------------------------------------------------------------------------
    const CONFIG = {
        seuilScroll: 100,        // Seuil pour afficher l'ombre du header
        seuilBtnHaut: 500,       // Seuil pour afficher le bouton retour en haut
        dureeAnimation: 300      // Durée des animations en ms
    };

    // -------------------------------------------------------------------------
    // Header avec ombre au scroll
    // -------------------------------------------------------------------------
    const GestionnaireHeader = {
        dernierScroll: 0,

        init: function() {
            if (!elements.header) return;

            window.addEventListener('scroll', this.gererScroll.bind(this), { passive: true });
            // Vérifier l'état initial
            this.gererScroll();
        },

        gererScroll: function() {
            const scrollActuel = window.pageYOffset || document.documentElement.scrollTop;

            // Ajouter/retirer la classe d'ombre
            if (scrollActuel > CONFIG.seuilScroll) {
                elements.header.classList.add('header--scrolled');
            } else {
                elements.header.classList.remove('header--scrolled');
            }

            this.dernierScroll = scrollActuel;
        }
    };

    // -------------------------------------------------------------------------
    // Menu hamburger mobile
    // -------------------------------------------------------------------------
    const GestionnaireMenu = {
        estOuvert: false,

        init: function() {
            if (!elements.menuToggle || !elements.nav) return;

            // Clic sur le bouton hamburger
            elements.menuToggle.addEventListener('click', this.basculerMenu.bind(this));

            // Fermer le menu quand on clique sur un lien
            elements.nav.querySelectorAll('.nav__lien').forEach(function(lien) {
                lien.addEventListener('click', this.fermerMenu.bind(this));
            }.bind(this));

            // Fermer le menu avec la touche Échap
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && this.estOuvert) {
                    this.fermerMenu();
                    elements.menuToggle.focus();
                }
            }.bind(this));

            // Fermer le menu si on clique en dehors
            document.addEventListener('click', function(e) {
                if (this.estOuvert &&
                    !elements.nav.contains(e.target) &&
                    !elements.menuToggle.contains(e.target)) {
                    this.fermerMenu();
                }
            }.bind(this));

            // Fermer le menu si on redimensionne vers desktop
            window.addEventListener('resize', function() {
                if (window.innerWidth >= 1024 && this.estOuvert) {
                    this.fermerMenu();
                }
            }.bind(this));
        },

        basculerMenu: function() {
            if (this.estOuvert) {
                this.fermerMenu();
            } else {
                this.ouvrirMenu();
            }
        },

        ouvrirMenu: function() {
            this.estOuvert = true;
            elements.menuToggle.setAttribute('aria-expanded', 'true');
            elements.menuToggle.setAttribute('aria-label', 'Fermer le menu de navigation');
            elements.nav.classList.add('nav--ouvert');
            elements.body.style.overflow = 'hidden'; // Empêcher le scroll du body

            // Focus sur le premier lien du menu pour l'accessibilité
            const premierLien = elements.nav.querySelector('.nav__lien');
            if (premierLien) {
                setTimeout(function() {
                    premierLien.focus();
                }, CONFIG.dureeAnimation);
            }
        },

        fermerMenu: function() {
            this.estOuvert = false;
            elements.menuToggle.setAttribute('aria-expanded', 'false');
            elements.menuToggle.setAttribute('aria-label', 'Ouvrir le menu de navigation');
            elements.nav.classList.remove('nav--ouvert');
            elements.body.style.overflow = ''; // Rétablir le scroll
        }
    };

    // -------------------------------------------------------------------------
    // Bouton retour en haut
    // -------------------------------------------------------------------------
    const GestionnaireBtnHaut = {
        init: function() {
            if (!elements.btnHaut) return;

            // Afficher/masquer le bouton selon le scroll
            window.addEventListener('scroll', this.gererVisibilite.bind(this), { passive: true });

            // Clic pour remonter
            elements.btnHaut.addEventListener('click', this.remonterEnHaut.bind(this));

            // Vérifier l'état initial
            this.gererVisibilite();
        },

        gererVisibilite: function() {
            const scrollActuel = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollActuel > CONFIG.seuilBtnHaut) {
                elements.btnHaut.classList.add('btn-haut--visible');
            } else {
                elements.btnHaut.classList.remove('btn-haut--visible');
            }
        },

        remonterEnHaut: function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    // -------------------------------------------------------------------------
    // Smooth scroll pour les ancres
    // -------------------------------------------------------------------------
    const GestionnaireSmoothScroll = {
        init: function() {
            document.querySelectorAll('a[href^="#"]').forEach(function(ancre) {
                ancre.addEventListener('click', this.gererClic.bind(this));
            }.bind(this));
        },

        gererClic: function(e) {
            const href = e.currentTarget.getAttribute('href');

            // Ignorer les liens vides ou "#"
            if (!href || href === '#') return;

            const cible = document.querySelector(href);
            if (cible) {
                e.preventDefault();

                // Calculer la position en tenant compte du header fixe
                const hauteurHeader = elements.header ? elements.header.offsetHeight : 0;
                const positionCible = cible.getBoundingClientRect().top + window.pageYOffset - hauteurHeader;

                window.scrollTo({
                    top: positionCible,
                    behavior: 'smooth'
                });

                // Mettre le focus sur l'élément cible pour l'accessibilité
                cible.setAttribute('tabindex', '-1');
                cible.focus();
            }
        }
    };

    // -------------------------------------------------------------------------
    // Gestion de la navigation active
    // -------------------------------------------------------------------------
    const GestionnaireNavActive = {
        init: function() {
            // Marquer le lien actif basé sur l'URL actuelle
            const pageActuelle = window.location.pathname.split('/').pop() || 'index.html';

            document.querySelectorAll('.nav__lien').forEach(function(lien) {
                const hrefLien = lien.getAttribute('href');

                // Retirer la classe active de tous les liens
                lien.classList.remove('nav__lien--actif');
                lien.removeAttribute('aria-current');

                // Ajouter la classe active au lien correspondant
                if (hrefLien === pageActuelle ||
                    (pageActuelle === '' && hrefLien === 'index.html') ||
                    (pageActuelle === 'index.html' && hrefLien === 'index.html')) {
                    lien.classList.add('nav__lien--actif');
                    lien.setAttribute('aria-current', 'page');
                }
            });
        }
    };

    // -------------------------------------------------------------------------
    // Intégration WhatsApp
    // -------------------------------------------------------------------------
    const GestionnaireWhatsApp = {
        // Numéros WhatsApp de l'entreprise
        numeros: [
            '237690566933'  // Numéro principal WhatsApp
        ],

        init: function() {
            // Gérer les formulaires de contact WhatsApp
            document.querySelectorAll('[data-whatsapp-form]').forEach(function(form) {
                form.addEventListener('submit', this.envoyerMessage.bind(this));
            }.bind(this));
        },

        /**
         * Génère une URL WhatsApp avec message pré-rempli
         * @param {string} message - Le message à envoyer
         * @param {number} indexNumero - Index du numéro à utiliser
         * @returns {string} URL WhatsApp
         */
        genererURL: function(message, indexNumero) {
            indexNumero = indexNumero || 0;
            const numero = this.numeros[indexNumero] || this.numeros[0];
            const messageEncode = encodeURIComponent(message);
            return 'https://wa.me/' + numero + '?text=' + messageEncode;
        },

        /**
         * Gère l'envoi d'un message depuis un formulaire
         * @param {Event} e - Événement submit
         */
        envoyerMessage: function(e) {
            e.preventDefault();

            const form = e.target;
            const textarea = form.querySelector('textarea');

            if (textarea && textarea.value.trim()) {
                const message = textarea.value.trim();
                const url = this.genererURL(message);
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        }
    };

    // -------------------------------------------------------------------------
    // Initialisation globale
    // -------------------------------------------------------------------------
    function initialiser() {
        GestionnaireHeader.init();
        GestionnaireMenu.init();
        GestionnaireBtnHaut.init();
        GestionnaireSmoothScroll.init();
        GestionnaireNavActive.init();
        GestionnaireWhatsApp.init();

        // Log de confirmation en développement
        console.log('KLENGEN-WERE: Scripts initialisés');
    }

    // Attendre que le DOM soit prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialiser);
    } else {
        initialiser();
    }

    // Exposer certaines fonctions globalement si nécessaire
    window.KlengenWere = {
        WhatsApp: GestionnaireWhatsApp
    };

})();
