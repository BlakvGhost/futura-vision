<script setup>
import SearchBar from '@/components/SearchBar.vue'
defineProps({
    online: Boolean | Object,
    filldata: Object,
})
</script>
<template>
    <div class="header-color w-100 overflow-hidden fv-d-none-sm" id="a">
        <div class="container-custom" style="height: 23px">
            <nav class="navbar navbar-expand bg-transparent navbar-light justify-content-between h-100">
                <div class="navbar-nav">
                    <a :href="filldata.config.lien_twitter" v-if="filldata.config.lien_twitter"
                        class="nav-link text-light border-start">
                        <i class="mdi mdi-twitter"></i>
                    </a>
                    <a :href="filldata.config.lien_fb" v-if="filldata.config.lien_fb"
                        class="nav-link text-light border-start">
                        <i class="mdi mdi-facebook"></i>
                    </a>
                    <a :href="filldata.config.lien_whatsapp" v-if="filldata.config.lien_whatsapp"
                        class="nav-link text-light border-start">
                        <i class="mdi mdi-whatsapp"></i>
                    </a>
                    <a :href="filldata.config.lien_linkedin" v-if="filldata.config.lien_linkedin"
                        class="nav-link text-light border-end border-start">
                        <i class="mdi mdi-linkedin"></i>
                    </a>
                </div>
                <div class="navbar-nav">
                    <a :href="`phone:${filldata.config.phone_number}`"
                        class="nav-link text-white-50 border-start border-end">
                        <i class="mdi mdi-phone mdi-light"></i>&nbsp;&nbsp; {{ filldata.config.phone_number }}
                    </a>
                    <a :href="`mailto:${filldata.config.email}`" class="nav-link text-white-50 border-end">
                        <i class="mdi mdi-email mdi-light"></i>&nbsp;&nbsp; {{ filldata.config.email }}
                    </a>
                </div>
            </nav>
        </div>
    </div>
    <div class="bg-white w-100 position-relative" id="static-header">
        <vue-progress-bar></vue-progress-bar>
        <div class="container-custom">
            <nav class="navbar navbar-expand bg-white navbar-light justify-content-between pb-0">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-link px-0">
                        <img :src="$loadImageFV(filldata.config.logo)" alt="logo de futuravision"
                            style="width:160px; max-height:40px">
                    </router-link>
                </div>
                <div class="navbar-nav fv-d-none-sm">
                    <div class="navbar-brand fv-list dropdown animate__animated animate__fadeInDown">
                        <router-link to="/" class="nav-link fw-bold" id="home">Acceuil</router-link>
                    </div>
                    <div class="navbar-brand fv-list dropdown animate__animated animate__fadeInDown fv-zd">
                        <a href="javascript:void(0)" class="nav-link fw-bold dropdown-toggle" data-bs-toggle="dropdown"
                            id="serviceH">Nos-Services</a>
                        <div class="fv-list-group dropdown-menu animate__animated animate__fadeInDown"
                            aria-labelledby="serviceH">
                            <ul class="list-group animate__animated animate__fadeInDown">
                                <li class="list-group-item list-group-item-action border-0">
                                    <router-link :to="{ name: 'services' }" class="nav-link">
                                        <i class="mdi mdi-arrow-right-thin align-middle"></i>
                                        &nbsp; <span>Tout Nos Services</span>
                                    </router-link>
                                </li>
                                <li class="list-group-item list-group-item-action border-0"
                                    v-for="sv in filldata.services" :key="sv.id">
                                    <router-link
                                        :to="{ name: 'service', params: { id: sv.id ?? 0, title: $url(sv.name) } }"
                                        class="nav-link" active-class="active disabled text-decoration-line-through">
                                        <i class="mdi mdi-arrow-right-thin align-middle"></i>
                                        &nbsp;
                                        <span> {{ sv.name }} </span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="navbar-brand fv-list dropdown animate__animated animate__fadeInDown fv-zd">
                        <a href="javascript:void(0)" class="nav-link fw-bold dropdown-toggle" data-bs-toggle="dropdown"
                            id="public">Public</a>
                        <div class="fv-list-group dropdown-menu animate__animated animate__fadeInDown"
                            aria-labelledby="public">
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
                <div class="navbar-nav">
                    <div class="navbar-brand fv-m-0-sm">
                        {{ online }}
                        <router-link :to="{ name: 'login' }" class="nav-link position-relative" v-if="!online['role']">
                            <i class="mdi mdi-account-outline mdi-24px" title="CONNECT YOU"></i>
                        </router-link>
                        <router-link :to="{ name: 'defaultDash' }" class="nav-link position-relative"
                            v-if="online['role'] === 'admin'" title="GO TO DASHBOARD">
                            <i class="mdi mdi-console mdi-24px"></i>
                        </router-link>
                        <router-link :to="{ name: 'currentUser' }" class="nav-link position-relative"
                            v-if="online['role'] === 'standard'" title="YOUR ACCOUNT">
                            <i class="mdi mdi-account-cog mdi-24px"></i>
                        </router-link>
                    </div>
                    <div class="navbar-brand fv-m-0-sm">
                        <a href="/" class="nav-link position-relative" @click="$logout" v-if="online['role']"
                            title="Disconnect You">
                            <i class="mdi mdi-logout mdi-24px"></i>
                        </a>
                    </div>
                    <div class="navbar-brand fv-m-0-sm">
                        <a href="javascript:void(0)" class="nav-link position-relative" data-bs-toggle="collapse"
                            data-bs-target="#searchBarH">
                            <i class="mdi mdi-search-web mdi-24px"></i>
                        </a>
                    </div>
                    <div class="navbar-brand fv-m-0-sm">
                        <a href="javascript:void(0)" id="openGridShow" class="nav-link position-relative"
                            data-bs-toggle="offcanvas" data-bs-target="#gridShow" aria-controls="gridShowLabel">
                            <i class="mdi mdi-view-grid-outline mdi-24px"></i>
                        </a>
                    </div>
                </div>
            </nav>
            <nav class="border-top w-100 collapse" id="searchBarH">
                <SearchBar model="blog"></SearchBar>
            </nav>
        </div>
    </div>
</template>
<style>
.dropdown-toggle::after {
    vertical-align: middle;
}
</style>