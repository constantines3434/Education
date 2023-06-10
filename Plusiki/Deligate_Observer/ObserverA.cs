using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pattern_Observer
{
    class ObsA                              // класс-наблюдатель
    {
        public void reactA(object o)        // реакция на событие источника
        {
            Console.WriteLine("Реакция на событие Наблюдателем A");
        }
    }
}
