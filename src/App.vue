<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Offcanvas from "@/components/Offcanvas.vue";
</script>
<template>

  <section id="modal" style="z-index: 5000">
    <div id="WindowPreloader" class="position-fixed top-0 start-0 w-100 modal-backdrop h-100 bg-black">
      <div class="container-fluid position-absolute start-0 top-50">
        <div class="row">
          <div class="col col-6 m-auto">
            <div class="text-center">
              <h2 class="m-auto">
                <a href="javascript:void(0)" class="text-white-50 text-decoration-none">FuturaVision</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Offcanvas :filldata="filldata">

    </Offcanvas>
  </section>
  <header>
    {{ online }} {{ $currentUser() }}
    <Header :online="online" :filldata="filldata">

    </Header>
  </header>
  <main style="background-color:rgb(243 242 242)">
    <RouterView :data="data" :user="online" />
  </main>
  <footer>
    <Footer :filldata="filldata">

    </Footer>
  </footer>
</template>

<style>
@import "@/assets/css/master.css";
@import "@/assets/css/mobile.css";

.progress-container {
  width: 100%;
  background-color: transparent;
  height: 5px;
  display: block;
  z-index: 100000
}

.progress-bar {
  background-color: var(--fv-color-prim);
  width: 0%;
  display: block;
  height: inherit;
  transition: .5s ease-in;
}
</style>

<script>
export default {
  data() {
    return {
      online: false,
      data: {
      },
      filldata: {
        services: {},
        config: {},
      },
    };
  },
  methods: {
    getData: function () {
      this.$http.get('home', this.$token()).then(res => {
        this.data = res.data.data;
        this.filldata = {
          services: res.data.data['services'],
          config: res.data.data['config'],
        }
      });
    }
  },
  mounted() {
    this.$Progress.finish();

  },
  created() {
    this.getData();

    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.name === 'login' || to.name === 'register') {
        this.$currentUser() ? this.$router.back() : false;
      }

      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        document.title = to.meta.title;
        this.$Progress.parseMeta(meta);
      }

      document.title = to.meta.title ?
        `${to.meta.title} | ${this.$defaultTitle}` :
        this.$defaultTitle;

      this.$Progress.start();

      console.log(this.$currentUser());
      this.online = this.$currentUser();

      next();
    });
    this.$router.afterEach(() => {
      this.$Progress.finish();
    });
  },
};
</script>
