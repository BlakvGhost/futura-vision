<script setup>
import SettingBase from '@/components/dash/SettingBase.vue';

</script>
<template>
    <SettingBase>
        <template #form="{ config }">
            <section class="d-none">
                <div class="form-group">
                    <h4 class="d-flex justify-content-between">
                        <span class="text-decoration-underline align-self-center">A propos</span>
                        <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button" data-bs-toggle="collapse"
                            data-bs-target="#stg">
                        </span>
                    </h4>
                    <section id="stg">
                        <div class="form-group my-2">
                            <label for="phone_id" class="form-text">Numero de Telephone: </label>
                            <input type="tel" name="phone_number" id="phone_id" placeholder="Entrer votre numero Public"
                                class="form-control form-control-lg" v-model="config.phone_number">
                        </div>
                        <div class="form-group my-2">
                            <label for="email_id" class="form-text">Email: </label>
                            <input type="text" name="email" id="email_id" placeholder="Entrer votre Email Public"
                                class="form-control form-control-lg" v-model="config.email">
                        </div>
                        <div class="form-group my-2">
                            <label for="adr_id" class="form-text">Votre Adresse: </label>
                            <input type="text" name="address" id="adr_id" placeholder="Entrer votre Adresse Public"
                                class="form-control form-control-lg" v-model="config.address">
                        </div>
                        <div class="form-group my-2">
                            <label for="logo_id" class="form-text">Votre Logo: </label>
                            <input type="file" name="logo" id="logo_id" class="form-control form-control-lg">
                            <a :href="$loadImage(config.logo)" target="_blank" v-if="config.logo">
                                Voir le Logo deja Importé
                            </a>
                            <input type="hidden" name="logo" v-model="config.logo" v-if="config.logo">
                        </div>
                        <div class="form-group my-2">
                            <label for="fbLink" class="form-text">Votre URL Fb *: </label>
                            <input type="url" name="lien_fb" id="fbLink" placeholder="Entrer votre Lien Fb Public"
                                class="form-control form-control-lg" v-model="config.lien_fb">
                        </div>
                        <div class="form-group my-2">
                            <label for="twtLink" class="form-text">Votre URL Twitter *: </label>
                            <input type="url" name="lien_twitter" id="twtLink"
                                placeholder="Entrer votre Lien Twitter Public" class="form-control form-control-lg"
                                v-model="config.lien_twitter">
                        </div>
                        <div class="form-group my-2">
                            <label for="lkdLink" class="form-text">Votre URL Linkedin *: </label>
                            <input type="url" name="lien_linkedin" id="lkdLink"
                                placeholder="Entrer votre Lien Linkedin Public" class="form-control form-control-lg"
                                v-model="config.lien_linkedin">
                        </div>
                        <div class="form-group my-2">
                            <label for="whLink" class="form-text">Votre URL Whatsapp *: </label>
                            <input type="url" name="lien_whatsapp" id="whLink"
                                placeholder="Entrer votre Lien Whatsapp Public" v-model="config.lien_whatsapp"
                                class="form-control form-control-lg">
                        </div>
                    </section>
                </div>
                <div class="form-group">
                    <h4 class="d-flex justify-content-between">
                        <span class="text-decoration-underline align-self-center">Pourquoi nous choisir</span>
                        <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button" data-bs-toggle="collapse"
                            data-bs-target="#pnsh">
                        </span>
                    </h4>
                    <section id="pnsh" class="collapse">
                        <div class="form-group my-2">
                            <label for="titre_ns_choisir" class="form-text">Titre</label>
                            <input type="text" name="titre_ns_choisir" id="titre_ns_choisir"
                                placeholder="Entrer le titre: " v-model="config.titre_ns_choisir" class="form-control form-control-lg">
                        </div>
                        <div class="row row-cols-2 my-2 fv-f-direc-col-sm">
                            <div class="form-group fv-w-100-sm">
                                <label for="image_ns_choisir_bg_1" class="form-text">Bg Image 1*</label>
                                <input type="file" name="image_ns_choisir_bg_1" id="image_ns_choisir_bg_1"
                                    class="form-control form-control-lg">
                                <a :href="$loadImage(config.image_ns_choisir_bg_1)" target="_blank"
                                    v-if="config.image_ns_choisir_bg_1">
                                    Voir l'image deja Importé
                                </a>
                                <input type="hidden" name="image_ns_choisir_bg_1" v-model="config.image_ns_choisir_bg_1"
                                    v-if="config.image_ns_choisir_bg_1">
                                <div>
                                    <div class="form-group my-2">
                                        <label for="valeur_ns_choisir_bg_1" class="form-text">Valeur</label>
                                        <input type="text" name="valeur_ns_choisir_bg_1" id="valeur_ns_choisir_bg_1"
                                            placeholder="Entrer la valeur: " v-model="config.valeur_ns_choisir_bg_1"
                                            class="form-control form-control-lg">
                                    </div>
                                    <div class="form-group my-2">
                                        <label for="titre_ns_choisir_bg_1" class="form-text">Titre</label>
                                        <input type="text" v-model="config.titre_ns_choisir_bg_1"
                                            name="titre_ns_choisir_bg_1" id="titre_ns_choisir_bg_1"
                                            placeholder="Entrer le titre: " class="form-control form-control-lg">
                                    </div>
                                    <div class="form-group my-2">
                                        <label for="description_ns_choisir_bg_1" class="form-text">Description</label>
                                        <textarea v-model="config.description_ns_choisir_bg_1"
                                            name="description_ns_choisir_bg_1" id="description_ns_choisir_bg_1"
                                            cols="30" rows="4" class="form-control form-control-lg">
                                            </textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group fv-w-100-sm">
                                <label for="image_ns_choisir_bg_2" class="form-text">Bg Image 1*</label>
                                <input type="file" name="image_ns_choisir_bg_2" id="image_ns_choisir_bg_2"
                                    class="form-control form-control-lg">
                                <a :href="$loadImage(config.image_ns_choisir_bg_2)" target="_blank"
                                    v-if="config.image_ns_choisir_bg_2">
                                    Voir l'image deja Importé
                                </a>
                                <input type="hidden" name="image_ns_choisir_bg_2" v-model="config.image_ns_choisir_bg_2"
                                    v-if="config.image_ns_choisir_bg_2">
                                <div>
                                    <div class="form-group my-2">
                                        <label for="valeur_ns_choisir_bg_2" class="form-text">Valeur</label>
                                        <input type="text" v-model="config.valeur_ns_choisir_bg_2"
                                            name="valeur_ns_choisir_bg_2" id="valeur_ns_choisir_bg_2"
                                            placeholder="Entrer la valeur: " class="form-control form-control-lg">
                                    </div>
                                    <div class="form-group my-2">
                                        <label for="titre_ns_choisir_bg_2" class="form-text">Titre</label>
                                        <input type="text" v-model="config.titre_ns_choisir_bg_2"
                                            name="titre_ns_choisir_bg_2" id="titre_ns_choisir_bg_2"
                                            placeholder="Entrer le titre: " class="form-control form-control-lg">
                                    </div>
                                    <div class="form-group my-2">
                                        <label for="description_ns_choisir_bg_2" class="form-text">Description</label>
                                        <textarea v-model="config.description_ns_choisir_bg_2"
                                            name="description_ns_choisir_bg_2" id="description_ns_choisir_bg_2"
                                            cols="30" rows="4" class="form-control form-control-lg">
                                            </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="form-group">
                    <h4 class="d-flex justify-content-between">
                        <span class="text-decoration-underline align-self-center">Nos Services</span>
                        <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button" data-bs-toggle="collapse"
                            data-bs-target="#svs">
                        </span>
                    </h4>
                    <section id="svs" class="collapse">
                        <div class="form-group my-2">
                            <label for="titre_service" class="form-text">Titre: </label>
                            <input type="text" v-model="config.titre_service" name="titre_service" id="titre_service"
                                placeholder="Entrer le titre " class="form-control form-control-lg">
                        </div>
                    </section>
                </div>
                <div class="form-group">
                    <h4 class="d-flex justify-content-between">
                        <span class="text-decoration-underline align-self-center">Nous Contactez</span>
                        <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button" data-bs-toggle="collapse"
                            data-bs-target="#nct">
                        </span>
                    </h4>
                    <section id="nct" class="collapse">
                        <div class="form-group my-2">
                            <label for="titre_sup_contact" class="form-text">Titre: *</label>
                            <input type="text" v-model="config.titre_sup_contact" name="titre_sup_contact"
                                id="titre_sup_contact" placeholder="Entrer le titre Superieur: " class="form-control form-control-lg">
                        </div>
                        <div class="row row-cols-2 my-2 fv-f-direc-col-sm">
                            <div class="form-group fv-w-100-sm">
                                <label for="image_contact_bg" class="form-text">Bg Image</label>
                                <input type="file" name="image_contact_bg" id="image_contact_bg" class="form-control form-control-lg">
                                <a :href="$loadImage(config.image_contact_bg)" target="_blank"
                                    v-if="config.image_contact_bg">
                                    Voir l'image deja Importé
                                </a>
                                <input type="hidden" name="image_contact_bg" v-model="config.image_contact_bg"
                                    v-if="config.image_contact_bg">
                            </div>
                            <div class="form-group fv-w-100-sm">
                                <label for="titre_contact" class="form-text">Titre: *</label>
                                <input type="text" v-model="config.titre_contact" name="titre_contact"
                                    id="titre_contact" placeholder="Entrer le titre " class="form-control form-control-lg">
                            </div>
                        </div>
                    </section>
                </div>
                <div class="form-group">
                    <h4 class="d-flex justify-content-between">
                        <span class="text-decoration-underline align-self-center">Derniers Projects</span>
                        <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button" data-bs-toggle="collapse"
                            data-bs-target="#dpr">
                        </span>
                    </h4>
                    <section id="dpr" class="collapse">
                        <div class="form-group my-2">
                            <label for="titre_projet" class="form-text">Titre: *</label>
                            <input type="text" v-model="config.titre_projet" name="titre_projet" id="titre_projet"
                                placeholder="Entrer le titre " class="form-control form-control-lg">
                        </div>
                        <div class="form-group my-2">
                            <label for="description_projet" class="form-text">Description</label>
                            <textarea v-model="config.description_projet" name="description_projet"
                                id="description_projet" cols="30" rows="6" class="form-control form-control-lg"></textarea>
                        </div>
                    </section>
                </div>
                <div class="form-group">
                    <h4 class="d-flex justify-content-between">
                        <span class="text-decoration-underline align-self-center">Technologies</span>
                        <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button" data-bs-toggle="collapse"
                            data-bs-target="#tech">
                        </span>
                    </h4>
                    <section id="tech" class="collapse">
                        <div class="form-group my-2">
                            <label for="titre_technologie" class="form-text">Titre: *</label>
                            <input type="text" v-model="config.titre_technologie" name="titre_technologie"
                                id="titre_technologie" placeholder="Entrer le titre " class="form-control form-control-lg">
                        </div>
                        <div class="form-group">
                            <label for="bg_technologie" class="form-text">Bg Image</label>
                            <input type="file" name="bg_technologie" id="bg_technologie" class="form-control form-control-lg">
                            <a :href="$loadImage(config.bg_technologie)" target="_blank" v-if="config.bg_technologie">
                                Voir l'image deja Importé
                            </a>
                            <input type="hidden" name="bg_technologie" v-model="config.bg_technologie"
                                v-if="config.bg_technologie">
                        </div>
                    </section>
                </div>
                <div class="form-group">
                    <h4 class="d-flex justify-content-between">
                        <span class="text-decoration-underline align-self-center">Client</span>
                        <span class="mdi mdi-chevron-down-circle text-end
                                btn btn-outline-secondary align-self-center" role="button" data-bs-toggle="collapse"
                            data-bs-target="#cln">
                        </span>
                    </h4>
                    <section id="cln" class="collapse">
                        <div class="form-group my-2">
                            <label for="titre_client" class="form-text">Titre: *</label>
                            <input type="text" v-model="config.titre_client" name="titre_client" id="titre_client"
                                placeholder="Entrer le titre " class="form-control form-control-lg">
                        </div>
                    </section>
                </div>
                <div class="form-group">
                    <h4 class="d-flex justify-content-between">
                        <span class="text-decoration-underline align-self-center">Notre Equipe</span>
                        <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button" data-bs-toggle="collapse"
                            data-bs-target="#nepq">
                        </span>
                    </h4>
                    <section id="nepq" class="collapse">
                        <div class="form-group my-2">
                            <label for="titre_equipe" class="form-text">Titre: *</label>
                            <input type="text" v-model="config.titre_equipe" name="titre_equipe" id="titre_equipe"
                                placeholder="Entrer le titre " class="form-control form-control-lg">
                        </div>
                    </section>
                </div>
                <div class="form-group">
                    <h4 class="d-flex justify-content-between">
                        <span class="text-decoration-underline align-self-center">Notre Blog</span>
                        <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button" data-bs-toggle="collapse"
                            data-bs-target="#nblog">
                        </span>
                    </h4>
                    <section id="nblog" class="collapse">
                        <div class="form-group my-2">
                            <label for="blog_titre" class="form-text">Titre: *</label>
                            <input type="text" v-model="config.titre_blog" name="titre_blog" id="blog_titre"
                                placeholder="Entrer le titre " class="form-control form-control-lg">
                        </div>
                    </section>
                </div>
                <div class="form-group">
                    <h4 class="d-flex justify-content-between">
                        <span class="text-decoration-underline align-self-center">Notre Forum</span>
                        <span class="mdi mdi-chevron-down-circle text-end 
                                btn btn-outline-secondary align-self-center" role="button" data-bs-toggle="collapse"
                            data-bs-target="#nforu">
                        </span>
                    </h4>
                    <section id="nforu" class="collapse">
                        <div class="form-group my-2">
                            <label for="forum_titre" class="form-text">Titre: *</label>
                            <input type="text" v-model="config.titre_forum" name="titre_forum" id="forum_titre"
                                placeholder="Entrer le titre " class="form-control form-control-lg">
                        </div>
                    </section>
                </div>
            </section>
            <section>
                <div class="form-group my-2 form-group-lg">
                    <label for="title" class="form-text">Titre *</label>
                    <input v-model="config.about_titre" type="text" name="about_titre" id="title"
                        placeholder="Entrer le titre" class="form-control form-control-lg">
                </div>
                <div class="form-group my-2">
                    <label for="title2" class="form-text">Experience</label>
                    <input type="text" name="about_experience" id="title2"
                        placeholder="Entrer le contenu de l'Experience" class="form-control form-control-lg"
                        v-model="config.about_experience">
                </div>
                <div class="form-group my-2">
                    <label for="title3" class="form-text">Support</label>
                    <input type="text" name="about_support" id="title3" placeholder="Entrer le contenu de Support"
                        class="form-control form-control-lg" v-model="config.about_support">
                </div>
                <div class="form-group my-2">
                    <label for="cover" class="form-text">Images de Description*</label>
                    <div class="row row-cols-4 fv-f-direc-col-sm">
                        <div class="form-group my-2 fv-w-100-sm">
                            <label for="about_image_1">Image 1</label>
                            <input type="file" class="form-control form-control-lg" name="about_image_1" id="about_image_1">
                            <a v-if="config.about_image_1" :href="$loadImageFV(config.about_image_1)" target="_blank"
                                rel="noopener noreferrer">
                                Voir L'image
                            </a>
                            <input type="hidden" name="about_image_1" v-model="config.about_image_1"
                                v-if="config.about_image_1">
                        </div>
                        <div class="form-group my-2 fv-w-100-sm">
                            <label for="about_image_1">Image 2</label>
                            <input type="file" class="form-control form-control-lg" name="about_image_2" id="about_image_2">
                            <a v-if="config.about_image_2" :href="$loadImageFV(config.about_image_2)" target="_blank"
                                rel="noopener noreferrer">
                                Voir L'image
                            </a>
                            <input type="hidden" name="about_image_2" v-model="config.about_image_2"
                                v-if="config.about_image_2">
                        </div>
                        <div class="form-group my-2 fv-w-100-sm">
                            <label for="about_image_3">Image 3</label>
                            <input type="file" class="form-control form-control-lg" name="about_image_3" id="about_image_3">
                            <a v-if="config.about_image_3" :href="$loadImageFV(config.about_image_3)" target="_blank"
                                rel="noopener noreferrer">
                                Voir L'image
                            </a>
                            <input type="hidden" name="about_image_3" v-model="config.about_image_3"
                                v-if="config.about_image_3">
                        </div>
                        <div class="form-group my-2 fv-w-100-sm">
                            <label for="about_image_4">Image 4</label>
                            <input type="file" class="form-control form-control-lg" name="about_image_4" id="about_image_4">
                            <a v-if="config.about_image_4" :href="$loadImageFV(config.about_image_4)" target="_blank"
                                rel="noopener noreferrer">
                                Voir L'image
                            </a>
                            <input type="hidden" name="about_image_4" v-model="config.about_image_4"
                                v-if="config.about_image_4">
                        </div>
                    </div>
                </div>
                <div class="form-group my-2">
                    <label for="editor" class="form-text">Contenu *</label>
                    <textarea name="about_description" cols="30" rows="6" class="form-control form-control-lg"
                        v-model="config.about_description"></textarea>
                </div>
            </section>
        </template>
    </SettingBase>
</template>