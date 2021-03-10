class Inquiry {
  constructor(rooms, bookings) {
    this.rooms = rooms;
    this.availableRooms = [];
    this.unavailableRooms = [];
  }


  checkAvailable(bookings, bookingInputDay) {
    this.setAvailableByData(bookings, bookingInputDay)
    if (!this.availableRooms[0]) {
      return false;
    }
    return true;
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
          let index = this.availableRooms.indexOf(found);
          this.availableRooms.splice(index, 1);
        }
    });
  }

  getRoomsByType(type) {
    return this.availableRooms.filter(room => {
      return room.roomType.toLowerCase() === type.toLowerCase();
    });
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
}
export default Inquiry;
