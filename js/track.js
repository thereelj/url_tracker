const inputBtn = document.querySelector(".input-btn")
const inputEl = document.querySelector(".input-el")
const ulEl = document.querySelector(".ul-el")
let myLeads = ["www.facebook.com", "www.google.com", "www.linkedin.com"]

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
})

let listItems = ""

for (let i = 0; i < myLeads.length; i++) {
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
    listItems += "<li>" + myLeads[i] + "</li>"
}

ulEl.innerHTML = listItems