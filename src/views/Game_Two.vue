<template>
    <section class="game-two-page">
        <h1>Game_Two</h1>
        <p>Drag the squares and put them inside the empty image so as to match the one on the right. Some squares need to be right-clicked to rotate.</p>
        <br/>
        <div>
            <div class="drop-zone" @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
                <div v-for="item in listOne" :key="item.title" class="drag-el" draggable @dragstart="startDrag($event, item)">
                    {{ item.title }}
                </div>
            </div>
            <div class="drop-zone" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
                <div v-for="item in listTwo" :key="item.title" class="drag-el" draggable @dragstart="startDrag($event, item)">
                    {{ item.title }}
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Game_Two',
    data () {
        return {
            items: [
                {
                    id: 0,
                    title: 'Item A',
                    list: 1,
                },
                {
                    id: 1,
                    title: 'Item B',
                    list: 1,
                },
                {
                    id: 2,
                    title: 'Item C',
                    list: 2,
                },
            ],
        }
    },
    computed: {
        listOne() {
            return this.items.filter((item) => item.list === 1)
        },
        listTwo() {
            return this.items.filter((item) => item.list === 2)
        },
    },
    methods: {
        startDrag(evt, item) {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemID', item.id)
        },
        onDrop(evt, list) {
            const itemID = evt.dataTransfer.getData('itemID')
            const item = this.items.find((item) => item.id == itemID)
            item.list = list
        },
    }
}
</script>

<style lang="scss">
.game-two-page {
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
        .drop-zone {
            width: 30%;
            margin: 0 auto;
            margin-bottom: 10px;
            padding: 10px;
            background-color: rgb(253, 160, 127);
        }
        .drag-el {
            width: 15%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 10px;
            padding: 5px;
            background-color: white;
        }
    }
}
</style>