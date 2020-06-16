// Themes
function changeTheme(name) {
    if (name == 'night') {
        document.getElementById("mainview").classList.add("bg-dark", "text-white");
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("footer").classList.add("text-white");
    }
    if (name == 'day') {
        document.getElementById("mainview").classList.remove("bg-dark", "text-white");
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("footer").classList.remove("text-white");
    }
}

// First get that pageinfo thing working
if (document.getElementById("pageInfo") != null) {
    pageInfo = document.getElementById("pageInfo").innerText;
    pageInfo = JSON.parse(pageInfo);
}

// Jump pages on left & right arrow
if (pageInfo.kind == 'page') {
    document.addEventListener('keydown', keyproc); // Listen the keys
    function keyproc(k) {
        if (k.code == 'ArrowRight') {
            window.location.href = document.getElementById("nextlink").href;
        } else if (k.code == "ArrowLeft") {
            window.location.href = document.getElementById("prevlink").href;
        } else if (k.code == 'KeyZ'){
            window.scrollBy({top:window.innerHeight/2, left:0, behavior:'smooth'});
        }
    }
}



// The bookmark and saving progress thing.
// first get that json out from localstorage
if (localStorage.getItem('bookmark') != null) {
    bookmark = JSON.parse(localStorage.getItem('bookmark'));
} else {
    bookmark = {};
}
// flush bookmark to localstorage
function flushbm() {
    stringified = JSON.stringify(bookmark);
    localStorage.setItem('bookmark', stringified);
    console.log(localStorage.getItem('bookmark')); //LOG
}
// add a bookmark
function addBookmark() {
    bm = { 'title': pageInfo.title, 'link': pageInfo.link, 'inSection': pageInfo.currentSection };
    bookmark[pageInfo.title] = bm;
    flushbm();
}