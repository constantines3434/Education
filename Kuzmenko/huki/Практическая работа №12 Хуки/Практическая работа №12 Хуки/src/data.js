import Picture1 from './Picture1.js';
import Picture2 from './Picture2.js';
import Picture3 from './Picture3.js';

export default [
    {
      name: 'Скотт Пилигрим',
      cost: 200,
      additional: {
        notes: 'Скотт Пилигрим нашел девушку своей мечты.'
      },
      l: 34,
      pic: <Picture1/>
    },
    {
      name: 'Аватар',
      cost: 100,
      additional: {
        notes: 'Только аватар, властелин всех четырех стихий может остановить захватчиков'
      },
      pic: <Picture2/>
    },
    {
      name: 'Матрица',
      cost: 500,
      additional: {
        notes: 'Только избранный может спасти человечество от вечного сна',
      },
      pic: <Picture3/>
    }
  ]