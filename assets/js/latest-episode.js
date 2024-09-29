document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const homeButton = document.getElementById('img-home');
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            console.log('Home button clicked');
            window.location.href = "index.html";
        });
    } else {
        console.log('Home button not found');
    }

    const latestEpisodeButton = document.getElementById('latest-episode');
    if (latestEpisodeButton) {
        latestEpisodeButton.addEventListener('click', function() {
            console.log('Latest episode button clicked');
            window.location.href = "latest-episode.html";
        });
    } else {
        console.log('Latest episode button not found');
    }

    const allEpisodesButton = document.getElementById('all-episodes');
    if (allEpisodesButton) {
        allEpisodesButton.addEventListener('click', function() {
            console.log('All episodes button clicked');
            window.location.href = "all-episodes.html";
        });
    } else {
        console.log('All episodes button not found');
    }

    const storeButton = document.getElementById('store');
    if (storeButton) {
        storeButton.addEventListener('click', function() {
            console.log('Store button clicked');
            window.location.href = "store.html";
        });
    } else {
        console.log('Store button not found');
    }

    const ourStoryButton = document.getElementById('our-story');
    if (ourStoryButton) {
        ourStoryButton.addEventListener('click', function() {
            console.log('Our Story button clicked');
            window.location.href = "our-story.html";
        });
    } else {
        console.log('Our Story button not found');
    }
});



// all to fetch the latest episode from Buzzsprout RSS feed
const podcastUrl = 'https://feeds.buzzsprout.com/2221953.rss'; // my RSS feed

fetch(podcastUrl)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
    .then(data => {
        const items = data.querySelectorAll('item'); // Fetch all episodes
        const latestEpisode = items[0]; // Get the most recent episode
        const title = latestEpisode.querySelector('title').textContent;
        const audioUrl = latestEpisode.querySelector('enclosure').getAttribute('url');
        const pubDate = latestEpisode.querySelector('pubDate').textContent;

        // Dynamically add the episode details
        const episodeDiv = document.createElement('div');
        episodeDiv.innerHTML = `
            <h3>${title}</h3>
            <p>Released on: ${pubDate}</p>
            <audio controls>
                <source src="${audioUrl}" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
        `;
        document.querySelector('.podcast-episode').appendChild(episodeDiv);

        // Hide the spinner and show the episode section
        document.getElementById('loading-spinner').style.display = 'none';
        document.querySelector('.podcast-episode').style.display = 'block';
    })
    .catch(err => {
        document.getElementById('loading-spinner').textContent = 'Failed to load episode.';
        console.error('Error:', err);
    });

// Handle smooth scroll for "Listen to the latest episode" link
document.querySelector('.scroll-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#podcast-section').scrollIntoView({ behavior: 'smooth' });
});

// Prevent multiple audios from playing simultaneously
document.addEventListener('play', function(e) {
    const audioElements = document.getElementsByTagName('audio');
    for (let i = 0; i < audioElements.length; i++) {
        if (audioElements[i] !== e.target) {
            audioElements[i].pause();
        }
    }
    console.log(`Podcast episode played: ${e.target.src}`);
}, true);

// Auto-play the podcast when the page loads (optional)
window.addEventListener('load', function() {
    const audioElement = document.querySelector('audio');
    if (audioElement) {
        audioElement.play();
    }
});