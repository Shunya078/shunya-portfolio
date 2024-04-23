<script lang="ts">
  import { Router, Route, navigate } from 'svelte-routing'
  import Home from './pages/index.svelte'
  import About from './pages/about.svelte'
  import Email from './pages/email.svelte'
  import Bank from './pages/bank.svelte'
  import Line from './pages/line.svelte'
  import Help from './pages/help.svelte'
  import NotFound from './pages/not-found.svelte'

  let clickCnt: number = 0
  let pageCount: number = 0
  const routes: string[] = ['/', '/about', '/email', '/line']

  function clickWindow () {
    clickCnt += 1
    if (clickCnt > 2) {
      if (pageCount === routes.length - 1) {
        pageCount = 0
      } else {
        pageCount += 1
      }
      clickCnt = 0
      navigate(routes[pageCount], { replace: true })
    }
  }

  function handleKeydown (event) {
    if (event.key === 'b') {
      navigate('/bank', { replace: true })
    } else if (event.key === 'l') {
      navigate('/line', { replace: true })
    } else if (event.key === 'h') {
      navigate('/help', { replace: true })
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<Router>
  <main class="main" on:click={clickWindow}>
    <Route path="/"><Home /></Route>
    <Route path="/about"><About /></Route>
    <Route path="/email"><Email /></Route>
    <Route path="/bank"><Bank /></Route>
    <Route path="/line"><Line /></Route>
    <Route path="/help"><Help /></Route>
    <Route component={NotFound} />
  </main>
</Router>

<style lang="scss">
  @media (min-width: 640px) {
    .main {
      max-width: none;
    }
  }
</style>
