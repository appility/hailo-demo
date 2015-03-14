  describe('Utils', function() {

    afterEach(function() {
      delete this.points;
    });

      describe ('Distance', function() {

        it('deg2rad returns expected value ', function() {
          expect(App.Utils.Distance.deg2rad(90)).toBe(1.5707963267948966);
        });

        it('calculateDistance returns expected value in metres', function() {
          var pointA = new App.Point(this.mockData[1]);
          var pointB = new App.Point(this.mockData[2]);
          var d = App.Utils.Distance.calculateDistance(pointA, pointB);
          expect(d).toBe(27);
        });

        it('calculateTimeBetween returns expected value in minutes', function() {
          var pointA = new App.Point(this.mockData[1]);
          var pointB = new App.Point(this.mockData[2]);
          var d = App.Utils.Distance.calculateTimeBetween(pointA, pointB, 10);
          expect(d).toBe(0.162);
        });
      })
  });