<template>
  <div class="hello">
    <div @click="menuState" class="drawer-wr">
    </div>

    <div class="drawer">
      <div class="d-title">
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z" clip-rule="evenodd"/></svg>
        Menu
      </div>

      <div class="d-item">
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

      <div class="d-item">
        <div class="d-container">
          <svg class="d-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M8 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z"/><path d="M6 3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2 3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"/></svg>
        </div>
        <div>
          About
          <div class="d-subtitle">
            What we do
          </div>
        </div>
      </div>

      <div class="d-item">
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

    <div class="h-header">
      <svg @click="menuState" class="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" clip-rule="evenodd"/></svg>
      <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M6.429 9.847a4.47 4.47 0 0 1 7.573-2.012 4.186 4.186 0 0 1 1.136-.21v-.13c0-2.482-1.845-4.495-4.12-4.495-1.626 0-3.02 1.038-3.69 2.531a3.01 3.01 0 0 0-1.694-.535c-1.785 0-3.231 1.577-3.231 3.523 0 .21.024.414.057.613-1.377.136-2.455 1.544-2.455 3.08 0 .016.004.029.004.045-.001.014-.009.028-.009.042 0 .615.214 1.177.561 1.631A2.638 2.638 0 0 0 2.701 15h1.261a3.574 3.574 0 0 1-.398-1.615 3.62 3.62 0 0 1 2.865-3.538zm11.46 1.93c-.025 0-.05.007-.075.008.007-.074.022-.146.022-.222a2.664 2.664 0 0 0-2.665-2.664 2.64 2.64 0 0 0-1.564.516 3.22 3.22 0 0 0-2.838-1.712 3.237 3.237 0 0 0-3.237 3.237c0 .023.006.043.007.066a2.36 2.36 0 0 0-.359-.036 2.414 2.414 0 0 0-2.366 2.902A2.612 2.612 0 0 0 7.38 16h10.706v-.019a2.106 2.106 0 0 0-.197-4.204z"/></svg>
      <svg class="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8z" clip-rule="evenodd"/></svg>
    </div>

    <div class="content-wr">
      <div class="content">
        <div class="content-title-wr">
          <div class="h-title">
          All your needs <br>
          <div class="title-small">in one <span>place</span></div>
          </div>

          <div class="h-subtitle">
            Browse our stock to find what you are 
            looking for.
          </div>

          <div class="actions">
            <button class="order">
              Explore catalog
            </button>
            <button class="aboutus">
              About us
              <svg class="about-us-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414z" clip-rule="evenodd"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div class="h-pic-wr">
        <img class="h-pic" src="../assets/ad.png">
      </div>
    </div>

    <div class="store-f-wr">
      <div class="store-f">
        <svg class="quote" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M5.315 3.401c-1.61 0-2.916 1.343-2.916 3 0 1.656 1.306 3 2.916 3 2.915 0 .972 5.799-2.916 5.799v1.4c6.939.001 9.658-13.199 2.916-13.199zm8.4 0c-1.609 0-2.915 1.343-2.915 3 0 1.656 1.306 3 2.915 3 2.916 0 .973 5.799-2.915 5.799v1.4c6.938.001 9.657-13.199 2.915-13.199z"/></svg>
        <div>
          A new kind of <span class="blue">store front</span>
        </div>
      </div>
    </div>

    <div class="tasks-wrapper">
      <div class="task-item">
        <div style="display: flex; justify-content: center;">
          <div class="task-icon-container">
            <svg class="task-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.22l.123.489.804.804A1 1 0 0 1 13 18H7a1 1 0 0 1-.707-1.707l.804-.804L7.22 15H5a2 2 0 0 1-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/></svg>
          </div>
        </div>
        <div class="task-details">
          <div class="task-title">
            Electronics
          </div>
          <div class="task-subtitle">
            Shop for electronic gadgets
          </div>
        </div>
      </div>

      <div class="task-item">
        <div style="display: flex; justify-content: center;">
          <div class="task-icon-container">
            <svg class="task-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zm1 2a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H7zm6 7a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1zm-3 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H10zm-4 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm1-4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H7zm2 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1zm4-4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H13zM9 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1zM7 8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2H7z" clip-rule="evenodd"/></svg>
          </div>
        </div>
        <div class="task-details">
          <div class="task-title">
            Appliances
          </div>
          <div class="task-subtitle">
            Home appliances for you
          </div>
        </div>
      </div>

      <div class="task-item">
        <div style="display: flex; justify-content: center;"> 
          <div class="task-icon-container">
            <svg class="task-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 0 0 .078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913 1.58 1.58A5.98 5.98 0 0 1 10 16a5.976 5.976 0 0 1-2.516-.552l1.562-1.562a4.006 4.006 0 0 0 1.789.027zm-4.677-2.796a4.002 4.002 0 0 1-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 0 0 4 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0 1 10 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 0 0-2.346.033L7.246 4.668zM12 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" clip-rule="evenodd"/></svg>
          </div>
        </div>
        <div class="task-details">
          <div class="task-title">
            Gym Equipment
          </div>
          <div class="task-subtitle">
            Enhance you workout sessions
          </div>
        </div>
      </div>

      <div class="task-item">
        <div style="display: flex; justify-content: center;">
          <div class="task-icon-container">
            <svg class="task-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M17.707 9.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7A.997.997 0 0 1 2 10V5a3 3 0 0 1 3-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clip-rule="evenodd"/></svg>
          </div>
        </div>
        <div class="task-details">
          <div class="task-title">
            Toys
          </div>
          <div class="task-subtitle">
            For fun filled playdates
          </div>
        </div>
      </div>
    </div>

  <div class="btn-wr">
    <div style="display: flex; justify-content: center;">
      <button class="talk-btn">
        Talk to us
      </button>
    </div>

    <button class="learn">
      Learn more
    </button>
  </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'HelloWorld',
  data(){
    return {
      menu: false,
      tasks: [
        {
          name: 'Electronics',
          info: 'Shop for electronic gadgets'
        },
        {
          name: 'Appliances',
          info: 'Shop for electronic gadgets'
        },
        {
          name: 'Gym Equipment',
          info: 'Shop for electronic gadgets'
        },
        {
          name: 'Utilities',
          info: 'Shop for electronic gadgets'
        },
      ]
    }
  },

  methods: {
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
            display: "block",
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
@import '../styles/hello.css';
</style>
