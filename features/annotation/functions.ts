const add = (a: number, b: number): number => {
  return a + b;
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const utilityTypeof: typeof forecast = {
  date: Date(),
  weather: 'cloudy',
};
const utilityKeyof: keyof typeof forecast = 'weather';

type IForecast = {
  date: Date;
  weather: string;
};

const logWeather = ({ date, weather }: IForecast) => {
  console.log(date);
  console.log(weather);
};
