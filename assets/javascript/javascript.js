/* Copyright © 2024 Nguyễn Ngọc Huy Hoàng. All rights reserved.*/

// 1. Banner Particles
// 2. Scroll back to top
// 3. Render top event: handle when has no event, countdown
// 4. Event items: render, handle js google calendar
// 5. Cột mốc lịch sử - timeline : render, handle progress bar.
// 6. Header menu - cancel modal
// 7. News on mobile
// 8. Handle button - reset input

// Get elements
const topEventElement = document.getElementById("js-top-event");

const eventListElement = document.getElementById("js-event-list");
const eventItemElement = document.querySelector(".event-item");
const timelineElement = document.getElementById("js-timeline");

const eventCardElement = document.getElementById("js-event-card");

// Arrays
const eventList = [
  {
    id: 1,
    title: "Giải bóng đá sinh viên IT CUP 2025",
    imageUrl: "./assets/images/IT_CUP.jpg",
    startDate: new Date(2025, 2),
    isEnded: false,
    isLongEvent: true,
    location: "Sân cỏ nhân tạo trường ĐH Luật, ĐH Huế",
  },
  {
    id: 2,
    title: "Cuộc thi thiết kế chào mừng 30 năm thành lập Khoa",
    imageUrl: "./assets/images/LandingPage.jpg",
    startDate: new Date(2024, 10),
    isEnded: false,
    isLongEvent: true,
    location: "Khoa Công nghệ thông tin, tầng 2 nhà C, trường ĐH Khoa học",
    detail: "https://www.facebook.com/share/p/1GGegmp9xZ/",
  },
  {
    id: 3,
    title: "Cuộc thi lập trình OLP/ICPC khoa Công nghệ thông tin",
    startDate: new Date(2025, 3),
    isEnded: false,
    isLongEvent: true,
    location: "Trường Đại học Khoa học, Đại học Huế",
  },
  {
    id: 4,
    title: "Tổ chức hội thảo khoa học",
    startDate: new Date(2025, 4, 31, 14),
    isEnded: false,
    isLongEvent: false,
    location: "Hội trường A1, Trường Đại học Khoa học, Đại học Huế",
  },
  {
    id: 5,
    title: "Tổ chức hội thảo liên kết đào tạo và lễ ký kết",
    startDate: new Date(2025, 4, 31, 7, 30),
    isEnded: false,
    isLongEvent: false,
    location: "Hội trường A1, Trường Đại học Khoa học, Đại học Huế",
  },
  {
    id: 6,
    title: "Chương trình IT STAR và đêm hội âm nhạc",
    startDate: new Date(2025, 4, 31, 18),
    isEnded: false,
    isLongEvent: false,
    location: "Sảnh A Trường Đại học Khoa học, Đại học Huế",
  },
  {
    id: 7,
    title: "Lễ mít tinh kỷ niệm 30 năm thành lập Khoa",
    startDate: new Date(2025, 5, 1, 7, 30),
    isEnded: false,
    isLongEvent: false,
    location: "Sảnh A Trường Đại học Khoa học, Đại học Huế",
  },
  {
    id: 8,
    title: "Giao lưu, dự tiệc kỷ niệm thân mật",
    startDate: new Date(2025, 5, 1, 11),
    isEnded: false,
    isLongEvent: false,
    location: "Trường Đại học Khoa học, Đại học Huế",
  },
  {
    id: 9,
    title: "Lễ tọa đàm kỷ niệm 30 năm thành lập Khoa",
    startDate: new Date(2025, 5, 1, 8, 30),
    isEnded: false,
    isLongEvent: false,
    location: "Trường Đại học Khoa học, Đại học Huế",
  },
];

