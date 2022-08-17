var a = {'id': 1};
function func(b) {
    b.id = 2;
}
func(a);
console.log(a.id);