import Vue from 'vue';
import { Alert, Table, TableColumn, Button, Pagination, Message, Loading } from 'element-ui'; //element
import router from './router'; //路由
import store from '@/store'; //状态管理
import '@/config/axios';//axios
import '@/config/filter';//filter
import '@/assets/styles/index.scss'; //css
import App from './App';

Vue.use(Alert);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);
Vue.use(Pagination);
Vue.use(Loading.directive);

Vue.prototype.$message = Message;
Vue.config.productionTip = false;

Vue.mixin({
	watch:{
	}
})

/* eslint-disable no-new */
window.esH5Vue = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
});