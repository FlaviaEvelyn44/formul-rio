<?php

include("conexao.php");

$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$cpf = $_POST['cpf'];
//$cnpj = $_POST['cnpj'];
//$razaoSocial = $_POST['razaoSocial'];
//$nomeFantasia = $_POST['nomeFantasia'];
$data = $_POST['dataNascimento'];
$sexo = $_POST['sexo'];
$tele = $_POST['tele'];
$email = $_POST['email'];
//$senha = $_POST['senha'];
//$senha2 = $_POST['senha2'];
$cep = $_POST['cep'];
$estado = $_POST['estado'];
$logradouro = $_POST['logradouro'];
$cidade = $_POST['cidade'];
$bairro = $_POST['bairro'];
$numero = $_POST['numero'];
//$opinioes = $_POST['opinioes'];

$sql = "INSERT INTO pessoa(no_pessoa,ds_sobrenome,ds_cpf,id_sexo,ds_telefone,ds_email,ds_cep,co_uf,ds_logradouro,ds_cidade,ds_bairro,ds_numero,dt_nascimento)
VALUES('$nome','$sobrenome','$cpf','$sexo','$tele','$email','$cep','$estado','$logradouro','$cidade','$bairro','$numero','$data')";

if($result = mysqli_query($conexao,$sql)){
    echo"Cadastrado com sucesso";
}else{
    echo"Erro: ".$sql."<br>".mysqli_error($conexao); 
}


mysqli_close($conexao);

//listagem


?>

<a href="http://localhost/formulario/formulario.php">Voltar</a>
<br>
<a href="http://localhost/formulario/backend/tabela.php">Ver usuários ja cadastrados</a>