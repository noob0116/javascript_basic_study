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




// <<<< 정규표현식(regular expression) >>>>
// 문자열안에 특정한 문자가 있는지 없는지, 그 문자열을 다른 문자열로 치환해주는 기능을 제공하는 도구이다.
// 정규표현식으로 흔히 하는일 3가지 
/*
1. 원하는 정보 추출
2. 원하는 정보가 있는지 test
3. 정보를 다른정보로 치환
*/

// 정규표현식이 필요한 예시
생활코딩 : <a href="http://opentutorials.org/course/1">http://opentutorials.org/course/1</a>
네이버 : <a href="http://naver.com">http://naver.com</a>
// 만약 위의 코드에서 생활코딩과 네이버의 url을 링크로 표현하고 싶다면 직접 <a href></a> 태그를 이용해서 링크로 표현하는 방법이 있다.
// 하지만 이렇게 링크로 표현해야할 사이트가 매우 많다면 일일히 직접 표현하는것은 쉽지않을것이다. 이럴때 한줄의 코드로 링크로 바꿔줄수있는것이 정규 표현식이다.


// < 정규표현식 패턴 만들기 >
// 1. 정규표현식 리터럴
var pattern = /a/;  //   / + 찾고자 하는 문자 + /

// 2. 정규표현식 객체 생성자
var pattern = new RegExp('a');   // regular expression 의 약자. 괄호안에 문자를 찾고자 한다는 것을 의미



// < 정규표현식 메소드 실행 >

// exec 
// 찾고자 하는 대상이 문자열에 있을때 그 값을 배열로 리턴하는 메서드 (정보 추출)
var pattern = /a/;
// pattern 에는 우리가 원하는 정보가 담겨져 있고 exec('') 에서 ''안에는 그 정보를 찾을 문자열을 입력한다.
console.log(pattern.exec('abcde'));   // [ 'a', index: 0, input: 'abcde', groups: undefined ]
console.log(pattern.exec('davse'));   // [ 'a', index: 1, input: 'davse', groups: undefined ]

// /a./ 일때 .은 하나의 문자를 의미한다. 그 문자가 어떤것인지는 상관이 없지만 무조건 문자가 하나는 있어야한다.
var pattern = /a./;
console.log(pattern.exec('abcde'));   // [ 'ab', index: 0, input: 'abcde', groups: undefined ]

var pattern = /a/;
console.log(pattern.exec('bcdef'));  // null


// tset 
// 찾고자 하는 값이 있는지 없는지 찾는 메서드 (찾는 정보가 있는지 없는지 test)
var pattern = /a/;
console.log(pattern.test('abcde'));  // true

var pattern = /a/;
console.log(pattern.test('bcdef'));  // false


// match 메서드
var pattern = /a/;
var str = 'abcdef';
console.log(str.match(pattern));  // [ 'a', index: 0, input: 'abcdef', groups: undefined ]
str = 'bcdef';
console.log(str.match(pattern));  // null


// replace 메서드
// 특정 정보를 원하는 정보로 치환해주는 메서드
var pattern = /a/;
var str = 'abcdef';
console.log(str.replace(pattern,'A'));  // Abcdef


// < 옵션 >
// i 
// i를 붙이면 대문자 소문자를 구분하지 않는다.
var xi = /a/;
console.log("Abcde".match(xi));  // null

var oi = /a/i;
console.log("Abcde".match(oi));  // [ 'A', index: 0, input: 'Abcde', groups: undefined ]

// g
// g를 붙이면 찾고자 하는 정보가 문자열에 몇개가 포함되었든 전부 배열에 담아서 리턴해준다.
var xg = /a/;
console.log("abcdea".match(xg));  // [ 'a', index: 0, input: 'abcdea', groups: undefined ]

var og = /a/g;
console.log("abcdea".match(og));  // [ 'a', 'a' ]

//
var ig = /a/ig;
console.log("AbcdeaA".match(ig)); // [ 'A', 'a', 'A' ]




// < 캡처 >
var pattern = /(\w+)\s(\w+)/;       // \w은 단어(a~z,A~Z,0~9)를 의미하고 뒤에 +는 추가적으로 다른 단어가 붙어도된다는것을 의미한다. \s는 스페이스를 의미하고 ()은 그룹을 의미한다. coding everybody 은 이 정규표현식을 만족하는 문자열이다.
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1"); // $2 라는것은 패턴에서 두번째 그룹을 의미한다. $1은 첫번째 그룹을 의미한다.
console.log(result);   // everybody, coding




// < 치환 >
var urlPattern = /\b(?:https?):\/\/[a-z0-0-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){     // replace가 실행될때 그 메서드 안에서 urlPattern을 찾을때 마다 2번째 인수로 전달된 function이 실행된다. 그때 함수의 인자는 urlPattern 에서 설정한 값(여기서는 url)이 된다.
    return '<a href ="'+url+'">'+url+'</a>';
});
console.log(result);





// <<<< 유효범위 >>>>
// < 전역변수 / 지역변수 >
// 유효범위(scope)는 변수의 수명을 의미한다. 
// 함수의 외부에 선언되어있는 vscope를 함수의 내부에서 호출할 수 있다.
var vscope = 'global';
function fscope() {
    console.log(vscope);
}
fscope();   // global

// 만약 함수 내부와 외부에 둘다 vscope가 정의되어있다면 더 가까운쪽인 함수 내부의 vscope를 참조한다.
var vscope = 'global';
function fscope() {
    var vscope = 'local';
    console.log(vscope);
}
fscope();  // local


