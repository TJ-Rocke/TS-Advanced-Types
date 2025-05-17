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

// satisfies key word
// say you have a...
const dataEntries = {
  entry1: 0.8,
  entry2: -1.23,
} satisfies Record<string, number>; // using 'satisfies' will check if the assigned value is of the type specified by satisfied, will then also infer a specific type from the concrete value assigned (meaning, dataEntries will only hold the keys and values that were set and not just be a Record type with a string and number)
// ...
dataEntries.entry3; // without 'satisfies', even if the key doesnt exist, ts will infer it as existing because it is a valid acceptable key type according to the Record definition expected key types. with satisfies it will not allow new keys
