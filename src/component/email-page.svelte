<script lang="ts">
  export let gmail: string
</script>

<div>
  <div class="email-text">{gmail}</div>
</div>

<style lang="scss">
  .email-text {
    width: 100%;
    color: #636b78;
    text-transform: lowercase;
    font-size: 2em;
    font-weight: 100;
    font-family: 'Zenkurenaido';
  }

  @media (max-width: 640px) {
    .email-text {
      font-size: 1.5em;
    }
  }
</style>
