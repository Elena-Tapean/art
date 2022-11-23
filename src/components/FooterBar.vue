<template>
    <footer class="footer-bar" ref="footerBar">
        <nav>
            <a class="img-logo" href="/game">
                <img class="img-logo" src="../assets/card1.png" alt="logo" />
            </a>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'FooterBar',
    data () {
        return {
            nav: [
                {
                    name: 'Game',
                    to: '/game'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.footer-bar {
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