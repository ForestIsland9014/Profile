window.onload = function() {
    if (navigator.cookieEnabled){
        if (document.cookie.indexOf("page_color") != -1){
            var r = document.cookie.split(';')[document.cookie.indexOf("page_color")]
            if (r.split("=")[1] == "bright"){
                change_Page_color("onload-/img/sun.png");
            }else {
                change_Page_color("onload-/img/star.png");
            }
            
        }
    }
}

function display_control(id) {
    document.getElementById(id).style = "display:none;";
}

function open_url(url) {
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
        obj.style.opacity = 1;
        obj.style.transform = 'translateY(0)';
        if (document.getElementById("light_btn").getAttribute("src").indexOf("/img/star.png") != -1) {
            obj.style.boxShadow = "0px 10px 15px 10px rgba(0, 0, 0, .5)";
        }

    });
}
function change_color_btn() {
    document.getElementById("light_btn").parentElement.style.transform = "translateY(0)";
    document.getElementById("light_btn").parentElement.style.opacity = "1";
}

function change_Page_color(path) {
    if (path.indexOf("onload-") == -1) {
        document.getElementById("light_btn").parentElement.style.transform = "translateY(20px)";
        document.getElementById("light_btn").parentElement.style.transition = "400ms";
        document.getElementById("light_btn").parentElement.style.opacity = "0";
        window.setTimeout(change_color_btn, 230);

    }
    if (path.indexOf("/img/sun.png") != -1) {
        if (navigator.cookieEnabled) {
            document.cookie = "page_color=; max-age=0";
            document.cookie = "page_color=bright; path=/";
        }  
    }else {
        if (navigator.cookieEnabled) {
            document.cookie = "page_color=; max-age=0";
            document.cookie = "page_color=black; path=/";
        }  
    }
    if (location.href.indexOf("templates") != -1) {
        if (path.indexOf("/img/sun.png") != -1) {
            document.getElementById("light_btn").setAttribute("src", "../img/star.png");
            document.getElementById("light_btn").parentElement.style.backgroundColor = "rgb(39 71 153)";
            document.getElementsByTagName("body")[0].style = "background-color:#f1f1f1"
            document.getElementsByClassName("headline")[0].style.color = "rgb(47 51 47)";
            if (document.getElementsByClassName("portfolio_explanation")[0].getElementsByTagName("a")[0] != undefined) {
                document.getElementsByClassName("portfolio_explanation")[0].getElementsByTagName("a")[0].style.color = "rgb(47 51 47)";
            }
        } else {
            document.getElementById("light_btn").setAttribute("src", "../img/sun.png");
            document.getElementById("light_btn").parentElement.style.backgroundColor = "rgb(20 223 219)";
            document.getElementsByTagName("body")[0].style = "background-color:rgb(42, 42, 42)"
            document.getElementsByClassName("headline")[0].style.color = "#fff";
            if (document.getElementsByClassName("portfolio_explanation")[0].getElementsByTagName("a")[0] != undefined) {
                document.getElementsByClassName("portfolio_explanation")[0].getElementsByTagName("a")[0].style.color = "#fff";
            }
        }
    } else {
        if (path.indexOf("/img/sun.png") != -1) {
            document.getElementById("light_btn").setAttribute("src", "./img/star.png");
            document.getElementById("light_btn").parentElement.style.backgroundColor = "rgb(39 71 153)";
            document.getElementById("profile_top").style = "background-color:#f1f1f1; color: rgb(47 51 47)";
            document.getElementsByTagName("body")[0].style = "background-color:#f1f1f1";
            document.getElementById("profile_img").style = "border : 5px solid #000;";
            document.getElementById("tab_line").style = "border: 1px solid #000; width: 89.8%; margin-top: 1%;";
            if (document.getElementById("Contact_form") != undefined) {
                document.getElementById("Contact_form").getElementsByTagName("h1")[0].style.color = "rgb(47 51 47)";
                document.getElementById("form").style.color = "#000";
                document.getElementById("form").getElementsByTagName("div")[0].getElementsByTagName("input")[0].style.backgroundColor = "#f1f1f1";
                document.getElementById("form").getElementsByTagName("div")[0].getElementsByTagName("input")[0].style.borderColor = "rgb(47 51 47)";
                if (document.getElementById("form").getElementsByTagName("div")[1].getElementsByTagName("input")[0] != undefined) {
                    document.getElementById("form").getElementsByTagName("div")[1].getElementsByTagName("input")[0].style.backgroundColor = "#f1f1f1";
                    document.getElementById("form").getElementsByTagName("div")[1].getElementsByTagName("input")[0].style.borderColor = "rgb(47 51 47)";
                }
                document.getElementsByTagName("textarea")[0].style.backgroundColor = "#f1f1f1";
                document.getElementsByTagName("textarea")[0].style.borderColor = "rgb(47 51 47)";

            }

            if (document.getElementById("down_img") != undefined) {
                document.getElementById("down_img").style = "width: 70px; position: fixed; bottom: 10px; right: 10px; border: 1px solid #000; border-radius: 100%;";
                document.getElementById("loading_now").getElementsByTagName("img")[0].setAttribute("src", "./img/loading_bright.gif");
            }
            if (document.getElementsByClassName("portfolio_link")[0] != undefined) {
                for (let i = 0; i < document.getElementsByClassName("portfolio_link").length; i++) {
                    document.getElementsByClassName("portfolio_link")[i].style.boxShadow = "rgb(0 0 0 / 50%) 0px 10px 15px 10px";
                }

            }
            for (let i = 0; i < document.getElementsByClassName("tab")[0].getElementsByTagName("li").length; i++) {
                document.getElementsByClassName("tab")[0].getElementsByTagName("li")[i].getElementsByTagName("a")[0].style.border = "1px solid #000";
            }

            
        } else {
            document.getElementById("light_btn").setAttribute("src", "./img/sun.png");
            document.getElementById("light_btn").parentElement.style.backgroundColor = "rgb(20 223 219)"
            document.getElementById("profile_top").style = "background-color:rgb(42, 42, 42); color: #fff"
            document.getElementsByTagName("body")[0].style = "background-color:rgb(42, 42, 42)"
            document.getElementById("profile_img").style = "border : 5px solid #fff;";
            document.getElementById("tab_line").style = "border: 1px solid #fff; width: 89.8%; margin-top: 1%;"
            if (document.getElementById("Contact_form") != undefined) {
                document.getElementById("Contact_form").getElementsByTagName("h1")[0].style.color = "#fff";
                document.getElementById("form").style.color = "#fff";
                document.getElementById("form").getElementsByTagName("div")[0].getElementsByTagName("input")[0].style.backgroundColor = "rgb(42, 42, 42)";
                document.getElementById("form").getElementsByTagName("div")[0].getElementsByTagName("input")[0].style.borderColor = "#fff";
                if (document.getElementById("form").getElementsByTagName("div")[1].getElementsByTagName("input")[0] != undefined) {
                    document.getElementById("form").getElementsByTagName("div")[1].getElementsByTagName("input")[0].style.backgroundColor = "rgb(42, 42, 42)";
                    document.getElementById("form").getElementsByTagName("div")[1].getElementsByTagName("input")[0].style.borderColor = "#fff";
                }

                document.getElementsByTagName("textarea")[0].style.backgroundColor = "rgb(42, 42, 42)";
                document.getElementsByTagName("textarea")[0].style.borderColor = "#fff";

                if (document.getElementById("down_img") != undefined) {
                    document.getElementById("down_img").style = "width: 70px; position: fixed; bottom: 10px; right: 10px;";
                    document.getElementById("loading_now").getElementsByTagName("img")[0].setAttribute("src", "./img/loading_black.gif");
                }
            }
            if (document.getElementsByClassName("portfolio_link")[0] != undefined) {
                for (let i = 0; i < document.getElementsByClassName("portfolio_link").length; i++) {
                    document.getElementsByClassName("portfolio_link")[i].style.boxShadow = "none";
                }

            }
            for (let i = 0; i < document.getElementsByClassName("tab")[0].getElementsByTagName("li").length; i++) {
                document.getElementsByClassName("tab")[0].getElementsByTagName("li")[i].getElementsByTagName("a")[0].style.border = "1px solid #fff";
            }
        }
    }

}

