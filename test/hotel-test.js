import chai from 'chai';
const expect = chai.expect;
import {customers, rooms, bookings} from './test-data';
import Hotel from '../src/Hotel';

let hotel;

describe('Hotel', function() {

  beforeEach( () => {
    hotel = new Hotel(customers, rooms, bookings)
  });

  it('should be a function', function() {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should have guests', function() {

    expect(hotel.guests[0]).to.be.an('object');
    expect(hotel.guests[1].id).to.deep.equal(2);
    expect(hotel.guests[2].name).to.deep.equal("Kelvin Schiller");
  });

  it('should have rooms', function() {

    expect(hotel.rooms[0]).to.be.an('object');
    expect(hotel.rooms[1].number).to.deep.equal(2);
    expect(hotel.rooms[2].roomType).to.deep.equal("single room");
  });

  it('should have confirmations', function() {

    expect(hotel.confirmations[0]).to.be.an('object');
    expect(hotel.confirmations[1].id).to.deep.equal("5fwrgu4i7k55hl6t5");
    expect(hotel.confirmations[2].date).to.deep.equal("2020/02/16");
  });



});
