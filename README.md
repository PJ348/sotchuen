#  ระบบสั่งอาหารภายในร้านค้า (Web-Based Food Ordering System)

[![Project Status: Active](https://img.shields.io/badge/Project%20Status-Active-success.svg)]()
[![Academic Year](https://img.shields.io/badge/Academic%20Year-2025%20(2568)-blue.svg)]()

โปรเจกต์นี้เป็นส่วนหนึ่งของรายวิชา **Frontend Software Development** และ **Software Requirement** โดยเป็นเว็บไซต์สำหรับการจองและสั่งอาหารที่พัฒนาโดย **กลุ่มทำโปรเจคจนกว่าจะเบื่อ (Tham project jon gwa ja beua)** จากสาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยพะเยา (University of Phayao) สำหรับปีการศึกษา 2568 เพื่อมุ่งเน้นการพัฒนาซอฟต์แวร์ที่ตอบโจทย์การใช้งานจริงและเสริมสร้างทักษะด้านวิศวกรรมซอฟต์แวร์ให้กับนักศึกษา

> *This project is a part of the Frontend Software Development and Software Requirement courses. It is a booking and food ordering website developed by the Tham project jon gwa ja beua group from the Department of Software Engineering, University of Phayao, for the academic year 2025. The project aims to develop software that provides practical solutions for real-world applications while enhancing the students' software engineering skills.*

---

##  Table of Contents
- [Completed Functions](#-completed-functions)
- [Limitations & Out of Scope](#-limitations--out-of-scope)
- [Tech Stack Frontend](#-tech-stack-frontend)
- [User Manual](#-user-manual)
- [Team Job Position](#-team-job-position)
- [Demo](#-demo)
- [Contact](#-contact)

---

##  Completed Functions
ฟังก์ชันการทำงานที่เสร็จสมบูรณ์และสามารถใช้งานได้จริง:

###  ฝั่งลูกค้า (Customers)
- **ระบบแสดงรายการอาหาร (Digital Menu Display):**
  - แสดงรูปภาพและราคาของเมนูอย่างชัดเจน
  - มีแถบแสดง **“จำนวนคิวทั้งหมด”** ที่กำลังรออยู่บริเวณด้านบนสุดของเว็บไซต์ เพื่อให้ลูกค้าประเมินเวลารอเบื้องต้นได้
- **ระบบเลือกรายการอาหารและระบุรายละเอียด (Customization & Note):**
  - รองรับการเลือกออปชัน เช่น ธรรมดา หรือ พิเศษ
  - สามารถระบุคำขอเพิ่มเติม (Add-on/Note) ให้กับทางร้านได้
- **ระบบตะกร้าสินค้าและคำนวณราคา (Foods Cart):**
  - สรุปรายการอาหาร คำนวณราคารวม และเลือกรูปแบบการรับประทาน (ทานที่ร้าน / สั่งกลับบ้าน)
  - **ทานที่ร้าน:** ระบบบังคับให้เลือก "เบอร์โต๊ะ" (เลข 1 ถึง 4)
  - **สั่งกลับบ้าน:** ระบบบังคับให้กรอก "ชื่อ" และ "เบอร์โทรศัพท์" โดยระบบจะตรวจสอบความถูกต้อง หากไม่ครบ 10 หลัก จะแสดงข้อความแจ้งเตือน (Error Message) และไม่อนุญาตให้ส่งออเดอร์
- **ระบบยืนยันคำสั่งซื้อ (Order Confirmation):**
  - เมื่อส่งออเดอร์ ระบบจะสร้าง **“หมายเลขออเดอร์ (Order ID)”** และแสดงคำแนะนำการชำระเงิน (เช่น “กรุณาชำระเงินที่หน้าเคาน์เตอร์”)
  - หน้าจอติดตามคิวของลูกค้าจะอัปเดตข้อมูล **“จำนวนคิวทั้งหมด”** แบบอัตโนมัติ (Auto-refresh/Polling) เพื่อให้ลูกค้าทราบความคืบหน้าได้ทันทีโดยไม่ต้องกดรีเฟรชหน้าเว็บ

###  ผู้ดูแลระบบหรือเจ้าของร้าน (Administrator / Owner)
- **จอแสดงผลในครัว (Kitchen Display System - KDS):**
  - แสดงรายการออเดอร์เรียงตามลำดับคิว (แสดงเฉพาะออเดอร์ที่สั่งผ่านเว็บไซต์)
  - มีสัญลักษณ์ระบุชัดเจนว่า **ทานที่ร้าน** (เน้นแสดงเบอร์โต๊ะ) หรือ **สั่งกลับบ้าน** (เน้นแสดงชื่อลูกค้า)
  - มีปุ่ม **“เสร็จสิ้น”** เมื่อทำอาหารเสร็จ ระบบจะนำออเดอร์ออกจากหน้าจอ และอัปเดตจำนวนคิวบนหน้าจอของลูกค้าโดยอัตโนมัติ
- **ระบบจัดการเมนูอาหาร (Menu Management):**
  - สามารถ เพิ่ม/ลบ/แก้ไข รายการอาหาร ราคา รูปภาพ และจัดการสถานะของเมนูได้
- **ระบบรายงานยอดขายและจัดการร้าน (Sales Analytics & Store Status):**
  - ดูสรุปยอดขายตามวันที่กำหนด จากออเดอร์ที่เสร็จสิ้น (แสดงยอดเงินรวม)
  - ระบบเปิด-ปิดรับออเดอร์ออนไลน์ (เวลาทำการ 11:00–23:00 น.) 
  - หากร้านปิดรับออเดอร์ หน้าเว็บของลูกค้าจะแสดงข้อความ *“ร้านปิดรับออเดอร์ออนไลน์ชั่วคราว”* (ลูกค้าจะยังดูเมนูได้ แต่ไม่สามารถกดสั่งซื้อได้)

---

##  Limitations & Out of Scope
ข้อจำกัดและขอบเขตการทำงานที่อยู่นอกเหนือระบบ (สิ่งที่ระบบไม่ครอบคลุม):

- **ไม่มีระบบชำระเงินออนไลน์ภายในเว็บ:** ไม่รองรับ Payment Gateway
- **ไม่เชื่อมต่อกับแพลตฟอร์มภายนอก:** ไม่มีการเชื่อมต่อกับ Delivery App (เช่น Grab, LINEMAN)
- **ไม่สามารถแก้ไขออเดอร์ได้:** เมื่อลูกค้ากดยืนยันออเดอร์แล้ว จะไม่สามารถแก้ไขข้อมูลผ่านระบบได้
- **ไม่รองรับการแทรกคิวแบบ Manual:** ไม่สามารถนำออเดอร์ที่รับผ่านการจดกระดาษหน้าร้าน มาแทรกเข้าสู่ระบบคิวออนไลน์ได้

---

##  Tech Stack Frontend
เครื่องมือและเทคโนโลยีที่ใช้ในการพัฒนาส่วนหน้าบ้าน (Frontend):

- **HTML5**
- **Tailwind CSS**
- **JavaScript (Vanilla JS)**

---

##  User Manual
คู่มือการใช้งานระบบสำหรับผู้ใช้และผู้ดูแลร้าน สามารถดูรายละเอียดเพิ่มเติมได้ที่ลิงก์ด้านล่าง:
 **[คู่มือการใช้งานระบบสั่งอาหารภายในร้านค้า (Google Docs)](https://docs.google.com/document/d/1uXjXzO6uRfVuC5z1rIONnYdl0w-9BDt8c-91-BQHkrs/edit?usp=sharing)**

---

##  Team Job Position
รายชื่อสมาชิก **กลุ่มทำโปรเจคจนกว่าจะเบื่อ (Tham project jon gwa ja beua)** และตำแหน่งหน้าที่รับผิดชอบ:

| Student ID | Name | Position |
| :---: | :--- | :--- |
| 68023403 | นางสาวภรณ์ทินรดา จันทร์เพ็ญ (Pornthinrada Janphen) | Front-End Developer |
| 68025461 | นางสาวพิชญดา ใสโสภณ (Phichayada Saisophon) | BA and UI Designer |
| 68025472 | นายเมธาสิทธิ์ มูลศรี (Methasit Moonsri) | Front-End Developer |
| 68025494 | นายวุฒิภัทร สัตตทิพย์พงศ์ (Puttipat Sattathippong) | Project Leader and UX/UI Design |

---

##  Demo
สามารถทดลองใช้งานเว็บไซต์จริงได้ที่นี่:
 **[ลิงก์สำหรับเข้าใช้งานเว็บไซต์ (รออัปเดต URL จริง)](https://your-actual-demo-link.onrender.com)** *(หมายเหตุ: อย่าลืมเปลี่ยนลิงก์ตรงนี้ให้เป็นของกลุ่มตัวเองนะครับ)*

---

##  Contact
หากมีข้อสงสัยหรือคำถามเกี่ยวกับโปรเจกต์ สามารถติดต่อผู้ดูแลโปรเจกต์ได้ที่:
- **อีเมล:** [68025494@up.ac.th](mailto:68025494@up.ac.th)
- **GitHub:** [68025494-afk](https://github.com/68025494-afk)
