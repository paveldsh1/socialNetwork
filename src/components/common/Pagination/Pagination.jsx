import React from "react";

const Pagination = (props) => {
    return (
        <nav aria-label="...">
            <ul onClick={(e) => {
                    const currentPage = Number(e.target.textContent);
                    props.setCurrentPage(currentPage);
                    props.requestUsers(currentPage);
                }} className="pagination pagination-sm">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item">
                            {/* <a className="page-link" href="#" aria-label="Previous"> */}
                                <span className="page-link" onClick={() => {                                    const prevPage = props.pagesCount - props.pageSize
                                    if (prevPage > 0) {
                                        props.setPagesCount(prevPage)
                                    }
                                }} aria-hidden="true">&laquo;</span>
                            {/* </a> */}
                        </li>
                        {props.getPageItems()}
                        <li className="page-item">
                            {/* <a className="page-link" href="#" aria-label="Next" onClick={(e) => e.preventDefault()}> */}
                                <span className="page-link" onClick={(e) => {
                                    props.setPagesCount(props.pagesCount + props.pageSize)
                                }} aria-hidden="true">&raquo;</span>
                            {/* </a> */}
                        </li>
                    </ul>
                </nav>
            </ul>
        </nav>
    )
}

export default Pagination;