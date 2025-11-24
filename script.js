// ----------------- ❄ TẠO HIỆU ỨNG TUYẾT -----------------
const snow = document.querySelector('.snowflakes');
const chars = ['❅','❆','❄'];
const count = Math.round(25); // dùng thẳng 25 * 1.0

for (let i = 0; i < count; i++) {
  const el = document.createElement('div');
  el.className = 'snowflake';
  el.textContent = chars[(Math.random() * chars.length) | 0];
  // chia vị trí đều + random nhẹ
  const z = 100 / count;
  el.style.left = (i * z + Math.random() * (z - 2)) + '%';
  // kích thước tuyết random
  el.style.fontSize = (0.8 + Math.random() * 1.2).toFixed(2) + 'em';
  // delay rơi + xoay
  el.style.animationDelay =
    `${(Math.random()*10).toFixed(1)}s, ${(Math.random()*3).toFixed(1)}s`;
  snow.appendChild(el);
}

// ----------------- 🎧 MỞ POPUP NHẠC -----------------
document.getElementById("openPopup").addEventListener("click", e => {
  e.preventDefault();
  window.open(
    e.currentTarget.href,
    "_blank",
    "width=250,height=300,resizable=no,scrollbars=no,toolbar=no,menubar=no,status=no"
  );
});


// ----------------- 📝 NOTE BOX -----------------
const noteBox = document.getElementById("note-box");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
// mặc định hiện note cuối
let currentIndex = window.notes.length - 1;
// hiển thị note
function renderNote(i) {
  if (!window.notes.length) {
    noteBox.innerHTML = "<i>Chưa có note nào!</i>";
    return;
  }
  const [date, text] = window.notes[i];
  noteBox.innerHTML = `
    <b style="color:red; display:block">${date}</b>
    <i style="color:blue">${text}</i>
  `;
}

// nút điều hướng
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) renderNote(--currentIndex);
});
nextBtn.addEventListener("click", () => {
  if (currentIndex < window.notes.length - 1) renderNote(++currentIndex);
});

// render lần đầu
renderNote(currentIndex);