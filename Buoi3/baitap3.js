const prompt = require('prompt-sync')();
var n = prompt("Nhập số của bạn vào đi :33 : ");
var r = 0;
var tong = 0;
var bientam = n;
if(n > 0){
    r = n%10;
    tong = tong*10 + r;
    n = n/10;
    if(bientam == tong){
        console.log("Số bạn vừa nhập là số palindrome đó!!!");
    }else{
        console.log("Số bạn vừa nhập không phải là số palindrome đâu!!!");
    }
}else{
    console.log("Số bạn nhập không hợp lệ");
}
