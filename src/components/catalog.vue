<template>
  <div class="catalog">
    <div @click="menuState" class="drawer-wr">
    </div>
    <div class="drawer">
      <div>
        <div class="d-title">
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z" clip-rule="evenodd"/></svg>
        Menu
      </div>

      <div @click="home" class="d-item">
        <div class="d-container">
          <svg class="d-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/></svg>
        </div>
        <div>
          Home
          <div class="d-subtitle">
            Homepage
          </div>
        </div>
      </div>

      <div @click="catalog" class="d-item">
        <div class="d-container">
          <svg class="d-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 0 0 0 2h1.22l.305 1.222a.997.997 0 0 0 .01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 0 0 0-2H6.414l1-1H14a1 1 0 0 0 .894-.553l3-6A1 1 0 0 0 17 3H6.28l-.31-1.243A1 1 0 0 0 5 1H3zm13 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>
        </div>
        <div>
          Catalog
          <div class="d-subtitle">
            View store listings
          </div>
        </div>
      </div>

      <div @click="aboutState" class="d-item">
        <div class="d-container">
          <svg class="d-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 0 0 0 2h1.22l.305 1.222a.997.997 0 0 0 .01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 0 0 0-2H6.414l1-1H14a1 1 0 0 0 .894-.553l3-6A1 1 0 0 0 17 3H6.28l-.31-1.243A1 1 0 0 0 5 1H3zm13 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>
        </div>
        <div>
          About
          <div class="d-subtitle">
            What we do
          </div>
        </div>
      </div>

      <div @click="contactState" class="d-item">
        <div class="d-container">
          <svg class="d-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
        </div>
        <div>
          Contact us
          <div class="d-subtitle">
            Get in touch
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="contact-wr">
      <div class="contactt">
        <div>
          <div class="d-title">
          <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z" clip-rule="evenodd"/></svg>
          Contact us
        </div>
        </div>

        <div @click="catalog" class="d-item">
          <div class="d-container">
            <svg class="d-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 5v8a2 2 0 0 1-2 2h-5l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"/></svg>
          </div>
          <div>
            Whatsapp
            <div class="d-subtitle">
              Chat with us
            </div>
          </div>
        </div>

        <div @click="catalog" class="d-item">
          <div class="d-container">
            <svg class="d-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
          </div>
          <div>
            Phone Number
            <div class="d-subtitle">
              Call us
            </div>
          </div>
        </div>

        <div @click="contactState" class="close-btn-wr">
          <div class="close-btn">
            Close
          </div>
        </div>
      </div>
    </div>

    <div class="about-wr">
      <div class="aboutt">
          <div class="d-container">
            <svg class="d-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 5v8a2 2 0 0 1-2 2h-5l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"/></svg>
            About 
          </div>

          <div class="about-about">
            We are a store that sells electronics,
            toys, gym equipment and more in bulk or singular
            form.
          </div>

        <div @click="aboutState" class="close-btn-wr">
          <div class="close-btn">
            Close
          </div>
        </div>
      </div>
    </div>
    <div class="h-header">
      <div class="name">
        store<span class="front">front</span>
      </div>
      <svg @click="menuState" class="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" clip-rule="evenodd"/></svg>
      <!-- <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M6.429 9.847a4.47 4.47 0 0 1 7.573-2.012 4.186 4.186 0 0 1 1.136-.21v-.13c0-2.482-1.845-4.495-4.12-4.495-1.626 0-3.02 1.038-3.69 2.531a3.01 3.01 0 0 0-1.694-.535c-1.785 0-3.231 1.577-3.231 3.523 0 .21.024.414.057.613-1.377.136-2.455 1.544-2.455 3.08 0 .016.004.029.004.045-.001.014-.009.028-.009.042 0 .615.214 1.177.561 1.631A2.638 2.638 0 0 0 2.701 15h1.261a3.574 3.574 0 0 1-.398-1.615 3.62 3.62 0 0 1 2.865-3.538zm11.46 1.93c-.025 0-.05.007-.075.008.007-.074.022-.146.022-.222a2.664 2.664 0 0 0-2.665-2.664 2.64 2.64 0 0 0-1.564.516 3.22 3.22 0 0 0-2.838-1.712 3.237 3.237 0 0 0-3.237 3.237c0 .023.006.043.007.066a2.36 2.36 0 0 0-.359-.036 2.414 2.414 0 0 0-2.366 2.902A2.612 2.612 0 0 0 7.38 16h10.706v-.019a2.106 2.106 0 0 0-.197-4.204z"/></svg> -->
      <!-- <svg class="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8z" clip-rule="evenodd"/></svg> -->
      
      <!-- <svg class="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 0 0 0 2h1.22l.305 1.222a.997.997 0 0 0 .01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 0 0 0-2H6.414l1-1H14a1 1 0 0 0 .894-.553l3-6A1 1 0 0 0 17 3H6.28l-.31-1.243A1 1 0 0 0 5 1H3zm13 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg> -->
      <div class="account">
        <!-- <button class="login">
          Login
        </button>
        <button class="register">
          Register
        </button> -->
        <div @click="home" class="menu-tab">
          Home
        </div>
        <div @click="catalog" class="menu-tab">
          Catalog
        </div>
        <div @click="aboutState" class="menu-tab">
          About
        </div>
        <div @click="contactState" class="menu-tab">
          Contacts
        </div>
      </div>
    </div>

    <div class="stock-wr">
      <div v-for="(stock, i) in stocks" :key="i" class="stock-item">
        <div class="item-t">
          {{ stock.name }}
          <div class="cost">
            KES {{ stock.price }}
          </div>
        </div>
        <img :src="stock.img" class="pic">
        <div class="i-desc">
          {{ stock.desc }}
        </div>
        <div class="orderr">
          Order
        </div>
        <div class="specs">
          View specs
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
// import Drawer from './drawer.vue'

