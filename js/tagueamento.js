// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// Inclusão do analytics
jQuery(document).ready(function () {
    
    gtag('event', 'page_view', {})

    jQuery('.menu-lista-contato').click(function () {
        gtag('event', 'entre_em_contato', {
            'event_category': 'menu',
            'event_label': 'link_externo'
        });
    });

    jQuery('.menu-lista-download').click(function () {
        gtag('event', 'download_pdf', {
            'event_category': 'menu',
            'event_label': 'download_pdf'
        });
    });

    jQuery('.card-montadoras').click(function () {
        var label = jQuery(this).find('.card-title').text();
        gtag('event', 'ver_mais', {
            'event_category': 'analise',
            'event_label': label
        });
    });

    jQuery.fn.extend({
        submitTrack: function () {
            gtag('event', 'enviado', {
                'event_category': 'contato',
                'event_label': 'enviado'
            });
        }
    });

    jQuery('#nome').on("focusout", function () {
        if ($(this).val().length > 0) {
            gtag('event', 'nome', {
                'event_category': 'contato',
                'event_label': 'preencheu'
            });
        }
    });

    jQuery('#email').on("focusout", function () {
        if ($(this).val().length > 0) {
            gtag('event', 'email', {
                'event_category': 'contato',
                'event_label': 'preencheu'
            });
        }
    });

    jQuery('#telefone').on("focusout", function () {
        if ($(this).val().length > 0) {
            gtag('event', 'telefone', {
                'event_category': 'contato',
                'event_label': 'preencheu'
            });
        }
    });


    jQuery('#aceito').change(function() {
        if(this.checked) {
            gtag('event', 'aceito', {
                'event_category': 'contato',
                'event_label': 'preencheu'
            });
        }
    });

});