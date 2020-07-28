function getName1() {
    return document.getElementById("cname1").value;
}
function getName2() {
    return document.getElementById("cname2").value;
}
function getMail() {
    return document.getElementById("mail").value;
}
function getNo() {
    return document.getElementById("number").value;
}

function getComment() {
    return document.getElementById("comment").value;
}

function validateForm() {
firstName = getName1();
lastName = getName2();
email = getMail();
number = getNo();
comment = getComment();


    alert("Thank you "+firstName+" "+lastName+" for giving us a feedback! You will receive mail and a text shortly to "+email+
        " and  "+number+ " respectively. We value the comment "+comment);

}