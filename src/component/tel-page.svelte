<script lang="ts">
  export let tel: string
</script>

<div>
  <div class="tel-text">{tel}</div>
</div>

<style lang="scss">
  .tel-text {
    width: 100%;
    color: #636b78;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    font-family: 'Zenkurenaido'
  }


  @media (max-width: 640px) {
    .tel-text {
      font-size: 3em;
    }
  }
</style>
