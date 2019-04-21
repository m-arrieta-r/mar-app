<template>
  <div class="page">
    <section class="container">
      <div>
        <a class="main-logo" href="/">
          <logo />
        </a>
        <div class="title-container">
          <h1 class="title text--animation">
            Minor Arrieta Rojas
          </h1>
        </div>
        <SocialIconsNav />
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SocialIconsNav from '~/components/SocialIconsNav'

export default {
  components: {
    Logo,
    SocialIconsNav
  },
  mounted() {
    setTimeout(() => { this.removeTitleTyping() }, 4000)
    this.downloadLogo()
  },
  methods: {
    removeTitleTyping() {
      const typingClass = 'text--animation'
      const title = this.$el.getElementsByClassName(typingClass)[0]
      if (title) {
        title.classList.remove(typingClass)
      }
    },
    downloadLogo() {
      const mainLogo = this.$el.getElementsByClassName('main-logo')[0]
      mainLogo.addEventListener('contextmenu', function (event) {
        event.preventDefault()
        return false
      }, false)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  width: 100%;
  font-family: 'Quicksand', 'Source Sans Pro' 'Helvetica Neue', Arial, sans-serif;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  overflow: hidden;
  border-right: 4px solid white;
  border-left: 4px solid white;
  padding-right: 5px;
  white-space: nowrap;
  letter-spacing: 1px;
  margin: 25px 0;
}

.title-container {
  width: 275px;
}

.text--animation {
  border-right: .15em solid #35495e;
  animation:
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-right-color: #35495e }
  50% { border-right-color: transparent }
}
</style>
