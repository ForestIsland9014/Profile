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
        obj.style.opacity = 1;
        obj.style.transform = 'translateY(0)';
    });
}



function get_bulletin_board(purpose) {
    var api_url = "https://script.google.com/macros/s/AKfycbz5q6gf-tvuEM75cW5utIjFXmsxhvrkOOtFJNXu8lZ4UK4fYBle3Px3rdN3IGmdizY/exec";
    fetch(api_url).then(function (fetch_data) {
        return fetch_data.json();
    }).then(function (json) {
        document.getElementById("loading_now").style.display = "inline";
        if (purpose == "onload"){
            for (var i in json) {
                    let div_tag = document.createElement("div");
                    div_tag.className = "message_block";
                    div_tag.id = "message_" + (parseInt(i, 10)+1);
                    let h_tag = document.createElement("h3");
                    h_tag.textContent = (parseInt(i, 10)+1) + ". " + json[i].name;
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
$(async function(){
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
$(function(){
    var scroll_btm = 0;
    function show() {
        var scroll_top = $(this).scrollTop();
        scroll_btm = scroll_top + $(this).height();
        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.border').each( function() {
            var this_pos = $(this).offset().top;
            if ( scroll_btm-100 > this_pos) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
        $('.headline').each( function() {
            var this_pos = $(this).offset().top;
            if ( scroll_btm-80 > this_pos) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateX(0)'
                });
            }
        });
        $('.portfolio_explanation_block').each( function() {
            var this_pos = $(this).offset().top;
            if ( scroll_btm > this_pos) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
        $('.portfolio_link').each( function() {
            var this_pos = $(this).offset().top;
            if ( scroll_btm > this_pos) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    }
    show();
    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        show();
    });
});



