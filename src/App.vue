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
        <p>
          In the meantime, we are happy to connect through our other socials.
        </p>
        <div class="section-spacer"></div>
        <div class="profile-bubbles d-flex justify-space align-center">
          <img
            class="bubble"
            :class="[visibility.gabrielle ? 'active' : '']"
            src="./assets/img/GabCrimsonG.png"
            alt="Image of Gabrielle"
            @click="handleSocialMenu('gabrielle')"
          />

          <img
            class="bubble"
            :class="[visibility.axel ? 'active' : '']"
            src="./assets/img/GabCrimsonG.png"
            alt="Image of Gabrielle"
            @click="handleSocialMenu('axel')"
          />
        </div>
        <div class="section-spacer"></div>
        <div
          v-if="!visibility.gabrielle && !visibility.axel"
          class="section-spacer"
        ></div>
        <div
          v-if="visibility.gabrielle"
          class="contact-gabrielle d-flex justify-start"
        >
          <font-awesome-icon
            class="fai fai-gabrielle ms-1 mt-05"
            :icon="['fab', 'github-square']"
          />
          <font-awesome-icon
            class="fai fai-gabrielle ms-1 mt-05"
            :icon="['fab', 'linkedin']"
          />
          <font-awesome-icon class="fai fai-gabrielle ms-1 mt-05" icon="at" />
        </div>
        <div v-if="visibility.axel" class="contact-axel d-flex justify-end">
          <font-awesome-icon
            class="fai fai-axel ms-1 mt-05"
            :icon="['fab', 'github-square']"
          />
          <font-awesome-icon
            class="fai fai-axel ms-1 mt-05"
            :icon="['fab', 'linkedin']"
          />
          <font-awesome-icon class="fai fai-axel ms-1 mt-05" icon="at" />
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
      visibility: {
        axel: false,
        gabrielle: true,
      },
    };
  },
  methods: {
    handleSocialMenu(person) {
      if (person == "gabrielle") {
        this.visibility.axel = false;
        this.visibility.gabrielle = !this.visibility.gabrielle;
      }
      if (person == "axel") {
        this.visibility.gabrielle = false;
        this.visibility.axel = !this.visibility.axel;
      }
    },
  },
};
</script>
