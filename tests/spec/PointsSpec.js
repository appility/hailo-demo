
  describe('Points', function() {
    beforeEach(function() {
      this.points = new App.Points();
      
    });

    afterEach(function() {
      delete this.points;
    });

    it('is possible to add "point" objects', function() {
        var point1 = new App.Point(this.mockData[0]);
        this.points.add(point1);
        expect(this.points.list.length).toBe(1);
        var point2 = new App.Point(this.mockData[0]);
        this.points.add(point1);
        expect(this.points.list.length).toBe(2);
    });

    it('adding a point provisionally calls points "isValid" method', function() {
        var pointA = new App.Point(this.mockData[1]);
        var pointB = new App.Point(this.mockData[0]);
        spyOn(App.Point.prototype, 'isValid');
        this.points.provisionalAdd(pointA, pointB);
        expect(pointA.isValid).toHaveBeenCalled();
    });

    it('adding a adding a point provisionally calls "isFeasible" method', function() {
        var pointA = new App.Point(this.mockData[1]);
        var pointB = new App.Point(this.mockData[0]);
        spyOn(this.points, 'isFeasible');
        this.points.provisionalAdd(pointA, pointB);
        expect(this.points.isFeasible).toHaveBeenCalled();
    });

    it('calling points.fetch calls "ajax" method', function() {

    });
  });