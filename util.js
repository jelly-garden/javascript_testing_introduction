exports.generateText = (name, age) => {
  return `${name} (${age} years old)`;
};

exports.createElement = (type, text, className) => {
  // HTML 요소를 생성하고 반환
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

exports.validateInput = (text, notEmpty, isNumber) => {
  // 유효성 검사 실행
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && isNaN(+text)) {
    return false;
  }
  return true;
};
