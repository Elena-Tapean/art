<template>
    <header class="nav-bar" ref="navBar">
        <nav>
            <a class="img-logo" href="/">
                <img class="img-logo" src="../assets/card2.png" alt="logo" />
            </a>
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
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.nav-bar {
    @media only screen and (min-width: 0) {
        nav {
            padding: 30px;

            .img-logo {
                display: flex;
                flex-direction: row;
                width: 20px;
                height: 40px;
            }

            a {
                text-align: left;
                text-decoration: none;
                color: red;

                &:hover {
                    color: white;
                }
            }
        }
    }
}
</style>