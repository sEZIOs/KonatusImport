<?php

    require 'config.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
    header("Access-Control-Allow-Headers: Origin, Authorization, X-Auth-Token, Content-Type");

    // Get the posted data.
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    echo json_encode($request);
?>