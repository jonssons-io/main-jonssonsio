<template>
  <main id="app" class="fill-height fill-width d-flex">
    <div class="fill-height left"></div>
    <div class="fill-height right d-flex flex-col align-center justify-center">
      <h1 class="d-flex">
        Coming s<span class="first-double-o firstbounce">o</span
        ><span class="second-double-o secondbounce">o</span>
        <div class="spacer"></div>
        n
      </h1>
      <h3 class="mt-05">We're in the process of building our website.</h3>
      <div class="section-spacer"></div>
      <hr class="divider" />
      <div class="section-spacer"></div>
      <section class="contact ms-3">
        <p>In the meantime, we are happy to connect through other socials.</p>
        <div class="section-spacer"></div>
        <div class="contact-cards d-flex justify-space">
          <div class="contact-cards-gabrielle d-flex flex-col align-center">
            <img
              class="bubble"
              src="./assets/img/GabCrimsonG.png"
              alt="Image of Gabrielle"
            />
            <div class="socials d-flex flex-wrap justify-center align-center">
              <a href="https://github.com/gabbijonsson" target="_blank">
                <font-awesome-icon
                  class="fai fai-gabrielle mt-05"
                  :icon="['fab', 'github-square']"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/gabbijonsson/"
                target="_blank"
              >
                <font-awesome-icon
                  class="fai fai-gabrielle mt-05"
                  :icon="['fab', 'linkedin']"
                />
              </a>
              <div
                class="fai-at d-flex justify-center align-center"
                @click="copy(gab)"
              >
                <font-awesome-icon class="fai-at-inner" icon="at" />
              </div>
              <a href="https://gabrielle.jonssons.io" target="_blank">
                <font-awesome-icon
                  class="fai fai-gabrielle mt-05"
                  icon="external-link-square-alt"
                />
              </a>
            </div>
          </div>
          <div class="contact-cards-axel d-flex flex-col align-center">
            <img
              class="bubble"
              src="./assets/img/AxTurquoiseG.png"
              alt="Image of Gabrielle"
            />
            <div class="socials d-flex flex-wrap justify-center align-center">
              <a href="https://github.com/Axelelele" target="_blank">
                <font-awesome-icon
                  class="fai fai-axel mt-05"
                  :icon="['fab', 'github-square']"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jonssonaxel/"
                target="_blank"
              >
                <font-awesome-icon
                  class="fai fai-axel mt-05"
                  :icon="['fab', 'linkedin']"
                />
              </a>
              <div
                class="fai-at d-flex justify-center align-center"
                @click="copy(ax)"
              >
                <font-awesome-icon class="fai-at-inner" icon="at" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      gab: "tnoevryyr@wbaffbaf.vb",
      ax: "nkry@wbaffbaf.vb",
    };
  },
  methods: {
    decode(a) {
      return a.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode(
          (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
        );
      });
    },
    copy(person) {
      let y = this.decode(person);
      console.log(y);
      const el = document.createElement("textarea");
      el.value = y;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    },
  },
};
</script>
