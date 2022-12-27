<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Store from '@/components/dash/Store.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Store url-prefix="Customer">
                <template #form>
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Nom *</label>
                        <input type="text" name="Nom" id="title" placeholder="Entrer le nom du client :"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="title2" class="form-text">Titre *</label>
                        <input type="text" name="Titre" id="title2" placeholder="Entrer le titre :"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="title4" class="form-text">Icon en classe mdi</label>
                        <input type="text" name="Icon" id="title4" placeholder="Entrer l'icon :"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="title3" class="form-text">Logo en Image</label>
                        <input type="file" name="Logo" id="title3" class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="editor" class="form-text">Description *</label>
                        <textarea name="Description" id="editor" cols="30" rows="6" class="form-control form-control-lg"></textarea>
                    </div>
                </template>
            </Store>
        </template>
    </DashBaseVue>
</template>