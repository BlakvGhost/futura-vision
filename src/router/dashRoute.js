import CurrentUser from '@/views/dash/UserView.vue'
import SettingView from '@/views/dash/SettingView.vue'
import AboutView from '@/views/dash/AboutView.vue'
const ressources = function ($model) {
  let table = [];
  table.push({
    path: `/dash/utilisateur`,
    name: `dashUser`,
    meta: {
      title: `Utisateur Connecté`,
    },
    component: CurrentUser,
  }, {
    path: `/dash/setting`,
    name: `setting`,
    meta: {
      title: `Reglage du Site`,
    },
    component: SettingView,
  }, {
    path: `/dash/about`,
    name: `dashAbout`,
    meta: {
      title: `A propos du Site`,
    },
    component: AboutView,
  }, )
  $model.forEach(elt => {
    let upper = elt.charAt(0).toUpperCase() + elt.slice(1);
    table.push({
      path: `/dash/ajouter-un-${elt}`,
      name: `add${upper}`,
      meta: {
        title: `Ajouter Un ${upper} Du Dashboard`,
      },
      component: () => import(`../views/dash/${elt}/Add.vue`),
    }, {
      path: `/dash/editer-un-${elt}/:id`,
      name: `edit${upper}`,
      component: () => import(`../views/dash/${elt}/Edit.vue`),
    }, {
      path: `/dash/voir-les-${elt}s`,
      name: `view${upper}`,
      meta: {
        title: `Voir Les ${upper}s Du Dashboard`,
      },
      component: () => import(`../views/dash/${elt}/Index.vue`),
    })
  });
  return table;
}

export default ressources(['post', 'service', 'project', 'customer', 'team', 'technology',
  'partner', 'exploit', 'category', 'blog', 'forum'
])