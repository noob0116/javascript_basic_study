// -------------------------------<< call >>--------------------------------------------
// call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.
const mike = {
    name: ' Mike',
};


const tom = {
    name: 'Tom',
};

function showThisName() {
    console.log(this.name);
}


showThisName();  // undefined   이렇게 하면 this.name에서 this는 window를 의미하므로 window.name이 빈문자열이기 때문에 undefined이 리턴된다.

// 해당함수에 call이라는 메서드를 사용하고 인자로 this로 사용할 객체를 넘겨주면 해당함수가 주어진 객체의 메서드인것처럼 활용할 수 있다.
// call의 첫번째 매개변수는 this로 사용할 값이고, 매개변수가 더 있으면 그 매개변수를 호출하는 함수로 전달된다.
showThisName.call(mike);  //  Mike
showThisName.call(tom);   //  Tom


// 아래와 같이 첫번째 매개변수는 this로 사용할 값이고, 두번째 매개변수부터는 함수가 사용할 매개변수이다.
function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
};

update.call(mike, 1999, 'singer')
console.log(mike)    // { name: ' Mike', birthYear: 1999, occupation: 'singer' }

update.call(tom, 2002, 'teacher')
console.log(tom)    // { name: 'Tom', birthYear: 2002, occupation: 'teacher' }



// ------------------------------------<< apply >>------------------------------------------------
// apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다. call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받는다.
const mike = {
    name: ' Mike',
};

const tom = {
    name: 'Tom',
};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
};

update.apply(mike, [1999, 'singer'])
console.log(mike)    // { name: ' Mike', birthYear: 1999, occupation: 'singer' }

update.apply(tom, [2002, 'teacher'])
console.log(tom)    // { name: 'Tom', birthYear: 2002, occupation: 'teacher' }


// apply는 배열 요소를 함수 매개변수로 사용할 때 유리하다.
const nums = [3, 10, 1, 6, 4];

const minNum = Math.min.apply(null, nums);
// = Math.min.apply(null, [3, 10, 1, 6, 4])

const maxNum = Math.max.call(null, ...nums);      // call 과 apply는 call은 매개변수를 순서대로 직접받고, apply는 배열의 형태로 받는다.
// = Math.min.apply(null, 3, 10, 1, 6, 4)

console.log(minNum);    // 1
console.log(maxNum);    // 10




// ------------------------------------<< bind >>----------------------------------------------
// 함수의 this 값을 영구히 바꿀 수 있습니다.
const mike = {
    name: 'Mike',
};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

const updateMike = update.bind(mike);   // updateMike는 항상 this를 mike로 가진다.
 
updateMike(1980, 'police');
console.log(mike)           // { name: 'Mike', birthYear: 1980, occupation: 'police' }


const user = {
    name: "Mike",
    showName: function() {
        console.log(`hello, ${this.name}`);
    },
};

user.showName();   // hello, Mike

let fn = user.showName;
fn();  // hello, undefined
fn.call(user);  // hello, Mike
fn.apply(user); // hello, Mike

let boundFn = fn.bind(user);
boundFn();  // hello, Mike
