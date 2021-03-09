

import './css/reset.scss';
import './css/base.scss';
import './css/styles.scss';
import './images/zulu_beadwork.jpg';
import './images/ndebele_woman.jpg';
import './images/hp_gold_star.svg';
import './images/postal-service-stamp-1.svg';
import updates from './scripts';
import Hotel from './Hotel';


const getCustomers = () => {
  return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .catch((err) => alert(`This data is not available.  Server says ${err}`))
}


const getOneCustomer = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(response => response.json())
    .catch((err) => alert(`This data is not available.  Server says ${err}`))
}


const getRooms = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => response.json())
    .catch((err) => alert(`This data is not available.  Server says ${err}`))
}


const getBookings = () => {
  return fetch('http://localhost:3001/api/v1/bookings')
  .then(response => response.json())
  //.then( if !err.==ok)
  .catch((err) => alert(`This data is not available.  Server says ${err}`))
}

const addBooking = () => {
  return fetch('http://localhost:3001/api/v1/bookings',
    {
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(
        { "userID": 48, "date": "2019/09/23", "roomNumber": 4 }
      ),
    })
    .then(response => response.json())
    .catch((err) => alert(`This booking was not added.  Server says ${err}`));
}
const deleteBooking = (id) => {
  return fetch(`http://localhost:3001/api/v1/bookings/${id}`,
    {
      method:'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .catch((err) => alert(`This booking was not deleted.  Server says ${err}`));
}

const getAllData = () => {
  Promise.all([getCustomers(), getRooms(), getBookings()])
  .then(dataSets => {
    const hotel = new Hotel(dataSets[0], dataSets[1], dataSets[2]);
    updates.onLoad(hotel);
  })
  .catch((err) => alert(`FAIL: This data is not available.  Server says ${err}`));
}

getAllData();

export default { getAllData, getOneCustomer, addBooking, deleteBooking };
