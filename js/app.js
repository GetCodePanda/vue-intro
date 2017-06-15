// intro to vue ...

// declarative rendering ....
// condition and loop ..
// handling user inputs ...
// components ...

// declarative rendering  ...

const rendering = new Vue({
    el:"#rendering",
    data:{
        renderingData:"Haha"
    }
});

// condtion 

const condition = new Vue({
    el:"#condition",
    data:{
        isVisible:true,
        myMsg:"I Love Vue ...."
    }
})

// loop

const loop = new Vue({
    el:"#loop",
    data:{
        myFavQuotes:[
            {
                id:0,
                author:"Steve Jobs",
                body:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma -- which is living with the results of other people’s thinking. Don’t let the noise of other’s opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They some how already know what you truly want. Everything else is secondary."
            },
            {
                id:1,
                author:"Will Smith",
                body:"If you're not making someone else's life better, then you're wasting your time. Your life will become better by making other lives better"
            },
            {
                id:2,
                author:"APJ Sir",
                body:'Success Is When Your “Signature” Changes to “Autograph”'
            }
        ]
    }
});

// handling user input ....
// event handling ...

const event = new Vue({
    el:"#event",
    data:{
        msg:"Vue"
    },
    methods:{
        myMsg:function(){
            this.msg = `Hi Awesome ${this.msg}`;
        }
    }
});

// data binding ...

const dataBinding = new Vue({
    el:"#data",
    data:{
        msg:"Hahahahahaha......."
    }
})  


Vue.component('quote-card' ,{
    props:["quote"],
    template:`<div 
            style="
                color:white;
                background-color:teal;
                padding:20px;
                margin-bottom:5px;
                font-family: 'Pacifico', cursive;
            "
        >
            <p>
                "{{quote.body}}"
            </p>
            --{{quote.author}}
        </div>
    
    `
});

const component = new Vue({
    el:"#component",
    data:{
        myFavQuotes:[
            {
                id:0,
                author:"Steve Jobs",
                body:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma -- which is living with the results of other people’s thinking. Don’t let the noise of other’s opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They some how already know what you truly want. Everything else is secondary."
            },
            {
                id:1,
                author:"Will Smith",
                body:"If you're not making someone else's life better, then you're wasting your time. Your life will become better by making other lives better"
            },
            {
                id:2,
                author:"APJ Sir",
                body:'Success Is When Your “Signature” Changes to “Autograph”'
            }
        ] 
    }
})