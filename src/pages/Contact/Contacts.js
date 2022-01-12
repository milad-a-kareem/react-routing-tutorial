import { Link, Routes, Route , useSearchParams } from "react-router-dom";
import { useRef, useState } from "react";

import Contact from "./Contact";
const Contacts = (props)=>{
    const input = useRef()
    const [searchParams, setSearchParams] = useSearchParams()

    const [options, setOptions] = useState(['gmail', 'twitter', 'facebook', 'instagram'])
    
    const styles = {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',

    }

    const searchHandler = () =>{
        console.log(input.current.value)
        setSearchParams({search: input.current.value})
    }

    return( 
        <div style={{padding:'20px'}}>
            <div style={styles}>
                <input type='text' ref={input}/>
                <button onClick={searchHandler}>Search</button>
            </div>
            <h1>Contacts Options</h1>
            {options.filter(word => word.includes(searchParams.get('search') ? searchParams.get('search'):'')).map( item =>  <li key={item}><Link  to={item}>{item}</Link></li>)}
            <Routes>
                <Route path=':contactOP' element={<Contact/>} />
            </Routes>
        </div>
    )
}

export default Contacts