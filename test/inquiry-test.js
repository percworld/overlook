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
  })
  it('should instantiate an Inquiry', () => {
    expect(inquiry).to.be.an.instanceOf(Inquiry);
  });

  it('should have room information', () => {
    expect(inquiry).to.be.an.instanceOf(Inquiry);
  })
})
