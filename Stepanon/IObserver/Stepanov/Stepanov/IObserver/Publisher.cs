using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Stepanov
{
    public class Publisher : ISubject //издатель
    {
        List<IObserver> subscribe = new List<IObserver>();
        public void Add(IObserver observer)
        {
         
            Console.WriteLine($"Добавление подписчика {observer.GetType().Name}");
            subscribe.Add(observer);
        }

        public void Remove(IObserver observer)
        {
            Console.WriteLine($"Удаление подписчика {observer.GetType().Name}");
            subscribe.Remove(observer);
        }

        public void Notify()
        {
            foreach (var item in subscribe)
            {
                Console.WriteLine($"Удаление подписчика");
                item.Update(this);
            }
        }
    }
}
