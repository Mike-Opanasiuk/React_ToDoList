export const ListItem = ({data}) => {
    return (
        <div className="mt-3">
            <li className="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
                <span>{data.title}</span>
                <button className="btn">
                <i className="bi bi-file-earmark-x" style={{color: "red"}}></i>
                </button>
            </li>
        </div>
    )
}