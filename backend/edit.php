<?php

include("conexao.php");

if(!empty($_GET['id_pessoa'])){

    $id = $_GET['id_pessoa'];

    $sqlSelect = "SELECT * FROM pessoa WHERE id_pessoa=$id";

    $result = $conexao->query($sqlSelect);

    if($result->num_rows > 0) {

        while($row_usuario = mysqli_fetch_assoc($result)){

            $nome = $row_usuario["no_pessoa"];
            $sobrenome = $row_usuario["ds_sobrenome"];
            $email = $row_usuario["ds_email"];
            $tipo = $row_usuario["co_tipo_pessoa"];
            $cpf = $row_usuario["ds_cpf"];
            $cnpj = $row_usuario["ds_cnpj"];
            $cep = $row_usuario["ds_cep"];
            $logradouro = $row_usuario["ds_logradouro"];
            $bairro = $row_usuario["ds_bairro"];
            $cidade =$row_usuario["ds_cidade"];
            $estado = $row_usuario["co_uf"];
            $telefone = $row_usuario["ds_telefone"];
            $numero = $row_usuario["ds_numero"];
            $sexo = $row_usuario["id_sexo"];
            $data_nasc = $row_usuario ["dt_nascimento"];

}    
}
}


?>