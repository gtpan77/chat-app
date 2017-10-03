var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from  = 'jen';
		var text = 'get lost';
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,text});
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
    var from = 'me';
		var lat = 1;
    var long = 1;
    var url = `https://www.google.com/maps?q=${lat},${long}`;
    var message = generateLocationMessage(from, lat, long);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,url});
	});
});