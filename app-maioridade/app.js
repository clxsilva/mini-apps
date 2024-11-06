/**
 * Validação da Maioridade
 * @author Claudio Silva
 */

// função para validação de maioridade
function validar(event) {
    // a linha abaixo desabilita o comportamento padrão de envio do formulário
    event.preventDefault()
    // alert("teste de envio")
    let nome = document.getElementById('nome').value
    // alert(nome)
    // console.log(nome)
    let idade = document.getElementById('idade').value

    // saída
    document.getElementById('aluno').value = `Aluno: ${nome}`

    if (idade < 18) {
        document.getElementById('status').value = "Menor de idade"
    } else {
        document.getElementById('status').value = "Maior de idadae"
    }
} 