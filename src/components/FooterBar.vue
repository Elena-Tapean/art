<template>
    <footer class="footer-bar">
        <span>(c) Copyright, Elena Țăpean, 2014-2022.</span>
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
        
        span {
            font-size: 17px;
            display: flex;
            justify-content: right;
        }
    }
}
</style>