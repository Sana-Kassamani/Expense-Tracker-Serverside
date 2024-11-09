<?php

include "connection.php";

$username = trim($_POST["name"]);
$password = trim($_POST["password"]);


$query= $connection->prepare("SELECT * FROM users WHERE name = ? ;");

$query->bind_param("s",$username);

$query->execute();

$result= $query->get_result();

if ($result->num_rows > 0)
{
    $user= $result->fetch_assoc();
    echo json_encode($user);
    $check = password_verify($password,$user["password"]);

    if($check)
    {
        echo json_encode([
            "message"=> "Login successful",
        ]);
    }
    else{
        echo json_encode([
            "message"=> "Wrong name or password",
        ]);
    }
}

else{
        echo json_encode([
            "message"=> "=No user with name: $username",
        ]);

}