<script setup>
    defineProps({
        model: String,
    })
</script>
<template>
<div class="my-3 container-fluid overflow-hidden">
    <div class="fv-title-big fvSlideOn">
        <h2 class="text-dark fw-bolder">Filtrer Par Categorie</h2>
    </div>
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide fv-w-25-lg fv-w-50-sm" v-for="cat in categories" :key="cat">
                <div class="p-4">
                    <router-link style="height:90px;width:120px;"
                     :to="{name: model + 'Category', params: {id: cat.id??0, title: $url(cat.name)}}"
                      class="btn text-decoration-none text-light"
                      :style="`background-color:${cat.bg}`" 
                      :title="cat.description">
                        <h4 class="m-0">
                            <i :class="`mdi ${cat.icon} align-middle`"></i><br>
                            {{cat.name}}
                        </h4>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="pagin text-center p-2 text-dark"></div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            categories: [],
        }
    },
    methods: {
        getData: function() {
            this.$http.get('category', this.$token()).then(res => this.categories = res.data.data);
        }
    },
    mounted() {
        this.getData();
    },
    updated() {
        new Swiper('.swiper', {
            direction: 'horizontal',
            loop: false,
            pagination: {
                el: '.pagin',
                clickable: true,
            },
        })
    }
}
</script>