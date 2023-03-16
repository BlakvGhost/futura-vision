<script setup>
    import Blog from "@/components/Blog.vue";
    import Forum from "@/components/Forum.vue";
    defineProps({
        data: Object,
        user: Object | Boolean,
    })
</script>
<template>
<div id="b" class="slideshow w-100 overflow-hidden position-relative" style="height: 85vh;">
    <div class="h-100">
        <div class="carousel-control position-absolute start-0 text-white w-100" style="bottom: 10%;z-index: 5">
            <div class="container-custom">
                <div class="" style="width: 150px;">
                    <div class="row row-cols-3 flex-nowrap w-100">
                        <div class="fv-carousel-control-prev col align-self-center">
                            <a role="button" class="btn">
                                <i class="mdi mdi-arrow-left-thin mdi-light"></i>
                            </a>
                        </div>
                        <div class="fv-carousel-numerous col d-flex flex-nowrap align-self-center">
                            <span> {{ currentSlide }} </span>
                            <span>/</span>
                            <span>{{ data.carousel.length }}</span>
                        </div>
                        <div class="fv-carousel-control-next col align-self-center">
                            <a role="button" class="btn">
                                <i class="mdi mdi-arrow-right-thin mdi-light"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-inner h-100 w-100 home-slide owl-carousel d-flex">
                <div class="carousel-item active h-100 w-100" v-for="slid in $reverse(data.carousel)" :key="slid.id">
                    <div class="position-absolute start-0 top-0 full rank"
                        :style="`background-image: url(${ $loadImage(slid.cover)});`" >
                        <div class="full opacity-75 bg-dark"></div>                  
                    </div>
                    <div class="position-absolute start-0 text-white h-100 w-100" style="top: 16%;">
                        <div class="container-custom">
                            <div class="fv-slide-title">
                                <div class="fv-slide-title-normal" :class="'fvSlideOn'">
                                    <h3><span class="dbslash">//</span> &nbsp; {{ slid.sub_title }} </h3>
                                </div>
                                <div class="fv-slide-title-big" :class="'fvSlideOn'">
                                    <h1 class="text-uppercase fa-3x fw-bolder write"> {{slid.sup_title}} </h1>
                                </div>
                                <div class="fv-slide-title-normal" :class="'fvSlideOn'">
                                    <h4>{{ $reduce(slid.content, 150) }}</h4>
                                </div>
                                <div style="width: 150px;" class="mt-4" :class="'fvSlideOn'">
                                    <router-link :to="{name: 'post', params: {id: slid.id ?? 0, title: $url(slid.sub_title)}}"
                                        class="btn btn-custom w-100 text-white fw-bolder">
                                        LIRE PLUS
                                     </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
