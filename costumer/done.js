// ข้อมูลรายละเอียดของเมนูทั้งหมดที่มี
const menus = [
    {
        id: 0,
        name: 'ข้าวห่อหมกทะเลไข่ข้น',
        price: 55,
        img: '../img/food-menu1.jpg'
    },

    {
        id: 1,
        name: 'ข้าวผัดพริกแกง',
        price: 50,
        img: '../img/food-menu2.jpg'
    },

    {
        id: 2,
        name: 'ข้าวไข่ขยี้ปลากระป๋อง',
        price: 55,
        img: '../img/food-menu3.jpg'
    },

    {
        id: 3,
        name: 'ข้าวกะเพรา',
        price: 40,
        img: '../img/food-menu4.jpg'
    },

    {
        id: 4,
        name: 'ข้าวหมูคั่วพริกเกลือ',
        price: 45,
        img: '../img/food-menu5.jpg'
    },

    {
        id: 5,
        name: 'ข้าวไข่เจียว',
        price: 40,
        img: '../img/food-menu6.jpg'
    },

    {
        id: 6,
        name: 'ข้าวทะเลผัดผงกระหรี่',
        price: 55,
        img: '../img/food-menu7.jpg'
    },

    {
        id: 7,
        name: 'ข้าวหน้าหมูเทอริยากิ',
        price: 55,
        img: '../img/food-menu8.jpg'
    }
]

// ลิ้งหน้าไปหน้าhome
function goHomePage() {
    window.location.href = './index.html';
}

// เช้คว่าทานที่ร้าน หรือ สั่งกลับบ้าน
function toggleEatMode(mode) {

    const eatHere = document.getElementById('eatHere');
    const backHome = document.getElementById('backHome');

    const detailBackHome = document.getElementById('detailBackHome');
    const detailEatHere = document.getElementById('detailEatHere');

    const allStates = ['bg-[#EDF7ED]', 'text-[#4CAF50]', 'border-[#4CAF50]',
        'bg-[#FFF5E5]', 'text-[#FF9800]', 'border-[#FF9800]',
        'bg-white', 'hover:bg-gray-50', 'border-[#B3B3B3]'];

    [eatHere, backHome].forEach(btn => btn.classList.remove(...allStates));


    if (mode === 'eat-here') {

        eatHere.classList.add('bg-[#EDF7ED]', 'text-[#4CAF50]', 'border-[#4CAF50]');
        backHome.classList.add('bg-white', 'border-[#B3B3B3]', 'hover:bg-gray-50');

        detailEatHere.classList.remove('hidden');
        detailBackHome.classList.add('hidden');

        document.getElementById('nameBuy').value = '';
        document.getElementById('phoneBuy').value = '';

    }

    if (mode === 'back-home') {

        backHome.classList.add('bg-[#FFF5E5]', 'text-[#FF9800]', 'border-[#FF9800]');
        eatHere.classList.add('bg-white', 'border-[#B3B3B3]', 'hover:bg-gray-50');

        detailBackHome.classList.remove('hidden');
        detailEatHere.classList.add('hidden');

        document.getElementById('numberTable').value = '';

        Price = menu.price;
        document.getElementById('price').innerText = Price;
    }

}
document.addEventListener('DOMContentLoaded', () => {
    // กำหนดให้ 'eat-here' เป็นค่าเริ่มต้นทันทีที่เปิดหน้านี้
    toggleEatMode('eat-here');
});


// การ์ดแจ้งเตือน
function showAlert(message) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('customAlert').classList.remove('hidden');
}
// กดปุ่ม ตกลง เพื่อปิดการ์ด
function closeAlert() {
    document.getElementById('customAlert').classList.add('hidden');
}

