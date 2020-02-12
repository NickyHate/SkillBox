function filterByType() {
  var args = Array.from(arguments);
  var firstType = args[0];
  var myArgs = [firstType];
  for (var i = 1; i < args.length; i++) {
    var b = typeof args[i];
    if (b === firstType) {
      myArgs.push(args[i]);
    }
  }
  return myArgs;
}
