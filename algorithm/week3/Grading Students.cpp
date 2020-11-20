#include <stdio.h>
#include <stdlib.h>
int* gradingStudents(int arr_ori[], int num_std);


int main()
{
    int num_std;
    scanf("%d", &num_std);
    int arr_ori[num_std];

    for(int i = 0; i < num_std; i++)
    {
        scanf("%d", &arr_ori[i]);
    }

    int* arr_res = gradingStudents(arr_ori, num_std);
    
    for(int i = 0; i < num_std; i++)
    {
        printf("%d\n", arr_res[i]);
    }

    return 0;
}

int* gradingStudents(int arr_ori[], int num_std)
{
    int *arr_res = (int*)malloc(num_std);

    
    for(int i = 0; i < num_std; i++)
    {
        //38미만이면 낙제점수 유지
        //현재값과 5의배수값 차이가 3미만이면 반올림   -> 5의배수값은 몫에 +1값.
        //3이상이면 현재점수 유지
        if(arr_ori[i] < 38)
        {
            arr_res[i] = arr_ori[i];
        }
        else if((((arr_ori[i] / 5) + 1) * 5) - arr_ori[i] < 3 )
        {
            arr_res[i] = ((arr_ori[i] / 5) + 1) * 5;
        }
        else
        {
            arr_res[i] = arr_ori[i];
        }
    }

    return arr_res;
}