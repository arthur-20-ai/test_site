<template>
    <img class="image-quisommesnous" src="../../assets/humidimetre.jpg" alt="secteurs">
    <br>
    <div class="bandeau_titre">
        <div class="partenaire_titre">Humidimètre</div>
        <div class="barre_blanche"></div>
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
        <div>
            <div class="hexa-cont">

                <div class="hexa-humi"> <img class="image-humi" src="../../assets/photo/humidimetre.jpg" alt="humidimetre"></div>
            </div>
            <div class="text-pb">
                Nous proposons la vente et l'installation d'humidimètres, permettant de mesurer la teneur en humidité de vos produits (graines, blé, farine, etc.). Cette mesure est essentielle pour déterminer le poids exact de vos produits, en tenant compte de leur taux d'humidité. 
            </div>
            <div class="img-silo"> <img class="image-humi" src="../../assets/photo/analyse_prot.jpg" alt="humidimetre"></div>
            <div class="text-silo">
                L'analyseur de protéines mesure rapidement la teneur en protéines des produits, garantissant précision et fiabilité. Utilisé dans des secteurs comme l'agroalimentaire et la recherche, il assure le contrôle qualité et optimise les processus de production.            </div>
        </div>
    <h1 style="text-decoration: underline;">Demande de devis ou contact :</h1>
    <br>
    <br>
    <br>
    <!-- analyseur de proteine
     pour determiner la qualité d'un grain, exemple on peut determiner si l'on fait de la farine ou à donner aux animaux.
        -->
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
                <input type="hidden" name="_subject" value="Devis Humidimettre ou analyse de prott !">
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
    <br>
    <br>
    <br>
    <br>
</template>


<style>

.hexa-cont {
    position: relative;
    width: 30vw; /* Largeur de l'hexagone */
    height: calc(30vw * 0.866); /* Hauteur de l'hexagone (proportion régulière) */
    clip-path: polygon(
        25% 0%, 
        75% 0%, 
        100% 50%, 
        75% 100%, 
        25% 100%, 
        0% 50%
    );
    background: #000; /* Couleur de la bordure */
}

.hexa-humi {
    position: absolute;
    width: 95%; /* Légèrement plus petit que le conteneur pour laisser la bordure visible */
    height: 95%; /* Même proportion que ci-dessus */
    top: 2.5%; /* Centre l'image à l'intérieur de la bordure */
    left: 2.5%;
    clip-path: inherit; /* Applique la même forme à l'image */
    overflow: hidden; /* Masque les débordements */
}

.hexa-humi img {
    width: 100%; /* Adapte la largeur de l'image à celle du conteneur */
    height: 100%; /* Adapte la hauteur de l'image */
    object-fit: cover; /* Remplit le conteneur sans déformer l'image */
}

</style>