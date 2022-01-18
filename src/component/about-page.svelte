<script lang="ts">
  type AboutInfo = {
    key: string
    value: string
  }

  export let info: AboutInfo[]
</script>

<div class="table-wrapper">
  {#if info}
    {#each info as info}
      <tr>
        <th class="title-text">{info.key}</th>
        <span class="title-text">:</span>
        {#if info.key === 'Twitter'}
          <a class="title-text" href="https://twitter.com/_Shunya078"
            >{info.value}</a
          >
        {:else if info.key === 'GitHub'}
          <a class="title-text" href="https://github.com/Shunya078"
            >{info.value}</a
          >
        {:else}
          <td class="title-text">{info.value}</td>
        {/if}
      </tr>
    {/each}
  {/if}
</div>

<style lang="scss">
  .table-wrapper {
    display: table;
    width: 50%;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    .table-wrapper {
      width: 100%;
    }
  }

  .title-text {
    display: table-cell;
    vertical-align: inherit;
    color: #636b78;
    font-size: 2em;
    font-weight: 100;
    font-family: 'Zenkurenaido';
    text-decoration: none;
  }
</style>
