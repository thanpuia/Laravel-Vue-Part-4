install vue
config app.js ..view ...web route..etc
install router


1. composer require laravel/ui
2. php artisan ui vue
3. npm install & npm run dev
4. config routes/web.php 
Route::get('/{any}', function () {
    return view('welcome');
})->where('any','.*');
5. npm install vue-router
6. npm install --save vue@next && npm install --save-dev vue-loader@next
7. app.js
import {createApp} from 'vue'
require('./bootstrap')
import App from './App.vue'
import router from './router'
const app = createApp(App)
 app.use(router)
app.mount('#app')

8. welcome.blade.php
the arrange ment of js can cause major problem
       <div id="app">   <example-component/> </div>


9. npm install vue-router@next --save