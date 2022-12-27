<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Store from '@/components/dash/Store.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Store url-prefix="About">
                <template #form>
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
                                    class="form-control" required>
                            </div>
                            <div class="form-group my-2">
                                <label for="title2" class="form-text">Experience</label>
                                <input type="text" name="experience" id="title2" placeholder="Entrer le contenu de l'Experience"
                                    class="form-control" required>
                            </div>
                            <div class="form-group my-2">
                                <label for="title3" class="form-text">Support</label>
                                <input type="text" name="support" id="title3" placeholder="Entrer le contenu de Support"
                                    class="form-control" required>
                            </div>
                            <div class="form-group my-2">
                                <label for="cover" class="form-text">Images *</label>
                                <select name="cover[]" id="cover" multiple class="form-select" required>
                                    <option :value="gallery.id" v-for="gallery in galleries" :key="gallery"> {{ gallery.title }} </option>
                                </select>
                            </div>
                            <div class="form-group my-2">
                                <label for="editor" class="form-text">Contenu *</label>
                                <textarea name="content" cols="30" rows="6" class="form-control" required></textarea>
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
                                    class="form-control" required>
                            </div>
                            <div class="form-group my-2">
                                <label for="email_id" class="form-text">Email: </label>
                                <input type="text" name="email" id="email_id" placeholder="Entrer votre Email Public"
                                    class="form-control" required>
                            </div>
                            <div class="form-group my-2">
                                <label for="adr_id" class="form-text">Votre Adresse: </label>
                                <input type="text" name="address" id="adr_id" placeholder="Entrer votre Adresse Public"
                                    class="form-control" required>
                            </div>
                            <div class="form-group my-2">
                                <label for="logo_id" class="form-text">Votre Logo: </label>
                                <input type="file" name="logo" id="logo_id" class="form-control" required>
                            </div>
                            <div class="form-group my-2">
                                <label for="fbLink" class="form-text">Votre URL Fb *: </label>
                                <input type="url" name="fbLink" id="fbLink" placeholder="Entrer votre Lien Fb Public"
                                    class="form-control">
                            </div>
                            <div class="form-group my-2">
                                <label for="twtLink" class="form-text">Votre URL Twitter *: </label>
                                <input type="url" name="twtLink" id="twtLink" placeholder="Entrer votre Lien Twitter Public"
                                    class="form-control">
                            </div>
                            <div class="form-group my-2">
                                <label for="lkdLink" class="form-text">Votre URL Linkedin *: </label>
                                <input type="url" name="lkdLink" id="lkdLink" placeholder="Entrer votre Lien Linkedin Public"
                                    class="form-control">
                            </div>
                            <div class="form-group my-2">
                                <label for="whLink" class="form-text">Votre URL Whatsapp *: </label>
                                <input type="url" name="whLink" id="whLink" placeholder="Entrer votre Lien Whatsapp Public"
                                    class="form-control">
                            </div>
                        </section>
                    </div>
                </template>
            </Store>
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
    },
    created() {
        this.getPost();
    }
}
</script>