const savecontact = document.getElementById("btnsave");
const nome = document.querySelector(".firstname");

//var imagem = getBase64Image();
const image = document.getElementById("base64image-encode");

function makevCard(){

    var vcard = "BEGIN:VCARD\nVERSION:3.0\n"
        + "N:"+nome.innerText+"\n"
        + "FN:"+nome.innerText+"\n"
        + "TEL;TYPE=CELL:+55 16 997049362\n"
        + "PHOTO;TYPE=JPEG;ENCODING=b:"+image+"\n"
        + "END:VCARD";

    return vcard;

}

savecontact.addEventListener("click", () =>{
    
    window.open("data:text/x-vcard;urlencoded," + makevCard());

    //downloadtoFile(makevCard(),'igor.vcf','text/vcard');

});
