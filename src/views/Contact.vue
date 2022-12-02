<template>
    <section class="contact-page">
        <h1>Contact</h1>
        <q>The classic Contact page. Providing options to communicate with the creator behind the website.</q>
    </section>
</template>

<script>
export default {
    name: 'Contact',
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
.contact-page {
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