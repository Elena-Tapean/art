<template>
    <section class="game-three-page">
        <h1>Game_Three</h1>
        <p>A simple game of X and Zero or tic-tac-toe.</p>
        <br/>
        <div class="gallery-tableau">
            <div class="white-tableau">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Game_Three',
    data () {
        return {
        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
.game-three-page {
    @media only screen and (min-width: 0) {
        height: 100%;

        h1 {
            margin-left: 40px;
            font-size: 45px;
            color: white;
            text-align: left;
        }
        p {
            margin-left: 60px;
            font-size: 20px;
            color: white;
        }
    }
}
</style>