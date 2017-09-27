export class InformationBar {

  private _title: string;
  private _message: string;

  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

}
