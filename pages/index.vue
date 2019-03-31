<template>
  <section class="container">
    <div>
      <a class="main-logo" href="/">
        <logo />
      </a>
      <h1 class="title title--animation">
        Minor Arrieta Rojas
      </h1>
      <SocialIconsNav />
    </div>
  </section>
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
      const title = this.$el.getElementsByClassName('title--animation')[0]
      if (title) {
        title.classList.remove('title--animation')
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
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 2em;
  color: #35495e;
  overflow: hidden;
  border-right: .15em solid white;
  padding-right: 5px;
  white-space: nowrap;
  letter-spacing: 1px;
  margin: 25px 0;
}

.title--animation {
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
  from, to { border-color: #35495e }
  50% { border-color: transparent }
}
</style>
