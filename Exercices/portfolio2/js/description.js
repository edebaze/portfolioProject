$(function() {

    /* ----------------------------------------
            INITIALISATION FONCTIONS
    ---------------------------------------- */

    function fullScroll(id) {
        $('html,body').animate({scrollTop: $("#"+id).offset().top}, 'slow');
    }





    // On écoute l'évènement sur .more
    $('.more').click(function() {

        // On se déplace vers la fin de la page lentement
        fullScroll('scroll1')

    })

    $('body').scroll(function() {
        //if(i>0) {
            console.log('Scroll')
            // On incrémente i
            i++
            // On deplace tout de 100vh
            fullScroll(i)
        //}
        
    })
})