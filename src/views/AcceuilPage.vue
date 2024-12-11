<template>
    <div>
        <div class="slider-container slider-2">
    <input type="radio" name="slider" id="slide1" checked>
    <input type="radio" name="slider" id="slide2">
    <input type="radio" name="slider" id="slide3">
    <input type="radio" name="slider" id="slide4">
    <div class="slider">
        <div class="slide">
            <div class="wrapper">
                <div class="text-rect"></div>
                <div class="titre-acc">C N P :</div>
                <div class="text-acc">Construction Nanceeinnes de Pesage depuis 1985.
                    <router-link to="/QuiSommesNous">Découvrir</router-link>
                </div>
                <!-- <div class="button-decouvrir">Découvrir</div> -->
            </div>
            <img class="image-acc" src="../../assets/photo/Pont_bascule.jpg" alt="image 1">
        </div>
        <div class="slide">
            <img class="image-acc" src="../../assets/photo/Pont_rail.jpg" alt="image 2">
        </div>
        <div class="slide">
            <img class="image-acc" src="../../assets/photo/Pont_bascule2.jpg" alt="image 3">
        </div>
        <div class="slide">
            <img class="image-acc" src="../../assets/photo/instal_pontbs.jpg" alt="image 4">
        </div>
        <div class="slide">
            <img class="image-acc" src="../../assets/photo/Pont_bascule.jpg" alt="image 1">
        </div>
    </div>
    </div>
        <br>
        <br>
        <br>
        <br>
        <div class="pres-cnp"> 
            CNP, expert en pesage et mesure, propose aux industriels une large gamme de produits alliant fiabilité, performance et simplicité d'utilisation. Que ce soit pour des applications standards ou spécifiques, nos solutions répondent aux exigences les plus pointues, garantissant à la fois précision et haute technicité.        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1>Nos Spécialitées :</h1>
        <br>
        <br>
        <div class="triangleacc-container">
            <router-link to="/PesageStatique">
            <div class="triangleacc triangle1">
                    <div class="label">Pesage Statique</div>
                </div>
            </router-link>
            <router-link to="/PesageDynamique">
            <div class="triangleacc triangle2">
                <div class="label">Pesage Dynamique</div>
            </div>
        </router-link>
        <router-link to="/Humidimetre">
            <div class="triangleacc triangle3">
                <div class="label">Humidimètre et analysateur <br> de protéine</div>
            </div>
        </router-link>
        </div>
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
        <br>
        <h1>Nos Secteurs:</h1>
        <br>
        <br>
        <img class="secteur" src="../../assets/secteurs.png" alt="secteurs">
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
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>


<style>
h1 {
    text-align: center;
}

/* div {
    text-align: center;
} */


/* Conteneur pour centrer les triangles */
.triangleacc-container {
    display: flex;
    justify-content: center;
    gap: 5em;
}

.triangleacc-container a:link,
.triangleacc-container a:visited,
.triangleacc-container a:hover,
.triangleacc-container a:active {
    color: inherit; /* Garde la couleur de la bordure et du texte */
    text-decoration: none; /* Retire le soulignement */
}

.triangleacc {
    width: 20em; /* Largeur de la forme */
    height: 18em; /* Hauteur de la forme */
    background-size: cover; /* Fait en sorte que l’image remplisse le conteneur */
    background-position: center;
    border: 1px solid black;
    clip-path: polygon(
        25% 0%,    /* Coin supérieur gauche */
        75% 0%,    /* Coin supérieur droit */
        100% 50%,  /* Milieu du côté droit */
        75% 100%,  /* Coin inférieur droit */
        25% 100%,  /* Coin inférieur gauche */
        0% 50%     /* Milieu du côté gauche */
    );
    transition: clip-path 1s ease-in-out, border-radius 0.2s ease-in-out;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}


.triangle1 {
    background-image: url('../../assets/photo/Pont_bascule.jpg');

}

