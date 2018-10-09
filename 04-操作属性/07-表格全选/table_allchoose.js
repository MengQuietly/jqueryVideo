
$(document).ready(function () {

    $("#all").click(function () {
        $("#j_tb input").prop("checked", $(this).prop("checked"));
    });

    $("#j_tb input").click(function () {
        if ($("#j_tb input:checked").length == $("#j_tb input").length){
            $("#j_cbAll").prop("checked", true);
        } else {
            $("#j_cbAll").prop("checked", false);
        }
    });
});


