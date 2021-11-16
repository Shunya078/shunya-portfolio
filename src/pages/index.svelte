<script lang="ts">
  import HomePage from '../component/home-page.svelte'

  const name: string = "shunya ' s"
  const title: string = 'portfolio'

</script>

<main>
  <div class="home-wrapper">
    <HomePage {name} {title} />
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
