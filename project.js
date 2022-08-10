// <<<< 숫자와 문자 >>>>

// <<< 숫자 >>>
const number = Math.pow(3,2);  // 3의 2제곱을 의미
console.log(number); // 9 

const number = Math.round(10.6);  // 반올림을 의미
console.log(number); // 11

const number = Math.ceil(10.2);  // 올림을 의미
console.log(number); // 11

const number = Math.floor(10.2);  // 내림을 의미
console.log(number); // 10

const number = Math.sqrt(9);  // 제곱근을 의미
console.log(number); // 3

const number = Math.random();  // 랜덤한 숫자를 의미
console.log(number); 

const number = Math.round(100 * Math.random()); 
console.log(number);

// <<< 문자 >>> 
const string1 = "hello world";    // 문자를 쓸때는 항상 큰 따움표나, 작은 따움표로 묶어줘야한다.
const string2 = 'hello world';
const string3 = "hello world '";
const string4 = 'hello world";    // 작은 따움표와 큰 따움표를 한번씩만 사용하면 에러가 발생한다.
const string5 = 'egoing\'s coding everybody';   // 작은 따움표로 감싼 문자열에서 ' 을 표현하고 싶을때는 \(역슬래쉬) 를 이용하면 된다. 
역슬래쉬의 바로 뒤에 있는 문자하나는 기호가 아닌 문자로 해석한다. 

console.log(string1); // hello world
console.log(string2); // hello world
console.log(string3); // hello world '
console.log(string4); // SyntaxError: Invalid or unexpected token
console.log(string5); // egoing's coding everybody

console.log("1");    // 이 코드와, 아래의 코드 모두 1로 출력되지만 그 둘의 데이터타입은 다르다.
console.log(1);
console.log(typeof("1"));   // string
console.log(typeof(1));     // number

console.log("coding\neverybody");  // coding       // 줄바꿈을 하고 싶을때는 \n을 추가해주면된다.
                                   // everybody  

console.log("coding" + " " + "everybody");  // coding everybody 문자열끼리는 + 연산자를 이용해 합칠수있다.

console.log(1 + 1);  // 2
console.log("1" + "1");  // 11

console.log("coding everybody".length);  // 16 length는 문자열의 길이를 반환한다.



// <<<< 변수 >>>>

var a = 1;
console.log(a); // 1
a = 10;
console.log(a); // 10

a = 1;
b = 2;
console.log(a + b); // 3

a = 2;
console.log(a + b); // 4


// 변수에는 숫자뿐만아니라 어떠한 형태의 값도 담길수 있다.
var first = "coding";
console.log(first + ' everybody'); // coding everybody
first = '코딩';
console.log(first + ' everybody')  // 코딩 everybody

// 변수 선언시 두개의 변수를 한줄로 선언 할수도 있다.
var a = 'coding' , b = 'everybody';
console.log(a + b);    // codingeverybody





// <<<< 비교 >>>>
// == 동등 연산자
console.log(1 == 2); // false
console.log(1 == 1); // true
console.log("one" == "two"); // false
console.log("one" == "one"); // true

const a = 1;
console.log(a == 1);  // true


// === strict equal operator 좌항과 우항이 '정확'하게 같을 때 true , 다르면 false가 된다.
console.log(1 == "1");  // true
console.log(1 === "1"); // false      // === 을 사용하는 편이 코드의 오류를 줄이는데 도움이 된다.


var a;
console.log(a);  // undefined   값이 정의되지 않은것이다.

var a = null;
console.log(a);  // null   값이 없는것이다.

console.log(undefined == null);   // true
console.log(undefined === null);  // false

console.log(typeof(undefined));   // undefined
console.log(typeof(null));        // object


// == 동등연산자에서는 true와 숫자 1을 true로 평가하고, 나머지 숫자들은 false로 평가한다.
console.log(true == 1);  // true
console.log(true == 2);  // false
console.log(true == 3);  // false

console.log(true === 1);  // false
console.log(true == '1'); // true
console.log(true == '2'); // false


console.log(0 == -0);      // true
console.log(NaN === NaN);  // false  


// != 은 서로 달라야 true 이다.
console.log(1 != 2);  // true
console.log(1 != 1);  // false

console.log(1 !== 2); // true
console.log(1 !== '1'); // true

