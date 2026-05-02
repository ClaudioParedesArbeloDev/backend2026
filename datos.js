const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject("No se puede dividir por cero")
        } else { 
            resolve(dividendo / divisor)
        }
    })
}

const funcionAsincronica = async() => {
    try{
        let resultado = await dividir( 10, 2)
        console.log(resultado)
    }
    catch(err){
        console.log(err)
    }
}

funcionAsincronica()

dividir(6, 0)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    })

function espera (){
    setTimeout(() => {
        console.log("esto no tiene espera")
    }, 0)
}
console.log("esto es sincrono")
console.log("esto es sincrono")

espera()

console.log("esto esta despues de la espera")