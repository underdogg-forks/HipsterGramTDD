

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('cards', require('./components/cards.vue'));
Vue.component('usercards', require('./components/usercards.vue'));

Vue.component('newpost', require('./components/newpost.vue'));

Vue.component('card', require('./components/Autonomous/card.vue'));
Vue.component('comment', require('./components/Autonomous/comment.vue'));

Vue.component('post', require('./components/post.vue'));

const app = new Vue({
    el: '#app',
    components: {
     }

});

Vue.filter('truncate', function(value) {
    var length = 60;

    if(value.length <= length) {
        return value;
    }
    else {
        return value.substring(0, length) + '...';            
    }
});
