const checkNumInputs = (selector) => {
  const onlyWidthHeight = selector.replace('input[name="user_phone"]'),
    numInputs = document.querySelectorAll(onlyWidthHeight),
    btnNext = document.querySelector('.popup_calc_button'),
    btnNextSecond = document.querySelector('.popup_calc_profile_button'),
    width = document.getElementById('width'),
    height = document.getElementById('height');

  btnNext.disabled = true;
  btnNextSecond.disabled = true;

  let secCheck = document.getElementsByClassName('checkbox');
  [...secCheck].forEach((element) => {
    element.addEventListener('change', function () {
      let some_var = this.checked;
      if (some_var) {
        btnNextSecond.disabled = false;
      }
    });
  });

  numInputs.forEach((item, i) => {
    const itemsValue = item.getElementsByClassName('form-control');
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');

      //Если убрать это условие то будет пропускать на пустой строке
      if (width.value === '' || height.value === '') {
        btnNext.disabled = true;
      } else {
        btnNext.disabled = false;
      }
    });
  });
};

export default checkNumInputs;
