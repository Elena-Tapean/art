<template>
    <header class="nav-bar">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/publications">Publications</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'NavBar',
    data () {
        return {
            nav: [
                {
                    name: 'Home',
                    to: '/'
                },
                {
                    name: 'Publications',
                    to: '/publications'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.nav-bar {
    @media only screen and (min-width: 0) {
        padding: 20px;

        nav {
            display: flex;
            justify-content: space-around;

            a {
                font-size: 21px;
                font-style: italic;
                text-decoration: none;
                color: black;

                &.router-link-exact-active {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>