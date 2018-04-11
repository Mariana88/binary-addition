tests({

  // Fill this in with your test cases

  'two numbers starting with 0': function() {
    eq("110", binaryAddition(03, 03));
  },
  'one of them starts with 0': function() {
    eq("100", binaryAddition(00002, 02));
  },
  'two positive numbers': function() {
    eq("100", binaryAddition(2, 2));
  },
  'two negative numbers': function() {
    eq("-100", binaryAddition(-2, -2));
  },
  'one positive one negative': function() {
    eq("-1", binaryAddition(2, -3));
  },
  'binaries of diff length with an extra': function() {
    eq("101010", binaryAddition(31, 11));
  },
  'binaries of different length with undefined': function() {
    eq("1011111", binaryAddition(27, 68));
  }

});