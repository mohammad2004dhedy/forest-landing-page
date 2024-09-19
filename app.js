let prev = document.getElementById("prev");
let next = document.getElementById("next");
let carousel = document.querySelector(".carousel");
let list = document.querySelector(".carousel .list"); //عشان اضيف اولها او اخرها واغير المواقع
let pagination = document.querySelector(".carousel .pagination");
next.onclick = function () {
  showslider("next");
};
prev.onclick = function () {
  showslider("prev");
};
let timerunning = 2000;
let TimeAutoNext = 7000;
let RunTimeOut;
let RunAutoRun = setTimeout(function () {
  next.click();
}, TimeAutoNext);
function showslider(type) {
  let listItems = document.querySelectorAll(".carousel .list .item");
  let PaginationItems = document.querySelectorAll(
    ".carousel .pagination .item"
  );

  if (type === "next") {
    list.appendChild(listItems[0]); //لما استعمل الابند شايلد على عنصر موجودة داخلة العناصر فعليا فالي رح يعملو انه رح يغير موقع العنصر بس
    //ولما اضغط على نكست يعني جبلي السلايد الاولى وحطها بالاخير وجبلي البجينيشن الاولى وحطها بالاخير
    pagination.appendChild(PaginationItems[0]);
    carousel.classList.add("next");
  } else {
    let lastPosition = listItems.length - 1;
    list.prepend(listItems[lastPosition]);
    pagination.prepend(PaginationItems[lastPosition]);
    carousel.classList.add("prev");
  }

  clearTimeout(RunTimeOut);
  RunTimeOut = setTimeout(() => {
    carousel.classList.remove("next");
    //هاي يعني انه بعد مدة زمنية معينة قيملي النكست كلاس امسحو
    // وهاي لو معملتهاش فالانيميشن تاعت التايم رح تشتغل مرا وحدة فقط
    // بس لما عملتها هيك فهو بعد ما تخلص انيميشن التايم رح يشيل الكلاس نكست ويرجعه مرا ثانية اذا كبست نكست
    //وبرضو عشان الازرار اقدر اكبس عليها لانها لما يكون في كلاس نكست او بريف فبقدرش اكبس عليها وعملت هيك مقدرش اكبس عليهن عشان يخلص وقت الانيميشن ومقاطعهوش
    carousel.classList.remove("prev");
  }, timerunning);

  clearTimeout(RunAutoRun);
  RunAutoRun = setTimeout(function () {
    next.click();
  }, TimeAutoNext);
}
