<script setup>
    import SearchBar from "@/components/SearchBar.vue";
    import ForumUnique from "@/components/Forum.vue";
    import Categorie from "@/components/Cat.vue";
    import Paginate from "@/components/Paginate.vue";
    import Alert from "@/components/Alert.vue";
</script>
<template>
    <div class="border-top p-3">
        <div class="container-custom my-3">
            <div class="fv-title-normal fvSlideOn my-3">
                <h3 class="text-fv-primary"><span class="dbslash">//</span> &nbsp; FORUM</h3>
            </div>
            <SearchBar model="forum"></SearchBar>
            <Categorie model="forum"></Categorie>
            <div class="my-3" style="font-size:22px">
                <div class="alert alert-dismissible alert-warning" role="alert" id="liveAlertWarn" v-if="!currentUser">
                    <div class="msg-alert text-center">
                        <h3> Connectez-Vous avant d'effectuer de Poser des question dans le forum</h3>
                        <router-link style="font-size:22px" :to="{name: 'login'}"
                        class="btn btn-link">
                        Connexion
                        </router-link>

                        <router-link style="font-size:22px" :to="{name: 'register'}"
                        class="btn btn-link">
                        Creation de Compte
                        </router-link>
                    </div>
                </div>
                <form method="POST" class="py-2" style="font-size:22px"
                 v-if="currentUser" @submit.prevent="form">
                    <div class="pt-2">
                        <Alert :data="notifs" :state="state"></Alert>
                    </div>
                    <div class="form-group">
                        <label for="categorie" class="form-text">Selectionner une catgerie * : </label>
                        <select class="form-select" v-model="category" id="categorie">
                            <option value="Anonyme" disabled selected>----SELECT A CATEGORY----</option>
                            <option v-for="cat in categories" :key="cat" :value="cat.id">
                                 {{ cat.name }} 
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message" class="form-text">Poser votre question par ici : </label>
                        <textarea name="content" id="message" placeholder="Entrer votre Question"
                         class="form-control form-control-lg" cols="40" rows="5" v-model="message">
                        </textarea>
                    </div>
                    <div class="text-center my-2">
                        <button type="submit" class="btn btn-success w-50 m-auto">ENVOYER</button>
                    </div>
                </form>
            </div>            
            <div class="my-3 container-fluid fv-p-0-sm">
                <div class="fv-title-big fvSlideOn">
                    <h2 class="text-dark fw-bolder">Les Recents</h2>
                </div>
                <div class="row fv-f-direc-col-sm fv-m-0-sm">
                    <forum-unique v-for="post in recentPost.data"
                     :key="post.id" :post="post" :user="currentUser?currentUser:{}">
                    </forum-unique>
                </div>
                <Paginate :data="recentPost" uri="forum-info" @pagine="updateDataPost"></Paginate>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            recentPost: [],
            categories: [],
            message: null,
            category: null,
            notifs: false,
            state: false,
            currentUser: false,
        }
    },
    methods: {
        getPost: function() {
            this.$http.get('forum-info', this.$token()).then(res => {
                this.recentPost = res.data.data['latests'];
                this.categories = res.data.data['categories'];
            });
        },
        form: function(e) {
            let data = {
                content: this.message,
                category_id: this.category,
            }

            if (data.content && data.category_id) {
              this.$Progress.start();
              this.$http.post('forum',
               data, this.$token()).then( res => {
                  this.getPost();
                //   this.recentPost.unshifs(res.data);
                  this.notifs = res.data.message;
                  this.state = res.data.success;
                  this.$toastr("FORUM", this.notifs, "success");
                  this.$Progress.finish();
                  e.target.reset();
              }).catch((error) => {
                  this.notifs = error.response.data.message;
                  this.state = error.response.data.success;
                  this.$toastr("FORUM", this.$BadFieldsErrorMessage, "error");
                  this.$Progress.fail();
              })
            }else{
                this.notifs = this.$emptyFieldsErrorMessage;
                this.state = false;
            }
        },
        updateDataPost: function(data){
            this.recentPost = data['latests'];
        }
    },
    mounted() {
        this.currentUser = this.$currentUser();
         this.getPost();
    },
    updated() {
        this.$animate();
    },
}
</script>