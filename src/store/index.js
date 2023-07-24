import Vue from "vue";
import Vuex from "vuex";

import EgauImg from "@/assets/img/tn/egau_tn.jpg";
import tbslImg from "@/assets/img/tn/tbsl-tn.jpg";
import nzImg from "@/assets/img/tn/jaru-nz.jpg";
import NBImg from "@/assets/img/tn/NilsBuri-thumbnail.jpg";

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
          {
            title: "Cinematography:",
            name: "Andrin Schranz & Cedric Ribi <br><br>"
          },
          { title: "Lead Editor", name: "Cedric Ribi" },
          { title: "Colorist & Animator", name: "Andrin Schranz" },
          { title: "Audio & Sound Design", name: "Jonas Kunz" }
        ],
        video: "https://youtu.be/MM9XUcJ1hBw"
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
        video: "https://youtu.be/EE4Mr78Wh-E"
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
        video: "https://youtu.be/a3eobSkWqfo"
      },
      {
        image: NBImg,
        title: "Nils Buri",
        rolls: [
          { title: "Dokumentarfilm für:", name: "Nils Buri <br><br>" },
          { title: "Production:", name: "Ocular Collective" }
        ],
        video: "https://youtu.be/URoZHHvk4NQ"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
