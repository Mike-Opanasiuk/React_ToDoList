import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Main } from "../Main/Main"

export const App = () => {
    return (
        <div className="container d-flex flex-column" style={{ "height": "100vh" }}>

            <Header></Header>

            <Main></Main>

            <Footer></Footer>
        </div>
    )
}