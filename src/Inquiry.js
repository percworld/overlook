class Inquiry {
  constructor(rooms, bookings) {
    this.rooms = rooms;
    this.bookings = bookings;
    this.availableRooms = []
  }

  getToday() {
    let date = new Date();
    let year = date.getFullYear();
    let day;
    let month;
    if((date.getMonth() + 1) < 10) {
      month = `0${date.getMonth() + 1}`;
    } else {
      month = date.getMonth() + 1;
    }
    if (date.getDate() < 10) {
      day = `0${date.getDate()}`;
    } else {
      day = date.getDate()
    }
    this.date = `${year}/${month}/${day}`;
    return this.date;
  }

  checkAvailable(rooms, bookings, today, bookingDay) {
    return true;
  }




}

export default Inquiry;
