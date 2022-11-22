let homeCount_El = document.getElementById("home-c")
let guestCount_El = document.getElementById("guest-c")

let homeCount = guestCount = 0

function newGame() {
    homeCount = 0
    homeCount_El.textContent = 0
    guestCount = 0
    guestCount_El.textContent = 0
    guestCount_El.style.color = "#F94F6D"
    homeCount_El.style.color = "#F94F6D"
}

function add1_home() {
    homeCount += 1
    homeCount_El.textContent = homeCount
    checkLead()
}
function add2_home() {
    homeCount += 2
    homeCount_El.textContent = homeCount
    checkLead()
}
function add3_home() {
    homeCount += 3
    homeCount_El.textContent = homeCount
    checkLead()
}
function add1_guest() {
    guestCount += 1
    guestCount_El.textContent = guestCount
    checkLead()
}
function add2_guest() {
    guestCount += 2
    guestCount_El.textContent = guestCount
    checkLead()
}
function add3_guest() {
    guestCount += 3
    guestCount_El.textContent = guestCount
    checkLead()
}

function checkLead() {
    if (homeCount > guestCount) {
        homeCount_El.style.color = "lightgreen"
    }
    if (homeCount < guestCount) {
        guestCount_El.style.color = "lightgreen"
    }
    if (homeCount === guestCount) {
        guestCount_El.style.color = "#F94F6D"
        homeCount_El.style.color = "#F94F6D"
    }
}