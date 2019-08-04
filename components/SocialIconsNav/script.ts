import { Component, Vue } from 'vue-property-decorator'
import LinkedInLogo from '~/components/logos/LinkedInLogo.vue'
import GithubLogo from '~/components/logos/GithubLogo.vue'
import TwitterLogo from '~/components/logos/TwitterLogo.vue'

@Component({
  components: {
    LinkedInLogo,
    GithubLogo,
    TwitterLogo
  }
})
export default class SocialIconsNav extends Vue {

}
