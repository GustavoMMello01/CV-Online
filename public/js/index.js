window.onload = function () {
    var night_icon = document.getElementById("night");

    night_icon.onclick = function(){
        document.body.classList.toggle("dark-theme") 
    }
}