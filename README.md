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
require('./bootstrap');
import { createApp } from "vue";
import ExampleComponent from './components/ExampleComponent'
const app = createApp({});
app.component('example-component',ExampleComponent).mount('#app');

8. welcome.blade.php
the arrange ment of js can cause major problem
       <div id="app">   <example-component/> </div>

       
9. npm install vue-router@next --save