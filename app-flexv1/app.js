/**
 * App Flex V1
 * @author Claudio Silva
 */

function calculate(event) {
    event.preventDefault()
    let etanol = document.getElementById('txtEtanol').value
    let gasolina = document.getElementById('txtGasolina').value
    if (etanol < 0.7 * gasolina) {
        document.getElementById('status').src="img/etanol.png"
    } else {
        document.getElementById('status').src="img/gasolina.png"
    }
}

function clean() {
    document.getElementById('status').src="img/neutro.png"
}