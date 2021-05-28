const employees = [
  {
  name : "田中 太郎",
  age : 25,
  department : "人事部"
  },
  {
    name : "山田 花子",
    age : 28,
    department : "営業部"
  }
]

const vm = new Vue({
  el: '#app',
  data: {
    employees_data: employees
  }
})