<div id="c" class="fv-partners bg-third">
    <div class="container-custom overflow-hidden">
        <div class="swiper swiper-partner">
            <div class="swiper-wrapper">
                <div class="swiper-slide fv-w-25-lg fv-w-50-sm" v-for="partner in $reverse(data.partners)" :key="partner">
                    <div class="fv-p-4-lg fv-p-3-sm">
                        <a href="javascript:void(0)" class="text-black-50 text-decoration-none" :class="'fvSlideOn'" >
                            <h4 class="m-0">
                                <img v-if="partner.logo" :src="$loadImage(partner.logo)" :alt="partner.name" :title="partner.name" style="width:34px; max-height:40px;">
                                <i v-if="partner.icon" :class="`mdi ${partner.icon} align-middle`" :title="partner.name"></i>
                                 {{ partner.name }}
                            </h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="d" class="w-100 py-3">
    <div class="container-custom my-4">
        <div class="row row-cols-lg-2 row-cols-sm-1 fv-f-direc-col-sm">
            <div class="col col-lg-6 col-sm-12 fv-w-100-sm">
                <div class="fv-title-normal" >
                    <h3 class="text-uppercase text-fv-primary"><span class="dbslash">//</span> &nbsp;A propos de Nous </h3>
                </div>
                <div class="fv-title-big" :class="'fvSlideOn'" >
                    <h3 class="text-dark fw-bolder oswald-bold"
                     data-fv-anim='autowrite' :data-fv-data="$avoid(data.config, 'about_titre')">
                     
                     </h3>
                </div>
                <div class="fv-title-normal">
                    <h4 class="text-black-50">
                        {{ $reduce($avoid(data.config, 'about_description'), 100) }}
                    </h4>
                </div>
                <div class="row row-cols-lg-2 row-cols-sm-1">
                    <div class="col col-lg-6 col-sm-12">
                        <div class="text-fv-primary">
                            <i class="mdi mdi-certificate-outline mdi-36px align-middle"></i>
                        </div>
                        <div class="fv-title-big border-bottom py-2 px-1" style="width: fit-content;"
                         :class="'fvSlideOn'">
                            <h6 class="text-black fw-bolder oswald-bold">Experience</h6>
                        </div>
                        <div class="fv-title-normal py-2" :class="'fvSlideOn'">
                            <h5 class="text-black-50">{{ $avoid(data.config, 'about_experience') }} </h5>
                        </div>
                    </div>
                    <div class="col col-lg-6 col-sm-12" :class="'fvSlideOn'">
                        <div class="text-fv-primary">
                            <i class="mdi mdi-timer-cog-outline mdi-36px align-middle"></i>
                        </div>
                        <div class="fv-title-big border-bottom py-2 px-1" style="width: fit-content;">
                            <h6 class="text-black fw-bolder oswald-bold">Support Rapide</h6>
                        </div>
                        <div class="fv-title-normal py-2">
                            <h5 class="text-black-50">{{ $avoid(data.config, 'about_support') }}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-lg-6 col-sm-12 fv-w-100-sm">
                <div class="container-fluid fv-h-75-lg fv-h-100-sm fv-p-0-sm">
                    <div class="row w-100 h-100 fv-m-0-sm">
                        <div class="fv-img-fluid col col-6 p-2 fv-w-50-sm">
                            <img :src="$loadImage(data.config?data.config.about_image_1:null)" :alt="$avoid(data.config, 'about_experience')" class="shadow img-thumbnail">
                        </div>
                        <div class="fv-img-fluid col col-6 p-2 fv-w-50-sm">
                            <img :src="$loadImage(data.config?data.config.about_image_2:null)" :alt="$avoid(data.config, 'about_experience')" class="shadow img-thumbnail">
                        </div>
                        <div class="fv-img-fluid col col-6 p-2 fv-w-50-sm">
                            <img :src="$loadImage(data.config?data.config.about_image_3:null)" :alt="$avoid(data.config, 'about_experience')" class="shadow img-thumbnail">
                        </div>
                        <div class="fv-img-fluid col col-6 p-2 fv-w-50-sm">
                            <img :src="$loadImage(data.config?data.config.about_image_4:null)" :alt="$avoid(data.config, 'about_experience')" class="shadow img-thumbnail">
                        </div>                   
                    </div>
                </div>
                <div class="w-100 h-auto p-3">
                    <router-link :to="{name: 'about'}" class="text-fv-secondary text-decoration-none" :class="'fvSlideOn'">
                        <i class="mdi mdi-arrow-right-thin align-middle"></i>
                        &nbsp;
                        <span class="text-uppercase">Apprendre plus sur Nous !</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="e" class="w-100 py-3 header-color text-white">
    <div class="container-custom my-4 position-relative">
        <div class="text-center fv-w-50-lg fv-w-100-sm m-auto">
            <div class="fv-title-normal" :class="'fvSlideOn'">
                <h4 class="text-uppercase text-fv-primary"><span class="dbslash">//</span> &nbsp;Pourquoi nous choisir ? </h4>
            </div>
            <div class="fv-title-big">
                <h3 class="fw-bolder oswald-bold" data-fv-anim='autowrite'
                 :data-fv-data="$avoid(data.config, 'titre_ns_choisir')">
                </h3>
            </div>
        </div>
        <div class="w-100 mb-5 pb-3">
            <div class="container-fluid p-0">
                <div class="row fv-f-direc-col-sm">
                    <div data-aos="fade-left" class="card border-0 overflow-hidden 
                    fv-hov-light col shadow bg-primary-x fv-p-3-lg fv-m-2-lg fv-my-2-sm
                     fv-mx-auto-sm position-relative fv-w-75-sm rounded-3" v-for="wu in $reverse(data.exploits)" :key="wu">
                        <div class="position-absolute start-0 top-0 opacity-25 p-2">
                            <div class="fv-title-big opacity-50" :class="'fvSlideOn'">
                                <h1 class="fw-bolder fa-3x oswald-bold" data-fv-anim='countdown' :data-fv-data='wu.value'></h1>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="fv-title-big">
                                <h6 class="fw-bolder oswald-bold"> {{ wu.name}} </h6>
                            </div>
                            <div class="fv-title-normal">
                                <h6 class="text-white-50">{{ $reduce(wu.content, 100) }}</h6>
                            </div>
                            <div class="py-2 x-trans-div">
                                <router-link class="text-fv-secondary text-decoration-none
                                 x-trans-link p-2 rounded-pill" :to="{name: 'activity', params: {id: wu.id ??0, title: $url(wu.name)}}">
                                    <i class="mdi mdi-arrow-right-thin align-middle"></i>
                                    &nbsp;
                                    <span class="text-uppercase">Apprendre Plus</span>
                                </router-link>
                            </div>
                        </div>
                        <div class="position-absolute end-0 bottom-0" data-aos="fade-right">
                            <div class="bg-opacity-25 p-2 bg-light" style="border-top-left-radius: 50%;">
                                <div class="text-white">
                                    <i :class="`mdi ${wu.icon} mdi-36px align-middle`"></i>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        <div class="fv-position-absolute-lg start-0 w-100" style="bottom: -35%;height: 133px;">
            <div class="container-fluid">
                <div class="row fv-f-direc-col-sm">
                    <div class="col shadow mx-2 position-relative fv-my-2-sm">
                        <div class="position-absolute start-0 top-0 full rank"
                         :style="`background-image: url('${$loadImage(data.config?data.config.image_ns_choisir_bg_1:null )}');`" >
                            <div class="full opacity-75 bg-dark"></div>                  
                        </div>
                        <div class="text-white h-100 w-100">
                            <div class="p-3">
                                <div class="fv-slide-title">
                                    <div class="fv-slide-title-big" :class="'fvSlideOn'">
                                        <h4 class="fw-bolder oswald-bold">
                                            <span class='fw-bolder oswald-bold'>
                                                {{ $avoid(data.config, 'valeur_ns_choisir_bg_1') }}
                                            </span>
                                        </h4>
                                    </div>
                                    <div class="fv-slide-title-big" :class="'fvSlideOn'">
                                        <h5 class="fw-bolder oswald-bold">{{ $avoid(data.config, 'titre_ns_choisir_bg_1') }}</h5>
                                    </div>
                                    <div class="fv-slide-title-normal" :class="'fvSlideOn'">
                                        <h6>{{ $avoid(data.config, 'description_ns_choisir_bg_1') }}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col shadow mx-2 position-relative fv-my-2-sm">
                        <div class="position-absolute start-0 top-0 full rank"
                         :style="`background-image: url('${$loadImage(data.config?data.config.image_ns_choisir_bg_2:null )}');`" >
                            <div class="full opacity-75 bg-dark"></div>                  
                        </div>
                        <div class="text-white h-100 w-100">
                            <div class="p-3">
                                <div class="fv-slide-title">
                                    <div class="fv-slide-title-big" :class="'fvSlideOn'">
                                        <h4 class="fw-bolder oswald-bold">
                                            <span class='fw-bolder oswald-bold'>
                                                {{ $avoid(data.config, 'valeur_ns_choisir_bg_2') }}
                                            </span>
                                        </h4>
                                    </div>
                                    <div class="fv-slide-title-big" :class="'fvSlideOn'">
                                        <h5 class="fw-bolder oswald-bold">{{ $avoid(data.config, 'titre_ns_choisir_bg_2') }}</h5>
                                    </div>
                                    <div class="fv-slide-title-normal" :class="'fvSlideOn'">
                                        <h6>{{ $avoid(data.config, 'description_ns_choisir_bg_2') }}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="f" class="pt-5 mb-5 fv-my-6-sm">
    <div class="container-custom my-5 pt-5 pb-3 position-relative">
        <div class="row row-cols-2">
            <div class="col">
                <div class="fv-title-normal" :class="'fvSlideOn'">
                    <h3 class="text-uppercase text-fv-primary"><span class="dbslash">//</span> &nbsp;Nos services </h3>
                </div>
                <div class="fv-title-big" :class="'fvSlideOn'">
                    <h3 class="text-dark fw-bolder oswald-bold" 
                      data-fv-anim='autowrite' :data-fv-data="$avoid(data.config, 'titre_service')">
                    </h3>
                </div>
            </div>
            <div class="col text-end align-self-end" :class="'fvSlideOn'" id="allService">
                <router-link to="/nos-services" class="btn btn-custom text-white fw-bold">TOUT NOS SERVICES</router-link>
            </div>
        </div>
        <div class="row row-cols-3 my-3 fv-f-direc-col-sm">
            <div class="col fv-px-3-lg fv-w-100-sm
             fv-mx-auto-sm fv-my-2-sm p-1" v-for="sv in data.services" :key="sv">
                <div class="container-fluid p-3 border rounded-3 fv-hov bg-light">
                    <router-link :to="{name: 'service', params: {id: sv.id??0, title: $url(sv.name)}}" class="text-decoration-none">
                        <div class="row">
                            <div class="col col-auto">
                                <img v-if="sv.logo" :src="$loadImage(sv.logo)" :alt="sv.name" :title="sv.name" style="width:34px; max-height:40px;">
                                <i v-if="sv.icon" :class="`mdi ${sv.icon} mdi-36px text-fv-primary`"></i>
                            </div>
                            <div class="px-2 col">
                                <div class="fv-title-big">
                                    <h6 class="fw-bold oswald-bold text-dark"> {{ sv.name }} </h6>
                                </div>
                                <div class="fv-title-normal">
                                    <h6 class="text-black-50"> {{ $reduce(sv.content, 100) }} </h6>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="fv-position-absolute-lg start-0 w-100 fv-h-100-sm" style="bottom: -29%;height: 150px;">
            <div class="shadow p-3 position-relative full">
                <div class="position-absolute start-0 top-0 full rank" :style="`background-image: url('${$loadImage(data.config?data.config.image_contact_bg:null)}');`" >
                    <div class="full opacity-75 bg-dark">
                    </div>                    
                </div>
                <div class="containter-fluid full">
                    <div class="row row-cols-2 mb-4">
                        <div class="col">
                            <div class="fv-title-normal" :class="'fvSlideOn'">
                                <h3 class="text-light m-auto">
                                    <span class="dbslash">//</span>
                                    {{ $avoid(data.config, 'titre_sup_contact') }}
                                </h3>
                            </div>
                            <div class="fv-title-big" :class="'fvSlideOn'">
                                <h4 class="text-white fw-bolder oswald-bold"
                                 data-fv-anim='autowrite'
                                  :data-fv-data="$avoid(data.config, 'titre_contact')">
                                 </h4>
                            </div>
                        </div>
                        <div class="col text-end align-self-end" :class="'fvSlideOn'">
                            <router-link :to="{name: 'contact'}" class="btn btn-outline-light fw-bold">Nous Contacter</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="g" class="fv-py-5-lg bg-third">
    <div class="container-custom my-5 position-relative py-3 fv-text-center-sm">
        <div class="row row-cols-2 mt-4" :class="'fvSlideOn'">
            <div class="col fv-w-100-sm">
                <div class="fv-title-normal" :class="'fvSlideOn'">
                    <h4 class="text-uppercase text-fv-primary m-auto"><span class="dbslash">//</span> &nbsp; derniers projets realisés </h4>
                </div>
                <div class="fv-title-big" :class="'fvSlideOn'">
                    <h4 class="text-dark fw-bolder oswald-bold" data-fv-anim='autowrite' :data-fv-data="$avoid(data.config, 'titre_projet')"></h4>
                </div>
            </div>
            <div class="col text-black-50  fv-w-100-sm">
                <h5 class="m-auto">
                    {{ $avoid(data.config, 'description_projet') }}
                </h5>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="" style="overflow-x: hidden">
            <div class="swiper swiper-partner" style="height: 300px;">
                <div class="swiper-wrapper" style="height: 200px;">
                        <div class="swiper-slide fv-w-25-lg fv-w-100-sm h-100 fv-mx-3-lg
                         position-relative" v-for="pj in $reverse(data.projects)" :key="pj.id" >
                            <div class="card h-100 overflow-hidden" :class="'fvSlideOn'">
                                <div class="card-body p-0">
                                    <div class="fv-img-fluid w-100 h-100">
                                        <img :src="$loadImage(pj.cover)" :alt="pj.name">
                                    </div>
                                </div>
                            </div>
                            <div class="position-absolute start-0 w-100" :class="'fvSlideOn'" style="bottom: -15%;">
                                <div class="shadow position-relative h-100 w-75 m-auto header-color
                                 overflow-hidden fv-hov-light" style="border-top-left-radius: 30%,
                                 border-bottom-right-radius: 30%">
                                    <div class="p-3">
                                        <div class="fv-title-big">
                                            <h6 class="text-white fw-bolder oswald-bold"> {{ pj.name }} </h6>
                                        </div>
                                        <div class="fv-title-normal">
                                            <h6 class="text-white-50 text-uppercase"> {{ pj.cat }} </h6>
                                        </div>
                                    </div>
                                    <div class="position-absolute end-0 top-0" :class="'fvSlideOn'">
                                        <div class="bg-opacity-25 p-2 bg-light" style="border-bottom-left-radius: 50%;">
                                            <div class="text-white">
                                                <a :href="pj.link" class="text-white text-decoration-none">
                                                    <i class="mdi mdi-arrow-right-thin align-middle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="pagin text-center mt-5 p-3"></div>
            </div>
        </div>
    </div>
