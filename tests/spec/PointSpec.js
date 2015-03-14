
  describe("Point", function() {
    afterEach(function() {
      delete point;
    });

    it("a point must have valid values", function() {
      var point = new App.Point({
        latitude: "51.498714933833",
        longitude: "-0.16011779913771",
        timestamp: "1326378718"
      });
      expect(point.isValid()).toBeTruthy();
    });

    it("a point must be created with properties", function() {
      var point = new App.Point({});
      expect(point.isValid()).toBeFalsy();
    });

    it("a point must not have empty values", function() {
      var point = new App.Point({
        latitude: "",
        longitude: "",
        timestamp: ""
      });
      expect(point.isValid()).toBeFalsy();
    });

    it("a point must not have an invalid latitude value [e.g > 90]", function() {
      var point = new App.Point({
        latitude: "91",
        longitude: "-0.16011779913771",
        timestamp: "1326378718"
      });
      expect(point.isValid()).toBeFalsy();
    });

    it("a point must not have an invalid latitude value [e.g < -90]", function() {
      var point = new App.Point({
        latitude: "-91",
        longitude: "-0.16011779913771",
        timestamp: "1326378718"
      });
      expect(point.isValid()).toBeFalsy();
    });

    it("a point must not an invalid longitude value [e.g. > 180] ", function() {
      var point = new App.Point({
        latitude: "51.498714933833",
        longitude: "181",
        timestamp: "1326378718"
      });
      expect(point.isValid()).toBeFalsy();
    });

  it("a point must not have an invalid longitude value [e.g. < -180] ", function() {
    var point = new App.Point({
      latitude: "51.498714933833",
      longitude: "-181",
      timestamp: "1326378718"
    });
    expect(point.isValid()).toBeFalsy();
  });

  it("a point must not have an invalid timestamp value [e.g. not all digits] ", function() {
    var point = new App.Point({
      latitude: "51.498714933833",
      longitude: "-0.16011779913771",
      timestamp: "1A26378718"
    });
    expect(point.isValid()).toBeFalsy();
  });
  });