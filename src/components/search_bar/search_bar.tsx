import { useState, useRef } from 'react';
import './search_bar.css';
import icon from './search-svgrepo-com.svg'
type SearchBarProps = {
  handleSearch: (search: string) => void;
}
export default function SearchBar({handleSearch}: SearchBarProps) {
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick(){
    if(inputRef.current && !focus && search === ''){
      setFocus(true);
      inputRef.current.focus();
    }
    else{
      handleSearch(search);
    }
  }
  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>){
    if(e.key === 'Enter'){
      handleSearch(search);
    }
  }
  return (
    <div className="search-bar">
        <input type="text" className={`search-bar-input ${focus ? "active-input": search ? "active-input": "inactive-input"}`} ref={inputRef} onChange={(e)=>setSearch(e.target.value)} onBlur={()=>setFocus(false)} onFocus={()=>setFocus(true)} onKeyDown={(e)=>handleKeyPress(e)}/>
        <img src={icon} alt="search" onClick={()=> handleClick()}/>
    </div>
  );
}