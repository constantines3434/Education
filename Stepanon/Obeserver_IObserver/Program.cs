using System;
using System.Collections.Generic;

namespace Stepanov
{

    public class Program
    {
        public static void Main()
        {
            Publisher publisher = new Publisher(); //издатель, владелец группы

            SubscriberA subscriberA = new SubscriberA(); //3 подписчика группы
            SubscriberB subscriberB = new SubscriberB();
            SubscriberC subscriberC = new SubscriberC();

            publisher.Add(subscriberA); //подписваются на канал
            publisher.Add(subscriberB);
            publisher.Add(subscriberC);

            publisher.Notify();// вышли новости

            Console.WriteLine("Удалили одного из подписчиков");
            publisher.Remove(subscriberB);//подписчик отписался от группы
            publisher.Notify(); //вышел новый контент делаем рассылку

            Console.ReadKey();
        }
    }
}