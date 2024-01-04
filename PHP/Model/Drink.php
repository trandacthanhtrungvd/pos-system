<?php

include_once "./Connection.php";

class Drink {
    private $code;

    function __construct($code) {
        $this->code;
    }

    function __destruct() {
        
    }

    public function get_info() {
        $sql = "SELECT * FROM `thuc_an_uong` WHERE `ma_thuc_an_uong` = $this->code";
        $conn = new Connection();
        if ($result = $conn->query($sql)) {
            $result_row = $result->fetch_row();
            $info = array("name"=>$result_row[1], "cost"=>$result_row[2], "image"=>$result_row[3]);
        }
        else {
            $info = array("name"=>"", "cost"=>0, "image"=>"");
        }
        return json_encode($info);
    }

    public function delete() {
        $sql = "DELETE FROM `thuc_an_uong` WHERE `ma_thuc_an_uong` = $this->code";
        $conn = new Connection();
        if ($conn->query($sql)) {
            $this->__destruct();
        }
        else {
            return false;
        }
    }

    public function edit($name, $price, $image_url) {
        $sql = "DELETE FROM `thuc_an_uong` WHERE `ma_thuc_an_uong` = $this->code";
        $conn = new Connection();
        if ($result = $conn->query($sql)) {
            return true;
        }
        else {
            return false;
        }
    }
}

?>