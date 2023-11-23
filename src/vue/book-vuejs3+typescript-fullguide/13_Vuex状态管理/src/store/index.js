import { createStore } from 'vuex'

const store = createStore({
  // 1. 定义全局共享的状态
  state() {
    return {
      counter: 1,
      name: 'coder',
      age: 18,
      // 购物车书籍列表
      books: [
        { name: 'Vue.js', count: 10, price: 10 },
        { name: 'React', count: 5, price: 20 },
        { name: 'webpack', count: 4, price: 25 },
      ],
      // 书籍打9折
      discount: 0.9,
    }
  },
  // 2. 在 mutations 中修改全局状态
  mutations: {
    // 定义increment函数，参数state是state()函数返回的对象
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
  },
  getters: {
    // 计算购买的书籍总价
    // 参数1: state对象
    // 参数2: getters对象
    totalPrice(state, getters) {
      let totalPrice = 0
      for (const book of state.books) {
        totalPrice += book.count * book.price
      }
      return totalPrice * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount
    },
    totalPriceByName(state) {
      return (bookName) => {
        let totalPrice = 0
        for (const book of state.books) {
          if (bookName == book.name) {
            totalPrice += book.count * book.price
          }
        }
        return totalPrice
      }
    },
  },
})

export default store
