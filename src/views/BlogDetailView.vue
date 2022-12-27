<script setup>
import BlogForumBaseVue from '@/components/BlogForumBase.vue';
import BlogUnique from '@/components/Blog.vue';
</script>
<template>
  <blog-forum-base-vue model="blog" title="title">
    <template #similar="{data, user}">
      <blog-unique :post="data" :user="user"
       style-custom="height:290px;"
       bg-style-custom="height:100px;">
      </blog-unique>
    </template>
  </blog-forum-base-vue>  
</template>