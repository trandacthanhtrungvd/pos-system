<?php

include_once "../Model/Manager.php";

session_start();
if (isset($_SESSION["manager"])) {
    $user = new Manager($_SESSION["manager"]);
}
else {
    $customer = new Customer($_SESSION["customer"]);
}
echo $user->getRooms();

?>