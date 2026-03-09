# ระบบสั่งอาหารภายในร้านค้า
Web-Based Food Ordering System

[![Demo URL](https://img.shields.io/badge/Demo-Live%20Website-success.svg)](https://tawawan-dog-cafe.onrender.com)
[![Academic Year](https://img.shields.io/badge/Academic%20Year-2024%20(2567)-blue.svg)]()

โปรเจกต์นี้เป็นส่วนหนึ่งของรายวิชา **Frontend Software Development** และ **Software Requirement** โดยเป็นเว็บไซต์สำหรับการจองและสั่งอาหารที่พัฒนาโดย **กลุ่มทำโปรเจคจนกว่าจะเบื่อ (Tham project jon gwa ja beua)** จากสาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยพะเยา (University of Phayao) สำหรับปีการศึกษา 2568 เพื่อมุ่งเน้นการพัฒนาซอฟต์แวร์ที่ตอบโจทย์การใช้งานจริงและเสริมสร้างทักษะด้านวิศวกรรมซอฟต์แวร์ให้กับนักศึกษา

> *This project is a part of the Frontend Software Development and Software Requirement courses. It is a booking and food ordering website developed by the Tham project jon gwa ja beua group from the Department of Software Engineering, University of Phayao, for the academic year 2025. The project aims to develop software that provides practical solutions for real-world applications while enhancing the students' software engineering skills.*

---

## Table of Contents
- [Completed Functions](#-completed-functions)
- [Incomplete Functions](#-incomplete-functions)
- [Tech Stack Frontend](#-tech-stack-frontend)
- [User Manual](#-user-manual)
- [Team Job Position](#-team-job-position)
- [Demo](#-demo)
- [Contact](#-contact)

---

## Completed Functions
ฟังก์ชันการทำงานที่เสร็จสมบูรณ์และสามารถใช้งานได้จริง:

**ลูกค้า (Customers)**
**ระบบแสดงรายการอาหาร (Digital Menu Display) : **
      - การแสดงรูปภาพ ราคา
      - มีแสดง “จำนวนคิวทั้งหมด”  ที่กำลังรออยู่ในแถบด้านบนสุดของเว็บเพื่อให้ลูกค้าประเมินเวลาเบื้องต้น
**ระบบเลือกรายการอาหารเลือกออฟชั่นและระบุรายละเอียด (Customization & Note) :**
      - ตัวเลือกธรรมดา หรือ พิเศษ
      - สามารถระบุคำขอเพิ่มเติม
**ระบบตะกร้าสินค้าและคำนวณราคา (Foods Cart) :** สรุปรายการ คำนวณราคา และตัวเลือก ทานที่ร้าน หรือ สั่งกลับบ้าน
      - ทานที่ร้าน : ระบบบังคับให้เลือก "เบอร์โต๊ะ" เลข 1 ถึง 4
      - กลับบ้าน : ระบบบังคับให้กรอก "ชื่อ"  และ “เบอร์โทรศัพท์” 10 หลัก พร้อมข้อความ “กรุณากรอกเบอร์โทรศัพท์ให้ครบ 10 หลัก”
      - หากข้อมูลไม่ถูกต้อง ระบบต้องแสดงข้อความแจ้งเตือน (Error Message) และไม่อนุญาตให้ส่งออเดอร์
**ระบบยืนยันคำสั่งซื้อ (Order Confirmation) :** เมื่อส่งออเดอร์ 
      - ระบบต้องสร้าง “หมายเลขออเดอร์ (Order ID)” และ แสดงคำแนะนำการชำระเงิน (เช่น “กรุณาชำระเงินที่หน้าเคาน์เตอร์” )
      - หน้าจอแสดงหมายเลขคิวของลูกค้า ต้องสามารถอัปเดตข้อมูล “จำนวนคิวทั้งหมด”  ได้แบบอัตโนมัติ (Auto-refresh/Polling) เพื่อให้ลูกค้าทราบความคืบหน้าล่าสุดได้ทันที โดยไม่ต้องกดรีเฟรชหน้าเว็บเอง

**ผู้ดูแลระบบหรือเจ้าของร้าน (Administrator / Owner)**
**จอแสดงผลในครัว (Kitchen Display System - KDS) :** หน้าแสดงออเดอร์
      - จะเรียงลำดับคิว และ แสดงผลเฉพาะออเดอร์ที่สั่งผ่านระบบเว็บไซต์
      - มีระบุว่า ทานที่ร้าน (เน้นแสดงเบอร์โต๊ะ) หรือสั่งกลับบ้าน (เน้นแสดงชื่อลูกค้า)
      - กดปุ่ม “เสร็จสิ้น” เมื่อทำอาหารเสร็จแล้ว ระบบจะนำออเดอร์นั้นออกจากหน้าจอของร้าน และอัปเดต “จำนวนคิวทั้งหมด”  ให้แสดงบนหน้าจอของลูกค้าโดยอัตโนมัติ เพื่อให้ลูกค้ารู้ว่าถึงคิวรับอาหารแล้ว
**ระบบจัดการเมนูอาหาร (Menu Management) :** เพิ่ม/ลบ/แก้ไข รายการอาหาร ราคา และรูปภาพ รวมถึงการจัดการสถานะเมนู
**ระบบรายงานยอดขาย (Sales Analytics) :** สรุปยอดขายตามวันที่กำหนด จากยอดคำสั่งซื้อที่เสร็จสิ้น
      - แสดงยอดเงินรวม
      - ระบบเปิด-ปิดการรับออเดอร์ออนไลน์ ร้านเปิดเวลา 11:00–23:00 น. ทุกวัน และระบบต้องแสดงสถานะร้านเปิด/ปิดบนหน้าเว็บ
      - เมื่อระบบปิดรับออเดอร์ออนไลน์ ลูกค้าต้องเห็นข้อความแจ้งว่า “ร้านปิดรับออเดอร์ออนไลน์ชั่วคราว” ลูกค้าจะสามารถดูเมนูได้ และไม่สามารถกดสั่งซื้อได้


---

## Incomplete Functions
ฟังก์ชันที่อยู่ในระหว่างการพัฒนาหรือพบข้อบกพร่อง (Bugs) ที่ต้องแก้ไข:

- **หมายเหตุ:** ระบบนี้ไม่ครอบคลุมการทำงานในส่วนของระบบชำระเงินออนไลน์ (Payment Gateway), การเชื่อมต่อกับแพลตฟอร์ม Delivery ภายนอก, การแก้ไขข้อมูลออเดอร์ที่ได้รับการยืนยันแล้ว และการแทรกคิวออเดอร์ที่รับผ่านการจดกระดาษเข้าสู่ระบบ

---

## Tech Stack Frontend
เครื่องมือและเทคโนโลยีที่ใช้ในการพัฒนาส่วนหน้าบ้าน:

- **HTML5**
- **tailwind css**
- **JavaScript (Vanilla JS)**

---

## User Manual
คู่มือการใช้งานระบบสำหรับผู้ใช้และผู้ดูแลร้าน สามารถดูรายละเอียดเพิ่มเติมได้ที่ลิงก์ด้านล่าง:
- [https://docs.google.com/document/d/1uXjXzO6uRfVuC5z1rIONnYdl0w-9BDt8c-91-BQHkrs/edit?usp=sharing](https://docs.google.com/document/d/1uXjXzO6uRfVuC5z1rIONnYdl0w-9BDt8c-91-BQHkrs/edit?usp=sharing)

---

## Team Job Position
รายชื่อสมาชิก **กลุ่มทำโปรเจคจนกว่าจะเบื่อ (Tham project jon gwa ja beua)** และตำแหน่งหน้าที่รับผิดชอบ:

| Student ID | Name | Position |
| :---: | :--- | :--- |
| 68023403 | นางสาวภรณ์ทินรดา จันทร์เพ็ญ (PORNTHINRADA JANPHEN)| Front-End Developer |
| 68025461 | นางสาวพิชญดา ใสโสภณ (PHICHAYADA SAISOPHON | BA and UI Designer|
| 68025472 | นายเมธาสิทธิ์ มูลศรี (METHASIT MOONSRI) | Front-End Developer |
| 68025494 | นายวุฒิภัทร สัตตทิพย์พงศ์ (PUTTIPAT SATTATHIPPONG) | Project Leader and UX/UI Design |

---

## Demo
สามารถทดลองใช้งานเว็บไซต์จริงได้ที่นี่:
**[https://tawawan-dog-cafe.onrender.com](https://tawawan-dog-cafe.onrender.com)**

---

## Contact
หากมีข้อสงสัยหรือคำถามเกี่ยวกับโปรเจกต์ สามารถติดต่อผู้ดูแลโปรเจกต์ได้ที่:
- **อีเมล:** [68025494@up.ac.th.com](mailto:68025494@up.ac.th.com)
- **GitHub:** [68025494-afk](https://github.com/68025494-afk)
