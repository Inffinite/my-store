<template>
  <div v-if="contactState" class="contact-wr">
    <div class="contactt">
      <div>
        <div class="d-title">
          <svg
            class="arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          Contact us
        </div>
      </div>

      <div class="d-item">
        <div class="d-container">
          <svg
            class="d-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 5v8a2 2 0 0 1-2 2h-5l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          Whatsapp
          <div class="d-subtitle">Chat with us</div>
        </div>
      </div>

      <div class="d-item">
        <div class="d-container">
          <svg
            class="d-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>
        </div>
        <div>
          Phone Number
          <div class="d-subtitle">Call us</div>
        </div>
      </div>

      <div @click="contactStatus" class="close-btn-wr">
        <div class="close-btn">Close</div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  computed: {
    contactState: () => {
      // return store.getters.getContactsState;
      // switch (store.getters.getContactsState) {
      //   case false:
      //     // this.contactMenu = true
      //     store.dispatch('changeContactTab', true)
      //     gsap.to(".contact-wr", {
      //       ease: "power3.easeOut",
      //       display: "flex",
      //       opacity: 1,
      //       duration: 0.5,
      //     });

      //     gsap.to(".contactt", {
      //       ease: "power3.easeOut",
      //       display: "block",
      //       opacity: 1,
      //       duration: 0.5,
      //     });
      //     break;

      //   case true:
      //     // this.contactMenu = false
      //     store.dispatch('changeContactTab', false)
      //     gsap.to(".contact-wr", {
      //       ease: "power3.easeOut",
      //       display: "none",
      //       opacity: 0,
      //       duration: 0.5,
      //     });

      //     gsap.to(".contactt", {
      //       ease: "power3.easeOut",
      //       display: "none",
      //       opacity: 0,
      //       duration: 0.5,
      //     });
      //     break;

      //   default:
      //     break;
      // }
    },
  },

  methods: {
      contactStatus() {
        if (store.getters.getContactsState == false) {
          store.dispatch("changeContactTab", true);
        } else {
          store.dispatch("changeContactTab", false);
        }
      },
    },
};
</script>

<style>
@import "../styles/hello.css";
</style>