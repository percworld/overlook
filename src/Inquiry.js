class Inquiry {
  constructor(rooms, bookings) { //bookings may go to Manager
    this.rooms = rooms;
    //this.bookings = bookings;
    this.availableRooms = [];
    this.unavailableRooms = [];
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
    //console.log(date, this.date)
    return this.date;
  }

  checkAvailable(bookings, bookingInputDay) {
    let today = this.getToday();
     //think about splicing today for evaluation and comparison
    // if (today > bookingInputDay) {
    //   console.log(`You may have entered a past date. Try ${today.toLocaleString("en-US")} or a future date`)
    //   return `You may have entered a past date. Try ${today.toLocaleString("en-US")} or a future date`;
    // } else {
    this.setAvailableByData(bookings, bookingInputDay)
    if (!this.availableRooms[0]) {
      return false;
    }
    return true;
    //return this.roomsAvailable;   //I will need this?
  }

  setAvailableByData(bookings, bookingInputDay) {
    this.availableRooms = [...this.rooms]
    this.rooms.forEach((room, index) => {
      bookings.forEach(booking => {
        if (booking.date === bookingInputDay && room.number === booking.roomNumber) {
          this.unavailableRooms.push(room);
        }
      });
    });
    this.arrangeVacancies()
  }

  arrangeVacancies() {
    const strings = this.unavailableRooms.map(room => JSON.stringify(room));
    strings.forEach(value => {
      let found = this.availableRooms.find(room => value === JSON.stringify(room));
        if (found) {
          //console.log('FOUND: ',found)
          let index = this.availableRooms.indexOf(found);
          this.availableRooms.splice(index, 1);
          //console.log('AVAIL: ',this.availableRooms)
        }
    });
  }

  getRoomsByType(type) {
    return this.availableRooms.filter(room => {
      return room.roomType.toLowerCase() === type.toLowerCase();
    });
  }
}
export default Inquiry;
