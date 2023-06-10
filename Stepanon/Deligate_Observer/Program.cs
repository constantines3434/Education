using System;
namespace Pattern_Observer
{
    public delegate void Del(object o);          //объявление делегата

    class Program
    {
        static void Main()
        {
            Subj s = new Subj();                 //объект класса-источника

            ObsA o1 = new ObsA();                //объекты  класса-наблюдателя
            ObsB o2 = new ObsB();
            
             
            s.Register(new Del(o1.reactA));      //регистрация методов
            s.Register(new Del(ObsB.reactB));    //( экземпляры делегата )

            s.Event();                           //инициирование события

            //Console.WriteLine("\nУдаление методов из делегата");
            //s.UnRegister(new Del(o1.Do));
            //s.UnRegister(new Del(o2.Do));

        }
    }
}