import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber',  LikeNumber)
Vue.directive('border', function(el, binding){
  el.style.border = 'solid blue 2px';
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  console.log(binding);
});
new Vue({
  render: h => h(App),
}).$mount('#app')
