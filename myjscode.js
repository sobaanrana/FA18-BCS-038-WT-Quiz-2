$(function () {
  $("#myForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
  var isvalid = true;
  var name = $("#name").val();
  var pass = $("#password").val();
  var cpass = $("#confirm_password").val();

  $("#name").removeClass("error");
  $("#password").removeClass("error");
  $("#confirm_password").removeClass("error");

  if(name.length <= 4)
  {
      $("#name").addClass("error");
      alert("Name should be atleast 5 characters long");
      isvalid = false;


  }
  if(pass.length < 8)
  {
      $("#password").addClass("error");
      alert("Password must be atleast 8 character long");
      isvalid = false;
  }
  if( (cpass != pass) || cpass.length < 8)
  {
      $("#confirm_password").addClass("error");
      alert("Password must match and greater than or equal 8");
      isvalid = false;
  }
  if(isvalid == false )
  {
      e.preventDefault();
      return;
  }
  else{
      alert("Form is being submitted");
  }
}