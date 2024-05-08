import '../scss/index.scss'
import toTop from './toTop.js'
import menuToggle from './menuToggle.js'
import themeSwitcher from './themeSwitcher.js'
import headerSearch from './headerSearch.js'
import order from './order.js'
import preloader from './preloader.js'
import store from './store.js'
import stats from './stats.js'


document.addEventListener('DOMContentLoaded', ()=>{

    store.init();
    preloader.init();
    toTop.init();
    menuToggle.init();
    themeSwitcher.init(store);
    headerSearch.init(store);
    order.init();
    stats.init(store);


    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(97129372, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });

});

