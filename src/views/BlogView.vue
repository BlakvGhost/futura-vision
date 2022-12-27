<script setup>
    import SearchBar from "@/components/SearchBar.vue";
    import BlogUnique from "@/components/Blog.vue";
    import Categorie from "@/components/Cat.vue";
    import Paginate from "@/components/Paginate.vue";
</script>
<template>
    <div class="border-top p-3">
        <div class="container-custom my-3">
            <div class="fv-title-normal fvSlideOn my-3">
                <h3 class="text-fv-primary"><span class="dbslash">//</span> &nbsp; Blog</h3>
            </div>
            <SearchBar model="blog"></SearchBar>
            <Categorie model="blog"></Categorie>
            <div class="my-3 container-fluid fv-p-0-sm">
                <div class="fv-title-big fvSlideOn">
                    <h2 class="text-dark fw-bolder">Publications Populaires</h2>
                </div>
                <div class="row row-cols-2 justify-content-between fv-f-direc-col-sm fv-m-0-sm">
                    <article class="col col-6 fv-w-100-sm fv-my-2-sm fv-p-0-sm" style="height:200px;"
                     v-for="post in popularPost" :key="post.id">
                        <div class="position-relative full shadow rounded overflow-hidden">
                            <div class="position-absolute start-0 top-0 full rank"
                             :style="`background-image: url('${$loadImage(post.cover)}');`" >
                                <div class="full opacity-75 bg-dark"></div>           
                            </div>
                            <div class="position-absolute start-0 bottom-0 fv-px-3-lg fv-p-2-sm">
                                <div class="my-2 fvSlideOn" style="font-size:22px">
                                    <router-link :to="{name: 'blogCategory', params: {id: post.category.id??0,
                                     title: $url(post.category.name)}}"
                                     class="btn text-uppercase mx-3 text-light"
                                     :style="`background-color:${post.category.bg}`" >{{post.category.name}}</router-link>
                                    <span class="text-white text-decoration-underline"> {{ post.created_at }} </span>
                                </div>
                                <div class="text-light fvSlideOn">
                                    <router-link :to="{name: 'blogDetail', 
                                    params: {id: post.id??0, category: $url(post.category.name), title: $url(post.title)}}" 
                                    class="text-decoration-none text-light">
                                        <h4> {{ $reduce(post.title, 100) }} </h4>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>            
            <div class="my-3 container-fluid fv-p-0-sm">
                <div class="fv-title-big fvSlideOn">
                    <h2 class="text-dark fw-bolder">Publications Recentes</h2>
                </div>
                <div class="row fv-f-direc-col-sm fv-m-0-sm">
                    <BlogUnique v-for="post in recentPost.data" :key="post.id"
                     :post="post" style-custom="height:390px;"
                     bg-style-custom="height:200px;"
                     :user="user">
                    </BlogUnique>
                </div>
                <Paginate :data="recentPost" uri="blog-info" @pagine="updateDataPost"></Paginate>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            recentPost: [],
            popularPost: [],
            user: {},
        }
    },
    methods: {
        getPost: function() {
            this.$http.get('blog-info', this.$token()).then(res => {
                this.recentPost = res.data.data['latests'];
                this.popularPost = res.data.data['populars'];
            });
        },        
        updateDataPost: function(data){
            this.recentPost = data['latests'];
        }
    },
    mounted() {
         this.getPost();
         this.user = this.$currentUser();
    },
    updated() {
        this.$animate();
    },
}
</script>