// 함수 내부에 정의된 변수는 함수의 밖에서는 참조 할 수 없다.
var vscope = 'global';
function fscope() {
    var vscope = 'local';
    var lv = 'local variables';
    console.log(lv);
}
fscope();       // local variables
console.log(lv);    // ReferenceError: lv is not defined


// 상황1 함수 내부에 var vscope를 정의한 상황에서 함수 외부에서 vscope를 호출했을때
// 함수 내부에서 var를 사용하면 그 변수는 지역변수가 된다.
var vscope = 'global';
function fscope() {
    var vscope = 'local';
}
fscope();  
console.log(vscope)   // global

// 상황2 함수 내부에 vscope 의 값을 local로 변경한 후, 함수 외부에서 vscope를 호출했을때
// 함수내부에서 var를 사용하지 않고 vscope의 값을 변경하면 그 변수는 전역변수인 vscope를 의미한다.
var vscope = 'global';
function fscope() {
    vscope = 'local';
}
fscope();  
console.log(vscope)   // local


// 함수내부에서 var vscope를 선언하면 함수 외부,내부 둘다 vscope라는 변수가 생성된것이고, 함수내부에서 vscope를 의 값을 변경하면 전역변수vscope가 아니라 지역변수 vscope의 값을 변경하게 된다.
var vscope = 'global';
function fscope() {
    var vscope = 'local';
    vscope = 'local';             // vscope라는 지역변수가 있는지 먼저 확인한 후, 없으면 전역변수중 vscope가 있는지 확인한다.
}
fscope();  
console.log(vscope)   // global

/////// 전역변수를 써야할 확실한 이유가 없다면 언제나 지역변수를 사용하는것이 더 좋다.



// < 유효범위의 필요성 >
// 함수 내부의 i 는 지역변수이다 for 문에있는 var i 가 의미하는것은 전역변수이다 
function a () {                     
    var i = 0;
    console.log(i);
}
for(var i = 0; i < 5; i++) {
    a();
    //console.log(i);    // 0 1 2 3 4 
}
console.log(i);
a();


// function 안에 있는 i 에 var를 없애면 for문안에있는 a(); 에 전역 변수 i = 0;이라는 값이 들어가는것과 같다. 따라서 계속 i = 0인상태가 되고 결국 i < 5를 벗어날수 없으므로 무한루프에 빠지게 된다.
function a () {                     
    i = 0;
}
for(var i = 0; i < 5; i++) {
    a();
    console.log(i);    // 0 0 0 0 0 0 0 0 0 .......
}




// < 전역변수의 사용 >
// 불가피하게 전역변수를 사용해야 하는 경우는 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 사용한다.
// calculator 와 coordinate 에 있는 left 와 right는 둘다 동일한 이름을 가지지만 서로 충돌하지는 않는다.
var MYAPP = {}
MYAPP.calculator = {
    'left' : null,       
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}

MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
console.log(sum());  // 30


// 단 하나의 전역변수도 허용하고 싶지 않다면 
// 이렇게 익명함수(즉시실행함수)로 만들어주면 MYAPP은 더이상 전역변수가 아니라 지역변수가 된다.
(function(){var MYAPP = {}
MYAPP.calculator = {
    'left' : null,       
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}

MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
console.log(sum());  // 30
}())




// < 유효범위의 대상(함수) >
// 자바스크립트는 함수에 대한 유효범위만을 제공한다. 많은 언어들이 블록(대체로{,})에 대해 유효범위를 제공하는 것과 다른 점이다. 



// 자바스크립트 코드
for(var i = 0; i < 1; i++){
    var name = 'coding everybody';
}
console.log(name);   // coding everybody

// 자바 코드
// 자바스크립트에서는 for {}안에서 선언된 변수도 전역 변수로 처리했지만 자바나 다른많은 언어들은 {} 안에서 선언하면 지역변수로 처리하기때문에 {} 밖에서 호출을 할 수 없다.
for(int i = 0; i < 10; i++){
    String name = 'Iron man';
}
System.out.println(name);  // Error




// < 정적 유효범위 >
// 자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다. 이러한 유효범위의 방식을 정적 유효범위(static scoping), 혹은 렉시컬(lexical scoping)이라고 한다.
var i = 5;  // 전역변수

function a() {
    var i = 10;
    b();
}

function b() {
    console.log(i);        // b() 안에 지역변수 i 가 있는지 확인하고, 없으면 전역변수에서 i를 찾게되는데, 이때 사용될때는 b함수 내부에서 사용되기 때문에 b함수의 선언된 지역변수 i를 참조할 수 있어보이지만, 실제로는 전역에 선언되 var i = 5를 참조한다. 
}                          // 한마디로 사용될때를 기준으로 참조하는 것이 아니라, 사용될 때를 기준으로 변수를 참조한다.

a();  // 5





// <<<< 값으로서의 함수와 콜백 >>>>
// 자바스크립트에서는 함수도 객체다. 다시 말해서 일종의 값이다. 거의 모든 언어가 함수를 가지고 있다. 자바스크립의 함수가 다른 언어의 함수와 다른 점은 함수가 값이 될 수 있다는 점이다. 
// 이 함수는 a라는 변수에 저장되어있다고 할 수 있다.
function a(){}
// 이 함수를 다르게 표현하면
var a = funciton() {}

// 또한 함수는 다음과 같이 객체의 값으로 포함될 수 있다. 이렇게 객체의 속성 값으로 담겨진 함수를 메소드(method)라고 부른다.
a = {
    b:function(){       // 여기서 b는 객체안에서 변수와 같은 역할을 하고 있다 이것을 다른 말로 속성, 영어로는 property 라고 부른다. 또한 그 속성의 값이 함수라면 메소드(method)라고 부른다.
    }
};

