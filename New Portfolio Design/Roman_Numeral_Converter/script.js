const numberInput = document.getElementById('number-input')
const convertBtn = document.getElementById('convert-btn')
const output = document.getElementById('output')


function checkInput() { 
  const inputValue = parseFloat(numberInput.value)

  if (inputValue === inputValue && inputValue % 1 !== 0) {
    output.innerText = "Please enter an integer!";
    output.classList.remove('hidden');
  }

  else if (inputValue < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    output.classList.remove('hidden');
    console.log("this-works")
  } 
  else if (inputValue > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    output.classList.remove('hidden');
  }
  else if (inputValue > 0 && inputValue < 4000) {
    const convertRoman = (input) => {
      const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
      ];
      let result = '';
      for (const { value, symbol } of romanNumerals) {
        while (input >= value) {
          result += symbol;
          input -= value;
        }
      }
      return result;
    };

    const romanNumeral = convertRoman(inputValue);
    output.classList.remove('hidden');
    output.innerText = `${romanNumeral}`;
  }
  else {
    
    output.classList.remove('hidden');
    output.innerText = "Please enter a valid number";
    alert("Please enter a number!");
  }
}

convertBtn.onclick = checkInput;