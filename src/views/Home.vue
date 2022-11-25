<template>
  <section class="home-page">
    <div class="shader-bg">
      <h1>Manipularea prin Imagini</h1>
      <h3>de Elena ȚĂPEAN</h3>
      <ul>
        <li v-for="article in articles" :key="article.id">
          <p v-html="article.text" />
        </li>
      </ul>
      <hr/>
      <span>
        Articol apărut în revista semestrială de cultură, InterArtes, Anul III, nr. 4, 2014, ISSN 2285-9357, ISSN-L 2285-9357. 
      </span>
    </div>
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
    articles () {
      return this.$store.state.articles
    },
    article () {
      const id = this.$router.currentRoute.params.id
      const articles = this.$store.state.articles
      const article = articles.filter(obj => obj.id.toString() === id)[0]
      return article
    }
  }
}
</script>

<style lang="scss">
.home-page {
  @media only screen and (min-width: 0) {
    padding-bottom: 50px;

    .shader-bg {
      margin: 5px 300px;
      padding: 5px;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 5px;
      
      h1 {
        margin: 0;
        padding-top: 50px;
      }
      h1, h3, p {
        color: black;
      }
      hr {
        width: 30%;
      }
      p {
        margin: 0 50px;
        text-align: justify;
        font-size: 18px;
        text-indent: 50px;
        line-height: 2;
      }
      ul, li {
        list-style-type: none;
      }
      span {
        text-align: center;
        font-size: 17px;
        line-height: 2;
      }
      .image-illus {
        width: 30px;
        height: 30px;
      }
    }  
  }
}
</style>
