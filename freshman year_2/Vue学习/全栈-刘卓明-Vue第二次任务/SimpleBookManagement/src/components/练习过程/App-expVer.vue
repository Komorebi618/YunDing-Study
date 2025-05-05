<template>
    <template v-if="books.length || showAdd">
        <h2>总价：￥{{ sumPrice }} 当前选中的书籍为：{{ currentBkName }}</h2>
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>书名</th>
                    <th>价格</th>
                    <th>购买数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(items, index) in books" :key="items.id">
                    <BooksStyle :bookIndex="index" :id="items.id" :bookname="items.bookname" :price="items.price"
                        :count="items.count" :currentBk="currentBk" @reduce="reduce" @increase="increase" @remove="remove"
                        @currentBook="currentBook" />
                </template>
    
                <!-- 原先想在此处直接产生一个子组件来添加书籍，但是插值较复杂 -->
                <!-- <BooksStyle :book-index="5" :count="newBookCount" :style="{ display: showAdd? '':'none'}">
                    <template #bookname>
                        <input type="text" placeholder="请输入书名" v-model="newBookName" />
                    </template>
                    <template #price>
                        <input type="number" v-model="newBookPrice" style="width: 50px;" />
                    </template>
                    <template name="btns">
                        <button @click="this.newBookCount--" :disabled="count < 2">-</button>
                        {{ count }}
                        <button @click="this.newBookCount++">+</button>
                    </template>
                </BooksStyle> -->
                <tr v-if="showAdd">
                    <td>
                        {{ books.length + 1 }}
                    </td>
                    <td>
                        <input type="text" placeholder="请输入书名" v-model="newBookName"/>
                    </td>
                    <td>
                        <input type="number" v-model="newBookPrice" min="0" style="width: 50px;" />
                    </td>
                    <td>
                        <button @click="newReduce(id)" :disabled="newBookCount < 2">-</button>
                        {{ newBookCount }}
                        <button @click="newIncrease(id)">+</button>
                    </td>
                    <td>
                        <button :disabled="true">移除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </template>
    <template v-else>
        <h2>购物车为空！</h2>
    </template>

    <button @click="addNewBook" v-if="!showAdd">添加</button>
    <button @click="confirmNewBook" v-if="showAdd">确认</button>
    <button @click="channelNewBook" v-if="showAdd">取消</button>

</template>

<script>
import BooksStyle from './components/BooksStyle.vue';

export default {
    components: {
        BooksStyle
    },
    data() {
        return {
            books:[
                {
                    id: 1,
                    bookname: '《JavaScript高级程序设计》',
                    price: 126.00,
                    count: 1
                },
                {
                    id: 2,
                    bookname: '《你不知道的JS（上卷）》',
                    price: 78.00,
                    count: 1
                },
                {
                    id: 3,
                    bookname: '《你不知道的JS（中卷）》',
                    price: 76.00,
                    count: 1
                },
                {
                    id: 4,
                    bookname: '《你不知道的JS（下卷）》',
                    price: 64.00,
                    count: 1
                }],
            currentBk: -1,
            currentBkName: '',
            showAdd: false,
            newBookName: '',
            newBookPrice: 0,
            newBookCount: 1,
        }
    },
    methods: {
        reduce(id) {
            // console.log(id)
            this.books.forEach((item) => {
                if (item.id === id) {
                    item.count--
                }
            })
        },
        increase(id) {
            // console.log(id)
            this.books.forEach((item) => {
                if (item.id === id) {
                    item.count++
                }
            })
        },
        remove(id) {
            this.books.forEach((item, index) => {
                if (item.id === this.currentBk) {
                    this.currentBkName = ''
                }
                if (item.id === id) {
                    this.books.splice(index, 1)
                }
            })
            // console.log(this.books)
        },
        currentBook(id, currentBkName) {
            // console.log(id, currentBkName)
            this.currentBk = id
            this.currentBkName = currentBkName
        },
        newIncrease() {
            this.newBookCount++
        },
        newReduce() {
            this.newBookCount--
        },
        addNewBook() {
            this.showAdd = !this.showAdd
            // console.log(this.showAdd)
            // console.log(this.books)
        },
        confirmNewBook() {
            if (this.newBookName === '') {
                alert('书名不能为空')
                return
            } else if (this.newBookPrice <= 0) {
                alert('价格必须大于0')
                return
            }
            if (this.books.length === 0) {
                this.books.push({
                    id: 1,
                    bookname: this.newBookName,
                    price: this.newBookPrice,
                    count: this.newBookCount
                })
            } else {
                this.books.push({
                    id: this.books[this.books.length - 1].id + 1,
                    bookname: this.newBookName,
                    price: this.newBookPrice,
                    count: this.newBookCount
                })
            }
            this.channelNewBook()
            // console.log(this.books)
        },
        channelNewBook() {
            this.showAdd = !this.showAdd
            this.newBookName = ''
            this.newBookPrice = 0
            this.newBookCount = 1
        }
    },
    computed: {
        sumPrice() {
            let sumPrice = 0
            for (let i of this.books) {
                sumPrice += i.price * i.count
            }
            return sumPrice
        },
        // 原先使用id来获取书名，现在通过子组件格式化后将书名传递到父组件
        // currentBkName() {
        //     let currentBkName = ''
        //     this.books.forEach((item) => {
        //         if (item.id === this.currentBk) {
        //             currentBkName = item.bookname
        //         }
        //     })
        //     return currentBkName
        // }
    }
}
</script>

<style scoped>
    table {
        margin: 20px 0px;
        border-collapse: collapse;
    }
    thead {
        background-color: #c6c6c6;
    }
    th,td {
        border: 2px solid #aaa;
        padding: 8px 16px;
    }
    .active {
        background: lightblue;
    }
</style>