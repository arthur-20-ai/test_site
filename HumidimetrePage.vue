<template>
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
    <h1>humidimetre</h1>
        <div>
            <div class="text-carre1">Nous vendons et installons des humidimètre afin de pouvoir determiné la quantité d'humidité dans vos produits (graines, blés, farine, etc...), afin de pouvoir determiner le poid exacte de vos produits.</div>
            <div class="img-carre1"> <img class="image-humi" src="../../assets/photo/humidimetre.jpg" alt="humidimetre"></div>
            <div class="text-carre2">Mardi appel cnp pour les analisateur de proteine</div>
            <div class="img-carre2"> <img class="image-humi" src="../../assets/photo/analyse_prot.jpg" alt="humidimetre"></div>
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

.image-humi {
    position: relative;
    object-fit: fill;
    width: 370px;
    height: 256px;
    top: 2px;
    overflow-y: hidden;
}

</style>