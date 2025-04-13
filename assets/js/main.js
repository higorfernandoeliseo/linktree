const savecontact = document.getElementById("btnsave");
const nome = document.querySelector(".firstname");

function downloadtoFile(content, filename, contentType){

    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);

}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/jpeg");
    return dataURL.replace(/^data:image\/?[A-z]*;base64,/);
}

var image = base64 = getBase64Image("https://higorfernandoeliseo.github.io/linktree/assets/img/temp_1.jpg");

function makevCard(){

    var vcard = "BEGIN:VCARD\nVERSION:3.0\n"
        + "N:"+nome.innerText+"\n"
        + "FN:"+nome.innerText+"\n"
        + "TEL;TYPE=CELL:+55 16 997049362\n"
        + "PHOTO;ENCODING=BASE64;TYPE=JPEG:"+image+"\n"
        + "END:VCARD";

    return vcard;

}

savecontact.addEventListener("click", () =>{
    
    window.open("data:text/x-vcard;urlencoded," + makevCard());

    //downloadtoFile(makevCard(),'igor.vcf','text/vcard');

});
