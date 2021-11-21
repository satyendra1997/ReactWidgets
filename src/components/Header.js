import React from "react";
import Accordion from "./Accordion";
import Link from "./Link";

const Header=()=>
{
   return(
       <div className="ui secondary pointing menu">
       <Link href="/" className="item">
           Accordion
       </Link>
       <Link href="/Search" className="item">
           Search
       </Link>
       <Link href="/Dropdown" className="item">
        Dropdown
       </Link>
       <Link href="/Translate" className="item">
       Translate
       </Link>
       </div>
   );
}

export default Header;