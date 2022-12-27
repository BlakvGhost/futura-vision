<script setup>
import BlogForumCat from '../components/BlogForumCat.vue';
import BlogUnique from '@/components/Blog.vue';
</script>
<template>
    <BlogForumCat model="blog">
        <template #article="{data, user}">
            <blog-unique :post="data" :user="user"
                style-custom="height:390px;"
                bg-style-custom="height:200px;">
            </blog-unique>
        </template>
    </BlogForumCat>
</template>