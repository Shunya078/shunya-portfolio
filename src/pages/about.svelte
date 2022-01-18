<script lang="ts">
  import AboutPage from '../component/about-page.svelte'

  type AboutInfo = {
    key: string
    value: string
  }

  const info: AboutInfo[] = [
    { key: '氏名', value: '大坪 隼也' },
    { key: 'Works', value: 'web dev.' },
    { key: 'School', value: 'Nagoya Univ.' },
    { key: 'Twitter', value: '@_Shunya078' },
    { key: 'GitHub', value: 'Shunya078' }
  ]
</script>

<main>
  <div class="home-wrapper">
    <AboutPage {info} />
  </div>
</main>

<style lang="scss">
  .home-wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
  }
</style>
