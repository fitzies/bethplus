type Metadata =
  | { title: string; description: string; urlPrefix?: string }
  | undefined;

type Handler = {
  GET: Function;
  POST: Function;
  PUT: Function;
  PATCH: Function;
  DELETE: Function;
};

type Routedata = {
  slug: string;
};
