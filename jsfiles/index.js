    
//    MapHilight
    
$(function() {
    var $map = $('#turaMap');
    $map.maphilight({
//        fillOpacity: 0.5,
//        alwaysOn: true
    });
    
});

//    End of MapHilight

$(document).ready(function (e) {
    
    $('area').mouseover(function(e) {
        var id = '#' + $(this).attr('target');
        var a = parseFloat($(this).attr('target'))/60;
        e.preventDefault();
        var data = $(id).data('maphilight') || {};
        data.fillOpacity = a;
        $(id).data('maphilight', data);
    });
    
//    Make Full Screen Button For Map Display
    $("#fullScreen").hover(
        function (e){
            $(this).css("opacity","0.6");
        },
        function (e){
            $(this).css("opacity","0.3");
        }
    );
    
    $("#fullScreen").click(function (e){
        if(document.getElementById("fullScreen").getAttribute("data-state") === "off"){
            $("#displayArea").css("height", "99.2%");
            $("#displayArea").css("margin-top", "-1em");
            $("#controlPanel").css("display", "none");
            $(this).css("top","13%");
            document.getElementById("fullScreen").setAttribute("data-state", "on");
            document.getElementById("fullScreen").innerHTML = "ON";
        }
        else{
            $("#displayArea").css("height", "73%");
            $("#displayArea").css("margin-top", "0.5em");
            $("#controlPanel").css("display", "");
            $(this).css("top","34%");
            document.getElementById("fullScreen").setAttribute("data-state", "off");
            document.getElementById("fullScreen").innerHTML = "OFF";
        }
    });
//    End of full screen Button Definition
});

function show(element) {
    alert($(element).attr('alt')+', '+$(element).attr('data-dist'));
};