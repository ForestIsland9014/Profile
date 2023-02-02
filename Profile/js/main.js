function display_control(id){
    document.getElementById(id).style = "display:none;";
}

function open_url(url){
    window.location.href = url;
}

function hover(obj) {
    var style = obj.style;
    obj.style.backgroundColor = "#14a3cb";
    obj.style.color = "#fff";
    obj.style.boxShadow = "0px 10px 15px 10px rgba(0, 0, 0, .5)";
    obj.style.transform = "scale(1.02, 1.02)";
    obj.addEventListener('mouseleave', event => {
        obj.style = style;
    });
}