// 함수는 값이기 때문에 다른 함수의 인자로 전달 될수도 있다.
function cal(func, num){
    return func(num)
}

function increase(num) {
    return num + 1
}

function decrease(num) {
    return num - 1
}

console.log(cal(increase, 1));   // 2
console.log(cal(decrease, 1));   // 0



// 함수는 함수의 리턴 값으로도 사용할 수 있다.
function cal(mode) {
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }

    return funcs[mode];
}
console.log(cal('plus')(2, 1));   // 3
console.log(cal('minus')(2, 1));  // 1



// 배열의 값으로도 함수를 사용할 수 있다.
// 변수 매개변수 리턴값 등으로 사용할 수 있는 데이터를 first-class-citizen or first-class-object 등등 으로 부른다.
var process = [
function(input) { return input + 10;},    
function(input) { return input * input;},
function(input) { return input / 2;}    
];
var input = 1;
for(var i = 0; i < process.length; i++) {
    input = process[i](input);
}
console.log(input); // 60.5



// < 콜백 >
// 어떠한 함수가 수신하는 인자가 함수인 경우를 콜백이라고 한다.
// 콜백함수를 이용하면 콜백함수를 받는 원래의 함수가 동작하는 방식을 완전히 바꿀수 있다.
// 아래의 예로는 sort()함수가 원래의 동작방식과는 다르게 동작하도록 sortfunc라는 콜백함수를 이용하는 것이다.
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var sortfunc = function(a, b) {   // 비교대상이 a 와 b 가 인자로 전달된다.
    if( a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
 }

console.log(numbers.sort(sortfunc));    // sort() 앞에 .이 있는것으로 numbers가 객체(배열객체)라는것을 알 수 있다. 여기서 sort()는 객체에 속한 함수이므로 method라고 한다. sort()와 같은 메서드는 기본적으로 자바스크립트에서 제공하는것이므로 이런것은 빌트인객체 라고 하고 사용자가 만드는것은 사용자정의객체 라고 한다.
                                        // sortfunc 함수가 여기서는 콜백함수가 된다.




// 위의 처럼 a와 b의 관계를 1 , -1, 0으로 구분한다면 다음과 같이 더 단순한게 바꿀수 있다.
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var sortfunc = function(a, b) {
   return a - b;
   // return b - a; 라고 하면 역순으로 정렬된다.
 }

console.log(numbers.sort(sortfunc));





// < 비동기 콜백 >



// <<<< 클로저 >>>>
// 클로저(closure)는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다. 클로저는 자바스크립트를 이용한 고난이도 테크닉을 구사하는데 필수적인 개념으로 활용된다.

// 내부함수
// 자바스크립트는 함수 안에서 또 다른 함수를 선언할 수 있다. 
// 함수 outter의 내부에는 함수 inner가 정의 되어 있다. 함수 inner를 내부 함수라고 한다.
function outter() {
    function inner() {
        var title = 'coding everybody';
        console.log(title);
    }
    inner();
}

outter();    // coding everybody


// 내부함수는 외부함수의 지역변수에 접근할 수 있다. 
function outter() {
    var title = 'coding everybody';
    function inner() {
        console.log(title);
    }

    inner();
}

outter();    // coding everybody



// 클로저(closure)는 내부함수와 밀접한 관계를 가지고 있는 주제다. 내부함수는 외부함수의 지역변에수 접근 할 수 있는데 외부함수의 실행이 끝나서 외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근 할 수 있다. 이러한 메커니즘을 클로저라고 한다. 
function outter() {
    var title = 'coding everybody';
    return function() {
        console.log(title);
    }
}
var inner = outter();
inner();  // coding everybody     외부함수가 실행이 끝나면 종료됨에도 불구하고 외부함수에서 파생된 내부함수에서 이미 사라진 외부함수에 접근을 시도하고 있고, 그 접근이 성공적으로 이루어질뿐만아니라 외부함수가 종료된 이후에도 내부함수를 통해서 접근할 수 있다.




// < private variable >
function factory_movie(title) {
    return {
        get_title : function() {
            return title;
        },
        set_title : function(_title) {
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
console.log(ghost.get_title());    // Ghost in the shell
console.log(matrix.get_title());   // Matrix
ghost.set_title("공각기동대");
console.log(ghost.get_title());    // 공각기동대   ghost라는 변수의 title의 값만을 변경할수 있을뿐 matrix가 접근하는 title의 값은 그대로 유지된다.
console.log(matrix.get_title());   // Matrix



// title 이라는 변수를 숨겨놓고 이 변수에 접근하기 위해서는 get_title과 set_title만을 이용해서 접근할 수 있게 한다. 또한 변경할 수 있는 데이터타입을 지정할수 있다.
function factory_movie(title) {
    return {
        get_title : function() {
            return title;
        },
        set_title : function(_title) {
            if(typeof _title === 'String'){
            title = _title
        } else {
            console.log("제목은 문자열이어야 합니다.");
            }
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
console.log(ghost.get_title());    // Ghost in the shell
console.log(matrix.get_title());   // Matrix
ghost.set_title("1");              // 제목은 문자열이어야 합니다
console.log(ghost.get_title());    // Ghost in the shell
console.log(matrix.get_title());   // Matrix




// 클로저를 사용할 때 흔히 일어나는 실수
// 실행전 기대하는 출력은 0 1 2 3 4 이지만 실제 출력되는값은 55555이다. 이러한 현상이 발생하는 이유는 for문에서 선언한 var i 가 전역변수로 취급되기 때문이다.
var arr = []
for(var i = 0; i < 5; i++) {
    arr[i] = function() {
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}
/*
5
5
5
5
5
*/


// 렉시컬 환경의 "외부 렉시컬 환경에 대한 참조"에 저장할 참조값, 즉 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경(위치)에 의해 결정된다. 이것이 바로 렉시컬 스코프다.
const x = 1;
function foo() {
    const x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo();   // 1
bar();   // 1


// https://youtu.be/bwwaSwf7vkE (closure 개념 설명 영상)

let l0 = 'l0';
function fn1() {
    let l1 = 'l1';
    console.log(l0, l1);   
}
fn1();   // l0 l1




// <<<< arguments >>>>
// 함수에는 arguments라는 변수에 담긴 숨겨진 유사 배열이 있다. 이 배열에는 함수를 호출할 때 입력한 인자가 담겨있다. 
// 자바스크립트에서는 매개변수가 없을때 인자를 입력해도 에러가 나지 않는다.
function sum() {
    var i, _sum = 0;
    for(i = 0; i < arguments.length; i++) {  // arguments에는 인자들이 보관된다. arguments.length를 통해 전달받은 인자의 개수를 알 수 있다.
        console.log(i+' : '+arguments[i]);   // arguments[0] = 1, arguments[1] = 2, arguments[3] = 3, ...
        _sum += arguments[i]
    }
    return _sum;
}


console.log('result : ' +sum(1, 2, 3, 4));         // 10
console.log('result : ' +sum(1, 2, 3, 4, 10));     // 20





// < 매개변수의 수 >
// 매개변수와 관련된 두가지 수가 있다. 하나는 함수.length, 다른 하나는 arguments.length이다. 함수 length는 함수로 전달된 실제 인자의 수를 의미하고, arguments.length는 함수에 정의된 인자의 수를 의미한다.
// 사용자가 개발자의 의도와 다르게 함수를 사용할 수도 있으므로 함수.length와 arguments.length를 서로 비교해서 올바르게 사용할 수 있도록 유도할 수 있다.
function zero() {
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
zero();  // zero.length 0 arguments 0



function one(arg1) {
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}

one('val1', 'val2');  // one.length 1 arguments 2       // .length 는 함수의 매개변수의 숫자를 의미하므로 1이고, arguments.length는 실제로 전달한 인자의 개수를 의미하므로 2이다.



function two(arg1, arg2) {
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
two('val1');     // two.length 2 arguments 1






// <<<< 함수의 호출 >>>>
// 가장 기본적인 함수 호출 방법
function func() {
}
func();



// < Function.apply, Function.call
// JavaScript는 함수를 호출하는 특별한 방법을 제공한다. 함수는 객체이다. 아래의 예제에서 함수 func는 Function이라는 객체의 인스턴스다. 따라서 func는 객체 Function이 가지고 있는 메소드들을 상속학 있다. Function.apply와 Function.call을 이용해서 함수를 호출할 수 있다.
function sum(arg1, arg2) {
    return arg1 + arg2;
}
// 이런식으로 apply의 첫번째 인자를 null 로 사용하는것은 좋지 못하다. 따라서 이런식의 사용의 지양해야한다.
console.log(sum.apply(null, [1,2]));   // 3




// < Function.apply의 사용법 >
// apply는 call과 비슷하지만 call은 매개변수를 직접 전달하고, apply는 매개변수를 배열의 형태로 전달한다는 차이점이 있다.
o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
    var _sum = 0;
    for(name in this) {            
        _sum += this[name];    // this의 키값을 name에 저장한다.
    }
    return _sum;
}
console.log(sum.apply(o1));   // 6          이것을 가능하게 하는것은 sum.apply(o1)을 하면 sum 함수안에 var this = o1; 이 생기는것과 같은 
console.log(sum.apply(o2));   // 185

// console.log(sum.apply(o1)); 는 o1.sum 처럼 동작한다.
// console.log(sum.apply(o2)); 는 o2.sum 처럼 동작한다.


// 위의 예제를 이해하기 편하게 변경하면 아래와 같다.
// 하지만 아래와 같은 코드는 객체에 함수를 포함시키면서 함수내부에도 type을 구분하는 문장을 넣어야하기때문에 지양하는것이 좋다.
function sum(){
    var _sum = 0;
    for(name in this) {            
        if(typeof this[name] !== 'function')               
        _sum += this[name];
    }
    return _sum;
}
o1 = {var1:1, val2:2, val3:3, sum:sum }
o2 = {v1:10, v2:50, v3:100, v4:25, sum:sum }
console.log(o1.sum());    // 6
console.log(o2.sum());    // 185




// ---------------------------------------<< 객체 지향 프로그래밍 >>----------------------------------------
// 객체지향 프로그래밍(Object Oriented Programming)은 좀더 나은 프로그램을 만들기 위한 프로그래밍 패러다임으로 로직을 상태(state)
// 와 행위(behave)로 이루어진 객체로 만드는 것이다. 이 객체들을 마치 레고 블럭처럼 조립해서 하나의 프로그램을 만드는 것이 객체지향 프로
// 그래밍이라고 할 수 있다. 다시 말해서 객체지향 프로그래밍은 객체를 만드는 것이다. 





// ---------------------------------------<< 생성자와 new >>-----------------------------------------------
// 객체
// 객체란 서로 연관된 변수와 함수를 그룹핑한 그릇이라고 할 수 있다. 객체 내의 변수를 프로퍼티(property)함수를 메소드(method)라고 부른다. 
var person = {}    // 빈 객체 생성(Object 라는 이름의 Object를 만드는것)
person.name = 'egoing';
person.introduce = function() {
    return 'My name is '+this.name;
}
console.log(person.introduce());   // My name is egoing

// 위의 코드는 객체를 만드는 과정에 분산되어 있다. 객체를 정의 할 때 값을 셋팅하도록 코드를 바꾸면 아래와 같다.
var person1 = {
    'name': 'egoing',
    'introduce': function() {
        return 'My name is ' +this.name;
    }
}

console.log(person.introduce());   // My name is egoing



// 위의 코드와 비슷한 다른 객체를 생성한다고 해보자
// 위의 코드와 아래의 코드는 서로 다른 객체이지만 introduce라는 메서드의 내용이 완전히 일치한다. 만약 이런경우 introduce메서드의 변경사항이 생기면 모든 객체의 메서드를 일일히 변경해줘야하므로 중복이 발생한다. 이럴때 사용하는 것이 생성자와 new이다.
var person2 = {
    'name': 'leezche',
    'introduce': function() {
        return 'My name is ' +this.name;
    }
}

console.log(person.introduce());   // My name is leezche



// 생성자
// 생성자(constructor)는 객체를 만드는 역할을 하는 함수다. 자바스크립트에서 함수는 재사용 가능한 로직의 묶음이 아니라 객체를 만드는 창조자라고 할 수 있다.
function Person() {}              
var p = new Person();               // 여기서 Person()을 함수라고 하지않고 생성자라고 한다. (객체의 생성자)
// p = Person {} 
p.name = 'egoing';
p.introduce = function() {
    return 'My name is ' + this.name;
}

console.log(p.introduce());   // My name is egoing


// 비슷한 구조를 가진 객체를 생성자 함수를 통해 2개 생성해본다고 해보자.
function Person() {}
    var p1 = new Person();
    p1.name = 'egoing';
    p1.introduce = function() {
        return 'My name is '+this.name;
    }
console.log(p1.introduce());  // My name is egoing


    var p2 = new Person();
    p2.name = 'leezche';
    p2.introduce = function() {
        return 'My name is '+this.name;
    }
console.log(p2.introduce());  // My name is leezche

// 위의 코드를 살펴보면 introduce 메서드의 내용이 완전히 동일한데, 각자 서술되어 있는것을 볼 수 있다.
// 중복을 피하기 위해 아래와 같이 코드를 수정하면 유지보수하기 훨씬 용이한 코드가 된다.
// 생성자는 객체에 대한 초기화를 한다고 할 수 있다.
function Person(name) {
    this.name = name;
    this.introduce = function() {
        return 'My name is ' +this.name;
    }
}

var p1 = new Person('egoing'); 
console.log(p1.introduce());        // My name is egoing

var p2 = new Person('leezche');
console.log(p2.introduce());        // My name is leezche





// ------------------------------------<< 전역객체 >>------------------------------------------------
// 전역객체(Global object)는 특수한 객체다. 모든 객체는 이 전역객체의 프로퍼티다.
function func() {
    console.log('Hello?');
}

func();           // Hello?
window.func();    // Hello?



// 우리가 정의한 메서드도 결국 전역객체의 속해있다.
var o = {'func':function(){
    console.log('hello?');
    }
}
o.func();          // hello?
window.o.func();   // hello?



// 전역객체 API
// ECMAScript에서는 전역객체의 API를 정의해두었다. 그 외의 API는 호스트 환경에서 필요에 따라서 추가로 정의하고 있다. 이를테면 웹브라우저 자바스크립트에서는 alert()이라는 전역객체의 메소드가 존재하지만 node.js에는 존재하지 않는다. 또한 전역객체의 이름도 호스트환경에 따라서 다른데, 웹브라우저에서 전역객체는 window이지만 node.js에서는 global이다.




// ----------------------------------<< this >>---------------------------------------------
// this는 함수 내에서 함수 호출 맥락(context)를 의미한다. 맥락이라는 것은 상황에 따라서 달라진다는 의미인데 즉 함수를 어떻게 호출하느냐에 따라서
// this가 가리키는 대상이 달라진다는 뜻이다. 함수와 객체의 관계가 느슨한 자바스크립에서 this는 이 둘을 연결시켜주는 실질적인 연결점의 역할을 한다.
// 함수를 호출했을 때 this는 무엇을 가르키는지 살펴보자. this는 전역객체이 window와 같다.
function func() {
    if(global === this) {
        console.log("global === this");   
    }
}
func();  // global === this


// < 메소드의 호출과 this >
var o = {
    func: function() {
        if(o === this) {
            console.log("o === this");
        }
    }
}
o.func();    // o === this
// 사실 일반 함수에서 this를 호출했을때 window가 나오는 이유또한 window.func에서 앞에 window.가 생략되었기때문에 o.func와 그 과정은 다르지 않다.



// < 생성자와 this >
var funcThis = null;


// 만약 아래의 함수 안에 if(o2 == this){} 라는 판별문을 만들어도 o2라는 변수에 객체가 할당되기 전이므로 o2의 값과 this의 값을 비교할 수 없다.
function Func() {
    funcThis = this;     // 이 함수의 this인 global 이 funcThis에 할당된다.
}
var o1 = Func();
if(funcThis === global) {
    console.log('global');          // global
}

// 생성자로 사용되면 this의 값이 생성될 객체를 가리킨다.
var o2 = new Func();
if(funcThis === o2) {               // o2
    console.log('o2');
}



// < apply와 this >
// 함수의 메소드인 apply, call을 이용하면 this의 값을 제어할 수 있다.
// 함수는 객체라는것을 명심하자.
function sum(x,y){               // 이런식으로 함수를 작성하는 방법을 함수리터럴 이라고 한다. 같은 방식으로 var 0 = {} 을 객체리터럴 이라고 하고, var a [1,2,3];을 배열리터럴 이라고 한다.
    return x + y;
}
console.log(sum(1, 3));  // 4       

var sum2 = new Function('x','y','return x + y');      // 이런식으로 함수를 작성하면 함수의 본문의 내용이 길어졌을때 작성하기에 불편함이 있다.
sum2(1, 2);  // 4


// 위의 코드는 함수가 객체라는것을 상기시키는 내용이고 아래부터가 apply와 this에 관한 본문이다.

var o = {}
var p = {}
function func() {
    switch(this) {                  // if-switch 는 서로 대체제 관계이다. for-while 은 서로 대체제 관계이다.
        case o:
            console.log('o');
            break;
        case p:
            console.log('p');
            break;
        case global:
            console.log('global');
            break;
    }
}
func();         // global
func.apply(o);  // o
func.apply(p);  // p

////////// 함수가 누구의 소속인가에 따라 그 객체를 가리킨다라는것이 핵심이다.






// --------------------------------<< 상속 >>-------------------------------------------
// 상속이란?
// 객체는 연관된 로직들로 이루어진 작은 프로그램이라고 할 수 있다. 상속은 객체의 로직을 그대로 물려 받는 또 다른 객체를 만들 수 있는 기능을 의미한다.
// 단순히 물려받는 것이라면 의미가 없을 것이다. 기존의 로직을 수정하고 변경해서 파생된 새로운 객체를 만들 수 있게 해준다.
function Person(name) {
    this.name = name;
    this.introduce = function() {
        return 'My name is ' +this.name;
    }
}

var p1 = new Person('egoing');
console.log(p1.introduce());    // My name is egoing

// 어떠한 객체를 상속받는 방법에 대해 알아본다. 일단은 사용법을 먼저 익히고, 추후에 작동원리를 살펴본다고 생각하자.
function Person(name) {
    this.name = name;
}
Person.prototype.name = null,
Person.prototype.introduce = function() {
    return 'My name is '+this.name;
}

function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();  // 이런식으로 Person()이라는 객체를 Programmer 라는 객체에 할당받고 싶다면 Programmer.prototype에 Person의 생성자 함수를 통해 상속할 수 있다.

var p1 = new Programmer('egoing');
console.log(p1.introduce());   // My name is egoing
// 분명 Programmer의 객체에는 introduce()라는 메서드가 없지만 1477줄에서 new Person()을 통해 Person 객체를 상속받았기 때문에 introduce라는 메서드를 사용할 수 있게 되었다.


// < 객체가 다른 객체를 상속받았을때 새로운 기능을 추가하는 방법 >
function Person(name) {
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function() {
    return 'My name is '+this.name;
}
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();              // introduce는 Person이든 Programmer 든 사람이라면 가지고 있는 특성이기 때문에 Person에서 상속받아 사용하고 
Programmer.prototype.coding = function() {        // coding은 Programmer만의 특수한 능력이므로 Programmer의 객체에 추가 시켜준다.
    return 'hello world';
}

var p1 = new Programmer('egoing');
console.log(p1.introduce());     // My name is egoing
console.log(p1.coding());        // hello world


// < 위의 코드에서 Programmer 와 더불어 Designer 라는 객체를 포함시킨 예제이다. >
function Person(name) {
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function() {
    return 'My nickname is '+this.name;
}
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();              // introduce는 Person이든 Programmer 든 사람이라면 가지고 있는 특성이기 때문에 Person에서 상속받아 사용하고 
Programmer.prototype.coding = function() {        // coding은 Programmer만의 특수한 능력이므로 Programmer의 객체에 추가 시켜준다.
    return 'hello world';
}

function Designer(name){
    this.name = name;
}
Designer.prototype = new Person();              
Designer.prototype.design = function() {        
    return 'beautiful!';
}

var p1 = new Programmer('egoing');
console.log(p1.introduce());     // My name is egoing
console.log(p1.coding());        // hello world

var p2 = new Designer('leezche');
console.log(p2.introduce());     // My name is leezche
console.log(p2.design());        // beautiful!



// ----------------------------<< prototype >>--------------------------------------------
// prototype
// 한국어로는 원형정도로 번역되는 prototype은 말 그대로 객체의 원형이라고 할 수 있다. 함수는 객체다. 그러므로 생성자로 사용될 함수도 객체다.
// 객체는 프로퍼티를 가질 수 있는데 prototype이라는 프로퍼티는 그 용도가 약속되어 있는 특수한 프로퍼티다. prototype에 저장된 속성들은 
// 생성자를 통해서 객체가 만들어질 때 그 객체에 연결된다.

function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
Super.prototype = new Ultra();

function Sub(){}
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);   // true


// 
function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
Super.prototype = new Ultra();

function Sub(){}
Sub.prototype = new Super();

var o = new Sub();
o.ultraProp = 1;
console.log(o.ultraProp);   // 1    먼저 o에 ultraProp이 있는지 검색한다.


//
function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
Super.prototype = new Ultra();

function Sub(){}
Sub.prototype = new Super();
Sub.prototype.ultraProp = 2;

var o = new Sub();
console.log(o.ultraProp);   // 2    o에 ultraProp라는 프로퍼티가 있는지 확인한 후, 생성자의 prototype에서 ultraProp을 찾아서 있다면 반환한다.



function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
var t = new Ultra();
t.ultraProp = 4;
Super.prototype = t;

function Sub(){}
var s = new Super();
// s.ultraProp = 3;                    이부분을 주석처리하지않으면 3이 나온다.
Sub.prototype = s;

var o = new Sub();
console.log(o.ultraProp);  // 4


// 주의할 것.
function Sub(){}
Sub.prototype = new Super();   // 이런식으로 하지 않고 우항을 Super.prototype 이라고 하면 잘 작동되는것처럼 보일 수 있지만, 자식의 프로토타입을 수정했을때, 부모의 프로토타입 또한 수정되는 오류가 발생할 수 있으니 주의해야 한다.





// ------------------------------<< 표준 내장 객체의 확장 >>-------------------------------------
// 표준 내장 객체(Standard Built-in-Object)는 바라스크립트가 기본적으로 가지고 있는 객체들을 의미한다. 내장 객체가 중요한 이유는
// 프로그래밍을 하는데 기본적으로 필요한 도구들이기 떄문이다. 결국 프로그래밍이라는 것은 언어와 호스트 환경에 제공하나는 기능들을 통해서
// 새로운 소프트웨어를 만들어내는 것이기 때문에 내장 객체에 대한 이해는 프로그래밍의 기본이라고 할 수 있다. 

// 자바스크립트는 아래와 같은 내장 객체를 가지고 있다.
// Object, Function, Array, String, Boolean, Number, Math, Date, RegExp


// < 배열의 확장1 >
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');
function getRandomValueFromArray(arr) {
    var index = Math.floor(arr.length * Math.random());
    return arr[index];
}

console.log(getRandomValueFromArray(arr));


// < 배열의 확장2 >
// Array는 배열 생성자 함수이다.
Array.prototype.random = function(){
    var index = Math.floor(this.length * Math.random());  // 굳이 arr을 매개변수로 받을 필요가 없이 this를 넣어주면 이것자체로 배열객체를 가리킨다.
    return this[index];
}
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');
console.log(arr.random());





// ----------------------------------<< Object >>-------------------------------------------
// Object 객체는 객체의 가장 기본적인 형태를 가지고 있는 객체이다. 다시 말해서 아무것도 상속받지 않는 순수한 객체다. 자바스크립트에서는 값을 저장하는 기본적인 단위로 Object를 사용한다.
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
// 동시에 자바스크립트의 모든 객체는 Object 객체를 상속 받는데, 그런 이유로 모든 객체는 Object 객체의 프로퍼티를 가지고 있다.
// 또한 Object 객체를 확장하면 모든 객체가 접근할 수 있는 API를 만들 수 있다. 아래는 Object 객체를 확장한 사례다.
// 모든 객체에 필요한 기능들은 Object.prototype에 있고, 사용자가 모든객체에 어떠한 기능을 추가하고 싶을때도 Object.prototype에 만들어주면 된다.



// Object.~ 와 Object.prototype.~ 의 차이점
// prototype이 있는 경우에는 객체를 만들고 그 객체의 이름 예를들면 아래의 코드의 o.toString 과 같이 사용하고,
// prototype이 없는 경우에는 Object.keys(arr)처럼 Object.~ 을 하고 인자로 어떠한 변수를 받아서 사용한다.

// Object.keys()
var arr = {"name": "egoing", "age": 20, "city": "seoul"}
console.log(Object.keys(arr));  // [ 'name', 'age', 'city' ]   Keys 메서드는 배열의 키값을 뽑아서 배열로 만들어준다.


// Object.prototype.toString()
// toString은 어떤 객체나 배열이 가지고 있는 값들이나 상태를 사람이 보기 편하게 출력해주는 메서드이다.
var o = new Object();
console.log('o.toString()', o.toString());

var a = new Array(1,2,3);
console.log('a.toString', a.toString());




// < object 확장 >
// 만약 모든 객체가 사용할 수 있었으면 하는 기능을 추가하고 싶을때는 이렇게 Object.prototype.~을 이용해서 추가해줄 수 있다.
Object.prototype.contain = function(needle){
    for(var name in this){
        if(this[name] === needle){
            return true;
        }
    }
    return false;
}
var o = {'name':'egoing', 'city':'seoul'} 
console.log(o.contain('grapittie'));              // false
var a = ['egoing','leezche','grapittie'];
console.log(a.contain('leezche'));             // true




// < Object 확장의 위험 >
// Object를 확장하는 이유는 모든 객체의 특정한 기능을 추가하고 싶기 때문이지만, 문제점 또한 모든 객체에 영향을 준다는 것이다.
Object.prototype.contain = function(needle){
    for(var name in this){
        if(this[name] === needle){
            return true;
        }
    }
    return false;
}
var o = {'name':'egoing', 'city':'seoul'} 
var a = ['egoing','leezche','grapittie'];

for(var name in o){
    console.log(name);  // name city contain
}

for(var name in a){
    console.log(name);  // 0 1 2 contain
}

// 우리가 o와 a의 객체에 추가한 정보와 별개로 contain이라는 prototype에 정의한 정보까지 같이 객체에 포함되어졌다.
// 따라서 Objcet를 확장하는 것은 여러가지 문제가 생길수 있기 때문에 신중하게 고려해야 한다.

// 그럼에도 자신이 가지고 있는 정보만을 출력하고 싶다면 아래의 메서드를 이용할 수 있다.
// hasOwnproperty를 통해서 어떠한 프로퍼티의 이름이 그 객체의 직접적인 소유인가를 알려주는 메서드이다.
for(var name in a){
    if(a.hasOwnProperty(name)){
        console.log(name);      // 0 1 2
    }
}

for(var name in o){
    if(o.hasOwnProperty(name)){
        console.log(name);      // name city
    }
}


// ------------------------------<< 데이터 타입 >>--------------------------------------
// 데이터 타입은 크게 2가지로 구분할 수 있다. 첫번째는 원시 데이터 타입 , 두번째는 객체 데이터타입이라고 한다.
// 원시 데이터 타입은 기본데이터 타입이라고 하고, 객체 데이터타입은 참조 데이터 타입이라고 한다.
// 숫자, 문자열, 불리언(true/ false), null, undefined를 제외한 모든 데이터 타입들은 객체다.



// < 래퍼 객체 >
var str = 'coding';
// 자바스크립트는 문자열은 객체가 아니지만 마치 이 라인에 str = new String('coding'); 이 있는것처럼 작동한다.
console.log(str.length);    // 6
console.log(str.charAt(0)); // c

// ⬆️ 문자열은 분명히 프로퍼티와 메소드가 있다. 그렇다면 객체다. 그런데 문자열을 객체가 아니라고 하는 이유는, 내부적으로 문자열이 원시 데이터 타입이고
// 문자열과 관련된 어떤 작업을 하려고 할 때 자바스크립트는 임시로 문자열 객체를 만들고 사용이 끝나면 제거하기 때문이다. 이러한 처리는 내부적으로 일어난다. 
// 어떻게 돌아가는지는 몰라도 되지만, 원시 데이터 타입과 객체는 좀 다른 동작 방법을 가지고 있기 떄문에 이들을 분별하는 것은 결국엔 필요하다.




var str = 'coding';
str.prop = 'everybody';   // 이 라인이 실행될때도 자바스크립트 머신은 객체처럼 동작하길 원하는 사용자의 의도에 맞게 임시적으로 객체를 생성하므로 에러가 발생하지 않는다.
console.log(str.prop);    // undefined
// ⬆️ str.prop를 하는 순간에 자바스크립트 내부적으로 String 객체가 만들어진다. prop 프로퍼티는 이 객체에 저장되고 이 객체는 곧 제거된다. 그렇기 때문에 prop라는 속성이 저장된 객체는 존재하지 않게된다. 이러한 특징은 일반적인 객체의 동작 방법과는 다르다.

// 하지만 문자열과 관련해서 필요한 기능성을 객체지향적으로 제공해야 하는 필요 또한 있기 때문에 원시 데이터 형을 객체처럼 다룰 수 있도록 하기 위한 객체를 자바스크립트 제공하고 있는데 그것이 레퍼객체(wrapper.object)이다.

/**
 * 숫자 - Number
 * 문자열 - String
 * 불리언 - Boolean
 * null - x
 * undefined - x
 */




// ---------------------------------<< 참조 >>----------------------------------------
// < 복제 >
// 전자화된 시스템의 가장 중요한 특징은 복제다. 현실의 사물과 다르게 전자화된 시스템 위의 데이터를 복제 하는데는 비용이 거의 들지 않는다. 바로 이러한 특징이 소프트웨어를 기존의 산업과 구분하는 가장 큰 특징일 것이다.
var a = 1;
var b = a;
b = 2;
console.log(a);   // 1

// 위의 예제는 원시데이터타입이고, 아래의 예제는 객체데이터 타입이다.

// < 참조 >
var a = {'id':1};
var b = a;
b.id = 2;
console.log(a.id);  // 2

var a = {'id':1};
var b = a;
b = {'id': 2};
console.log(a.id);  // 1


// var a = {'id': 1}; 이라는 코드를 작성하면 객체가 생성되고, b로도 그 객체를 참조한다. 원시데이터 타입은 var b = a; 와 같이 할당하는 순간 a의 값과 같은 데이터를 복제하지만,
// 객체데이터타입에서 var b = a; 처럼 할당하면 a 가 생성한 객체를 b도 참조하는 것이다. 따라서 b를 이용해 객체를 변경하면 a가 참조하는 객체 자체가 변경된것이므로 a로 참조했을때 그 값이 변경된다.

// 아래의 예제는 원시 데이터 타입을 인자로 넘겼을 때의 동작 모습이다.
var a = 1;
function func(b){   // b = a  이순간 b에 a 의 데이터 타입을 복제한다.
    b = 2;          // b = 2
}                   // a = 1  b의 값을 변경해도 a의값에는 영향이 없다.
func(a);
console.log(a);  // 1

// 아래의 예제는 참조 데이터 타입을 인자로 넘겼을 때의 동작 모습이다.
var a = {'id': 1};  
function func(b) {     // b = a
    b = {'id': 2};     // b = {'id':2}; b는 새로운 객체를 생성한 것이다.
}                      // a 가 참조하는 값에는 영향을 주지 않는다.
func(a);
console.log(a.id);  // 1


// 새로운 객체를 생성하는 것이 아니라, a가 만들어낸 객체 자체의 값이 변경된다.
var a = {'id': 1};
function func(b) {     // b = a
    b.id = 2;          // b.id = 2; 인 순간 객체 자체의 값이 변경된다.
}                      // a 가 참조하는 객체의 값 또한 변경된다.
func(a);         
console.log(a.id);  // 2