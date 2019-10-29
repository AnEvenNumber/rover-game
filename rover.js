//window.onload = function(){

//var roverImage = document.createElement("img");
//roverImage.src = '/images/space-rover-icon.png';

//let rImage = `<img src="äfdsadfsadf" id="legal">nice</img>`


class Rover{
    constructor(name, direction,x,y) {
        this.name = name;
        this.direction = direction;
        this.x = x;
        this.y= y;
        this.travelLog = [{x,y}];
       
}

turnLeft(){
  console.log("turnLeft was called!");
  if (this.direction === "N"){
  this.direction = "W";
  }
  else if(this.direction === "S"){
  this.direction = "E";
  }
  else if(this.direction === "E"){
  this.direction = "N";
  }
  else if(this.direction === "W"){
  this.direction = "S";
  }
  else {
    console.log(`Invalid direction, rover's current direction: ${this.direction}, must be one of the following: N, S, E, or W `);
  } 
  }

  turnRight(){
  console.log("turnRight was called!");
    if (this.direction === "N"){
     this.direction = "E";
  }
  else if(this.direction === "S"){
  this.direction = "W";
  }
  else if(this.direction === "E"){
  this.direction = "S";
  }
  else if(this.direction === "W"){
  this.direction = "N";
  }
  else {
    console.log(`Invalid direction, rover's current direction: ${this.direction} , must be one of the following: N, S, E, or W `);
  }
  }

  moveForward(){
   console.log("moveForward was called")
  if (this.direction === "N"){
      this.y--;
      let newPosition = {x: this.x, y: this.y};   this.travelLog.push(newPosition);//adding to travelLog array to track rover's movements, same logic being applied below
    if(this.x < 0 || this.x >9 || this.y < 0 || this.y >9){
      console.log("You can't roam off the map");
      this.y++; //will not let rover move when it roams off, setting y back to the way it was, same logic being applied below
     }
    }
    else if(this.direction === "S"){
        this.y++;
        let newPosition = {x: this.x, y: this.y};
    this.travelLog.push(newPosition);
      if(this.x < 0 || this.x >9 || this.y <0 || this.y >9){
      console.log("You can't roam off the map");
      this.y--;
      }
    }
    else if (this.direction === "W"){
      this.x--;
      let newPosition = {x: this.x, y: this.y};
        this.travelLog.push(newPosition);
      if(this.x < 0 || this.x >9 || this.y <0 || this.y >9){
      console.log("You can't roam off the map");
      this.x++;
      }
    }
    else if (this.direction === "E"){
      this.x++;
      let newPosition = {x: this.x, y: this.y};
        this.travelLog.push(newPosition);
      if(this.x < 0 || this.x >9 || this.y <0 || this.y >9){
      console.log("You can't roam off the map");
      this.x--;
      }
    }
      else if (this.direction !== "N" || this.direction !== "S" || this.direction !== "E" || this.direction !== "W") {
        console.log("Invalid direction, rover's current direction must be one of the following: N, S, E, or W ");
      }
  }

  moveRover(){
    let x = this.x;
    let y = this.y;
    document.querySelector('#rover').remove() //delete rover & add a new one.
    document.querySelectorAll('.row')[y].children[x].innerHTML = '<img id="rover" src="images/space-rover-icon.png" alt="Rover" class="rover-image">'
  }

  moveBackward(){
  console.log("moveBackward was called")
  
  if (this.direction === "N"){
      this.y++;
      let newPosition = {x: this.x, y: this.y};
        this.travelLog.push(newPosition);
    if(this.x < 0 || this.x >9 || this.y < 0 || this.y >9){
      console.log("You can't roam off the map");
      this.y--;
     }
    }
    else if(this.direction === "S"){
        this.y--;
        let newPosition = {x: this.x, y: this.y};
        this.travelLog.push(newPosition);
      if(this.x < 0 || this.x >9 || this.y <0 || this.y >9){
      console.log("You can't roam off the map");
      this.y++;
      }
    }
    else if (this.direction === "W"){
      this.x++;
      let newPosition = {x: this.x, y: this.y};
        this.travelLog.push(newPosition);
      if(this.x < 0 || this.x >9 || this.y <0 || this.y >9){
      console.log("You can't roam off the map");
      this.x--;
      }
    }
    else if (this.direction === "E"){
      this.x--;
      let newPosition = {x: this.x, y: this.y};
        this.travelLog.push(newPosition);
      if(this.x < 0 || this.x >9 || this.y <0 || this.y >9){
      console.log("You can't roam off the map");
      this.x++;
      }
    }
      else if (this.direction !== "N" || this.direction !== "S" || this.direction !== "E" || this.direction !== "W") {
        console.log("Invalid direction, rover's current direction must be one of the following: N, S, E, or W ");
      }
  }

