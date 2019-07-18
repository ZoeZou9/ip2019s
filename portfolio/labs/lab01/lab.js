/*
https://www.cns11643.gov.tw/wordView.jsp?ID=0
*/


function start(e) {
    var name = [
        {
            char: '周',
            big5: 'AB42',
            cns: '1-4C52',
            unicode: '5468'
    },
    {
            char: '雨',
            big5: 'A950',
            cns: '1-4F64',
            unicode: '96E8'
    },
    {
            char: '柔',
            big5: 'AC58',
            cns: '1-515B',
            unicode: '67D4'
    }
    ];
var ele = document.getElementById("div1");

for (var i = 0; i < 3;i++) {
    ele.innerHTML += name[i].char;
    ele.innerHTML += ' big5= ';
    ele.innerHTML += name[i].big5;
    ele.innerHTML += ' cns= ';
    ele.innerHTML += name[i].cns;
    ele.innerHTML += ' unicode = ';
    ele.innerHTML += name[i].unicode;
    ele.innerHTML += ' <br> ';

    }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
