const quotes=[
{
    quote:"To live is the rarest thing in the world. Most people exist, that is all.",
    author:"Oscar Wilde"
},
{
    quote:"That it will never come again is what makes life so sweet.",
    author:"Emily Dickinson"
},
{
    quote:"It is never too late to be what you might have been.",
    author:"George Eliot"
},
{
    quote:"Be kind, for everyone you meet is fighting a hard battle.",
    author:"Plato"
},
{
    quote:"Unable are the loved to die for love is immortality.",
    author:"Emily Dickinson"
},
{
    quote:"Let me live, love, and say it well in good sentences.",
    author:"Sylvia Plath"
},
{
    quote:"Don't let your happiness depend on something you may lose.",
    author:"C.S. Lewis"
},
{
    quote:"Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.",
    author:"Voltaire"
},
{
    quote:"Life is tough my darling, but so are you.",
    author:"Stephanie Bennett Henry"
},
{
    quote:"Self-awareness and self-love matter. Who we are is how we lead.",
    author:"Brene Brown"
}
]
const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");


//document.write(Math.floor(Math.random()*10));
const todaysQuotes= quotes[Math.floor(Math.random()*quotes.length)];
//floor ->    1.9 ->1 , 2.3 -> 2 , 5.5->5
//round -> 1.4 ->1 , 1.6->2
//ceil -> 1.3 -> 2 , 2.6 -> 3
quote.innerText=`${todaysQuotes.quote}\n`;
author.innerText=todaysQuotes.author;

