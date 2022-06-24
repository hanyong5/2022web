
var userInput = prompt("가위,바위,보를 입력하세요");
console.log(userInput)
if(userInput != "가위" && userInput != "바위" && userInput != "보"){
    alert("가위,바위,보 중 하나를 입력하시오")
}else{
    var comInput = "가위";

    
    if(userInput == "가위"){
        alert("비겼네요. 다음기회에")
    }
    if(userInput == "바위"){
        alert("당신이 이겼네요. ^^")
    }
    if(userInput == "보"){
        alert("컴퓨터가 이겼습니다. ^^")
    }


}