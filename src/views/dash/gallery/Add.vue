<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Store from '@/components/dash/Store.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Store url-prefix="Gallery">
                <template #form>
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Titre de L'image</label>
                        <input type="text" name="name" id="title" placeholder="Entrer le Nom" class="form-control form-control-lg" required>
                    </div>
                    <div class="form-group my-2">
                        <label for="cover" class="form-text">Cover</label>
                        <input type="file" name="cover" id="cover" class="form-control form-control-lg" required>
                    </div>
                </template>
            </Store>
        </template>
    </DashBaseVue>
</template>