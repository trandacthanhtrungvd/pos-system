<?php

include_once "Connection.php";
include_once "Branch.php";
include_once "User.php";
include_once "Customer.php";

class Manager extends User {
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

    public function get_info() {
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

    public function addDrink($name, $price, $image_url) {
        $sql = "INSERT INTO `thuc_an_uong`(`ten`, `don_gia`, `anh_minh_hoa`) VALUES ('$name', $price, '$image_url')";
        $conn = new Connection();
        if ($result = $conn->query($sql)) {
            return true;
        }
        else {
            return false;
        }
    }

    public function deleteDrink($drink_id) {
        $drink = new Drink($drink_id);
        if ($drink->delete()) {
            return true;
        }
        return false;
    }

    public function editDrink($drink_id, $name, $price, $image_url) {
        $drink = new Drink($drink_id);
        return $drink->edit($name, $price, $image_url);
    }

    public function getFeedbacks() {
        $sql = "SELECT * FROM `feedback` WHERE `ma_chi_nhanh` = $this->branch_code";
        $conn = new Connection();
        if ($result = $conn->query($sql)) {
            $return = array();
            while($result_row = $result->fetch_row()) {
                $feedback = array("content"=>$result_row[1]);
                // Những dùng này để dành nếu có thêm Mã KH vào database
                // $customer = new Customer($result_row[3]);
                // $customer_info = $customer->get_info();
                // array_merge($feedback, json_decode(array("name"=>$customer_info["name"]), true));
            }
            array_push($return, $feedback);
        }
        else {
            echo $conn->get_error();
        }
        return json_encode($return);
    }

    public function getRooms() {
        $branch = new Branch($this->branch_code);
        return $branch->get_all_rooms();
    }
}

?>