// Dev-1
function hello() {
  console.log("hello");
  //   console.log("😀");
}

// hello();

// Dev-2
function hi() {
  console.log("Hi");
  //   console.log("😀");
}
// hi();

// design issues

// 1. code tangling / tight-coupling
// 2. code scattering / duplication

//
// Solution : Higher-Order-Function ( Functional Programming concept )

function withSmileEmoji(f) {
  return function () {
    f();
    console.log("😀");
  };
}

//----------------------------------------------------------------

hello();
let helloWithSmileEmoji = withSmileEmoji(hello);
helloWithSmileEmoji();

//----------------------------------------------------------------
