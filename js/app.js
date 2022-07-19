function pessoa(tipo){
    if(tipo=="fisica"){
        $(".juridica").hide();
    }else if(tipo=="juridica"){
        $(".juridica").show();
    }
}

$(document).ready(function () {
	$("#tele").mask('(00)00000-0000', { placeholder: '(__)_____-____' });
	$("#cep").mask('00.000-000', { placeholder: '__.___-___' });
	$("#cpf").mask('000.000.000-00', { placeholder: '___.___.___-__' });
	$("#cnpj").mask('00.000.000/0000-00', { placeholder: '___.___.___/____-__' });
	$("#cpfpj").mask('000.000.000-00', { placeholder: '___.___.___-__' });

})

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


//validaçao usando jquery validate
$(document).ready(function(){

	$("#form").validate({
		rules:{
			cpf:{
				required:true,
				cpfBR:true,
				maxlength:14,
				minlength:14,
			},
			cnpj:{
				required:true,
				cnpjBR:true,
			},
		    email:{
				required:true,
				email:true,
			}
		}
	})
})

const btenviar = document.getElementById("btenviar")

form.addEventListener("submit", (event) => {

	const cpf = document.getElementById('cpf')

	if (cpf.value == false) {
        cpf.classList.add("is-invalid");
        cpf.focus()
    } else {
        cpf.classList.remove("is-invalid")
    }
})


/**jQuery.validator.setDefaults({
	debug: true,
	success: "valid"
});


$( ".validarSenha" ).validate({
	rules: {
	password: "required",
	password_again: {
		equalTo: "#password"
	}
	}
});



function validarSenha() {
    $('#senha').value();
	$('#confirmarSenha').value();

	if (senha != confirmarSenha) {
	    confirmarSenha.setCustomValidity("Senhas diferentes!");
	    return false;
	} else {
	    return true;
	}
}
*/

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