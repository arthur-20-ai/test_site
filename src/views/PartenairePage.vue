<template>
    <br>
    <br>
    <br>
    <img class="image_contact" src="../../assets/partenaire.jpg" alt="secteurs">
    <br>
    <div v-on:click="toggleModale" class="btn btn-succes hiding">connexion

</div>
    <modale 
        v-bind:revele="revele" 
        v-bind:toggleModale="toggleModale"
        @submit-credentials="handleCredentials"
    ></modale>
    <div class="bandeau_titre">
    <div class="partenaire_titre">Partenaires</div>
    <div class="barre_blanche"></div>
    </div>
    <div>

        <!--Pesage:
        bilanciai,  ..\..\assets\partenaire\Logo_BILANCIAI.png
        chavigny,   ..\..\assets\partenaire\chavigny.png
        flintec,    ..\..\assets\partenaire\flintec.png

        laumas,     ..\..\assets\partenaire\laumas.png
        giropes,    ..\..\assets\partenaire\giropes.png
        exa,        ..\..\assets\partenaire\exa.png

        baxtran,    ..\..\assets\partenaire\baxtran.png
        scaime,     ..\..\assets\partenaire\scaime.png
        kern,       ..\\assets\partenaire\kern.png

        ohaus,      ..\..\assets\partenaire\ohaus.png
        diniargeo,  ..\..\assets\partenaire\dini_argeo.png
        mettler toledo ..\\assets\partenaire\mettler_toledo.png
        
        Humidimètre: 
        foss,       ..\..\assets\partenaire\foss.png
        perten,     ..\..\assets\partenaire\perten.png
        kpm analytic   ..\..\assets\partenaire\kpm_analytics.png
         -->

        <br>
        <!-- <a href="https://www.bilanciaipesage.fr" target="_blank">
            <a href="https://www.groupechavigny.fr" target="_blank">
            <a href="https://www.flintec.com" target="_blank">
            <a href="https://www.laumas.com" target="_blank">
            <a href="https://www.giropes.com" target="_blank">
            <a href="https://www.grupoepelsa.com/en/" target="_blank">
            <a href="https://www.baxtran.com" target="_blank">
            <a href="https://www.scaime.com" target="_blank">
            <a href="https://www.kern-sohn.com" target="_blank"> 
            <a href="https://www.ohaus.com" target="_blank">
            <a href="https://www.diniargeo.com" target="_blank"> 
            <a href="https://www.mt.com" target="_blank">


            <a href="https://www.fossanalytics.com" target="_blank">
            <a href="https://www.perten.com" target="_blank">
            <a href="https://www.kpmanalytics.com" target="_blank">
     -->
        <br>
            <br>
            <!-- v-if="isAuthenticated" -->
        <!-- <div id="counter">
            <h1>Nombre de visite:</h1>
            <br>
            0
            <br>
            <br>
            <br>
            <br>
        </div> -->

        <div class="partenaire-section">
        <div class="titre-partenaire-pesage">Pesage :</div>
        
        <table class="table-pesage">
    <tr>
        <td>
            <a v-if="isAuthenticated" href="https://www.bilanciaipesage.fr" target="_blank">
                <img src="..\..\assets\partenaire\Logo_BILANCIAI.svg" alt="bilanciai">
            </a>
            <img v-else src="..\..\assets\partenaire\Logo_BILANCIAI.svg" alt="bilanciai" >
        </td>
        <td>
            <a v-if="isAuthenticated" href="https://www.groupechavigny.fr" target="_blank">
                <img src="..\..\assets\partenaire\chavigny.png" alt="chavigny">
            </a>
            <img v-else src="..\..\assets\partenaire\chavigny.png" alt="chavigny" >
        </td>
        <td>
            <a v-if="isAuthenticated" href="https://www.flintec.com" target="_blank">
                <img src="..\..\assets\partenaire\flintec.png" alt="flintec">
            </a>
            <img v-else src="..\..\assets\partenaire\flintec.png" alt="flintec" >
        </td>
    </tr>
    <tr>
        <td>
            <a v-if="isAuthenticated" href="https://www.laumas.com" target="_blank">
                <img src="..\..\assets\partenaire\laumas.png" alt="laumas">
            </a>
            <img v-else src="..\..\assets\partenaire\laumas.png" alt="laumas" >
        </td>
        <td>
            <a v-if="isAuthenticated" href="https://www.giropes.com" target="_blank">
                <img src="..\..\assets\partenaire\giropes.png" alt="giropes">
            </a>
            <img v-else src="..\..\assets\partenaire\giropes.png" alt="giropes" >
        </td>
        <td>
            <a v-if="isAuthenticated" href="https://www.grupoepelsa.com/en/" target="_blank">
                <img src="..\..\assets\partenaire\exa.png" alt="exa">
            </a>
            <img v-else src="..\..\assets\partenaire\exa.png" alt="exa" >
        </td>
    </tr>
    <tr>
        <td>
            <a v-if="isAuthenticated" href="https://www.baxtran.com" target="_blank">
                <img src="..\..\assets\partenaire\baxtran.png" alt="baxtran">
            </a>
            <img v-else src="..\..\assets\partenaire\baxtran.png" alt="baxtran" >
        </td>
        <td>
            <a v-if="isAuthenticated" href="https://www.scaime.com" target="_blank">
                <img src="..\..\assets\partenaire\scaime.png" alt="scaime">
            </a>
            <img v-else src="..\..\assets\partenaire\scaime.png" alt="scaime" >
        </td>
        <td>
            <a v-if="isAuthenticated" href="https://www.kern-sohn.com" target="_blank">
                <img src="..\..\assets\partenaire\kern.svg" alt="kern">
            </a>
            <img v-else src="..\..\assets\partenaire\kern.svg" alt="kern" >
        </td>
    </tr>
    <tr>
        <td>
            <a v-if="isAuthenticated" href="https://www.ohaus.com" target="_blank">
                <img src="..\..\assets\partenaire\ohaus.png" alt="ohaus">
            </a>
            <img v-else src="..\..\assets\partenaire\ohaus.png" alt="ohaus" >
        </td>
        <td>
            <a v-if="isAuthenticated" href="https://www.diniargeo.com" target="_blank">
                <img src="..\..\assets\partenaire\dini_argeo.png" alt="dini argeo">
            </a>
            <img v-else src="..\..\assets\partenaire\dini_argeo.png" alt="dini argeo" >
        </td>
        <td>
            <a v-if="isAuthenticated" href="https://www.mt.com" target="_blank">
                <img src="..\..\assets\partenaire\mettler_toledo.png" alt="mettler toledo">
            </a>
            <img v-else src="..\..\assets\partenaire\mettler_toledo.png" alt="mettler toledo" >
        </td>
    </tr>
