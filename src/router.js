import Vue from 'vue';
import Router from 'vue-router';

// 首页
import Home from './views/Home';

// 关于我们
import About from './views/About';
import About_Help from './views/About/help';
import About_Contact from './views/About/contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children:[
        {name:'About_Index', path: '/about/',component:About_Help},
        {name:'About_Help', path: '/about/help',component:About_Help},
        {name:'About_Contact', path: '/about/contact',component:About_Contact},
      ]
    }
  ]
});
