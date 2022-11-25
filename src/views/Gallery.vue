<template>
    <section class="gallery-page">
        <div class="shader-bg">
            <h1>Ilustrații pentru articolul Manipulare prin Imagini</h1>
            <h3>de Elena ȚĂPEAN</h3>
            <ul class="container">
                <li class="item" v-for="illustration in illustrations" :key="illustration.id">
                    <img class="image-illus" :src="illustration.img" alt="illustration" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Gallery',
    data () {
        return {
        }
    },
    created () {
        this.$store.dispatch('get_images')
    },
    computed: {
        illustrations () {
            return this.$store.state.illustrations
        }
    }
}
</script>

<style lang="scss">
.gallery-page {
    @media only screen and (min-width: 0) {
        padding-top: 10px;
        padding-bottom: 20px;

        .shader-bg {
            margin: 5px 300px;
            padding: 5px;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 5px;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .item {
            margin: 5px;
        }
        .image-illus {
            width: 310px;
            height: 300px;
            border-radius: 5px;
        }
    }
}
</style>