import React from "react";

const Pagination = (props) => {
    return (
        <nav aria-label="...">
            <ul onClick={(e) => {
                    const currentPage = Number(e.target.textContent);
                    props.setCurrentPage(currentPage);
                    props.getUsers(currentPage);
                }} class="pagination pagination-sm">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span onClick={() => {
                                    // console.log(this.props.pagesCount + this.props.pageSize)
                                    const prevPage = props.pagesCount - props.pageSize
                                    if (prevPage > 0) {
                                        props.setPagesCount(prevPage)
                                    }
                                }} aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {props.getPageItems()}
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span onClick={(e) => {
                                    // console.log(this.props.pagesCount + this.props.pageSize)
                                    props.setPagesCount(props.pagesCount + props.pageSize)
                                }} aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </ul>
        </nav>
    )
}

export default Pagination;