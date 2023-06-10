using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Stepanov
{
    public interface ISubject //действия для издателя
    {
        void Add(IObserver observer);
        void Remove(IObserver observer);
        void Notify();
    }
}
