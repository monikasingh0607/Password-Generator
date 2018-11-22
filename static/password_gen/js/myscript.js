$(document).ready(function () {

//    On click of the submit button call the function to call generate
    $(".btn-sub").click(function(){
        console.log("hi")
        generate();

    });

//    Function responsible for gettin user input values and refreshing the page content with updated content.
    function generate() {

        var length = $('#pass_len').val();
        var number_pass = $("#pass_no").val();
        var url = $('#myform').attr('action');
        csrf = $('input[name="csrfmiddlewaretoken"]').val();
        var pass= ""

        $.ajax({
             url : url,
             type: "POST",
             dataType: "json",
             data: {
                'length':length,
                'number_of_passwords':number_pass,
                'csrfmiddlewaretoken':csrf
             },
             success : function (data) {
                $.each(data, function(index, value){
                    pass += value['password'] +'\n\n';
                });
                $("#passField").val(pass);
             }
         });
    }

});
function validate(evt) {
  var theEvent = evt || window.event;
    
  // Handle paste
  if (theEvent.type === 'paste') {
      
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
