function filterByType() {
  let args = Array.from(arguments);
  let firstType = args[0];
  let myArgs = [firstType];
  for (let i = 1; i < args.length; i++) {
    var b = typeof args[i];
    if (b === firstType) {
      myArgs.push(args[i]);
    }
  }
  return myArgs;
}
