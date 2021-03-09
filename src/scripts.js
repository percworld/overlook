import Customer from './Customer';
import Hotel from './Hotel';
import $ from 'jquery';
import  getCustomers from './index'
import moment from 'moment';
moment().format();



let hotel, user, bookings, rooms;

const updates = {

  onLoad: (repoHotel) => {
    hotel = new Hotel(repoHotel.guests.customers, repoHotel.rooms.rooms, repoHotel.confirmations.bookings);
    console.log(hotel)
    user = new Customer(hotel.guests[1]);
    updates.updateInfoCard()

  },

  updateInfoCard: () => {
    $('.greeting').html(`
      <p>Hello, ${user.name}</p>
      <p>and Welcome Back! </p>`);
    bookings = hotel.confirmations;
    rooms = hotel.rooms;
    user.fillBookings(bookings);
    user.fillTotalSpent(rooms)
    $('.investment').text(`$${user.moneySpent}`)
    $('.last-date').text(`${user.myBookings[user.myBookings.length -1].date.toLocaleString("en-US")}`)
    user.myBookings.forEach(booking => {
    $('.bookings').append(`
      <ul class="booking">
        <p>${rooms.find(room => {
          return room.number === booking.roomNumber
        }).roomType}</p>
        <p>${booking.date}</p>
      </ul>
      `)
    });
  }
}

export default updates;
