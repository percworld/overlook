import chai from 'chai';
import Hotel from '../src/Hotel';
const expect = chai.expect;

let hotel;

describe('Hotel', function() {

  beforeEach( () => {
    hotel = new Hotel()
  });
  
  it('should be a function', function() {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });
});
