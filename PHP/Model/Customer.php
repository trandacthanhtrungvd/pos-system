<?php

include_once "Connection.php";

class Customer {
    private $code;

    function __construct($code) {
        $this->code = $code;
    }

    function get_info() {
        $sql = "SELECT * FROM `khach_hang` WHERE `ma_khach_hang` = $this->code";
        $conn = new Connection();   
        if ($result = $conn->query($sql)) {
            $result_row = $result->fetch_row();
            $info = array("name"=>$result_row[1], "gmail"=>$result_row[2], "phone"=>$result_row[3], "vipPoint"=>$result_row[4], "password"=>$result_row[5], "vipType"=>$result_row[6]);
        }
        else {
            echo $conn->get_error();
        }
        
        return json_encode($info);
    }
}

?>