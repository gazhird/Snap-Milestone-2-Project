let difficulty, cols, frame, grid = '', gridColumns, squaresArray, iconLimit;

function loaded(value) {
if (value == true) {
difficultyLevel('easy');
} else {
console.log('Fault: Not loaded');
}
}


// The following function builds 3 empty grids for different difficulty settings
// Each box has its own id as seen in squaresArray for targeting purposes
// the grid rows are created alphabetically with gridRows array, this array is longer for more difficulty grid hight
// the nested for loop then runs through each letter and adds a number, determined by difficulty  grid width

function difficultyLevel(difficulty) {
    console.log('difficultyLevel value: ', difficulty);

    if (difficulty == 'hard') {
        cols = 8;
        grid = '';
        gridRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
        for (let row of gridRows) {
                grid += `<div class="line" >`;
            for (let i = 1; i <= cols; i++) {
                grid += `<div id="${row}${i}" class="square" ></div>`;
            }
                grid +=  `</div>`;
                document.getElementById('grid').innerHTML = grid;
            }
            
            squaresArray = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8',
                            'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8',
                            'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8',
                            'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8',
                            'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8',
                            'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'];
            iconLimit = squaresArray.length / 2;
            console.log('hard length ', squaresArray.length); 
            return shuffleArray(squaresArray, iconLimit);
            
        } 


    if (difficulty == 'medium') {
        cols = 8;
        grid = '';
        gridRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        for (let row of gridRows) {
                grid += `<div class="line" >`;
            for (let i = 1; i <= cols; i++) {
                grid += `<div id="${row}${i}" class="square" ></div>`;
            }
                grid +=  `</div>`;
                document.getElementById('grid').innerHTML = grid;
            }

            squaresArray = [
                    'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8',
                    'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8',
                    'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8',
                    'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8'];
            iconLimit = squaresArray.length / 2;
            return shuffleArray(squaresArray, iconLimit);
        }

    if (difficulty == 'easy') {
        cols = 6;
        grid = '';
        gridRows = ['A', 'B', 'C', 'D', 'E', 'F'];
        for (let row of gridRows) {
                grid += `<div class="line" >`;
            for (let i = 1; i <= cols; i++) {
                grid += `<div  onclick="squareClicked(${row}${i})" id="${row}${i}" class="square" ></div>`;
            }
                grid +=  `</div>`;
                document.getElementById('grid').innerHTML = grid;
            }

            squaresArray = [
                    'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6',
                    'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6',
                    'E1', 'E2', 'E3', 'E4', 'E5', 'E6','F1', 'F2', 'F3', 'F4', 'F5', 'F6'];
            iconLimit = squaresArray.length / 2;
            return shuffleArray(squaresArray, iconLimit);
        } else { console.log('difficultyLevel receiving no value') };
}






// firstly this function contains all the Font Awesome icon names in a object 
// Then uses a shuffle loop i found online at ...


const pairs = [];
function shuffleArray(squaresArray, iconLimit) {

    
    

        const iconsObject = { icon1: 'fa-fish', icon2: 'fa-feather', icon3: 'fa-hippo', icon4: 'fa-crow', icon5: 'fa-dragon', icon6: 'fa-otter', icon7: 'fa-kiwi-bird', icon8: 'fa-bugs', icon9: 'fa-cat', 
        icon10: 'fa-cow', icon11: 'fa-dog', icon12: 'fa-dove', icon13: 'fa-bolt', icon14: 'fa-fish-fins', icon15: 'fa-frog', icon16: 'fa-horse', icon17: 'fa-horse-head', icon18: 'fa-locust', 
        icon19: 'fa-mosquito', icon20: 'fa-paw',icon21: 'fa-shield-cat', icon22: 'fa-shield-dog', icon23: 'fa-shrimp', icon24: 'fa-spider', icon25: 'fa-worm', icon26: 'fa-truck', icon27: 'fa-thumbs-up',
        icon28: 'fa-face-smile', icon29: 'fa-trophy', icon30: 'fa-eye', icon31: 'fa-suitcase', icon32: 'fa-web-awesome', icon33: 'fa-star', icon34: 'fa-music', icon35: 'fa-wand-magic-sparkles', 
        icon36: 'fa-heart', icon37: 'fa-bomb', icon38: 'fa-poo', icon39: 'fa-car', icon40: 'fa-ghost', icon41: 'fa-mug-hot', icon42: 'fa-pen', icon43: 'fa-plane', icon44: 'fa-bicycle', icon45: 'fa-truck-monster',
        icon46: 'fa-robot', icon47: 'fa-mug-saucer', icon48: 'fa-anchor', icon49: 'fa-person-dress', icon50: 'fa-person' }; 


    for (let i = squaresArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [squaresArray[i], squaresArray[j]] = [squaresArray[j], squaresArray[i]];
    }
    
    

    for (let x = 1; x <= iconLimit; x++) {
        let removed = squaresArray.splice(0, 2);
        let id1 = removed[0];
        let id2 = removed[1];
        let icon = 'icon' + x;
        
        // console.log('id1=',id1,' id2=',id2,'icon=',icon);

        pairs.push(`${id1}+${id2}`);

        document.getElementById(id1).innerHTML = '<div><i class="fa-solid ' + iconsObject[icon] + ' "></i></div>';
        document.getElementById(id2).innerHTML = '<div><i class="fa-solid ' + iconsObject[icon] + ' "></i></div>';
        const myJSON = JSON.stringify(pairs); // sends correct pair combinations to for interrogation 
        console.log(myJSON)
    } 
    
}



// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// const myCar1 = new Car("Ford", 2014);
// const myCar2 = new Car("Audi", 2019);










