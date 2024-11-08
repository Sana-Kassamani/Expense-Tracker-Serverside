<?php

include "connection.php";

$type = $_POST["type"];
$amount = $_POST["amount"];
$date = $_POST["date"];
$notes = $_POST["notes"];

$query = $connection->prepare("INSERT INTO transactions (type,amount,date,notes) VALUES ($type,$amount,$date,$notes);");

$query->execute();
if($connection->affected_rows >0){
    echo "successful";
}
else{
    echo $connection->error;
}


