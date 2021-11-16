<script lang="ts">
  import Button from './component/button.svelte'
  import DisbledButton from './component/disabled-button.svelte'

  export let name: string
  let childCnt: number = 0

  function updateChild (event) {
    childCnt = event.detail.cnt
  }
</script>

<main>
  <h1>{name}</h1>
  <Button text="hello" {childCnt} on:updateChild={updateChild} />
  <DisbledButton />
  {#if childCnt > 10}
	<span>
		10回押した！
	</span>
  {:else}
    <span>もっと押せ~
		</span>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