// // moved above as has to be declared before called 
// function CheckPairs(pairs) {
  
//   // wouldnt let me return array from function 

// }








// Create new Object
        // const pair = Object.create(pairs);
        // pair.idNum1 = id1;
        // pair.idNum2 = id2;
        // pair.iconNum = x;






// create a class 


// class Animal { 
//   constructor(name) {
//     this.name = name;
//   }
  
//   speak() {
//     console.log(this.name + ' says "Hello!"');
//   }
// }

// let human = new Animal('John');
// human.speak();  // logs 'John says "Hello!"



// class Dog extends Animal {
//   speak() {
//     console.log(this.name + ' says "Woof!"');
//   }
// }

// let myDog = new Dog('Fido');
// myDog.speak();  // logs 'Fido says "Woof!"







































   var getTwo = [], paired = [];  
    var clicks = 0;
    function squareClicked(id) {
        clicks += 1;
        console.log('clicks:', clicks);
        if (clicks === 1) {
        
         var first = id.id;
         console.log('first click: ', first)
         getTwo.push(first);
         document.getElementById(first).style.backgroundColor = 'yellow';
        }
        else if (clicks === 2) {
        first = getTwo[0];
        var second = id.id;
        console.log('second click: ', second)
        var result1 = first + '+' + second;
        var result2 = second + '+' + first;
        window.sessionStorage.setItem('check1', result1);
        window.sessionStorage.setItem('check2', result2);
        document.getElementById(second).style.backgroundColor = 'yellow';
        let pairsArray = window.sessionStorage.getItem('pairsArray');
        let check1 = window.sessionStorage.getItem('check1');
        let check2 = window.sessionStorage.getItem('check2');

            let s = 0, e = 5;

            for (let x = 1; x <= 50; x++) {
                 let pairs = pairsArray.slice(s, e);
                 
                if (check1 == pairs || check2 == pairs) {
                    document.getElementById(first).style.backgroundColor = 'green';
                    document.getElementById(second).style.backgroundColor = 'green';
                    paired.push(first, second);
                    break;
                } 
                else if  (check1 !== pairs && check2 !== pairs && x == 50) {
                    document.getElementById(first).style.backgroundColor = 'red';
                    document.getElementById(second).style.backgroundColor = 'red';
                    break;
                }
                else {
                    s = s + 6;
                    e = e + 6;
                }
            }
            clicks = 0;
        }
        else {
        document.getElementById(first).style.backgroundColor = 'white';
        document.getElementById(second).style.backgroundColor = 'white';
        }
        console.log('paired: ', paired);

        console.log('after first: ', first);
        console.log('after second: ', second);
    }







    
                    // document.getElementById(first).style.backgroundColor = 'red';
                    // document.getElementById(second).style.backgroundColor = 'red';
                    // setTimeout(function(){
                    // document.getElementById(first).style.backgroundColor = 'white';
                    // document.getElementById(second).style.backgroundColor = 'white';
                    // first = '';
                    // second = '';
                    // }, 1000);



                    // for (let i = 0; i <= 5; i++) {
                    // setInterval(function () {
                    // document.getElementById(first).style.backgroundColor = 'red'
                    // document.getElementById(second).style.backgroundColor = 'red'}, 2000);
                    // // setInterval(function () {
                    // // document.getElementById(first).style.backgroundColor = 'white'
                    // // document.getElementById(second).style.backgroundColor = 'white'}, 1000);
                    // }















    // var first = '', second = '', oldFirst = '', oldSecond = '', result1, result2;
    // var getTwo = [], pairedGreens = [];  

    // var clicks = 0;
    // function squareClicked(id) {
    //     clicks += 1;
    //     oldFirst = first;
    //     oldSecond = second; 

    //     if (clicks === 1) {
    //         if (!pairedGreens.includes(id.id)) {
    //             first = id.id;
    //             console.log('first click: ', first);
    //             document.getElementById(first).style.backgroundColor = "yellow";
    //         }

            
    //         if (oldFirst != '' && !pairedGreens.includes(oldFirst)) {
    //             document.getElementById(oldFirst).style.backgroundColor = "white";
    //         }
    //         if (oldSecond != '' && !pairedGreens.includes(oldSecond)) {
    //             document.getElementById(oldSecond).style.backgroundColor = "white";
    //         }
    //     }

    //     else if (clicks === 2) {
    //         if (!pairedGreens.includes(id.id)) {
    //             second = id.id;
    //             console.log('second click: ', second);
    //             document.getElementById(second).style.backgroundColor = "yellow";
    //             result1 = first + '+' + second;
    //             result2 = second + '+' + first;
    //         }
        
        
    //     let pairsArray = window.sessionStorage.getItem('pairsArray');
    //     let s = 0, e = 5;

    //             for (let x = 1; x <= 50; x++) {
    //              let pairs = pairsArray.slice(s, e);
                 
    //             if (result1 == pairs || result2 == pairs) {
    //                 document.getElementById(first).style.backgroundColor = 'green';
    //                 document.getElementById(second).style.backgroundColor = 'green';
    //                 pairedGreens.push(first, second);
    //                 break;
    //             } 
    //             else if  (result1 !== pairs && result2 !== pairs && x == 50) {
    //                 document.getElementById(first).style.backgroundColor = 'red';
    //                 document.getElementById(second).style.backgroundColor = 'red';
    //                 break;
    //             }
    //             else {
    //                 s = s + 6;
    //                 e = e + 6;
    //             }
    //         }
    //     console.log('pairedGreens: ', pairedGreens);
    //     clicks = 0;
        
    //     }
    // }
