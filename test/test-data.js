const customers = [
  {
      id: 1,
      name: "Leatha Ullrich"
  },
  {
      id: 2,
      name: "Rocio Schuster"
  },
  {
      id: 3,
      name: "Kelvin Schiller"
  },
  {
      id: 4,
      name: "Kennedi Emard"
  }
];

const rooms = [
  {
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
  },
  {
      "number": 2,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 2,
      "costPerNight": 477.38
  },
  {
      "number": 3,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "king",
      "numBeds": 1,
      "costPerNight": 491.14
  },
  {
      "number": 4,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 429.44
  },
  {
      "number": 7,
      "roomType": "single room",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 2,
      "costPerNight": 340.17
  },
  {
      "number": 6,
      "roomType": "junior suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 397.02
  },
  {
      "number": 12,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 2,
      "costPerNight": 231.46
  },
  {
      "number": 15,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 2,
      "costPerNight": 231.46
  }
];
const bookings = [
  {
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 9,
      "date": "2020/04/22",
      "roomNumber": 15,
      "roomServiceCharges": []
  },
  {
      "id": "5fwrgu4i7k55hl6t5",
      "userID": 43,
      "date": "2020/01/24",
      "roomNumber": 24,
      "roomServiceCharges": []
  },
  {
      "id": "5fwrgu4i7k55hl6t6",
      "userID": 13,
      "date": "2020/01/10",
      "roomNumber": 12,
      "roomServiceCharges": []
  },
  {
      "id": "5fwrgu4i7k55hl6t7",
      "userID": 20,
      "date": "2020/02/16",
      "roomNumber": 7,
      "roomServiceCharges": []
  },
  {
      "id": "5fwrgu4i7k55hl6t8",
      "userID": 1,
      "date": "2020/02/05",
      "roomNumber": 12,
      "roomServiceCharges": []
  },
  {
      "id": "5fwrgu4i7k55hl6t9",
      "userID": 38,
      "date": "2020/02/14",
      "roomNumber": 14,
      "roomServiceCharges": []
  },
  {
      "id": "5fwrgu4i7k55hl6ta",
      "userID": 3,
      "date": "2020/01/11",
      "roomNumber": 7,
      "roomServiceCharges": []
  }
      ];
module.exports = { customers, rooms, bookings }
