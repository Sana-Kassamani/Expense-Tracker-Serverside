<?php
include "connection.php";

$transaction_id= $_GET["id"];


$query = $connection->prepare("DELETE FROM transactions WHERE id = $transaction_id;");


$query->execute();

if($connection->affected_rows >0){
    echo "successful";
}
else{
    
    echo $connection->error;
}