<template>
  <div class="home-page">
    <h1>Manipularea prin Imagini</h1>
    <h3>de Elena ȚĂPEAN</h3>
    <div>
      <button class="article-button" @click="prev(article.id)">previous</button>
      <button class="article-button" @click="next(article.id)">next</button>
    </div>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <p v-html="article.text" />
      </li>
    </ul>
  </div>
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
  },
  methods: {
    prev(id) {
      this.$store.commit('PREV_ARTICLE_PARA', {id})
    },
    next(id) {
      this.$store.commit('NEXT_ARTICLE_PARA', {id})
    }
  }
}
</script>

<style lang="scss">
.home-page {
  @media only screen and (min-width: 0) {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 300% 300%;
	  -webkit-animation: gradientBG 10s ease infinite;
	        animation: gradientBG 10s ease infinite;

    @-webkit-keyframes gradientBG {
	    0% {
		    background-position: 0% 50%;
	    }
	    50% {
		    background-position: 100% 50%;
	    }
	    100% {
		    background-position: 0% 50%;
	    }
    }
    @keyframes gradientBG {
	    0% {
		    background-position: 0% 50%;
	    }
	    50% {
		    background-position: 100% 50%;
	    }
	    100% {
		    background-position: 0% 50%;
	    }
    }

    h1 {
      margin: 0;
      padding-top: 50px;
    }
    h1, h3, p {
      color: black;
    }
    p {
      margin: 0 250px;
      text-align: justify;
      font-size: 18px;
      text-indent: 50px;
      line-height: 2;
    }
    hr {
      width: 30%;
    }
    ul, li {
      list-style-type: none;
    }
    .article-button {
      margin: 0 25px;
      margin-bottom: 15px;
      padding: 5px 20px;
      border: none;
      border-radius: 4px;
      background-color: rgb(228, 83, 131);
      color: white;
      font-size: 15px;
      }
      .article-button:hover {
        background-color: rgb(218, 30, 93);
      }
  }
}
</style>
