using System;
using System.Collections.Generic;

namespace Stepanov
{

    public class Program
    {
        public static void Main()
        {
            Publisher publisher = new Publisher(); //издатель

            Subscriber subscriberA = new Subscriber(); //3 подписчика издательства
            Subscriber subscriberB = new Subscriber();
            Subscriber subscriberC = new Subscriber();

            publisher.Add(subscriberA); //подписваются 
            publisher.Add(subscriberB);
            publisher.Add(subscriberC);

            publisher.Notify();// уведомления для подписчиков

            publisher.Remove(subscriberB);//подписчик отписался от группы
            publisher.Notify(); //вышел но делаем рассылку

            //Console.ReadKey();
        }
    }
}