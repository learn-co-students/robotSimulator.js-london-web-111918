class Robot {
	//your solution here
  constructor(coords = [0, 0], bearing = 'north') {
    this.coordinates = coords
    this.bearing = bearing
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(bearing) {
    const directions = ['north', 'south', 'east', 'west']
    if (directions.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw 'Invalid Robot Bearing'
    }
  }

  place(direct) {
    this.setCoordinates(direct.x, direct.y)
    this.setBearing(direct.direction)
  }

  turnRight() {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'east'
        break
      case 'south':
        this.bearing = 'west'
        break
      case 'east':
        this.bearing = 'south'
        break
      case 'west':
        this.bearing = 'north'
        break
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'west'
        break
      case 'south':
        this.bearing = 'east'
        break
      case 'east':
        this.bearing = 'north'
        break
      case 'west':
        this.bearing = 'south'
        break
    }
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] += 1
        break
      case 'south':
        this.coordinates[1] -= 1
        break
      case 'east':
        this.coordinates[0] += 1
        break
      case 'west':
        this.coordinates[0] -= 1
        break
    }
  }

  translateInstructions(input) {
    const inputArr = input.split("")
    inputArr.forEach(item => {
      switch (item) {
        case 'L':
          this.turnLeft()
          break
        case 'R':
          this.turnRight()
          break
        case 'A':
          this.advance()
          break
      }
    })
  }
}
