import Customer from './Customer';
import Hotel from './Hotel';
import Inquiry from './Inquiry';
import $ from 'jquery';
import  getCustomers from './index'
// import moment from 'moment';
// moment().format();
import datepicker from 'js-datepicker'



let hotel, user, bookings, today, rooms, inquiry;
//today = '2020/03/03'
const updates = {

  onLoad: (repoHotel) => {
    hotel = new Hotel(repoHotel.guests.customers,
      repoHotel.rooms.rooms,
      repoHotel.confirmations.bookings);
    updates.showLogin();
  },

  showLogin: () => {
    updates.displayLogin();
    $('.login-button').click(updates.loginCustomer);
  },

  loginCustomer: () => {
    let username = $('#username:text').val();
    let password = $('#password:text').val();
    updates.verifyPassword(username, password)
  },

  verifyPassword: (username, password) => {
    if (password === 'overlook2021') {
      const userNameSplit = username.split('');
      const userID = userNameSplit.slice(userNameSplit.length - 2).join('');
      const getOneCustomer = (userID) => {
        return fetch(`http://localhost:3001/api/v1/customers/${userID}`)
          .then(response => response.json())
          .then(response => updates.createUser(response))
          .catch((err) => alert(`This data is not available.  Server says ${err}`))
      }
      getOneCustomer(userID);
      $('#username').val(' ');
      $('#password').val(' ');
    } else {
      $('.password-wrong').text("Incorrect password. Please try again");
      updates.showLogin();
    }
  },

  createUser: (id) => {
    const customerMatch = hotel.guests.find(customer => customer.id === id.id);
    user = new Customer(customerMatch);
    updates.updateInfoCard();
  },

  updateInfoCard: () => {
    updates.displayInfoCard();
    $('.see-bookings').click(updates.showBookings);
    const picker = datepicker('#picker')
    $('.greeting').html(`
      <p>Hello, ${user.name}</p>
      <p>and Welcome Back! </p>`);
    bookings = hotel.confirmations;
    rooms = hotel.rooms;
    inquiry = new Inquiry(rooms, bookings);
    today = inquiry.getToday();
    user.fillBookings(bookings);
    user.fillTotalSpent(rooms)
    $('.investment').text(`$${user.moneySpent.toFixed(2)}`)
    $('.last-date').text(`${user.myBookings[user.myBookings.length -1].date.toLocaleString("en-US")}`);
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
    $('.search-button').click(updates.showInputField)
  },

  displayInfoCard: () => {
    $('.login-area').hide();
    $('.dropdown').hide();
    $('.room-list-container').hide();
    $('.booking-area').hide();
    $('.info-area').show();
    $('.see-bookings').show();
    $('footer').show();
  },

  displayLogin: () => {
    $('.dropdown').hide();
    $('.room-list-container').hide();
    $('.booking-area').hide();
    $('.info-area').hide();
    $('.see-bookings').hide();
    //$('.login-container').show();
    $('footer').hide();
  },

  showBookings: () => {
    $('.dropdown').show();
    $('.see-bookings').click(() => $('.dropdown').hide())
  },

  showInputField: () => {
    $('.info-area').hide();
    $('.booking-area').show();
    $('.check-button').click(updates.showRoomsAvailable);
  },


  showRoomsAvailable: () => {
    event.preventDefault();
    $('.booking-area').hide();
    $('.room-list-container').show();
    updates.fillRoomsByInput();
    $('.home-button').click(updates.updateInfoCard);
  },

  fillRoomsByInput: () => {
    $('.see-bookings').hide();
    inquiry.checkAvailable(bookings, today);
    let roomsFiltered;
    if($('#residential').is(':checked')) {
      roomsFiltered = inquiry.getRoomsByType('residential');
     }
    if($('#suite').is(':checked')) {
      roomsFiltered = inquiry.getRoomsByType('suite')
     }
    if($('#junior').is(':checked')) {
      roomsFiltered = inquiry.getRoomsByType('junior suite')
    }
    if($('#single').is(':checked')) {
      roomsFiltered = inquiry.getRoomsByType('single room')
    }
    if(roomsFiltered) {
      roomsFiltered.forEach((room, index) => {
        console.log(room)
      $('.book-button-container').append(`
        <br>
        <button type="button" id="${room.number}" class="home-button">Room Number ${room.number}</button>`);
        let targetRoom = roomsFiltered[index]
      });
      const bookButton = document.querySelector('.book-button-container');
      bookButton.addEventListener('click', updates.assignRoom)
    } else {
      $('.book-button-container').text(`We apologize fiercely! No rooms are
       available on this date that match your wishes!`)
    }
    updates.evaluateDateInput;
  },

  assignRoom: (event) => {
    console.log('Before:', event.target.id)
    let roomNumber = event.target.id;
    console.log('Num : ', roomNumber)
    if(event.target.classList.contains("home-button")) {
      roomNumber = event.target.id;
    }
    const payload = { "userID": user.id, "date": today, "roomNumber": parseInt(roomNumber) }
    console.log(payload);
    const addBooking = () => {
      return fetch('http://localhost:3001/api/v1/bookings',
        {
          method:'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(payload),
        })
        .then(response => response.json())
        .then(response => updates.postNotice(response, roomNumber))
        .catch((err) => alert(`This booking was not added.  Server says ${err}`));
    }
    addBooking()

  },

  postNotice: (response, roomNumber) => {
    setTimeout(() => {
      $('.book-button-container').text(`Thank you ${user.name}, You are booked for Room number ${roomNumber} on ${response}.  `)
    }, 1500)
  },

  evaluateDateInput: () => {
    console.log('DATE: ', $('.picker val()'))
  }

}

export default updates;
