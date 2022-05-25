import React from 'react'
import ReactPaginate from 'react-paginate'
import './style.css'

interface Props {
    handlePageClick: (event: any) => void;
    count: number;
    limit: number;
}

const Paginator: React.FC<Props> = ({ handlePageClick, count, limit }) => {
    const pageCount = Math.ceil(count / limit);
    
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
        />
    )
}

export default Paginator
