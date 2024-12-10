
<template>
    <div class="img-ps">photo pb</div>
    <h1>Pesage Statique</h1>
        <br>
        <br>
        <br>

        <!-- faire photo pb defilante vers la gauche, css only ou un peu de js (métalique, metalobéton, béton, pont bascule fosse, hors sol + diff hauteur) -->


        <div>
        <div class="img-pb">
            <div class="slider-statique">
                <div class="slider-s">
                    <div class="slide-s"><img src="../../assets/photo/pb/image_pb_1.png" alt="Image 1" /></div>
                    <div class="slide-s"><img src="../../assets/photo/pb/pont_bascule_3.jpg" alt="Image 2" /></div>
                    <div class="slide-s"><img src="../../assets/photo/pb/pont_bascule_fosse.png" alt="Image 3" /></div>
                    <div class="slide-s"><img src="../../assets/photo/pb/pont_bascule_hors_sol.png" alt="Image 4" /></div>


                    <div class="slide-s"><img src="../../assets/photo/pb/image_pb_1.png" alt="Image 1" /></div>
                    <div class="slide-s"><img src="../../assets/photo/pb/pont_bascule_3.jpg" alt="Image 2" /></div>
                    <div class="slide-s"><img src="../../assets/photo/pb/pont_bascule_fosse.png" alt="Image 3" /></div>
                    <div class="slide-s"><img src="../../assets/photo/pb/pont_bascule_hors_sol.png" alt="Image 4" /></div>                </div>
            </div>
        <!--<div class="banner">
            <div class="slider" style="--quantity: 4">
            <div class="item" style="--position: 1"><img src="../../assets/photo/pb/image_pb_1.png" alt=""></div>
            <div class="item" style="--position: 2"><img src="../../assets/photo/pb/pont_bascule_3.jpg" alt=""></div>
            <div class="item" style="--position: 3"><img src="../../assets/photo/pb/pont_bascule_fosse.png" alt=""></div>
            <div class="item" style="--position: 4"><img src="../../assets/photo/pb/pont_bascule_hors_sol.png" alt=""></div>
        </div> -->
                pont bascule</div>
            <div class="text-pb">Les ponts bascules CNP sont de construction mondiale de type compact à capteurs de pesage. <br> <br>
            Ils existent en version encastrée ou hors sol, de faible hauteur, ils peuvent être facilement mis en place, avec ou sans génie civil.</div>
        </div>
        <br>
        <br>
        <div>
            <div class="img-silo">pesage embarqué</div>
            <div class="text-silo">Le système CNP s'adapte très facilement sur tous type  de chargeur télescopiques (Manitou, JCB, Merlo... ) et permet une accroche rapide des différents outils ( fourches, godets, pinces... ).</div>
        </div>
        <div>
            <div class="text-carre1">text humidimetre</div>
            <div class="img-carre1"></div>
            <div class="text-carre2">text proteine</div>
            <div class="img-carre2"></div>
        </div>
        <br>
        <h1 style="text-decoration: underline;">Demande de devis ou contact :</h1>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="form-devis">
            <form action="https://formsubmit.co/arthur1schuster@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="Devis Pesage Statique !">
                <b>Nom :</b>
                <input type="text" name="Nom" required placeholder="Nom*">
                <b>Adresse mail :</b>
                <input type="email" name="email" required placeholder="Email Address*">
                <b>Numéro de téléphone :</b>
                <input type="text" name="Numéro de téléphone" required placeholder="Numéro de téléphone*">
                <b>Entreprise :</b>
                <input type="text" name="Entreprise" required placeholder="Entreprise*">
                <b>Votre demande de contact ou de devis :</b>
                <textarea type="text" name="Demande" required placeholder="Votre demande de devis ou d'informations.*"></textarea>
                <button type="submit">Envoyer</button>
                <input type="hidden" name="_replyto" value="Merci pour votre demande de Devis ou d'information et bienvenu chez CNP.">
                <input type="hidden" name="_autoresponse" value="Merci pour votre demande de Devis ou d'information et bienvenu chez CNP.">
                <input type="hidden" name="_template" value="box">
            </form>
        </div>
</template>


<style>

h1 {
    text-align: center;
}
.slider-statique {
    position: relative;
    width: 368px; /* Largeur du conteneur */
    height: 260px; /* Hauteur du conteneur */
    overflow: hidden; /* Cache le débordement des images */
    border: 1px solid #000000; /* Bordure */
}

