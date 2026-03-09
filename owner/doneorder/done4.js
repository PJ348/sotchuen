// --- 1. ระบบปัดเพื่อเสร็จสิ้น (Swipe to Complete) ---
const swipeContainer = document.getElementById('swipe-container');
const swipeBtn = document.getElementById('swipe-btn');
const swipeText = document.getElementById('swipe-text');
const swipeIcon = document.getElementById('swipe-icon');
const btnCancel = document.getElementById('cancel-order');

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

/// เพิ่มตัวแปรเช็คสถานะป้องกันการปัดซ้ำซ้อน (ใส่ไว้ด้านบนๆ คู่กับ let isDragging)
let isCompleted = false;

// ==========================================
// ฟังก์ชันเมื่อปัดเสร็จสิ้น (รันคิวต่อเนื่อง + โชว์ Empty State เมื่อหมด)
// ==========================================
function completeOrder() {
    if (isCompleted) return;
    isCompleted = true; // ล็อคปุ่มชั่วคราวขณะกำลังประมวลผล

    // 1. เปลี่ยน UI เป็นสถานะ "เสร็จสิ้น" ทันทีที่ปัดสุด
    swipeContainer.classList.replace('bg-green-logo/30', 'bg-white');
    swipeText.innerHTML = 'เสร็จสิ้น';
    swipeText.classList.replace('pl-20', 'pl-0');
    swipeBtn.classList.replace('cursor-grab', 'cursor-default');

    // 2. หา Card Container และดึง "การ์ดใบแรกสุด" ออกมา (ไม่ฟิกซ์ชื่อ Card1 แล้ว)
    const slider = document.getElementById('cardSlider');
    const firstCard = slider.querySelector('div[id^="Card"]');

    if (firstCard) {
        // เล่นแอนิเมชันให้การ์ดค่อยๆ หดและจางหายไป
        firstCard.style.transition = 'opacity 0.3s, transform 0.3s';
        firstCard.style.opacity = '0';
        firstCard.style.transform = 'scale(0.9)';

        // ดีเลย์รอแอนิเมชันจบ (0.3 วินาที) แล้วค่อยลบ
        setTimeout(() => {
            firstCard.remove(); // ลบการ์ดใบบนสุดทิ้งไป

            // 3. เช็คว่ายังมีการ์ดใบอื่นต่อคิวอยู่อีกไหม?
            const nextCard = slider.querySelector('div[id^="Card"]');

            if (!nextCard) {
                // ---------------------------------------------
                // กรณีที่ 1: การ์ดหมดเกลี้ยงแล้ว -> โชว์ Empty State
                // ---------------------------------------------
                const emptyState = document.getElementById('empty-state');
                if (emptyState) {
                    emptyState.classList.remove('hidden');
                    emptyState.classList.add('flex');
                }

                // เคลียร์ข้อมูลฝั่งขวาให้หน้าจอโล่งๆ
                document.querySelector('aside h1').innerText = "";

                const asideBadge = document.querySelector('aside .bg-orang-menu');
                if (asideBadge) asideBadge.style.opacity = '0';

                const asidePrice = document.querySelector('aside .text-orang-menu.text-\\[64px\\]');
                if (asidePrice) asidePrice.innerText = ""; // ใส่ขีดไว้จะดูสวยกว่าปล่อยว่างครับ

                const foodListContainer = document.querySelector('aside .overflow-y-auto');
                if (foodListContainer) foodListContainer.innerHTML = '';

                const asideItemsTime = document.querySelector('aside .text-\\[40px\\].font-light');
                if (asideItemsTime) asideItemsTime.style.opacity = '0';

                // 🌟 ซ่อนเบอร์โทร (ใส่ if ดักไว้เพื่อความปลอดภัย)
                const telphone = document.getElementById('tel');
                if (telphone) {
                    telphone.classList.add('hidden');
                }

                // 🌟 ซ่อนปุ่มปัดและปุ่มยกเลิกทิ้งไปเลย (เพิ่มการประกาศตัวแปรให้ครบ)
                const swipeContainer = document.getElementById('swipe-container');
                if (swipeContainer) {
                    swipeContainer.style.opacity = '0';
                    swipeContainer.style.pointerEvents = 'none';
                }

                if (btnCancel) {
                    btnCancel.style.opacity = '0';
                    btnCancel.style.pointerEvents = 'none';
                }
            } else {
                // ---------------------------------------------
                // กรณีที่ 2: ยังมีการ์ดเหลืออยู่ -> รีเซ็ตปุ่มให้ปัดใหม่ได้
                // ---------------------------------------------
                // หน่วงเวลาให้พนักงานเห็นคำว่า "เสร็จสิ้น" แป๊บเดียว แล้วเด้งปุ่มกลับไปรอรับคิวต่อไป
                setTimeout(() => {
                    swipeContainer.classList.replace('bg-white', 'bg-green-logo/30');
                    swipeText.innerHTML = 'ปัดเพื่อเสร็จสิ้น &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-angles-right"></i>';
                    swipeText.classList.replace('pl-0', 'pl-20');

                    swipeBtn.style.transform = 'translateX(0px)';
                    swipeBtn.classList.replace('cursor-default', 'cursor-grab');

                    currentTranslate = 0;
                    isCompleted = false; // ปลดล็อคปุ่มให้ลากใหม่ได้
                }, 500); // รอ 0.5 วินาทีแล้วเด้งปุ่มกลับ
            }

        }, 300);
    }
}