<?php
require "config.php" ;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, Authorization, X-Auth-Token, Content-Type");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata))
{
  $firstName = pg_escape_string($db, trim($request->firstName));
  $lastName = pg_escape_string($db, trim($request->lastName));
  $email = pg_escape_string($db, trim($request->email));
  $password = pg_escape_string($db,trim($request->password));

  $start = pg_execute($db, "my_query", array($firstName, $lastName, $email, $password));

  $query_mailExist = "SELECT * FROM UserMapping WHERE email='$email';";
  $mailExist = pg_query($db, $query_mailExist);

  $mailExist_row = pg_num_rows($mailExist);
  

if ($mailExist_row === 0) {
  $sql = "INSERT INTO UserMapping (firstName,lastName,email,password) VALUES ('{$firstName}','{$lastName}','{$email}','{$password}')";
  $result = pg_query($sql);
  http_response_code(201);
    $user = [                    //col0 autoincremental user_id
      'firstName' => $firstName, //col1 firstName
      'lastName' => $lastName,   //col2 lastName
      'password' => $password,   //col3 password
      'email' => $email,         //col4 email
    ];
    echo json_encode($user);
}else{
  http_response_code(422);
}
}
?>