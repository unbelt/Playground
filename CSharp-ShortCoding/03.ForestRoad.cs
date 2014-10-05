using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        for (int i = 0; i < n * 2 - 1; i++)
        {
            Console.WriteLine(i < n ? new String('.', i) + new String('*', 1) + new String('.', n - i - 1) :
                                      new String('.', n * 2 - i - 2) + new String('*', 1) + new String('.', i - n + 1));
        }
    }
}