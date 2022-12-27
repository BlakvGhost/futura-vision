<script setup>
   import ContactUs from "../components/ContactUs.vue";
   defineProps({
       title: String,
       titleString: String,
       uri: {
           required: true,
           type: String,
       },
   })
</script>
<template>
    <div class="border-top p-3">
        <article class="container-custom my-3">
            <div class="text-end fv-title-normal my-2" style="font-size:22px;">
               Publié {{ new Date(post.updated_at).toLocaleString() }}
            </div>
            <blockquote>
                <div class="fv-title-normal fvSlideOn">
                    <h3 class="text-fv-primary"><span class="dbslash">//</span> &nbsp; {{ title? post[title]: titleString }} </h3>
                </div>
                <slot name="post" :post="post"></slot>
            </blockquote>
            <div class="my-3 border-top">
                <div class="p-2" style="font-size:22px">
                    <p>Partager: </p>
                    <a href="javascript:void(0)" class="text-decoration-none"><i class="mdi mdi-facebook"></i></a>
                    <a href="javascript:void(0)" class="text-decoration-none"><i class="mdi mdi-twitter"></i></a>
                    <a href="javascript:void(0)" class="text-decoration-none"><i class="mdi mdi-whatsapp"></i></a>
                    <a href="javascript:void(0)" class="text-decoration-none"><i class="mdi mdi-linkedin"></i></a>
                </div>
            </div>
            <ContactUs></ContactUs>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {},
        }
    },
    methods: {
        getPost: function() {
            this.$http.get(`${this.uri}/${this.$route.params.id}` ,
            this.$token()).then( (response) => {
                this.post = response.data.data;
                document.title = `${this.post.sup_title || 
                 this.post.title || this.post.name} | ${this.$defaultTitle}`;
            })
        },
    },
    mounted() {
        this.getPost();
        this.$animate();
        this.$router.afterEach((to, from) => {
            to.name === 'service'? this.getPost(): !1;
        })
    },   

}
</script>