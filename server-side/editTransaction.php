<?php

include "connection.php";


$data = json_decode(file_get_contents("php://input"), true);

$query = $connection->prepare("INSERT INTO transactions (type, amount, date, notes, Users_id) VALUES (?, ?, ?, ?, ?)");


$query->execute();



if($connection->affected_rows >0){
    echo "successful";
}
else{
    
    echo $connection->error;
}