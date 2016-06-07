function fact(number) {
       if(number == 0) {
           return 1;
       }
       if(number < 0 ) {
           return undefined;
       }
       for(var i = number; --i; ) {
           number *= i;
       }
       return number;
}
$(document).ready(function() {
  $("#first-number").submit(function(event) {

    $("#answer").text(fact($("#response").val()));
    event.preventDefault();
  });
});