const mileston = [
  {
    name: "Bộ Giáo Dục và Đào Tạo ra quyết định  thành lập Khoa Công nghệ thông tin tại Đại học Huế.",
    date: {
      year: 1994,
      month: 12,
      day: 13,
    },
  },
  {
    name: "Chính thức đào tạo cử nhân ngành Công nghệ thông tin, trở thành 1 trong 6 khoa Công nghệ thông tin trọng điểm trên toàn quốc.",
    date: {
      year: 1995,
      month: 6,
      day: 1,
    },
  },
  {
    name: "Đào tạo thạc sĩ chuyên ngành Khoa học máy tính được đưa vào hoạt động.",
    date: {
      year: 2000,
      month: "",
      day: "",
    },
  },
  {
    name: "Khoa Công nghệ thông tin được giao trọng trách đào tạo tiến sĩ chuyên ngành Khoa học máy tính.",
    date: {
      year: 2010,
      month: "",
      day: "",
    },
  },
  {
    name: "Mở ngành đào tạo cử nhân Kỹ thuật phần mềm (cơ chế đặc thù).",
    date: {
      year: 2018,
      month: "",
      day: "",
    },
  },
  {
    name: "Đào tạo thạc sĩ ngành Quản lí công nghệ thông tin.",
    date: {
      year: 2020,
      month: "",
      day: "",
    },
  },
];

// 1. Banner Particles
window.addEventListener("load", () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 300, density: { enable: true, value_area: 800 } },
      color: { value: "#ffff00" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 600 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 400, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
});

