using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Stepanov
{
    public interface IObserver //наблюдатель
    {
        void Update(ISubject s);
    }
}
