import { faker } from '@faker-js/faker';

export class User {
  constructor(
    private name = faker.name.firstName(),
    private location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  ) {}
}
