<script lang="ts">
  export let name: string
  export let title: string
</script>

<div>
  <div class="title-text">{name}</div>
  <div class="title-text">{title}</div>
</div>

<style lang="scss">
  .title-text {
    width: 100%;
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    font-family: 'Zenkurenaido'
  }
</style>
