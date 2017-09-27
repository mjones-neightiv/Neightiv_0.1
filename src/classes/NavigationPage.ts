  export class NavigationPage {

    constructor(name, address: string) {
      this.name = name;
      this.address = address;
    }

    private name: string;
    private address: string;

    public getName() {
      return this.name;
    }

    public setName(name) {
      this.name = name;
    }

    public getAddress() {
      return this.address;
    }

    public setAddress(address: string) {
      this.address = address;
    }


}
