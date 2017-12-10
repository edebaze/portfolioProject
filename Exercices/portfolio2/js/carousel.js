$(function() {
    
    /* ----------------------------------------
                DECLARATION FONCTIONS
    ---------------------------------------- */

    function animationCarousel(slide) {
        var carousel = $('#allPlan')  

        // On echange la place de la 1ere image avec celle séléctionnée
        var projet1 = $('.p1').children()
        var projet = slide

        slide.parent().append(projet1)
        $('.p1').append(projet)

        // On accélère le carousel :
        carousel.css('-webkit-animation', 'Acceleration 5s 1 ease-out')

        // On ajoute un effet sur .p1
        //$('.p1').css('-webkit-animation', 'Slide 5s 1 ease-out')

        // On place la slide sélectionnée au centre
        $('.p1').css('-webkit-transform', 'rotateY(0deg)')
        
        // On ajoute la classe active
        $('.p1').addClass('active')

        // On baisse la taille de toutes les images par défaut
        $('.plan img').css('width', '80%').css('margin-left', '0%').css('margin-top', '0%')

        // On augmente la taille de .active
        $('.active img').css('width', '200%').css('margin-left', '-50%').css('margin-top', '-20%')



        // On remet le carousel en route lorsque l'utilisateur clique sur le site
        $('.active').click(function() {
            // On baisse la taille de toutes les images par défaut
            $('.plan img').css('width', '80%').css('margin-left', '0%').css('margin-top', '0%')

            // On remet les paramètres de base à .active
            $('.active').css('-webkit-transform', 'translateZ(500px)')

            // On supprime active 
            $('.active').removeClass('active')

            // On relance le carousel
            carousel.css('-webkit-animation', 'Carousel 12s infinite linear')
        })
    }






    /* ----------------------------------------
               CAROUSEL via DROPDOWN
    ---------------------------------------- */

    $('.dropdown-item').click(function() {
        // On récupère le nom du dropdown sélectionné
        var nom = this.textContent.toLowerCase().replace(/\s/g,""); //permet de rempalcer tous les caractères 'blanc' (ceux que j'ai cités précédemment) 

        // On lance la fonction d'animation
        animationCarousel($('#'+nom))

    })


    /* ----------------------------------------
               CAROUSEL via SLIDE
    ---------------------------------------- */

    $('.plan img').click(function() {
        // On récupère de la slide sélectionnée
        var slide = $(this)

        // On lance la fonction d'animation
        animationCarousel(slide)
    })


    
})