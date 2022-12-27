<script setup>
import SearchBar from "@/components/SearchBar.vue";
import Blog from "@/components/Blog.vue";
import Paginate from './Paginate.vue';
defineProps({
    model: String,
    user: Object | Boolean,
})
</script>
<template>
    <div class="border-top p-3">
        <div class="container-custom my-3">
            <div class="fv-title-normal fvSlideOn my-3">
                <h3 class="text-fv-primary">
                    <span class="dbslash">//</span> &nbsp;
                    <router-link :to="{ name: `${model}` }" class="text-fv-primary">
                        {{ model.toUpperCase() }}
                    </router-link>
                    /
                    <span>Categorie</span>
                    /
                    <router-link class="text-fv-primary" :to="{
                        name: `${model}Category`,
                        params: {
                            id: cat.id??0,
                            title: $avoid(cat, 'name')
                        }
                    }">
                        <i :class="`mdi ${cat.icon} align-middle`"></i>
                        {{ cat.name }}
                    </router-link>
                </h3>
            </div>
            <div class="fv-title-normal fvSlideOn my-3">
                <h4>
                    {{ cat.desc }}
                </h4>
            </div>
            <SearchBar :model="model"></SearchBar>
            <div class="my-3 container-fluid">
                <div class="fv-title-big fvSlideOn">
                    <h2 class="text-dark fw-bolder">
                        Publications de {{ cat.name }}
                    </h2>
                </div>
                <div class="row fv-f-direc-col-sm">
                    <slot name="article" v-for="post in posts.data" :key="post.id" :data="post" :user="user">
                    </slot>
                </div>
                <Paginate :data="posts" :uri="uri" @pagine="updateDataPost">
                </Paginate>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: { Paginate },
    data() {
        return {
            posts: [],
            cat: {},
            uri: '/',
        }
    },
    methods: {
        getPost: function () {
            this.$http.get(this.uri, this.$token()).then(res => {
                this.posts = res.data.data['posts'];
                this.cat = res.data.data['category'];
                document.title = `${this.cat.name} | Category - ${this.$defaultTitle}`;
            })
        },
        updateDataPost: function (data) {
            this.posts = data['posts'];
        }
    },
    mounted() {
        this.uri = `filter/category/${this.model}/${this.$route.params.id}`;
        this.getPost();
    },
    updated() {
        this.$animate();
    },
}
</script>