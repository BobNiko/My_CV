//var num = 1,
//    str = 'hello',
//    boo = true,
//    str1 = '',
//    some,
//    arr = [1, 3, 7, 'somme info', true, [1, 2, 3], {name: 123}],
//    obj = {
//        title:'js', 
//        year:2005,
//        author:'David Fl',
//        is_seld:true
//        };
//    var
//    obj2={
//     title:'js212313', 
//        year:2005,
//        author:'David Fl',
//        is_seld:true
//    };
//console.log(obj2);
//function test(name){
//   console.log("Hello " + name);
//    }
//
//console.log(arr[2]);
//var number=3, number1=10;
//if (number >= 5 || number1>=10) {
//    console.log("Lets go to the beach")
//} else {
//    console.log("Lets watch the film")
//}
//
//var mas=[];
//for(var i=0; i<=10; i++){
//    mas[i] = i;
//    
//}
//console.log(obj.title, obj.author);
//
//
//function check(is_sell, is_bob){
//if(is_sell==true){
//console.log(is_bob.title, is_bob.year);
//}
//    else{
//    console.log("Book is not sold");
//    }
//}
//check(obj2.is_seld, obj2);


var doc_body = document.querySelector(".wrapper"),
    div_inside = document.querySelector("#myId"),
    new_div = document.createElement('div');

doc_body.insertBefore(new_div, div_inside);
console.log(doc_body);