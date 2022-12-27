<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Edit from '@/components/dash/Update.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Edit url-prefix="Gallery">
                <template #form="data">
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Titre de L'image</label>
                        <input v-model="data.post.title" type="text" name="name" id="title" placeholder="Entrer le Nom" class="form-control form-control-lg" required>
                    </div>
                    <div class="form-group my-2">
                        <label for="cover" class="form-text">Cover </label>
                        <input type="file" name="cover" id="cover" class="form-control form-control-lg">
                        <a :href="$storage_url + data.post.cover" target="_blank"> Visualiser l'image </a>
                    </div>
                </template>
            </Edit>
        </template>
    </DashBaseVue>
</template>