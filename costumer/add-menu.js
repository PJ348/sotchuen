// ข้อมูลรายละเอียดของเมนูทั้งหมดที่มี
const menus = [
    {
        id: 0,
        name: 'ข้าวห่อหมกทะเล',
        price: 55,
        img: './img/food-menu1.jpg'
    },

    {
        id: 1,
        name: 'ข้าวผัดพริกแกง',
        price: 50,
        img: './img/food-menu2.jpg'
    },

    {
        id: 2,
        name: 'ข้าวไข่ขยี้ปลากระป๋อง',
        price: 55,
        img: './img/food-menu3.jpg'
    },

    {
        id: 3,
        name: 'ข้าวกะเพรา',
        price: 40,
        img: './img/food-menu4.jpg'
    },

    {
        id: 4,
        name: 'ข้าวหมูคั่วพริกเกลือ',
        price: 45,
        img: './img/food-menu5.jpg'
    },

    {
        id: 5,
        name: 'ข้าวไข่เจียว',
        price: 40,
        img: './img/food-menu6.jpg'
    },

    {
        id: 6,
        name: 'ข้าวทะเลผัดผงกระหรี่',
        price: 55,
        img: './img/food-menu7.jpg'
    },

    {
        id: 7,
        name: 'ข้าวหน้าหมูเทอริยากิ',
        price: 55,
        img: './img/food-menu8.jpg'
    }
]

// ลิ้งไปหน้าตะกร้า
function goCartPage() {
    window.location.href = './cart.html';
}

// กดเพิ่มเมนูแล้วซ่อนหน้าหลักแล้วให้หน้ารายละเอียดเมนูขึ้นมาแทน
function addMenuPage(groupId) {
    const home = document.getElementById('home');
    const addMenu = document.getElementById('addMenu');
    const detailMenu = document.getElementById('detailMenu')

    let soldOut = [1, 2, 3, 5];
    let menu = null;

    if (soldOut.includes(groupId)) {
        console.log('อาหารหมด');
        return;
    }

    for (let i = 0; i < menus.length; i++) {
        if (menus[i].id === groupId) {
            menu = menus[i];
            break;
        }
    }

    Price = menu.price; //กำหนดตัวแปรไว้ใช้กับบวก ลบ ราคาอาหารด้านล่าง

    window.scrollTo(0, 0);
    home.classList.add('hidden');
    addMenu.classList.remove('hidden');
    detailMenu.classList.add('hidden');
    document.getElementById('addMenuName').innerText = menu.name;
    document.getElementById('addMenuPrice').innerText = menu.price + ' บาท';
    document.getElementById('addMenuImg').src = menu.img;
    document.getElementById('price').innerText = menu.price + ' บาท';

    document.getElementById('normal').checked = true;
    document.getElementById('normalRice').checked = true;
}

// กดหลับไปหน้าhomeเหมือนเดิม
function backHomePage() {

    const home = document.getElementById('home');
    const addMenu = document.getElementById('addMenu');
    const detailMenu = document.getElementById('detailMenu');

    const size = document.getElementsByName('size');
    const ricesize = document.getElementsByName('ricesize');

    count = 1;

    home.classList.remove('hidden');
    addMenu.classList.add('hidden');
    detailMenu.classList.remove('hidden');

    for (let i = 0; i < size.length; i++) {
        size[i].checked = false;
    }
    for (let i = 0; i < ricesize.length; i++) {
        ricesize[i].checked = false;
    }
    if (document.getElementById('req')) {
        document.getElementById('req').value = '';
    }
    if (document.getElementById('value')) {
        document.getElementById('value').textContent = count;
    }

    window.scrollTo(0, 0);
}

// การ์ดเพิ่มเข้าตะกร้าเรียบร้อบ
function showSuccessAlert(message) {
    document.getElementById('successAlertMessage').innerText = message;
    document.getElementById('successAlert').classList.remove('hidden');
}
function closeshowSuccessAlert() {
    document.getElementById('successAlert').classList.add('hidden');
}

