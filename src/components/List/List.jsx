import { ListItem } from "../ListItem/ListItem"

export const List = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="d-flex mt-5">
                        <input className="form-control me-sm-2" type="search" placeholder="Enter a new task" />
                        <button className="btn btn-secondary my-2 my-sm-0">
                            <i className="bi bi-plus-lg" style={{color: "green"}}></i>
                        </button>
                    </div>
                    <div className="container mt-5">
                        <div className="row ul list-group">
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}