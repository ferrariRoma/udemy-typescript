import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();
new google.maps.Map(document.getElementById('map') as HTMLElement, {
  zoom: 12,
  center: {
    lat: company.location.lat,
    lng: company.location.lng,
  },
});
