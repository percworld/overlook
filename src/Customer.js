//import Inquiry from './Inquiry'

class Customer {
  constructor(person) {
    this.id = person.id;
    this.name = person.name;
    this.myBookings = [];
    this.moneySpent = 0;

  }

  fillBookings(bookings) {
    //this.inquiry = new Inquiry();
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


}

export default Customer;
