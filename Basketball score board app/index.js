let hScoreEl = document.getElementById("h-score")
let hPlus1Btn = document.getElementById("h-plus-1-btn")
let hPlus2Btn = document.getElementById("h-plus-2-btn")
let hPlus3Btn = document.getElementById("h-plus-3-btn")

let hCount = 0

hPlus1Btn.addEventListener("click", function() {
    hCount += 1
    hScoreEl.textContent = hCount

})

hPlus2Btn.addEventListener("click", function() {
    hCount += 2
    console.log(hCount)
    hScoreEl.textContent = hCount

})

hPlus3Btn.addEventListener("click", function() {
    hCount += 3
    console.log(hCount)
    hScoreEl.textContent = hCount
    
})




let gScoreEl = document.getElementById("g-score")
let gPlus1Btn = document.getElementById("g-plus-1-btn")
let gPlus2Btn = document.getElementById("g-plus-2-btn")
let gPlus3Btn = document.getElementById("g-plus-3-btn")

let gCount = 0

gPlus1Btn.addEventListener("click", function() {
    gCount += 1
    gScoreEl.textContent = gCount

})

gPlus2Btn.addEventListener("click", function() {
    gCount += 2
    gScoreEl.textContent = gCount

})

gPlus3Btn.addEventListener("click", function() {
    gCount += 3
    gScoreEl.textContent = gCount
    
})

let resetBtn = document.getElementById("reset-btn")
let saveHEl = document.getElementById("save-h")
let saveGEl = document.getElementById("save-g")

resetBtn.addEventListener("dblclick", function() {
    let savedH = hCount + " - "
    saveHEl.textContent += savedH
    let savedG = gCount + " - "
    saveGEl.textContent += savedG
    document.getElementById("h-score").innerHTML = 0
    document.getElementById("g-score").innerHTML = 0
    hCount = 0
    gCount = 0
})

