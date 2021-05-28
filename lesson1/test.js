Vue.component('employees-list', {
  props: {
    employeesName: {
      type: String
    }
  },
  template: `<p>名：{{employeesName}}</p>`
})

const vm = new Vue({
  el: '#app',
  data: {firstname: '太郎'}
})