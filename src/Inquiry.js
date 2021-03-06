class Inquiry {
  constructor(rooms, bookings) {
    this.rooms = rooms;
    this.bookings = bookings;
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
    return this.date;
  }

  checkAvailable(rooms, roomType, bookings, bookingInputDay) {
    let today = this.getToday();
    let inputDay = new Date(bookingInputDay);
    if (Math.abs(today) > Math.abs(inputDay)) {
      return "We detected a past date. Try today or a future date";
    } else{
      this.availableRooms = bookings.reduce((available, booking) => {
        rooms.forEach(room => {
          if (booking.date === bookingInputDay &&
            room.number === booking.roomNumber &&
            !this.unavailableRooms.includes(room)) {
              this.unavailableRooms.push(room);
            } else if (booking.roomNumber === room.number &&
              booking.date !== bookingInputDay &&
              !this.unavailableRooms.includes(room) &&
              !available.includes(room)) {
                available.push(room)
            }
        })
        return available;
      }, []).reduce((availables, room) => {
        bookings.forEach(booking => {
          if(booking.roomNumber === room.number &&
            booking.date !== bookingInputDay &&
            ((Math.abs(today) - Math.abs(new Date(booking.date))) < 1) &&
            !availables.includes(availableRoom) &&
            !this.unavailableRooms.includes(room)) {
              availables.push(room)
            }
        })
        return availables;
      }, [])
    }
    if (!this.availableRooms) {
      return false;
    }
    return true;
  }




}

export default Inquiry;
