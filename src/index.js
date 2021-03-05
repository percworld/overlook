


import './css/base.scss';
import './css/styles.scss';
import './images/zulu_beadwork.jpg'

import updates from './scripts';
import Hotel from './Hotel';

const getCustomers = () => {
  return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .catch((err) => alert(`This data is not available.  Server says ${err}`))
}


const getOneCustomer = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers${id}`)
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
  .catch((err) => alert(`This data is not available.  Server says ${err}`))
}

const getAllData = () => {
  Promise.all([getCustomers(), getRooms(), getBookings()])
  .then(dataSets => {
    let hotel = new Hotel(dataSets[0], dataSets[1], dataSets[2]);
    updates.onLoad(hotel);
  })
  .catch((err) => alert(`This data is not available.  Server says ${err}`));
}

getAllData();

export default { getAllData, getOneCustomer };
