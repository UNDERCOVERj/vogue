// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import News from './components/News.vue'
import Shop from './components/Shop.vue'
import Collection from './components/Collections.vue'
import HomeFirst from './components/HomeFirst.vue'
import store from './store/index'
import Brands from './components/Brands.vue'
import Newsarticle from './components/Newsarticle.vue'
import ShoppingItem from './components/ShoppingItem.vue'
import Cart from './components/Cart.vue'
import Login from './components/Login.vue'
Vue.use(VueRouter)
const router=new VueRouter({
	routes:[{
		path:'/home',
		component:Home,
		children:[
			{path:'',component:HomeFirst},
			{path:':id',component:Brands}
		
		]	
	},
	{
		path:'/news',component:News
	},
	{
		path:'/shop',component:Shop
	},
	{
		path:'/collections',component:Collection
	},
	{
		path:'/',redirect:'/home'
	},
	{
		path:'/newsarticle',component:Newsarticle
	},
	{
		path:'/shoppingitem',component:ShoppingItem
	},
	{
		path:'/cart',component:Cart
	},
	{
		path:'/login',component:Login
	}]
})

/* eslint-disable no-new */


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})