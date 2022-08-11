$(".cont-2st .btn-group div").click(function(){
    
    $(".cont-2st .btn-group div").removeClass("active");
    $(this).addClass("active");

    let $selector = $(this).attr("data-filter");
    console.log($selector)

    $(".cont-2st .view").isotope({
        filter: $selector
    })
})

window.onload = function(){
    $(".cont-2st .btn-group div").eq(0).trigger("click")
}


