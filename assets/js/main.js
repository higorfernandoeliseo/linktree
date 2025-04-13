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

    vcardname = 'FN:IGOR ELISEO\nTEL;TYPE=WORK,VOICE:16 3333-3333\nEMAIL:higorfernandoeliseo2016@gmail.com\n';

    vcard_end = 'END:VCARD';
    
    //vcard_begin = 'BEGIN:VCARD\nVERSION:3.0\n';

    //vcardname = 'FN:'+nome.innerText+'\nTEL;TYPE=WORK:16 3333-3333\n';
    
    //vcard_end = 'END:VCARD;';

    vcard = vcard_begin+vcardname+vcard_end;

    return vcard;

}

savecontact.addEventListener("click", () =>{
    
    downloadtoFile(makevCard(),'igor.vcf','text/vcard');

});
