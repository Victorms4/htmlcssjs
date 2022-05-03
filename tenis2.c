#include <stdio.h>

void main()
{
    char partidas;
    int resultado=0, i=0;

    for(i = 0; i<6 ; i++)
    {
        scanf(&partidas, "%c")
        if(partidas[i] == 86)
            resultado++;
    }

    if(resultado == 0)
    {
        resultado--;
        printf("%d", resultado);
    }
    if(resultado > 0 && resultado < 3)
    {
        resultado = 1;
        printf("%d", resultado);
    }
    if(resultado > 2 && resultado < 5)
    {
        resultado = 2;
        printf("%d", resultado);
    }
    if(resultado > 4)
    {
        resultado = 3;
        printf("%d", resultado);
    }
}