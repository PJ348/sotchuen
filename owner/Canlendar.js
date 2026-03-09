  (() => {
        const thaiMonthsFull = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
        // 🌟 ใช้ Loop สร้างปี พ.ศ. ตั้งแต่ 2569 ถอยหลังไปจนถึง 2557 อัตโนมัติ
        const years = [];
        for (let y = 2569; y >= 2557; y--) {
            years.push(y);
        }
        
        let selDay = null;
        let selMonthIndex = null;
        let selMonthName = null;
        let selYear = null;

        const dayGrid = document.getElementById('day-grid');
        const monthGrid = document.getElementById('month-grid');
        const yearGrid = document.getElementById('year-grid');
        
        const viewDay = document.getElementById('view-day');
        const viewMonth = document.getElementById('view-month');
        const viewYear = document.getElementById('view-year');
        
        const navDay = document.getElementById('nav-day');
        const navMonth = document.getElementById('nav-month');
        const navYear = document.getElementById('nav-year');

        const errorMsg = document.getElementById('date-error');
        const nextBtn = document.getElementById('next-calendar-btn');

        // --- สร้างปุ่มวันที่ (ขยายเป็นไซส์ 70px) ---
        for(let i=1; i<=31; i++) {
            const btn = document.createElement('button');
            btn.innerText = i;
            // ขยาย size-[70px] และ text-3xl
            btn.className = 'day-btn size-[70px] rounded-full border-2 border-gray-200 text-3xl font-medium hover:border-red-500 hover:text-red-500 duration-200 cursor-pointer text-gray-700 bg-gray-50 flex items-center justify-center';
            btn.onclick = () => selectDay(i, btn);
            dayGrid.appendChild(btn);
        }

        // --- สร้างปุ่มเดือน (ขยายใหญ่ขึ้น) ---
        thaiMonthsFull.forEach((m, idx) => {
            const btn = document.createElement('button');
            btn.innerText = m;
            // ขยายเป็น py-6 และ text-3xl
            btn.className = 'month-btn py-6 rounded-3xl border-2 border-gray-200 text-3xl font-medium hover:border-red-500 hover:text-red-500 duration-200 cursor-pointer text-gray-700 bg-gray-50';
            btn.onclick = () => selectMonth(idx, m, btn);
            monthGrid.appendChild(btn);
        });

        // --- สร้างปุ่มปี (ขยายใหญ่ขึ้น) ---
        years.forEach(y => {
            const btn = document.createElement('button');
            btn.innerText = y;
            // ขยายเป็น py-6 และ text-3xl
            btn.className = 'year-btn py-4 rounded-3xl border-2 border-gray-200 text-2xl font-medium hover:border-red-500 hover:text-red-500 duration-200 cursor-pointer text-gray-700 bg-gray-50';
            btn.onclick = () => selectYear(y, btn);
            yearGrid.appendChild(btn);
        });

        function showStep(step) {
            [viewDay, viewMonth, viewYear].forEach(v => {
                v.classList.add('opacity-0', 'pointer-events-none');
            });
            [navDay, navMonth, navYear].forEach(n => {
                n.classList.remove('text-red-600', 'border-b-4', 'border-red-600');
                n.classList.add('text-gray-400');
            });

            if(step === 1) {
                viewDay.classList.remove('opacity-0', 'pointer-events-none');
                navDay.classList.add('text-red-600', 'border-b-4', 'border-red-600');
                navDay.classList.remove('text-gray-400');
            } else if(step === 2) {
                viewMonth.classList.remove('opacity-0', 'pointer-events-none');
                navMonth.classList.add('text-red-600', 'border-b-4', 'border-red-600');
                navMonth.classList.remove('text-gray-400');
            } else if(step === 3) {
                viewYear.classList.remove('opacity-0', 'pointer-events-none');
                navYear.classList.add('text-red-600', 'border-b-4', 'border-red-600');
                navYear.classList.remove('text-gray-400');
            }
        }

        navDay.onclick = () => showStep(1);
        navMonth.onclick = () => { if(selDay) showStep(2); }; 
        navYear.onclick = () => { if(selMonthName) showStep(3); };

        function selectDay(d, btnEl) {
            selDay = d;
            navDay.innerText = d; 
            
            document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('bg-red-600', 'text-white', 'border-red-600'));
            btnEl.classList.add('bg-red-600', 'text-white', 'border-red-600');
            btnEl.classList.remove('text-gray-700', 'bg-gray-50');
            
            navMonth.classList.remove('pointer-events-none');
            showStep(2); 
            validateDate();
        }

        function selectMonth(mIdx, mName, btnEl) {
            selMonthIndex = mIdx;
            selMonthName = mName;
            navMonth.innerText = mName;
            
            document.querySelectorAll('.month-btn').forEach(b => b.classList.remove('bg-red-600', 'text-white', 'border-red-600'));
            btnEl.classList.add('bg-red-600', 'text-white', 'border-red-600');
            btnEl.classList.remove('text-gray-700', 'bg-gray-50');

            navYear.classList.remove('pointer-events-none');
            showStep(3); 
            validateDate();
        }

        function selectYear(y, btnEl) {
            selYear = y;
            navYear.innerText = y;
            
            document.querySelectorAll('.year-btn').forEach(b => b.classList.remove('bg-red-600', 'text-white', 'border-red-600'));
            btnEl.classList.add('bg-red-600', 'text-white', 'border-red-600');
            btnEl.classList.remove('text-gray-700', 'bg-gray-50');
            validateDate();
        }

        function validateDate() {
            if (selDay && selMonthName && selYear) {
                const checkDate = new Date(selYear - 543, selMonthIndex, selDay);
                const today = new Date();
                today.setHours(0,0,0,0);

                if (checkDate.getMonth() !== selMonthIndex) {
                    errorMsg.innerText = '⚠️ วันที่ไม่มีในเดือนนี้ (เช่น 31 ก.พ.)';
                    errorMsg.classList.remove('opacity-0');
                    nextBtn.classList.add('opacity-50', 'pointer-events-none');
                } else if (checkDate > today) {
                    errorMsg.innerText = '⚠️ ไม่สามารถค้นหายอดขายในอนาคตได้';
                    errorMsg.classList.remove('opacity-0');
                    nextBtn.classList.add('opacity-50', 'pointer-events-none');
                } else {
                    errorMsg.classList.add('opacity-0');
                    nextBtn.classList.remove('opacity-50', 'pointer-events-none');
                }
            }
        }

        const calendarModal = document.getElementById('calendar-modal');
        const confirmSearchModal = document.getElementById('confirm-search-modal');
        const confirmDateText = document.getElementById('confirm-date-text');

        document.getElementById('search-btn').addEventListener('click', () => {
            calendarModal.classList.remove('hidden');
        });

        document.getElementById('cancel-calendar-btn').addEventListener('click', () => {
            calendarModal.classList.add('hidden');
        });

        nextBtn.addEventListener('click', () => {
            confirmDateText.innerText = `${selDay} ${selMonthName} ${selYear}`;
            calendarModal.classList.add('hidden');
            confirmSearchModal.classList.remove('hidden');
        });

        document.getElementById('back-search-btn').addEventListener('click', () => {
            confirmSearchModal.classList.add('hidden');
        });

        document.getElementById('submit-search-btn').addEventListener('click', () => {
            document.getElementById('date').innerText = selDay + " ";
            document.getElementById('mont').innerText = selMonthName + " ";
            document.getElementById('year').innerText = selYear;
            confirmSearchModal.classList.add('hidden');
        });
    })();