</table>

    </div>
    <br>
    <br>
    <br>
    <div class="partenaire-section">
        <div class="titre-partenaire-humidimetre">Humidimètre :</div>
        <table class="table-humidimetre">
                <tr>
                    <td>
                        <a v-if="isAuthenticated" href="https://www.fossanalytics.com" target="_blank">
                            <img src="..\..\assets\partenaire\foss.png" alt="foss">
                        </a>
                        <img v-else src="..\..\assets\partenaire\foss.png" alt="foss" >
                    </td>
                    <td>
                        <a v-if="isAuthenticated" href="https://www.perten.com" target="_blank">
                            <img src="..\..\assets\partenaire\perten.png" alt="perten">
                        </a>
                        <img v-else src="..\..\assets\partenaire\perten.png" alt="perten" >
                    </td>
                    <td>
                        <a v-if="isAuthenticated"  href="https://www.kpmanalytics.com" target="_blank">
                            <img src="..\..\assets\partenaire\kpm_analytics.png" alt="kpm analytics">
                        </a>
                        <img v-else src="..\..\assets\partenaire\kpm_analytics.png"  alt="kpm analytics">
                    </td>
                </tr>
            </table>
    </div>
    <br> 
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>Demande de renseignement à propos des partenaires: </h1>
    <br>
    <br>
    <br>
    <br>
    <br>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<div class="form-devis">
        <form action="https://formsubmit.co/arthur.schuster@epitech.eu" method="POST">
            <input type="hidden" name="_subject" value="Demande d'information Partenaire !">
            <b>Nom :</b>
            <input type="text" name="Nom" required placeholder="Nom*">
            <b>Adresse mail :</b>
            <input type="email" name="email" required placeholder="Addresse Email*">
            <b>Numéro de téléphone :</b>
            <input type="text" name="Numéro de téléphone" required placeholder="Numéro de téléphone*">
            <b>Entreprise :</b>
            <input type="text" name="Entreprise" required placeholder="Entreprise*">
            <b>Votre demande de renseignement :</b>
            <textarea type="text" name="Demande" required placeholder="Votre demande de renseignement.*"></textarea>
            <button type="submit">Envoyer</button>
            <input type="hidden" name="_replyto" value="Merci pour votre demande de Devis ou d'information et bienvenu chez CNP.">
            <input type="hidden" name="_autoresponse" value="Merci pour votre demande de Devis ou d'information et bienvenu chez CNP.">
            <input type="hidden" name="_template" value="box">
        </form>
    </div>
