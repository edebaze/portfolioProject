<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Encodage pour les accents -->
        <meta charset="UTF-8">
        
        <!-- Titre de la Page -->
        <title>Javascript | Multiples Formulaires</title>

        <!-- Pour Internet Explorer : S'assurer qu'il utilise la dernière version du moteur de rendu -->
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <!-- Affichage sans zoom pour les mobiles -->
        <meta name="viewport" content="width=device-width, init-scale=1">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <!-- Styles CSS -->
        <link rel="stylesheet" href="../css/style.css">

        <!--  Font Awesome | Icons -->
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

        <!-- HTML5 Shiv & Respond JS -->
        <!--[if lt IE 9]>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" integrity="sha256-3Jy/GbSLrg0o9y5Z5n1uw0qxZECH7C6OQpVBgNFYa0g=" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js" integrity="sha256-g6iAfvZp+nDQ2TdTR/VVKJf3bGro4ub5fvWSWVRi2NE=" crossorigin="anonymous"></script>
        <![endif]-->
    </head>


    <body>
        

        <div class="table">
            <div class="joueur dealer" id="j1"></div>
            <div class="joueur petiteBlind" id="j2"></div>
            <div class="joueur grosseBlind" id="j3"></div>
            <div class="joueur tour" id="j4"></div>
            <div class="joueur" id="j5"></div>
            <div class="joueur" id="j6"></div>
            <div class="joueur" id="j7"></div>
            <div class="joueur" id="j8"></div>

            <div class="cartesZone"></div>

            <input type="button" id="couche" value="se coucher">
            <input type="button" id="next" value="check/suivre">
            <input type="button" id="envoyer" value="cartes">

            <strong class="pot">POT : <span>0</span></strong>
        </div>




         <!-- jQuery CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

        <!-- Bootstrap JS -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>        

        <!-- Javascript -->
        <script src="../js/java.js"></script>
    </body>
</html>