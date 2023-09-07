type Metadata = { title: string; description: string } | undefined;

type Handler = {
  GET: Function;
  POST: Function;
  PUT: Function;
  PATCH: Function;
  DELETE: Function;
};
