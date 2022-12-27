<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Store from '@/components/dash/Store.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Store url-prefix="Project">
                <template #form>
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Nom *</label>
                        <input type="text" name="Nom" id="title" placeholder="Entrer le nom du Projet:"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="title2" class="form-text">Lien URL *</label>
                        <input type="url" name="URL" id="title2" placeholder="Entrer le lien URL du Projet :"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="title4" class="form-text">Categorie *</label>
                        <input type="text" name="Category" id="title4" placeholder="Entrer la Categorie :"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="cover" class="form-text">Image *</label>
                        <input type="file" name="Image" id="cover" class="form-control form-control-lg">
                    </div>
                </template>
            </Store>
        </template>
    </DashBaseVue>
</template>