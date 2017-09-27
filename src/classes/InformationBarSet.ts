import {InformationBar} from './InformationBar';

export class InformationBarSet {
  private _informationBarSet: Array<InformationBar>;


  get informationBarSet(): Array<InformationBar> {
    return this._informationBarSet;
  }

  set informationBarSet(value: Array<InformationBar>) {
    this._informationBarSet = value;
  }

  removeBarVar(title: string): boolean {
    let index: number;
    for (const item of this.informationBarSet) {
      if (item.title === title) {
        index = this.informationBarSet.indexOf(item, 0);
      }
    }
    if (index > -1) {
      this.informationBarSet.splice(index, 1);
      return true;
    }
    return false;
  }
  removeBarObj(infoBar: InformationBar): boolean {
    return this.removeBarVar(infoBar.title);
  }

  addBarObj(infoBar: InformationBar) {
    this.informationBarSet.push(infoBar);
  }
  addBarVar(title: string, message: string) {
    this.informationBarSet.push(new InformationBar(title, message));
  }

}
