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

    // สุ่มข้อความ U1-U12 และ L1-L12
    const upperMessages = [
        "วังชะตา(เหมี่ยเก็ง)", "วังลาภะ(ไฉ่แป๊ะ)", "วังญาติ(เฮียตี๋)",
        "วังอสังหา(ฉั่งแทะ)", "วังบุตร(หน่ำนึ่ง)", "วังบริวาร(หน่งป๊ก)",
        "วังสมรส(ซีเฉียบ)", "วังสุขภาพ(จิบแอะ)", "วังเดินทาง(เซียงอี๊)",
        "วังอำนาจ(กัวลก)", "วังวาสนา (ฮกเต็ก)", "วังคุณค่า(เซี่ยงเหมา)"
    ];
    const lowerMessages = [
        "พัฒนา(เชี่ยงแซ)", "เสน่หา(หมกยก)", "บัณฑิต(กวงตั่ว)", 
        "ตำแหน่ง(ลิ่มกัว)", "ศักดิ์ศรี(ตี้อ๋วง)", "เสื่อม(ซวย)", 
        "เจ็บป่วย(แป่)", "มรณะ(ซี่)", "กองคลัง(หมอ)", "สูญสิ้น(เจ๊าะ)", 
        "ครรภ์(ทอ)", "ทารก(เอี๊ยง)"
    ];

    // สุ่มข้อความ U1-U12 และ L1-L12 ในแต่ละช่อง
    const upperPlacement = {};
    const lowerPlacement = {};
    for (let i = 0; i < 9; i++) {
        upperPlacement[cellNames[i]] = upperMessages[i % 12];
        lowerPlacement[cellNames[i]] = lowerMessages[i % 12];
    }

    // สุ่มหมาก
    const pieces = ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I0"];
    const pieceImages = {
        I1: "https://via.placeholder.com/30/0000FF/FFFFFF?text=I1", // blue droplet
        I2: "https://via.placeholder.com/30/FF0000/FFFFFF?text=I2", // red triangle
        I3: "https://via.placeholder.com/30/00FF00/FFFFFF?text=I3", // green square
        I4: "https://via.placeholder.com/30/FFFFFF/000000?text=I4", // white circle
        I5: "https://via.placeholder.com/30/FFFF0