// เช็คว่ากดเลือกระดับต่างๆครบมั้ย
function isChecked(name) {
    return document.querySelector(`input[name="${name}"]:checked`);
}
//การ์ดเวลาเลือกครบ
function checkSelection() {
    const foodName = document.getElementById('addMenuName').innerText;
    const foodImg = document.getElementById('addMenuImg').src;
    const reqText = document.getElementById('req').value.trim();
    const thaiPattern = /^[ก-๙\s0-9]*$/;
    if (reqText !== '' && !thaiPattern.test(reqText)) {
        showAlert("กรุณากรอกคำขอเพิ่มเติมเป็นภาษาไทยเท่านั้น");
        return;
    }

    // ดึงข้อความจาก Option ที่เลือก
    const sizeRadio = document.querySelector('input[name="size"]:checked');
    const sizeOption = sizeRadio ? sizeRadio.nextElementSibling.innerText : 'ธรรมดา';

    const riceRadio = document.querySelector('input[name="ricesize"]:checked');
    const riceOption = riceRadio ? riceRadio.value : 'normalRice';

    const unitPrice = Price + extraPrice;
    const totalPrice = unitPrice * count;

    const cartItem = {
        id: Date.now(),
        name: foodName,
        img: foodImg,
        price: totalPrice,
        qty: count,
        options: {
            size: sizeOption,
            rice: riceOption,
            req: reqText
        }
    };

    // ดึงของเก่ามา ยัดของใหม่ใส่ แล้วเซฟกลับ
    let cart = JSON.parse(sessionStorage.getItem('myCart')) || [];
    cart.push(cartItem);
    sessionStorage.setItem('myCart', JSON.stringify(cart));

    updateCartBadge();

    showSuccessAlert("เพิ่มรายการอาหารลงตะกร้าเรียบร้อยแล้ว");
    setTimeout(function () {
        closeshowSuccessAlert();
        backHomePage();
    }, 1000);
}

function updateCartBadge() {
    let cart = JSON.parse(sessionStorage.getItem('myCart')) || [];
    let totalItems = 0;
    cart.forEach(item => totalItems += item.qty);

    // ค้นหา span ที่แสดงตัวเลขตะกร้า
    const badges = document.querySelectorAll('.absolute.-top-2.-right-2');
    badges.forEach(badge => {
        if (!badge.classList.contains('fa-bag-shopping') && badge.innerText !== undefined) {
            badge.innerText = totalItems;

        }
    });
}

function showAlert(message) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('customAlert').classList.remove('hidden');
}
// กดปุ่ม ตกลง เพื่อปิดการ์ด
function closeAlert() {
    document.getElementById('customAlert').classList.add('hidden');
}

// สั่งให้อัปเดตเลขตะกร้า
document.addEventListener("DOMContentLoaded", updateCartBadge);

//กดเอากับพิเศษต(ต้องกำหนดตัวแปรที่มันเก็บราคาที่เรากดพิเศษแล้วค่อยเอาไปคำนวณราคารวม)
let count = 1;
let extraPrice = 0;
function updateDisplay() {
    document.getElementById('value').textContent = count;

    // คำนวณราคา (ราคาปกติ + ราคาพิเศษ) * จำนวนจาน
    let total = (Price + extraPrice) * count;
    document.getElementById('price').textContent = total + " บาท";

}

function changeSize() {
    // เช็คว่า id="extra" โดนเลือกอยู่หรือเปล่า
    const isExtra = document.getElementById('extra').checked;

    if (isExtra) {
        extraPrice = 10;

    } else {
        extraPrice = 0;
    }

    updateDisplay();
}

function plusMenu() {
    if (count < 10) {
        count += 1;
        updateDisplay();

    } else {
        showAlert("ไม่สามารถเพิ่มจำนวนได้เกิน 10 รายการ");
    }
}

function minusMenu() {
    if (count > 1) {
        count -= 1;
        updateDisplay();
    }
}