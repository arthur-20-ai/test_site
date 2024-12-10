<template>
        <br>
        <br>
        <br>
        <img class="image_contact" src="../../assets/paysage1.jpg" alt="secteurs">
        <br>
        <br>
        <div class="bandeau_titre">
            <div class="partenaire_titre">Contact</div>
            <div class="barre_blanche"></div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <div class="text-contact">
            <li class="text-contact1">Construction Nanceiènne de Pesage - CNP SARL</li>
            <br>
            <li class="text-contact1">27 Rue André Fruchard, <br>
            54320 Maxéville <br>
            France</li>
            <br>
            <li class="text-contact1">Téléphone: +33 3 83 30 14 44</li>
            <br>
            <li class="text-contact1">Mail: <a href="mailto:arthur1schuster@gmail.com" class="lien-mail">cnp@cnp-pesage.com</a> <br>

            </li>
            <br>
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
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="form-devis-contact">
            <form class="form-contact" action="https://formsubmit.co/arthur1schuster@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="Demande de Contact !">
                <c>Nom :</c>
                <input type="text" name="Nom" required placeholder="Nom*">
                <c>Prenom :</c>
                <input type="text" name="Prenom" required placeholder="Prenom*">
                <c>Nom d'entreprise :</c>
                <input type="text" name="Entreprise" required placeholder="Nom d'entreprise*">
                <c>Adresse :</c>
                <input type="text" name="Adresse" required placeholder="Adresse*">
                <c>Adresse email :</c>
                <input type="email" name="email" required placeholder="Addresse Email*">
                <c>Numéro de téléphone :</c>
                <input type="text" name="Numéro de téléphone" required placeholder="Numéro de téléphone*">
                <c>Votre demande de Contact :</c>
                <textarea type="text" name="Demande" required placeholder="Objet de votre demande de contact*"></textarea>
                <button class="button-contact" type="submit">Envoyer</button>
                <input type="hidden" name="_replyto" value="Merci pour votre demande de Devis ou d'information et bienvenu chez CNP.">
                <input type="hidden" name="_autoresponse" value="Merci pour votre demande de Devis ou d'information et bienvenu chez CNP.">
                <input type="hidden" name="_template" value="box">
            </form>
        </div>
        <br>
        <br>
        <!-- Nom, pénom, Nom d'entreprise, adresse, adresse mail, numéro de telephone, Objet de la demande -->

</template>


<style>
h1 {
    text-align: center;
}

.image_contact {
    position: relative;
    width: 107%;
    height: 700px;
    top: -100px;
    left: -32px;
}

    .lien-mail {
        transition: 0.5s ease-in-out;
    }

    .lien-mail:hover {
        color: red;
    }

    .text-contact {
        position: relative;
        width: 400px;
        height: 270px;
        left: 400px;
        background-color: rgba(18, 62, 99, 0.1);
        border: 6px solid black;
        font-size: 18px;
        text-align: left;
        transition: 0.5s ease-in-out;
    }

    .text-contact:hover {
        transform: scale(1.2);
        background-color: rgba(18, 62, 99, 0.9);
        color: white;
        border-radius: 18px;
    }
    .text-contact:hover .lien-mail {
    color: white; /* Choisissez la couleur désirée pour le texte du lien */
}

.text-contact1 {
    list-style-type: none; /* Supprime les puces */
    padding: 0; /* Optionnel : enlève le padding gauche par défaut */
    margin: 10px; /* Optionnel : enlève le margin par défaut */
}

c {
    pointer-events: none;
    font-size: 20px;
    text-align: left;
    color: white;
}

div {
    text-align: center;
}


.form-devis-contact {
    display: block;
    justify-content: center;  /* Centrer le formulaire au milieu de la page */
    align-items: center;
    width: 1000px;
    transition: 0.5s ease-in-out;
}

.form-contact {
    display: flex;
    flex-direction: column;  /* Les inputs les uns sous les autres */
    width: 1000px;  /* Largeur du formulaire */
    padding: 70px;
    background-color: #123E63;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Légère ombre pour le style */
    position: relative;
    bottom: 150px;
    left: 40px;
}

input[type="text"],
input[type="email"],
textarea {
    margin-bottom: 30px;  /* Espace de 10px entre chaque élément */
    padding: 30px;
    border-radius: 8px;  /* Bords arrondis */
    border: 1px solid #ccc;  /* Bordure légère */
    font-size: 16px;
    width: 100%;  /* Occupe toute la largeur disponible */
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

.button-contact {
    background-color: #123E63;  /* Couleur du bouton */
    color: white;
    border: 2px solid white;
    border-radius: 12px;
    cursor: pointer;
    font-size: 18px;
    transition: 0.5s ease-in-out;

}

.button-contact:hover {
    background-color: #45a049;  /* Couleur du bouton au survol */
    text-decoration: underline;
}

.button-contact:active {
    transform: scale(0.8);
}

input::placeholder, textarea::placeholder {
    color: #aaa;  /* Couleur des placeholders */
}

</style>