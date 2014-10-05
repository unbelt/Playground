using System;

class CartesianCoordinateSystem
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine(C(n, n));
    }
    static int C(int x, int y)
    {
        if (x == 0 && y == 0) return 0;
        else if (x == 0) return 5;
        else if (y == 0) return 6;
        else if (x > 0 && y > 0) return 1;
        else if (x < 0 && y > 0) return 2;
        else if (x < 0 && y < 0) return 3;
        return 4;
    }
}