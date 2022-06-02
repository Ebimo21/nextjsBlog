import { Html, Head, Main, NextScript } from "next/document";
import { useState, useEffect } from "react";


export default function Document(){

    const [darkTheme, setDarkTheme] = useState(false);
    const themeColor = darkTheme? 'dark': '';
    useEffect(() => {
        
    
      
    }, [darkTheme])
    
    return (
        <Html className={themeColor}>
            <Head />
                <body className={`dark:bg-black dark:text-white`}>
                    <Main />
                    <NextScript />
                </body>
        </Html>
    )
}