export default {
  components: {
    // Drawer
  },
  data(){
    return {
      contactMenu: false,
      menu: false,
      aboutMenu: false,
      stocks: [
        {
          name: "Plasma screen",
          price: "22k",
          img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          desc: 'Android Television with plasma screen'
        },
        {
          name: "Gaming CPU",
          price: "79k",
          img: 'https://images.unsplash.com/photo-1551033541-2075d8363c66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNwdXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          desc: 'Gaming computer'
        },
        {
          name: "Dumbell and strap",
          price: "22k",
          img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VpZ2h0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          desc: 'A pair of dumbells and accompanying strap'
        },
        {
          name: "Plasma screen",
          price: "22k",
          img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          desc: 'Android Television with plasma screen'
        },
      ]
    }
  },

  methods: {
    catalog(){
      this.menuState()
      this.$router.push({ name: 'Catalog' })
    },

    home(){
      this.menuState()
      this.$router.push({ name: 'Home' })
    },

    aboutState(){
      this.menuState()
      switch (this.aboutMenu) {
        case false:
          this.aboutMenu = true
          gsap.to(".about-wr", {
            ease: "power3.easeOut",
            display: "flex",
            opacity: 1,
            duration: 0.5,
          });

          gsap.to(".aboutt", {
            ease: "power3.easeOut",
            display: "block",
            opacity: 1,
            duration: 0.5,
          });
          break;

        case true:
          this.aboutMenu = false
          gsap.to(".about-wr", {
            ease: "power3.easeOut",
            display: "none",
            opacity: 0,
            duration: 0.5,
          });

          gsap.to(".aboutt", {
            ease: "power3.easeOut",
            display: "none",
            opacity: 0,
            duration: 0.5,
          });
          break;
      
        default:
          break;
      }
    },

    contactState(){
      this.menuState()
      switch (this.contactMenu) {
        case false:
          this.contactMenu = true
          gsap.to(".contact-wr", {
            ease: "power3.easeOut",
            display: "flex",
            opacity: 1,
            duration: 0.5,
          });

          gsap.to(".contactt", {
            ease: "power3.easeOut",
            display: "block",
            opacity: 1,
            duration: 0.5,
          });
          break;

        case true:
          this.contactMenu = false
          gsap.to(".contact-wr", {
            ease: "power3.easeOut",
            display: "none",
            opacity: 0,
            duration: 0.5,
          });

          gsap.to(".contactt", {
            ease: "power3.easeOut",
            display: "none",
            opacity: 0,
            duration: 0.5,
          });
          break;
      
        default:
          break;
      }
    },

    menuState(){
      switch (this.menu) {
        case false:
          this.menu = true 
          gsap.to(".drawer-wr", {
            ease: "power3.easeOut",
            display: "block",
            opacity: 1,
            duration: 0.5,
          });
          gsap.to(".drawer", {
            ease: "power3.easeOut",
            display: "flex",
            opacity: 1,
            y: 0,
            duration: 0.5,
          });
          break;

        case true:
          this.menu = false
          gsap.to(".drawer-wr", {
            ease: "power3.easeOut",
            display: "none",
            opacity: 0,
            duration: 0.5,
          });
          gsap.to(".drawer", {
            ease: "power3.easeOut",
            display: "none",
            opacity: 0,
            y: 50,
            duration: 0.5,
          });
          break;
      
        default:
          break;
      }
    }
  }
}
</script>

<style>
@import '../styles/catalog.css';
@import '../styles/hello.css';
</style>