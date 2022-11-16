export interface ITime {
  id?: number;
  time?: string;
  forca?: number;
  grupo?: string;
  fifa?: number;
}

export class Time implements ITime {
  constructor(
    public id?: number,
    public time?: string,
    public forca?: number,
    public grupo?: string,
    public fifa?: number
  ) {

  }
}
