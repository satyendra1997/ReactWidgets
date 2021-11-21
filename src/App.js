import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [{
    title: 'What is React Js',
    content: 'React js is front end Framework'
},
{
    title: 'What is use',
    content: 'React js favorite js library among the engineers'
},
{
    title: 'How do you use React',
    content: 'React Js is used by creatin components'
}
];

const options = [
    {
        label: "The Red is Danger"
        ,
        value: "red"
    },
    {
        label: "The Sky is Blue"
        ,
        value: "blue"
    },
    {
        label: "The green is everywhere"
        ,
        value: "green"
    }
];

const showAccordion=()=>
{
    if(window.location.pathname==='/')
    return <Accordion items={items}/>
}

const showSearch=()=>
{
    if(window.location.pathname==='/Search')
    return <Search/>
}
const showDropdown=()=>
{
    if(window.location.pathname==='/Dropdown')
    return <Dropdown/>
}
const showTranslate=()=>
{
    if(window.location.pathname==='/Translate')
    return <Translate/>
}
const App = () => {
    
    const [selected,setSelected]=useState(options[0]);

    const [showDropDown,setShowDropDown]=useState(true);
    return (
        <div>
            {/* <Accordion items={items}/> */}
            {/* <Search/> */}
            {/* <button
             onClick={()=>{setShowDropDown(!showDropDown)}}
            >ToggleDropDown</button>
            {
                showDropDown?
            <Dropdown label="Select a Color" onSelectChange={setSelected} selected={selected} options={options} />:null
            } */}
            {/* <Translate/> */}
            <Header/>
           <Route path='/'>
                <Accordion items={items}/>
           </Route>
           <Route path='/Search'>
                <Search/>
           </Route>
           <Route path='/Translate'>
                <Translate/>
           </Route>
           <Route path='/Dropdown'>
                <Dropdown label="Select a Color" onSelectChange={setSelected} selected={selected} options={options}/>
           </Route>
        </div>
    )
}

export default App;