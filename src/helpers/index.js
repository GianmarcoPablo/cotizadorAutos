export function obtenerDiferencia(year){
    return new Date().getFullYear() - year
}

export function calcularMarca(marca){
    let incremento 

    if(marca === "1"){
        incremento = 1.30
    }
    else if(marca === "2"){
        incremento = 1.15
    }
    else if(marca === "3"){
        incremento = 1.05
    }

    
    return incremento
}

export function calcularPlan(plan){
    if(plan === "1"){
        return 1.20
    }else{
        return 1.50
    }
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString('es-PE', {
        style: 'currency',
        currency: 'PEN',
    })
}