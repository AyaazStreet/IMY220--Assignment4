$(document).ready(function () {
    $("div.details").on('click', 'button.btn', function(){
        $(this).parent().hide();
        $(this).parent().after( 
            $("<div></div>", {
                class: "row d-flex justify-content-between",
                style: "margin: 0;"
            })
            .append(
                $("<input></input>", {
                    type: $(this).parent().data("type"),
                    value: $(this).parent().children("span").html(),
                    class: "form-control col-8"
                }),
                $("<button></button>", {
                    class: "update btn btn-dark",
                    html: "Update",
                    style: "height: 38px;"
                })
            )
        );
    });

    $("div.row").on('click', 'button.update', function(){
        $(this).parent().prev().show();
        $(this).parent().prev().children("span").html($(this).prev().val());
        $(this).parent().remove();
    });

    //Drag and Drop functions (image must be in root folder)
    $("img").on('dragenter', function(event) {
        event.preventDefault();
    });

    $("img").on('dragover', function(event) {
        event.preventDefault();
    });

    $("img").on('drop', function(event) {
        event.preventDefault();
        var image = event.originalEvent.dataTransfer.files;
        $(this).attr("src", image[0].name);
    });
});