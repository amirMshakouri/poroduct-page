// جاوا اسکریپت برای تغییر تصویر اصلی بر اساس تصاویر کوچک

// انتخاب تصویر اصلی
const mainImage = document.getElementById("main-image");

// انتخاب تمامی تصاویر کوچک
const thumbnails = document.querySelectorAll(".thumbnail");

// افزودن رویداد کلیک به تصاویر کوچک
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // تغییر منبع تصویر اصلی به منبع تصویر کوچک کلیک شده
    mainImage.src = thumbnail.src;

    // حذف کلاس فعال از تمام تصاویر کوچک
    thumbnails.forEach((thumb) => thumb.classList.remove("active-thumbnail"));

    // افزودن کلاس فعال به تصویر کوچک کلیک شده
    thumbnail.classList.add("active-thumbnail");
  });
});
