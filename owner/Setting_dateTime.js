document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 🌟 1. แอนิเมชันการ์ดลอยขึ้นมาทีละใบตอนเปิดหน้า
    // ==========================================
    // ดึงการ์ดที่อยู่ในกล่อง #cardSlider มาทั้งหมด (วันที่ และ เวลา)
    const mainCards = document.querySelectorAll('#cardSlider > div');

    mainCards.forEach((card, index) => {
        // เซ็ตค่าเริ่มต้นให้โปร่งใสและตกลงไปด้านล่าง 50px
        card.classList.add('opacity-0', 'translate-y-[50px]', 'transition-all', 'duration-700', 'ease-out');

        // หน่วงเวลาให้ลอยขึ้นมาทีละใบ (ไล่ระดับเวลา)
        setTimeout(() => {
            card.classList.remove('opacity-0', 'translate-y-[50px]');
            card.classList.add('opacity-100', 'translate-y-0');
        }, 100 + (index * 200)); // ใบแรก 100ms, ใบที่สอง 300ms
    });

    // (แถม) ทำให้แถบปุ่มเมนูด้านล่างสุด (article) ลอยตามขึ้นมาเป็นคิวสุดท้าย
    const bottomMenu = document.querySelector('main > article');
    if (bottomMenu) {
        bottomMenu.classList.add('opacity-0', 'translate-y-[50px]', 'transition-all', 'duration-700', 'ease-out');
        setTimeout(() => {
            bottomMenu.classList.remove('opacity-0', 'translate-y-[50px]');
            bottomMenu.classList.add('opacity-100', 'translate-y-0');
        }, 100 + (mainCards.length * 200)); // รอให้การ์ดข้างบนลอยเสร็จก่อน ค่อยลอยตาม
    }

    // ==========================================
    // 2. ระบบสลับหน้าต่างฟอร์ม (ของเดิม)
    // ==========================================
    const editDateBtn = document.getElementById('edit-date-btn');
    const editTimeBtn = document.getElementById('edit-time-btn');

    const viewDefault = document.getElementById('view-default');
    const viewDate = document.getElementById('view-edit-date');
    const viewTime = document.getElementById('view-edit-time');

    function showView(targetView) {
        [viewDefault, viewDate, viewTime].forEach(view => {
            view.classList.add('opacity-0', 'pointer-events-none', 'translate-x-[200px]');
            if (view === viewDefault) view.classList.replace('translate-x-[200px]', 'translate-y-[100px]');
        });
        targetView.classList.remove('opacity-0', 'pointer-events-none', 'translate-x-[200px]', 'translate-y-[100px]');
    }

    if (editDateBtn) editDateBtn.addEventListener('click', () => showView(viewDate));
    if (editTimeBtn) editTimeBtn.addEventListener('click', () => showView(viewTime));

    document.getElementById('cancel-date-btn').addEventListener('click', () => showView(viewDefault));
    document.getElementById('cancel-time-btn').addEventListener('click', () => showView(viewDefault));

    document.getElementById('save-date-btn').addEventListener('click', () => {
        const newDate = document.getElementById('input-new-date').value;
        if (newDate) {
            alert('อัปเดต "วันที่" ในระบบสำเร็จ!');
            showView(viewDefault);
        } else {
            alert('กรุณาเลือกวันที่ก่อนครับ');
        }
    });

    document.getElementById('save-time-btn').addEventListener('click', () => {
        const newTime = document.getElementById('input-new-time').value;
        if (newTime) {
            alert('อัปเดต "เวลา" ในระบบสำเร็จ!');
            showView(viewDefault);
        } else {
            alert('กรุณาเลือกเวลาก่อนครับ');
        }
    });

});