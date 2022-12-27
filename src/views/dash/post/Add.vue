<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Store from '@/components/dash/Store.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Store url-prefix="Post">
                <template #form>
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Title Inferieur*</label>
                        <input type="text" name="sub_title" id="title" placeholder="Entrer le titre Inferieur"
                                    class="form-control form-control-lg" required>
                    </div>
                    <div class="form-group my-2">
                        <label for="title2" class="form-text">Title Superieur*</label>
                        <input type="text" name="sup_title" id="title2" placeholder="Entrer le titre Superieur"
                            class="form-control form-control-lg" required>
                    </div>
                    <div class="form-group my-2">
                        <label for="cover" class="form-text">Image de Couverture*</label>
                        <input type="file" name="img" id="cover" class="form-control form-control-lg" required>
                    </div>
                    <div class="form-group my-2">
                        <label for="editorCu" class="form-text">Contenu*</label>
                        <textarea name="content" id="editorCu" cols="30" rows="6" class="form-control form-control-lg"></textarea>
                    </div>
                </template>
            </Store>
        </template>
    </DashBaseVue>
</template>