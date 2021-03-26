using System;

namespace Modulo_2
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Elija si quiere lo que quiere \n 1 : Sacar el porcentaje de un numero con realacion a un valor total \n 2 : Sacar el cien porciento de un valor sabiendo su pocentaje");
            System.Console.WriteLine("3:Sacar el porcentaje de un numero sabiendo su 100% \n 4: Sacar el puntaje de una ejericio");
            int opcion =Convert.ToInt32(Console.ReadLine());

            int a;//valor total 
            int b;//valor variable
            int c;//porcentaje de la valor variable

            switch(opcion)
            {
                case 1:
                    System.Console.WriteLine("Que numero es el total o el 100%");
                    a =Convert.ToInt32(Console.ReadLine());

                    System.Console.WriteLine("De que numero quieres saber el porcentaje");
                    b =Convert.ToInt32(Console.ReadLine());

                    c = b * 100/a;
                    System.Console.WriteLine($"{b} es el {c}% de {a}");
                    
                    break;

                case 2:
                    System.Console.WriteLine("A que numero le quieres sacar su 100%");
                    b =Convert.ToInt32(Console.ReadLine());

                    System.Console.WriteLine("Cuale es el porcentaje de ese numero");
                    c =Convert.ToInt32(Console.ReadLine());

                    a = b * 100/c;
                    System.Console.WriteLine($"{b} es el {c}% de {a}");
                    
                    break;

                case 3:
                    System.Console.WriteLine("Que numero es el total o el 100%");
                    a =Convert.ToInt32(Console.ReadLine());

                    System.Console.WriteLine("A que porcentaje del total quieres saber su numero");
                    c =Convert.ToInt32(Console.ReadLine());

                    b = a * c/100;
                    System.Console.WriteLine($"{b} es el {c}% de {a}");
                    
                    break;

                case 4:
                    System.Console.WriteLine("cual es el valor del examen ");
                    double valorE=Convert.ToInt32(Console.ReadLine());

                    System.Console.WriteLine("cual fue el valor sacado");
                    double valorS=Convert.ToInt32(Console.ReadLine());

                    double nota =4/valorE * valorS + 1;

                    System.Console.WriteLine($"El examen era de {valorE} pts y obtuviste {valorS} pts nota es de {nota}");

                    break;

            }
        }
    }
}