// 2. Scroll back to top
function handleScrollToTop() {
  const scrollToTopBtn = document.querySelector(".back-to-top");

  window.addEventListener("scroll", function () {
    const c =
      this.document.body.scrollTop || this.document.documentElement.scrollTop;
    if (c > 1500) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

handleScrollToTop();

// 3. Render top event: handle when has no event, countdown

// Sort eventList by date
eventList.sort(function (event1, event2) {
  return event1.startDate - event2.startDate;
});

let currentEventIndex;
let currentEvent = {};
let nextEvent = {};

// Get current event
var now = new Date().getTime();

const hasCurrentEvent = eventList.some((event, index) => {
  if (now >= event.startDate.getTime() && event.isEnded === false) {
    currentEvent = event;
    currentEventIndex = index;
    return true;
  }
});
if (!hasCurrentEvent) {
  currentEvent = undefined;
}

// Get next event
const hasNextEvent = eventList.some((event) => {
  if (event.startDate.getTime() > now) {
    nextEvent = event;
    return true;
  }
});
if (!hasNextEvent) {
  nextEvent = undefined;
}

topEventElement.innerHTML = `
  <div class="container">
    <div class="row">
        <div class="col-12 col-lg-6">
            <div class="top-event__item current-event">
                <h2>Sự kiện đang diễn ra</h2>

                <p class="no-event-notification">
                    Hiện không có sự kiện nào đang diễn ra
                </p>

                <div class="top-event__item-info">
                    <h1 class="top-event__title current-event__title">
                    ${currentEvent?.title ? currentEvent.title : "hi"}</h1>
                    <div class="top-event__location current-event__location">
                        ${LocationSVG("")}
                        ${
                          currentEvent?.location
                            ? currentEvent.location
                            : "hello"
                        }
                    </div>

                    <a href="${
                      currentEvent?.detail ? currentEvent.detail : ""
                    }" target="_blank"
                        class="btn btn-primary border-0 top-event__item-btn">Xem chi tiết sự
                        kiện</a>
                </div>

            </div>
        </div>
        <div class="col-12 col-lg-6">
            <div class="top-event__item next-event">
                <h2>Sự kiện sắp tới</h2>

                <p class="no-event-notification">
                    Sắp tới hiện không có sự kiện nào.
                </p>

                <div class="top-event__item-info">
                    <h1 class="top-event__title">${
                      nextEvent?.title ? nextEvent.title : "hi"
                    }</h1>
                    <div class="top-event__location">
                        ${LocationSVG("")}
                        ${nextEvent?.location ? nextEvent.location : "hello"}
                    </div>

                    <div class="next-event__countdown js-countdown-box">
                        <div class="countdown-item">
                            <div class="countdown-number js-countdown-days">00</div>
                            <div class="countdown-desc">Ngày</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-number js-countdown-hours">00</div>
                            <div class="countdown-desc">Giờ</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-number js-countdown-minutes">00</div>
                            <div class="countdown-desc">Phút</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-number js-countdown-seconds">00</div>
                            <div class="countdown-desc">Giây</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
`;

// Handle no event
const currentEventElement = document.querySelector(".current-event");
const nextEventElement = document.querySelector(".next-event");

if (!hasCurrentEvent) {
  currentEventElement.classList.add("current-event--no-event");
}

if (!hasNextEvent) {
  nextEventElement.classList.add("next-event--no-event");
}

function startCountDown() {
  const daysElement = document.querySelector(".js-countdown-days");
  const hoursElement = document.querySelector(".js-countdown-hours");
  const minutesElement = document.querySelector(".js-countdown-minutes");
  const secondsElement = document.querySelector(".js-countdown-seconds");

  const countDownDate = nextEvent.startDate.getTime();

  setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.innerHTML = days.toString().padStart(2, "0");
    hoursElement.innerHTML = hours.toString().padStart(2, "0");
    minutesElement.innerHTML = minutes.toString().padStart(2, "0");
    secondsElement.innerHTML = seconds.toString().padStart(2, "0");
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  startCountDown();
});

// 4. Event items: render, handle js google calendar
function ThunderSVG(className) {
  return `
    <svg viewBox="0 0 512 512" class="${className}">
      <g>
        <path
            d="M392.708 178.2H275.802L384.175 7.533H247.642l-128 256h100.693L119.642 502.467 392.708 178.2z"
            style="" transform="translate(0 1)" fill="#ffdd09"
            data-original="#ffdd09" class=""></path>
        <path d="M281.775 7.533h-34.133l-128 256h34.133l128-256z"
            style="" transform="translate(0 1)" fill="#ffffff"
            data-original="#ffffff" class=""></path>
        <path
            d="m350.042 178.2-204.8 243.2-34.133 81.067L384.175 178.2h-34.133z"
            style="" transform="translate(0 1)" fill="#fd9808"
            data-original="#fd9808" class=""></path>
        <path
            d="M119.642 512c-1.707 0-3.413 0-4.267-.853-3.413-2.56-5.12-6.827-3.413-10.24l95.573-227.84h-87.893c-2.56 0-5.973-1.707-7.68-4.267s-1.707-5.973 0-8.533l128-256c1.707-2.56 4.267-4.267 7.68-4.267h136.533c3.413 0 5.973 1.707 7.68 4.267s1.707 5.973 0 8.533l-99.84 157.867h100.693c3.413 0 5.973 1.707 7.68 5.12 1.707 3.413.853 6.827-.853 9.387L126.468 509.44c-1.706 1.707-4.266 2.56-6.826 2.56zm13.653-256h87.04c2.56 0 5.12 1.707 6.827 3.413 1.707 2.56 1.707 5.12.853 7.68l-78.507 187.733 225.28-267.093h-98.987c-3.413 0-5.973-1.707-7.68-4.267s-1.707-5.973 0-8.533L368.815 17.067H252.762L133.295 256z"
            fill="#000000" opacity="1" data-original="#000000" class="">
        </path>
      </g>                
    </svg>
  `;
}

function DateSVG(className) {
  return `
  <svg viewBox="0 0 48 48" fill-rule="evenodd"
      class="${className}">
      <g>
          <path
              d="m31.023 36.718 2.828 2.828a1 1 0 0 0 1.414 0l5.656-5.656a1 1 0 0 0-1.414-1.414l-4.949 4.949-2.121-2.121a1 1 0 0 0-1.414 1.414zM13 19.2c0-.583-.232-1.143-.644-1.556A2.205 2.205 0 0 0 10.8 17H9.2c-.583 0-1.143.232-1.556.644A2.205 2.205 0 0 0 7 19.2v1.6c0 .583.232 1.143.644 1.556.413.412.973.644 1.556.644h1.6c.583 0 1.143-.232 1.556-.644.412-.413.644-.973.644-1.556zm-2 0v1.6a.197.197 0 0 1-.059.141.197.197 0 0 1-.141.059H9.2a.197.197 0 0 1-.141-.059A.197.197 0 0 1 9 20.8v-1.6c0-.053.021-.104.059-.141A.197.197 0 0 1 9.2 19h1.6c.053 0 .104.021.141.059A.197.197 0 0 1 11 19.2zM13 27.2c0-.583-.232-1.143-.644-1.556A2.205 2.205 0 0 0 10.8 25H9.2c-.583 0-1.143.232-1.556.644A2.205 2.205 0 0 0 7 27.2v1.6c0 .583.232 1.143.644 1.556.413.412.973.644 1.556.644h1.6c.583 0 1.143-.232 1.556-.644.412-.413.644-.973.644-1.556zm-2 0v1.6a.197.197 0 0 1-.059.141.197.197 0 0 1-.141.059H9.2a.197.197 0 0 1-.141-.059A.197.197 0 0 1 9 28.8v-1.6c0-.053.021-.104.059-.141A.197.197 0 0 1 9.2 27h1.6c.053 0 .104.021.141.059A.197.197 0 0 1 11 27.2zM13 35.2c0-.583-.232-1.143-.644-1.556A2.205 2.205 0 0 0 10.8 33H9.2c-.583 0-1.143.232-1.556.644A2.205 2.205 0 0 0 7 35.2v1.6c0 .583.232 1.143.644 1.556.413.412.973.644 1.556.644h1.6c.583 0 1.143-.232 1.556-.644.412-.413.644-.973.644-1.556zm-2 0v1.6a.197.197 0 0 1-.059.141.197.197 0 0 1-.141.059H9.2a.197.197 0 0 1-.141-.059A.197.197 0 0 1 9 36.8v-1.6c0-.053.021-.104.059-.141A.197.197 0 0 1 9.2 35h1.6c.053 0 .104.021.141.059A.197.197 0 0 1 11 35.2zM21 19.2c0-.583-.232-1.143-.644-1.556A2.205 2.205 0 0 0 18.8 17h-1.6c-.583 0-1.143.232-1.556.644A2.205 2.205 0 0 0 15 19.2v1.6c0 .583.232 1.143.644 1.556.413.412.973.644 1.556.644h1.6c.583 0 1.143-.232 1.556-.644.412-.413.644-.973.644-1.556zm-2 0v1.6a.197.197 0 0 1-.059.141.197.197 0 0 1-.141.059h-1.6a.197.197 0 0 1-.141-.059A.197.197 0 0 1 17 20.8v-1.6c0-.053.021-.104.059-.141A.197.197 0 0 1 17.2 19h1.6c.053 0 .104.021.141.059A.197.197 0 0 1 19 19.2zM21 27.2c0-.583-.232-1.143-.644-1.556A2.205 2.205 0 0 0 18.8 25h-1.6c-.583 0-1.143.232-1.556.644A2.205 2.205 0 0 0 15 27.2v1.6c0 .583.232 1.143.644 1.556.413.412.973.644 1.556.644h1.6c.583 0 1.143-.232 1.556-.644.412-.413.644-.973.644-1.556zm-2 0v1.6a.197.197 0 0 1-.059.141.197.197 0 0 1-.141.059h-1.6a.197.197 0 0 1-.141-.059A.197.197 0 0 1 17 28.8v-1.6c0-.053.021-.104.059-.141A.197.197 0 0 1 17.2 27h1.6c.053 0 .104.021.141.059A.197.197 0 0 1 19 27.2zM21 35.2c0-.583-.232-1.143-.644-1.556A2.205 2.205 0 0 0 18.8 33h-1.6c-.583 0-1.143.232-1.556.644A2.205 2.205 0 0 0 15 35.2v1.6c0 .583.232 1.143.644 1.556.413.412.973.644 1.556.644h1.6c.583 0 1.143-.232 1.556-.644.412-.413.644-.973.644-1.556zm-2 0v1.6a.197.197 0 0 1-.059.141.197.197 0 0 1-.141.059h-1.6a.197.197 0 0 1-.141-.059A.197.197 0 0 1 17 36.8v-1.6c0-.053.021-.104.059-.141A.197.197 0 0 1 17.2 35h1.6c.053 0 .104.021.141.059A.197.197 0 0 1 19 35.2zM29 19.2c0-.583-.232-1.143-.644-1.556A2.205 2.205 0 0 0 26.8 17h-1.6c-.583 0-1.143.232-1.556.644A2.205 2.205 0 0 0 23 19.2v1.6c0 .583.232 1.143.644 1.556.413.412.973.644 1.556.644h1.6c.583 0 1.143-.232 1.556-.644.412-.413.644-.973.644-1.556zm-2 0v1.6a.197.197 0 0 1-.059.141.197.197 0 0 1-.141.059h-1.6a.197.197 0 0 1-.141-.059A.197.197 0 0 1 25 20.8v-1.6c0-.053.021-.104.059-.141A.197.197 0 0 1 25.2 19h1.6c.053 0 .104.021.141.059A.197.197 0 0 1 27 19.2zM37 19.2c0-.583-.232-1.143-.644-1.556A2.205 2.205 0 0 0 34.8 17h-1.6c-.583 0-1.143.232-1.556.644A2.205 2.205 0 0 0 31 19.2v1.6c0 .583.232 1.143.644 1.556.413.412.973.644 1.556.644h1.6c.583 0 1.143-.232 1.556-.644.412-.413.644-.973.644-1.556zm-2 0v1.6a.197.197 0 0 1-.059.141.197.197 0 0 1-.141.059h-1.6a.197.197 0 0 1-.141-.059A.197.197 0 0 1 33 20.8v-1.6c0-.053.021-.104.059-.141A.197.197 0 0 1 33.2 19h1.6c.053 0 .104.021.141.059A.197.197 0 0 1 35 19.2z"
              fill="#000000" opacity="1" data-original="#000000" class="">
          </path>
          <path
              d="M27.517 43H6a5.004 5.004 0 0 1-3.536-1.464A5.004 5.004 0 0 1 1 38V10a5 5 0 0 1 5-5h3V4a3 3 0 1 1 6 0v1h14V4a3 3 0 1 1 6 0v1h3a5 5 0 0 1 5 5v17.517c2.443 2.019 4 5.07 4 8.483 0 6.071-4.929 11-11 11a10.979 10.979 0 0 1-8.483-4zM36 27c4.967 0 9 4.033 9 9s-4.033 9-9 9-9-4.033-9-9 4.033-9 9-9zm5-.799V15H3v23c0 .796.316 1.559.879 2.121A2.996 2.996 0 0 0 6 41h20.201C25.433 39.5 25 37.8 25 36c0-6.071 4.929-11 11-11 1.8 0 3.5.433 5 1.201zM35 7v1a3 3 0 1 1-6 0V7H15v1a3 3 0 1 1-6 0V7H6a3 3 0 0 0-3 3v3h38v-3a3 3 0 0 0-3-3zm-2-3v4a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0zM13 4v4a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0z"
              fill="#000000" opacity="1" data-original="#000000" class="">
          </path>
      </g>
  </svg>
  `;
}

function LocationSVG(className) {
  return `
    <svg viewBox="0 0 512 512" class="${className}">
      <g>
        <path d="M256 0C147.925 0 60 87.925 60 196c0 34.594 9.14 68.605 26.431 98.355a196.851 196.851 0 0 0 13.395 20.09L247.484 512h17.031l147.659-197.554a197.293 197.293 0 0 0 13.395-20.09C442.86 264.605 452 230.594 452 196 452 87.925 364.075 0 256 0zm0 261c-35.841 0-65-29.159-65-65s29.159-65 65-65 65 29.159 65 65-29.159 65-65 65z" fill="#000000" opacity="1" data-original="#000000" class="">
        </path>
      </g>
    </svg>
  `;
}

function handleEventButton(eventItem) {
  var htmls = "";
  if (eventItem !== currentEvent) {
    htmls = `
      <a class="btn btn-primary event-item__btn add-to-google-calendar"
        target="_blank" data-index= "${eventItem.id}">
              Thêm vào Google Calendar
      </a>  
    `;
  }

  if (eventItem.detail) {
    htmls += `
      <a href="${eventItem.detail}" class="btn event-item__btn btn-primary" target="_blank">
              Xem chi tiết
      </a>
    `;
  }

  return htmls;
}

function handleEventDate(eventItem) {
  var result = "";
  var year = eventItem.startDate.getFullYear();
  var month = eventItem.startDate.getMonth() + 1;
  var day = eventItem.startDate.getDate();
  var hour = eventItem.startDate.getHours();
  var min = eventItem.startDate.getMinutes();

  if (day === 1 && eventItem.isLongEvent) {
    day = null;
  }

  if (hour) {
    if (min) {
      result += hour + ":" + min.toString().padStart(2, "0") + ", ";
    } else {
      result += hour + ":00, ";
    }
  }

  result += day ? day + "/" : "";
  result += month ? month + "/" : "";
  result += year ? year : "";

  return result;
}

// 4.1 Render event list
var htmls = eventList.map(function (eventItem) {
  return `
  <div class="col-12 col-sm-12 col-lg-6">
    <div class="event-item">
          <div class="event-item__info">
              <h2 class="event-item__heading">
                  ${eventItem === currentEvent ? ThunderSVG("") : ""}
                  ${eventItem.title}
                  
              </h2>
              <div class="event-item__date">
                  ${DateSVG("event-item__icon")}
                  ${handleEventDate(eventItem)}
              </div>
              <div class="event-item__location">
                  ${LocationSVG("event-item__icon")}
                  ${eventItem.location}
              </div>
          </div>
      <div class="event-item__button">
          ${handleEventButton(eventItem)}
      </div>
    </div>
  </div>
  `;
});

eventListElement.innerHTML = htmls.join("");

// 4.2 Handle js google calendar
const calendarBtns = document.querySelectorAll(".add-to-google-calendar");

calendarBtns.forEach((calendarBtn) => {
  var eventItem = eventList.find(
    (item) => item.id.toString() === calendarBtn.dataset.index.toString()
  );

  var startTime = dayjs(eventItem.startDate);
  var endTime = startTime.clone().endOf("day");

  calendarBtn.href = `
    https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sự+kiện+của+tôi
    &dates=${startTime.format("YYYYMMDDTHHmmss")}Z/${endTime.format(
    "YYYYMMDDTHHmmss"
  )}Z
    &details=${encodeURIComponent(
      eventItem.title
    )}&location=${encodeURIComponent(eventItem.location)}
    `;
});

// 4.3 Display total events
const totalEventElement = document.getElementById("js-event-total");
totalEventElement.innerHTML = `(${eventList.length})`;

// 5. Cột mốc lịch sử - timeline : render, handle progress bar.

// 5.1 Render timeline
function timlineDateText(element) {
  return `
    ${
      element.date.day ? element.date.day.toString().padStart(2, "0") + "/" : ""
    }${
    element.date.month
      ? element.date.month.toString().padStart(2, "0") + "/"
      : ""
  }${element.date.year ? element.date.year.toString().padStart(2, "0") : ""}
  `;
}

function TimeLineItem() {
  var htmls = mileston.map(function (element) {
    return `
      <div class="timeline-item">
          <div class="timeline-left">
              <div class="timeline-date-text">${timlineDateText(element)}</div>
          </div>
  
          <div class="timeline-center">
              <div class="timeline-circle"></div>
          </div>
  
          <div class="timeline-right">
              <div class="margin-bottom-xlarge">
                  <div class="timeline-text" data-aos="fade-up">
                      ${element.name}
                  </div>
              </div>
  
              <div class="timeline-image-wrapper">
                  <img src="${element.imgUrl}" loading="lazy" alt="">
                  <div class="image-caption">${element.imgCaption || ""}</div>
              </div>
          </div>
      </div>
    `;
  });

  return htmls.join("");
}

var htmls = `
          <div class="timeline-progress">
            <div class="timeline-progress-bar" ></div>
          </div>
          ${TimeLineItem()}
`;

timelineElement.innerHTML = htmls;

// 5.2 Handle progress bar
// Get elements of timline
const bar = document.querySelector(".timeline-progress-bar");
const progress = document.querySelector(".timeline-progress");
const timelineBox = document.querySelector(".timeline-box");

let timeout;
const progressBar = document.querySelector(".timeline-progress-bar");
const milestonBox = document.getElementById("milestone");

function debounce(func, delay) {
  clearTimeout(timeout);
  timeout = setTimeout(func, delay);
}

// Intersection Observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      debounce(() => {
        if (entry.isIntersecting) {
          progressBar.classList.add("visible");
        } else {
          progressBar.classList.remove("visible");
        }
      }, 10);
    });
  },
  {
    threshold: 0.1,
  }
);

