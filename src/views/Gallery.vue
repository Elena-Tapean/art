<template>
    <section class="gallery-page">
        <h1>Gallery</h1>
        <q>A page where the creator of the website illustrates their artwork.</q>
        <br/>
        <div class="gallery-tableau">
            <div class="blue-tableau">
                <div class="div-blue-container">
                    <div id="red" @click="rotateCubes('red')" class="item-blue-top"></div>
                    <div @click="rotateCubes()" class="item-blue-right"></div>
                    <div @click="rotateCubes()" class="item-blue-bottom"></div>
                    <div @click="rotateCubes()" class="item-blue-left"></div>
                    <div @click="rotateCubes()" class="item-blue-center"></div>
                </div>
                <div class="div-blue-container">
                    <div @click="rotateCubes()" class="item-blue-right"></div>
                    <div id="green" @click="rotateCubes('green')" class="item-blue-top"></div>
                    <div @click="rotateCubes()" class="item-blue-right"></div>
                    <div @click="rotateCubes()" class="item-blue-bottom"></div>
                    <div @click="rotateCubes()" class="item-blue-center"></div>
                </div>
                <div class="div-blue-container">
                    <div @click="rotateCubes()" class="item-blue-bottom"></div>
                    <div id="yellow" @click="rotateCubes('yellow')" class="item-blue-top"></div>
                    <div @click="rotateCubes()" class="item-blue-center"></div>
                    <div @click="rotateCubes()" class="item-blue-right"></div>
                    <div @click="rotateCubes()" class="item-blue-bottom"></div>
                </div>
                <div class="div-blue-container">
                    <div @click="rotateCubes()" class="item-blue-left"></div>
                    <div @click="rotateCubes()" class="item-blue-center"></div>
                    <div @click="rotateCubes()" class="item-blue-left"></div>
                    <div id="orange" @click="rotateCubes('orange')" class="item-blue-top"></div>
                    <div @click="rotateCubes()" class="item-blue-left"></div>
                </div>
                <div class="div-blue-container">
                    <div id="purple" @click="rotateCubes('purple')" class="item-blue-top"></div>
                    <div @click="rotateCubes()" class="item-blue-left"></div>
                    <div @click="rotateCubes()" class="item-blue-bottom"></div>
                    <div @click="rotateCubes()" class="item-blue-right"></div>
                    <div @click="rotateCubes()" class="item-blue-center"></div>
                </div>
            </div>
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
    methods: {
        rotateCubes(divID) {
            let currentDiv = document.getElementById(divID);
            if (currentDiv.dataset.isRed != 'true') {
                currentDiv.style.backgroundImage = 'linear-gradient(0deg, red, white)';
                currentDiv.dataset.isRed = 'true';
            } else {
                currentDiv.style.backgroundImage = 'linear-gradient(0deg, blue, white)';
                currentDiv.dataset.isRed = 'false';
            }
        },
        rotateCubes(divID) {
            let currentDiv = document.getElementById(divID);
            if (currentDiv.dataset.isRed != 'true') {
                currentDiv.style.backgroundImage = 'linear-gradient(0deg, red, white)';
                currentDiv.dataset.isRed = 'true';
            } else {
                currentDiv.style.backgroundImage = 'linear-gradient(0deg, blue, white)';
                currentDiv.dataset.isRed = 'false';
            }
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
        .gallery-tableau {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        .div-blue-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .item-blue-top {
            margin: 1px;
            width: 50px;
            height: 50px;
            background: linear-gradient(0deg, blue, white);
        }
        .item-blue-right {
            margin: 1px;
            width:  50px;
            height: 50px;
            background: linear-gradient(90deg, blue, white);
        }
        .item-blue-bottom {
            margin: 1px;
            width: 50px;
            height: 50px;
            background: linear-gradient(180deg, blue, white);
        }
        .item-blue-left {
            margin: 1px;
            width: 50px;
            height: 50px;
            background: linear-gradient(-90deg, blue, white);
        }
        .item-blue-center {
            margin: 1px;
            width: 50px;
            height: 50px;
            background: radial-gradient(white, blue);
        }
    }
}
</style>