import React from 'react'

interface SearchBoxProps {
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}
const SearchBox: React.FC<SearchBoxProps> = ({onChangeHandler}) => {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden">
      <div className="md:flex">
          <div className="w-full p-3">
            <div className="relative">
              <input 
                type="text" 
                className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                placeholder='Search Monsters' 
                name=""
                onChange={onChangeHandler}
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default SearchBox