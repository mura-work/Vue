// 子コンポーネントの作成
const counterButton = Vue.extend({
  template: `<span>{{count}}回<button v-on:click="addCount">+1</button></span>`,
  data: function(){
    return {
      count: 0
    }
  },
  methods: {
    addCount: function(){
      this.count += 1,
      this.$emit('increment')
    }
  }
})

// 親コンポーネントの作成
new Vue({
  el: '#counter-anchor',
  components: {
    'parent-count-button': counterButton
  },
  data: {
    total: 0,
    counters: [
      {name: 'Aのボタン'},
      {name: 'Bのボタン'}
    ]
  },
  methods: {
    plusCount: function(){
      this.total += 1
    }
  }
})
