<template>
  <div class="triangle"></div>
  <router-link to="/">
    <img class="logo" src="../assets/logo.png" alt="Logo">
  </router-link>
  <nav class="navbar">
    <router-link 
      to="/" 
      :class="{'active-link': $route.path === '/'}"
    >Acceuil</router-link>
    <router-link 
      to="/QuiSommesNous" 
      :class="{'active-link': $route.path === '/QuiSommesNous'}"
    >Qui sommes nous ?</router-link>
    <div class="dropdown">
      <div class="dropdown-toggle">Produits <div class="arrow">&#9650;</div></div>
      <ul class="dropdown-menu">
        <li style="pointer-events: none;"></li>
        <li><router-link to="/PesageStatique">Pesage Statique</router-link></li>
        <li><router-link to="/PesageDynamique">Pesage Dynamique</router-link></li>
        <li><router-link to="/Humidimetre">Humidimètre</router-link></li>
      </ul>
    </div>

    <div class="dropdown2">
      <div class="dropdown-toggle2">Services et Métrologie <div class="arrow">&#9650;</div></div>
      <ul class="dropdown-metro">
        <li style="pointer-events: none;"></li>
        <li><router-link to="/Services">Services et Prestations</router-link></li>
        <li><router-link to="/Metrologie">Métrologie</router-link></li>
      </ul>
    </div>

    <router-link to="/Partenaire"> Partenaire</router-link>
    <router-link to="/Contact"> Contact</router-link>
    <span class="navbar"></span>
  </nav>
  <router-view></router-view>
  <footer class="footer">
    <div class="page-container">
      <div class="triangle-bas"></div>
      <router-link to="/">
        <img class="logo-bas" src="../assets/logo.png" alt="Logo-bas">
      </router-link>
    </div>
    <div class="horaire-bloc">
      <ul class="horaire-footer">
        <h3 class="titre-horaire">Horaires:</h3>
        <li>✅ Lun 8h-12h 13h30-17h15</li>
        <li>✅ Mar 8h-12h 13h30-17h15</li>
        <li>✅ Mer 8h-12h 13h30-17h15</li>
        <li>✅ Jeu 8h-12h 13h30-17h15</li>
        <li>✅ Ven 8h-12h 13h30-17h15</li>
      </ul>
    </div>
    <div class="contact-bloc">
      <ul class="contact-footer">
        <router-link class="router-text" to="/Contact">

          <h3 class="titre-contact">Contact :</h3>
          <li>📞 : +33 3 83 30 14 44</li>
          <li><pre>🏠 : 27 Rue André Fruchard,
            54320 Maxéville</pre>
          </li>
          <li>📧 : <a href="mailto:arthur1schuster@gmail.com">cnp@cnp-pesage.com</a> </li>
        </router-link>
      </ul>
    </div>
  </footer>
  <div class="black-footer">
    <router-link class="date_cnp" to="/">© 1985-2024 CNP &nbsp;&nbsp;&nbsp;•</router-link>
    <router-link class="mention-leg" to="/MentionLegal">Mention Légale</router-link>
  </div>
</template>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    let timeoutId;
    
    dropdown.addEventListener('click', () => {
      dropdownMenu.classList.toggle('open'); // Ajoute ou retire la classe "open" au clic
    });
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(timeoutId); // Annuler la fermeture si la souris est encore sur Produits
      dropdownMenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
      timeoutId = setTimeout(() => {
        dropdownMenu.style.display = 'none'; // Fermer le menu après 1s
      }, 500); // 1000ms = 1 seconde
    });
    

    dropdownMenu.addEventListener('mouseenter', () => {
      clearTimeout(timeoutId); // Si la souris revient sur le menu, annuler le timeout
    });

  });


  document.addEventListener('DOMContentLoaded', () => {
    const dropdown2 = document.querySelector('.dropdown2');
    const dropdownMetro = document.querySelector('.dropdown-metro');

    if (!dropdown2 || !dropdownMetro) {
        console.error('Les éléments .dropdown2 ou .dropdown-metro ne sont pas trouvés.');
        return;
    }

    let timeoutId;

    dropdown2.addEventListener('click', () => {
        dropdownMetro.classList.toggle('open'); // Ajoute ou retire la classe "open" au clic
    });

    dropdown2.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId); // Annuler la fermeture si la souris est encore sur Produits
        dropdownMetro.style.display = 'block';
    });

    dropdown2.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            dropdownMetro.style.display = 'none'; // Fermer le menu après 500ms
        }, 500);
    });

    dropdownMetro.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId); // Si la souris revient sur le menu, annuler le timeout
    });
});
</script>

