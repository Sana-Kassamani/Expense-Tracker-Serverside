<?php

include "connection.php";

$response = $connection->prepare("SELECT * FROM transactions WHERE Users_id=5;");

$response->execute();

$result = $response->get_result();

if($result->num_rows >0){
    $array=[];
    while($resultObject=$result->fetch_assoc())
    {
        $array[]=$resultObject;

        
    }
    echo json_encode($array);
}
else{
    $response = [
        "message"=>"NO data"
    ];
    echo json_encode($response);
}