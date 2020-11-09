
class Hash {
    constructor()
    {
        this.hashTable = [];    //해쉬와 데이터 넣는 배열
        this.keyArr = [];       //가공된 키값(해쉬)만 모아놓은 배열
    }

    //해쉬함수
    FNHash1(key)
    {
        let duplicate = 0;
        let newKey = key % 97 + 10**duplicate;
        
        if(this.containKey(newKey)) //해당 키가 이미 있다면 이중해쉬로 새로운 키를 만들자.
        {
            duplicate ++;
            newKey = this.FNHash2(newKey, duplicate);
        }

        return newKey;
    }

    //이중 해쉬. 해쉬함수2
    FNHash2(key, duplicate)
    {
        let newKey = key % 13 + 10**duplicate;
        if(this.containKey(newKey))
        {
            duplicate ++;
            newKey =this.FNHash2(newKey, duplicate);
        }
        return newKey;
    }

    //키와 값을 추가
    put(key, value)
    {
        const newKey = this.FNHash1(key);
        this.hashTable[newKey] = value;
        this.keyArr.push(newKey.toString());    //키만 모아놓는 배열
    }

    //해당 키에 있는 값을 삭제
    remove(key)
    {
        this.hashTable[key] = undefined;
        
    }

    //해당 키가 존재하는지 체크. 키가 있으면 true, 없으면 false
    containKey(key)
    {
        if(this.hashTable[key] != undefined)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    //해당 키와 매치되는 값을 리턴
    get(key)
    {
        return this.hashTable[key];
    }

    //해쉬 맵이 비어있는지 체크
    isEmpty()
    {
        let cnt = 0;
        for(let i = 0 ; i < this.size(); i ++)
        {
            if(el != undefined)
            {
                cnt ++;
                break;
            }
        }/*
        this.hashTable.forEach(el => {
            if(el != undefined)
            {
                cnt ++;
                //break;    //포이치는 브레이크문 사용이 불가능. 포문으로 바꾸자.
            }
        });*/
        if(cnt === 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    //전체 키 목록을 string 배열로 리턴
    keys()
    {
        console.log(this.keyArr);
    }

    //해당 키에 있는 값을 새로운 값으로 변경
    replace(key, newValue)
    {
        this.hashTable[key] = newValue;
    }

    //전체 개수를 리턴
    size()
    {
        return this.hashTable.length;
    }

    //전체 해쉬맵 & 키저장 배열 을 초기화
    clear()
    {
        this.hashTable = [];
        this.keyArr = [];
    }

    printHash()
    {
        console.log(this.hashTable);
    }
}


///// test case /////
var myHash = new Hash();
myHash.put(0, '혼네');
myHash.put(1, '라쎄린드');
myHash.put(2, '샘 피셔');
myHash.put(97, '혼네');
myHash.put(98, '라쎄린드');
myHash.put(99, '샤샤슬론');
myHash.put(194, '에담');
myHash.put(97, '제이슨 므라즈');
myHash.put(194, '케이틀린 타버');

// 해쉬 및 key 출력
console.log("// key 및 hast table 출력");
myHash.keys();
console.log();
myHash.printHash();

// size 및 get 함수 실행 체크
console.log("\n// size 및 get 함수 실행 체크");
console.log("size = ", myHash.size());
console.log("key[2] =" , myHash.get(2));

// replace 및 remove 함수 실행 체크
console.log("\n// replace 및 remove 함수 실행 체크");
myHash.replace(1, '해리 스타일스');
myHash.remove(12);
myHash.printHash();

// cleare 및 empty 함수 실행 체크
console.log("\n// cleare 및 empty 함수 실행 체크")
myHash.clear();
myHash.printHash();
console.log("empty? = ", myHash.isEmpty());
