const numInput = document.getElementById("num-input");
const numInputSendButton = document.getElementById("num-input-send-button");
const resultView = document.getElementById("result-view");
numInputSendButton.addEventListener("click", () => {
    if (validateInputValue()) {
        testHypothesis(numInput.value);
        clearInput();
    }else{
        viewError();
        clearInput();
    }

});


function validateInputValue() {
    let input = numInput.value;
    let reg = /^\d+$/; //Natural numbers
    let result = reg.test(input);
    return result;
}

function testHypothesis(num) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    console.log(num);
    resultView.appendChild(document.createTextNode(num));
    resultView.appendChild(document.createElement("br"));
    if (num !== 1) {
        testHypothesis(num);
    } else {
        alert("Checked");      
        resultView.appendChild(document.createTextNode("***"));
        resultView.appendChild(document.createElement("br"));
    }
}

function clearInput() { numInput.value = "";}
function viewError() {alert("Error!!!");}



