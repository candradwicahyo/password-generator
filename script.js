window.onload = () => {
  
  // input
  const input = document.querySelector('.input');
  const inputRange = document.querySelector('.range');
  
  function generate() {
    // dapatkan string 
    const string = getString();
    let result = '';
    // looping data 
    for (let i = 0; i < inputRange.value; i++) {
      // masukkan kedalam variabel result
      result += string[Math.floor(Math.random() * string.length)];
    }
    // masukkan isi variabel result kedalam input
    input.value = result;
  }
  
  generate();
  
  function getString() {
    // string acak 
    return `abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$_&-+/)(*"':;!?.,~|•√π÷×¶∆£¢€°¥^=}{\\%][©✓™®><`;
  }
  
  // generate password
  const generateButton = document.querySelector('.btn-generate');
  generateButton.addEventListener('click', generate);
  
  // salin password
  const copyButton = document.querySelector('.btn-copy');
  copyButton.addEventListener('click', () => {
    // jika input kosong
    if (!input.value) return alert('field is empty!');
    // dapatkan value input
    input.select();
    // salin
    document.execCommand('copy');
    // tampilkan pesan
    alert('password has been copied!');
  });
  
  const textLength = document.querySelector('.text-length');
  inputRange.addEventListener('input', function() {
    // value input range 
    const value = this.value;
    // tampilkan value input range ke element teks 
    textLength.textContent = value;
  });
  
}