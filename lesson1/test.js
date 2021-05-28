const mailAddress = Vue.extend({
  template: '<p>{{firstName}} - {{lastName}} @ {{domain}}</p>',
  data: function () {
    return {
    firstName: 'taro', lastName: 'tanaka', alias: 'sample.com'
    }
  }
})

new mailAddress().$mount("#mount")