const toggleBtn = document.getElementById('closd-order'); 
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

//main sider
const main = document.getElementById('cardSlider');
const emptyState = document.getElementById('empty-state'); // ตัวแทนของกล่องข้อความ

// ตัวแปรสำหรับ Modal
const modal = document.getElementById('confirm-modal');
const cancelBtn = document.getElementById('cancel-btn');
const confirmBtn = document.getElementById('confirm-btn');

let isOrderClosed = false; // สถานะเริ่มต้น: เปิดร้านรับออเดอร์อยู่

// 1. เมื่อกดปุ่ม "ปิดรับออเดอร์" ที่ Navbar
toggleBtn.addEventListener('click', () => {
    if (!isOrderClosed) {
        // ถ้าสถานะคือ "เปิดอยู่" และต้องการจะปิด -> ให้เปิด Modal ถามเพื่อยืนยัน
        modal.classList.remove('hidden');
    } else {
        // ถ้าสถานะคือ "ปิดอยู่" และกดเพื่อเปิด -> สั่งเปิดร้านได้เลยไม่ต้องถามยืนยัน
        toggleStatus();
    }
});

// 2. เมื่อกด "ยกเลิก" ใน Modal
cancelBtn.addEventListener('click', () => {
    // ซ่อน Modal กลับไป โดยไม่เปลี่ยนสถานะอะไร
    modal.classList.add('hidden'); 
});

// 3. เมื่อกด "ยืนยัน" ใน Modal
// 3. เมื่อกด "ยืนยัน" ใน Modal
confirmBtn.addEventListener('click', () => {
    // ใช้ setTimeout ครอบคำสั่งทั้งหมดไว้เพื่อสร้างดีเลย์
    setTimeout(() => {
        // ซ่อน Modal 
        modal.classList.add('hidden');
        
        // สลับสถานะปุ่ม (เปลี่ยนสีและข้อความ)
        toggleStatus(); 
        
    }, 1000); // <-- ใส่ดีเลย์ 200 มิลลิวินาที (0.2 วินาที) ตรงนี้ครับ
});

// --- ฟังก์ชันสำหรับเปลี่ยนสีและไอคอน (แยกออกมาเพื่อให้เรียกใช้ง่ายๆ) ---
function toggleStatus() {
    isOrderClosed = !isOrderClosed;

    if (isOrderClosed) {
        // สถานะ: ปิดร้าน (เปลี่ยนปุ่มเป็นสีเขียว เพื่อให้กด "เปิดรับออเดอร์")
        toggleText.innerText = ' เปิดรับออเดอร์';
        toggleIcon.classList.replace('fa-pause', 'fa-play');
        
        toggleBtn.classList.remove('border-red-order', 'text-red-order');
        toggleBtn.classList.add('bg-green-logo', 'text-white');

        main.classList.add('hidden');
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex'); // ต้องใส่ flex กลับเข้าไปเพื่อให้จัดกึ่งกลางทำงาน
    } else {
        // สถานะ: เปิดร้าน (เปลี่ยนปุ่มกลับเป็นสีแดง เพื่อให้กด "ปิดรับออเดอร์")
        toggleText.innerText = ' ปิดรับออเดอร์';
        toggleIcon.classList.replace('fa-play', 'fa-pause');
        
        toggleBtn.classList.remove('bg-green-logo', 'text-white');
        toggleBtn.classList.add('border-red-order', 'text-red-order');

        // สั่งโชว์การ์ด และ ซ่อนข้อความ Empty State กลับไป
        main.classList.remove('hidden');
        main.classList.add('opacity-0', 'translate-x-500', 'transition-all', 'duration-2000', 'ease-out');
        emptyState.classList.add('hidden');
        emptyState.classList.remove('flex');

        setTimeout(() => {
            // เมื่อครบ 2 วินาที ให้ดึงการ์ดกลับมาที่เดิม (translate-x-0) และชัดเต็มที่ (opacity-100)
            main.classList.remove('opacity-0', 'translate-x-500');
            main.classList.add('opacity-100', 'translate-x-0');
        }, 1000); // <-- เปลี่ยนตัวเลขตรงนี้ได้ (1000 = 1 วินาที)
    }
}
