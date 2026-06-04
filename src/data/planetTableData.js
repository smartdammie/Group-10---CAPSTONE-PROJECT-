// NASA planetary data — grouped by classification
const planetTableData = {
  terrestrial: [
    { name: 'Mercury', mass: '0.330',  diameter: '4,878',   density: '5,427', gravity: '3.7'  },
    { name: 'Venus',   mass: '4.87',   diameter: '12,104',  density: '5,243', gravity: '8.9'  },
    { name: 'Earth',   mass: '5.97',   diameter: '12,756',  density: '5,514', gravity: '9.8'  },
    { name: 'Mars',    mass: '0.642',  diameter: '6,792',   density: '3,933', gravity: '3.7'  },
  ],
  gasGiants: [
    { name: 'Jupiter', mass: '1,898',  diameter: '142,984', density: '1,326', gravity: '23.1' },
    { name: 'Saturn',  mass: '568',    diameter: '120,536', density: '687',   gravity: '9.0'  },
  ],
  iceGiants: [
    { name: 'Uranus',  mass: '86.8',   diameter: '51,118',  density: '1,271', gravity: '8.7'  },
    { name: 'Neptune', mass: '102',    diameter: '49,528',  density: '1,638', gravity: '11.0' },
  ],
  dwarf: [
    { name: 'Pluto',   mass: '0.0130', diameter: '2,376',   density: '2,095', gravity: '0.7'  },
  ],
}

export default planetTableData
