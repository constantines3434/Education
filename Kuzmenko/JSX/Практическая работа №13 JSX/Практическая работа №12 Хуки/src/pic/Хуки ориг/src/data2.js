import Picture4 from './Picture4.js';
import Picture5 from './Picture5.js';
import Picture6 from './Picture6.js';

export default [
  {
    name: 'Курс Китайского',
    cost: 3000,
    additional: {
      notes: 'Нихау'
    },
    pic: <Picture4/>
  },
  {
    name: 'Курс Испанкого',
    cost: 300,
    additional: {
      notes: 'Сходите на корриду'
    },
    pic: <Picture5/>
  },
  {
    name: 'Курс итальяского',
    cost: 150,
    additional: {
      notes: 'Пицца, паста, мацарелла'
    },
    pic: <Picture6/>
  }
]