<?php

include_once "../Model/Manager.php";

session_start();

$manager = new Manager($_SESSION["manager"]);
$manager->addDrink($_POST["name"], $_POST["price"], $_POST["image_url"]);

?>