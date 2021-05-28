const vm = new Vue({
  el: '#app',
  data: {
    inputText: "",
    message: "",
  },
  methods: {
    lengthCheck: function(){
      if(this.inputText.length >= 6 && this.inputText.length <= 8){
        this.message = "OK"
      }else {
        this.message = "NG"
      }
    }
  }
})