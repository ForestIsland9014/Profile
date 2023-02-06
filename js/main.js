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


function get_bulletin_board() {
    var api_url = "https://script.google.com/macros/s/AKfycbz5q6gf-tvuEM75cW5utIjFXmsxhvrkOOtFJNXu8lZ4UK4fYBle3Px3rdN3IGmdizY/exec";
    fetch(api_url).then(function (fetch_data) {
        return fetch_data.json();
    }).then(function (json) {
        for (var i in json) {
            let div_tag = document.createElement("div");
            div_tag.className = "message_block";
            let h_tag = document.createElement("h3");
            h_tag.textContent = (parseInt(i, 10)+1) + ". " + json[i].name;
            let p_tag = document.createElement("p");
            p_tag.textContent = json[i].message;

            div_tag.appendChild(h_tag);
            div_tag.appendChild(p_tag);
            
            document.getElementById("bulletin_board").appendChild(div_tag);
            
        }
        document.getElementById("loading_now").style.display = "none";
    });

    
}