.slider-statique .slider-s {
    display: flex; /* Disposition horizontale des slides */
    height: 100%;
    width: 100%;
    zoom: 50%;
    animation: slider-horizontal 15s linear infinite; /* Animation fluide et continue */
}

.slider-statique .slide-s {
    flex-shrink: 0;
    width: 1068px; /* Chaque slide occupe exactement la largeur du conteneur */
    height: 100%;
}

.slider-statique .slide-s img {
    width: 100%; /* Ajuste les images pour remplir chaque slide */
    height: 100%; /* Ajuste la hauteur des images */
    object-fit: cover; /* Ajuste les images à leur conteneur */
}

@keyframes slider-horizontal {
    0% {
        transform: translateX(0); /* Position de départ */
    }
    100% {
        transform: translateX(-500%); /* Finit à la fin de toutes les slides */
    }
}

.banner{
    width: 100%;
    height: 100vh;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.banner .slider{
    position: absolute;
    width: 200px;
    height: 255px;
    left: calc(50% - 100px);
    border-radius: 15px;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    animation: autoRun 20s linear infinite;
    z-index: 2;
}

@keyframes autoRun{
    from{
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
    }to{
        transform: perspective(1000px) rotateX(0deg) rotateY(120deg);
    }to{
        transform: perspective(1000px) rotateX(0deg) rotateY(240deg);
    }to{
        transform: perspective(1000px) rotateX(0deg) rotateY(360deg);
    }
}

.banner .slider .item{
    position: absolute;
    inset: 0 0 0 0;
    transform: 
        rotateY(calc((var(--position) - 1) * 90deg))
        translateZ(300px);
}

.banner .slider .item img{
    width: 150%;
    border-radius: 15px;
    height: 100%;
    object-fit: cover;
}
.banner .content{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: min(1400px, 100vw);
    height: max-content;
    padding-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
}
.banner .content h1{
    font-family: 'ICA Rubrik';
    font-size: 16em;
    line-height: 1em;
    color: #25283B;
    position: relative;
}

.banner .content h1::after{
    position: absolute;
    inset: 0 0 0 0;
    content: attr(data-content);
    z-index: 2;
    -webkit-text-stroke: 2px #d2d2d2;
    color: transparent;
}
.banner .content .author{
    font-family: Poppins;
    text-align: right;
    max-width: 200px;
}
.banner .content h2{
    font-size: 3em;
}
.banner .content .model{
    width: 100%;
    height: 75vh;
    position: absolute;
    bottom: 0;
    left: 0;
    background-size: auto 130%;
    background-repeat: no-repeat;
    background-position: top center;
    z-index: 1;
}

.img-ps {
    position: relative;
    width: 1370px;
    height: 650px;
    top: -10px;
    left: -40px;
    margin: 0px auto;
    overflow: hidden;
    border: 1px solid #000000;
}


.img-pb {
    position: relative;
    width: 370px;
    height: 260px;
    border: 2px solid black;
    border-color: black;
    border-radius: 15px;
    text-align: center;
    color: black;
    left: 50px;
    bottom: -100px;
    object-fit: cover; /* Adapte l'image pour remplir le conteneur sans distorsion */
    overflow-y: hidden;
    transition: 0.5s ease-in-out;
}

.img-pb:hover {
    transform: scale(1.8);
    left: 180px;
}

.text-pb {
    position: relative;
    width: 370px;
    height: 260px;
    border: 2px solid black;
    border-color: black;
    border-radius: 15px;
    text-align: center;
    color: black;
    left: 750px;
    bottom: 160px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16px;
    transition: 0.5s ease-in-out;
    background-color: rgba(18, 62, 99, 0.5);
    overflow-y: auto;
    display: flex;               /* Active Flexbox */
    justify-content: center;      /* Centre horizontalement */
    align-items: center;        
    transition: 0.5s ease-in-out;
}

.text-pb:hover {
    color: white;
    background: #123E63;
    transform: scale(1.1);
}

.text-silo {
    position: relative;
    width: 370px;
    height: 260px;
    border: 2px solid black;
    border-color: black;
    border-radius: 15px;
    text-align: center;
    color: black;
    left: 50px;
    bottom: 160px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16px;
    transition: 0.5s ease-in-out;
    background-color: rgba(18, 62, 99, 0.5);
    overflow-y: auto;
    display: flex;               /* Active Flexbox */
    justify-content: center;      /* Centre horizontalement */
    align-items: center;        
    transition: 0.5s ease-in-out;
}

.img-silo {
    position: relative;
    width: 370px;
    height: 260px;
    border: 2px solid black;
    border-color: black;
    border-radius: 15px;
    text-align: center;
    color: black;
    left: 750px;
    bottom: -100px;
    overflow-y: auto;
    transition: 0.5s ease-in-out;
}

.img-silo:hover {
    transform: scale(1.2);
}

.text-silo:hover {
    color: white;
    background: #123E63;
    transform: scale(1.1);
}

.text-carre1 {
    position: relative;
    width: 370px;
    height: 260px;
    border: 2px solid black;
    border-top-left-radius: 15px;
    border-color: black;
    text-align: center;
    color: black;
    left: 225px;
    bottom: -40px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16px;
    transition: 0.5s ease-in-out;
    background-color: #123e6380;
    overflow-y: auto;
    transition: 0.5s ease-in-out;
    display: flex;               /* Active Flexbox */
    justify-content: center;      /* Centre horizontalement */
    align-items: center;        
}

.text-carre1:hover {
    border-radius: 25px;
    color: white;
    background: #123E63;
    transform: scale(1.1) translateX(-30px) translateY(-30px);
}

.img-carre1 {
    position: relative;
    width: 370px;
    height: 260px;
    border: 2px solid black;
    border-color: black;
    border-top-right-radius: 15px;
    text-align: center;
    color: black;
    left: 597px;
    bottom: 224px;
    overflow-y: auto;
    transition: 0.5s ease-in-out;
}

.img-carre1:hover {
    transform: scale(1.2) translateX(40px) translateY(-30px);
    border-radius: 25px;
}

.text-carre2 {
    position: relative;
    width: 370px;
    height: 260px;
    border: 2px solid black;
    border-bottom-right-radius: 15px;
    border-color: black;
    text-align: center;
    color: black;
    left: 597px;
    bottom: 226px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16px;
    transition: 0.5s ease-in-out;
    background-color: rgba(18, 62, 99, 0.5);
    overflow-y: auto;
    display: flex;               /* Active Flexbox */
    justify-content: center;      /* Centre horizontalement */
    align-items: center;        
}

.text-carre2:hover {
    transform: scale(1.1) translateX(30px) translateY(30px);
    border-radius: 25px;
    color: white;
    background: #123E63;
}

.img-carre2 {
    position: relative;
    width: 370px;
    height: 260px;
    border: 2px solid black;
    border-bottom-left-radius: 15px;
    border-color: black;
    text-align: center;
    color: black;
    left: 225px;
    bottom: 490px;
    transition: 0.5s ease-in-out;
    overflow-y: auto;
}

.img-carre2:hover {
    transform: scale(1.2) translateX(-40px) translateY(30px);
    border-radius: 25px;
}

.form-devis {
    display: flex;
    justify-content: center;  /* Centrer le formulaire au milieu de la page */
    align-items: center;
    width: auto;
    transition: 0.5s ease-in-out;
}

.form-devis:hover {
    transform: scale(1.1);
}

form {
    display: flex;
    flex-direction: column;  /* Les inputs les uns sous les autres */
    width: 300px;  /* Largeur du formulaire */
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Légère ombre pour le style */
    position: relative;
    bottom: 150px;
}

input[type="text"],
input[type="email"],
textarea,
button {
    margin-bottom: 10px;  /* Espace de 10px entre chaque élément */
    padding: 10px;
    border-radius: 8px;  /* Bords arrondis */
    border: 1px solid #ccc;  /* Bordure légère */
    font-size: 16px;
    width: 100%;  /* Occupe toute la largeur disponible */
    box-sizing: border-box;  /* Inclure padding dans la largeur totale */
}

textarea {
    height: 150px;  /* Hauteur plus grande pour la zone de texte */
    width: 100%;  /* Occupe toute la largeur disponible */
    resize: none;  /* Empêche l'utilisateur de redimensionner */
    border-radius: 8px;  /* Bords arrondis */
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    box-sizing: border-box;  /* Inclure padding dans la largeur/hauteur */
    line-height: 1.5;  /* Espacement des lignes */
    overflow-y: auto;  /* Barre de défilement verticale si nécessaire */
}

button {
    background-color: #123E63;  /* Couleur du bouton */
    color: white;
    border: none;
    cursor: pointer;
    font-size: 18px;
}

button:hover {
    background-color: #45a049;  /* Couleur du bouton au survol */
    text-decoration: underline;
}

button:active {
    transform: scale(0.8);
}

input::placeholder, textarea::placeholder {
    color: #aaa;  /* Couleur des placeholders */
}

div {
    text-align: center;
}
</style>