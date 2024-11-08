<?php

include "connection.php";
// $type = $_POST["type"] ;
// $amount = $_POST["amount"];
// $date = $_POST["date"] ;
// $notes = $_POST["notes"] ;

$type = $_GET["type"] ;
$amount = $_GET["amount"];
$date = $_GET["date"] ;
$notes = $_GET["notes"] ;

$id = 1;

$query = $connection->prepare("INSERT INTO transactions (type, amount, date, notes, Users_id) VALUES (?, ?, ?, ?, ?)");

$query->bind_param("sdssi", $type, $amount, $date, $notes, $id);

$query->execute();
if($connection->affected_rows >0){
    echo "successful";
}
else{
    
    echo $connection->error;
}


