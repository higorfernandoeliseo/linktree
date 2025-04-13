const savecontact = document.getElementById("btnsave");
const nome = document.querySelector(".firstname");



const getBase64Image = (url) => {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/jpg");
      console.log(dataURL)
    }
    img.src = url
  }


//var imagem = getBase64Image();
var imagem = getBase64Image('https://higorfernandoeliseo.github.io/linktree/assets/img/temp_1.jpg');

//console.log(imagem);

function makevCard(){

    var vcard = "BEGIN:VCARD\nVERSION:3.0\n"
        + "N:"+nome.innerText+"\n"
        + "FN:"+nome.innerText+"\n"
        + "TEL;TYPE=CELL:+55 16 997049362\n"
        + "PHOTO;TYPE=JPEG;ENCODING=b:"+imagem+"\n"
        + "END:VCARD";

    return vcard;

}

savecontact.addEventListener("click", () =>{
    
    window.open("data:text/x-vcard;urlencoded," + makevCard());

    //downloadtoFile(makevCard(),'igor.vcf','text/vcard');

});
