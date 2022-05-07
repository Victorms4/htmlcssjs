#include <stdio.h>

int main()
{

    int d;

    scanf("%d", &d);

    d = (d - 3) % 8;

    if(d == 3)
        printf("1");
    if(d == 4)
        printf("2");
    if(d == 5)
        printf("3");
}
