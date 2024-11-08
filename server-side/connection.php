<?php
header("Access-Control-allow-Origin:*");
header("Access-Control-Allows-Headers: Content-Type");
header("Access-Control-Allows-Method: GET , POST");


$host = "localhost";
$db_user = "root";
$pass = "";
$db_name = "expense_trackerdb";
$port= 3308;

$connection = new mysqli($host,$db_user,$pass,$db_name,$port);

if($connection->connect_error){
    die("Connection failed: " . $connection->connect_error);
}