function get_bulletin_board(purpose) {
    if (navigator.cookieEnabled){
        if (document.cookie.indexOf("page_color") != -1){
            var r = document.cookie.split(';')[document.cookie.indexOf("page_color")]
            if (r.split("=")[1] == "bright"){
                change_Page_color("onload-/img/sun.png");
            }else {
                change_Page_color("onload-/img/star.png");
            }
            
        }
    }
    var api_url = "https://script.google.com/macros/s/AKfycbz5q6gf-tvuEM75cW5utIjFXmsxhvrkOOtFJNXu8lZ4UK4fYBle3Px3rdN3IGmdizY/exec";
    fetch(api_url).then(function (fetch_data) {
        return fetch_data.json();
    }).then(function (json) {
        document.getElementById("loading_now").style.display = "inline";
        if (purpose == "onload") {
            for (var i in json) {
                let div_tag = document.createElement("div");
                div_tag.className = "message_block";
                div_tag.id = "message_" + (parseInt(i, 10) + 1);
                let h_tag = document.createElement("h3");
                h_tag.textContent = (parseInt(i, 10) + 1) + ". " + json[i].name;
                let p_tag = document.createElement("p");
                p_tag.textContent = json[i].message;

                div_tag.appendChild(h_tag);
                div_tag.appendChild(p_tag);

                document.getElementById("bulletin_board").appendChild(div_tag);
            }
        }
        document.getElementById("loading_now").style.display = "none";

    });
}
function wait(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

// 名前を動かす
$(async function () {
    $('#profile_name').css({
        opacity: 0,
        transform: 'translateY(20px)',
    });
    await wait(100);
    $('#profile_name').css({
        opacity: 1,
        transform: 'translateY(0)',
        transition: '1200ms'
    });

});
$(function () {
    var scroll_btm = 0;
    function show() {
        var scroll_top = $(this).scrollTop();
        scroll_btm = scroll_top + $(this).height();
        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.border').each(function () {
            var this_pos = $(this).offset().top;
            if (scroll_btm - 100 > this_pos) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
        $('.headline').each(function () {
            var this_pos = $(this).offset().top;
            if (scroll_btm - 80 > this_pos) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateX(0)'
                });
            }
        });
        $('.portfolio_explanation_block').each(function () {
            var this_pos = $(this).offset().top;
            if (scroll_btm > this_pos) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
        $('.portfolio_link').each(function () {
            var this_pos = $(this).offset().top;
            if (scroll_btm > this_pos) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    }
    show();
    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function () {
        show();
    });
});



