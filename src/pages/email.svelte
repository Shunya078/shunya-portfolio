<script lang="ts">
  import EmailPage from '../component/email-page.svelte'

  const gmail: string = 'kikukan007@gmail.com'
</script>

<main>
  <div class="email-wrapper">
    <EmailPage {gmail} />
  </div>
</main>

<style lang="scss">
  .email-wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
  }
</style>
