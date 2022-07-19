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


const btenviar = document.getElementById("btenviar")

form.addEventListener("submit", (event) => {

	event.preventDefault()

	const cpf = document.getElementById('cpf')
	const email = document.getElementById('email')
	const nome = document.getElementById('nome')
	const sobrenome = document.getElementById('sobrenome')
	const razaoSocial = document.getElementById('razaoSocial')
	const nomeFantasia = document.getElementById('nomeFantasia')
	const cnpj = document.getElementById('cnpj')
	const logradouro = document.getElementById('logradouro')
	const cidade = document.getElementById('cidade')
	const bairro = document.getElementById('bairro')
	const numero = document.getElementById('numero')
	const cep = document.getElementById('cep')
	const estado = document.getElementById('estado')
	const tele = document.getElementById('tele')
	
	
	
	

	if (cpf.value == false) {
        cpf.classList.add("is-invalid");
        cpf.focus()
    } else {
        cpf.classList.remove("is-invalid")
    }
	if (email.value == false) {
        email.classList.add("is-invalid");
        email.focus()
    } else {
        email.classList.remove("is-invalid")
    }
	if (nome.value == false) {
        nome.classList.add("is-invalid");
        nome.focus()
    } else {
        nome.classList.remove("is-invalid")
    }
	if (sobrenome.value == false) {
        sobrenome.classList.add("is-invalid");
        sobrenome.focus()
    } else {
        sobrenome.classList.remove("is-invalid")
    }
	if (razaoSocial.value == false) {
        razaoSocial.classList.add("is-invalid");
        razaoSocial.focus()
    } else {
        razaoSocial.classList.remove("is-invalid")
    }
	if (nomeFantasia.value == false) {
        nomeFantasia.classList.add("is-invalid");
        nomeFantasia.focus()
    } else {
        nomeFantasia.classList.remove("is-invalid")
    }
	if (cnpj.value == false) {
        cnpj.classList.add("is-invalid");
        cnpj.focus()
    } else {
        cnpj.classList.remove("is-invalid")
    }
	if (logradouro.value == false) {
        logradouro.classList.add("is-invalid");
        logradouro.focus()
    } else {
        logradouro.classList.remove("is-invalid")
    }
	if (cidade.value == false) {
        cidade.classList.add("is-invalid");
        cidade.focus()
    } else {
        cidade.classList.remove("is-invalid")
    }
	if (bairro.value == false) {
        bairro.classList.add("is-invalid");
        bairro.focus()
    } else {
        bairro.classList.remove("is-invalid")
    }
	if (numero.value == false) {
        numero.classList.add("is-invalid");
        numero.focus()
    } else {
        numero.classList.remove("is-invalid")
    }
	if (cep.value == false) {
        cep.classList.add("is-invalid");
        cep.focus()
    } else {
        cep.classList.remove("is-invalid")
    }
	if (estado.value == "Escolher...") {
        estado.classList.add("is-invalid");
        estado.focus()
    } else {
        estado.classList.remove("is-invalid")
    }
	if (tele.value == false) {
        tele.classList.add("is-invalid");
        tele.focus()
    } else {
        tele.classList.remove("is-invalid")
    }
	
})


//validaçao usando jquery validate
$(document).ready(function () {

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
				email:true
			},
			senha:{
				required:true,
				strongPassword:true,
			},
			senha2:{
				required:true,
				equalTo:"#senha"
			}
		}
	})
})

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

