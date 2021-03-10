import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/Customer';
import Inquiry from '../src/Inquiry'; // may not need custs
import {customers, rooms, bookings} from './test-data';

let customer;
let inquiry;
let roomType = "single room";

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

  it('should have a list of zero available rooms by default', () => {

    expect(inquiry.availableRooms).to.deep.equal([]);
  });

  it('should have a list of zero unavailable rooms by default', () => {

    expect(inquiry.unavailableRooms).to.deep.equal([]);
  });

  describe('Inquiry methods', () => {

    it('should know if a room is unavailable', () => {
      inquiry = new Inquiry(rooms, bookings);
      inquiry.checkAvailable(bookings, "2020/01/11");

      expect(inquiry.unavailableRooms).to.have.a.lengthOf(1);
      expect(inquiry.unavailableRooms).to.deep.equal([
        {
            "number": 7,
            "roomType": "single room",
            "bidet": true,
            "bedSize": "queen",
            "numBeds": 2,
            "costPerNight": 340.17
        }
      ]);
    });

    it('should know if a room is available', () => {

      inquiry.checkAvailable(bookings, "2020/04/22")

      expect(inquiry.unavailableRooms).to.have.a.lengthOf(1)
      expect(inquiry.availableRooms).to.have.a.lengthOf(7);


    });

    it('should know if a room is still unavailable', () => {

      inquiry.checkAvailable(bookings, "2020/02/16")

      expect(inquiry.availableRooms).to.have.a.lengthOf(7);

      expect(inquiry.unavailableRooms).to.deep.equal([
        {
            "number": 7,
            "roomType": "single room",
            "bidet": true,
            "bedSize": "queen",
            "numBeds": 2,
            "costPerNight": 340.17
        }
      ]);
    });

    it('should filter by room type', () => {

      inquiry.checkAvailable(bookings, "2020/04/22")

      expect(inquiry.getRoomsByType("single room")).to.have.a.lengthOf(4);

      expect(inquiry.getRoomsByType("residential suite")).to.deep.equal([
        {
          number: 1,
          roomType: 'residential suite',
          bidet: true,
          bedSize: 'queen',
          numBeds: 1,
          costPerNight: 358.4
        }
      ])

    })

  });


})
