<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        Minor Arrieta Rojas
      </h1>
      <div class="social-networks">
        <a class="social-networks__item social-networks__linkedin" href="https://www.linkedin.com/in/marrietar/">
          <LinkedInLogo/>
        </a>
        <a class="social-networks__item social-networks__github" href="https://github.com/MARNUTUX">
          <GithubLogo/>
        </a>
        <a class="social-networks__item social-networks__twitter" href="https://twitter.com/marnutux">
          <TwitterLogo/>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LinkedInLogo from '~/components/logos/LinkedInLogo.vue'
import GithubLogo from '~/components/logos/GithubLogo.vue'
import TwitterLogo from '~/components/logos/TwitterLogo.vue'

export default {
  components: {
    Logo,
    LinkedInLogo,
    GithubLogo,
    TwitterLogo
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
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 1.5em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.social-networks {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  margin: auto;
}

.social-networks__item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3b8070;
  width: 50px;
  height: 50px;
  overflow: hidden;
}

.social-networks__item svg {
  width: 70%;
  fill: #3b8070;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.social-networks__linkedin svg,
.social-networks__twitter svg {
  animation-name: fade-bottom;
}

.social-networks__github svg {
  animation-name: fade-top;
}

@keyframes fade-bottom {
  from {
    margin-bottom: -60px;
    fill: #3b8070;
  }
  to {
    margin-bottom: 0;
    fill: white;
  }
}

@keyframes fade-top {
  from {
    margin-bottom: 60px;
    fill: #3b8070;
  }
  to {
    margin-bottom: 0;
    fill: white;
  }
}

@keyframes fade-top {
  from {
    margin-bottom: 60px;
    fill: #3b8070;
  }
  to {
    margin-bottom: 0;
    fill: white;
  }
}
</style>
