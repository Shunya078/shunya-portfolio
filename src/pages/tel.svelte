<script lang="ts">
  import TelPage from '../component/tel-page.svelte'

  const tel: string = '080-2518-3699'
</script>

<main>
  <div class="tel-wrapper">
    <TelPage {tel} />
  </div>
</main>

<style lang="scss">
  .tel-wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
  }
</style>
