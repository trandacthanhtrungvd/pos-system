<?php

class Connection {
    private $conn;

    function __construct() {
        $server = "localhost";
        $username = "root";
        $password = "";
        $database = "pos-system";

        $this->conn = new mysqli($server, $username, $password, $database);

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    function __destruct() {
        $this->conn->close();
    }

    function query($sql) {
        return $this->conn->query($sql);
    }

    function get_error() {
        return $this->conn->error;
    }
}
?>