//ระบบดึงข้อมูลจากตะกร้ามาแสดง
let itemToDeleteIndex = -1;
// สร้างการ์ด
function renderCart() {
    let cart = JSON.parse(sessionStorage.getItem('myCart')) || [];
    const orderContainer = document.getElementById('allFoodOrder');

    let htmlContent = '';
    let grandTotalQty = 0;
    let grandTotalPrice = 0;

    cart.forEach((item, index) => {
        grandTotalQty += item.qty;
        grandTotalPrice += item.price;
        let itemNum = String(index + 1).padStart(2, '0');

        let sizeText = 'ธรรมดา'; // ตั้งค่าเริ่มต้นไว้ก่อน
        if (item.options.size) {
            sizeText = item.options.size;
        }

        let riceText = 'ปกติ'; // ตั้งค่าเริ่มต้น
        if (item.options.rice === 'extra') {
            riceText = 'เพิ่มข้าว';
        } else if (item.options.rice === 'less') {
            riceText = 'ข้าวน้อย';
        }

        let reqHTML = ' '; // ตั้งค่าเริ่มต้น
        if (item.options.req && item.options.req.trim() !== '') {

            reqText = item.options.req;

            reqHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-plus text-[#4CAF50] text-[10px] flex"></i>
                    <span class="text-sm font-normal text-[#4CAF50] line-clamp-1">${reqText}</span>
                </div>
            `;
        }

        htmlContent += `
        <div class="bg-[#AAABAC] rounded-3xl w-full mb-6">

            <div id="foodOrder" class="bg-white rounded-3xl shadow-lg ml-2.5 py-2 px-6 flex gap-6">
                <p class="text-5xl font-bold text-[#D9D9D9] flex justify-center items-center p-2 max-sm:text-xl max-[1025px]:text-3xl">
                    ${itemNum}</p>
                <img src="${item.img}" alt="food" class="w-28 h-28 object-cover rounded-2xl max-[985px]:hidden">

                <div class="flex-1">
                    <div class="flex items-start">
                        <p class="text-lg font-medium line-clamp-2">${item.name}</p>
                        <p class="text-lg font-medium text-[#FF9800] ml-2 whitespace-nowrap"> X ${item.qty}</p> 
                    </div>
                    <div class="flex flex-col gap-1 mt-1 ml-2">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-star text-[#FF9800] text-xs flex"></i>
                            <span class="text-sm font-normal text-[#FF9800] line-clamp-1">${sizeText}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-star text-[#FF9800] text-xs flex"></i>
                            <span class="text-sm font-normal text-[#FF9800] line-clamp-1">${riceText}</span>
                        </div>

                        ${reqHTML}
                        
                    </div>
                </div>

                <div class="flex flex-row justify-center items-center p-2 gap-4 max-[1025px]:relative">
                    <p class="text-xl font-medium text-[#FF9800] max-[1025px]:mt-auto">${item.price}
                        <span class="text-xl font-medium text-black/30">บาท</span>
                    </p>

                    <span id="closeIcon"
                        class="bg-[#D84315] text-white rounded-full flex justify-center items-center w-6 h-6 cursor-pointer max-[1025px]:absolute top-2 right-1"
                        onclick="deleteOrder(${index})">
                        <i class="fa-solid fa-xmark text-sm"></i>
                    </span>
                </div>
            </div>
        </div>`;
    });

    orderContainer.innerHTML = htmlContent;
    updateSummary(grandTotalQty, grandTotalPrice);
}

function updateSummary(qty, price) {
    const displayQty = (qty === 0) ? "-- รายการ" : qty + " รายการ";
    const displayPrice = (qty === 0) ? "-- บาท" : price + " บาท";

    if (document.getElementById('totalList')) {
        document.getElementById('totalList').innerText = displayQty;
    }
    if (document.getElementById('totalPrice')) {
        document.getElementById('totalPrice').innerText = displayPrice;
    }
    if (document.getElementById('allTotalPrice')) {
        document.getElementById('allTotalPrice').innerText = displayPrice;
    }

    // อัปเดตไอคอนตะกร้าด้านบน
    const cartBadge = document.getElementById('totalCartList');
    if (cartBadge) {
        cartBadge.innerText = qty;
        cartBadge.classList.remove('hidden');
    }
}

// กดยืนสั่งสั่งรายการอาหาร
function confirmOrder() {
    const numberTable = document.getElementById('numberTable');
    const table = numberTable.value.trim();
    const nameBuy = document.getElementById('nameBuy');
    const name = nameBuy.value.trim();
    const phoneBuy = document.getElementById('phoneBuy');
    const phone = phoneBuy.value.trim();

    let cart = JSON.parse(sessionStorage.getItem('myCart')) || [];

    if (cart.length === 0) {
        showAlert('กรุณาเลือกเมนูอาหารอย่างน้อย 1 รายการ');
        return;
    }

    const eatHere = document.getElementById('eatHere').classList.contains('border-[#4CAF50]');

    if (eatHere) {
        if (numberTable.value === '') {
            showAlert('กรุณาระบุหมายเลขโต๊ะ');
            return;
        }
        if (!/^[1-4]$/.test(table)) {
            showAlert('กรุณาระบุหมายเลขโต๊ะให้ถูกต้อง (1-4)');
            return;
        }
    } else {
        if (name === '') {
            showAlert('กรุณาระบุชื่อผู้รับอาหาร');
            return;
        }
        if (!/^[ก-๙\s]+$/.test(name)) {
            showAlert('กรุณาระบุชื่อผู้รับอาหารให้ถูกต้อง (เป็นภาษาไทยเท่านั้น)');
            return;
        }
        if (phone === '') {
            showAlert('กรุณาระบุเบอร์โทรศัพท์');
            return;
        }
        if (!/^0\d{9}$/.test(phone)) {
            showAlert('กรุณาระบุเบอร์โทรศัพท์ให้ถูกต้อง (10หลัก)');
            return;
        }
    }

    // ซ่อน UI 
    if (document.getElementById('addOrderIcon'))
        document.getElementById('addOrderIcon').classList.add('hidden');
    if (document.getElementById('detailPayment'))
        document.getElementById('detailPayment').classList.add('hidden');

    const confirmBtns = document.querySelectorAll('#confirmOrder');
    confirmBtns.forEach(btn => btn.classList.add('hidden'));

    if (document.getElementById('backIcon'))
        document.getElementById('backIcon').classList.add('hidden');

    // โชว์หน้าสำเร็จ
    if (document.getElementById('backHomeIcon'))
        document.getElementById('backHomeIcon').classList.remove('hidden');
    if (document.getElementById('confirmOrderDone'))
        document.getElementById('confirmOrderDone').classList.remove('hidden');

    // รันคิว
    let queue = parseInt(document.getElementById('queue').innerText) || 9;
    queue += 1;

    if (document.getElementById('queue')) {
        document.getElementById('queue').innerText = queue;
        document.getElementById('queue').className = 'bg-[radial-gradient(circle,_var(--color-orange-400)_40%,_var(--color-orange-200)_100%)] inline-flex items-center justify-center text-white font-bold rounded-full w-8 h-8';
    }

    if (document.getElementById('queueNumber')) {
        document.getElementById('queueNumber').innerText = "#" + queue;
    }

    if (!eatHere) {
        let qType = document.getElementById('queueType');
        if (qType) {
            qType.classList.remove('bg-[#4CAF50]');
            qType.classList.add('bg-[#FF9800]');
            qType.innerText = "สั่งกลับบ้าน";
        }
    }

    // ซ่อนกากบาทลบทิ้ง
    const closeIcons = document.querySelectorAll('.fa-xmark');
    closeIcons.forEach(icon => icon.parentElement.classList.add('hidden'));

    // เคลียร์ตะกร้า
    sessionStorage.removeItem('myCart');
    updateSummary(0, 0); // เคลียร์เลขตะกร้าด้านบน

    window.scrollTo(0, 0);
}

// โหลดหน้าจอ
document.addEventListener('DOMContentLoaded', () => {
    toggleEatMode('eat-here');
    renderCart(); // วาดการ์ด
});

// ยืนยันการลบ
function deleteOrder(index) {
    itemToDeleteIndex = index; // เก็บตำแหน่งที่จะลบไว้ในตัวแปร global
    document.getElementById('customConfirm').classList.remove('hidden');
}

// ยกเลิกการลบรายการอาหาร
function closeConfirm() {
    document.getElementById('customConfirm').classList.add('hidden');
    itemToDelete = null;
}

// ยืนยยันการลบรายการอาหาร
function proceedDelete() {
    if (itemToDeleteIndex > -1) {
        let cart = JSON.parse(sessionStorage.getItem('myCart')) || [];
        cart.splice(itemToDeleteIndex, 1);
        sessionStorage.setItem('myCart', JSON.stringify(cart));

        renderCart(); //updateSummary เแก้ราคารวม
    }
    closeConfirm();
}