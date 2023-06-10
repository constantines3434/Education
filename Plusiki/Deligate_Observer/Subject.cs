using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pattern_Observer
{

    class Subj                                     // класс-источник
    {
        Del dels;                                  // объявление экземпляра делегата

        public void Register(Del d)                // регистрация делегата
        {
            dels += d;
        }

        public void UnRegister(Del d) // удаление делегата
        {
            dels -= d;
        }

        public void Event()           // Условное событие
        {
            Console.WriteLine("Гипотетическое изменение состояния объекта" +
                " моделируется сообщением\nОповещение о событие:");
            if (dels != null)
            {
                dels(this);           // оповещение наблюдателей
            }  
              
        }
    }
}