</div>
<div id="h" class="w-100 text-white position-relative">
    <div class="position-absolute start-0 top-0 full rank"
     :style="`background-image: url('${$loadImage(data.config?data.config.bg_technologie:null)}');`" >
        <div class="full opacity-75 bg-dark"></div>                    
    </div>
    <div class="container-custom py-4 position-relative">
        <div class="text-center fv-w-50-lg m-auto">
            <div class="fv-title-normal" :class="'fvSlideOn'">
                <h4 class="text-uppercase"><span class="dbslash">//</span> &nbsp;technology index </h4>
            </div>
            <div class="fv-title-big mb-3" :class="'fvSlideOn'">
                <h4 class="fw-bolder oswald-bold" data-fv-anim='autowrite'
                 :data-fv-data="$avoid(data.config, 'titre_technologie')">
                </h4>
            </div>
        </div>
        <div class="w-100 py-4">
            <div class="container-fluid p-2">
                <div class="row justify-content-between row-cols-5">
                    <button class="btn btn-outline-light text-center m-2 fv-w-100-sm"
                     v-for="tech in $reverse(data.technologies)" :key="tech.id">
                        <div class="py-2">
                            <i :class="`mdi ${tech.icon} mdi-24px`"></i>
                        </div>
                        <div class="fv-title-big py-2">
                            <h6 class="fw-bolder text-uppercase oswald-bold m-auto"> {{ tech.name }} </h6>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="i" class="bg-white w-100 text-white">
    <div class="container-custom py-4 overflow-hidden position-relative">
        <div class="text-center fv-w-50-lg mx-auto my-4">
            <div class="fv-title-normal" :class="'fvSlideOn'">
                <h4 class="text-uppercase text-fv-primary"><span class="dbslash">//</span> &nbsp;nos clients </h4>
            </div>
            <div class="fv-title-big mb-3" :class="'fvSlideOn'">
                <h4 class="fw-bolder oswald-bold text-dark">
                    {{ $avoid(data.config, 'titre_client') }}
                </h4>
            </div>
        </div>
        <div class="swiper swiper-y overflow-hidden my-2" style="width: 90%;margin: auto">
            <div class="swiper-wrapper">
                    <div class="swiper-slide fv-w-50-lg fv-w-100-sm h-100 mx-2 position-relative"
                     v-for="cl in $reverse(data.clients)" :key="cl">
                        <div class="card col rounded-3 shadow bg-primary-x p-2
                         fv-hov-light fv-h-100-sm fv-text-center-sm" style="height:200px;">
                            <div class="card-header row border-0 fv-f-direc-col-sm">
                                <div class="text-white col col-auto">
                                    <i v-if="cl.icon" :class="`mdi ${cl.icon} mdi-24px align-middle`"></i>
                                    <img :src="$loadImage(cl.logo)" style="width:72px;max-height:40px">
                                </div>
                                <div class="col">
                                    <div class="fv-title-big">
                                        <h6 class="fw-bolder oswald-bold">{{ cl.name }}</h6>
                                    </div>
                                    <div class="fv-title-normal">
                                        <h6 class="text-white-50"> {{ cl.title }} </h6>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="fv-title-normal">
                                    <h6 class="text-white-50">
                                        {{ $reduce(cl.content, 150) }}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="carousel-control">
            <a href="javascript:void(0)" class="text-dark text-decoration-none position-absolute start-0 y-prev fv-zd" style="top: 60%;">
                <i class="mdi mdi-arrow-left-thin mdi-24px"></i>
            </a>
            <a href="javascript:void(0)" class="text-dark text-decoration-none position-absolute end-0 y-next fv-zd" style="top: 60%;">
                <i class="mdi mdi-arrow-right-thin mdi-24px"></i>
            </a>
        </div>
    </div>
