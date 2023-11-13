import Picture1 from './Picture1.js';
import Picture2 from './Picture2.js';
import Picture3 from './Picture3.js';

export default [
    {
      name: 'Курс Английского',
      cost: 2000,
      additional: {
        notes: 'Можно будет слеать в Лондон'
      },
      pic: <Picture1/>
    },
    {
      name: 'Курс франзуцского',
      cost: 10000,
      additional: {
        notes: 'Париж вас ждет'
      },
      pic: <Picture2/>
    },
    {
      name: 'Курс немецкого',
      cost: 500,
      additional: {
        notes: 'Вам в Берлин',
      },
      pic: <Picture3/>
    }
  ]