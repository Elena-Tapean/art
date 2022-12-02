<template>
    <section class="pages-page">
        <h1>Pages</h1>
        <q>Custom website page where the creator illustrates examples of their projects.</q>
        <div class="work-div">
            <h2>{{ page.name }}</h2>
            <p v-html="page.text" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'Pages',
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
.pages-page {
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
        .work-div {
            margin-top: 50px;
            
            h2 {
                font-size: 25px;
                color: white;
            }
            p {
                font-size: 20px;
                color: white;
                text-align: center;
            }
        }
    }
}
</style>