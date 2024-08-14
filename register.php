<?php
$servername="localhost";
$username="root";
$password="";
$dbname="saillibrery";
$con=new mysqli($servername,$username,$password,$dbname);
if($con->connect_error)
{
 die('Could not connect: '.con->connect_error());
}
$u=$_GET["mail"];
$p=$_GET["pws"];
$sql="SELECT reg_no,email,Password FROM studentes where email= '{$u}' ";
$result=$con->query($sql);
if($result->num_rows>0)
{
 while($row=$result->fetch_assoc())
{
 if($row["email"]==$u && $row["Password"]==$p)
 {
   echo "You have been Successfully validated";
   $con->close();
   header("refresh:3; url=register.php");
 }
else
{
 echo "Credentials Wrong, Try again";
}
}
}
else
{
 echo "User name given was not exist";
}
$con->close();
header("refresh:3; url=home.html");
?>
