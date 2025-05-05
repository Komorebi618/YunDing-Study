<template>
    <tr @click="currentBook" :class="{active: currentBk === id}">
        <td>
            <slot name="bookIndex">{{ bookIndex+1 }}</slot>
        </td>
        <td>
            <slot name="bookname">{{ formatBookName(bookname) }}</slot>
        </td>
        <td>
            <slot name="price">￥{{ price }}</slot>
        </td>
        <td>
            <slot name="btns">
                <button @click="reduce(id)" :disabled="count < 2">-</button>
                {{ count }}
                <button @click="increase(id)">+</button>
            </slot>
        </td>
        <td>
            <button @click="remove(id)">移除</button>
        </td>
    </tr>
</template>

<script>

export default {
    props: {
        bookIndex: Number,
        id: Number,
        bookname: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        count: Number,
        currentBk: Number,
    },
    data() {
        return {
        }
    },
    methods: {
        reduce(id) {
            this.$emit('reduce', id)
        },
        increase(id) {
            this.$emit('increase', id)
        },
        remove(id) {
            this.$emit('remove', id)
        },
        currentBook() {
            this.$emit('currentBook', this.id, this.formatBookName(this.bookname))
        },
        formatBookName(bookName) {
            const hasStart = bookName.startsWith('《');
            const hasEnd = bookName.endsWith('》');

            if (hasStart && hasEnd) {
                return bookName;
            } else if (hasStart && !hasEnd) {
                // 只有前书名号
                return `${bookName}》`;
            } else if (!hasStart && hasEnd) {
                // 只有后书名号
                return `《${bookName}`;
            } else {
                // 没有书名号
                return `《${bookName}》`;
            }
        }
    },
    
    }
</script>

<style scoped>
    th,td {
        border: 2px solid #aaa;
        padding: 8px 16px;
    }
</style>