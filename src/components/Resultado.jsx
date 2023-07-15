import useCotizador from "../hooks/useCotizador"
const Resultado = () => {
    const {resultado,datos} = useCotizador()
    if(resultado === 0) return null
    return (
        <div>Resultado</div>
    )
}

export default Resultado