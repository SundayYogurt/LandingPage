import React from 'react'

interface SearchProps {
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="mb-6 flex justify-center">
            <input
                type="text"
                className="input input-bordered w-1/2"
                placeholder="ค้นหาชื่อเมนู..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default Search
