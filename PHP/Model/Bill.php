<?php

include_once "Connection.php";
include_once "Drink.php";
include_once "Branch.php";

class Bill {
    private $code;
    private $discount_code;

    function __construct($code) {
        $this->code = $code;
        $sql = "SELECT `ma_khuyen_mai` FROM `hoa_don` WHERE `ma_hoa_don` = $this->code";
        $conn = new Connection();   
        if ($result = $conn->query($sql)) {
            $result_row = $result->fetch_row();
            $this->discount_code = $result_row[0];
        }
        else {
            echo $conn->get_error();
        }
    }

    function get_bill_info() {
        $sql = "SELECT * FROM `hoa_don` WHERE `ma_hoa_don` = $this->code";
        $conn = new Connection();   
        if ($result = $conn->query($sql)) {
            $result_row = $result->fetch_row();
            $info = array("createTime"=>$result_row[1], "startTime"=>$result_row[2], "duration"=>$result_row[5]);
        }
        else {
            echo $conn->get_error();
        }
        return json_encode($info);
    }

    function get_drink_info() {
        $sql = "SELECT * FROM `bao_gom` WHERE `ma_hoa_don` = $this->code";
        $conn = new Connection();   
        if ($result = $conn->query($sql)) {
            $drink_info = array();
            while ($result_row = $result->fetch_row()) {
                $drink = new Drink($result_row[1]);
                $drink_info = array_merge($drink_info, array($result_row[1]=>array("info"=>json_decode($drink->get_info(), true), "number"=>$result_row[2])));
            }
        }
        else {
            echo $conn->get_error();
        }
        return json_encode($drink_info);
    }

    function get_room_info() {
        $sql = "SELECT * FROM `duoc_thue_trong` WHERE `ma_hoa_don` = $this->code";
        $conn = new Connection();   
        if ($result = $conn->query($sql)) {
            $result_row = $result->fetch_row();
            $branch = new Branch($result_row[1]);
            $room_info = $branch->get_room_info($result_row[2]);
        }
        else {
            echo $conn->get_error();
        }
        return json_encode($room_info);
    }

    function get_discount() {
        $sql = "SELECT `phan_tram_giam`, `ghi_chu_them`, `tien_giam_max` FROM `khuyen_mai` WHERE `ma_khuyen_mai` = $this->discount_code";
        $conn = new Connection();   
        if ($result = $conn->query($sql)) {
            $result_row = $result->fetch_row();
            $discount_info = array("discountPercent"=>$result_row[0], "note"=>$result_row[1], "discountMax"=>$result_row[2]);
        }
        else {
            echo $conn->get_error();
        }
        return json_encode($discount_info);
    }

    function get_price() {
        $bill = json_decode($this->get_bill_info(), true);
        $drinks = json_decode($this->get_drink_info(), true);
        $room = json_decode($this->get_room_info(), true);
        $discount = json_decode($this->get_discount(), true);
        $total_price = 0;
        foreach (array_keys($drinks) as $code) {
            $total_price += $drinks[$code]["info"]["cost"] * $drinks[$code]["number"];
        }
        $total_price += $room["unitPrice"] * $bill["duration"];
        $total_price -= max($total_price*$discount["discountPercent"], $discount["discountMax"]);
        $price = array("price"=>$total_price);
        return json_encode($price);
    }
}

?>