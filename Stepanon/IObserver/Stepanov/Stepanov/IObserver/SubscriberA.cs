using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Stepanov
{
    public class Subscriber : IObserver
    {
        public void Update(ISubject s)
        {
            Console.WriteLine("Подписчик  получил рассылку о появление книги у издателя");
        }
    }
}
