interface Course {
    card_image: string;
    card_title: string;
    subject: string;
    grade: string;
    grade_point: string;
    units: string;
    lessons: string;
    topics: string;
    card_select: string[];
    students: string;
    duration: string;
    is_expired: boolean;
}

interface Notification {
    pa: string;
    title: string;
    course: string;
    classes: string;
    time: string;
    attached_file_count: number;
    is_checked: boolean;
}

var cards = document.querySelector(".card-countainer") as HTMLDivElement;
var result_count = document.querySelector(".result-para") as HTMLDivElement;
var aleart_dropdown_menu = document.querySelector(".alert-container") as HTMLDivElement;
var announcement_dropdown_menu = document.querySelector(".announcemnet-container") as HTMLDivElement;

fetch('./Data/courses.json')
    .then(response => response.json())
    .then(data => {
        (function addCourses() {
            for (let course of data as Course[]) {
                let { card_image, card_title, subject, grade, grade_point, units, lessons, topics, card_select, students, duration, is_expired } = course;
                cards.innerHTML += `<div>
                ${is_expired ? `<p class="expired-tag"> EXPIRED </p> <div class="couse-card-content margin-top-7">` : `<div class="couse-card-content">`}
                <img src="${card_image}" alt = "">
                <div class="content">
                <div class="subject-name">
                    <p> ${card_title}</p>
                    <div>
                    <img ${(is_expired) ? "class=not-favorite" : ""}  src = "../svgs/favourite.svg" alt = "">
                    </div>
                    </div>
                    <div class="subject-details">
                    <span> ${(subject.length > 0) ? subject : ""} </span>
                   ${(grade.length > 0) ?
                        `<span>|</span> 
                        <span> Grade ${grade} </span>
                         <span class="color-green">${grade_point}+</span>` : ""}
                    </div>
                    <div class="course-overview">
                    ${units.length > 0 ? `<b>${units}</b> <span> Units</span>` : ""}
                    ${lessons.length > 0 ? `<b>${lessons}</b> <span> Lessons</span>` : ""}
                    ${topics.length > 0 ? `<b>${topics}</b> <span> Topics</span>` : ""}
                    </div>
                    <div class="teacher-name">
                    <select name="" id = "">
                    ${Object.entries(card_select).map(([index, cs]) => `<option value="${index}">${cs}</option>`).join('')}
                    </select>
                    </div>
                    <div class="class-details">
                    <span> ${(students.length > 0) ? `${students} Students` : ""} </span>
                    <span>  ${(duration.length > 0) ? ` | ${duration}` : ""} </span>
                    </div>
                    </div>
                    </div>
                <hr width = "90%">
                <div class="flex-display">
                    <img src="../svgs/preview.svg" alt = "">
                    <img src="../svgs/manage course.svg"  class="${duration.length === 0 ? "opacity" : ""}" alt = "">
                    <img src="../svgs/grade submissions.svg"  class="${duration.length === 0 ? "opacity" : ""}" alt = "">
                    <img src="../svgs/reports.svg" alt = "">
                </div>
            </div>`;
            }
        })();
        (function showCoursesCount() {
            result_count.innerHTML = `Showing ${Math.min(data.length, 10)} of ${data.length} courses`;
        })();
    }).catch(error => console.error('Error fetching JSON:', error));

fetch('./Data/aleart-notification-data.json')
    .then(response => response.json())
    .then(AleartNotificationData => {
        (function showAleartNotifications() {
            for (let notification of AleartNotificationData as Notification[]) {
                let { title, course, classes, time, is_checked } = notification;
                let imagePath = (is_checked) ? "/svgs/check-round.svg" : "/svgs/dash-circle.svg";
                aleart_dropdown_menu.innerHTML += `
            <div class="alert ${(is_checked) ? "is-checked" : ""}">
                <div class="display-flex">
                        <p> ${title}</p>
                        <img src="${imagePath}" alt="">
                </div>
                ${course.length > 0 ? `<p><span class="color-grey">Course:</span>${course}</p>` : ``}
                ${classes.length > 0 ? `<p><span class="color-grey">Class:</span>${classes}</p>` : ``}
                <span class="color-grey">${time}</span>
            </div>`;
            }
        })();
    })
    .catch(error => console.error('Error fetching JSON:', error));

fetch('./Data/announcement-notification-data.json')
    .then(response => response.json())
    .then(AnnouncementNotificationData => {
        (function showAnnouncementNotifications() {
            for (let notification of AnnouncementNotificationData as Notification[]) {
                let { pa, title, course, classes, attached_file_count, time, is_checked } = notification;
                let imagePath = (is_checked) ? "/svgs/check-round.svg" : "/svgs/dash-circle.svg";
                announcement_dropdown_menu.innerHTML +=
                    `<div class="announcemnet  ${(is_checked) ? "is-checked" : ""}">
                        <div class="display-flex">
                            <div><span class="color-grey">PA:</span> <span>${pa}</span> </div>
                            <img src="${imagePath}" alt="">
                        </div>
                        <p>${title}</p>
                        ${course.length > 0 ? `<div class="class-course-color">Course: ${course}</div>` : ``}
                        ${classes.length > 0 ? `<div class="class-course-color">Class: ${classes}</div>` : ``}
                        <div class="date-file"> ${attached_file_count > 0 ?
                        `<div><img src="../svgs/attach-file.svg" alt="">
                            <span>${attached_file_count} files areattached</span>
                            </div>` : ``}
                            <span>${time}</span>
                        </div>
                    </div>`;
            }
        })();
    }).catch(error => console.error('Error fetching JSON:', error));

// For underline effect
var menuItems = document.querySelectorAll(".mar-left > span");
console.log(menuItems);
menuItems.forEach((item) => {

    item.addEventListener("click", (event) => {
        for (var item2 of menuItems) {
            item2.classList.remove("activate");
        }
        item.classList.add("activate");
    });
})

var menuItems2 = document.querySelectorAll(".simple-flex");
console.log(menuItems2);

menuItems2.forEach((item) => {
    item.addEventListener("click", (event) => {
        for (var item2 of menuItems2) {
            item2.classList.remove("active-bor-bottom");
        }
        item.classList.add("active-bor-bottom");
    });
})







