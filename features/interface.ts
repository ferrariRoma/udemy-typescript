const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

interface IReportable {
  // name: string;
  // year: number;
  // broken: boolean;
  summary?(): string;
}

// const printVehicle = (vehicle: {name: string; year: number; broken: boolean;}): void => {
// const printVehicle = (vehicle: typeof oldCivic): void => {
const printSummary = (item: IReportable): void => {
  if (item.summary) console.log(`Name: ${item.summary()}`);
};
printSummary(oldCivic);
printSummary(drink);
