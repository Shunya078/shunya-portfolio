<script lang="ts">
  const url = 'images/line.jpeg'
  const src = url
</script>

<main>
  <div class="line-wrapper">
    <div>
      <img {src} alt="" class="img-wrapper" />
    </div>
  </div>
</main>

<style lang="scss">
  .line-wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
  }

  .img-wrapper {
    width: 25%;
  }

  @media (max-width: 640px) {
    .img-wrapper {
      width: 75%;
    }
  }
</style>
