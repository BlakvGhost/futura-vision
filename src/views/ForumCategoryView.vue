<script setup>
import BlogForumCat from '../components/BlogForumCat.vue';
import ForumUnique from '@/components/Forum.vue';
</script>
<template>
    <BlogForumCat model="forum">
        <template #article="{data, user}">
            <forum-unique :user="user"
                :post="data">
            </forum-unique>
        </template>
    </BlogForumCat>
</template>