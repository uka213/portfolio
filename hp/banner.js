//.banner-wrapper 
// バナー切り替え機能
const messages = [
  "¥5000円以上で送料無料",
  "『新着情報』　春物新作続々入荷中!!",
  "『新着情報』WINTER SALE 冬服セール開催中　最大70％OFF"
];

const messageEl = document.getElementById("message");
let newIndex = 0;

function showMessage() {
  messageEl.classList.remove("message");
  void messageEl.offsetWidth;
  messageEl.textContent = messages[newIndex];
  messageEl.classList.add("message");
  newIndex = (newIndex + 1) % messages.length;
}

showMessage();
setInterval(showMessage, 3000);




