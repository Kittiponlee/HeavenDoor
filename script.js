// ฟังก์ชันสุ่มเลข 1 ถึง 12
function getRandomNumber() {
    return Math.floor(Math.random() * 12) + 1;
}

// ฟังก์ชันสร้างตาราง
function createGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = ''; // ล้างตารางเก่า (ถ้ามี)

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        const topNumber = getRandomNumber();
        const bottomNumber = getRandomNumber();

        cell.innerHTML = `
            <span>${topNumber}</span>
            <span>${bottomNumber}</span>
        `;

        grid.appendChild(cell);
    }
}

// สร้างตารางเมื่อโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', createGrid);

// สร้างตารางใหม่เมื่อรีเฟรชหน้าเว็บ
window.addEventListener('load', createGrid);