// 随机中文励志语录库
const quotes = [
  { text: "星光不问赶路人，时光不负有心人。", author: "—— 佚名" },
  { text: "山重水复疑无路，柳暗花明又一村。", author: "—— 陆游" },
  { text: "长风破浪会有时，直挂云帆济沧海。", author: "—— 李白" },
  { text: "不积跬步，无以至千里；不积小流，无以成江海。", author: "—— 《荀子》" },
  { text: "宝剑锋从磨砺出，梅花香自苦寒来。", author: "—— 古训" },
  { text: "纸上得来终觉浅，绝知此事要躬行。", author: "—— 陆游" },
  { text: "天行健，君子以自强不息。", author: "—— 《周易》" },
  { text: "路漫漫其修远兮，吾将上下而求索。", author: "—— 屈原" },
  { text: "海压竹枝低复举，风吹山角晦还明。", author: "—— 陈寿" },
  { text: "沉舟侧畔千帆过，病树前头万木春。", author: "—— 刘禹锡" },
  { text: "不要等待机会，而要创造机会。", author: "—— 佚名" },
  { text: "每一个不曾起舞的日子，都是对生命的辜负。", author: "—— 尼采" },
  { text: "生活明朗，万物可爱，人间值得，未来可期。", author: "—— 佚名" },
  { text: "把今天过好，就是对明天最好的期待。", author: "—— 佚名" },
  { text: "自律即自由，越努力越幸运。", author: "—— 佚名" },
  { text: "山高不厌攀，水深不厌潜，学精不厌苦。", author: "—— 佚名" },
  { text: "心中有光，脚下有路，眼里有星辰。", author: "—— 佚名" },
  { text: "没有白走的路，每一步都算数。", author: "—— 佚名" },
  { text: "与其仰望星空，不如脚踏实地。", author: "—— 佚名" },
  { text: "熬过低谷，繁花自开。", author: "—— 佚名" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btn = document.getElementById("newBtn");

let lastIndex = -1;

function getRandomIndex() {
  if (quotes.length <= 1) return 0;
  let i;
  do {
    i = Math.floor(Math.random() * quotes.length);
  } while (i === lastIndex);
  return i;
}

function showQuote() {
  const idx = getRandomIndex();
  lastIndex = idx;

  // 先淡出
  quoteEl.classList.add("fade-out");
  authorEl.classList.add("fade-out");

  setTimeout(() => {
    quoteEl.textContent = "“ " + quotes[idx].text + " ”";
    authorEl.textContent = quotes[idx].author;

    quoteEl.classList.remove("fade-out");
    authorEl.classList.remove("fade-out");

    // 触发淡入
    quoteEl.classList.add("fade-in");
    setTimeout(() => quoteEl.classList.remove("fade-in"), 320);
  }, 220);
}

btn.addEventListener("click", showQuote);

// 打开弹窗时自动显示一句
document.addEventListener("DOMContentLoaded", showQuote);
showQuote();
