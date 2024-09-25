// SEARCH
document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("search-icon");
    const closeSearchIcon = document.getElementById("close-search");
    const searchContainer = document.getElementById("search-container");
    const searchInput = document.getElementById("search-input");
    const headerContainer = document.querySelector(".header__container");
    const footer = document.getElementById('footer')
  
    // footer.style.display = "none"

    searchIcon.addEventListener("click", function() {
      searchContainer.style.display = "flex";
      headerContainer.style.display = "none";
      searchInput.focus();
    });
  
    closeSearchIcon.addEventListener("click", function() {
      searchContainer.style.display = "none";
      headerContainer.style.display = "flex";
    });
  
    searchInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter" && searchInput.value.trim() !== "") {
        searchContainer.style.display = "none";
        headerContainer.style.display = "flex";
      }
    });
  
    document.addEventListener("click", function(event) {
      if (event.target && event.target.matches(".search__history ion-icon")) {
        const listItem = event.target.closest("li");
        listItem.remove();
        updateSearchHistory();
      }
    });
  
    function updateSearchHistory() {
      const searchHistoryList = document.querySelector(".search__history ul");
      const listItems = searchHistoryList.querySelectorAll("li");
      if (listItems.length === 0) {
        searchHistoryList.innerHTML = "<li>No search history</li>";
      }
    }
  });
  


// FOOTER
window.addEventListener('scroll', () => {
    const footer = document.getElementById('footer')
    const scrollHeight = window.scrollY

    if (scrollHeight > 50) {
        footer.classList.add('sticky')
    } else {
        footer.classList.remove('sticky')
    }
})

// https://www.googleapis.com/youtube/v3/channelSections

document.addEventListener("DOMContentLoaded", function() {
  const API_KEY = 'AIzaSyBhOIuQNjL3pYOJ2YPKpk1sWs-zpsgAd1k';
  const channelIds = [
    'UC_x5XG1OV2P6uZZ5FSM9Ttw',
    'UCVHFbqXqoYvEWM1Ddxl0QDg',
    'UC29ju8bIPH5as8OGnQzwJyA',
    'UCBJycsmduvYEL83R_U4JriQ', 
    'UC9jWcAMlUtBXdJytn6W0Scg',
    'UCVlzNaPnGKndDVoy8hyAX_g',
    'UC8butISFwT-Wl7EV0hUK0BQ',
    // Add more channel IDs as needed
  ];
  const videosPerChannel = 5; // Number of videos to fetch from each channel

  async function fetchVideosFromChannels(channelIds, videosPerChannel) {
    const allVideos = [];
    for (const channelId of channelIds) {
      const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${videosPerChannel}&key=${API_KEY}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      allVideos.push(...data.items);
    }
    return allVideos;
  }

  async function fetchChannelProfileImage(channelId) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.items[0].snippet.thumbnails.default.url;
  }

  async function fetchVideoDuration(videoId) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=${API_KEY}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.items[0].contentDetails.duration;
  }

  function formatDuration(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (parseInt(match[1]) || 0);
    const minutes = (parseInt(match[2]) || 0);
    const seconds = (parseInt(match[3]) || 0);
    return `${hours}:${minutes}:${seconds}`;
  }

  async function displayVideos(videos) {
    const videoContainer = document.getElementById('video-container');
    if (!videoContainer) {
      console.error('No element with ID "video-container" found');
      return;
    }
    videoContainer.innerHTML = ''; // Clear any existing videos

    for (const video of videos) {
      const videoDuration = await fetchVideoDuration(video.id.videoId);
      const channelProfileImage = await fetchChannelProfileImage(video.snippet.channelId);
      
      const videoElement = document.createElement('div');
      videoElement.classList.add('home__video');
      videoElement.innerHTML = `
        <div class="home__video-image">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.title}">
          <div class="video__timer">${formatDuration(videoDuration)}</div>
        </div>
        <div class="home__video-desc">
          <img src="${channelProfileImage}" alt="${video.snippet.channelTitle}">
          <div class="home__video-txt">
            <div class="home__video-title">
              <h4>${video.snippet.title}</h4>
            </div>
            <div class="home__video-muted">
              <p>${video.snippet.channelTitle}</p>
              16K views . Streamed 3 days ago
            </div>
          </div>
          <div class="home__video-menu">
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
          </div>
        </div>
      `;
      videoContainer.appendChild(videoElement);
    }
  }
  
  async function loadChannelVideos() {
    const videos = await fetchVideosFromChannels(channelIds, videosPerChannel);
    displayVideos(videos);
  }
  
  loadChannelVideos();
});

