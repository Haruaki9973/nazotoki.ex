// 各ページで使う答えと次に進むページを設定
const riddles = [
  { id: 'index1', correctAnswer: 'ねこ', nextPage: 'map1.html' },
  { id: 'index2', correctAnswer: 'いし', nextPage: 'map2.html' },
  { id: 'index3', correctAnswer: 'あか', nextPage: 'map3.html' },
  { id: 'index4', correctAnswer: 'みず', nextPage: 'map4.html' },
  { id: 'index5', correctAnswer: 'こうえん', nextPage: 'map5.html' },
];

// 謎をチェックして、正解なら次のページに進む
function checkAnswer(riddleId) {
  const input = document.getElementById(riddleId).value.trim();
  const riddle = riddles.find(r => r.id === riddleId);

  if (input === riddle.correctAnswer) {
    document.getElementById('result').innerHTML = `<a href="${riddle.nextPage}">✅ 正解！次の場所へ進む</a>`;
  } else {
    document.getElementById('result').textContent = "❌ 不正解。もう一度考えてみてください。";
  }
}