.triangle2 {
    background-image: url('../../assets/photo/Pont_rail.jpg');
    bottom: -10em;
}

.triangle3 {
    background-image: url('../../assets/photo/analyse_prot.jpg');
    background-size: 110%; /* Dézoomer en augmentant la taille de l’image */
    background-position: center;
}

/* Transformation en cercle au survol */
.triangleacc:hover {
    border-radius: 80%;
    border: 2px solid black;
    clip-path: circle(45%);
    transform: scale(1.1);
}

/* Bandeau avec texte en bas du triangle */
.triangleacc .label {
    position: absolute;
    bottom: 0em;
    width: 100%;
    padding: 1em 0;
    background-color: #123e63cc; /* Couleur du bandeau bleu */
    color: white;
    text-align: center;
    font-size: 90%;
    z-index: 3;
}

.label:hover {
    text-decoration: underline;
}

.router-link:hover {
    color: #000000;
    border:#000000;
}

.triangleacc:active {
    transform: scale(0.9);
}

.pres-cnp {
    width: 30em;
    padding-left: 9em;
    text-align: center;
    font-size: 155%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.text-rect {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    height: 200px;
    width: 1000px;
    left: 150px;
    bottom: 200px;
    z-index: 7;
    transition: 0.5s ease-in-out;
}

.text-acc {
    position: absolute;
    text-align: center;
    font-style: oblique;
    left: 150px;
    bottom: 300px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 220%;
    color: rgb(255, 255, 255);
    z-index: 8;
    transition: 0.5s ease-in-out;
}

.wrapper:hover .text-rect,
.wrapper:hover .text-acc {
    transform: scale(1.05);
}

.wrapper:hover .titre-acc {
    transform: translateX(-15px) scale(1.05); /* Adjust the 20px to how far you want it to move */
}

.titre-acc {
    position: absolute;
    text-align: center;
    text-decoration: underline;
    left: 4em;
    bottom: 7.8em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 280%;
    color: rgb(255, 255, 255);
    z-index: 8;
    transition: 0.5s ease-in-out;
}

.image-acc {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-image-outset: 10px;
    position: relative;
    top: -10px;
    left: -40px;
    width: 1277px;
    height: 657px;
    align-items: center; */
}

.secteur {
    align-items: center;
    transition: 0.5s ease-in-out;
}

.secteur:hover {
    transform: scale(1.1);
}

.titres {
    font-size: 150%;
    text-decoration: underline;
    text-align: center;
    color: #123E63;
}

.slider-2 {
    position: relative;
    width: 120%;
    height: 40em;
    top: -0.6em;
    left: -2em;
    margin: 0px auto;
    overflow: hidden;
    border: 1px solid #000000;
}
.slider-2 .slider {
  height: 100%;
  animation: slider-2 15s infinite ease-in-out;
  /* Pour inverser l'animation */
  /* display: flex; 
  flex-direction: column-reverse; */
}

.slider-2 .slide {
    flex-shrink: 0;
    height: 100%;
    width: 100%;
}

.slider-2 p {
  /* flex-shrink: 0; */
  /* padding: 72px 0; */
  width: 100%;
  text-align: center;
  font-size: 45px;
  color: #f1f1f1;
}


@keyframes slider-2 {
  0%,
  20% {
    transform: translateY(0);
  }
  25%,
  45% {
    transform: translateY(-100%);
  }
  50%,
  70% {
    transform: translateY(-200%);
  }
  75%,
  95% {
    transform: translateY(-300%);
  }
  100% {
    transform: translateY(-400%);
  }
}


/* Hide the radio buttons */
input[type="radio"] {
    display: none;
}

/* Use the :checked pseudo-class to control the Y-axis movement */
#slide1:checked ~ .slider {
    transform: translateY(0);
}

#slide2:checked ~ .slider {
    transform: translateY(-100%);
}

#slide3:checked ~ .slider {
    transform: translateY(-200%);
}

#slide4:checked ~ .slider {
    transform: translateY(-300%);
}

</style>