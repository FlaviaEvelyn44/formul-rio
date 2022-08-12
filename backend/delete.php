<?php

if(!empty($_GET['id_pessoa'])) {

    include_once("conexao.php");

    $id = $_GET['id_pessoa'];

    $sqlSelect = "SELECT * FROM pessoa WHERE id_pessoa=$id";

    $result = $conexao->query($sqlSelect);

    if($result->num_rows > 0) {

        $sqlDelete = "DELETE FROM pessoa WHERE id_pessoa=$id";
        $resultDelete = $conexao->query($sqlDelete);
    }
}
if($result = mysqli_query($conexao,$sqlDelete)){
    echo"Usuário deletado com sucesso";
}else{
    echo"Erro: ".$sqlDelete."<br>".mysqli_error($conexao); 
}

?>

<br>
<a href="http://localhost/formulario/backend/tabela.php">Voltar para usuários</a>