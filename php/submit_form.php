<?php

header("Access-Control-Allow-Origin: *");

// Create connection
$conn = new mysqli("localhost", "root", "", "piñata2go");

// Check connection
if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
else{
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    $sql = "INSERT INTO contactanos (Nombre, Telefono, Mensaje) VALUES ('$name', '$phone', '$message')";
    $res = mysqli_query($conn, $sql);
    
    if($res){
        echo "Datos guardados correctamente";
    }else{
        echo "Error al guardar los datos";
    }
    $conn->close();
}
?>