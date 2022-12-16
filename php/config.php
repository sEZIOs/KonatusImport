<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, Authorization, X-Auth-Token, Content-Type"); //these are important or will throw cros error

$host        = "host = localhost";
$port        = "port = 5432";
$dbname      = "dbname = even_more_awesome_application"; //change dbname to your dbname
$credentials = "user = postgres password=sid"; //change username and password

$db = pg_connect( "$host $port $dbname $credentials"  );
if(!$db) {
   echo "Error : Unable to open database\n";
} else {
   echo "Opened database successfully sid\n";
}


?>
