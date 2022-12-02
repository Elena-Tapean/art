<template>
    <section class="about-page">
        <h1>About</h1>
        <q>The classic About page. Providing information about the website.</q>
    </section>
</template>

<script>
export default {
    name: 'About',
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
.about-page {
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
    }
}
</style>