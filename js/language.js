/* ==========================================================================
   KLENGEN-WERE - Gestion du système multilingue
   Gère le changement de langue et la persistance du choix utilisateur
   ========================================================================== */

(function() {
    'use strict';

    // -------------------------------------------------------------------------
    // Configuration
    // -------------------------------------------------------------------------
    const CONFIG_LANGUE = {
        langueParDefaut: 'fr',
        cleStockage: 'klengen_langue',
        languesDisponibles: ['fr', 'en', 'ar'],
        languesRTL: ['ar'] // Langues qui s'écrivent de droite à gauche
    };

    // -------------------------------------------------------------------------
    // Gestionnaire de langue
    // -------------------------------------------------------------------------
    const GestionnaireLangue = {
        /**
         * Initialise le système de langue
         */
        init: function() {
            // Récupérer la langue sauvegardée ou utiliser la langue par défaut
            const langueSauvegardee = this.obtenirLangueSauvegardee();
            this.changerLangue(langueSauvegardee, false);

            // Ajouter les écouteurs sur les boutons de langue
            this.attacherEcouteurs();
        },

        /**
         * Récupère la langue sauvegardée dans localStorage
         * @returns {string} Code de la langue
         */
        obtenirLangueSauvegardee: function() {
            try {
                const langue = localStorage.getItem(CONFIG_LANGUE.cleStockage);
                if (langue && CONFIG_LANGUE.languesDisponibles.includes(langue)) {
                    return langue;
                }
            } catch (e) {
                // localStorage non disponible (navigation privée, etc.)
                console.warn('localStorage non disponible:', e);
            }
            return CONFIG_LANGUE.langueParDefaut;
        },

        /**
         * Sauvegarde la langue dans localStorage
         * @param {string} langue - Code de la langue à sauvegarder
         */
        sauvegarderLangue: function(langue) {
            try {
                localStorage.setItem(CONFIG_LANGUE.cleStockage, langue);
            } catch (e) {
                console.warn('Impossible de sauvegarder la langue:', e);
            }
        },

        /**
         * Change la langue de l'interface
         * @param {string} langue - Code de la langue cible
         * @param {boolean} sauvegarder - Sauvegarder dans localStorage
         */
        changerLangue: function(langue, sauvegarder = true) {
            // Vérifier que la langue est valide
            if (!CONFIG_LANGUE.languesDisponibles.includes(langue)) {
                console.error('Langue non supportée:', langue);
                return;
            }

            // Vérifier que les traductions sont disponibles
            if (typeof TRADUCTIONS === 'undefined' || !TRADUCTIONS[langue]) {
                console.error('Traductions non trouvées pour:', langue);
                return;
            }

            const traductions = TRADUCTIONS[langue];

            // Mettre à jour tous les éléments avec l'attribut data-i18n
            document.querySelectorAll('[data-i18n]').forEach(function(element) {
                const cle = element.getAttribute('data-i18n');
                if (traductions[cle]) {
                    // Gérer différents types d'éléments
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        if (element.hasAttribute('placeholder')) {
                            element.setAttribute('placeholder', traductions[cle]);
                        } else {
                            element.value = traductions[cle];
                        }
                    } else {
                        element.textContent = traductions[cle];
                    }
                }
            });

            // Mettre à jour les attributs aria-label avec data-i18n-aria
            document.querySelectorAll('[data-i18n-aria]').forEach(function(element) {
                const cle = element.getAttribute('data-i18n-aria');
                if (traductions[cle]) {
                    element.setAttribute('aria-label', traductions[cle]);
                }
            });

            // Mettre à jour l'attribut lang du document
            document.documentElement.setAttribute('lang', langue);

            // Gérer la direction du texte (RTL pour l'arabe)
            if (CONFIG_LANGUE.languesRTL.includes(langue)) {
                document.documentElement.setAttribute('dir', 'rtl');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
            }

            // Mettre à jour l'état actif des boutons de langue
            this.mettreAJourBoutonsActifs(langue);

            // Sauvegarder si demandé
            if (sauvegarder) {
                this.sauvegarderLangue(langue);
            }

            // Émettre un événement personnalisé pour d'autres scripts
            document.dispatchEvent(new CustomEvent('langueChangee', {
                detail: { langue: langue }
            }));
        },

        /**
         * Met à jour l'état actif des boutons de langue
         * @param {string} langueActive - Code de la langue active
         */
        mettreAJourBoutonsActifs: function(langueActive) {
            document.querySelectorAll('.langue__btn').forEach(function(btn) {
                const langueBtn = btn.getAttribute('data-lang');
                if (langueBtn === langueActive) {
                    btn.classList.add('langue__btn--actif');
                    btn.setAttribute('aria-pressed', 'true');
                } else {
                    btn.classList.remove('langue__btn--actif');
                    btn.setAttribute('aria-pressed', 'false');
                }
            });
        },

        /**
         * Attache les écouteurs d'événements aux boutons de langue
         */
        attacherEcouteurs: function() {
            const self = this;

            document.querySelectorAll('.langue__btn').forEach(function(btn) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const langue = this.getAttribute('data-lang');
                    if (langue) {
                        self.changerLangue(langue);
                    }
                });

                // Support clavier
                btn.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.click();
                    }
                });
            });
        },

        /**
         * Obtient la langue actuellement active
         * @returns {string} Code de la langue active
         */
        obtenirLangueActive: function() {
            return document.documentElement.getAttribute('lang') || CONFIG_LANGUE.langueParDefaut;
        }
    };

    // -------------------------------------------------------------------------
    // Initialisation au chargement du DOM
    // -------------------------------------------------------------------------
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            GestionnaireLangue.init();
        });
    } else {
        // DOM déjà chargé
        GestionnaireLangue.init();
    }

    // Exposer globalement pour utilisation externe si nécessaire
    window.GestionnaireLangue = GestionnaireLangue;

})();
