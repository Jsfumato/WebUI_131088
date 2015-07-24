//.on() method를 이용한 방법  1.7+
$("body").on("click", "#btn", function(e) {
    var str = $("#input").val();
    $("#main").text(str);
    
    $("#input").val("");
})