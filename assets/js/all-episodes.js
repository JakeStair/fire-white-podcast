document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

const homeButton = document.getElementById('img-home');
if (homeButton){
    homeButton.addEventListener('click', function(){
        console.log('Home button has been clicked successfully!');
        window.location.href = "index.html";
    });
    } else {
        console.log('Home button was not found.');
}

const latestEpisodeButton = document.getElementById('latest-episode');
if (latestEpisodeButton) {
    latestEpisodeButton.addEventListener('click', function(){
        console.log('the latest episode button has been clicked successfully!');
        window.location.href = "latest-episode.html";
    });
} else {
    console.log('The latest episode button was not found.');
};

document.getElementById('latest-episode').addEventListener('click', function() {
    window.location.href = "latest-episode.html";
});
document.getElementById('all-episodes').addEventListener('click', function() {
    window.location.href = "all-episodes.html";
});
document.getElementById('store').addEventListener('click', function() {
    window.location.href = "store.html";
});
document.getElementById('our-story').addEventListener('click', function() {
    window.location.href = "our-story.html";
});

});

// carousel code
document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-img');
    const totalImages = images.length;

    function updateCarousel() {
        const carousel = document.querySelector('.carousel');
        carousel.style.transform = `translateX(${-currentIndex * (100 / 3.5)}%)`;
    }

    document.getElementById('next-arrow').addEventListener('click', function() {
        if (currentIndex < totalImages - 3.5) {
            currentIndex++;
        }
        updateCarousel();
    });

    document.getElementById('prev-arrow').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateCarousel();
    });
});

