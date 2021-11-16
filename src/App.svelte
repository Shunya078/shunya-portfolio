<script lang="ts">
  import Button from './component/button/index.svelte'
  import DisbledButton from './component/disabled-button/index.svelte'

  export let name: string
</script>

<main>
  <h1>{name}</h1>
  <Button text="hello" />
  <DisbledButton />
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
