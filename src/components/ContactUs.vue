<script setup>
import Alert from './Alert.vue';
</script>
<template>
  <div class="my-3 border-top" style="font-size: 22px">
    <form method="POST" class="py-4" @submit.prevent="form">
      <div class="fv-title-normal fvSlideOn my-3">
        <h3 class="text-fv-primary">
          <span class="dbslash">//</span> &nbsp; Ecrivez-Nous Directement par
          ici
        </h3>
      </div>
      <Alert :data="notifs" :state="state"></Alert>
      <div v-if="!state">
        <div class="row row-col-2 my-3 fv-f-direc-col-sm">
          <div class="form-group col">
            <label for="yourName" class="form-text">Nom* : </label>
            <input type="text" name="name" id="yourFirstName" placeholder="Entrer votre Nom"
              class="form-control form-control-lg" v-model="user.last_name" />
          </div>
          <div class="form-group col">
            <label for="yourLastName" class="form-text">Prenom* : </label>
            <input type="text" name="surname" id="yourLastName" placeholder="Entrer votre Prenom"
              class="form-control form-control-lg" v-model="user.first_name" />
          </div>
        </div>
        <div class="form-group my-2">
          <label for="youremail" class="form-text">Sujet* : </label>
          <input type="text" name="subject" id="subject" placeholder="Entrer le sujet de votre mail"
            class="form-control form-control-lg" v-model="user.subject" />
        </div>
        <div class="form-group my-2">
          <label for="youremail" class="form-text">Email* : </label>
          <input type="email" name="email" id="youremail" placeholder="Entrer votre Email pour etre repondu"
            class="form-control form-control-lg" v-model="user.email" />
        </div>
        <div class="form-group">
          <label for="message" class="form-text">Message* : </label>
          <textarea name="message" id="message" placeholder="Entrer votre Message" class="form-control form-control-lg"
            cols="40" rows="8" v-model="message"></textarea>
        </div>
        <div class="text-center my-2">
          <button type="submit" class="btn btn-success fv-w-50-lg fv-w-75-sm m-auto">
            ENVOYER
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifs: null,
      state: false,
      message: null,
      user: []
    };
  },
  methods: {
    insert: function (data) {
      this.$Progress.start();
      this.$http.post("contact", data, this.$token()).then((response) => {
        this.notifs = response.data.message;
        this.state = response.data.success
        this.$toastr("Nous-Contactez", this.notifs, "success");
        this.$Progress.finish();
      }).catch(error => {
        this.notifs = error.response.data.message;
        this.state = error.response.data.success;
        this.$toastr("POST", this.$BadFieldsErrorMessage, "error");
        this.$Progress.fail();
      })
    },
    form: function () {
      $('html, body').animate({ scrollTop: 0 }, 100);
      this.user['message'] = this.message;
      if (this.user.first_name && this.user.last_name && this.user.email && this.user.message) {
        this.insert(this.user);
      } else {
        this.notifs = this.$emptyFieldsErrorMessage;
        this.$toastr("Nous-Contactez", this.$emptyFieldsErrorMessage, "error");
      }
    },
  },
  mounted() {
    this.user = this.$currentUser() || {};
  },
};
</script>
