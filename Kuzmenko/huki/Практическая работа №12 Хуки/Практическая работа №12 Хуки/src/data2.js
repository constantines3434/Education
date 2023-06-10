import Picture4 from './Picture4.js';
import Picture5 from './Picture5.js';
import Picture6 from './Picture6.js';

export default [
  {
    name: 'Сияние',
    cost: 300,
    additional: {
      notes: 'Фестиваль безумия'
    },
    pic: <Picture4/>
  },
  {
    name: 'На игле',
    cost: 400,
    additional: {
      notes: 'Осуждаем наркотики'
    },
    pic: <Picture5/>
  },
  {
    name: 'Аркейн',
    cost: 150,
    additional: {
      notes: 'Мультсериал по игре Лига Легенд'
    },
    pic: <Picture6/>
  }
]