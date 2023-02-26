import { faker } from '@faker-js/faker';

export class User {
  constructor(
    public name = faker.name.firstName(),
    public location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  ) {}

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
