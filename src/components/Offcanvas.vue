<script setup>
defineProps({
    filldata: Object,
})
</script>
<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="gridShow" aria-labelledby="gridShowLabel"
        style="z-index:500000">
        <div class="offcanvas-header">
            <a href="/" class="offcanvas-title" id="gridShowLabel">
                <img :src="$loadImage(filldata.config.logo)" alt="logo de futuravision"
                    style="width:160px; max-height:40px">
            </a>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="navbar-nav fv-d-none-lg mb-3">
                <div class="fv-slide-title-big">
                    <h4 class="oswald-bold fw-bold text-dark text-decoration-underline">Pages</h4>
                </div>
                <div class="navbar-brand fv-list animate__animated animate__fadeInDown">
                    <router-link to="/" class="nav-link fw-bold">Acceuil</router-link>
                </div>
                <div class="navbar-brand fv-list animate__animated animate__fadeInDown fv-zd">
                    <a href="javascript:void(0)" class="nav-link text-dark fw-bold dropdown-toggle"
                        data-bs-toggle="collapse" data-bs-target="#home2Label" id="home2">Nos-Services</a>
                    <div class="fv-list-group collapse animate__animated animate__fadeInDown" aria-labelledby="home"
                        id="home2Label">
                        <ul class="list-group animate__animated animate__fadeInDown">
                            <li class="list-group-item list-group-item-action border-0">
                                <router-link :to="{ name: 'services' }" class="nav-link">
                                    <i class="mdi mdi-arrow-right-thin align-middle"></i>
                                    &nbsp; <span>Tout Nos Services</span>
                                </router-link>
                            </li>
                            <li class="list-group-item list-group-item-action border-0" v-for="sv in filldata.services"
                                :key="sv.id">
                                <router-link :to="{ name: 'service', params: { id: sv.id ?? 0, title: $url(sv.name) } }"
                                    class="nav-link" active-class="active disabled text-decoration-line-through">
                                    <i class="mdi mdi-arrow-right-thin align-middle"></i>
                                    &nbsp;
                                    <span> {{ sv.name }} </span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="navbar-brand fv-list animate__animated animate__fadeInDown fv-zd">
                    <a href="javascript:void(0)" class="nav-link text-dark fw-bold dropdown-toggle"
                        data-bs-toggle="collapse" data-bs-target="#public2Label" id="home">Public</a>
                    <div class="fv-list-group collapse animate__animated animate__fadeInDown" aria-labelledby="home"
                        id="public2Label">
                        <ul class="list-group animate__animated animate__fadeInDown">
                            <li class="list-group-item list-group-item-action border-0">
                                <router-link :to="{ name: 'blog' }" class="nav-link">
                                    <i class="mdi mdi-arrow-right-thin align-middle"></i>
                                    &nbsp; <span>Blog</span>
                                </router-link>
                            </li>
                            <li class="list-group-item list-group-item-action border-0">
                                <router-link :to="{ name: 'forum' }" class="nav-link">
                                    <i class="mdi mdi-arrow-right-thin align-middle"></i>
                                    &nbsp; <span>Forum</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="navbar-brand fv-list animate__animated animate__fadeInDown">
                    <router-link :to="{ name: 'contact' }" class="nav-link fw-bold">Contactez-Nous</router-link>
                </div>
            </div>
            <div class="fv-slide-title-normal">
                <div class="fv-slide-title-big mb-3">
                    <h4 class="oswald-bold fw-bold text-dark text-decoration-underline">A Propos de Nous</h4>
                </div>
                <h5>
                    {{ filldata.config.about_description }}
                </h5>
            </div>
            <div class="my-3">
                <div class="fv-slide-title-big fvSlideOn">
                    <h4 class="oswald-bold fw-bold text-dark">Gallery</h4>
                </div>
                <div class="my-2">
                    <div class="container-fluid h-75">
                        <div class="row w-100 h-100">
                            <div class="fv-img-fluid col col-6 p-2">
                                <img :src="$loadImage(filldata.config.about_image_1)"
                                    :alt="filldata.config.about_description" class="shadow img-thumbnail">
                            </div>
                            <div class="fv-img-fluid col col-6 p-2">
                                <img :src="$loadImage(filldata.config.about_image_2)"
                                    :alt="filldata.config.about_description" class="shadow img-thumbnail">
                            </div>
                            <div class="fv-img-fluid col col-6 p-2">
                                <img :src="$loadImage(filldata.config.about_image_3)"
                                    :alt="filldata.config.about_description" class="shadow img-thumbnail">
                            </div>
                            <div class="fv-img-fluid col col-6 p-2">
                                <img :src="$loadImage(filldata.config.about_image_4)"
                                    :alt="filldata.config.about_description" class="shadow img-thumbnail">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-3">
                <div class="fv-slide-title-big fvSlideOn">
                    <h4 class="oswald-bold fw-bold text-dark">Contacts</h4>
                </div>
                <div class="my-2">
                    <div class="fv-slide-title-normal fvSlideOn">
                        <h5>
                            <a href="javascript:void(0)" class="nav-link text-black">
                                <i class="mdi mdi-earth text-fv-primary mdi-24px align-middle"></i>
                                &nbsp;&nbsp; {{ filldata.config.address }}
                            </a>
                        </h5>
                    </div>
                    <div class="fv-slide-title-normal fvSlideOn">
                        <h5>
                            <a :href="`phone:${filldata.config.phone_number}`" class="nav-link text-black">
                                <i class="mdi mdi-phone text-fv-primary mdi-24px align-middle"></i>
                                &nbsp;&nbsp; {{ filldata.config.phone_number }}
                            </a>
                        </h5>
                    </div>
                    <div class="fv-slide-title-normal fvSlideOn">
                        <h5>
                            <a :href="`mailto:${filldata.config.email}`" class="nav-link text-black">
                                <i class="mdi mdi-email text-fv-primary mdi-24px align-middle"></i>
                                &nbsp;&nbsp; {{ filldata.config.email }}
                            </a>
                        </h5>
                    </div>
                </div>
            </div>
            <div>
                <div class="text-center my-3">
                    <h4 class="text-dark fvSlideOn">Copyright {{ new Date().getFullYear() }} - FuturaVision All Right
                        Reserved</h4>
                </div>
                <div class="text-center mb-2">
                    <a :href="filldata.config.lien_twitter" v-if="filldata.config.lien_twitter"
                        class="text-black-50 text-decoration-none">
                        <i class="mdi mdi-twitter"></i>
                    </a>
                    <a :href="filldata.config.lien_fb" v-if="filldata.config.lien_fb"
                        class="text-black-50 text-decoration-none">
                        <i class="mdi mdi-facebook"></i>
                    </a>
                    <a :href="filldata.config.lien_whatsapp" v-if="filldata.config.lien_whatsapp"
                        class="text-black-50 text-decoration-none">
                        <i class="mdi mdi-whatsapp"></i>
                    </a>
                    <a :href="filldata.config.lien_linkedin" v-if="filldata.config.lien_linkedin"
                        class="text-black-50 text-decoration-none">
                        <i class="mdi mdi-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.dropdown-toggle::after {
    float: right;
}
</style>