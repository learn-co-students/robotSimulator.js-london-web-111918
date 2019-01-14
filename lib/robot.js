class Robot {

  constructor() {
    this.coordinates = [0, 0];
    this.bearing = 'north';
  };

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  };

  setBearing(x) {
    const arr = ['north', 'south', 'east', 'west']
    if(arr.includes(x)) {
      this.bearing = x;
    } else {
      throw "Invalid Robot Bearing";
    };
  };

  place(object) {
    this.coordinates = [object.x, object.y];
    this.bearing = object.direction;
  };

  turnRight() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'east';
        break;
      case 'east':
        this.bearing = 'south';
        break;
      case 'south':
        this.bearing = 'west';
        break;
      case 'west':
        this.bearing = 'north';
        break;
    };
  };

  turnLeft() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'west';
        break;
      case 'east':
        this.bearing = 'north';
        break;
      case 'south':
        this.bearing = 'east';
        break;
      case 'west':
        this.bearing = 'south';
        break;
    };
  };

  advance() {
    let x = this.coordinates[0]
    let y = this.coordinates[1]
    switch(this.bearing) {
      case 'north':
        this.coordinates = [x, y+1];
        break;
      case 'east':
        this.coordinates = [x+1, y];
        break;
      case 'south':
        this.coordinates = [x, y-1];
        break;
      case 'west':
        this.coordinates = [x-1, y];
        break;
    };
  };

  translateInstructions(input) {
    input.split("").forEach(item => {
      switch(item) {
        case "L":
        this.turnLeft();
        break;
        case "R":
        this.turnRight();
        break;
        case "A":
        this.advance();
        break;
      };
    });
  };

};
