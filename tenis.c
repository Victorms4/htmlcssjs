#include <stdio.h>
#include <ctype.h>

void main()
{
    char partidas[7];
    int resultado=0, i=0;

    while(i<6)
    {
        partidas[i] = getchar();
        partidas[i] = toupper(partidas[i]);
            if(partidas[i] != 80 && partidas[i] != 86)
                continue;
        i++;
    }
    partidas[7] = '\0';

    for(i = 0; i<6 ; i++)
    {
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