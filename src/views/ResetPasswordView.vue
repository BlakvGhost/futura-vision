
<template>
    <div class="border-top p-3">
        <article class="container-custom my-3">
            <div class="my-3" style="font-size:22px">
                <form method="POST" class="fv-w-50-lg m-auto" @submit.prevent="false">
                    <div class="fv-title-normal fvSlideOn">
                        <h3 class="text-fv-primary"><span class="dbslash">//</span> &nbsp; Verifier Votre Compte Et
                            Reinitialisation du Mot de Passe</h3>
                    </div>
                    <div class="form-group my-2 fvSlideOn">
                        <label for="youremail" class="form-text">Email* : </label>
                        <input type="email" name="email" id="youremail" placeholder="Entrer votre Email"
                            class="form-control form-control-lg">
                    </div>
                    <div class="text-center my-2 fvSlideOn">
                        <button type="submit" class="btn btn-success fv-w-50-lg fv-w-75-sm m-auto">Verifier</button>
                    </div>
                </form>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        getData: function () {

        }
    },
    mounted() {
        this.getData();
        new fJs.Intersection({
            elt: '.fvSlideOn',
            class: "animate__animated animate__fadeInDown opacity-100",
            root: null,
            ratio: 0.2,
            rootMargin: '0px',
            threshold: 0.7,
        });
    },
}
</script>