function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateGrid() {
    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = "";

    // ชื่อช่องใหม่ที่คุณต้องการ
    const cellNames = ["CC1", "CC2", "CC3", "CC4", "CC5", "CC6", "CC7", "CC8", "CC9"];
    const doors = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"];
    
    // สุ่มประตูตามเข็มนาฬิกา
    const firstDoorIndex = getRandomInt(0, 7);  // Random position for the first door
    const doorPlacement = {};
    for (let i = 0; i < doors.length; i++) {
        doorPlacement[cellNames[(firstDoorIndex + i) % 9]] = doors[i];
    }

    // สุ่มหมาก
    const pieces = ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I0"];
    const pieceImages = {
        I1: "https://via.placeholder.com/30/0000FF/FFFFFF?text=I1", // blue droplet
        I2: "https://via.placeholder.com/30/FF0000/FFFFFF?text=I2", // red triangle
        I3: "https://via.placeholder.com/30/00FF00/FFFFFF?text=I3", // green square
        I4: "https://via.placeholder.com/30/FFFFFF/000000?text=I4", // white circle
        I5: "https://via.placeholder.com/30/FFFF00/FFFFFF?text=I5"  // yellow square
    };
    
    // สุ่มหมากในแต่ละช่อง
    const piecePlacement = {};
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];
        piecePlacement[cellNames[i % 9]] = pieceImages[piece] || "";
    }

    // สร้างตารางประตู
    for (let i = 0; i < 9; i++) {
        const cellId = cellNames[i];
        const door = doorPlacement[cellId] || "";  // แสดงประตูในตำแหน่งที่สุ่ม
        const pieceImage = piecePlacement[cellId] || "";  // รูปหมากในช่อง

        const cell = document.createElement("div");
        cell.className = "cell";
        
        // แสดงประตู
        cell.innerHTML = door;
        
        // แสดงหมากเป็นรูปภาพ
        if (pieceImage) {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.style.backgroundImage = `url(${pieceImage})`;
            cell.appendChild(piece);
        }

        gridContainer.appendChild(cell);
    }
}
