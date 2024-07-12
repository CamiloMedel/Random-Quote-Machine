import React, {useState, useEffect} from 'react';

function QuoteBox(){
    const quoteData = [
        {
            "quote": "If you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced.",
            "author": "Vincent Willem van Gogh"
        },
        {
            "quote": "“To see, we must forget the name of the things we are looking at",
            "author": "Claude Monet"
        },
        {
            "quote": "Oh, man, I got a million dreams. That's all I do is dream. All the time... This is dreaming",
            "author": "Duke Ellington"
        },
        {
            "quote": "Once you do the hard stuff, it becomes not that hard",
            "author": "Rigby, Regular Show"
        }
    ]

    const [themeColor, setThemeColor] = useState({main: "lavender", hover: "purple"});
    const [quote, setQuote] = useState("this is a quote !");
    const [author, setAuthor] = useState("Author's Name")
    
   //on mount
    useEffect(() => {
        newQuote();
    }, []);

    //change background to main theme color
    useEffect(() => {
        document.querySelector("body").style.background = themeColor.main;
    }, [themeColor])

    const backgroundStyle = {background: themeColor.main, "--hover-color": themeColor.hover};
    //const textStyle = {color: themeColor.main};

    function newColor(){
        //changes themeColor state's main and hover colors to random colors
        const hexCodes = ["4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
        let newColorHex = "#";
        let newHoverHex = "#";
        for(let i = 0; i < 6; i++){
            const newHex = hexCodes[Math.floor(Math.random() * hexCodes.length-1)];
            if(!newHex){
                i--;
                continue
            }
            newColorHex += newHex;
            newHoverHex += hexCodes[hexCodes.findIndex(element => element == newHex)+1]
        }
        
        return {main: newColorHex , hover: newHoverHex};
    }

    function newQuote(){
        //sets a new quote, author, and color
        const filteredQuotes = quoteData.filter((currQuote) => currQuote.quote !== quote);
        const newQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
        setQuote(newQuote.quote)
        setAuthor(newQuote.author)
        setThemeColor(newColor())
    }

    return(
        <div id="quote-box">
            <div id="text-container">
                <h2 id="text"><i className="fa-solid fa-quote-left"></i> <mark style={backgroundStyle}>{quote}</mark> <i className="fa-solid fa-quote-right"></i></h2>
            </div>
            <h3 id="author">- {author}</h3>
            <div id="button-container">
                <button id="new-quote" className="button" style={backgroundStyle} onClick={newQuote}>New Quote</button>
                <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" style={backgroundStyle} className="button">Tweet <i className="fa-brands fa-twitter" style={{color: "white"}}></i></a>
            </div>
        </div>
    )
}

export default QuoteBox