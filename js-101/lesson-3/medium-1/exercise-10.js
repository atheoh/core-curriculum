function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo());

// The function invocation on line 9 will return "no". This is because the value
// returned by foo() will always be "yes", and "yes" === "no" evaluates as false.