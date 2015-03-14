beforeEach(function() {
	this.fakeData = "You can put your return data here";
	this.mockData = [
      {
        'latitude': '51.498714933833',
        'longitude': '-0.16011779913771',
        'timestamp': '1326378718'
      },
      {
        'latitude': '51.498405862027',
        'longitude': '-0.16040688237893',
        'timestamp': '1326378723'
      },
      {
        'latitude': '51.498205021215',
        'longitude': '-0.16062694283829',
        'timestamp': '1326378728'
      }];

    this.mockDataInvalid = [
      {
        'latitude': '51.498714933833',
        'longitude': '-0.16011779913771',
        'timestamp': '1326378718'
      },
      {
        'latitude': '52.498405862027',
        'longitude': '-0.16040688237893',
        'timestamp': '1326378723'
      },
      {
        'latitude': '51.498205021215',
        'longitude': '-0.16062694283829',
        'timestamp': '1326378728'
      }];
});
