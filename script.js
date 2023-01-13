function whoWillWin() {
    document.write("Which Turtle will win?")
}



function button1Function() {
    alert("You Lost!");
}
let button1 = document.getElementById("button1");
button1.addEventListener("submit", button1Function);


function button2Function() {
    alert("You Lost!");
}
let button2 = document.getElementById("button2");
button2.addEventListener("click", button2Function);

function button3Function() {
    alert("You Won WOOOOO!");
}
let button3 = document.getElementById("button3");
button3.addEventListener("click", button3Function);


function username() {
    let username = prompt("Identify yourself!");

    console.log("username", username);
    while (!username) {
        username = prompt("You are running out of time, reveal yourself" + "!")
        
        console.log("We are in the While statement");
        
        if (username) {
            document.write("Welcome to the Turtle Races " + username + "! ");
        }
    }
};

function repeatImage(){
    let userAmount = prompt ("How many racing turtles are there?")
    for (let i=0; i < userAmount; i++){
        document.write('<img id="image4" src="img/Turtle4.gif" alt="Racing turtles"/>')
        
    }
}
// document.body.appendChild(img);



// let image = prompt('There are between 1 and 5 racing turtles how many do you think there are?')
// for( let i=0; i<=5; i++) {
//     if 
// console.log('racing turtle')
// } 


    // if (!username) {
    //     console.log("we are in the second if statement");
    // //     alert("GO AWAY" + "!");
    // }



// while loop
//let x = 10;
//x=15;
// x=x + 5; // 20 
// x++; // 21
// x+= 10; // 31
//console.log(x); 

//while(condition is true){execute this code}
// let x=0
// while (x<10){console.log(x)
//x++;
//}

//FOR LOOP
// for(inital value; condition to evaluate, increment){
    // code to execute
//}
// for(let i=0; i<=16; i++{
    //console.log('hello student')
    // if (i % 5 ==0){
    // console.log('divisible by 5!');
    //}
    //}

    //LOGICAL AND

    // let x=5
    // let y='5'
    // console.log((x<10) &&(y ==5));
    //

    //EXAMPLE
    //let myNumber =5
    // for (let i=0; i < myNumber; i++){
    // document.write('<p style='color:blue;'>Hello</p>')
    //}


    // function repeatImage() {
    //     let userNumber = prompt("How many times do you want to see griffey on the couch?");
    //     userNumber = parseInt(userNumber)
    //     for (let i = 0; i < userNumber && userNumber < 8; i++) {
    //         document.write('')
    //     }
    // }