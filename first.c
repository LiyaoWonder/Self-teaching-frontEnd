#include<stdio.h>

// int main()
// {
//     printf("I\n");
//     printf("am\t");
//     printf("Wonder\n");
//     return 0;
// };
// IamWonder
// \t \n
// 末尾语句(程序结尾)加 \n


// int main()
// {
//     printf("*******\n");
//     printf("Wonder\n");
//     printf("*******\n");
//     return 0;
// };

int a2 = 3;
float c2 = 3.14;
// much digit
double d2 = 3.1425;

char a3 = 'A';
int a4 = 3, b, c = 5;
/*
int b;
int a = 3;
int c = 5;

int a, b, c;
a = 3
b = 5
*/

int operation()
{
    int a = 5, b, c, d, e, f;
    b = a + 2;
    c = b - a;
    d = a * c;
    e = a / d;
    f = a % d;
    printf("a = %d, b = %d, c = %d\n", a, b, c);
    printf("e = %d, f = %d\n", e, f);
    return 0;
};
// %d 整型

int stringOp()
{
    char a = 'B', b = 'O', c = 'Y';
    a = a + 32;
    b = b + 32;
    c = c + 32;
    return 0;
};
// boy

/*
x *= y + 8 --> x = x * (y + 8)
z %= 3
*/

// test：123 + 456
int test1()
{
    // double %f char %s/%c
    int a, b, sum;
    a = 123;
    b = 456;
    sum = a + b;
    printf("%d\n", sum);
    return 0;
};

int test_input()
{
    int inputA, inputB, outputC;
    // float %f double %lf char %c
    printf("请输入两个数字(用逗号隔开)：\n");
    scanf("%d, %d", &inputA, &inputB);
    outputC = (inputA + inputB) / 2;
    printf("%d与%d的平均数为%d\n", inputA, inputB, outputC);
    return 0;
};

int test_input2()
{
    char a, b, c;
    // input
    a = getchar();
    b = getchar();
    c = getchar();
    a += 32;
    b += 32 ;
    c += 32;
    // output
    putchar(a);
    putchar(b);
    putchar(c);
    putchar('\n');
    return 0;
}

#include<math.h>
#include<stdlib.h>
int mathProblem()
{
    int x;
    x = -1;
    abs(x);
    double y;
    y = -0.002;
    fabs(y);
    // double z;
    // sin(z);
    // all data is double tan(z); eX exp(x); xY pow(x, y); aqure root sqrt(x);
    // ln --> log(x)  log10 --> log10(x)
    return 0;
};

/*
三角形三边 a b c 利用公式 area = squareRoot(s(s-a)(s-b)(s-c))
求该三角形的面积 area s = (a + b + c) / 2
*/
int triangleArea()
{
    int a, b, c;
    float s, area;
    scanf("%d, %d, %d", a, b, c);
    s = (a + b + c) / 2;
    area = sqrt(s * (s - a) * (s - b) * (s - c));
    printf("a=%d\tb=%d\tc=%d\n", a, b, c);
    printf("三角形面积为%-5.2f\n", area);
    // %5.2f 7.4f 注意点也算一个格 -号代表将空格补在后面
    return 0;
};

int significantFigrues()
{
    printf("傻狍子的身高是%e厘米\n", 123.456);
    // 输出 1.23456e+002 default:小数点后6位 e+00x 5位
    // (int)(equation) 一般是用来去位数
    float a;
    int b;
    b = (int)(a / 1000);
    return 0;
};

int main()
{
    test1();
    // test_input();

};
