import AppSeguro from "./components/AppSeguro"
import { CotizadorProvider } from "./context/CotizadorProvider"
const App = () => {
    return (
        <div>
            <CotizadorProvider>
                <AppSeguro />
            </CotizadorProvider>
        </div>
    )
}

export default App