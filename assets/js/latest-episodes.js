// // all to fetch the latest episode from Buzzsprout RSS feed
// const podcastUrl = 'https://feeds.buzzsprout.com/2221953.rss'; // my RSS feed

// fetch(podcastUrl)
//     .then(response => response.text())
//     .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
//     .then(data => {
//         const items = data.querySelectorAll('item'); // Fetch all episodes
//         const latestEpisode = items[0]; // Get the most recent episode
//         const title = latestEpisode.querySelector('title').textContent;
//         const audioUrl = latestEpisode.querySelector('enclosure').getAttribute('url');
//         const pubDate = latestEpisode.querySelector('pubDate').textContent;

//         // Dynamically add the episode details
//         const episodeDiv = document.createElement('div');
//         episodeDiv.innerHTML = `
//             <h3>${title}</h3>
//             <p>Released on: ${pubDate}</p>
//             <audio controls>
//                 <source src="${audioUrl}" type="audio/mpeg">
//                 Your browser does not support the audio tag.
//             </audio>
//         `;
//         document.querySelector('.podcast-episode').appendChild(episodeDiv);

//         // Hide the spinner and show the episode section
//         document.getElementById('loading-spinner').style.display = 'none';
//         document.querySelector('.podcast-episode').style.display = 'block';
//     })
//     .catch(err => {
//         document.getElementById('loading-spinner').textContent = 'Failed to load episode.';
//         console.error('Error:', err);
//     });

// // Handle smooth scroll for "Listen to the latest episode" link
// document.querySelector('.scroll-link').addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector('#podcast-section').scrollIntoView({ behavior: 'smooth' });
// });

// // Prevent multiple audios from playing simultaneously
// document.addEventListener('play', function(e) {
//     const audioElements = document.getElementsByTagName('audio');
//     for (let i = 0; i < audioElements.length; i++) {
//         if (audioElements[i] !== e.target) {
//             audioElements[i].pause();
//         }
//     }
//     console.log(`Podcast episode played: ${e.target.src}`);
// }, true);

// // Auto-play the podcast when the page loads (optional)
// window.addEventListener('load', function() {
//     const audioElement = document.querySelector('audio');
//     if (audioElement) {
//         audioElement.play();
//     }
// });
