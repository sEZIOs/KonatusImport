<?php
require 'config.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, Authorization, X-Auth-Token, Content-Type");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
	$password = pg_escape_string($db, trim($request->password));
    $email = pg_escape_string($db, trim($request->email));
$sql='';
	$sql = "SELECT * FROM UserMapping where email='$email' and password='$password'";
if($result = pg_query($db,$sql))
{
 $rows = array();
  while($row = pg_fetch_row($result))
  {
    $rows[] = $row;
  }
 
  echo json_encode($rows);
}
else
{
  http_response_code(404);
  echo "User information provided is not correct";
}
}
?>
