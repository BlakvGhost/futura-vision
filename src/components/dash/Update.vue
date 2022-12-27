<script setup>
import Alert from '@/components/Alert.vue'
defineProps({
    urlPrefix: {
        type: String,
        required: true,
    }
})
</script>
<template>
<div class="row justify-content-end w-100">
    <button class="btn btn-danger col col-auto mx-2" @click="remove">
        <i class="mdi mdi-trash-can align-middle"></i>
        Supprimer Ce Post
    </button>
    <router-link :to="{name: 'add' + urlPrefix}" role="button" class="btn btn-success col col-auto mx-2 ">
        <i class="mdi mdi-plus align-middle"></i> 
        Ajouter Autre
    </router-link>
    <router-link :to="{name: 'view' + urlPrefix}" role="button" class="btn btn-dark col col-auto">
        <i class="mdi mdi-grid align-middle"></i> 
        Voir Tout
    </router-link>
</div>
<form action="/" method="POST" enctype="multipart/form-data" id="form" @submit.prevent="submit">
    <Alert :data="notifs" :state="state"></Alert>
    <input type="hidden" name="_method" value="PUT">
    <slot name="form" :post="post"></slot>
    <div class="form-group my-3 text-center">
        <button class="btn btn-success w-50 m-auto fv-w-75-sm">Editer</button>
    </div>
</form>
</template>
<script>
export default {
    data() {
        return {
            notifs: false,
            state: false,
            post: {},
        }
    },
    methods: {
        getPost: function() {
            this.$http.get(this.urlPrefix.toLowerCase() + 
            '/' + this.$route.params.id, this.$token()).then( (response) => {
                this.post = response.data.data;
                document.title = `Editer "${this.post.sub_title ||
                 this.post.title || this.post.name || 
                 this.post.content}" | ${this.$defaultTitle}`;
                 tinymce.init({
                    selector: '#editorCu',
                });
            }).catch(() => {
                this.$router.back();
            })
        },
        submit: function(e) {
            $('html, body').animate(
                {scrollTop: 0},600 );
            let data = new FormData(e.target);

            this.$Progress.start();
            this.$http.post(this.urlPrefix.toLowerCase() + '/' 
            + this.$route.params.id, data, this.$token()).then( (response) => {
                this.notifs = response.data.message;
                this.state = response.data.success;
                this.$toastr("POST", this.notifs, "success");
                this.$Progress.finish();
            }).catch((error) => {
                this.notifs = error.response.data.message;
                this.state = error.response.data.success;
                this.$toastr("POST", this.$BadFieldsErrorMessage, "error");
                this.$Progress.fail();
            })
        },
        remove: function() {
            this.$http.delete(this.urlPrefix.toLowerCase() + 
                '/' + this.$route.params.id, this.$token()).then( (response) => {
                this.$toastr("SUPPRESSION D'UN POST", response.data.message, "success");
                this.$router.push({name: 'view' + this.urlPrefix});
            });
        },
    },
    mounted() {
        this.getPost();
    },
}
</script>