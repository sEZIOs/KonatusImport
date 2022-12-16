<?php
require 'config.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, Authorization, X-Auth-Token, Content-Type");

if($con){
    echo json_encode(['data'=>'connecté']);
} else{
    http_response_code(404);
}

?>