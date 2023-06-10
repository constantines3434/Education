btnStart.addEventListener('click', function () {
    const btnStart = document.querySelector('#btnStart');
    let path = anime.path('image-bg')
    anime({
        targets:
            [
                '.el',
            ],

        translateX: 250
    });
})