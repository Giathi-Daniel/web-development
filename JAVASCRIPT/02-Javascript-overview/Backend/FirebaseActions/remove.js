import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://mobileapp-f4cf9-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const newsStoriesInDB = ref(database, "NewsLetter")

const storiesEl = document.getElementById("stories")

onValue(newsStoriesInDB, function(snapshot) {
    let newsStoriesArray = Object.entries(snapshot.val())
    
    storiesEl.innerHTML = ""
    
    for (let i = 0; i < newsStoriesArray.length; i++) {
        let currentStory = newsStoriesArray[i]
        
        appendStoryToStoriesEl(currentStory)
    }
})

function appendStoryToStoriesEl(story){
    let storyID = story[0]
    let storyText = story[1]

    let newEl = document.createElement("div")
    newEl.textContent = storyText

    newEl.addEventListener("dblclick", function() {
        let exactLocationOfStoryinDB = ref(database, `NewsLetter/${storyID}`)

        remove(exactLocationOfStoryinDB)
    })
    storiesEl.append(newEl)
}