console.log(1 > 2);  // false
console.log(3 > 2);  // true
console.log(3 >= 3); // true



// <<<< 조건문 >>>> 
// < if >
if(true) {         // true 이기때문에 실행된다.
    console.log('result : true');  
}

if(false) {        // false 이기때문에 실행되지 않는다.
    console.log('result : true');
}


// < else >
if(true) {
    console.log(1);
}
else {
    console.log(2);
}


if(false) {
    console.log(1);
}
else {
    console.log(2);
}

// < else if >
if(false) {
    console.log(1);
}
else if(false) {
    console.log(2);
}
else if(true) {
    console.log(3);
}
else {
    console.log(4);
}


// prompt   - 입력한 정보가 id라는 변수에 저장된다.

    var id = prompt('아이디를 입력해주세요.');
    if(id == 'puppy') {
        var password = prompt('비밀번호를 입력해주세요');
        if(password == '111111') {
            alert('로그인 하셨습니다.' + id + '님 반값습니다.');
        }
        else {
            alert('비밀번호가 다릅니다.');
        }
    }
    else {
        alert('아이디가 일치하지 않습니다.');
    }

// < 논리 연산자 >
// && 좌항과 우항이 전부 true 일때 true 하나라도 false이면 false이다.
if(true && true){
    console.log(1);  // 1
}

if(true && false){
    console.log(2);
}


// 위에 있던 로그인 코드를 논리연산자를 이용하면 좀더 간결하게 바꿀수있다.
var id = prompt('아이디를 입력해주세요.');
var password = prompt('비밀번호를 입력해주세요');
if(id == 'puppy' && password == '111111') {
        alert('로그인 하셨습니다.' + id + '님 반값습니다.');
    }
    else if(password != '111111') {
        alert('비밀번호가 다릅니다.');
    }
else {
    alert('아이디가 일치하지 않습니다.');
}

// || 연산자는 좌항이나 우항중 하나라도 true 이면 true를 반환한다.
if(true || true) {
    alert(1);
}

if(true || false) {
    alert(2);
}


// ! 연산자는 부정의 의미로 true 앞에 붙이면 false로 false앞에 붙이면 true로 변경해준다.
if(!true && !true) {
    alert(1);
}

if(!false && !true) {
    alert(2);
}

if(!false && !false) {
    alert(2);
}

// < boolaen의 대체제 >
// 자바스크립트에서 0은 false, 1은 true로 취급한다.
if(0) {
    console.log(1);
}

if(1) {
    console.log(2);
}

// < false로 간주하는 데이터 형 >
if(!'') {
    console.log('빈 문자열');
}

if(!undefined) {
    console.log('undefined');
}

if(!null) {
    console.log('undefined');
}

if(!NaN) {
    console.log('NaN');
}




// <<<< 반복문 >>>>
// while // 조건이 true 에서 false가 될때까지 반복해서 실행된다.
while(조건) {
    반복해서 실행할 코드
}

// 무한루프를 생성할수 있다.
while(true) { 
    console.log('coding everybody');
}

var i = 0;
while(i < 10) {
    console.log('coding everybody' + i);
    i += 1;
}


// for 문 
for(var i = 0; i < 10; i++) {
    console.log('coding everybody' + i);
}

// 반복문의 제어
// break
for(var i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log('Coding everybody' + i);
}

// continue
for(var i = 0; i < 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log('Coding everybody' + i);
}

// 중천 반복문
for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 10; j++) {
        console.log('Coding everybody' + i + j);  // 문자와 숫자를 결합하면 자바스크립트 엔진이 자동으로 숫자를 문자로 변환한다.
    }
}



// <<<< 함수 >>>>
function 함수명([인자...[,인자]]){
    코드
    return 반환값
}



function numbering() {
    console.log(1);
}
numbering();



// < 입력과 출력 >
// < 출력 >
// return은 두가지 기능을 가진다. 하나는 함수를 끝내는것이고, 나머지 하나는 return 뒤부터 ; 까지 있는 값을 함수의 출력값으로 반환한다.
function get_member1() {
    return 'puppy';
}

function get_member2() {
    return 'cat';
}

console.log(get_member1());
console.log(get_member2());

