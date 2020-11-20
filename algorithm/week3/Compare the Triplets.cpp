#include <stdio.h>
#include <stdlib.h>

int* compareTriplets(int a[], int b[], int size)
{
	int aSum = 0, bSum = 0;

	for(int i = 0; i < size; i++)
	{
		if(a[i] > b[i])
		{
			aSum ++;
		}
		else if(a[i] < b[i])
		{
			bSum ++;
		}
	}

	int *arr_res = (int*)malloc(size);
	arr_res[0] = aSum;
	arr_res[1] = bSum;

	return arr_res;
}

int main()
{
	int size = 3;
	int a[size], b[size];
	scanf("%d %d %d", &a[0], &a[1], &a[2]);
	scanf("%d %d %d", &b[0], &b[1], &b[2]);

	int* res= compareTriplets(a, b, size);

	printf("%d %d", res[0], res[1]);

	return 0;
}

