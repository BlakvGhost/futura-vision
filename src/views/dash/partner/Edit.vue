<script setup>
import DashBaseVue from '@/components/dash/DashBase.vue';
import Edit from '@/components/dash/Update.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Edit url-prefix="Partner">
                <template #form="data">
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Nom *</label>
                        <input type="text" name="name" id="title" placeholder="Entrer le Nom"
                            class="form-control form-control-lg" v-model="data.post.name">
                    </div>
                    <div class="form-group my-2">
                        <label for="title2" class="form-text">Classe mdi du Logo </label>
                        <input type="text" name="icon" id="title2" placeholder="Entrer le nom du Logo"
                            class="form-control form-control-lg" v-model="data.post.icon">
                    </div>
                    <div class="form-group my-2">
                        <label for="cover" class="form-text">Logo </label>
                        <input type="file" name="logo" id="cover" class="form-control form-control-lg">
                        <a :href="$loadImage(data.post.logo)" target="_blank" v-if="data.post.logo"> Visualiser l'image
                        </a>
                    </div>
                </template>
            </Edit>
        </template>
    </DashBaseVue>
</template>