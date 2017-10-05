const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () =>{
  it('should reject non-string values', () => {
    var res = isRealString(96.4);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('    ');
    expect(res).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var res = isRealString('  imdude   ');
    expect(res).toBe(true);
  });
});