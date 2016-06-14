$(document).ready(function (e) {
//    Make Full Screen Button For Map Display
    $("#fullscreen").hover(
        function (e){
            $(this).css("opacity","0.6");
        },
        function (e){
            $(this).css("opacity","0.3");
        }
    );
    
    $("#fullScreen").click(function (e){
        if(document.getElementById("fullScreen").getAttribute("data-state") === "off"){
            $("#displayArea").css("height", "98.6%");
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
    
//    ImageMapster
    $('#turaMap').mapster({
        fillColor: '#ff0000',
        fillOpacity: 1,
        stroke: true,
        strokeWidth: 1,
        strokeOpacity: 1,
        onClick: function(e) {
            alert($(this).attr("data-dist"));
        }
    });
    
    $('area').on('click', function (e){
       alert($(this).attr("target"));
    });
//    End of ImageMapster
});
