<?php

include "connection.php";

$username=$_POST["name"];
$password = $_POST["password"];

$query = $connection->prepare("Insert into users (name, password) VALUES (?,?);");

$hashed = password_hash($password,PASSWORD_DEFAULT);

$query->bind_param("ss",$username,$hashed);

$query->execute();

if($query->affected_rows != 1)
{
    echo json_encode([
        "message"=>"Failed creating new user",
    ]);
}
else{
    echo json_encode([
        "message"=>"Successful creating new user",
        "user"=> "$username logged in",
    ]);
}