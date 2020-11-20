#include <stdio.h>
#include <stdlib.h>

int main()
{
	int size;
    scanf("%d", &size);

    int sum = 0;
    signed long long int arr[size];
    for(int i = 0; i < size; i++)
    {
    	scanf("%lld", &arr[i]);
    	sum += arr[i];
    }

    printf("%d", sum);
    
	return 0;
}

