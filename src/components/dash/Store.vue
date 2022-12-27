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
<div class="row justify-content-end mb-3 w-100">
    <router-link :to="{name: 'edit' + urlPrefix, params:{id: post}}" v-if="post" 
        role="button" class="btn btn-secondary col col-auto mx-2">
        <i class="mdi mdi-content-save-edit align-middle"></i>
        Editer Ce Post
    </router-link>
    <router-link :to="{name: 'view' + urlPrefix}" role="button" class="btn btn-dark col col-auto">
        <i class="mdi mdi-grid align-middle"></i> 
        Voir Tout
    </router-link>
</div>
<form action="/" method="POST" enctype="multipart/form-data" id="form" @submit.prevent="submit">
    <Alert :data="notifs" :state="state"></Alert>
    <slot name="form"></slot>
    <div class="form-group my-3 text-center">
        <button class="btn btn-success w-50 m-auto fv-w-75-sm">Publié</button>
    </div>
</form>
</template>

<script>
export default {
    data() {
        return {
            notifs: false,
            state: false,
            uri: '/',
            post: 0,
        }
    },
    methods: {
        submit: function(e) {
            $('html, body').animate(
                {scrollTop: 0},600 );
            let data = new FormData(e.target);

            this.$Progress.start();
            this.$http.post(this.uri, data, this.$token()).then( (response) => {
                this.post = response.data.data.id;
                this.notifs = response.data.message;
                this.state = response.data.success
                this.$toastr("POST", this.notifs, "success");
                this.$Progress.finish();
                e.target.reset();
            }).catch((error) => {
                this.notifs = error.response.data.message;
                this.state = error.response.data.success;
                this.$toastr("POST", this.$BadFieldsErrorMessage, "error");
                this.$Progress.fail();
            })
        }
    },
    mounted() {
        this.uri = this.urlPrefix.toLowerCase();
        tinymce.init({
          selector: '#editorCu',
      });
    },
}
</script>
