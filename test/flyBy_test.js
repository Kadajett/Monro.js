(function() {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('flyBy', {
    // This will run before each test in this module.
    setup: function() {
      //TODO 
    }
  });

  test('presence', function() {
    expect(1);
    ok(typeof flyBy !== "undefined", 'flyBy should be present');
  });

  test('external', function() {
    expect(2);
    ok(typeof flyBy.external !== "undefined", "flyBy should be present");
    var expected = 'flyBy v'+flyBy._.version;
    strictEqual(flyBy.external(), expected);
  });

}());
