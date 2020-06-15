// Themes
function changeTheme(name){
    if(name == 'night'){
        document.getElementById("mainview").classList.add("bg-dark", "text-white");
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("footer").classList.add("text-white");
    }
    if(name == 'day'){
        document.getElementById("mainview").classList.remove("bg-dark", "text-white");
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("footer").classList.remove("text-white");
    }
}

// The Bookmark Thing.
if(document.getElementById("pageInfo") != null){
    pageInfo = document.getElementById("pageInfo").innerText;
    pageInfo = JSON.parse(pageInfo);
    console.log(pageInfo) //LOG
}