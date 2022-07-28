var formulario = {
	iniciar: function () {
		this.mascaras();
		this.events();
		this.formValidate();
	},

	events: function () {
		$("#cep").on('blur', function () {
			formulario.buscarCep($(this));
		});
		$('#form').on("submit", (event) => {
			formulario.salvar();
		});
	},

	mascaras: function () {
		$("#tele").mask('(00)00000-0000', { placeholder: '(__)_____-____' });
		$("#cep").mask('00.000-000', { placeholder: '__.___-___' });
		$("#cpf").mask('000.000.000-00', { placeholder: '___.___.___-__' });
		$("#cnpj").mask('00.000.000/0000-00', { placeholder: '___.___.___/____-__' });
	},

	formValidate: function () {
		$("#form").validate({
			rules: {
				cpf: {
					required: true,
					cpfBR: true,
					maxlength: 14,
					minlength: 14,
				},
				cnpj: {
					required: true,
					cnpjBR: true,
				},
				email: {
					required: true,
					email: true
				},
				senha: {
					required: true,
					strongPassword: formulario.strongPassword
				},
				senha2: {
					required: true,
					equalTo: "#senha",
				},
				termos: {
					required: true,
				}
			}
		});
	},

	pessoa: function (tipo) {
		if (tipo == "fisica") {
			$(".juridica").hide();
		} else if (tipo == "juridica") {
			$(".juridica").show();
		}
	},

	buscarCep: function (element) {
		var cep = element.val().replace(/\D/g, '');
		if (cep != "") {
			var validacep = /^[0-9]{8}$/;
			if (validacep.test(cep)) {
				$("#logradouro").val("...");
				$("#cidade").val("...");
				$("#bairro").val("...");
				$("#estado").val("...");
				$.getJSON("https://viacep.com.br/ws/" + cep + "/json/", function (dados) {
					if (!("erro" in dados)) {
						$("#logradouro").val(dados.logradouro);
						$("#cidade").val(dados.localidade);
						$("#bairro").val(dados.bairro);
						$("#estado").val(dados.uf);
					} else {
						formulario.limpaCep();
						alert("CEP não encontrado.");
					}
				});
			} else {
				formulario.limpaCep();
				alert("Formato de CEP inválido.");
			}
		} else {
			formulario.limpaCep();
		}
	},

	salvar: function () {
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

		if (!cpf.val().length) {
			cpf.addClass("is-invalid");
			cpf.focus();
		} else {
			cpf.removeClass("is-invalid");
		}

		if (!email.val().length) {
			email.addClass("is-invalid")
			email.focus()
		} else {
			email.removeClass("is-invalid");
		}
		if (!nome.val().length) {
			nome.addClass("is-invalid");
			nome.focus();
		} else {
			nome.removeClass("is-invalid");
		}
		if (!sobrenome.val().length) {
			sobrenome.addClass("is-invalid");
			sobrenome.focus();
		} else {
			sobrenome.removeClass("is-invalid");
		}
		if (!razaoSocial.val().length) {
			razaoSocial.addClass("is-invalid");
			razaoSocial.focus();
		} else {
			razaoSocial.removeClass("is-invalid");
		}
		if (!nomeFantasia.val().length) {
			nomeFantasia.addClass("is-invalid");
			nomeFantasia.focus();
		} else {
			nomeFantasia.removeClass("is-invalid");
		}
		if (!cnpj.val().length) {
			cnpj.addClass("is-invalid");
			cnpj.focus();
		} else {
			cnpj.removeClass("is-invalid");
		}
		if (!logradouro.val().length) {
			logradouro.addClass("is-invalid");
			logradouro.focus();
		} else {
			logradouro.removeClass("is-invalid");
		}
		if (!cidade.val().length) {
			cidade.addClass("is-invalid");
			cidade.focus();
		} else {
			cidade.removeClass("is-invalid");
		}
		if (!bairro.val().length) {
			bairro.addClass("is-invalid");
			bairro.focus();
		} else {
			bairro.removeClass("is-invalid");
		}
		if (!numero.val().length) {
			numero.addClass("is-invalid");
			numero.focus();
		} else {
			numero.removeClass("is-invalid");
		}
		if (!cep.val().length) {
			cep.addClass("is-invalid");
			cep.focus();
		} else {
			cep.removeClass("is-invalid");
		}
		if (!estado.value == "Escolher...") {
			estado.addClass("is-invalid");
			estado.focus();
		} else {
			estado.removeClass("is-invalid");
		}
		if (!tele.val().length) {
			tele.addClass("is-invalid");
			tele.focus();
		} else {
			tele.removeClass("is-invalid");
		}
	},

	limpaCep: function () {
		$("#logradouro").val("");
		$("#cidade").val("");
		$("#bairro").val("");
	},

	strongPassword: function () {
		var numeros = /([0-9])/;
		var alfabeto = /([a-zA-Z])/;
		var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

		if ($('.validarSenha').val().length < 6) {
			$('#password-status').html("<span style='color:red'>Fraco, insira no mínimo 6 caracteres</span>");
		} else {
			if ($('.validarSenha').val().match(numeros) && $('.validarSenha').val().match(alfabeto) && $('.validarSenha').val().match(chEspeciais)) {
				$('#password-status').html("<span style='color:green'><b>Forte</b></span>");
			} else {
				$('#password-status').html("<span style='color:orange'>Médio, insira um caracter especial</span>");
			}
		}
	}
};

$(document).ready(function() {
	formulario.iniciar();
});
