<template>
    <section class="gallery-page">
        <h1>Gallery</h1>
        <q>A page where the creator of the website illustrates their artwork.</q>
    </section>
</template>

<script>
export default {
    name: 'Gallery',
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
.gallery-page {
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