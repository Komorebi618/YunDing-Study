<template>
    <div class="artist">
        <img :src="img" />
        <p>{{ name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '歌手'
        },
        img: {
            type: String,
            default: 'http://p1.music.126.net/78q0jUUJ0h08GxAs2G-tCA==/109951168529051968.jpg'
        }
    },
}
</script>

<style scoped>
img {
    width: 100px;
}
p {
    margin: 0;
}
</style>