import { createRouter, createWebHistory } from "vue-router";
import resources from "./dashRoute";
import AboutVue from "../views/About.vue"
import ContactView from "../views/ContactView.vue"
import Home from "../views/Home.vue"
import ServicesVue from "../views/Services.vue";
import LoginVue from "../views/Login.vue";
import PostVue from "../views/Post.vue";
import ActivityVue from "../views/Activity.vue";
import ServiceVue from "../views/Service.vue";
import RegisterVue from "../views/Register.vue";
import BlogDetailViewVue from "../views/BlogDetailView.vue";
import BlogCategoryViewVue from "../views/BlogCategoryView.vue";
import ForumViewVue from "../views/ForumView.vue";
import ForumDetailViewVue from "../views/ForumDetailView.vue";
import ForumCategoryViewVue from "../views/ForumCategoryView.vue";
import NotFound from "../views/NotFound.vue";
import DefaultVue from "../views/dash/Default.vue";
import BlogViewVue from "../views/BlogView.vue";

let indexRoute = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Acceuil",
    },
    component: Home,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: {
      title: "404 Not Found",
    },
    component: NotFound,
  },
  {
    path: "/dash",
    name: "defaultDash",
    meta: {
      title: "Dashboard",
    },
    component: DefaultVue,
  },
  {
    path: "/membres/utilisateur",
    name: "currentUser",
    meta: {
      title: "Votre Compte"
    },
    component: () => import("../views/UserView.vue"),
  },
  {
    path: "/contactez-nous",
    name: "contact",
    component: ContactView,
    meta: {
      title: "Contactez-Nous",
    },
  },
  {
    path: "/nos-articles/:id/:title",
    name: "post",
    component: PostVue,
  },
  {
    path: "/a-propos-de-nous",
    name: "about",
    meta: {
      title: "A propos de Nous",
    },
    component: AboutVue,
  },
  {
    path: "/pourquoi-nous-choisir/:id/:title",
    name: "activity",
    component: ActivityVue,
  },
  {
    path: "/nos-services/:id/:title",
    name: "service",
    component: ServiceVue,
  },
  {
    path: "/nos-services",
    name: "services",
    component: ServicesVue,
    meta: {
      title: "Nos Services",
    },
  },
  {
    path: "/membres/connecter",
    name: "login",
    component: LoginVue,
    meta: {
      title: "Ouvrir Votre Session",
    },
  },
  {
    path: "/membres/inscription",
    name: "register",
    component: RegisterVue,
    meta: {
      title: "Creer un Compte",
    },
  },
  {
    path: "/membres/reset-password",
    name: "reset-passwd",
    component: () => import("../views/ResetPasswordView.vue"),
    meta: {
      title: "Un Nouveau Mot de Passe",
    },
  },
  {
    path: "/notre-blog",
    name: "blog",
    component: BlogViewVue,
    meta: {
      title: "Notre Blog",
    },
  },
  {
    path: "/notre-blog/:id/:category/:title",
    name: "blogDetail",
    component: BlogDetailViewVue,
  },
  {
    path: "/notre-blog/category/:id/:title",
    name: "blogCategory",
    component: BlogCategoryViewVue,
  },
  {
    path: "/notre-forum",
    name: "forum",
    component: ForumViewVue,
    meta: {
      title: "Notre Forum",
    },
  },
  {
    path: "/notre-forum/:id/:category/:title",
    name: "forumDetail",
    component: ForumDetailViewVue,
  },
  {
    path: "/notre-forum/category/:id/:title",
    name: "forumCategory",
    component: ForumCategoryViewVue,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: indexRoute.concat(resources),
});

export default router;
