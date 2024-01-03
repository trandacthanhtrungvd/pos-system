<?php

include_once "Connection.php";

class Branch {
    protected $code;

    function __construct($code) {
        $this->code = $code;
    }

    function get_branch_info() {
        $sql = "SELECT * FROM `chi-nhanh` WHERE `ma_chi_nhanh` = $this->code";
        $conn = new Connection();
        if ($result = $conn->query($sql)) {
            $result_row = $result->fetch_row();
            $info = array("location"=>$result_row[1], "phone"=>$result_row[2]);
        }
        else {
            echo $conn->get_error();
        }
        return json_encode($info);
    }

    function get_room_info($roomNum) {
        $sql = "SELECT * FROM `phong` WHERE `ma_chi_nhanh` = $this->code AND `so_phong` = $roomNum";
        $conn = new Connection();   
        if ($result = $conn->query($sql)) {
            $result_row = $result->fetch_row();
            $room_info = array("description"=>$result_row[2], "image"=>$result_row[3]);
            $roomType = $result_row[4];
        }
        else {
            echo $conn->get_error();
        }

        $sql = "SELECT * FROM `loai_phong` WHERE `ma_chi_nhanh` = $this->code AND `ma_loai_phong` = $roomType";
        if ($result = $conn->query($sql)) {
            $result_row = $result->fetch_row();
            $type_info = array("unitPrice"=>$result_row[2], "maxUser"=>$result_row[3]);
        }
        else {
            echo $conn->get_error();
        }
        
        return json_encode(array_merge($room_info, $type_info));
    }
}

?>