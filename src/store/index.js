import Vue from "vue";
import Vuex from "vuex";

import EgauImg from "@/assets/img/tn/egau_tn.jpg";
import tbslImg from "@/assets/img/tn/tbsl-tn.jpg";
import nzImg from "@/assets/img/tn/jaru-nz.jpg";
import NBImg from "@/assets/img/tn/NilsBuri-thumbnail.jpg";
import friseImg from "@/assets/img/tn/frise-tn.jpg";
import chempaeImg from "@/assets/img/tn/chempae-tn.jpg";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        image: tbslImg,
        title: "the bittersweet life",
        rolls: [
          { title: "Dokumentarfilm für:", name: "Ocular Collective" },
          { title: "Mit:", name: "Ara Ko<br><br>" },
          { title: "Interview & Regie:", name: "Jonas Kunz" },
          {
            title: "Cinematography:",
            name: "Andrin Schranz & Cedric Ribi <br><br>"
          },
          { title: "Lead Schnitt:", name: "Cedric Ribi" },
          { title: "Colorist & Animator:", name: "Andrin Schranz" },
          { title: "Audio & Sound Design", name: "Jonas Kunz" }
        ],
        video: "https://youtu.be/MM9XUcJ1hBw"
      },
      {
        image: EgauImg,
        title: "Egau",
        rolls: [
          { title: "Musikvideo für:", name: "Jule X & Nicky B Fly <br><br>" },
          { title: "Regie & Schnitt:", name: "Jonas Kunz" },
          { title: "DP & Colorist:", name: "Andrin Schranz" },
          { title: "Kamera:", name: "Cedric Ribi<br><br>" },


        ],
        video: "https://youtu.be/EE4Mr78Wh-E"
      },
      {
        image: chempaeImg,
        title: "chempä.",
        rolls: [
          { title: "Kurzfilm für:", name: "Ocular Collective" },
          { title: "Mit:", name: "Jonas Kunz<br><br>" },
          { title: "Story:", name: "Ocular Collective" },
          { title: "Regie:", name: "Jonas Kunz" },
          { title: "Cinematography:", name: "Andrin Schranz & Cedric Ribi" },
          { title: "PA:", name: "Luka Aeschlimann<br><br>" },
          { title: "Schnitt & Colorist:", name: "Jonas Kunz" },

        ],
        video: "https://youtu.be/rdOYQB_9wZ4"
      },
      {
        image: friseImg,
        title: "frisä",
        rolls: [
          { title: "Kurzfilm für:", name: "Ocular Collective" },
          { title: "Mit:", name: "Luka Aeschlimann<br><br>" },
          { title: "Regie:", name: "Ocular Collective" },
          { title: "Cinematographer:", name: "Andrin Schranz & Cedric Ribi" },
          { title: "PA:", name: "Jonas Kunz<br><br>" },
          { title: "Schnitt & Colorist:", name: "Andrin Schranz" },
        ],
        video: "https://youtu.be/T3vn5nujkn8"
      },
      {
        image: nzImg,
        title: "nüt ztüe",
        rolls: [
          { title: "Musikvideo für:", name: "Jaru <br><br>" },
          { title: "Regie & Schnitt:", name: "Jonas Kunz" },
          { title: "Cinematographer:", name: "Andrin Schranz" },
          { title: "PA:", name: "Luis Schneuwly" }
        ],
        video: "https://youtu.be/a3eobSkWqfo"
      },
      {
        image: NBImg,
        title: "Nils Buri",
        rolls: [
          { title: "Documentary für:", name: "Nils Buri <br><br>" },
          { title: "Produktion:", name: "Ocular Collective" }
        ],
        video: "https://youtu.be/URoZHHvk4NQ"
      }
    ],
    imprint: [
      {
        title: "Inhaltliche Verantwortung",
        content:
          '<strong>ocular KLG</strong><br>Kirchlindachstrasse 15<br>3052 Zollikofen<br><br><a href="mailto:info@ocular.ch">info@ocular.ch</a><br><br>CHE-411.013.552'
      },
      {
        subSections: [
          {
            title: "Copyright",
            content:
              "Die Urheber- und alle anderen Rechte an Inhalten wie Bilder, Illustrationen, Videos wie auch Texte oder andere Inhalte auf dieser Website, gehören ausschliesslich Jonas Kunz oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Inhalte ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen."
          }
        ],
        title: "Disclaimer",
        content:
          "Alle Texte und Links wurden sorgfältig geprüft und werden laufend aktualisiert. Jedoch übernimmt der Autor keinerlei Verantwortung, Garantien oder Haftung dafür, dass die durch diese Website bereitgestellten Informationen, richtig, vollständig oder aktuell sind. Der Autor behält sich das Recht vor, jederzeit und ohne Vorankündigung die Informationen auf dieser Website zu ändern und verpflichtet sich auch nicht, die enthaltenen Informationen zu aktualisieren. Alle Links zu externen Anbietern wurden zum Zeitpunkt ihrer Aufnahme auf ihre Richtigkeit überprüft, dennoch haftet der Autor nicht für Inhalte und Verfügbarkeit von Websites, die mittels Hyperlinks zu erreichen sind. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die durch Inhalte verknüpfter Seiten entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde. Dabei ist es gleichgültig, ob der Schaden direkter, indirekter oder finanzieller Natur ist oder ein sonstiger Schaden vorliegt, der sich aus Datenverlust, Nutzungsausfall oder anderen Gründen aller Art ergeben könnte.",
      },
      {
        title: "Datenschutz",
        content:
          "Für die Sicherheit der Datenübertragung im Internet können wir keine Gewähr übernehmen, insbesondere besteht bei der Übertragung von Daten per E-Mail die Gefahr des Zugriffs durch Dritte.<br>Einer Nutzung der im Impressum veröffentlichten Kontaktdaten durch Dritte zu Werbezwecken wird hiermit ausdrücklich widersprochen. Der Betreiber behält sich für den Fall unverlangt zugesandter Werbe- oder Informationsmaterialien ausdrücklich rechtliche Schritte vor.<br>Sollten einzelne Regelungen oder Formulierungen dieses Haftungsausschlusses unwirksam sein oder werden, bleiben die übrigen Regelungen in ihrem Inhalt und ihrer Gültigkeit hiervon unberührt.",
        subSections: [
          {
            title: "Adobe Fonts",
            content:
              'Wir setzen auf unserer Website Adobe Fonts zur visuellen Gestaltung ein. Adobe Fonts ist ein Dienst der Adobe Systems Incorporated, 345 Park Avenue, San Jose, CA 95110-2704, USA (Adobe), der uns den Zugriff auf eine Schriftartenbibliothek gewährt. Zur Einbindung der von uns benutzten Schriftarten, muss dein Browser eine Verbindung zu einem Server von Adobe in den USA aufbauen und die für unsere Website benötigte Schriftart herunterladen. Adobe erhält hierdurch die Information, dass von Ihrer IP-Adresse unsere Website aufgerufen wurde. Weitere Informationen zu Adobe Fonts, finden Sie in der Datenschutzerklärung von Adobe, welche du unter folgendem Link findest: <a href="https://www.adobe.com/ch_de/privacy/policies/adobe-fonts.html" target="_blank">Adobe Fonts Datenschutzerklärung</a>'
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
