Vue.directive('input-focus', {
  inserted: function(el){
    el.focus()
  }
})

new Vue({
  el: '#app'
})