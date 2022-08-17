<?php

    include_once('conexao.php'); 
    
    if(isset($_POST['update']))
    {
        // echo "<pre>";
        // var_dump($_POST);
        // die;
        
        // $id = $_POST['id'];
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

        
        $sqlUpdate = "UPDATE pessoa 
        SET  no_pessoa='$nome',ds_sobrenome='$sobrenome',ds_cpf='$cpf',id_sexo='$sexo',ds_telefone='$tele',ds_email='$email',ds_cep='$cep',co_uf='$estado',ds_logradouro='$logradouro',ds_cidade=,'$cidade',ds_bairro='$bairro',ds_numero='$numero',dt_nascimento='$data' 
        WHERE id_pessoa=$id";
        
        $result = $conexao->query($sqlUpdate);
        print_r($result);
    }   


    

?>