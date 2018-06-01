$(document).ready(function(){
  $('.form form').on('submit', function(e){
    e.preventDefault();
    console.log('jog');
    let formData = new FormData(this);
    $.ajax({
      url: "js/mail.php",
      type: 'POST',
      data: formData,
      success: function (data) {
        console.log(data)
        alert("Письмо отправлено");
      },
      error: function(jqXHR, exception, response) {
        console.log(jqXHR, exception, response );
      },
      cache: false,
      contentType: false,
      processData: false

    });
  });
});
