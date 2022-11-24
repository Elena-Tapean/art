<template>
  <div class="home-page">
    <h1>Manipularea prin Imagini</h1>
    <h3>de Elena ȚĂPEAN</h3>
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
    #source {
      padding-bottom: 25px;
      text-align: center;
      font-size: 15px;
    }
    ul, li {
      list-style-type: none;
    }
  }
}
</style>
