<script lang="ts">
  import { Link } from 'svelte-routing'
  const routes = [
    {
      key: '/',
      value: 'Top'
    },
    {
      key: '/about',
      value: '概要'
    },
    {
      key: '/email',
      value: 'Email'
    },
    {
      key: '/tel',
      value: 'Telephone'
    },
    {
      key: '/bank',
      value: '銀行口座'
    },
    {
      key: '/line',
      value: 'Line'
    }
  ]
</script>

<main>
  <div class="help-wrapper">
    <div class="table-wrapper">
      {#if routes}
        {#each routes as route}
          <tr>
            <th class="title-text">{route.key}</th>
            <span class="title-text">:</span>
            <td class="title-text"><Link to={route.key}>{route.value}</Link></td
            >
          </tr>
        {/each}
      {/if}
    </div>
  </div>
</main>

<style lang="scss">
  .help-wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
  }

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
  }
</style>
