<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Edit from '@/components/dash/Update.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Edit url-prefix="About">
                <template #form="data">
                    <div class="form-group">
                        <h4 class="d-flex justify-content-between">
                            <span class="text-decoration-underline align-self-center">A propos</span>
                            <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button"
                                data-bs-toggle="collapse" data-bs-target="#nab">
                            </span>
                        </h4>
                        <section id="nab">
                            <div class="form-group my-2">
                                <label for="title" class="form-text">Titre *</label>
                                <input type="text" name="title" id="title" placeholder="Entrer le titre"
                                    class="form-control" required v-model="data.post.title">
                            </div>
                            <div class="form-group my-2">
                                <label for="title2" class="form-text">Experience</label>
                                <input type="text" name="experience" id="title2" placeholder="Entrer le contenu de l'Experience"
                                    class="form-control" required v-model="data.post.experience">
                            </div>
                            <div class="form-group my-2">
                                <label for="title3" class="form-text">Support</label>
                                <input type="text" name="support" id="title3" placeholder="Entrer le contenu de Support"
                                    class="form-control" required v-model="data.post.support">
                            </div>
                            <div class="form-group my-2">
                                <label for="cover" class="form-text">Images *</label>
                                <select name="cover[]" id="cover" multiple class="form-select" required>
                                    <option :value="gallery.id" v-for="gallery in galleries" 
                                        :key="gallery" :selected="inside(gallery.id, data.post.galleries)"> 
                                        {{ gallery.title }}
                                    </option>
                                </select>
                            </div>
                            <div class="form-group my-2">
                                <label for="editor" class="form-text">Contenu *</label>
                                <textarea name="content" cols="30" rows="6" class="form-control" required v-model="data.post.content">

                                </textarea>
                            </div>
                        </section>
                    </div>
                    <div class="form-group">
                        <h4 class="d-flex justify-content-between">
                            <span class="text-decoration-underline align-self-center">Site Setting</span>
                            <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button"
                                data-bs-toggle="collapse" data-bs-target="#stg">
                            </span>
                        </h4>
                        <section id="stg" class="collapse">
                            <div class="form-group my-2">
                                <label for="phone_id" class="form-text">Numero de Telephone: </label>
                                <input type="text" name="phoneNumber" id="phone_id" placeholder="Entrer votre numero Public"
                                    class="form-control" required v-model="data.post.phoneNumber">
                            </div>
                            <div class="form-group my-2">
                                <label for="email_id" class="form-text">Email: </label>
                                <input type="text" name="email" id="email_id" placeholder="Entrer votre Email Public"
                                    class="form-control" required v-model="data.post.email">
                            </div>
                            <div class="form-group my-2">
                                <label for="adr_id" class="form-text">Votre Adresse: </label>
                                <input type="text" name="address" id="adr_id" placeholder="Entrer votre Adresse Public"
                                    class="form-control" required v-model="data.post.address">
                            </div>
                            <div class="form-group my-2">
                                <label for="logo_id" class="form-text">Votre Logo: </label>
                                <input type="file" name="logo" id="logo_id" class="form-control">
                                <a :href="$loadImage(data.post.logo)" target="_blank"> Visualiser l'image </a>
                            </div>
                            <div class="form-group my-2">
                                <label for="fbLink" class="form-text">Votre URL Fb *: </label>
                                <input type="url" name="fbLink" id="fbLink" placeholder="Entrer votre Lien Fb Public"
                                    class="form-control" v-model="data.post.fbLink">
                            </div>
                            <div class="form-group my-2">
                                <label for="twtLink" class="form-text">Votre URL Twitter *: </label>
                                <input type="url" name="twtLink" id="twtLink" placeholder="Entrer votre Lien Twitter Public"
                                    class="form-control" v-model="data.post.twtLink">
                            </div>
                            <div class="form-group my-2">
                                <label for="lkdLink" class="form-text">Votre URL Linkedin *: </label>
                                <input type="url" name="lkdLink" id="lkdLink" placeholder="Entrer votre Lien Linkedin Public"
                                    class="form-control" v-model="data.post.lkdLink">
                            </div>
                            <div class="form-group my-2">
                                <label for="whLink" class="form-text">Votre URL Whatsapp *: </label>
                                <input type="url" name="whLink" id="whLink" placeholder="Entrer votre Lien Whatsapp Public"
                                    class="form-control" v-model="data.post.whLink">
                            </div>
                        </section>
                    </div>
                </template>
            </Edit>
        </template>
    </DashBaseVue>
</template>
<script>
export default {
    data() {
        return {
            galleries: [],
        }
    },
    methods: {
        getPost: function() {
            this.$http.get('gallery',
            this.$token()).then( (response) => {
                this.galleries = response.data.data.reverse();
            })
        },
        inside: function(id, data) {
            let t = data ?? [{}];
            return t.filter((elt) => elt.id === id).length
        }
    },
    created() {
        this.getPost();
    }
}
</script>