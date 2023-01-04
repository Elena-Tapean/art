<template>
    <section class="error-page">
        <p>This is page does not exist.</p>
        <p>Go <router-link to='/'>Home</router-link>.</p>
    </section>
</template>

<script>
export default {
    name: 'Page404',
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
.error-page {
    @media only screen and (min-width: 0) {
        height: 100%;

        p {
            margin-top: 50px;
            font-size: 24px;
            color: white;
            text-align: center;
        }
        a {
            font-size: 24px;
            font-style: italic;
            color: purple;
            text-decoration: none;
        }
    }
}
</style>