// < 입력 >
function get_argument(arg){
    return arg * 1000;
}
console.log(get_argument(1));
console.log(get_argument(2));

// 복수의 인자
function get_arguments(arg1, arg2) {
    return arg1 + arg2;
}
console.log(get_arguments(10, 20));
console.log(get_arguments(20, 30)); 

// 함수를 정의 하는 다른 방법
numbering = function() {
    i = 0;
    while(i < 10) {
        console.log(i);
        i += 1;
    }
}
numbering();


// 익명 함수 (즉시 실행 함수)
(function () {
    i = 0;
    while(i < 10) {
        console.log(i);
        i += 1;
    }
})();





// <<<< 배열 >>>>
var member = ['puppy' , 'cat' , 'bird']
console.log(member);


// 배열의 효용
// 함수는 여러인수를 받을수는 있지만 출력값은 하나라는 단점이있지만 배열을 이용하면 출력값을 늘릴수있다.
function get_members() {
    return ['puppy', 'cat', 'bird'];
}
var members = get_members();
console.log(members[0]);
console.log(members[1]);
console.log(members[2]);


function get_members() {
    return ['puppy', 'cat', 'bird'];
}
var members = get_members();
// console.log(members[0].toUpperCase());
// console.log(members[1].toUpperCase());
// console.log(members[2].toUpperCase());
for(var i =0; i < members.length; i++) {
    console.log(members[i].toUpperCase());
}


// 배열의 크기
var a = ['1' , '2', '3', '4'];
console.log(a.length);   // 4

// 배열에 데이터 추가
var li = ['a', 'b', 'c', 'd', 'e']
li.push('f');
console.log(li);

// concat은 인자로 전달된 값을 추가하는 명령이다.(복수의 원소를 배열에 추가하는 방법)
var li = ['a', 'b', 'c', 'd', 'e'];
li = li.concat(['f', 'g']);
console.log(li);

// unshift를 이용하면 배열에 앞쪽에 데이터를 추가할 수 있다.
var li = ['a', 'b', 'c', 'd', 'e'];
li.unshift('z');
console.log(li);

// splice를 이용하여 첫번째 인수의 인덱스부터 두번째 인수의 크기만큼 삭제하고, 첫번째 인덱스의 자리부터 세번째인수를 추가한다.
var a = ['a', 'b', 'c'];
a.splice(1,1,'x','y');
console.log(a);   // [ 'a', 'x', 'y', 'c' ]


// < 배열의 제거와 정렬 >
// 제거
var li = ['a', 'b', 'c', 'd', 'e'];
li.shift(); // 배열에 맨앞 제거
console.log(li); // [ 'b', 'c', 'd', 'e' ]

li.pop(); // 배열에 맨뒤 제거
console.log(li); // [ 'b', 'c', 'd' ]


// 정렬
var li = ['c', 'e', 'a', 'b', 'd'];
li.sort();
console.log(li);  // [ 'a', 'b', 'c', 'd', 'e' ]




// <<<< 객체 >>>>
// 객체는 배열과 비슷한 특성을 가지고 있다 배열은 비슷한 특성을 가진것들을 담는 그릇과 같은 특성이 있는데 객체 또한 그러하다는 점에서 유사성이 있다.
// 하지만 배열은 인덱스를 0,1,2,... 으로 하지만, 객체는 인덱스를 직접 지정할 수 있다는점에서 다른점이 있다. 따라서 인덱스로 문자를 사용하고 싶다면 객체를 사용해야 한다.

var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
// 배열은 [] 이지만 객체는 {} 이다.
// 위에 예제에서 egoing은 key가 되고, 10은 value가 된다. 

console.log(grades)   // { egoing: 10, k8805: 6, sorialgi: 80 }

// 객체를 만드는 다른 방법 1
var grades = {};            // 비어있는 객체를 만든다.
grades['egoing'] = 10;      // 인덱스값을 부여하고 10이라는 값을 지정한다.
grades['k8805'] = 6;        
grades['sorialgi'] = 80;

// 객체를 만드는 다른 방법 2
var grades = new Object();  // 방법 1에서 나오는 {} 과 new Object() 는 같은 의미이다.
grades['egoing'] = 10;
grades['k8805'] = 6;        
grades['sorialgi'] = 80;

