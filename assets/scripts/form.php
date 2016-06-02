<?php

// require_once "Conn/connection.php";

$host="localhost";
$username = "";
$password = "";
$db_name = "gmama";
$tbl_name = "geo";

// Connect to server and select databse.
mysql_connect("$host", "$username", "$password")or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB");

// username and password sent from form
$username = $_POST["username"];
$password = $_POST["password"];

"SELECT * FROM geo WHERE userid='$demo' AND password = '$demo'"
// register username and password and redirect to another file
if ($count==1) {
  # code..
  session_register("username");
  session_register("password");
  // header("location:login_success.php");
  header('location:rcv.php');
  // header('location:../../views/RootControllerView.php');
} else {
  # code...
  echo "Wrong username or password";
}


?>
