<?php

include('conexao.php');

$busca = "SELECT * FROM pessoa";

$con = $conexao->query($busca) or die ($conexao->error);


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Tabela</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
</head>
<body>
    <h1>Usuários</h1>
    <!--<a href="formulario.php">Adicionar usuários</a> -->

    <table class="table table-dark table-striped">

                <tr>
                    <td>Id</td>
                    <td>Nome</td>
                    <td>Sobrenome</td>
                    <td>Email</td>
                    <td>Fisica ou Juridica</td>
                    <td>Cpf</td>
                    <td>Cep</td>
                    <td>Logradouro</td>
                    <td>Bairro</td>
                    <td>Cidade</td>
                    <td>Estado</td>
                    <td>Telefone</td>
                    <td>Número</td>
                    <td>Sexo</td>
                    <td>Data Nascimento</td>
                    <td>Editar</td>
                    <td>Deletar</td>
                </tr>

                <?php while($row_usuario = $con->fetch_array()) { ?>
                    
                    <tr>
                        <td><?php echo $row_usuario['id_pessoa'];?></td>
                        <td><?php echo $row_usuario['no_pessoa'];?></td>
                        <td><?php echo $row_usuario['ds_sobrenome'];?></td>
                        <td><?php echo $row_usuario['ds_email'];?></td>
                        <td><?php echo $row_usuario['co_tipo_pessoa'];?></td>
                        <td><?php echo $row_usuario['ds_cpf'];?></td>
                        <td><?php echo $row_usuario['ds_cep'];?></td>
                        <td><?php echo $row_usuario['ds_logradouro'];?></td>
                        <td><?php echo $row_usuario['ds_bairro'];?></td>
                        <td><?php echo $row_usuario['ds_cidade'];?></td>
                        <td><?php echo $row_usuario['co_uf'];?></td>
                        <td><?php echo $row_usuario['ds_telefone'];?></td>
                        <td><?php echo $row_usuario['ds_numero'];?></td>
                        <td><?php echo $row_usuario['co_sexo'];?></td>
                        <td><?php echo date("d/m/y",strtotime( $row_usuario['dt_nascimento']));?></td>
                        <td><?php echo "<a class='btn btn-sm btn-primary' href='edit.php?id_pessoa=" . $row_usuario['id_pessoa'] . "'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil' viewBox='0 0 16 16'>
                                <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z'/>
                            </svg>
                            </a> <br><hr>" ?></td>
                        <td><?php echo "<a class='btn btn-sm btn-danger' href='delete.php?id_pessoa=" . $row_usuario['id_pessoa'] . "'> <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash-fill' viewBox='0 0 16 16'>
                                    <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z'/>
                                </svg></a><br><hr>" ?></td>
                        </td>
                    </tr>

                    <?php } ?>               
                
        </table>
    
</body>
</html>