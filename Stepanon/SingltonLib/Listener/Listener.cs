using SingltonLib;
using System.Runtime.CompilerServices;
using System.Text.Json;
using System.Text.Json.Serialization;
using System;
using System.IO;

namespace Listener
{
    class Listener
    {
        public int Id { get; set; }
        public string path_for_information { get; set; }
        public string path_key { get; set; } = "C:\\VS Projects\\SingltonLib\\SingltonLib\\bin\\Debug\\net6.0\\path.txt";
        public Singleton Singleton { get; set; }
        public void Read<T>()
        {
            Singleton = Singleton.Init();

            var info = File.ReadAllText("C:\\VS Projects\\SingltonLib\\SingltonLib\\bin\\Debug\\net6.0\\Producer.txt");
            T? content = JsonSerializer.Deserialize<T>(info);
            Console.WriteLine($"Id Listener = {Id}, Данные из главного файла = '{content}'");
        }
        /// <summary>
        /// //десериализация
        /// </summary>
        //public string Provide<T>()
        //{
        //    //var info = File.ReadAllText(path_key);
            
        //    var info = File.ReadAllText("C:\\VS Projects\\SingltonLib\\SingltonLib\\bin\\Debug\\net6.0\\Producer.txt");
        //   T? content  = JsonSerializer.Deserialize<T>(info);
        //    Console.WriteLine($"Данные из главного файла = '{content}'");

        //    //var info_all = File.ReadAllText(this.path_for_information);
        //    //this.Name = JsonSerializer.Deserialize<string>(info);
        //    return path_for_information;
        //}
        static void Main(string[] args)
        {
            List<Listener> list = new List<Listener>();
            int range = Convert.ToInt32(Console.ReadLine());
            for (int i = 1; i < range; i++)
            {
                Listener listener = new Listener();
                listener.Id = i;
                listener.Read<string>();
            }
        }
    }
}