observer.observe(milestonBox);

// 6. Header menu - cancel modal
const modal = document.querySelector(".modal");
const modalBodyRight = document.querySelector(".modal-body-right");
const cancelBtn = document.querySelector(".modal-body-right__cancel");
const menuBtn = document.querySelector(".header-menu-btn");
const headerMenuLinks = document.querySelectorAll(".header-menu-link");

const timeAnimation = 300;

function closeMenu() {
  modalBodyRight.classList.remove("openModalBodyRight");
  modalBodyRight.classList.add("closeModalBodyRight");
  setTimeout(() => {
    modal.classList.remove("active");
  }, timeAnimation);
}

function openMenu() {
  modal.classList.add("active");
  modalBodyRight.classList.add("openModalBodyRight");
  modalBodyRight.classList.remove("closeModalBodyRight");
}

cancelBtn.addEventListener("click", closeMenu);

menuBtn.addEventListener("click", openMenu);

headerMenuLinks.forEach((headerMenuLink) => {
  headerMenuLink.addEventListener("click", closeMenu);
});

// 7. News on mobile
let currentIndex = 0;
const newItemWrap = document.querySelector(".news-item-wrap");
const newItems = document.querySelectorAll(".news-item");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");


nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % newItems.length;
  newItemWrap.style.transform = `translateX(-${currentIndex * 100}%)`;
});
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + newItems.length) % newItems.length;
  newItemWrap.style.transform = `translateX(-${currentIndex * 100}%)`;
});



// 8. Handle button - reset input
function handleClickNewsletterBtn(selectorBtn, selectorInput) {
  var btn = document.querySelector(`${selectorBtn}`);
  var inputElement = document.querySelector(`${selectorInput}`);
  btn.addEventListener('click', () => {
    inputElement.value = "";
})}

// Subcribe button - Newsletter
handleClickNewsletterBtn('.subscribe-button', '.subscribe-input');

// Footer-newsletter button
handleClickNewsletterBtn('.footer-newsletter', '.footer-newsletter__input');
