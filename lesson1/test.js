const vm = new Vue({
  el: "#app",
  data: {
    num: 1000000
  },
  filters: {
    filterNum: function(val){
      return "¥¥" + val.toLocaleString()
    }
  }
})