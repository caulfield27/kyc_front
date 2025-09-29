export interface IResponseError {
  detail: [
    {
      loc: unknown[];
      msg: string;
      type: string;
    },
  ];
}
