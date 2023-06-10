
namespace SingltonLib
{
    public class Singleton
    {
        private static Singleton instance;

        //public string Name { get; private set; }

        protected Singleton()
        {
            //this.Name = name;
        }

        public static Singleton Init()
        {
            instance ??= new Singleton();

            return instance;
        }
    }
    
}