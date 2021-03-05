import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/Customer';
import {customers, rooms, bookings} from './test-data';
let customer

describe('Customer', function() {

  beforeEach( () => {
    customer = new Customer(customers[0])

  })
  it('should instantiate a Customer', function() {
    expect(customer).to.be.an.instanceOf(Customer);
  });
  it('should have an id', function() {
    expect(customer.id).to.deep.equal(1)
  });
  it('should have a name', function() {
    expect(customer.name).to.deep.equal("Leatha Ullrich")
  });
  it('should have a default list of bookings', function() {
    expect(customer.myBookings).to.deep.equal([]);
  });
  it('should have a default amount of money spent', function() {
    expect(customer.moneySpent).to.deep.equal(0);
  });

  describe('Customer methods', () => {
    it('should return all rooms that have been booked', function() {

      customer.fillBookings(bookings);

      expect(customer.myBookings).to.deep.equal([
        {
          id: "5fwrgu4i7k55hl6t7",
          userID: 1,
          date: "2020/02/16",
          roomNumber: 4,
          roomServiceCharges: []
        }
      ]);
    });

    it('should calculate money spent on rooms', function() {

      customer.fillBookings(bookings);
      customer.fillTotalSpent(rooms);

      expect(customer.moneySpent).to.deep.equal(429.44);
    });

<<<<<<< HEAD

=======
    
>>>>>>> 08c74558cf3080f9ade1da200ecd57d0f8af9543
  });
});
