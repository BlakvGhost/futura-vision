<script setup>
import Alert from '@/components/Alert.vue'
</script>
<template>
    <div class="my-2 py-2">
        <form action="" method="post" @submit.prevent="update">
            <Alert :data="notifs" :state="state"></Alert>
            <input type="hidden" name="_method" value="PUT">
            <div class="border rounded-circle text-center mx-auto position-relative overflow-hidden"
                style="height:120px; width: 120px;">
                <i class="fa-4x mdi mdi-account-outline" v-if="!user.avatar && !show"></i>
                <img :src="$loadImageFV(user.avatar)" :alt="user.email" v-show="user.avatar || show" class="full"
                    id="cover_img">
                <div class="position-absolute full top-0 end-0 text-start" style="cursor:pointer" id="chgimg">
                    <span class="btn btn-outline-success animate__animated
                     animated__fadeInDown" type="button" role="button" style="opacity:0">
                        <i class="mdi mdi-camera-plus"></i>
                    </span>
                </div>
                <input type="file" name="cover" class="d-none" id="cover_id" @change="loadSrc">
            </div>
            <div class="row row-cols-2 fv-f-direc-col-sm">
                <div class="form-group my-2 fv-w-100-sm">
                    <label for="last_name" class="form-text">Nom de Famille: </label>
                    <input type="text" name="last_name" id="last_name" placeholder="Entrer votre Nom de Famille: "
                        class="form-control form-control-lg" required v-model="user.last_name">
                </div>
                <div class="form-group my-2 fv-w-100-sm">
                    <label for="first_name" class="form-text">Prenom: </label>
                    <input type="text" name="first_name" id="first_name" placeholder="Entrer votre Prenom: "
                        class="form-control form-control-lg" required v-model="user.first_name">
                </div>
            </div>
            <div class="row row-cols-2 fv-f-direc-col-sm">
                <div class="form-group my-2 fv-w-100-sm">
                    <label for="email" class="form-text">Email: </label>
                    <input type="email" name="email" id="email" placeholder="Entrer votre Email: "
                        class="form-control form-control-lg" required v-model="user.email">
                </div>
                <div class="form-group my-2 fv-w-100-sm">
                    <label for="password" class="form-text">Mot de Passe: </label>
                    <input type="password" name="password" id="password" placeholder="Entrer votre Mot de passe: "
                        class="form-control form-control-lg" required v-model="user.password">
                </div>
            </div>
            <div class="form-group my-2" v-show="user.password">
                <label for="confirm_password" class="form-text">Mot de Passe: </label>
                <input type="password" name="confirm_password" id="confirm_password"
                    placeholder="Entrer votre Mot de passe: " class="form-control form-control-lg" required
                    v-model="user.confirm_password">
            </div>
            <div class="form-group my-3 text-center">
                <button class="btn btn-success w-50 m-auto fv-w-75-sm">Mettre A Jour</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {},
            notifs: false,
            state: false,
            show: false,
        }
    },
    methods: {
        loadSrc: function (e) {
            let url = URL.createObjectURL(e.target.files[0]);
            this.show = true;
            $('#cover_img').attr('src', url);
        },
        update: function (e) {
            $('html, body').animate(
                { scrollTop: 0 }, 600);

            let data = new FormData(e.target);
            if (
                this.user.first_name && this.user.last_name &&
                this.user.email && this.user.password
            ) {
                if (this.user.password === this.user.confirm_password) {

                    this.$Progress.start();

                    this.$http.post('user/' + this.user.id, data, this.$token()).then(res => {
                        this.state = res.data.success;
                        if (res.status === 200) {
                            this.$setUserSession(res.data.data)
                            this.notifs = res.data.message;
                            this.$toastr("UTILISATEUR", this.notifs, "success");
                            return this.$Progress.finish();
                        }
                        this.notifs = res.data.message;
                        this.$toastr("UTILISATEUR", this.notifs, "error");
                        this.$Progress.fail();
                    })
                } else {
                    this.notifs = this.$passwdError;
                    this.$toastr("UTILISATEUR", this.notifs, "error");
                }
            } else {
                this.notifs = this.$emptyFieldsErrorMessage;
                this.$toastr("INSCRIPTION", this.$emptyFieldsErrorMessage, "error");
            }
        }
    },
    mounted() {
        this.user = this.$currentUser();
        if (!this.user) {
            this.$router.back()
        }
        jQuery(function () {
            $('#chgimg').click(function () {
                $('#cover_id').click();
            })
        })
    }
}
</script>
<style scoped>
.btn {
    transition: .5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

#chgimg:hover .btn {
    opacity: 1 !important;
}
</style>