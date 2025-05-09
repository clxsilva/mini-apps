/**
 * Validação da Maioridade
 * @author Claudio Silva
 */

// função para validação de maioridade
function validate(event) {
    // a linha abaixo desabilita o comportamento padrão de envio do formulário
    event.preventDefault()
    // alert("teste de envio")
    let nome = document.getElementById('name').value
    // alert(nome)
    // console.log(nome)
    let idade = document.getElementById('age').value

    // saída
    document.getElementById('student').value = `Student: ${nome}`

    if (idade < 18) {
        document.getElementById('status').value = "Under age"
    } else {
        document.getElementById('status').value = "Of age"
    }
} 