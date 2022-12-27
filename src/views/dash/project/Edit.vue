<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Edit from '@/components/dash/Update.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Edit url-prefix="Project">
                <template #form="data">
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Nom *</label>
                        <input type="text" name="Nom" id="title" placeholder="Entrer le nom du Projet:"
                            class="form-control form-control-lg" v-model="data.post.name">
                    </div>
                    <div class="form-group my-2">
                        <label for="title2" class="form-text">Lien URL *</label>
                        <input type="url" name="URL" id="title2" placeholder="Entrer le lien URL du Projet :"
                            class="form-control form-control-lg" v-model="data.post.link">
                    </div>
                    <div class="form-group my-2">
                        <label for="title4" class="form-text">Categorie *</label>
                        <input type="text" name="Category" id="title4" placeholder="Entrer la Categorie :"
                            class="form-control form-control-lg" v-model="data.post.cat">
                    </div>
                    <div class="form-group my-2">
                        <label for="cover" class="form-text">Image *</label>
                        <input type="file" name="Image" id="cover" class="form-control form-control-lg">
                        <a :href="$storage_url + data.post.cover" target="_blank" v-if="data.post.cover"> Visualiser l'image </a>
                    </div>
                </template>
            </Edit>
        </template>
    </DashBaseVue>
</template>