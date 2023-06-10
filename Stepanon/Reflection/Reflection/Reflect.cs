using System;
using System.Reflection;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;

namespace Reflection
{
    internal class Reflect<T>
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string patron { get; set; }
        public T t { get; set; }
         
        public void test()
        {
            int a = 0;
            Console.WriteLine("Сработал test"); //this.Reflect
        }
        [MethodImpl(MethodImplOptions.NoInlining)]
        public void met(T t)
        {
            this.t = t;
            
            int b = 34;
            StackTrace st = new StackTrace(true);
            StackFrame sf = st.GetFrame(1);
                
            MethodBase mb = sf.GetMethod();
            MethodBody md = mb.GetMethodBody();
            // myType.GetField(); получение полей
           
            foreach (var local in md.LocalVariables)
            {
                Type myType = local.LocalType;
                if (myType == (t.GetType()))
                {
                    //получение переменной, типы которых равны
                   Console.WriteLine(local);
                   Console.WriteLine(sf);
                    //Console.WriteLine(StackTrace.GetFrame(1).GetMethod().Name);
                }
                // сверка типов дженерик и local
            } 

        }
    }

}   
