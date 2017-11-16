var Triangle = require('./../js/triangle.js').triangleModule;

describe('Triangle', function() {
  var reusableTriangle;

  beforeEach(function() {
    reusableTriangle = new Triangle(5,5,5);
  });

  it('should show how beforeEach() works', function() {
    console.log(reusableTriangle);
  });

  it('should test whether a Trianle has three sides', function() {
    // var triangle = new Triangle(3,4,5)
    expect(reusableTriangle.side1).toEqual(5)
    expect(reusableTriangle.side2).toEqual(5)
    expect(reusableTriangle.sid3).not.toEqual(6)
  });
  //
  // it('should correctly determine whether three lengths can br made into a triangle', function() {
  //   var notTriangle = new Triangle(6,6,6)
  //   // expect(notTriangle.checkType()).toEqual("not a triangle");
  //   expect(notTriangle.checkType()).toEqual("equilateral triangle")
  // });

  // it('should say if it is an Equilateral triangle', function() {
  //   var equilateralTriangle = new Triangle (6,6,6)
  //   expect(epuilateralTriangle.)
  // })
});
