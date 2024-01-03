<?php

include_once "../Model/Connection.php";

$sql = "SELECT * FROM `thuc_an_uong`";
$conn = new Connection();
if ($result = $conn->query($sql)) {
    $return = array();
    while ($result_row = $result->fetch_row()) {
        $info = array("id"=>$result_row[0], "name"=>$result_row[1], "price"=>$result_row[2], "image_url"=>$result_row[3]);
        array_push($return, $info);
    }
}
else {
    echo $conn->get_error();
}

echo json_encode($return);

?>