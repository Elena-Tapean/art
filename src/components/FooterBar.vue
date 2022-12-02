<template>
    <footer class="footer-bar">
        <div class="title">
            <h3>(c) Copyright. E.Ț. 2022</h3>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterBar',
    data () {
        return {
        }
    }
}

</script>

<style lang="scss">
.footer-bar {
    @media only screen and (min-width: 0) {
        padding: 20px;
        
        .title {
            width: 20%;
            top: 70%;
            right: 50px;
            position: absolute;
            overflow: hidden;
            animation: footer 2s linear forwards;
        }

        .title h3 {
            font-size: 15px;
            color: white;
        }

        @keyframes footer {
            0% {
                width: 0px;
                height: 0px;
            }
            30% {
                width: 50px;
                height: 0px;
            }
            60% {
                width: 50%;
                height: 80px;
            }
        }
    }
}
</style>