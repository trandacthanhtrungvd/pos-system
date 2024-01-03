<?php

include_once "./Connection.php";

class Drink {
    private $code;

    function __construct($code) {
        $this->code;
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
}

?>