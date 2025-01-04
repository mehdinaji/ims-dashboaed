    function gregorianToJalali(gy, gm, gd) {
      const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      let jy, jm, jd;

      if (gy > 1600) {
        jy = 979;
        gy -= 1600;
      } else {
        jy = 0;
        gy -= 621;
      }

      const gy2 = gm > 2 ? gy + 1 : gy;
      let days = 365 * gy + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) - 80 + gd + g_d_m[gm - 1];

      jy += 33 * Math.floor(days / 12053);
      days %= 12053;
      jy += 4 * Math.floor(days / 1461);
      days %= 1461;

      if (days > 365) {
        jy += Math.floor((days - 1) / 365);
        days = (days - 1) % 365;
      }

      const jmArray = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
      jm = 1;
      while (days >= jmArray[jm - 1]) {
        days -= jmArray[jm - 1];
        jm++;
      }
      jd = days + 1;

      return { jy, jm, jd };
    }

    function toPersianNumber(number) {
      const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
      return number.toString().replace(/\d/g, (digit) => persianDigits[digit]);
    }

    function updateTime() {
      const now = new Date();

      // Get Gregorian date
      const gy = now.getFullYear();
      const gm = now.getMonth() + 1;
      const gd = now.getDate();

      // Convert to Jalali
      const { jy, jm, jd } = gregorianToJalali(gy, gm, gd);

      // Format Jalali date
      const jalaliDate = `${toPersianNumber(jy)}-${toPersianNumber(jm.toString().padStart(2, "0"))}-${toPersianNumber(jd.toString().padStart(2, "0"))}`;

      // Format time
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const time = `${toPersianNumber(hours)}:${toPersianNumber(minutes)}:${toPersianNumber(seconds)}`;

      // Update the content of the div
      document.getElementById("time-display").textContent = `${time} , ${jalaliDate} `;
    }

    document.addEventListener('DOMContentLoaded', () => {
      // Initial call to display immediately
      updateTime();

      // Update every second
      setInterval(updateTime, 1000);
    });