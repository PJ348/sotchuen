// --- 1. ระบบปัดเพื่อเสร็จสิ้น (Swipe to Complete) ---
const swipeContainer = document.getElementById('swipe-container');
const swipeBtn = document.getElementById('swipe-btn');
const swipeText = document.getElementById('swipe-text');
const swipeIcon = document.getElementById('swipe-icon');

let isDragging = false;
let startX = 0;
let currentTranslate = 0;

// คำนวณระยะทางสูงสุดที่ปุ่มจะลากไปได้ (ความกว้างกล่อง - ความกว้างปุ่ม - ระยะขอบ)
const maxSlide = 750 - 130 - 16;

// ฟังก์ชันเริ่มลาก
const startDrag = (e) => {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    swipeBtn.style.transition = 'none'; // ปิดแอนิเมชันชั่วคราวตอนลากให้ติดนิ้ว
};

// ฟังก์ชันกำลังลาก
const drag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const walk = currentX - startX;

    // จำกัดไม่ให้ลากทะลุกรอบ
    if (walk > 0 && walk < maxSlide) {
        currentTranslate = walk;
        swipeBtn.style.transform = `translateX(${currentTranslate}px)`;
    }
};

// ฟังก์ชันปล่อยลาก
const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    swipeBtn.style.transition = 'transform 0.3s ease-out';

    // ถ้าลากไปเกิน 80% ของระยะทั้งหมด ให้ถือว่าสำเร็จ!
    if (currentTranslate > maxSlide * 0.8) {
        swipeBtn.style.transform = `translateX(${maxSlide}px)`; // เลื่อนไปขวาสุด (ห่างขอบนิดๆ ตามต้องการ)
        completeOrder(); // เรียกฟังก์ชันเสร็จสิ้น
    } else {
        // ถ้าลากไม่ถึง ให้ปุ่มเด้งกลับมาที่เดิม
        currentTranslate = 0;
        swipeBtn.style.transform = `translateX(0px)`;
    }
};

// เพิ่ม Event Listener ทั้ง Mouse และ Touch
swipeBtn.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);

swipeBtn.addEventListener('touchstart', startDrag);
document.addEventListener('touchmove', drag, { passive: false });
document.addEventListener('touchend', endDrag);

// ฟังก์ชันเมื่อปัดเสร็จสิ้น
function completeOrder() {
    // 1. เปลี่ยนพื้นหลังเป็นสีขาว และเปลี่ยนข้อความ
    swipeContainer.classList.replace('bg-green-logo/30', 'bg-white');
    swipeText.innerHTML = 'เสร็จสิ้น';
    swipeText.classList.replace('pl-20', 'pl-0'); // จัดข้อความให้อยู่ตรงกลาง
    swipeBtn.classList.replace('cursor-grab', 'cursor-default');

    // 2. ลบการ์ดที่ 1 ออก (Card 2 จะขยับขึ้นมาแทนอัตโนมัติเพราะ Flexbox)
    const card1 = document.getElementById('Card1');
    if (card1) {
        // ใช้แอนิเมชันให้การ์ดค่อยๆ เฟดหายไปก่อนลบ
        card1.style.transition = 'opacity 0.3s, transform 0.3s';
        card1.style.opacity = '0';
        card1.style.transform = 'scale(0.9)';
        setTimeout(() => card1.remove(), 300);
    }

    // ปิดไม่ให้ลากปุ่มได้อีก
   processSwipeCompletion()
}

// ==========================================
// 2. ฟังก์ชันสำหรับ "ปัดเพื่อเสร็จสิ้น" (แอนิเมชัน -> เปลี่ยนหน้าเว็บ)
// ==========================================
function processSwipeCompletion() {
    isCompleted = true; // ล็อคปุ่มไม่ให้ปัดซ้ำ

    // 1. เปลี่ยน UI ปุ่มเป็นสถานะ "เสร็จสิ้น"
    swipeContainer.classList.replace('bg-green-logo/30', 'bg-white');
    swipeText.innerHTML = 'เสร็จสิ้น';
    swipeText.classList.replace('pl-20', 'pl-0');
    swipeBtn.classList.replace('cursor-grab', 'cursor-default');

    // 2. เล่นแอนิเมชันให้การ์ดบนสุดและข้อมูลฝั่งขวาค่อยๆ จางหายไป
    const firstCard = cardSlider.firstElementChild;
    const asideContent = document.querySelector('aside'); // เลือกกล่องข้อมูลฝั่งขวา

    if (firstCard) {
        firstCard.style.transition = 'opacity 0.5s, transform 0.5s';
        firstCard.style.opacity = '0';
        firstCard.style.transform = 'scale(0.95)'; // หดเล็กลงนิดๆ ให้ดูมีมิติ
    }
    // 3. ดีเลย์ 800 มิลลิวินาที (0.8 วินาที) เพื่อให้แอนิเมชันเล่นจบ แล้วค่อยเด้งไปหน้าใหม่
    setTimeout(() => {
        // *** ใส่ลิงก์หน้าเว็บที่คุณต้องการให้เด้งไปตรงนี้ ***
        window.location.href = './menu2.html';
    }, 200);
}

// ==========================================
// (ส่วนที่เหลือของโค้ด เช่น updateAsideData, ระบบ Modal, ระบบ Drag ลากเมาส์ ให้คงไว้เหมือนเดิมครับ)
// ==========================================