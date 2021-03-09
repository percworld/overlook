//import Inquiry from './Inquiry'
// Manager is a child
class Customer {
  constructor(person) {
    this.id = person.id;
    this.name = person.name;
    this.moneySpent = 0;
  }

  fillBookings(bookings) {
    this.myBookings = [];
    bookings.forEach(booking => {
      if (booking.userID === this.id) {
        this.myBookings.push(booking);
      }
    });
  }

  fillTotalSpent(allRooms) {
    this.moneySpent = this.myBookings.reduce((money, booking) => {
      allRooms.forEach(booked => {
        if (booking.roomNumber === booked.number) {
          money += booked.costPerNight;
        }
      });
      return money;
    }, 0);
  }
//book a room

}

export default Customer;
