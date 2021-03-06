import Component from './lib/component'
import store from './lib/store/store'
export default class StoreManage extends Component {
  constructor($el) {
    super({
      store,
    })
    this.$el = $el
    this.render()
    this.events = {
      'click #add1': 'mutationsAdd',
      'click #add2': 'dispatchAdd'
    }
  }
  render() {
    var stateTmpl = require('./stateDemo.art')
    this.$el.html(stateTmpl())
  }
  update() {
    console.log('store组件更新了')
  }
  mutationsAdd(){
    var count = store.state.count;
    count++
    store.commit('addCount', count)
    console.log('state.count:',store.state.count)
  }
  dispatchAdd() {
    var count = store.state.count;
    count+=2
    store.dispatch('updateCount', count)
    console.log('state.count:',store.state.count)
  }
}