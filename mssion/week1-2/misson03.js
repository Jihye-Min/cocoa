
//factorial 함수
function calculate(n)
{
    var arr_fac = new Array();
    var num = 1;
    for(i = 1; i <= n; i ++)
    {
        num *= i;
        arr_fac.push(num);
    }

    return arr_fac;
}


//id 필터 함수
function filterId(peoples)
{
    var arr_filter = new Array();
    //r newPeoples = new Array();

    var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    var regExp2 = /[(0-9)]/g;
    
    peoples.forEach(element => {
        if(!regExp.test(element))    //특수기호 없는지 체크
        {
            if(regExp2.test(element))    //숫자 있으면 숫자 제외하고 푸쉬
            {
                arr_filter.push(element.replace(/[0-9]/g, ""));
            }
            else    //숫자 없으면 그냥 푸쉬
            {
                arr_filter.push(element);
            }
        }
    });

    console.log(arr_filter.join());
}


//평균 구하는 함수
function printScore(grades)
{
    arr_ave = new Array();  //각 학생의 평균점수
    arr_maxAve = new Array();   //모든 학생의 최고점수의 평균점수
    
    var sum = 0;

    grades.forEach(element => {
        //학생의 평균 구하기
        result = element.reduce((acc, cur, i) => {
            return acc + cur;
        }, 0);
        
        arr_ave.push(result / element.length);

        //학생의 최대값 찾기
        var max = Math.max.apply(null, element);
        arr_maxAve.push(max);
    });
    
    //학생들 최고점수의 평균 구하기
    result2 = arr_maxAve.reduce((acc, cur, i) => {
        return acc + cur;
    }, 0);
    var maxAve = (result2 / grades.length);

    console.log(`각 학생의 평균점수 :\n${arr_ave.join()}`);
    console.log(`모든 학생의 최고점수의 평균점수 :\n${maxAve}`);
}


//객체에서 숫자 밸류의 키만 배열에 저장하는 재귀함수
function checkNumber(data, arr_key)
{
    if(typeof(data) == "object")
    {
        for(key in data)
        {
            var dataValue = data[key];
            checkNumber(dataValue, arr_key);
        }
    }
    else if(typeof(data) == "number")
    {
        arr_key.push(key);
    }
}

//출력용 함수
function printKey(data)
{
    let arr_key = new Array();
    checkNumber(data, arr_key);
    console.log(arr_key.join());
}


//타입이 sk인지 체크해서 이름만 저장하는 함수
function checkArray(data, arr_name)
{
	data.forEach(function(el) {
		if(el.type === 'sk')
		{
			arr_name.push(el.name);
		}
		for(key in el)
		{
			let dataValue = el[key];
			if(typeof(dataValue) == "object")
			{
				checkArray(dataValue, arr_name);
			}
		}
	});
}

function printName(data)
{
    let arr_name = new Array();
    checkArray(data, arr_name);
    console.log(arr_name.join());
}




//Test Case - 1. factorial 함수
console.log("##### Test Case - 1. factorial 함수 #####")
console.log(calculate(4).join());

//Test Case - 2. 배열 거르기
console.log("\n\n##### Test Case - 2. 배열 거르기 #####")
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
filterId(peoples);

//Test Case - 3. 평균 구하기
console.log("\n\n##### Test Case - 3. 평균 구하기 #####")
const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];
printScore(grades);

//Test Case - 4. 배열 만들기
console.log("\n\n##### Test Case - 4. 배열 만들기 #####")
const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}
printKey(data);

//Test Case - 5. 배열 결과 출력
console.log("\n\n##### Test Case - 5. 배열 결과 출력 #####")
const data2 = 
[{
	"id": 1,
	"name": "Yong",
	"phone": "010-0000-0000",
	"type": "sk",
	"childnode": [{
		"id": 11,
		"name": "echo",
		"phone": "010-0000-1111",
		"type": "kt",
		"childnode": [{
				"id": 115,
				"name": "hary",
				"phone": "211-1111-0000",
				"type": "sk",
				"childnode": [{
					"id": 1159,
					"name": "pobi",
					"phone": "010-444-000",
					"type": "kt",
					"childnode": [{
							"id": 11592,
							"name": "cherry",
							"phone": "111-222-0000",
							"type": "lg",
							"childnode": []
						},
						{
							"id": 11595,
							"name": "solvin",
							"phone": "010-000-3333",
							"type": "sk",
							"childnode": []
						}
					]
				}]
			},
			{
				"id": 116,
				"name": "kim",
				"phone": "444-111-0200",
				"type": "kt",
				"childnode": [{
					"id": 1168,
					"name": "hani",
					"phone": "010-222-0000",
					"type": "sk",
					"childnode": [{
						"id": 11689,
						"name": "ho",
						"phone": "010-000-0000",
						"type": "kt",
						"childnode": [{
								"id": 116890,
								"name": "wonsuk",
								"phone": "010-000-0000",
								"type": "kt",
								"childnode": []
							},
							{
								"id": 1168901,
								"name": "chulsu",
								"phone": "010-0000-0000",
								"type": "sk",
								"childnode": []
							}
						]
					}]
				}]
			},
			{
				"id": 117,
				"name": "hong",
				"phone": "010-0000-0000",
				"type": "lg",
				"childnode": []
			}
		]
	}]
}];
printName(data2);
