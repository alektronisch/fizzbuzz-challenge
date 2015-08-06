for (var i = 1; i<=100; i++) {
  var b = i%3;
  var c = i%5;
  if (b == 0 && c == 0) {
    document.write("fizzbuzz");
    document.write("<br>");
  }
  else if (b == 0 && c != 0) {
    document.write("fizz");
    document.write("<br>");
  }
  else if (c == 0 && b != 0) {
    document.writeln("buzz");
    document.write("<br>");
  }
  else {
    document.writeln(i);
    document.write("<br>");
  }
}

