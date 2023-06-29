function calcular() {
    var n1 = window.document.getElementById('n1')
    var n2 = document.getElementById('n2')
    if (n1.value.length == 0 || n2.value.length == 0){
        window.alert('ERRO! Confira os dados inseridos.')
    }else if (n2.value > 1000){
        window.alert('ERRO! O número excedeu a capacidade da máquina de realizar contas.')
    }else {
    var pri = Number(n1.value)
    var seg = Number(n2.value)
    var r = ''
    var resp = window.document.getElementById('resposta')
    r = pri*seg
    c = 0 
    resp.innerHTML = `A tabuada do ${pri} é: <br>`
    do{
        r = c * pri
        resp.innerHTML += `${c} x ${pri} = ${r} <br>` 
        c ++
    } while (c <= seg)
}
}
