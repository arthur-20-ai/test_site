<template>

    <img class="image-quisommesnous" src="../../assets/mention-legal.jpg" alt="secteurs">
    <br>
    <br>
    <div class="bandeau_titre">
            <div class="partenaire_titre">Mentions Légales</div>
            <div class="barre_blanche"></div>
        </div>
    <br>
    <br>
    <br>
    <br>
    <div class="box-mention-legal">

        <div class="text-mention-legal">
            <li class="toti">CNP (Construction Nanceeinnes de Pesage)</li>
            <li class="toti">27 RUE ANDRE FRUCHARD, <br>54320 Maxeville FRANCE</li>
            <li class="toti">SIRET: 33307326000015</li>
            <li class="toti">Directeur de la publication: M. GORSE Adrien</li>
            <li class="toti">Hébergé par: on ne sait pas encore</li>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    </template>


<style>

.toti {
    list-style-type: none; /* Supprime les puces */
    padding: 0; /* Optionnel : enlève le padding gauche par défaut */
    margin: 10px; /* Optionnel : enlève le margin par défaut */
}

.box-mention-legal {
    position: relative;
    width: 600px;
    height: 300px;
    left: 305px;
    background-color: rgba(18, 62, 99, 0.3);
    border: 2px solid black;
    border-radius: 10px;
    transition: 0.5s ease-in-out;
}

.box-mention-legal:hover {
    transform: scale(1.2);
    background-color: rgba(18, 62, 99, 0.9);
    color: white;
}

.text-mention-legal {
    position: relative;
    width: 500px;
    height: 200px;
    left: 50px;
    top: 45px;
    text-align: left;
    font-size: 25px;
}

</style>