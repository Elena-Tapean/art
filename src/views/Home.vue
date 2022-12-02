<template>
  <section class="home-page">
    <h1>Projects on the House</h1>
    <q>A summary of my projects. And an experimental project on its own.</q>
    <ul>
      <li v-for="page in pages" :key="page.id">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>{{ page.name }}</h2>
            </div>
            <div class="flip-card-back">
              <router-link :to="`/pages/${page.id}`">
                <p v-html="page.text" />
              </router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('get_data')
  },
  computed: {
    pages () {
      return this.$store.state.pages
    },
    page () {
      const id = this.$router.currentRoute.params.id
      const pages = this.$store.state.pages
      const page = pages.filter(obj => obj.id.toString() === id)[0]
      return page
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
      display: flex;
      margin: 0 auto;
      color: skyblue;
      font-style: italic;
      text-decoration: none;
    }
    ul {
      margin: 35px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    li {
      border: none;
    }
    .flip-card {
      background-color: transparent;
      width: 120px;
      height: 150px;
      perspective: 1000px;
    }
    .flip-card-inner {
      position: relative;
      margin: 8px auto;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.8);
    }
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    .flip-card-front {
      background: linear-gradient(rgb(228, 83, 131), rgb(218, 30, 93));
      color: white;
      border-radius: 5px;
    }
    .flip-card-back {
      background-color: rgb(228, 83, 131);
      color: white;
      border-radius: 5px;
      transform: rotateY(180deg);
    }
  }
}
</style>
