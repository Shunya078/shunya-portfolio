<script lang="ts">
  import EmailPage from '../component/email-page.svelte'

  const gmail: string = 'kikukan007@gmail.com'
  const companyEmail: string = 'shunya.otsubo@ispec.tech'
  const schoolEmail: string = 'otsubo.shunya@j.mbox.nagoya-u.ac.jp'
</script>

<main>
  <div class="email-wrapper">
    <EmailPage {gmail} {companyEmail} {schoolEmail} />
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
