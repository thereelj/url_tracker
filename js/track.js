const inputBtn = document.querySelector(".input-btn")
const tabBtn = document.querySelector(".tab-btn")
const deleteBtn = document.querySelector(".delete-btn")
const inputEl = document.querySelector(".input-el")
const ulEl = document.querySelector(".ul-el")
const urlsFromLocalStorage  = JSON.parse(localStorage.getItem("myURLs"))
let myURLs = []


if (urlsFromLocalStorage) {
    myURLs = urlsFromLocalStorage
    render(myURLs)
}


function render(urls) {
    let listItems = ""
    for (let i = 0; i < urls.length; i++) {
        listItems += `
        <li>
            <a href='${urls[i]}' target='_blank'>
                ${urls[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}


tabBtn.addEventListener("click", function() {
    chrome.tabs.query({
        active: true, 
        currentWindow: true
    }, function(tabs) {
        myURLs.push(tabs[0].url)
        localStorage.setItem("myURLs", JSON.stringify(myURLs))
        render(myURLs)
    })
})


deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myURLs = []
    listItems = ""
    render(myURLs)
})


inputBtn.addEventListener("click", function() {
    myURLs.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myURLs", JSON.stringify(myURLs))
    render(myURLs)
})