  commands(command){
  for (let i = 0; i < command.length; i++){
      let order = command[i];
      switch(order){
        case "l": // left
          this.turnLeft();
          break;
        case "r": // right
          this.turnRight();
          break;  
        case "f": // forward
          this.moveForward();
          break; 
        case "b": // backward
          this.moveBackward();
          break;
          default:
          console.log(`Invalid command:${command}, you must enter valid commands: l(left),r(right),f(forward),b(backward)`);
      }
    }
    this.moveRover()
  console.log(this.travelLog);
  }
  /*lastPositionx(){
  let lastIndex = this.travelLog.length - 1;
  let lastPositionx = this.travelLog[lastIndex].x;
  return lastPositionx;
  }
 lastPositiony(){
  let lastIndex = this.travelLog.length - 1;
  let lastPositionx = this.travelLog[lastIndex].y;
  return lastPositiony;
  }*/

  addToBoard(board){

  let lastIndex = this.travelLog.length - 1;
  let lastPositionx = this.travelLog[lastIndex].x;
  let lastPositiony = this.travelLog[lastIndex].y;


  if (lastPositiony< 0 || lastPositiony> 9 || lastPositionx < 0 || lastPositionx > 9){
   console.log("You can't roam off the map"); //making sure last position is not outside of our 10X10 board
  }
  else if (board[lastPositiony][lastPositionx] == 'O'){
    console.log("Obstacle found!!!"); //If the rover’s next move would run into an obstacle
    }
    else if (board[lastPositiony][lastPositionx] != ' ' && board[lastPositiony][lastPositionx] != this.name){
      console.log("You can't move here, as it's occupied by another rover");
      //If the rover’s next move would run it into another rover
      }
    //if none of the conditions above get triggered we add rover to board 
    else{
        board[lastPositiony][lastPositionx] = this.name; 
      }
    }
  }
  

/*
  
  

  addToBoard(board){
  if (this.lastPositiony< 0 || this.lastPositiony> 9 || this.lastPositionx < 0 || this.lastPositionx > 9){
   console.log("You can't roam off the map"); //making sure last position is not outside of our 10X10 board
  }
  else if (board[this.lastPositiony][this.lastPositionx] == 'O'){
    console.log("Obstacle found!!!"); //If the rover’s next move would run into an obstacle
    }
    else if (board[this.lastPositiony][this.lastPositionx] != ' ' && board[this.lastPositiony][this.lastPositionx] != this.name){
      console.log("You can't move here, as it's occupied by another rover");
      //If the rover’s next move would run it into another rover
      }
    //if none of the conditions above get triggered we add rover to board 
    else{
        board[this.lastPositiony][this.lastPositionx] = this.name; 
      }
    }
}



*/


document.querySelector("body > header > h3:nth-child(3) > button").onclick = function(){
  let commands = document.querySelector("body > header > h3:nth-child(3) > input[type=text]").value
  console.log(commands)
  rover.commands(commands)   
}

document.querySelector("body > header > h3:nth-child(2) > button").onclick = function() {
  let name = document.querySelector("body > header > h3:nth-child(2) > input[type=text]").value
  console.log('name is ',name)
}


let rover = new Rover("Daphne","S",0,0);
rover.commands("ffffffff");

setInterval(() => {
  rover.commands('f')
},500)

//Console log Tests:


//   let board = [ 
//     [' ','O',' ',' ',' ','O',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ','O',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   
//      ];


// let daphRover = new Rover("Daphne","S",0,0);

// daphRover.commands("ffffffff")

// daphRover.addToBoard(board)

// console.log(board);


  
    // const theRover = document.createElement('div');
    // theRover.id = 'rover';

    // let row1 = daphRover.x;

    //     let column1 = daphRover.y;


    //         document.querySelector(`.row${randomRow} > .col${randomColumn}`)
    //         .appendChild(theMole)



   // }