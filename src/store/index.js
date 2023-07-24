import Vue from "vue";
import Vuex from "vuex";

import EgauImg from "@/assets/img/tn/egau_tn.jpg";
import tbslImg from "@/assets/img/tn/tbsl-tn.jpg";
import nzImg from "@/assets/img/tn/jaru-nz.jpg"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        image: tbslImg,
        title: "the bittersweet life",
        rolls: [
          { title: "Dokumentarfilm für:", name: "Ocular Collective <br><br>" },
          { title: "Interview & Director:", name: "Jonas Kunz" },
          { title: "Cinematography:", name: "Andrin Schranz & Cedric Ribi <br><br>" },
          { title: "Lead Editor", name: "Cedric Ribi" },
          { title: "Colorist & Animator", name: "Andrin Schranz" },
          { title: "Audio & Sound Design", name: "Jonas Kunz" },

        ],
        video: "https://www.youtube.com/embed/EE4Mr78Wh-E",

      },
      {
        image: EgauImg,
        title: "Egau",
        rolls: [
          { title: "Musikvideo für:", name: "Jule X & Nicky B Fly <br><br>" },
          { title: "Director & Editor:", name: "Jonas Kunz" },
          { title: "Cinematographer:", name: "Andrin Schranz" },
          { title: "AC:", name: "Cedric Ribi" }
        ],
        video: "https://www.youtube.com/embed/EE4Mr78Wh-E",

      },
      {
        image: nzImg,
        title: "nüt ztüe",
        rolls: [
          { title: "Musikvideo für:", name: "Jaru <br><br>" },
          { title: "Director & Editor:", name: "Jonas Kunz" },
          { title: "Cinematographer:", name: "Andrin Schranz" },
          { title: "PA:", name: "Luis Schneuwly" }
        ],
        video: "https://www.youtube.com/embed/EE4Mr78Wh-E",

      },


    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
