<script setup>
import BlogForumBaseVue from '@/components/BlogForumBase.vue';
import ForumUnique from '@/components/Forum.vue';
</script>
<template>
  <blog-forum-base-vue model="forum">
    <template #similar="{data, user}">
      <forum-unique :user="user"
        :post="data">
      </forum-unique>
    </template>
  </blog-forum-base-vue>  
</template>