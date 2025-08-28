
let difficulty, frame, grid = '', gridColumns, squaresArray, iconLimit;

function loaded(value) {
if (value == true) {
difficultyLevel(6);
} else {
console.log('Fault: Not loaded');
}
}




function difficultyLevel(value) {
    console.log('difficultyLevel value: ', value);

    if (value == 10) {
        difficulty = 'hard';
        grid = '';
        gridRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        for (let row of gridRows) {
                grid += `<div class="line" >`;
            for (let i = 1; i <= value; i++) {
                grid += `<div id="${row}${i}" class="square" ></div>`;
            }
                grid +=  `</div>`;
                document.getElementById('grid').innerHTML = grid;
            }
            
            squaresArray = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
                            'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10',
                            'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
                            'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10',
                            'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'];
            iconLimit = squaresArray.length / 2;
            return shuffleArray(squaresArray, iconLimit);      
        } 


    if (value == 8) {
        difficulty = 'medium';
        grid = '';
        gridRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        for (let row of gridRows) {
                grid += `<div class="line" >`;
            for (let i = 1; i <= value; i++) {
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

    if (value == 6) {
        difficulty = 'easy';
        grid = '';
        gridRows = ['A', 'B', 'C', 'D', 'E', 'F'];
        for (let row of gridRows) {
                grid += `<div class="line" >`;
            for (let i = 1; i <= value; i++) {
                grid += `<div id="${row}${i}" class="square" ></div>`;
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

  function shuffleArray(squaresArray, iconLimit) {

    let iconsObject = { icon1: 'fa-fish', icon2: 'fa-feather', icon3: 'fa-hippo', icon4: 'fa-crow', icon5: 'fa-dragon', icon6: 'fa-otter', icon7: 'fa-kiwi-bird', icon8: 'fa-bugs', icon9: 'fa-cat', 
        icon10: 'fa-cow', icon11: 'fa-dog', icon12: 'fa-dove', icon13: 'fa-bolt', icon14: 'fa-fish-fins', icon15: 'fa-frog', icon16: 'fa-horse', icon17: 'fa-horse-head', icon18: 'fa-locust', 
        icon19: 'fa-mosquito', icon20: 'fa-paw',icon21: 'fa-shield-cat', icon22: 'fa-shield-dog', icon23: 'fa-shrimp', icon24: 'fa-spider', icon25: 'fa-worm', icon26: 'fa-truck', icon27: 'fa-thumbs-up',
        icon28: 'fa-face-smile', icon29: 'fa-trophy', icon30: 'fa-eye', icon31: 'fa-suitcase', icon32: 'fa-web-awesome', icon33: 'fa-star', icon34: 'fa-music', icon35: 'fa-wand-magic-sparkles', 
        icon36: 'fa-heart', icon37: 'fa-bomb', icon38: 'fa-poo', icon39: 'fa-car', icon40: 'fa-ghost', icon41: 'fa-mug-hot', icon42: 'fa-pen', icon43: 'fa-plane', icon44: 'fa-bicycle', icon45: 'fa-person',
        icon46: 'fa-person-dress', icon47: 'fa-mug-saucer', icon48: 'fa-anchor', icon49: 'fa-robot', icon50: 'fa-truck-monster' }; 


    for (let i = squaresArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [squaresArray[i], squaresArray[j]] = [squaresArray[j], squaresArray[i]];
    }
    

    for (let x = 1; x <= iconLimit; x++) {
        let removed = squaresArray.splice(0, 2);
        let id1 = removed[0];
        let id2 = removed[1];
        let icon = 'icon' + x;

       
        document.getElementById(id1).innerHTML = '<div><i class="fa-solid ' + iconsObject[icon] + ' "></i></div>';
        document.getElementById(id2).innerHTML = '<div><i class="fa-solid ' + iconsObject[icon] + ' "></i></div>';
       
    } 
    
}






   

    

    
   






    







        // document.getElementById(id1).innerHTML = '<div><i class="fa-solid ' + iconsObject[icon] + ' "></i></div>';
        // 

        // document.getElementById('test1').innerHTML = '<div><i class="fa-solid ' + iconsObject[icon] + ' "></i></div>';
        // document.getElementById('test2').innerHTML = '<div><i class="fa-solid ' + iconsObject[icon] + ' "></i></div>';