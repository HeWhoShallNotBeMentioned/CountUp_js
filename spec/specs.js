describe('#countUp', function() {
  it('expects both parameters to be numbers', function() {
    expect(countUp(3, 'bob')).to.equal(false);
  });

  it('expects counts by countBy upto countTo', function() {
    expect(countUp(21,3)).to.eql([3,6,9,12,15,18,21]);
  });
});
