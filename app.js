const args = process.argv.slice(2)

let arrNum = []
const loadNumber = () => {
    args.slice(1).forEach(value => {
        let number = Number(value.substring(5))
        arrNum.push(number)
    })
}
loadNumber()

let signo = args[0].substring(12)

let resultado = {
    operator: signo,
    ops: arrNum,
    res: 0
}

// Recordar aprender.
//función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

// hacer metodo para ignorar los ops no válidos

switch (args[0]) {
    case "--operation=/":
        if (arrNum.length >= 2) {
            const totalDiv = arrNum.reduce((p, c) => p / c)
            resultado.res = totalDiv
            console.log("operación : ",resultado);
        } else {
            console.log("ERROR: El número de operandos debe ser mayor que 1");
        }
        break;
    case "--operation=*":
        if (arrNum.length >= 2) {
            const totalMult = arrNum.reduce((p, c) => p * c)
            resultado.res = totalMult
            console.log("operación : ",resultado);
        }else {
            console.log("ERROR: El número de operandos debe ser mayor que 1");
        }
        break
    case "--operation=^":
        if (arrNum.length > 1 && arrNum.length < 3) {
            const totalPotencia = arrNum[0] ** arrNum[1]
            resultado.res = totalPotencia
            console.log("operación : ",resultado);
        } else {
            console.log("ERROR: El número de operandos debe ser 2");
        }
        break;
    case "--operation=@":
        if (arrNum.length === 1) {
            const totalRaiz = Math.sqrt(arrNum[0])
            resultado.res = totalRaiz
            console.log("operación : ",resultado);
        } else {
            console.log("ERROR: El número de operandos debe ser 1");
        }
        break
    default:
        console.log("ERROR: Parámetros erróneos");
        break;
}