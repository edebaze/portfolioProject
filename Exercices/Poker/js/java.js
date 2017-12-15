// Initialisation des variables
var i = 0
var a = 0
var pot = 0
var cartes

var numerosJoueur = 0;

var cartesJouees = []

var joueurs = [
    ['#j1'],
    ['#j2'],
    ['#j3'],
    ['#j4'],
    ['#j5'],
    ['#j6'],
    ['#j7'],
    ['#j8'],
]


$(function() {

    // Initialisation du paquet
    cartes = [
        [2, "pique", 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Poker-sm-21D-2s.png'],
        [3, "pique", 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Poker-sm-21C-3s.png'],
        [4, "pique", 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Poker-sm-21B-4s.png'],
        [5, "pique", 'https://upload.wikimedia.org/wikipedia/commons/8/86/Poker-sm-21A-5s.png'],
        [6, "pique", 'https://upload.wikimedia.org/wikipedia/commons/0/05/Poker-sm-219-6s.png'],
        [7, "pique", 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Poker-sm-218-7s.png'],
        [8, "pique", 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Poker-sm-217-8s.png'],
        [9, "pique", 'https://upload.wikimedia.org/wikipedia/commons/3/30/Poker-sm-216-9s.png'],
        [10, "pique", 'https://upload.wikimedia.org/wikipedia/commons/5/50/Poker-sm-215-Ts.png'],
        [11, "pique", 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Poker-sm-214-Js.png'],
        [12, "pique", 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Poker-sm-213-Qs.png'],
        [13, "pique", 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Poker-sm-212-Ks.png'],
        [14, "pique", 'https://upload.wikimedia.org/wikipedia/commons/3/35/Poker-sm-211-As.png'],

        [2, "coeur", 'https://upload.wikimedia.org/wikipedia/commons/2/20/Poker-sm-22D-2h.png'],
        [3, "coeur", 'https://upload.wikimedia.org/wikipedia/commons/8/80/Poker-sm-22C-3h.png'],
        [4, "coeur", 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Poker-sm-22B-4h.png'],
        [5, "coeur", 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Poker-sm-22A-5h.png'],
        [6, "coeur", 'https://upload.wikimedia.org/wikipedia/commons/7/72/Poker-sm-229-6h.png'],
        [7, "coeur", 'https://upload.wikimedia.org/wikipedia/commons/4/43/Poker-sm-228-7h.png'],
        [8, "coeur", 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Poker-sm-227-8h.png'],
        [9, "coeur", 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Poker-sm-226-9h.png'],
        [10, "coeur", 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Poker-sm-225-Th.png'],
        [11, "coeur", 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Poker-sm-224-Jh.png'],
        [12, "coeur", 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Poker-sm-223-Qh.png'],
        [13, "coeur", 'https://upload.wikimedia.org/wikipedia/commons/7/79/Poker-sm-222-Kh.png'],
        [14, "coeur", 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Poker-sm-221-Ah.png'],

        [2, "carreau", 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Poker-sm-23D-2d.png'],
        [3, "carreau", 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Poker-sm-23C-3d.png'],
        [4, "carreau", 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Poker-sm-23B-4d.png'],
        [5, "carreau", 'https://upload.wikimedia.org/wikipedia/commons/4/48/Poker-sm-23A-5d.png'],
        [6, "carreau", 'https://upload.wikimedia.org/wikipedia/commons/7/73/Poker-sm-239-6d.png'],
        [7, "carreau", 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Poker-sm-238-7d.png'],
        [8, "carreau", 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Poker-sm-237-8d.png'],
        [9, "carreau", 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Poker-sm-236-9d.png'],
        [10, "carreau", 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Poker-sm-235-Td.png'],
        [11, "carreau", 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Poker-sm-234-Jd.png'],
        [12, "carreau", 'https://upload.wikimedia.org/wikipedia/commons/7/70/Poker-sm-233-Qd.png'],
        [13, "carreau", 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Poker-sm-232-Kd.png'],
        [14, "carreau", 'https://upload.wikimedia.org/wikipedia/commons/b/be/Poker-sm-231-Ad.png'],

        [2, "trefle", 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Poker-sm-24D-2c.png'],
        [3, "trefle", 'https://upload.wikimedia.org/wikipedia/commons/3/32/Poker-sm-24C-3c.png'],
        [4, "trefle", 'https://upload.wikimedia.org/wikipedia/commons/9/90/Poker-sm-24B-4c.png'],
        [5, "trefle", 'https://upload.wikimedia.org/wikipedia/commons/4/48/Poker-sm-24A-5c.png'],
        [6, "trefle", 'https://upload.wikimedia.org/wikipedia/commons/1/15/Poker-sm-249-6c.png'],
        [7, "trefle", 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Poker-sm-248-7c.png'],
        [8, "trefle", 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Poker-sm-247-8c.png'],
        [9, "trefle", 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poker-sm-246-9c.png'],
        [10, "trefle", 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Poker-sm-245-Tc.png'],
        [11, "trefle", 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Poker-sm-244-Jc.png'],
        [12, "trefle", 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Poker-sm-243-Qc.png'],
        [13, "trefle", 'https://upload.wikimedia.org/wikipedia/commons/2/25/Poker-sm-242-Kc.png'],
        [14, "trefle", 'https://upload.wikimedia.org/wikipedia/commons/3/38/Poker-sm-241-Ac.png'],
    ]










    // On utilise la fonction distribution() pour distribuer le jeu
    distribution()
    

    // Lorsque le joueur appuie sur le bouton "#couche"
    $('#couche').click(function() {
        // On lui applique la classe ".couche"
        $('.tour').addClass('couche')

        // On lui vide ses cartes
        $('.tour').empty()

        // On change de joueur
        nextPlayer()
    })


    $('#envoyer').click(function() {
        // Incrémentation de i
        i++

        // Si i vaut 1
        if(i == 1) {
            // On enlève la classe ".tour" au dernier joueur
            $('.tour').removeClass('tour')

            // On ajoute la classe ".tour" à la petite blinde
            $('.petiteBlind').addClass('tour')

            // Si la petite blind est couchée
            if($('.petiteBlind').hasClass('couche')) {
                // On passe au joueur suivant
                nextPlayer()
            }

            // On effectue un tirage aléatoire
            a = Math.round(Math.random() * 39)

            // On affiche la 1ère carte
            $('.cartesZone').append('<img src=' + cartes[a][2] + ' class="carte">')
        
            // On ajoute la carte jouée dans le tableau cartesJouees
            cartesJouees.push(cartes[a])

            // On retire du jeu (cartes[]) la carte jouée 
            cartes.splice(a, 1)



            // On effectue un tirage aléatoire
            a = Math.round(Math.random() * 39)

            // On affiche la 2eme carte
            $('.cartesZone').append('<img src=' + cartes[a][2] + ' class="carte">')
        
            // On ajoute la carte jouée dans le tableau cartesJouees
            cartesJouees.push(cartes[a])

            // On retire du jeu (cartes[]) la carte jouée 
            cartes.splice(a, 1)



            // On effectue un tirage aléatoire
            a = Math.round(Math.random() * 39)

            // On affiche la 3eme carte
            $('.cartesZone').append('<img src=' + cartes[a][2] + ' class="carte">')
        
            // On ajoute la carte jouée dans le tableau cartesJouees
            cartesJouees.push(cartes[a])

            // On retire du jeu (cartes[]) la carte jouée 
            cartes.splice(a, 1)

        }

        // Si i vaut 2
        if(i == 2) {
            // On enlève la classe ".tour" au dernier joueur
            $('.tour').removeClass('tour')

            // On ajoute la classe ".tour" à la petite blinde
            $('.petiteBlind').addClass('tour')

            // Si la petite blind est couchée
            if($('.petiteBlind').hasClass('couche')) {
                // On passe au joueur suivant
                nextPlayer()
            }

            // On effectue un tirage aléatoire
            a = Math.round(Math.random() * 52)

            // On affiche le turn
            $('.cartesZone').append('<img src=' + cartes[a][2] + ' class="carte">')

            // On ajoute la carte jouée dans le tableau cartesJouees
            cartesJouees.push(cartes[a])

            // On retire du jeu (cartes[]) la carte jouée 
            cartes.splice(a, 1)
        }

        // Si i vaut 3
        if(i == 3) {
            // On enlève la classe ".tour" au dernier joueur
            $('.tour').removeClass('tour')

            // On ajoute la classe ".tour" à la petite blinde
            $('.petiteBlind').addClass('tour')

            // Si la petite blind est couchée
            if($('.petiteBlind').hasClass('couche')) {
                // On passe au joueur suivant
                nextPlayer()
            }

            // On effectue un tirage aléatoire
            a = Math.round(Math.random() * 52)

            // On affiche la rivière
            $('.cartesZone').append('<img src=' + cartes[a][2] + ' class="carte">')

        }

        // Si i vaut 4
        if(i==4) {
            // On applique la fonction newDeck()
            newDeck()
        }
        
    })



    // BOUTON NEXT 

    $('#next').click(function() {
        nextPlayer()
    })

    





                                    /* --------------------------------------------
                                    |                                             |
                                    |                FONCTIONS                    |
                                    |                                             |
                                    -------------------------------------------- */


    function distribution() {
        for(let k=0; k<2; k++) {
            for(let j = 0; j < joueurs.length; j++) {
    
                // On donne une carte avec la fonction nextCard()
                joueurs[j].push(nextCard(joueurs[j][0]))

                if(j != numerosJoueur) {
                    $(joueurs[j][0]).empty().append('<img src="../img/dosCartes.png" class="carte">').append('<img src="../img/dosCartes.png" class="carte">')
                }

            }
        }
    }

    function nextCard(cible) {
        // On effectue un tirage aléatoire
        a = Math.round(Math.random() * 39)
        console.log(a)

        // On affiche la carte
        $(cible).append('<img src=' + cartes[a][2] + ' class="carte">')
        
        // On ajoute la carte jouée dans le tableau cartesJouees
        cartesJouees.push(cartes[a])

        // On stock la carte jouée dans une variable "carte"
        var carte = cartes[a]

        // On retire du jeu (cartes[]) la carte jouée 
        cartes.splice(a, 1)

        // On retroune la carte
        return carte
    }


    function newDeck() {
        // On remet les cartes brulées dans le deck
        for(let j=0; j<cartesJouees.length; j++) {
            cartes.push(cartesJouees[j])
        }

        // On remet à 0 le tableau contenant les mains des joueurs
        for(let j=0; j<joueurs.length; j++) {
            joueurs[j].splice(1, 2)
            joueurs[j].splice(1, 1)
        }

        // On vide les mains des joueurs et on leur retire leurs classes
        $('.joueur').empty().removeClass('couche').removeClass('tour')

        // On vide le banc
        $('.cartesZone').empty()

        // On remet i à 0
        i = 0;


                // --- On change de dealer -- //

        // On initialise cible
        var dealer = $('.dealer')

        // On test si cible contient la classe ".joueur"
        if(dealer.next().hasClass('joueur')) {
            // On incrémente dealer de une div 
            dealer = dealer.next()
        } else {
            // Sinon on remet dealer sur le joueur 1
            dealer = $('#j1')
        }

        // On retire la classe ".dealer" à l'ancien dealer
        $('.dealer').removeClass('dealer')

        // On ajoute la classe ".dealer" à la variable dealer
        dealer.addClass('dealer')




                // --- On définit modifie les classes ".petiteBlind" ".grosseBlind" et ".tour" -- //

        // On initialise cible
        var cible = dealer

        // On fait le test 3 fois (car le 1er joueur à parler est 3 places après le dealer)
        for(let j=0; j<3; j++) {

            // On test si cible contient la classe ".joueur"
            if(cible.next().hasClass('joueur')) {
                // On incrémente cible de une div 
                cible = cible.next()
            } else {
                // Sinon on remet cible sur le joueur 1
                cible = $('#j1')
            }

            // Lors du premier tour de boucle, on ajoute le classe ".petiteBlind" à la cible
            if(j==0) {
                // On retire la classe ".petiteBlinde" à tous les joueurs
                $('.petiteBlind').removeClass('petiteBlind')

                // On ajoute le classe ".petiteBlinde" à la cible
                cible.addClass('petiteBlind')
            }

            // Lors du second tour de boucle, on ajoute le classe ".grosseBlinde" à la cible
            if(j==1) {
                // On retire la classe ".grosseBlinde" à tous les joueurs
                $('.grosseBlind').removeClass('grosseBlind')

                // On ajoute le classe ".grosseBlinde" à la cible
                cible.addClass('grosseBlind')
            }
        }

        // On met la classe ".tour" à la cible
        cible.addClass('tour')




        // On utilise la fonction distribution() pour redistribuer le jeu
        distribution()
        
    }



    // PASSER LE TOUR //

    function nextPlayer() {
        var recherche = true;

        var cible = $('.tour')

        while(recherche) {

            // On test si cible contient la classe ".joueur"
            if(cible.next().hasClass('joueur')) {
                // On incrémente cible de une div 
                cible = cible.next()
            } else {
                // Sinon on remet cible sur le joueur 1
                cible = $('#j1')
            }
            

        
            // On test si le joueur n'est pas couché 
            if(!(cible.hasClass('couche'))) {
                // On retire la classe ".tour" au joueur précédent
                $('.tour').removeClass('tour')

                // On ajoute la classe ".tour" au joueur suivant
                cible.addClass('tour')

                // On met recherche en false
                recherche = false;
            }
                
        }
    }



    // VOIR LES CARTES ADVERSES

    function voirCarte(player) {
        player.empty()

        var x = player.attr('id').charAt(2)

        for(let j=0; j<2; j++) {
            truc.append('<img src=' + joueurs[x][player.attr('id')][2] + ' class="carte">')
        }
    }
})