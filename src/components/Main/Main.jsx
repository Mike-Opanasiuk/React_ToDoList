import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { List } from "../List/List"

export const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mt-5 pt-3 mb-5"> {/* mt-5 and pt-3 adjust spacing to account for the fixed header */}
                <List></List>
            </div>
            <Footer></Footer>
        </div>
    )
}