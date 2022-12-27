<script setup>
import PostReaction from './PostReaction.vue';
    defineProps({
        post: Object,
        styleCustom: String,
        bgStyleCustom: String,
        user: Object | Boolean,
    })
</script>
<template>
    <article class="col col-4 p-2 fv-w-100-sm" :style="styleCustom">
        <div class="full bg-light border p-2 rounded overflow-hidden">
            <div class="">
                <div class="text-dark fvSlideOn">
                    <router-link :to="{name: 'forumDetail', 
                        params: {id: post.id??0, category: $url(post.category.name),
                        title: $url(post.content)}}" 
                        class="text-decoration-none">
                        <h4> {{ $reduce(post.content, 40) }} </h4>
                    </router-link>
                </div>
                <div class="my-2 fvSlideOn" style="font-size:22px">
                    <router-link :to="{name: 'forumCategory', params: {id: post.category.id??0,
                        title: $url(post.category.name)}}"
                        class="btn text-uppercase text-light" 
                        :style="`background-color:${post.category.bg}`">
                        {{post.category.name}}
                    </router-link>
                    <span class="text-dark ps-1 text-decoration-underline"> {{ post.created_at }} </span>
                </div>      
            </div>
            <div class="mt-2">
                <PostReaction :data="post"
                 model="forum" 
                 :can="false"
                 :user="user?user:{}">
                </PostReaction>
            </div>
        </div>
    </article>
</template>