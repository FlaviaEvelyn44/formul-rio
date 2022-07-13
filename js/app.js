function pessoa(tipo){
    if(tipo=="fisica"){
        document.getElementById("fisica").style.display = "inline";
        document.getElementById("juridica").style.display = "none";
    }else if(tipo=="juridica"){
        document.getElementById("fisica").style.display = "none";
        document.getElementById("juridica").style.display = "inline";
    }
}

$(document).ready(function () {
	$("#tele").mask('(00)0000-0000', { placeholder: '(__)_____-____' });
	$("#cep").mask('00.000-000', { placeholder: '__.___-___' });
	$("#cpf").mask('000.000.000-00', { placeholder: '___.___.___-__' });
	$("#cnpj").mask('00.000.000/0000-00', { placeholder: '___.___.___/____-__' });
	$("#cpfpj").mask('000.000.000-00', { placeholder: '___.___.___-__' });

})

$(document).ready(function () {

	function buscarPorCep() {
		// Limpa valores do formulário de cep.
		$("#logradouro").val("");
		$("#cidade").val("");
		$("#bairro").val("");
	}

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

				//Consulta o webservice viacep.com.br/
				$.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

					if (!("erro" in dados)) {
						//Atualiza os campos com os valores da consulta. 
						$("#logradouro").val(dados.logradouro);
						$("#cidade").val(dados.localidade);
						$("#bairro").val(dados.bairro);
					} //end if.
					else {
						//CEP pesquisado não foi encontrado.
						buscarPorCep();
						alert("CEP não encontrado.");
					}
				});
			} //end if.
			else {
				//cep é inválido.
				buscarPorCep();
				alert("Formato de CEP inválido.");
			}
		} //end if.
		else {
			//cep sem valor, limpa formulário.
			buscarPorCep();
		}
	});
});

/*function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
		
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
		
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
		
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}
*/



