export const ListItem = () => {
    return (
        // <div className="col-10 mt-3 ms-2">
        <div className="mt-3">
            <li className="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
                <span className="">Test text</span>
                <button className="btn">
                <i className="bi bi-file-earmark-x" style={{color: "red"}}></i>
                </button>
                {/* <span className="badge bg-danger rounded-pill"></span> */}
            </li>
        </div>
    )
}