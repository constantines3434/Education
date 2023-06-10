using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Stepanov
{
    public class SubscriberA : IObserver
    {
        public void Update(ISubject s)
        {
            Console.WriteLine("Подписчик А получил рассылку");
        }
    }
}
