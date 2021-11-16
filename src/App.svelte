<script lang="ts">
  import TitleWrapper from './component/title-wrapper.svelte'

  export let name: string
  export let title: string
  let clickCnt: number = 0

  function clickWindow () {
    clickCnt += 1
  }
</script>

<main>
  <div class="main-wrapper" on:click={clickWindow}>
    <TitleWrapper {name} {title} />
    {#if clickCnt > 5}
      <span> 5回押した！ </span>
    {:else}
      <span> もっと押せ~ </span>
    {/if}
  </div>
</main>

<style lang="scss">
  main {
    height: 100%;
  }

  .main-wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
