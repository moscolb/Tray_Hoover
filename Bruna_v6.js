const fs = require('fs');

function readInput(){   //start function
    var inputs = {};  //name whatever is inside as "inputs"
    hooveredDirt = 0;

    var file = fs.readFileSync('input.txt', 'utf8'); //open file and interpret as encoded text
    var lines = file.split('\n'); //split file into array of lines

    function readinputpairs(line) {   //read each line
        const parts = line.split(' ');   
        return [parseInt(parts[0]), parseInt(parts[1])]; // parses a string and returns an integer

    }

    const room_size = readinputpairs(lines[0]); //read first line of file as size of room
    room_size_x = room_size[0]; //read first digit in first line as x-axis size of room
    room_size_y = room_size[1]; //read second digit in first line as y-axis size of room

    var hoover_initial = readinputpairs(lines[1]); //read second line of file as initial position of hoover
    hoover_x = hoover_initial[0]; //read first digit in second line as initial x-coord of hoover
    hoover_y = hoover_initial[1]; //read second digit in second line as initial y-coord of hoover

    const dirty_patchesLines = lines.slice(2,-1) //treat all lines after the first 2 lines and except the final one as "dirty coords"
    for(const dirty_patches of dirty_patchesLines) {
        const dirty_patches_position = readinputpairs(dirty_patches);
        const dirt_x = dirty_patches[0];
        const dirt_y = dirty_patches[1];
    }

    directions = lines[lines.length-1].split(''); //last line of file is "driving directions"
    
    return inputs;
}

let inputs = readInput();

// ***PART 2*** move hoover based on cardinal directions given plus print the final location of the hoover after following driving directions

function move(directions) { //function using "directions" input from above

if (directions === 'N' && hoover_y < room_size_y -1)  //if directions read "n", add +1 to the hoover_y coord as long as the hoover is not in the vertical edge of the toom
{
    hoover_y++;
    } 
else if (directions === 'S' && hoover_y > 0) { // if directions read "s", subtract -1 to the hoover_y coord
    hoover_y--;
} 
else if (directions === 'E' && hoover_x < room_size_x -1) { // if directions read "e", subtract -1 to the hoover_x cord as long as you dont leave the room
    hoover_x++;
} 
else if (directions === 'W' && hoover_x > 0) { // if directions read "w" add +1 to the hoover_x coord
    hoover_x--;    
}

// ***PART 3*** Count # of dirty patches cleaned

// First, tell the program where the dirty patches are
// Build array, set to dirty = false, meaning they are all clean
// Then pull dirty coords from input and add to the array

var dirty_array = []; // creates an empty array for dirty patches, right now its empty
for (var i=0; i < room_size_x; i++) {  //for loop that says for all x less than x-axis...
    var row =[];   // create another array for the row
    for (var j = 0; j < room_size_y; j++){  // for all height of the room!
        row.push(false);    // array full of boolean "false"
    }
    dirty_array.push(row); //array exact size of room
}

dirty_array[hoover_x][hoover_y]= true; //takes the array in part 3 below and changes boolean "falses" to "true" if the coordinates match the array

// check for dirt when moving
    if(dirty_array[hoover_x][hoover_y] === true) {
        console.log('Dirt found at: ', hoover_x, hoover_y);
        hooveredDirt += 1;
        }
}

for (const step of directions) {
  move(directions, step);
}

console.log(hoover_x, hoover_y); //print final location of hoover

