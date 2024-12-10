<template>
    <div>
      <br>
      <br>
      <br>
      <br>

        <h1>Services et Prestations</h1>
        <!-- <router-link to="/Contact"> Contact</router-link> -->

        <br>
        <div class="prestation">
        <br>
        <br>
          <div class="premier-texte">Les prestation réalisé par CNP sont :
            <li class="text-prestation">Vérifications périodiques et entretien des instruments de pesage <br>
              Notre entreprise assure la vérification périodique de vos instruments de pesage, un service obligatoire
               pour garantir la conformité légale de vos équipements. Si vos produits sont directement lié à la vente
               au public, une vérification est requise tous les 2 ans pour les instruments ayant une portée inférieure
               à 30 kg, et tous les ans dans les autres cas. Pour les instruments de plus de 5 tonnes, une vérification
               annuelle est obligatoire, accompagnée d'une révision périodique tous les 2 ans (vignette verte à apposer
               sur l'équipement). Nous proposons également des services de réparations et de maintenance pour tous types
               de dispositifs de pesage afin d’assurer leur bon fonctionnement et leur précision en toute circonstance.</li>
            <br>
            <li class="text-prestation">Vente et contrôle interne de matériel de pesage <br>
              Nous vous offrons une large gamme de balances et instruments de pesage, adaptés à tous les besoins :
               des balances de précision, des balances poids-prix, des balances industrielles, des ponts bascules pour
               poids lourds, des ponts rails, ainsi que des systèmes de pesage pour silos et camions de poubelle. En plus
               de la vente, nous assurons des contrôles internes et des services de dépannage pour tous ces équipements,
               garantissant ainsi leur conformité et leur efficacité. Notre expertise permet de répondre aux exigences
               spécifiques de chaque client, qu'il s'agisse de petites entreprises ou de grandes installations industrielles.</li>
            <br>
          </div>
        </div>
        <h1 style="text-decoration: underline;">Demande de Services:</h1>
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
                <input type="hidden" name="_subject" value="Demande de service !">
                <b>Nom :</b>
                <input type="text" name="Nom" required placeholder="Nom*">
                <b>Adresse mail :</b>
                <input type="email" name="email" required placeholder="Email Address*">
                <b>Numéro de téléphone :</b>
                <input type="text" name="Numéro de téléphone" required placeholder="Numéro de téléphone*">
                <b>Entreprise :</b>
                <input type="text" name="Entreprise" required placeholder="Entreprise*">
                <b>Votre demande de service :</b>
                <textarea type="text" name="Demande" required placeholder="Votre demande de service.*"></textarea>
                <button type="submit">Envoyer</button>
                <input type="hidden" name="_replyto" value="Merci pour votre demande de Service !">
                <input type="hidden" name="_autoresponse" value="Merci pour votre demande de Service !">
                <input type="hidden" name="_template" value="box">
            </form>
        </div>
        <!-- prestation -->
        <!-- VP : verification périodique -->
        <!-- vp obligatoir tous les 2 ans si vente direct au public, pour les portées inferieur à 30kg et tous les ans  dans tous les autres cas, pour les instruments de plus de 5t une vp tous les ans et une vp + revision périodique tous les 2 ans. (vignette verte)  -->
        <!-- controle intern, réparation tous type de pesage, 
        Vente de balance (balance de presision, poids prix / jusqu'aux / balance indus, pont bascule,  pont rail, pesage de silos, camion de poubelle) ainsi que des controles intern sur le meme type de matériels -->
        
        <!-- réparation | -->

        <!-- mesure d'humidité (humidimètre et proteine) -->
        <!-- proteine determine le taux de prot, humidimettre sert à mesurer le taux d'humidité dans differentes céréals -->
        
        <br>
        <br>
        <!-- Obligation des utilisateurs -->
         <!-- 5 points
           1- Faire verifier ses instruments à usage réglementé :
              - Tous les 2 ans pour la vente direct au public de portée inférieur ou égale à 30kg
              - Tous les ans, dans les autres cas
          
           2- S'assurer :
              - 
         -->

    </div>
</template>


<style>
h1 {
    text-align: center;
}

div {
    text-align: center;
}

.premier-texte {
  text-align: left;
  font-size: 20px;
}

.prestation {
  text-align: left;
}

.text-prestation {
  list-style-type: none; /* Supprime les puces */
  text-align: left;
  padding: 15px;
  margin: 20px;
  font-size: 20px;
}

/* router-link {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}

router-link:hover {
  color: red;
} */
</style>