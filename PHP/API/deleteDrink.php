<?php

include_once "../Model/Manager.php";

session_start();

$manager = new Manager($_SESSION["manager"]);
$manager->deleteDrink($_GET["id"]);

?>