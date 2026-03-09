# ระบบจัดการออร์เดอร์และรายการเมนูสำหรับร้าน Tawawan Dog Café

[![Demo URL](https://img.shields.io/badge/Demo-Live%20Website-success.svg)](https://tawawan-dog-cafe.onrender.com)
[![Academic Year](https://img.shields.io/badge/Academic%20Year-2024%20(2567)-blue.svg)]()

โปรเจกต์นี้เป็นส่วนหนึ่งของรายวิชา **Frontend Software Development** และ **Software Requirement** โดยเป็นเว็บไซต์สำหรับการจองและสั่งอาหารที่พัฒนาโดย **กลุ่มแม่เสือสาว** จากสาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยพะเยา (University of Phayao) สำหรับปีการศึกษา 2567 เพื่อมุ่งเน้นการพัฒนาซอฟต์แวร์ที่ตอบโจทย์การใช้งานจริงและเสริมสร้างทักษะด้านวิศวกรรมซอฟต์แวร์ให้กับนักศึกษา

> *This project is part of the Frontend Software Development and Software Requirement courses. It is a booking website developed by **Mae Suea Sao Group** from the Software Engineering Department, University of Phayao, for the academic year 2024. The project aims to enhance software development skills and provide practical solutions for real-world applications.*

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

- **การจัดการออร์เดอร์:** ให้เจ้าของร้านสามารถจัดการและติดตามออร์เดอร์ของลูกค้าได้แบบเรียลไทม์
- **การจัดการเมนู:** เจ้าของร้านสามารถเพิ่ม, อัปเดต, และลบรายการเมนูในหมวดหมู่ต่างๆ เช่น อาหารทานเล่น, เบเกอรี่, และเครื่องดื่ม
- **การจัดการโปรโมชั่น:** สามารถสร้าง, อัปเดต, และลบโปรโมชั่นพิเศษ เช่น ส่วนลดหรือข้อเสนอพิเศษ
- **ระบบคำนวณราคาสินค้า:** ระบบจะคำนวณราคาของสินค้าทั้งหมดในออร์เดอร์โดยอัตโนมัติก่อนที่จะทำการชำระเงิน
- **ระบบชำระเงิน:** ระบบให้ลูกค้าสามารถชำระเงินสำหรับออร์เดอร์ผ่านช่องทางออนไลน์ได้อย่างปลอดภัย (รองรับการสแกน QR Code)
- **ระบบแจ้งเตือน (Notifications):** - **แจ้งเตือนสำหรับลูกค้า:** ลูกค้าจะได้รับการแจ้งเตือนเมื่อทำการสั่งออร์เดอร์เสร็จสิ้น รวมถึงสถานะของออร์เดอร์
  - **แจ้งเตือนสำหรับผู้ดูแลระบบ:** เจ้าของร้านจะได้รับการแจ้งเตือนเมื่อมีการสั่งออร์เดอร์ใหม่ เพื่อให้สามารถตรวจสอบและจัดการออร์เดอร์ได้ทันที

---

## Incomplete Functions
ฟังก์ชันที่อยู่ในระหว่างการพัฒนาหรือพบข้อบกพร่อง (Bugs) ที่ต้องแก้ไข:

- **การแก้ไขเมนู:** พบข้อผิดพลาดเมื่อแก้ไขชื่อเมนู ระบบจะทำการเพิ่มเมนูใหม่อีก 1 รายการโดยอัตโนมัติ (แทนที่จะอัปเดตข้อมูลเดิม)
- **ระบบคำนวณโปรโมชั่น:** ปัจจุบันระบบยังไม่สามารถคำนวณส่วนลดและสิทธิพิเศษตามเงื่อนไขของโปรโมชั่นที่กำหนดไว้ได้

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
