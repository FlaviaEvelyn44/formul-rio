<?php

include("conexao.php");

$id = $_GET['id_pessoa'];
if (empty($id)) {
    echo "Informe o ID da pessoa";
    die;
}

$sqlSelect = "SELECT * FROM pessoa WHERE id_pessoa = $id";
$result = $conexao->query($sqlSelect);

if ($result->num_rows > 0) {
    echo "Pessoa não encontrada!";
    die;
}

while ($row_usuario = mysqli_fetch_assoc($result)) {
    $nome = $row_usuario["no_pessoa"];
    $sobrenome = $row_usuario["ds_sobrenome"];
    $email = $row_usuario["ds_email"];
    $tipo = $row_usuario["co_tipo_pessoa"];
    $cpf = $row_usuario["ds_cpf"];
    $cnpj = $row_usuario["ds_cnpj"];
    $cep = $row_usuario["ds_cep"];
    $logradouro = $row_usuario["ds_logradouro"];
    $bairro = $row_usuario["ds_bairro"];
    $cidade = $row_usuario["ds_cidade"];
    $estado = $row_usuario["co_uf"];
    $telefone = $row_usuario["ds_telefone"];
    $numero = $row_usuario["ds_numero"];
    $sexo = $row_usuario["id_sexo"];
    $data_nasc = date("d/m/y", strtotime($row_usuario["dt_nascimento"]));
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar usuário</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
</head>

<body>
    <div class="container pt-7">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-6">
                <h1 class="text-center">Editar usuário</h1>
                <form id="form" class="form" action="saveEdit.php?id_pessoa=<?php echo $id ?>" method="POST">
                    <input type="text" name="id_pessoa" value="<?php echo $id ?>">
                    <div class="row mb-3">
                        <div class="form-group">
                            <div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="radioFisica" name="pessoaTipo"
                                        value="fisica" onclick="formulario.pessoa(this.value);">
                                    <label class="form-check-label" for="radioFisica">Pessoa Fisica</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="radioJuridica" name="pessoaTipo"
                                        value="juridica" onclick="formulario.pessoa(this.value);">
                                    <label class="form-check-label" for="radioJuridica">Pessoa Juridica</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label class="control-label col-sm-2" for="nome">Nome</label>
                            <input type="text" class="form-control" id="nome" name="nome" value="<?php echo $nome; ?>">
                        </div>
                        <div class="col-md-6">
                            <label class="control-label col-sm-2" for="sobrenome">Sobrenome</label>
                            <input type="text" class="form-control" id="sobrenome" name="sobrenome"
                                value="<?php echo $sobrenome; ?>">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label class="form-control-label col-sm-2" for="CPF">CPF</label>
                            <input type="text" class="form-control cpf" id="cpf" name="cpf" value="<?php echo $cpf; ?>">
                        </div>
                        <div class="col-md-6 juridica">
                            <label class="form-control-label col-sm-2" for="cnpj">CNPJ</label>
                            <input type="text" class="form-control cnpj" id="cnpj" name="cnpj"
                                value="<?php echo $cnpj; ?>">
                        </div>
                    </div>
                    <div class="row mb-3 juridica">
                        <div class="col-md-6 ">
                            <label class="control-label col-sm-6" for="razaoSocial">Razão Social</label>
                            <input type="text" class="form-control" id="razaoSocial" name="razaoSocial" required>
                        </div>
                        <div class="col-md-6">
                            <label class="control-label" for="nomefantasia">Nome Fantasia</label>
                            <input type="text" class="form-control col-lg-6" id="nomeFantasia" name="nomefantasia"
                                required>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label class="control-label" for="dataNascimento">Data de Nascimento</label>
                            <input type="text" class="form-control col-lg-6" id="dataNascimento" name="dataNascimento"
                                value="<?php echo $data_nasc; ?>" />
                        </div>
                        <div class="form-group md-6 required">
                            <label for="sexo">Sexo</label>
                            <div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="sexo" id="masculino" value="M"
                                        <?php echo ($sexo == 'masculino') ? 'checked' : ''; ?> />
                                    <label class="form-check-label" for="masculino">Masculino</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="sexo" id="feminino"
                                        value="feminino" <?php echo ($sexo == 'feminino') ? 'checked' : ''; ?>
                                        value="F" />
                                    <label class="form-check-label" for="feminino">Feminino</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="sexo" id="outro" value="outro"
                                        <?php echo ($sexo == 'outro') ? 'checked' : ''; ?> value="O" />
                                    <label class="form-check-label" for="outro">Prefiro não informar</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="tele">Telefone</label>
                            <input type="tel" id="tele" name="tele" class="form-control"
                                value="<?php echo $telefone; ?>" required>
                        </div>
                        <div class="col-md-6">
                            <label for="email">Email</label>
                            <input class="form-control" type="email" name="email" id="email"
                                placeholder="Digite seu email..." value=<?php echo $email; ?>>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="cep">CEP</label>
                            <input class="form-control" type="text" name="cep" id="cep" value="<?php echo $cep; ?>"
                                required />
                        </div>
                        <div class="col-md-6">
                            <label for="estado">Estado</label>
                            <select class="form-select form-select-sm-4" name="estado" id="estado">
                                <option selected><?php echo $estado; ?></option>
                                <option value="AC">AC</option>
                                <option value="AL">AL</option>
                                <option value="AP">AP</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MT">MT</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PR">PR</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="RO">RO</option>
                                <option value="RR">RR</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="logradouro">Logradouro</label>
                            <input class="form-control" type="text" name="logradouro" id="logradouro"
                                placeholder="Logradouro" value=<?php echo $logradouro; ?> />
                        </div>
                        <div class="col-md-6">
                            <label for="cidade">Cidade</label>
                            <input class="form-control" type="text" name="cidade" id="cidade" placeholder="Cidade"
                                value="<?php echo $cidade; ?>" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="bairro">Bairro</label>
                            <input class="form-control" type="text" name="bairro" id="bairro" placeholder="Bairro"
                                value="<?php echo $bairro; ?>" />
                        </div>
                        <div class="col-md-6">
                            <label for="numero">Número</label>
                            <input class="form-control" type="text" name="numero" id="numero" placeholder="Número"
                                required value=<?php echo $numero; ?> />
                        </div>

                        <div class="form-group mb-3">
                            <button type="submit" class="btn btn-primary">Salvar
                                alteraões</button>
                            <a href="http://localhost/formulario/backend/tabela.php">Voltar para usuários</a>
                        </div>
                </form>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
    </script>
    <script type="text/javascript" src="js/jquery.mask.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/jquery.validate.min.js"></script>
    <script type="text/javascript" src="js/additional-methods.js"></script>
    <script type="text/javascript" src="js/localization/messages_pt_BR.js"></script>

</body>

</html>