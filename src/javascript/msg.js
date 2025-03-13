document.getElementById('contactForm').addEventListener('submit', function(event) {
		event.preventDefault(); // Impede o envio padrão do formulário

		// Captura os valores dos campos
		var nome = document.getElementById('nome').value;
		// var email = document.getElementById('email').value;
		var msg = document.getElementById('msg').value;

		// Cria a mensagem que será enviada via WhatsApp
		var mensagemWhatsApp =  "Mensagem enviada Pelo Site (LINK) " + "%0ANome: " + nome /* + "%0AEmail: " + email*/ + "%0AMensagem: " + msg;

		// Número de telefone para o qual a mensagem será enviada (substitua pelo seu número)
		var numeroWhatsApp = "5513982114996"; // Exemplo: 55 é o código do Brasil, 11 é o DDD e 999999999 é o número

		// Gera o link do WhatsApp
		var linkWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + mensagemWhatsApp;

		// Redireciona o usuário para o WhatsApp
		window.location.href = linkWhatsApp;
});