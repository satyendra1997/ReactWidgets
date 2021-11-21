import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert=({language,text})=>
{
    const [translatedText,setTranslatedText]=useState('');
    const [debounceText,setDebounceText]=useState(text);

    useEffect(
        ()=>{
         const timerId=setTimeout(()=>{
               setDebounceText(text);
             },500);
         

         return ()=>
         {
             clearTimeout(timerId);
         }

        },[text]
    );
    useEffect(()=>{
        const translatefun= async ()=>{
          const {data}= await axios.post('https://translation.googleapis.com/language/translate/v2',{},{

                params:{
                    q:debounceText,
                    target:language.value,
                    key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
                });

              setTranslatedText(data.data.translations[0].translatedText);  
        };
       
     translatefun();

    },[language,debounceText]);
    return (
        <div>
            {translatedText}
        </div>
    )
}

export default Convert;