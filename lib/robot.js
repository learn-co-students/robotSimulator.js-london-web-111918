let array = ['north', 'south', 'east', 'west']

class Robot {
	//your solution here

  constructor(){
    this.coordinates = [0, 0];
    this.bearing = "north";
  }

  setCoordinates(x, y){
    this.coordinates[0] = x
    this.coordinates[1] = y
  }

  setBearing(direction){
    if (array.includes(direction)) {
    this.bearing = direction
    }
    else {
      throw new Error('Invalid Robot Bearing');
    }
  }

  place(coordinatesAndBearing) {
      this.setCoordinates(coordinatesAndBearing.x, coordinatesAndBearing.y);
      this.setBearing(coordinatesAndBearing.direction);
  }

  turnRight(){
    if (this.bearing == 'north') {
      this.bearing = 'east'
    }
    else if (this.bearing == 'east'){
      this.bearing = 'south'
    }
    else if (this.bearing == 'south'){
      this.bearing = 'west'
    }
    else if (this.bearing == 'west'){
      this.bearing = 'north'
    }
  }

  turnLeft(){
    if (this.bearing == 'north') {
      this.bearing = 'west'
    }
    else if (this.bearing == 'east'){
      this.bearing = 'north'
    }
    else if (this.bearing == 'south'){
      this.bearing = 'east'
    }
    else if (this.bearing == 'west'){
      this.bearing = 'south'
    }
  };

  advance(){
    if (this.bearing == 'north') {
      this.coordinates[1] += 1
    }
    else if (this.bearing == 'east'){
      this.coordinates[0] += 1
        }
    else if (this.bearing == 'south'){
      this.coordinates[1] -= 1
    }
    else if (this.bearing == 'west'){
      this.coordinates[0] -= 1
    }
  }

  translateInstructions(input, move){
    let array = input.split("")
      array.forEach(instruction => {if (instruction == 'L') {
        this.turnLeft()
      }
      else if (instruction == 'R') {
        this.turnRight()
      }
      else if (instruction == 'A') {
        this.advance()
      }
    })
    
  }
}
