<template>
    <div class="rank-block">
        <hr style="height: 2px; border: none; background-color: black;">
        <div class="header">
            <div class="text">
                <h3>{{ title }}</h3>
                <p>{{ description }}</p>
            </div>
            <img :src="coverImg" />
        </div>
        <hr style="height: 2px; border: none; background-color: black;">
        <!-- <slot name="title"></slot>
        <slot name="discreption"></slot>
        <slot name="rank-pic"></slot> -->
        <ul>
            <li v-for="(item, index) in list">{{ index+1 }} - {{ item }}</li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            default: '排行榜'
        },
        description: {
            type: String,
            default: '这是一个排行榜'
        },
        coverImg: {
            type: String,
            default: 'https://p1.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg'
        },
        list: {
            type: Array,
            default: () => ["歌手1", "歌手2", "歌手3", "歌手4", "歌手5"]
        }
    },
}
</script>

<style scoped>
.rank-block {
    margin: 0 15px;
    width: 100%;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.text {
    height: 10vw;
    width: 20vw;
}
h3 {
    margin: 1%;
    line-height: 1.2;
}
p {
    color: gray;
    font-size: 13px;
}
img {
    width: 100px;
}
ul {
    list-style: none;
    padding: 0;
}
</style>