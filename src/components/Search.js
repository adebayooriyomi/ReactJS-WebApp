import React, {useState} from 'react';
import { useNavigate } from 'react-router';


export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/SearchResults/${searchTerm}`)
      }
    
      const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
      }
    
    return(
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={handleInputChange} 
                placeholder="Search for Topics..." 
                style={sinput}
            />
        </form>
    )
}

const sinput = {
    height: '40px',
    padding: '5px',
    borderRadius: '5px',
    webkitTextSizeAdjust: 'none',
    textSizeAdjust: 'none',
}
