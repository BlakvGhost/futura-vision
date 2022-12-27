<script setup>
   import DashBaseVue from '@/components/dash/DashBase.vue';
   import Store from '@/components/dash/Store.vue';
</script>
<template>
    <DashBaseVue>
        <template #main>
            <Store url-prefix="Partner">
                <template #form>
                    <div class="form-group my-2">
                        <label for="title" class="form-text">Nom *</label>
                        <input type="text" name="name" id="title" placeholder="Entrer le Nom"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="title2" class="form-text">Classe mdi du Logo </label>
                        <input type="text" name="icon" id="title2" placeholder="Entrer le nom du Logo"
                            class="form-control form-control-lg">
                    </div>
                    <div class="form-group my-2">
                        <label for="cover" class="form-text">Logo </label>
                        <input type="file" name="logo" id="cover" class="form-control form-control-lg">
                    </div>
                </template>
            </Store>
        </template>
    </DashBaseVue>
</template>