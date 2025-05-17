type DataStore = {
  [property: string]: string | number | boolean; // tells ts that this is a placeholder for any property, amount of properties. Placeholder for a 'dynamic' property because the number of properties there will be are unknown. Left key - best practice - will be the key always being a string and the calue ( on the right of the colon) can be different valid types in ts
};

let store: DataStore = {};
// ...
store.id = 5;
store.isOpen = false;

let roles = ["admin", "guest", "editor"] as const; // simply tells ts "when inferring the type for this variable do it as narrow as possible dont infer a broad type like a string array"
// roles.push("max"); // will get error because cant edit because it is now readonly after the narrow type inference
const firstRole = roles[0];

let someObj: Record<string, string | number | boolean>; // essentially the same as DataStore ^
