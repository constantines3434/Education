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
            subscribe.Add(observer);
        }

        public void Remove(IObserver observer)
        {
            subscribe.Remove(observer);
        }

        public void Notify()
        {
            foreach (var item in subscribe)
            {
                item.Update(this);
            }
        }
    }
}
