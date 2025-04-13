const savecontact = document.getElementById("btnsave");
const nome = document.querySelector(".firstname");
var vcard, vcard_begin, vcard_end, vcardname;

function downloadtoFile(content, filename, contentType){

    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);

}

function makevCard(){

    vcard_begin = 'BEGIN:VCARD\nVERSION:3.0\n';

    vcardname = 'FN:'+nome.innerText+'\n';
    
    vcard_end = 'END:VCARD;';

    vcard = vcard_begin+vcardname+vcard_end;

    return vcard;

}

savecontact.addEventListener("click", () =>{
    
    downloadtoFile(makevCard(),'teste.vcf','text/vcard');

});