const employees_array = [
  {
    name: '田中 太郎',
    age: 25,
    department: "人事部"
  }
]

const vm = new Vue({
  el: '#app',
  data: {
    employee_data: employees_array
  },
  computed: {
    calculateBirthYear: function(){
      return function(id){
        return 2020-this.employee_data[id].age
      }
    }
  }
})


