import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/Customer';
import {customers, rooms, bookings} from './test-data';
import Inquiry from '../src/Inquiry'; // may not need custs

let customer;
let inquiry;

describe('Customer', function() {

  beforeEach( () => {
    customer = new Customer(customers[0])
    inquiry = new Inquiry(rooms, bookings);
  });

  it('should instantiate an Inquiry', () => {

    expect(inquiry).to.be.an.instanceOf(Inquiry);
  });

  it('should have rooms', () => {

    expect(inquiry.rooms).to.be.an.instanceOf(Array);

  });

  it('should store all rooms and their attributes', () => {

    expect(inquiry.rooms[0]).to.deep.equal({
      number: 1,
      roomType: 'residential suite',
      bidet: true,
      bedSize: 'queen',
      numBeds: 1,
      costPerNight: 358.4
    });

    expect(inquiry.rooms[3]).to.deep.equal({
      number: 4,
      roomType: 'single room',
      bidet: false,
      bedSize: 'queen',
      numBeds: 1,
      costPerNight: 429.44
    });
  });

  it('should store all bookings and their attributes', () => {

    expect(inquiry.bookings[0]).to.deep.equal({
        id: "5fwrgu4i7k55hl6sz",
        userID: 9,
        date: "2020/04/22",
        roomNumber: 15,
        roomServiceCharges: []
    });

    expect(inquiry.bookings[2]).to.deep.equal({
      id: "5fwrgu4i7k55hl6t7",
      userID: 1,
      date: "2020/02/16",
      roomNumber: 4,
      roomServiceCharges: []
    });
  });

  describe('Inquiry methods', () => {

    it('should know if a room is available', () => {

    });
  });  


})
