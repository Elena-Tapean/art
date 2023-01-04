<template>
    <section class="gallery-page">
        <h1>Gallery</h1>
        <q>Artworks waiting to be discovered.</q>
        <br/>
        <p>Click on the squares and change their colors so as to match the one on the right. Some squares need to be double clicked. The default color is blue.</p>
        <br/>
        <div class="gallery-tableau">
            <div class="blue-tableau">
                <div class="div-blue-container">
                    <div id="red" @click="rotateCubes('red')" class="item-blue-top"></div>
                    <div id="cat" @dblclick="rotateCups('cat')" class="item-blue-right"></div>
                    <div id="cheese" @click="rotateCones('cheese')" class="item-blue-bottom"></div>
                    <div id="car" @dblclick="rotateCourts('car')" class="item-blue-left"></div>
                    <div id="table" @click="rotateCoos('table')" class="item-blue-center"></div>
                </div>
                <div class="div-blue-container">
                    <div id="dog" @dblclick="rotateCups('dog')" class="item-blue-right"></div>
                    <div id="green" @click="rotateCubes('green')" class="item-blue-top"></div>
                    <div id="cow" @dblclick="rotateCups('cow')" class="item-blue-right"></div>
                    <div id="carrot" @click="rotateCones('carrot')" class="item-blue-bottom"></div>
                    <div id="chair" @click="rotateCoos('chair')" class="item-blue-center"></div>
                </div>
                <div class="div-blue-container">
                    <div id="potato" @click="rotateCones('potato')" class="item-blue-bottom"></div>
                    <div id="yellow" @click="rotateCubes('yellow')" class="item-blue-top"></div>
                    <div id="ruler" @click="rotateCoos('ruler')" class="item-blue-center"></div>
                    <div id="bee" @dblclick="rotateCups('bee')" class="item-blue-right"></div>
                    <div id="tomato" @click="rotateCones('tomato')" class="item-blue-bottom"></div>
                </div>
                <div class="div-blue-container">
                    <div id="van" @dblclick="rotateCourts('van')" class="item-blue-left"></div>
                    <div id="eraser" @click="rotateCoos('eraser')" class="item-blue-center"></div>
                    <div id="tram" @dblclick="rotateCourts('tram')" class="item-blue-left"></div>
                    <div id="orange" @click="rotateCubes('orange')" class="item-blue-top"></div>
                    <div id="plane" @dblclick="rotateCourts('plane')" class="item-blue-left"></div>
                </div>
                <div class="div-blue-container">
                    <div id="purple" @click="rotateCubes('purple')" class="item-blue-top"></div>
                    <div id="train" @dblclick="rotateCourts('train')" class="item-blue-left"></div>
                    <div id="cherry" @click="rotateCones('cherry')" class="item-blue-bottom"></div>
                    <div id="bug" @dblclick="rotateCups('bug')" class="item-blue-right"></div>
                    <div id="desk" @click="rotateCoos('desk')" class="item-blue-center"></div>
                </div>
            </div>
            <div>
                <img src="../assets/complete_tableau.png" alt="complete tableau" />
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
        rotateCups(divID) {
            let currentDiv = document.getElementById(divID);
            if (currentDiv.dataset.isCat != 'true') {
                currentDiv.style.backgroundImage = 'linear-gradient(90deg, yellow, white)';
                currentDiv.dataset.isCat = 'true';
            } else {
                currentDiv.style.backgroundImage = 'linear-gradient(90deg, blue, white)';
                currentDiv.dataset.isCat = 'false';
            }
        },
        rotateCones(divID) {
            let currentDiv = document.getElementById(divID);
            if (currentDiv.dataset.isCherry != 'true') {
                currentDiv.style.backgroundImage = 'linear-gradient(180deg, green, white)';
                currentDiv.dataset.isCherry = 'true';
            } else {
                currentDiv.style.backgroundImage = 'linear-gradient(180deg, blue, white)';
                currentDiv.dataset.isCherry = 'false';
            }
        },
        rotateCourts(divID) {
            let currentDiv = document.getElementById(divID);
            if (currentDiv.dataset.isCar != 'true') {
                currentDiv.style.backgroundImage = 'linear-gradient(-90deg, purple, white)';
                currentDiv.dataset.isCar = 'true';
            } else {
                currentDiv.style.backgroundImage = 'linear-gradient(-90deg, blue, white)';
                currentDiv.dataset.isCar = 'false';
            }
        },
        rotateCoos(divID) {
            let currentDiv = document.getElementById(divID);
            if (currentDiv.dataset.isChair != 'true') {
                currentDiv.style.backgroundImage = 'radial-gradient(white, orange)';
                currentDiv.dataset.isChair = 'true';
            } else {
                currentDiv.style.backgroundImage = 'radial-gradient(white, blue)';
                currentDiv.dataset.isChair = 'false';
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
        p {
            margin-left: 60px;
            font-size: 20px;
            color: white;
        }
        img {
            width: 260px;
            height: 260px;
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