let qrInput = document.querySelector('.qr_input'),
  generateBtn = document.querySelector('.generate_btn'),
  img = document.querySelector('.qr_img'),
  saveBtn = document.querySelector('.save_btn');

generateBtn.addEventListener('click', () => {
  let qrInputValue = qrInput.value;
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${qrInputValue}`;
});

saveBtn.addEventListener('click', () => {
  let qrImageURL = img.src;
  let anchor = document.createElement('a');
  anchor.href = qrImageURL;
  anchor.download = 'QR-Code.png';
  anchor.click();
});
