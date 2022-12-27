<template>
    <div class="border-top p-3">
        <div class="container-custom my-3">            
            <div class="my-3" style="font-size:22px">
                <form method="POST" class="fv-w-50-lg fv-w-100-sm m-auto" @submit.prevent="form">
                    <div class="fv-title-normal fvSlideOn my-3">
                        <h3 class="text-fv-primary"><span class="dbslash">//</span> &nbsp; Se Connecter</h3>
                    </div>
                    <div class="alert alert-dismissible alert-danger" role="alert" id="liveAlert" v-if="error">
                        <div class="msg-alert"> {{ error }} </div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <div class="form-group my-2 fvSlideOn">
                        <label for="youremail" class="form-text">Email* : </label>
                        <input type="email" name="email" id="youremail" placeholder="Entrer votre Email" class="form-control form-control-lg" v-model="email">
                    </div>
                    <div class="form-group my-2 fvSlideOn">
                        <label for="yourpass" class="form-text">Mot de Passe* : </label>
                        <input type="password" name="pass" id="yourpass" placeholder="Entrer votre Mot de Passe" class="form-control form-control-lg" v-model="password">
                    </div>
                    <div class="text-center">
                        <router-link to="/membres/reset-password" class="btn btn-link">Mot de Passe Oublié</router-link>
                        <router-link to="/membres/inscription" class="btn btn-link">Ouvrir Un Compte</router-link>
                    </div>
                    <div class="text-center my-2 fvSlideOn">
                        <button type="submit" class="btn btn-success fv-w-50-lg fv-w-75-sm m-auto">Se Connecter</button>
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
            error: null,
            password: null,
            email: null,
        }
    },
    methods: {        
        form: function() {
            let data = {
                email: this.email,
                password: this.password,
            }  
            if (data.password && data.email){
                this.$Progress.start();
                this.$http.post('login', data, this.$token()).then( e => {
                    if (e.status === 200) {
                        sessionStorage.setItem(this.$authSessionName, JSON.stringify(e.data.data));
                        this.$toastr("CONNEXION", e.data.message, "success");
                        this.$Progress.finish();
                        this.$currentUser();
                        return this.$router.back();
                    }
                    this.error = e.data.message;
                    this.$toastr("CONNEXION", this.error, "error");
                    this.$Progress.fail();
                })   
            }else{
                this.error = this.$emptyFieldsErrorMessage;
                this.$toastr("CONNEXION", this.$emptyFieldsErrorMessage, "error");
            }
        },
    },
    mounted() {
        this.$animate();
    },
}
</script>