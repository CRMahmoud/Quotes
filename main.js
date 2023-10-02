var button = document.getElementById('button')

var quotes= [
    {
        author : "--Jim Rohn",
        quote : "Beware of what you become in pursuit of what you want."
    } 
    ,
    {
        author : "--Epictetus",
        quote : "It\'s not what happens to you, but how you react to it that matters."
    }
    ,
    {
        author : '--Frank Sinatra',
        quote : "The best revenge is massive success."
    }
    ,
    {   author : '--Wayne Gretzy', 
        quote : 'You miss 100% of the shots you don\'t take.'
    }
    , 
    {
        author: "--Nelson Mandela",
        quote : "Resentment is like drinking poison and waiting for your enemies to die."
    }
];


var cartonaa;

button.addEventListener('click', function(){

    var quote = Math.floor(Math.random() * quotes.length);

    for(var i =0 ; i<2 ; i++)
    {


        var z = quotes[quote].author;
        var x = quotes[quote].quote;


    }

   
    document.getElementById('quoteAuther').innerHTML=z;
    document.getElementById('qoute').innerHTML=x;



})