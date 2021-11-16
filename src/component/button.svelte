<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  export let text: string
  export let childCnt

  function add () {
    childCnt++
    dispatch('updateChild', { cnt: childCnt })
  }
</script>

<div class="hoge">
  <button on:click={add}>{text}</button>
</div>
