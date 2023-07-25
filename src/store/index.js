import Vue from "vue";
import Vuex from "vuex";

import EgauImg from "@/assets/img/tn/egau_tn.jpg";
import tbslImg from "@/assets/img/tn/tbsl-tn.jpg";
import nzImg from "@/assets/img/tn/jaru-nz.jpg";
import NBImg from "@/assets/img/tn/NilsBuri-thumbnail.jpg";
import friseImg from "@/assets/img/tn/frise-tn.jpg";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        image: tbslImg,
        title: "the bittersweet life",
        rolls: [
          { title: "Documentary for:", name: "Ocular Collective" },
          {title: "Starring:", name: "Ara Ko<br><br>"},
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
          { title: "Musicvideo for:", name: "Jule X & Nicky B Fly <br><br>" },
          { title: "Director & Editor:", name: "Jonas Kunz" },
          { title: "Cinematographer:", name: "Andrin Schranz" },
          { title: "AC:", name: "Cedric Ribi" }
        ],
        video: "https://youtu.be/EE4Mr78Wh-E"
      },
      {
        image: friseImg,
        title: "frisä",
        rolls: [
          { title: "Shortfilm for:", name: "Ocular Collective" },
          {title: "Starring:", name: "Luka Aeschlimann"}
        ],
        video: "https://youtu.be/T3vn5nujkn8"
      },
      {
        image: nzImg,
        title: "nüt ztüe",
        rolls: [
          { title: "Musicvideo for:", name: "Jaru <br><br>" },
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
          { title: "Documentary for:", name: "Nils Buri <br><br>" },
          { title: "Production by:", name: "Ocular Collective" }
        ],
        video: "https://youtu.be/URoZHHvk4NQ"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
