<?php

include_once "Connection.php";
include_once "Branch.php";

class Manager {
    private $gmail;
    private $branch_code;

    function __construct($gmail) {
        $this->gmail = $gmail;
        $sql = "SELECT `ma_chi_nhanh` FROM `quan_ly` WHERE `gmail` = $this->gmail";
        $conn = new Connection();
        if ($result = $conn->query($sql)) {
            $result_row = $result->fetch_row();
            $this->branch_code = $result_row[0];
        }
        else {
            echo $conn->get_error();
        }
    }

    function get_info() {
        $sql = "SELECT * FROM `quan_ly` WHERE `gmail` = $this->gmail";
        $conn = new Connection();
        if ($result = $conn->query($sql)) {
            $result_row = $result->fetch_row();
            $info = array("name"=>$result_row[2], "phone"=>$result_row[3], "password"=>$result_row[4]);
        }
        else {
            echo $conn->get_error();
        }
        return json_encode($info);
    }
}

?>