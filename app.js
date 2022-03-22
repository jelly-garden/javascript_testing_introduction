const { generateText, createElement, validateInput } = require('./util');

const initApp = () => {
  // 앱 초기화 > 버튼 클릭 리스터 등록
  const newUserButton = document.querySelector('#btnAddUser');
  newUserButton.addEventListener('click', addUser);
};

const addUser = () => {
  // 사용자 입력을 가져오고, 새로운 HTML 요소를 생성하여 DOM 에 추가합니다.
  const newUserNameInput = document.querySelector('input#name');
  const newUserAgeInput = document.querySelector('input#age');

  if (
    !validateInput(newUserNameInput.value, true, false) ||
    !validateInput(newUserAgeInput.value, false, true)
  ) {
    return;
  }

  const userList = document.querySelector('.user-list');
  const outputText = generateText(
    newUserNameInput.value,
    newUserAgeInput.value
  );
  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};

// 앱 시작
initApp();
