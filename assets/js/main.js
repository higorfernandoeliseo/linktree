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

function makevCard(){

    var vcard = "BEGIN:VCARD\nVERSION:3.0\n"
        + "N:"+nome.innerText+"\n"
        + "FN:"+nome.innerText+"\n"
        + "TEL;TYPE=WORK,VOICE:+55 16 997049362\n"
        + "PHOTO:data:image/png;base64,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\n"
        + "END:VCARD";

    return vcard;

}

savecontact.addEventListener("click", () =>{
    
    window.open("data:text/x-vcard;urlencoded," + makevCard());

    //downloadtoFile(makevCard(),'igor.vcf','text/vcard');

});
