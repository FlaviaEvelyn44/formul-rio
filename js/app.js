//esconder pessoa juridica
function pessoa(tipo){
    if(tipo=="fisica"){
        $(".juridica").hide();
    }else if(tipo=="juridica"){
        $(".juridica").show();
    }
};


//mascaras
$(document).ready(function () {
	$("#tele").mask('(00)00000-0000', { placeholder: '(__)_____-____' });
	$("#cep").mask('00.000-000', { placeholder: '__.___-___' });
	$("#cpf").mask('000.000.000-00', { placeholder: '___.___.___-__' });
	$("#cnpj").mask('00.000.000/0000-00', { placeholder: '___.___.___/____-__' });

});

// validaçao do cep
function limpaCep() {
	// Limpa valores do formulário de cep.
	$("#logradouro").val("");
	$("#cidade").val("");
	$("#bairro").val("");
}
$(document).ready(function () {


	//Quando o campo cep perde o foco.
	$("#cep").blur(function () {

		//Nova variável "cep" somente com dígitos.
		var cep = $(this).val().replace(/\D/g, '');

		//Verifica se campo cep possui valor informado.
		if (cep != "") {

			//Expressão regular para validar o CEP.
			var validacep = /^[0-9]{8}$/;

			//Valida o formato do CEP.
			if (validacep.test(cep)) {

				//Preenche os campos com "..." enquanto consulta webservice.
				$("#logradouro").val("...");
				$("#cidade").val("...");
				$("#bairro").val("...");
				$("#estado").val("...");

				//Consulta o webservice viacep.com.br/
				$.getJSON("https://viacep.com.br/ws/" + cep + "/json/", function (dados) {

					if (!("erro" in dados)) {
						//Atualiza os campos com os valores da consulta. 
						$("#logradouro").val(dados.logradouro);
						$("#cidade").val(dados.localidade);
						$("#bairro").val(dados.bairro);
						$("#estado").val(dados.uf);
					} //end if.
					else {
						//CEP pesquisado não foi encontrado.
						limpaCep();
						alert("CEP não encontrado.");
					}
				});
			} //end if.
			else {
				//cep é inválido.
				limpaCep();
				alert("Formato de CEP inválido.");
			}
		} //end if.
		else {
			//cep sem valor, limpa formulário.
			limpaCep();
		}
	});
});

//campos obrigatorios
const btenviar = $("#btenviar");

$('#form').on("submit", (event) => {

	event.preventDefault();

	const cpf = $('#cpf');
	const email = $('#email');
	const nome = $('#nome');
	const sobrenome = $('#sobrenome');
	const razaoSocial = $('#razaoSocial');
	const nomeFantasia = $('#nomeFantasia');
	const cnpj = $('#cnpj');
	const logradouro = $('#logradouro');
	const cidade = $('#cidade');
	const bairro = $('#bairro');
	const numero = $('#numero');
	const cep = $('#cep');
	const estado = $('#estado');
	const tele = $('#tele');
	
	
	if (cpf.value == false) {
        cpf.addClass("is-invalid");
        cpf.focus();
    } else {
        cpf.removeClass("is-invalid");
    }
	if (email.value == false) {
        email.addClass("is-invalid")
        email.focus()
    } else {
        email.removeClass("is-invalid");
    }
	if (nome.value == false) {
        nome.addClass("is-invalid");
        nome.focus();
    } else {
        nome.removeClass("is-invalid");
    }
	if (sobrenome.value == false) {
        sobrenome.addClass("is-invalid");
        sobrenome.focus();
    } else {
        sobrenome.removeClass("is-invalid");
    }
	if (razaoSocial.value == false) {
        razaoSocial.addClass("is-invalid");
        razaoSocial.focus();
    } else {
        razaoSocial.removeClass("is-invalid");
    }
	if (nomeFantasia.value == false) {
        nomeFantasia.addClass("is-invalid");
        nomeFantasia.focus();
    } else {
        nomeFantasia.removeClass("is-invalid");
    }
	if (cnpj.value == false) {
        cnpj.addClass("is-invalid");
        cnpj.focus();
    } else {
        cnpj.removeClass("is-invalid");
    }
	if (logradouro.value == false) {
        logradouro.addClass("is-invalid");
        logradouro.focus();
    } else {
        logradouro.removeClass("is-invalid");
    }
	if (cidade.value == false) {
        cidade.addClass("is-invalid");
        cidade.focus();
    } else {
        cidade.removeClass("is-invalid");
    }
	if (bairro.value == false) {
        bairro.addClass("is-invalid");
        bairro.focus();
    } else {
        bairro.removeClass("is-invalid");
    }
	if (numero.value == false) {
        numero.addClass("is-invalid");
        numero.focus();
    } else {
        numero.removeClass("is-invalid");
    }
	if (cep.value == false) {
        cep.addClass("is-invalid");
        cep.focus();
    } else {
        cep.removeClass("is-invalid");
    }
	if (estado.value == "Escolher...") {
        estado.addClass("is-invalid");
        estado.focus();
    } else {
        estado.removeClass("is-invalid");
    }
	if (tele.value == false) {
        tele.addClass("is-invalid");
        tele.focus();
    } else {
        tele.removeClass("is-invalid");
    }
	
});


//validaçao usando jquery validate
$(document).ready(function () {

	$("#form").validate({
		rules:{
			// cpf:{
			// 	required:true,
			// 	cpfBR:true,
			// 	maxlength:14,
			// 	minlength:14,
			// },
			// cnpj:{
			// 	required:true,
			// 	cnpjBR:true,
			// },
			// email:{
			// 	required:true,
			// 	email:true
			// },
			senha:{
				required:true,
				strongPassword:true,
			},
			senha2:{
				required:true,
				equalTo:"#senha",
			}
		}
	});
});


//força da senha
function verificaForcaSenha() 
{
	var numeros = /([0-9])/;
	var alfabeto = /([a-zA-Z])/;
	var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

	if($('.validarSenha').val().length<6) 
	{
		$('#password-status').html("<span style='color:red'>Fraco, insira no mínimo 6 caracteres</span>");
	} else {  	
		if($('.validarSenha').val().match(numeros) && $('.validarSenha').val().match(alfabeto) && $('.validarSenha').val().match(chEspeciais))
		{            
			$('#password-status').html("<span style='color:green'><b>Forte</b></span>");
		} else {
			$('#password-status').html("<span style='color:orange'>Médio, insira um caracter especial</span>");
		}
	}
}

