<?php

include_once "Connection.php";
include_once "Branch.php";

abstract class User {

    public function getDrinks() {
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
        return json_encode($return);
    }

    public function getRooms() {
        $branch_code_list = array();
        $sql = "SELECT `ma_chi_nhanh` FROM `chi_nhanh`";
        $conn = new Connection();
        if ($result = $conn->query($sql)) {
            $result_row = $result->fetch_row();
            array_push($branch_code_list, $result_row[0]);
        }
        
        $room_info_list = array();
        foreach ($branch_code_list as $branch_code) {
            $branch = new Branch($branch_code);
            array_merge($room_info_list, json_decode($branch->get_all_rooms(), true));
        }

        return json_encode($room_info_list);
    }
}


?>