// หุ้มโค้ดไว้เพื่อป้องกันชื่อตัวแปรไปชนกับไฟล์ done.js
(() => {
    const btnCancel = document.getElementById('cancel-order');
    const modalCancel = document.getElementById('cancel-modal');
    const btnYes = document.getElementById('modal-yes-btn');
    const btnNo = document.getElementById('modal-no-btn');

    // 1. กดปุ่มยกเลิกออเดอร์ -> โชว์ Modal
    btnCancel.addEventListener('click', () => {
        modalCancel.classList.remove('hidden');
    });

    // 2. กด "ยกเลิก" ใน Modal -> ปิด Modal
    btnNo.addEventListener('click', () => {
        modalCancel.classList.add('hidden');
    });

    // 3. กด "ยืนยัน" ใน Modal -> ลบการ์ดบนสุด
    btnYes.addEventListener('click', () => {
        modalCancel.classList.add('hidden'); // ปิด Modal ก่อน

        // ค้นหา Container ที่เก็บการ์ด
        const slider = document.getElementById('cardSlider');
        const empty = document.getElementById('empty-state');

        // ค้นหา "การ์ดใบแรกสุด" ที่เป็นแท็ก <div> (ป้องกันการไปลบแท็ก <style>)
        const firstCard = slider.querySelector('div[id^="Card"]');

        if (firstCard) {
            // ใส่แอนิเมชันให้เฟดหายไป
            firstCard.style.transition = 'opacity 0.3s, transform 0.3s';
            firstCard.style.opacity = '0';
            firstCard.style.transform = 'translateY(-20px)';

            // รอ 0.5 วินาทีให้แอนิเมชันเล่นจบ แล้วค่อยลบทิ้งจริงๆ
            setTimeout(() => {
                firstCard.remove();

                // (ตัวเลือกเสริม) ถ้ามีการ์ดเหลือ ให้จำลองเปลี่ยนข้อมูลฝั่งขวา
                const nextCard = slider.querySelector('div[id^="Card"]');
                if (!nextCard) {
                    // ถ้าลบจนหมดแล้ว
                    empty.classList.remove('hidden');
                    empty.classList.add('flex'); // เพิ่มบรรทัดนี้เพื่อความชัวร์ให้มันจัด Layout สวยงาม

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
                }
            }, 500);
        }
    });
})();