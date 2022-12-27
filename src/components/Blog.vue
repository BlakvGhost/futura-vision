<script setup>
import PostReaction from './PostReaction.vue';
defineProps({
  post: Object,
  styleCustom: String,
  bgStyleCustom: String,
  user: Object | Boolean,
});
</script>
<template>
  <article class="col col-4 my-2 fv-w-100-sm">
    <div class="full p-2 bg-light rounded overflow-hidden">
      <div class="w-100 rank rounded" :style="`background-image: url('${$loadImage(post.cover)}');${bgStyleCustom}`"></div>
      <div class="">
        <div class="my-2 fvSlideOn" style="font-size:22px">
          <router-link :to="{
            name: 'blogCategory', params: {
              id: post.category.id ?? 0,
              title: $url(post.category.name)
            }
          }" class="btn text-uppercase text-light"
            :style="`background-color:${post.category.bg}`">
            {{ post.category.name }}
          </router-link>
          <span class="text-dark ps-1 text-decoration-underline"> {{ post.created_at }} </span>
        </div>
        <div class="text-dark fvSlideOn">
          <router-link :to="{
            name: 'blogDetail',
            params: { id: post.id ?? 0, category: $url(post.category.name), title: $url(post.title) }
          }"
            class="text-decoration-none">
            <h4> {{ $reduce(post.title, 20) }} </h4>
          </router-link>
        </div>
      </div>
      <div class="mt-2">
        <PostReaction :data="post" model="blog" :can="false" :user="user ? user : {}">
        </PostReaction>
      </div>
    </div>
  </article>
</template>