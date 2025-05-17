type FileSource = { type: "file"; path: string };
const fileSource: FileSource = {
  type: "file",
  path: "some/path/to/file.csv",
};

type DBSource = { type: "db"; connectionUrl: string };
const dbSource: DBSource = {
  type: "db",
  connectionUrl: "some-connection-url",
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  // Open + read file OR reach out to database server
  // load file based on the source, find out which parameter type is coming in
  // need a type guard - an if check that ensures that the proper piece of code is executed based on what kind of values we can ge, looking for certain properties
  // if ("path" in source) {
  if (source.type === "file") {
    source.path;
    // source.path; => use that to open the file
    return;
  }
  // source.connectionUrl; => reach out to database if this exists
  source.connectionUrl;
}

// Discriminated Union pattern - adding a shared property to all the types combined in a union and using the values of properties to find out which concrete value type being delt with

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User("Max");
const admin = new Admin(["ban", "restore"]);

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    entity.join();
    return;
  }

  entity.scan();
}
