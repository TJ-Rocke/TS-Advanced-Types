function getLength(val: any[]): number; // additional function signatures allow us to tell what different return types will be depending on which definition is active (telling which onw is active just depends on how the function is called)
function getLength(val: string): string;
function getLength(val: string | any[]) {
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words`;
  }
  return val.length;
}

const numOfWords = getLength("does this work"); // if "active" like this, will return string because of function overload ^
const numOfItems = getLength(["Sports", "Hello"]);
// if "active" like this, will return string because of function overload ^