</div>
<div id="j" class="bg-white w-100 text-white">
    <div class="container-custom fv-py-4-lg overflow-hidden position-relative">
        <div class="text-center fv-w-50-lg mx-auto my-4">
            <div class="fv-title-normal" :class="'fvSlideOn'">
                <h4 class="text-uppercase text-fv-primary"><span class="dbslash">//</span> &nbsp;notre equipe </h4>
            </div>
            <div class="fv-title-big mb-3" :class="'fvSlideOn'">
                <h4 class="fw-bolder oswald-bold text-dark">
                    {{ $avoid(data.config, 'titre_equipe') }}
                </h4>
            </div>
        </div>
        <div class="swiper swiper-team overflow-hidden my-2" style="width: 90%;margin: auto">
            <div class="swiper-wrapper" style="">
                    <div class="swiper-slide full" v-for="tm in $reverse(data.teams)" :key="tm.id" >
                        <div class="col p-3 text-center">
                            <div class="text-dark my-2">
                                <blockquote style="font-size:22px;">
                                    {{ $sanitaze(tm.bio)}}
                                </blockquote>
                            </div>
                            <div class="text-center text-dark">
                                <div class="my-2">
                                    <img :src="$loadImage(tm.avatar)" style="width:82px;height:82px" class="rounded-circle img-thumbnail">
                                </div>
                                <div class="fv-title-big">
                                    <h6 class="fw-bolder oswald-bold">{{ tm.first_name }} {{ tm.last_name }}</h6>
                                </div>
                                <div class="fv-title-normal" >
                                    <h6 class="text-dark"> {{ tm.role }} </h6>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="pagin-team text-center mt-5 p-3"></div>
        </div>
        <div class="carousel-control">
            <a href="javascript:void(0)" class="text-dark text-decoration-none position-absolute start-0 team-prev fv-zd" style="top: 60%;">
                <i class="mdi mdi-arrow-left-thin mdi-24px"></i>
            </a>
            <a href="javascript:void(0)" class="text-dark text-decoration-none position-absolute end-0 team-next fv-zd" style="top: 60%;">
                <i class="mdi mdi-arrow-right-thin mdi-24px"></i>
            </a>
        </div>
    </div>
