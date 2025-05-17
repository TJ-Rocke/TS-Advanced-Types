type DataStore = {
  [property: string]: string | number | boolean; // tells ts that this is a placeholder for any property, amount of properties. Placeholder for a 'dynamic' property because the number of properties there will be are unknown. Left key - best practice - will be the key always being a string and the calue ( on the right of the colon) can be different valid types in ts
};

let store: DataStore = {};
// ...
store.id = 5;
store.isOpen = false;
