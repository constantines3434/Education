using SingltonLib;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Producer
{
    [Serializable]
    class Producer //сериализация
    {
        public Singleton Singleton { get; set; }

        public string Name { get; set; } = "Constanta";
        /// <summary>
        /// путь к файлу json
        /// </summary>
        public string path_for_information { get; set; } = "C:\\VS Projects\\SingltonLib\\SingltonLib\\bin\\Debug\\net6.0\\Producer.txt";
        public string path_key { get; set; } = "C:\\VS Projects\\SingltonLib\\SingltonLib\\bin\\Debug\\net6.0\\path.txt";

        /// <summary>
        /// Запись информации в json
        /// </summary>
        public void Launch()
        {
            Singleton = Singleton.Init();
            string objectSerialized_info = JsonSerializer.Serialize(this.Name);
            File.WriteAllText(path_for_information, objectSerialized_info);

            string objectSerialized_key = JsonSerializer.Serialize(this.path_for_information);
            File.WriteAllText(path_key, objectSerialized_key);
        }
        /// <summary>
        /// Запись информации в json
        /// </summary>
      
        /// <summary>
        /// продюссер записывает данные в json (информация)
        /// </summary>
        static void Main(string[] args)
        {
            Producer p = new Producer();
            p.Launch();
        }
    }
}