</div>
<div id="f" class="fv-p-0-sm">
    <div class="container-custom my-5 position-relative">
        <div class="row row-cols-2 fv-f-direc-col-sm fv-text-center-sm">
            <div class="col fv-w-100-sm">
                <div class="fv-title-normal" :class="'fvSlideOn'">
                    <h3 class="text-uppercase text-fv-primary"><span class="dbslash">//</span> &nbsp;Section Blog </h3>
                </div>
                <div class="fv-title-big" :class="'fvSlideOn'">
                    <h3 class="text-dark fw-bolder oswald-bold">
                        {{ $avoid(data.config, 'titre_blog') }}
                    </h3>
                </div>
            </div>
            <div class="col text-end align-self-end" :class="'fvSlideOn'" id="allService">
                <router-link to="/notre-blog" class="btn btn-custom text-white fw-bold">TOUT LES POSTES</router-link>
            </div>
        </div>
        <div class="row row-cols-3 my-3 fv-f-direc-col-sm">
            <Blog v-for="post in blogs"
             :key="post.id" :post="post"
             style-custom="height:290px;"
             bg-style-custom="height:100px;"
             :user="user">
            </Blog>
        </div>        
    </div>
</div>
 <div id="j">
    <div class="container-custom mt-5 pb-3 position-relative">
        <div class="row row-cols-2 fv-f-direc-col-sm fv-text-center-sm">
            <div class="col fv-w-100-sm">
                <div class="fv-title-normal" :class="'fvSlideOn'">
                    <h3 class="text-uppercase text-fv-primary"><span class="dbslash">//</span> &nbsp;Section Forum </h3>
                </div>
                <div class="fv-title-big" :class="'fvSlideOn'">
                    <h3 class="text-dark fw-bolder oswald-bold">
                        {{ $avoid(data.config, 'titre_forum') }}
                    </h3>
                </div>
            </div>
            <div class="col text-end align-self-end" :class="'fvSlideOn'" id="allService">
                <router-link to="/notre-forum" class="btn btn-custom text-white fw-bold">VOIR TOUT</router-link>
            </div>
        </div>
        <div class="row row-cols-3 my-3 fv-f-direc-col-sm">
            <Forum v-for="post in forums" 
            :key="post.id"
            :post="post"
            :user="user">
            </Forum>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
           currentSlide: 1,
           blogs: [],
           forums: [],
           refresh: null,
        }
    },
    methods: {
        getData: function() {
            this.$http.get('blog-forum', this.$token()).then( res => {
                this.blogs = res.data.data['blog'];
                this.forums = res.data.data['forum'];
            })
        }
    },
    created() {
        this.getData();
    },
    mounted() {
        this.refresh = 0;
    },
    updated() { 
        if (this.refresh <= 2){
            this.$owl('.home-slide');     

            $('.fv-carousel-control-prev').click(function(){
                $('.home-slide .owl-prev').click();
            });
            $('.fv-carousel-control-next').click(function(){
                $('.home-slide .owl-next').click();
            });
            this.$animate();
            new fJs.NumberAutoCount();
            new Swiper('.swiper-partner', {
                direction: 'horizontal',
                loop: false,
                pagination: {
                    el: '.pagin',
                    clickable: true,
                },
            })
            new Swiper('.swiper-team', {
                direction: 'horizontal',
                loop: true,
                pagination: {
                    el: '.pagin-team',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.team-next',
                    prevEl: '.team-prev',
                }
            });
            new Swiper('.swiper-y', {
                direction: 'horizontal',
                loop: true,
                navigation: {
                    nextEl: '.y-next',
                    prevEl: '.y-prev',
                }
            });  
          new fJs.AutoWriteText({
            separator: '|',
            timeout: 300
        }); 
        }
        this.refresh++;
    },
            
}
</script>