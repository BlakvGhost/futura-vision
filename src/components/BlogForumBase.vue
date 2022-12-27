<script setup>
import Comment from "@/components/Comment.vue";
import SearchBar from "@/components/SearchBar.vue";
import BlogUnique from "@/components/Blog.vue";
import Paginate from "@/components/Paginate.vue";
defineProps({
    model: String,
    title: String,
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
                    <router-link class="text-fv-primary" :to="{
                        name: `${model}Category`,
                        params: {
                            id: $avoid(post.category, 'id'),
                            title: $avoid(post.category, 'name')
                        }
                    }">
                        {{ $avoid(post.category, 'name') }}
                    </router-link>
                </h3>
            </div>
            <SearchBar :model="model"></SearchBar>
            <article class=" my-3">
                <div class="text-end fv-title-normal" style="font-size:22px;">
                    Publié {{ post.created_at }} | <strong>{{ $avoid(post.user, 'first_name') + ' ' +
                            $avoid(post.user, 'last_name')
                    }}</strong>
                </div>
                <blockquote>
                    <div class="fv-title-big fvSlideOn">
                        <h3 class="text-dark fw-bolder oswald-bold">
                            {{ post.title }}
                        </h3>
                    </div>
                    <div class="fv-title-normal">
                        <blockquote class="text-black-50 fv-p-2-lg fv-py-4-sm">
                            <div class="my-3" v-if="post.cover">
                                <img :src="$loadImage(post.cover)" :alt="post.title" style="height:100%; width:100%;">
                            </div>
                            <div style="font-size:22px" v-html="post.content">

                            </div>
                        </blockquote>
                    </div>
                </blockquote>
                <Comment :model="model" :data="post" :pagine-uri="uri" :current-user="user">
                </Comment>
                <div class="my-3 container-fluid" v-if="similars.length > 0">
                    <div class="fv-title-big fvSlideOn">
                        <h2 class="text-dark fw-bolder">
                            Publications Similaires
                        </h2>
                    </div>
                    <div class="row fv-f-direc-col-sm">
                        <slot name="similar" v-for="post in similars" :key="post.id" :data="post" :user="user">
                        </slot>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            post: {},
            similars: [],
            uri: '/',
        };
    },
    methods: {
        getPost: function () {
            this.$http.get(this.uri, this.$token())
                .then(res => {
                    this.post = res.data.data['post'];
                    this.similars = res.data.data['similars'];
                    document.title = `${this.post.title ||
                        this.post.content} | ${this.model} - ${this.$defaultTitle}`;
                });
        },
    },
    mounted() {
        this.uri = this.model + '-detail/' + this.$route.params.id;
        this.getPost();
        this.$router.afterEach((to, from) => {
            to.name === 'blogDetail' || to.name == 'forumDetail' ?
                this.getPost() :
                !1;
        })
    },
    updated() {
        this.$animate();
    },
}
</script>