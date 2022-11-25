<template>
    <section class="publications-page">
        <router-link to='/'><h1>Manipularea prin Imagini</h1></router-link>
        <h3>Autor: Elena ȚĂPEAN</h3>
        <h3>Introducere:</h3>
        <p>
            Avem demonstrația în fiecare zi cum la Tele-screenul nostru dystopaian vedem o multitudine de imagini, mici sau mari în dimensiune, de un colorit variat și de un șoc mai mult sau mai puțin antrenant la vederea sa; demonstrație care arată cât de mult le place oamenilor să se uite la imagini decât să mai apuce în mână o carte. Această schimbare a apărut odată ce cărțile au devenit ilustrate. Nu a mai fost numai nuvela în sine, dar a fost urmată și de imaginile sale care oglindeau pățaniile protagonistului principal. De atunci până acum mai existau câțiva pași pentru ca imaginea să domine cartea...
        </p>
    </section> 
</template>

<script>
export default {
    name: 'Publications',
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
.publications-page {
    @media only screen and (min-width: 0) {
        padding-bottom: 50px;
        margin: 25px 150px;
        padding: 15px;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 5px;

        h1 {
            padding-top: 10px;
            margin: 0 50px;
            font-size: 20px;
            font-style: italic;
            text-align: left;
        }
        a {
            text-decoration: none;
            color: darkblue;
            :hover {
                text-decoration: underline;
            }
        }
        h3 {
            margin: 0 70px;
            font-size: 16px;
            text-align: left;
        }
        p {
            margin: 0 50px;
            font-size: 17px;
            text-indent: 50px;
            text-align: justify;
            line-height: 1.5;
        }
        ul, li {
            list-style-type: none;
        }
    }
}
</style>