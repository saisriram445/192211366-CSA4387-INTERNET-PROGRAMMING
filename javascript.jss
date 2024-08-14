function validate_form() {
    alert("welcome");
    const fexpres = /^[a-z]{10}$/;
    var a = document.getElementById("fname");
    var status = true;

    if (!fexpres.test(a.value)) {
        document.getElementById("e_name").innerHTML = "Invalid first name";
        status = false;
        a.value = "";
    }
    const pexpres = /^([A-Z][a-z]){5}$/;
    var b = document.getElementById("lname");
    var status=true;
      if (!pexpres.test(b.value)) {
        document.getElementById("l_name").innerHTML = "Invalid last name";
        status = false;
        b.value = "";
    }  
    const rexpres=/^[0-9]{9}$/;
    var c=document.getElementById("reg");
    var status=true;
    if (! rexpres.test(c.value)) {
       document.getElementById("reg_no").innerHTML="Invalide Register number";
       status=false;
       c.value="";
    } 
  const expre=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  var d=document.getElementById("email");
  var status=true;
    if(!expre.test(d.value)) {
    document.getElementById("e_mail").innerHTML="incorrecr email";
    status=false;
    d.value=""; 
  } 
  const pas=/^[A-Z][a-z]*$/;
  e=document.getElementById("pass");
  var status=true;
  if(!pas.test(e.value)) {
  document.getElementById("pws").innerHTML="incorrect password";
  status=false;
  e.value="";
  }  
 return status;
}
