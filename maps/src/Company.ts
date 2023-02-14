import { faker } from '@faker-js/faker';

export class Company {
  constructor(
    private companyName = faker.company.companyName(),
    private catchPhrase = faker.company.catchPhrase(),
    public location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  ) {}
}