// 객체에서 필요한 값을 가져오는 방법 1
console.log(grades['sorialgi']);   // 80
console.log(grades['egoing']);     // 10

// 객체에서 필요한 값을 가져오는 방법 2
console.log(grades.egoing);        // 10    

// 인덱스가 문자열이기 때문에 아래와 같이 문자열을 합쳐서 호출할 수도 있다.
console.log(grades['k88' + '05']);  // 6

console.log(grades.'k88'+'05');   // SyntaxError: Unexpected string


// < 객체와 반복문의 조우 >
// 배열은 순서가 있지만, 객체는 순서가 없다. 대신 객체는 key 와 value 가 있다.
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(key in grades) {         // grades 객체의 key를 key라는 변수에 저장한다.
    console.log("key : "+key+"   value : "+grades[key]);
}


// 이렇게 key가 아닌 다른값으로 key를 받을수도 있다.
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(var name in grades) {         // grades 객체의 key를 key라는 변수에 저장한다.
    console.log("name : "+name+"   value : "+grades[name]);
}

// * for in 문은 배열에서도 사용할 수 있다.
var arr = ['a','b','c'];
for(var name in arr) {
    console.log(name);   // 0 1 2
}

for(var name in arr) {
    console.log(arr[name]);   // a b c
}




// < 객체지향 프로그래밍 >
var grades = {
    'list' : {'egoing' : 10, 'k8805' : 8, 'sorialgi': 80},
    'show' : function() {
        console.log("Hello World");
    }
}

console.log(grades['list'])   // { egoing: 10, k8805: 8, sorialgi: 80 }
console.log(grades['list']['egoing']);   // 10
console.log(grades['show']());  // Hello World

// this 키워드
var grades = {
    'list' : {'egoing' : 10, 'k8805' : 8, 'sorialgi': 80},
    'show' : function() {
        console.log(this.list);    // 여기서 this는 function을 가지고 있는 객체인 grades를 가리킨다.
    }
}
console.log(grades['show']());    // { egoing: 10, k8805: 8, sorialgi: 80 }





var grades = {
    'list' : {'egoing' : 10, 'k8805' : 8, 'sorialgi': 80},
    'show' : function() {
        for(var name in this.list){
            console.log(name, this.list[name]);         // , 을 이용하면 여러개의 인수를 받을 수 있다.
        }
    }
}
console.log(grades.show());       // console.log(grades['show']()); 과 같은 뜻이다.
/*
 egoing 10
 k8805 8
 sorialgi 80
 */




 // <<<< 모듈 >>>>
 // 모듈을 사용하면 코드의 재활용성이 높아져 효율적인 작업이 가능해진다.
 // 아래정도의 함수를 모듈화 시키는것은 의미가 없는 일이지만 실제로는 함수안에있는 코드가 매우길다고 생각하고 실습할것.
 function welcome() {
     return 'Hello World'
 }
 console.log(welcome());



///// 웹브라우저 호스트 환경에서 javascript 모듈을 로드하는 방법
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <script src="greeting.js"></script>   //src 라는 속성은 <script></script> 를 만나게 되면 greeting.js라는 파일을 <>이안에다가 집어넣는것과같은</> 효과가 있다.
    </head>                                   // greeting.js 라는 파일을 만들어서 거기에다가 welcome() 함수의 정의부를 만들어 놓으면 console.leg(welcome()); 만 적어도 welcome()함수를 호출할 수 있다.
    <body>
        <script>
        function welcome() {
            return 'Hello World';
        }
         console.log(welcome());

        </script>
    </body>
</html>


// node.js 호스트 환경에서 모듈을 로드하는 방법은 웹브라우저 호스트와 다르다.


// < 라이브러리 >
// 모듈과 라이브러리는 비슷한 개념이다. 모듈이 프로그램을 구성하는 작은 부품으로서의 로직을 의미한다면 라이브러리는 자주 사용되는 로직을 재사용하기 편리하도록 잘 정리한 
// 일련의 코드들의 집합을 의미한다고 할 수 있다. 프로그래밍의 세계에는 훌륭한 라이브러리가 많다. 좋은 라이브러리를 선택하고 잘 사용하는 것은 프로그래밍의 핵심이라고 할 수 있다.



// <<<< UI 와 API >>>>]
// UI = User Interface
// API = Application programming interface



