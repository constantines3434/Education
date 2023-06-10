using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pattern_Observer
{
    class ObsB                                      // класс-наблюдатель
    {
        public static void reactB(object o)            // реакция на событие источника
        {
            Console.WriteLine("Реакция на событие Наблюдателем B");
        }
    }
}
