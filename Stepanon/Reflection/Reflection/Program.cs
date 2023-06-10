using System;
using System.Diagnostics;
using System.Reflection;

namespace Reflection;
class Program
{
    static void Main()
    {
        int lambda = 34;
        int delta = 35;
        Reflect<int> reflect = new Reflect<int>();
        reflect.Name = "One";
        reflect.Surname = "two";
        reflect.patron = "three";

        Reflect<int> reflect1 = new Reflect<int>();
        reflect1.Name = "four";
        reflect.met(lambda);


        //    var names =
        //typeof(Reflect).GetMembers()
        //               .Select(x => x.Name);

        //    Console.WriteLine(string.Join(Environment.NewLine, names));


    }
}