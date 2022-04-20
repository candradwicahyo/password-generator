window.onload = () => {
  
  const input = document.querySelector('#input');
  
  function passwordGenerator() {
    let string = '';
    const randomString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`|•√π÷×¶∆£¢€¥^°={}\%®©™]✓[><@#$_&-+(/)*"\':;!?.,';
    const list = document.querySelector('#list');
    
    for (let i = 0; i < list.value; i++) {
      string += randomString[Math.floor(Math.random() * randomString.length)];
    }
    
    input.value = string;
    string = '';
  }
  
  passwordGenerator();
  
  const buttongenerate = document.querySelector('#generate');
  buttongenerate.addEventListener("click", () => passwordGenerator());
  
  function copy() {
    const buttonCopy = document.querySelector('#copy');
    buttonCopy.addEventListener("click", function() {
      input.select();
      document.execCommand("copy");
      swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Password Has Been Copied!'
      });
    });
  }
  
  copy();
  
}