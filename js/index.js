if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js')
        .then(reg => console.log('service worker registered', reg))
        .catch(err => console.log('service worker not registered', err));
}

var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight',
    progress = document.querySelector('#progress'),
    scroll;
var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");

document.addEventListener('scroll', function () {
    scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    progress.style.setProperty('--scroll', scroll + '%');
    scrollpos = window.scrollY;

    if (scrollpos > 10) {
        header.classList.add("bg-black-555");
        navcontent.classList.remove("bg-black-555");
        navcontent.classList.add("bg-black-555");
    } else {
        header.classList.remove("bg-black-555");
        navcontent.classList.remove("bg-black-555");
        navcontent.classList.add("bg-black-555");

    }

});

document.getElementById('nav-toggle').onclick = function () {
    document.getElementById("nav-content").classList.toggle("hidden");
}


$(document).ready(function () {
    preloaderFadeOutTime = 500;

    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

// Check if the device width is below a certain threshold (e.g., 768 pixels for typical mobile devices)
if (window.innerWidth < 768) {
    document.getElementById('responsiveContainer').classList.add('mx-12');
    document.getElementById('responsiveContainer').classList.remove('mx-20');
} else {
    document.getElementById('responsiveContainer').classList.add('mx-20');
    document.getElementById('responsiveContainer').classList.remove('mx-12');
}

//update the hackathon image accordingly
