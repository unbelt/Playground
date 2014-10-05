using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        var c = new Dictionary<string, int>();
        var n = int.Parse(Console.ReadLine());
        while (n-- > 0)
        {
            var v = Console.ReadLine();
            if (!c.ContainsKey(v)) c.Add(v, 0);
            c[v]++;
        }
        Console.WriteLine(c.OrderByDescending(k => k.Value).First().Key);
    }
}