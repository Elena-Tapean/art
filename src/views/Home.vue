<template>
  <section class="home-page">
    <h1>First Games</h1>
    <q>A collection of simple games.</q>
      <a href="/game_one">Game_One</a>
      <a href="/game_two">Game_Two</a>
      <a href="/game_three">Game_Three</a>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.home-page {
  @media only screen and (min-width: 0) {
    height: 100%;

    h1 {
      margin-left: 40px;
      font-size: 55px;
      color: white;
      text-align: left;
    }
    q {
      margin-left: 60px;
      font-size: 23px;
      color: white;
      quotes: none;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
    h2 {
      font-size: 18px;
      color: white;
    }
    p {
      font-size: 15px;
      color: white;
      text-align: center;
    }
    a {
      margin-left: 100px;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      font-size: 24px;
      color: white;
      font-style: italic;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
}
</style>
