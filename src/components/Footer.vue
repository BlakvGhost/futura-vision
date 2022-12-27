<script setup>
defineProps({
    filldata: Object,
})
</script>
<template>
    <div id="f" class="text-center header-color py-3">
    <div class="container-custom">
        <div class="my-2 ">
            <a href="javascript:void(0)" class="text-light text-decoration-none">
                <h3 class="m-0">FuturaVision</h3>
            </a>
        </div>
        <div class="container-fluid">
            <div class="row row-cols-3 fv-f-direc-col-sm fv-f-direc-row-lg">
                <div class="text-center col fv-w-100-sm">
                    <a href="javascript:void(0)" class="text-decoration-none text-light">
                        <div class="">
                            <i class="mdi mdi-earth mdi-24px text-fv-secondary"></i>
                        </div>
                        <div>
                            <div class="fv-title-normal">
                                <h6 class="text-light oswald-md">
                                    {{ filldata.config.address }}
                                </h6>
                            </div>
                            <div class="fv-title-big mb-3">
                                <h6 class="text-white-50">Our Address</h6>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="text-center col fv-w-100-sm">
                    <a :href="`mailto:${filldata.config.email}`" class="text-decoration-none text-light">
                        <div class="">
                            <i class="mdi mdi-email mdi-24px text-fv-secondary"></i>
                        </div>
                        <div>
                            <div class="fv-title-normal">
                                <h6 class="text-light oswald-md">
                                    {{ filldata.config.email }}    
                                 </h6>
                            </div>
                            <div class="fv-title-big mb-3">
                                <h6 class="text-white-50">Our MailBox</h6>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="text-center col fv-w-100-sm">
                    <a :href="`phone:${filldata.config.phone_number}`" class="text-decoration-none text-light">
                        <div class="">
                            <i class="mdi mdi-phone mdi-24px text-fv-secondary"></i>
                        </div>
                        <div>
                            <div class="fv-title-normal">
                                <h6 class="text-light oswald-md">
                                    {{ filldata.config.phone_number }}
                                </h6>
                            </div>
                            <div class="fv-title-big mb-3">
                                <h6 class="text-white-50">Our Phone</h6>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="mx-auto my-2 fv-w-100-sm fv-w-75-lg">
            <div class="container">
                <div class="row row-cols-5">
                    <router-link to="/" class="col text-light">Home</router-link>
                    <router-link :to="{name: 'services'}" class="col text-light ">Services</router-link>
                    <router-link :to="{name: 'blog'}" class="col text-light ">Blog</router-link>
                    <router-link :to="{name: 'forum'}" class="col text-light ">Forum</router-link>
                    <router-link :to="{name: 'contact'}" class="col text-light ">Contacts</router-link>
                </div>
                <div class="text-center my-3">
                    <h4 class="text-light ">Copyright 2021 - {{ new Date().getFullYear() }} - FuturaVision All Right Reserved</h4>
                </div>
                <div class="text-center mb-2">
                    <a :href="filldata.config.lien_twitter" v-if="filldata.config.lien_twitter"
                    class="text-white-50 text-decoration-none">
                        <i class="mdi mdi-twitter"></i>
                    </a>
                    <a :href="filldata.config.lien_fb" v-if="filldata.config.lien_fb"
                    class="text-white-50 text-decoration-none">
                        <i class="mdi mdi-facebook"></i>
                    </a>
                    <a :href="filldata.config.lien_whatsapp" v-if="filldata.config.lien_whatsapp"
                    class="text-white-50 text-decoration-none">
                        <i class="mdi mdi-whatsapp"></i>
                    </a>
                    <a :href="filldata.config.lien_linkedin" v-if="filldata.config.lien_linkedin"
                    class="text-white-50 text-decoration-none">
                        <i class="mdi mdi-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>