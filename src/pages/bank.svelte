<script lang="ts">
  type BankInfo = {
    key: string
    value: string
  }

  const mitsuiInfo: BankInfo[] = [
    {
      key: '支店',
      value: '金沢(366)'
    },
    {
      key: '口座番号',
      value: '6711455'
    }
  ]
  const mitsubishiInfo: BankInfo[] = [
    {
      key: '支店',
      value: '本山(670)'
    },
    {
      key: '口座番号',
      value: '0162167'
    }
  ]

  const url = 'images/paypay.jpeg'
  const src = url
</script>

<main>
  <div class="bank-wrapper">
    <div class="title-text">三井住友</div>
    {#each mitsuiInfo as mitsui}
      <div class="detail-text">{mitsui.key}: {mitsui.value}</div>
    {/each}
    <div class="title-text">三菱UFJ</div>
    {#each mitsubishiInfo as mitsubishi}
      <div class="detail-text">{mitsubishi.key}: {mitsubishi.value}</div>
    {/each}
    <div class="title-text">PayPay</div>

    <div>
      <img {src} alt=""  class="img-wrapper" />
    </div>
  </div>
</main>

<style lang="scss">
  .bank-wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
  }

  .title-text {
    width: 100%;
    color: #636b78;
    font-size: 2em;
    font-weight: 100;
    font-family: 'Zenkurenaido';
    margin: 24px 0;
  }

  .detail-text {
    width: 100%;
    color: #636b78;
    font-size: 1.5em;
    font-weight: 100;
    font-family: 'Zenkurenaido';
  }

  .img-wrapper {
    width: 200px;
  }
</style>
