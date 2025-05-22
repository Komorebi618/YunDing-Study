<template>
    <div class="wrapper">
        <!-- 该部分标题 -->
        <slot name="title"></slot>

        <!-- 该部分主题内容 -->
        <hr style="height: 2px; border: none; background-color: black;">
        <slot name="content"></slot>
        <hr style="height: 2px; border: none; background-color: black;">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>