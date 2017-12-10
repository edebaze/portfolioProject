$(function() { 

    /* -------------------------------------- 
        Initialisation des valeurs de base
    -------------------------------------- */

    var pika = $('#pika')




    /* ------------------------------------------- 
        Initialisation des fonctions de base
    ------------------------------------------- */

    function bouleDeFeu() {
        $('.zoneCombat').click(function(e) {
            // Initialisation des coordonnées de départ de l'attaque
            var bouleDeFeuX = $('#pika').offset().left
            var bouleDeFeuY = $('#pika').offset().top

            // Apparition de la boule de feu
            $('.zoneCombat').append('<img id="bdf" src="../img/bdf.png">')
            $('#bdf').offset({left: bouleDeFeuX, top: bouleDeFeuY})

            // Initialisation des coordonnées de fin de l'attaque
            var mouseX = e.pageX
            var mouseY = e.pageY

            // Initialisation de la vitesse
            vitesseBouleDeFeu = 0.3;
            vitesseBouleDeFeuX = vitesseBouleDeFeu * (mouseX - bouleDeFeuX)/(mouseY - bouleDeFeuY + mouseX - bouleDeFeuX)
            vitesseBouleDeFeuY = vitesseBouleDeFeu * (mouseY - bouleDeFeuY)/(mouseY - bouleDeFeuY + mouseX - bouleDeFeuX)

            // Mouvement de la boule
            while(bouleDeFeuX < mouseX) {
                // Récupération des coordonnées de l'attaque
                var bouleDeFeuX = $('#bdf').offset().left
                var bouleDeFeuY = $('#bdf').offset().top
                console.log(bouleDeFeuX)

                $('#bdf').offset({left: bouleDeFeuX + vitesseBouleDeFeuX})
            }

        })
    }


    bouleDeFeu()

    
    $('body').keydown(function(e) {

        // Initialisation des coordonnées de pikachu
        var pikaX = $('#pika').offset().left
        var pikaY = $('#pika').offset().top

        // Initialisation des coordonnées de la zone de combat
        var zoneX = $('.zoneCombat').offset().left
        var zoneY = $('.zoneCombat').offset().top

        // Taille de la zone de combat
        var zoneL = $('.zoneCombat').width()
        var zoneH = $('.zoneCombat').height()

        // Initialisation de la vitesse
        var vitesse = 20
        var i = 0


                 ///////////////////////////////////
                // -- Déplacement de pikachu  -- //
               ///////////////////////////////////

        if(e.key == 'd') {
            i++
            $('#pika').offset({left: pikaX + vitesse*i})
        }

        if(e.key == 'q') {
            i++
            $('#pika').offset({left: pikaX - vitesse*i})
        }

        if(e.key == 'z') {
            i++
            $('#pika').offset({top: pikaY - vitesse*i})
        }

        if(e.key == 's') {
            i++
            $('#pika').offset({top: pikaY + vitesse*i})
        }
    




                 /////////////////////////////////
                // -- Dépassement du cadre  -- //
               /////////////////////////////////
        if($('#pika').offset().left <= zoneX) {
            $('#pika').offset({left: zoneX})
        }

        if($('#pika').offset().left >= zoneX + zoneL - pika.width()/2) {
            $('#pika').offset({left: zoneX + zoneL - pika.width()/2})
        }

        if($('#pika').offset().top <= zoneY) {
            $('#pika').offset({top: zoneY})
        }

        if($('#pika').offset().top >= zoneX + zoneH - pika.height()) {
            $('#pika').offset({top: zoneX + zoneH - pika.height()})
        }
        
        


    })
})