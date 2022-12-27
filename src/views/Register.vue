<template>
    <div class="border-top p-3">
        <div class="container-custom my-3">
            <div class="my-3" style="font-size:22px">
                <form method="POST" class="fv-w-50-lg fv-w-100-sm m-auto" @submit.prevent="form">
                    <div class="fv-title-normal fvSlideOn my-3">
                        <h3 class="text-fv-primary"><span class="dbslash">//</span> &nbsp; OUVRIR UN COMPTE</h3>
                    </div>
                    <div class="alert alert-dismissible alert-danger" role="alert" id="liveAlert"
                        v-if="notifs && !success">
                        <div class="msg-alert">
                            <p v-for=" er in notifs" :key="er" class="mb-0">
                                <small v-for="e in er" :key="e">{{ e }}</small>
                            </p>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <div class="alert alert-dismissible alert-success" role="alert" id="liveAlertSuccess"
                        v-if="success">
                        <div class="msg-alert text-center">
                            <h3> {{ success }}</h3>
                            <h4>Continuer la Navigation Sur: </h4>
                            <router-link style="font-size:22px" to="/blog" class="btn btn-link">Blog</router-link>
                            <router-link style="font-size:22px" to="/forum" class="btn btn-link">Forum</router-link>
                        </div>
                    </div>
                    <div v-if="!success">
                        <div class="form-group my-2 fvSlideOn">
                            <label for="yourname" class="form-text">Prenom* : </label>
                            <input type="text" name="nom" id="yourname" placeholder="Entrer votre Prenom"
                                class="form-control form-control-lg" v-model="first_name">
                        </div>
                        <div class="form-group my-2 fvSlideOn">
                            <label for="yourfistname" class="form-text">Nom de Famille* : </label>
                            <input type="text" name="first_name" id="yourfistname" placeholder="Entrer votre Nom"
                                class="form-control form-control-lg" v-model="last_name">
                        </div>
                        <div class="form-group my-2 fvSlideOn">
                            <label for="youremail" class="form-text">Email* : </label>
                            <input type="email" name="email" id="youremail" placeholder="Entrer votre Email"
                                class="form-control form-control-lg" v-model="email">
                        </div>
                        <div class="form-group my-2 fvSlideOn">
                            <label for="yourpass" class="form-text">Mot de Passe* : </label>
                            <input type="password" name="pass" id="yourpass" placeholder="Entrer un Mot de Passe"
                                class="form-control form-control-lg" v-model="passwd1">
                        </div>
                        <div class="form-group my-2 fvSlideOn">
                            <label for="yourpass2" class="form-text">Confirmer le Mot de Passe* : </label>
                            <input type="password" name="pass" id="yourpass2"
                                placeholder="Entrer de nouveau le Mot de Passe" class="form-control form-control-lg"
                                :class="passwdError ? 'is-invalid' : ''" v-model="passwd2">
                        </div>
                        <div class="text-center">
                            <router-link to="/membres/connecter" class="btn btn-link">Déjà un Compte ?</router-link>
                        </div>
                        <div class="text-center my-2 fvSlideOn">
                            <button type="submit"
                                class="btn btn-success fv-w-50-lg fv-w-75-sm m-auto">S'inscrire</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            success: false,
            passwdError: false,
            notifs: false,
            first_name: null,
            last_name: null,
            email: null,
            passwd1: null,
            passwd2: null,
        }
    },
    methods: {
        insert: function (data) {
            this.$Progress.start();
            this.$http.post('register', data, this.$token()).then(response => {
                if (response.status === 200) {
                    sessionStorage.setItem(this.$authSessionName, JSON.stringify(response.data.data));
                    this.success = response.data.message;
                    this.$toastr("INSCRIPTION", this.success, "success");
                    return this.$Progress.finish();
                }
                this.notifs = response.data.message;
                this.$toastr("INSCRIPTION", this.notifs, "error");
                this.$Progress.fail();
            })
        },
        form: function () {
            const data = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.passwd1,
                confirm_password: this.passwd2,
                email: this.email,
            }
            if (data.first_name && data.last_name && data.email && data.password) {
                if (data.password === data.confirm_password) {
                    this.insert(data);
                } else {
                    this.passwdError = this.$passwdError;
                    this.notifs = [[].concat(this.passwdError)];
                    this.$toastr("INSCRIPTION", this.passwdError, "error");
                }
            } else {
                this.notifs = [[].concat(this.$emptyFieldsErrorMessage)];
                this.$toastr("INSCRIPTION", this.$emptyFieldsErrorMessage, "error");
            }
        },
    },
    mounted() {
        this.$animate();
    },
}
</script>