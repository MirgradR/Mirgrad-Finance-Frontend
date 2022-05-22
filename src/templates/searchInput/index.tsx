import React from 'react'
import { TemplatesIcons } from '../../assets'
import './style.css'

interface Props {
    placeholder: string,
    onChange: any
}

const SearchInput: React.FC<Props> = (props) => {
    return <div className='search-block'>
        <img src={TemplatesIcons.searchIcon} alt='Search' className='search-icon' />
        <input {...props} className='search-input' type='text'/>
    </div>
}

export default SearchInput
