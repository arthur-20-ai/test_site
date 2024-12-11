<template>
    <div class="bloc-modale" v-if="revele">
        <div class="overlay" v-on:click="toggleModale"></div>
        <div class="modale card">
            <div v-on:click="toggleModale" class="btn-modale btn btn-danger">x</div>
            <div>
                <h2>Identifiants:</h2>
                <input type="text" class="inp-id"  v-model="localId">
                <h2>Mot De Passe:</h2>
                <input type="password" class="inp-pwd" v-model="localPassword">
                <br>
                <br>
                <br>
                <br>
                <button v-on:click="submitCredentials">Connexion</button>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'ModalePage',
    props: ['revele', 'toggleModale'],
    data() {
        return {
            localId: '',
            localPassword: ''
        };
    },
    methods: {
        submitCredentials() {
            // Émettre un événement avec les valeurs des champs
            this.$emit('submit-credentials', {
                id: this.localId,
                password: this.localPassword
            });
        }
    }
};

</script>

<style scoped>

.btn {
    background: red;
    color: white;
    width: 20%;
}

.inp-id {
    width: 100%;
    height: 15px;
    border-radius: 0px;
    border: 1px solid black;
}

.inp-pwd {
    width: 100%;
    height: 15px;
    border-radius: 0px;
    border: 1px solid black;
}

.bloc-modale {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.overlay {
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.modale {
    background: #f1f1f1;
    color: #333;
    padding: 50px;
    position: fixed;
}

.btn-modale {
    position: absolute;
    top: 10px;
    right: 10px;
}

</style>