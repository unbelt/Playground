using System;
using System.Linq;

class Program
{
    static void Main()
    {
        var b = char.Parse(Console.ReadLine());
        int n = int.Parse(Console.ReadLine());
        string r = "";

        while (n-- > 0)
        {
            r += Convert.ToString(long.Parse(Console.ReadLine()), 2).ToCharArray().Count(i => i.Equals(b)) + "\n";
        }

        Console.WriteLine(r);
    }
}