<!-- prezi -->

<style>

html {
  scroll-behavior: smooth;
}

.date_cnp {
  position: relative;
  right: 23em;
  text-decoration: none;
  color: white;
}

.mention-leg {
  position: relative;
  right: 22em;
  text-decoration: none;
  color: white;
}

.mention-leg:hover {
  text-decoration: underline;
  color: #41739c;
}

.black-footer {
  position: absolute;
  width: 130%;
  height: 1,5em;
  left: -20.5em;
  background-color: #000000;
  z-index: 2;
}

.footer {
  position: relative;
  flex: 1 0 auto;
  border-top: 3px dotted black;
  width: 110%;
  bottom: -0.8em;
  left: -3em;
  height: 20em; /* La hauteur totale du footer */
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.horaire-bloc {
  position: relative;
  text-align: left;
  left: 5.5em;
  bottom: 2.5em;
  font-size: 110%;
  transition: 0.5s ease-in-out;
}

.horaire-bloc:hover {
  scale: 1.2;
}

.horaire-footer li{
  list-style-type: none;
}

.titre-horaire {
  font-size: 31px;
}

.contact-bloc {
  position: relative;
  text-align: left;
  left: 20em;
  bottom: 3em;
  font-size: 110%;
  transition: 0.5s ease-in-out;
}

.contact-bloc:hover {
  scale: 1.2;
}

.contact-footer li{
  list-style-type: none;
}

.titre-contact {
  font-size: 31px;
}

.router-text {
  text-decoration: none;
  color: black;
}

.navbar a.router-link-active {
  color: rgb(255, 255, 255); /* Couleur blanche pour le lien actif */
  font-style: oblique;
  text-decoration : underline;
}

/* .navbar span.router-link-active {
  opacity: 1;
  color:#000000;
} */

/* .titre-footer {
  position: relative;
  color: rgb(0, 0, 0);
  font-size: 170%;
  left: 450px;
  bottom: 250px;
  text-decoration: underline;
  z-index: 10;
} */

.logo {
  position:absolute;
  width: 6%;
  height: auto;
  top: 2%;
  left: 2%;
  border-radius: 1em;
  box-shadow: 3px 3px darkgray;
  z-index: 2;
  transition: transform 0.5s ease;
}

body {
    width: 100vw; /* Assure que le corps occupe toute la largeur de la fenêtre */
    height: 100vh; /* Assure que le corps occupe toute la hauteur de la fenêtre */
    margin: 0; /* Supprime les marges par défaut du navigateur */
    overflow-x: hidden; /* Empêche le débordement horizontal */
}


.page-container {
  position: absolute;
  padding-bottom: 300px; /* Assure qu'il y ait assez d'espace pour les éléments bas */
}

.logo-bas {
  position: relative;
  width: 20%;
  height: auto;
  bottom: -15.6em;
  right: -260%;
  border-radius: 1em;
  box-shadow: 3px 3px darkgray;
  z-index: 2;
  transition: transform 0.5s ease-in-out;
}

.triangle-bas {
  position: absolute; /* Positionnement par rapport au parent ou à la fenêtre */
  bottom: 0; /* Place l'élément tout en bas */
  right: -236%; /* Place l'élément tout à droite */
  width: 300px;
  height: 300px;
  background: radial-gradient(circle at top left, white 10%, rgba(18, 62, 99, 1) 70%);
  transform: rotate(0deg); /* Pas de rotation nécessaire pour un triangle standard */
  clip-path: polygon(
    0% 0%,   /* Sommet supérieur gauche */
    100% 100%, /* Coin inférieur droit */
    0% 100%  /* Coin inférieur gauche */
  );
  rotate: 270deg;
  z-index: 1;
}


.logo:hover {
  transform: scale(1.2);
  transform: translateX(10px);
}

.logo:active {
  transform: scale(0.9);
}

.logo-bas:hover {
  transform: scale(1.1);
}

.logo-bas:active {
  transform: translateY(4px);
}

.triangle {
    position: absolute;
    right: 35%;
    bottom: 15%;
    width: 150vw;
    height: 100vh;
    background: radial-gradient(circle at bottom left, white 50%, rgba(18, 62, 99, 1) 90%);
    clip-path: polygon(0 0, 100% 0, 0 100%);
    pointer-events: none;
    z-index: 1;
}
.navbar {
  position: absolute;
  top: 2%;
  right: 0%;
  width: 57%;
  height: 2%;
  display: flex;
  gap: 6%;
  padding: 1% 2%; 
  border-radius: 20px;
  align-items: center;
  box-shadow: 2px 2px 8px rgba(18, 62, 99, 1);
  background-color: rgba(18, 62, 99, 0.9);
  opacity: 1;
  z-index: 4;
}

.navbar a, .dropdown-toggle, .dropdown-toggle2 {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 85%;
  font-weight: bold;
  z-index: 6;
}

.navbar a:hover {
  color: rgb(255, 255, 255);
}

.navbar span {
  position: absolute;
  top: 0;
  left: 0;
  width: 8%;
  height: 62%; /* Hauteur restée fixe car en pourcentage */
  background: rgb(169, 169, 169);
  border-radius: 20px;
  z-index: 5;
  transition: .5s ease 0s ease-out;
  opacity: 0;
}

.navbar a:active~span {
  background: linear-gradient(120deg, #696f75, rgb(169, 169, 169));
  transform: scale(0.9);
}

/* Acceuil */
.navbar a:nth-child(1):hover~span {
  opacity: 70%;
  width: 8%;
  left:0%;
  color: black;
}

/* Qui sommes nous ? */
.navbar a:nth-child(2):hover~span {
  left: 12%;
  width: 15%;
  opacity: 70%;
}

/* Produits */
.navbar a:nth-child(3):hover~span {
  left: 35%;
  opacity: 70%;
}

/* Services et métrologie */
.navbar a:nth-child(4):hover~span {
  left: 50%;
  opacity: 70%;
}

/* Partenaire */
.navbar a:nth-child(5):hover~span {
  left: 72%;
  width: 8.5%;
  opacity: 70%;
}

/* Contact */
.navbar a:nth-child(6):hover~span {
  left: 85%;
  width: 8%;
  opacity: 70%;
}

.dropdown {
  position: relative;
}

.dropdown2 {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  padding: 2px 2px;
  gap: 10px;
}

.dropdown-toggle2 {
  display: flex;
  align-items: center; 
  padding: 2px 2px;
  gap: 10px;
}


.arrow {
  font-size: 8px;
  transition: transform 0.5s ease; /* Transition douce pour la rotation */
  display: inline-block;
  margin-left: 1px;
  color: rgb(255, 255, 255);
}

/* Menu déroulant caché par défaut */
.dropdown-menu {
  display: none; /* Caché par défaut */
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  text-align: left;
  width: 130px;
  top: 92%; /* Positionné juste sous le lien "Produits" */
  left: -30px;
  background-color: rgba(18, 62, 99, 0.8);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 5;
}

.dropdown-metro {
  display: none; /* Caché par défaut */
  list-style: none;
  padding: 0;
  margin: 0;
  width: 190px;
  position: absolute;
  text-align: left;
  top: 92%; /* Positionné juste sous le lien "Produits" */
  left: -10px;
  background-color: rgba(18, 62, 99, 0.8);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 5;
}

.dropdown-menu li {
  padding: 10px;
}

.dropdown-metro li {
  padding: 10px;
}

.dropdown-menu li a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.dropdown-metro li a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.dropdown-menu li:hover {
  background: linear-gradient(120deg, #123E63, rgb(221, 221, 221));
  border-radius: 8px;
}

.dropdown-metro li:hover {
  background: linear-gradient(120deg, #123E63, rgb(221, 221, 221));
  border-radius: 8px;
}

.dropdown-menu li:active {
  background-color: #ddd;
  border-radius: 8px;
}

.dropdown-metro li:active {
  background-color: #ddd;
  border-radius: 8px;
}


.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown2:hover .dropdown-metro {
  display: block;
}

.dropdown:hover .arrow {
  transform: rotate(180deg); 
}

.dropdown2:hover .arrow {
  transform: rotate(180deg); 
}

.dropdown-menu:hover {
  display: block;
}

.dropdown-metro:hover {
  display: block;
}

</style>
