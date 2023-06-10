using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Wpf_test
{ 

    public partial class MainWindow : Window
    {
        
        delegate void Message(string str); //deligate
        event Message ev; //event

        static void cout(string str)
        { 
            MessageBox.Show($"Была нажата кнопка с использованием {str}");
        }
        public MainWindow()
        {
            InitializeComponent();
        }

        private void But1_Click(object sender, RoutedEventArgs e)
        {
            Message del;                  // 1. Создаем переменную делегата
            del = cout;                   // 2. Присваиваем этой переменной адрес метода
            del.Invoke("Deligate");       // 3. вызов кнопку, релизованной через делегат

        }

        private void But2_Click(object sender, RoutedEventArgs e)
        {
            ev = cout;                    //1. присвивание ивенту адреса метода
            ev.Invoke("Event");           //2. Вызов кнопки, реализованной через ивент
        }

        private void But3_Click(object sender, RoutedEventArgs e)
        {
           Message lambda = (str) 
                   => MessageBox.Show($"Была нажата кнопка с использованием {str}");
            lambda("Lambda");
        }
    }
}
