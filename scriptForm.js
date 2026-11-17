document.getElementById('meuForm').addEventListener('submit', function (event) {

    event.preventDefault();

    // Capturando os valores
    const titulo = document.getElementById('titulo').value;
    const arquivo = document.getElementById('image').files[0];
    const rua = document.getElementById('local').value;
    const data = new Date();

    // Verificando se existe uma imagem
    if (!arquivo) {
        alert('Selecione uma imagem!');
        return;
    }

    // Criando o leitor de arquivos
    const leitor = new FileReader();

    leitor.onload = function () {

        // Recuperando as denúncias existentes
        let denuncias = JSON.parse(localStorage.getItem('denuncias')) || [];

        // Criando o objeto
        const novaDenuncia = {
            titulo: titulo,
            img: leitor.result,
            rua: rua,
            data: data.toLocaleDateString('pt-BR'),
            hora: data.toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit'
            })
        };

        // Adicionando a nova denúncia
        denuncias.push(novaDenuncia);

        // Salvando no localStorage
        localStorage.setItem('denuncias', JSON.stringify(denuncias));

        // Redirecionando
        window.location.href = 'dashboard.html';
    };

    // Iniciando a leitura da imagem
    leitor.readAsDataURL(arquivo);

});