/*
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
*/

//1. import Vue
//------------------------------------
/*不建議使用*/
//完整版Vue
//import Vue from 'vue/dist/vue'

/*建議使用 (要搭配render來做template compile)*/
//引入閹割版vue，避免打包後檔案太大 (閹割版沒template comiler)
//'node_modules/vue/dist/vue' => '.../vue/package.json'定義使用哪個Vue
import Vue from 'vue' // 'node_modules/vue/dist/vue.runtime.esm.js'
//------------------------------------

//2. import App的祖先
import App from './AppTest.vue'

//3. 關閉Vue的生產提示
//Vue.config.productionTip = false

//4. 創建Vue實例物件
new Vue({
	el:'#app', //掛載到index.html中
	//render函数完成了这个功能：将App组件放入容器中
    render: h => h(App),
	// render:q=> q('h1','你好啊')

	// template:`<h1>你好啊</h1>`,
	// components:{App},
})