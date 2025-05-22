<template>
    <div class="app">
        <!-- 热门歌手 -->
        <Wrapper>
            <template #title>
                <h2>热门歌手</h2>
            </template>
            <template #content>
                <div class="artist-list">
                    <Artist v-for="(item, index) in artistData" :key="index" :name="item.name" :img="item.picUrl">
                    </Artist>
                </div>
            </template>
        </Wrapper>

        <!-- 榜单 -->
        <Wrapper>
            <template #title>
                <h2>榜单</h2>
            </template>
            <template #content>
                <div class="rank-list">
                    <RankBlock :title="newSongData.name" :description="newSongData.description"
                        :cover-img="newSongData.coverImgUrl" :list="newSongNameList"></RankBlock>

                    <RankBlock :title="hotSongData.name" :description="hotSongData.description"
                        :cover-img="hotSongData.coverImgUrl" :list="hotSongNameList"></RankBlock>

                    <RankBlock :title="originSongData.name" :description="originSongData.description"
                        :cover-img="originSongData.coverImgUrl" :list="originSongNameList"></RankBlock>
                </div>
            </template>
        </Wrapper>
    </div>
</template>

<script>
// 导入组件
import Artist from './components/Artist.vue'
import RankBlock from './components/RankBlock.vue'
import Wrapper from './components/Wrapper.vue'
// 导入数据
import artistData from './data/artist.js'
import newSongData from './data/newSong.js'
import hotSongData from './data/hotSong.js'
import originSongData from './data/originSong.js'
export default {
    components: {
        Artist, RankBlock, Wrapper
    },
    data() {
        return {
            // 注意不要忘记引入数据
            artistData: artistData,
            hotSongData: hotSongData,
            hotSongNameList: hotSongData.tracks.map(item => item.name),

            newSongData: newSongData,
            newSongNameList: newSongData.tracks.map(item => item.name),

            originSongData: originSongData,
            originSongNameList: originSongData.tracks.map(item => item.name),
        }
    },
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .artist-list {
        display: flex;
        justify-content: space-around;
    }
    .artist {
        text-align: center;
    }
    .rank-list {
        display: flex;
        justify-content: space-between;
    }
</style>