// ข้อมูลความหมายของเลขบนและล่าง
const upperMeanings = {
  U1: "วังชะตา", U2: "ทรัพย์", U3: "สุขภาพ", U4: "ความรัก", U5: "การงาน", U6: "โชคลาภ",
  U7: "อุปสรรค", U8: "การศึกษา", U9: "การเดินทาง", U10: "มิตรแท้", U11: "ศัตรู", U12: "ความสำเร็จ"
};

const lowerMeanings = {
  L1: "พัฒนา", L2: "ความมั่นคง", L3: "ความสุข", L4: "ความเจริญ", L5: "ความสำเร็จ", L6: "ความรุ่งเรือง",
  L7: "ความสมหวัง", L8: "ความสมบูรณ์", L9: "ความสมดุล", L10: "ความสมานฉันท์", L11: "ความสมัครสมาน", L12: "ความสมปรารถนา"
};

// ข้อมูลประตู
const doors = ["ไค", "ฮิว", "แซ", "เซีย", "โต๋ว", "เก้ง", "ซี่", "เกีย"];

// ข้อมูลหมาก
const pieces = [
  { shape: "หยดน้ำ", color: "ฟ้า" },
  { shape: "สามเหลี่ยม", color: "แดง" },
  { shape: "วงกลม", color: "เขียว" },
  { shape: "สี่เหลี่ยม", color: "เหลือง" },
  { shape: "ดาว", color: "ม่วง" },
  { shape: "หัวใจ", color: "ชมพู" },
  { shape: "ไข่", color: "ส้ม" },
  { shape: "ดอกไม้", color: "ขาว" },
  { shape: "จันทร์เสี้ยว", color: "น้ำเงิน" },
  { shape: "ดวงอาทิตย์", color: "ทอง" }
];

// สุ่มเลข 1-12 ไม่ซ้ำ
function getRandomNumbers() {
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
  return numbers.sort(() => Math.random() - 0.5).slice(0, 12);
}

// สุ่มประตู
function getRandomDoors() {
  const shuffledDoors = doors.sort(() => Math.random() - 0.5);
  return shuffledDoors;
}

// สุ่มหมาก
function getRandomPiece() {
  return pieces[Math.floor(Math.random() * pieces.length)];
}

// สร้างตาราง
function createGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  const upperNumbers = getRandomNumbers();
  const lowerNumbers = getRandomNumbers();
  const randomDoors = getRandomDoors();
  const doorOrder = ["A1", "B1", "C1", "C2", "C3", "B3", "A3", "A2"];

  for (let row of ["A", "B", "C"]) {
    for (let col of [1, 2, 3]) {
      const cellId = `${row}${col}`;
      const cell = document.createElement("div");
      cell.id = cellId;

      // เลขบนและล่าง
      const upperKey = `U${upperNumbers.pop()}`;
      const lowerKey = `L${lowerNumbers.pop()}`;
      cell.innerHTML = `
        <div>${upperKey}: ${upperMeanings[upperKey]}</div>
        <div>${lowerKey}: ${lowerMeanings[lowerKey]}</div>
      `;

      // ประตู
      if (doorOrder.includes(cellId)) {
        const doorIndex = doorOrder.indexOf(cellId);
        cell.innerHTML += `<div>ประตู: ${randomDoors[doorIndex]}</div>`;
      }

      // หมาก
      if (Math.random() < 0.3) { // สุ่มวางหมากในบางช่อง
        const piece = getRandomPiece();
        cell.innerHTML += `<div>หมาก: ${piece.shape} (${piece.color})</div>`;
      }

      grid.appendChild(cell);
    }
  }
}

// ปุ่มสุ่มใหม่
document.getElementById("randomize-btn").addEventListener("click", createGrid);

// สร้างตารางครั้งแรกเมื่อโหลดหน้า
window.onload = createGrid;
