const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  set setAge(age: number) {
    this.age = age;
  },
};

// console.log(profile.age);
// profile.setAge = 40;
// console.log(profile.age);

// const { age }: { age: number } = profile;
const { age }: Pick<typeof profile, 'age'> = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
// const {
//   coords: { lat, lng },
// }: Pick<typeof profile, 'coords'> = profile;
console.log(lat, lng);
