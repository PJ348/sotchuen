const slider = document.getElementById('cardSlider');

let isDown = false;
let startX;
let scrollLeft;
let isDragging = false; // ตัวแปรเช็คสถานะการลาก

// 1. ตอนกดเมาส์ลง
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  isDragging = false; // รีเซ็ตว่า "ไม่ได้ลาก" ตอนเริ่มกดเมาส์ทุกครั้ง
  
  slider.classList.add('cursor-grabbing');
  slider.classList.remove('cursor-grab');
  
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// 2. ตอนลากเมาส์
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  
  isDragging = true; // เมาส์ขยับ = กำลังลากแน่นอน
  
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; 
  slider.scrollLeft = scrollLeft - walk;
});

// 3. ตอนปล่อยเมาส์ และ ตอนลากเมาส์ออกนอกพื้นที่
slider.addEventListener('mouseup', () => {
  isDown = false;
  // ปล่อยเมาส์แล้ว คืนค่าเคอร์เซอร์
  slider.classList.remove('cursor-grabbing');
  slider.classList.add('cursor-grab');
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('cursor-grabbing');
  slider.classList.add('cursor-grab');
});

// -----------------------------------------
// ฟังก์ชันสำหรับ onclick ที่เราเขียนไว้ใน HTML
// -----------------------------------------
function goToPage(event, url) {
  // ถ้าตัวแปรบอกว่ากำลัง "ลาก" อยู่ ให้เบรกการทำงานทันที
  if (isDragging) {
    event.preventDefault(); 
    return; 
  }
  
  // ถ้าไม่ได้ลาก (คือการคลิกปกติ) ให้เปลี่ยนหน้า
  window.location.href = url;
}