$(document).ready(function() {
  $("#details form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var surNameInput = $("input#surName").val();
    var ageInput = $("input#age").val();
    var nationalityInput = $("input#nationality").val();
    var addressInput = $("input#address").val();
    var monthInput = $("input#month").val();

    $(".firstName").text(firstNameInput);
    $(".surName").text(surNameInput);
    $(".age").text(ageInput);
    $(".nationality").text(nationalityInput);
    $(".address").text(addressInput);
    $(".month").text(monthInput);

    $("#feedback").show();

    event.preventDefault();
  });
});