</template>

<!-- 332812 code portable M. GORSE -->

<script>
import ModalePage from './ModalePage.vue';
// const countapi = require('countapi-js');

export default {
    name: 'PartenairePage',
    data() {
        return {
            revele: false, // Contrôle de la visibilité de la modale
            isAuthenticated: false,
            credentials: { // Stock les identifiants et mot de passe
                id: '',
                password: ''
            }
        };
    },
    components: { 
        'modale': ModalePage
    },
    methods: {
        toggleModale() {
            this.revele = !this.revele;
        },
        handleCredentials(data) {
            // Récupérer les valeurs des champs
            this.credentials.id = data.id;
            this.credentials.password = data.password;

            // Vérification des identifiants
            if (this.credentials.id === "pluton/54" && this.credentials.password === "301444") {
                console.log('Identifiant:', this.credentials.id);
                console.log('Mot de passe:', this.credentials.password);
                this.isAuthenticated = true;
                alert("Connexion réussie !");
                this.revele = !this.revele;
            } else {
                console.log('Connexion échouée : mot de passe ou identifiant incorrect');
                alert("Mot de passe incorrect");
                this.revele = !this.revele;
                this.isAuthenticated = false;
            }
        },
        // fetchCounter() {
        //     // Utilisation de countapi-js pour obtenir et afficher le compteur
        //     countapi.visits('default').then((result) => {
        //         const counter = document.getElementById("counter");
        //         counter.innerHTML = result.value;
        //         console.log(result.value);
        //     }).catch((error) => {
        //         console.error('Erreur lors de la récupération des données:', error);
        //     });
        // }
    },
    // mounted() {
    //     this.fetchCounter();
    // }
};
</script>


<style scoped>

 #counter {
    font-size: 50px;
 }
/* Style du carré noir */
.black-square {
    width: 100px;
    height: 100px;
    background-color: black;
    cursor: pointer;
    margin: 50px auto;
}

/* Style du popup */
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
}

.hiding {
    position: absolute;
    top: 0;
    left: 0;
    width: 2%;
    background: black;
    height: 4%;
}

.popup-buttons {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

button {
    padding: 5px 10px;
    cursor: pointer;
}

button[type="submit"] {
    background-color: green;
    color: white;
    border: none;
}

button[type="button"] {
    background-color: red;
    color: white;
    border: none;
}
</style>

<style>
h1 {
    text-align: center;
}

div {
    text-align: center;
}

.bandeau_titre {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    width: 800px;
    height: 100px;
    top: 370px;
    left: 750px;
    z-index: 3;
    transition: 0.5s ease-in-out;
}

.bandeau_titre:hover {
    transform: scale(1.2);
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px;

}

.partenaire_titre {
    position: absolute;
    color: white;
    font-size: 30px;
    font-weight: bold;
    top: 30px;
    left: 30px;
    z-index: 8;
}

.barre_blanche {
    position: relative;
    background-color: white;
    width: 1500px;
    height: 4px;
    top: 80px;
    /* left: 700px; */
    z-index: 8;
}

.partenaire-section {
    margin-bottom: 40px;
}

.titre-partenaire-pesage, .titre-partenaire-humidimetre {
    font-size: 30px;
    text-align: center;
    text-decoration: underline;
    margin-bottom: 20px;
    color: #123E63;
}

table {
    border: 2px solid black;
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
}

table img {
    width: 150px; /* Tu peux ajuster la taille selon tes besoins */
    height: auto;
    /* border: 2px solid black; #f0f0f0; */
    border-radius: 8px;
    transition: transform 0.3s ease;
}

table img:hover {
    transform: scale(1.05);
    border: 2px solid  #acabab;
}

td {
    padding: 30px;
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