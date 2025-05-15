// intersection types allows easy combining types
// e.g. AccessedFileData will have all 4 properties (the 2 from FileData and the 2 from Status)
// intersection type allows you to outsorece shared info into one type (e.g. Status type) and then combine it with all the other types that need shared info like FileData AND DatabaseData
// intersection types can be an alternative to interfaces
type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;
