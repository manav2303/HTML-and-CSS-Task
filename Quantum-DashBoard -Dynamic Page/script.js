var cards = document.querySelector(".card-countainer");
var result_count = document.querySelector(".result-para");
var aleart_dropdown_menu = document.querySelector(".alert-container");
var announcement_dropdown_menu = document.querySelector(".announcemnet-container");
fetch('./Data/courses.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    (function addCourses() {
        for (var _i = 0, _a = data; _i < _a.length; _i++) {
            var course = _a[_i];
            var card_image = course.card_image, card_title = course.card_title, subject = course.subject, grade = course.grade, grade_point = course.grade_point, units = course.units, lessons = course.lessons, topics = course.topics, card_select = course.card_select, students = course.students, duration = course.duration, is_expired = course.is_expired;
            cards.innerHTML += "<div>\n                ".concat(is_expired ? "<p class=\"expired-tag\"> EXPIRED </p> <div class=\"couse-card-content margin-top-7\">" : "<div class=\"couse-card-content\">", "\n                <img src=\"").concat(card_image, "\" alt = \"\">\n                <div class=\"content\">\n                <div class=\"subject-name\">\n                    <p> ").concat(card_title, "</p>\n                    <div>\n                    <img ").concat((is_expired) ? "class=not-favorite" : "", "  src = \"../svgs/favourite.svg\" alt = \"\">\n                    </div>\n                    </div>\n                    <div class=\"subject-details\">\n                    <span> ").concat((subject.length > 0) ? subject : "", " </span>\n                   ").concat((grade.length > 0) ?
                "<span>|</span> \n                        <span> Grade ".concat(grade, " </span>\n                         <span class=\"color-green\">").concat(grade_point, "+</span>") : "", "\n                    </div>\n                    <div class=\"course-overview\">\n                    ").concat(units.length > 0 ? "<b>".concat(units, "</b> <span> Units</span>") : "", "\n                    ").concat(lessons.length > 0 ? "<b>".concat(lessons, "</b> <span> Lessons</span>") : "", "\n                    ").concat(topics.length > 0 ? "<b>".concat(topics, "</b> <span> Topics</span>") : "", "\n                    </div>\n                    <div class=\"teacher-name\">\n                    <select name=\"\" id = \"\">\n                    ").concat(Object.entries(card_select).map(function (_a) {
                var index = _a[0], cs = _a[1];
                return "<option value=\"".concat(index, "\">").concat(cs, "</option>");
            }).join(''), "\n                    </select>\n                    </div>\n                    <div class=\"class-details\">\n                    <span> ").concat((students.length > 0) ? "".concat(students, " Students") : "", " </span>\n                    <span>  ").concat((duration.length > 0) ? " | ".concat(duration) : "", " </span>\n                    </div>\n                    </div>\n                    </div>\n                <hr width = \"90%\">\n                <div class=\"flex-display\">\n                    <img src=\"../svgs/preview.svg\" alt = \"\">\n                    <img src=\"../svgs/manage course.svg\"  class=\"").concat(duration.length === 0 ? "opacity" : "", "\" alt = \"\">\n                    <img src=\"../svgs/grade submissions.svg\"  class=\"").concat(duration.length === 0 ? "opacity" : "", "\" alt = \"\">\n                    <img src=\"../svgs/reports.svg\" alt = \"\">\n                </div>\n            </div>");
        }
    })();
    (function showCoursesCount() {
        result_count.innerHTML = "Showing ".concat(Math.min(data.length, 10), " of ").concat(data.length, " courses");
    })();
}).catch(function (error) { return console.error('Error fetching JSON:', error); });
fetch('./Data/aleart-notification-data.json')
    .then(function (response) { return response.json(); })
    .then(function (AleartNotificationData) {
    (function showAleartNotifications() {
        for (var _i = 0, _a = AleartNotificationData; _i < _a.length; _i++) {
            var notification = _a[_i];
            var title = notification.title, course = notification.course, classes = notification.classes, time = notification.time, is_checked = notification.is_checked;
            var imagePath = (is_checked) ? "/svgs/check-round.svg" : "/svgs/dash-circle.svg";
            aleart_dropdown_menu.innerHTML += "\n            <div class=\"alert ".concat((is_checked) ? "is-checked" : "", "\">\n                <div class=\"display-flex\">\n                        <p> ").concat(title, "</p>\n                        <img src=\"").concat(imagePath, "\" alt=\"\">\n                </div>\n                ").concat(course.length > 0 ? "<p><span class=\"color-grey\">Course:</span>".concat(course, "</p>") : "", "\n                ").concat(classes.length > 0 ? "<p><span class=\"color-grey\">Class:</span>".concat(classes, "</p>") : "", "\n                <span class=\"color-grey\">").concat(time, "</span>\n            </div>");
        }
    })();
})
    .catch(function (error) { return console.error('Error fetching JSON:', error); });
fetch('./Data/announcement-notification-data.json')
    .then(function (response) { return response.json(); })
    .then(function (AnnouncementNotificationData) {
    (function showAnnouncementNotifications() {
        for (var _i = 0, _a = AnnouncementNotificationData; _i < _a.length; _i++) {
            var notification = _a[_i];
            var pa = notification.pa, title = notification.title, course = notification.course, classes = notification.classes, attached_file_count = notification.attached_file_count, time = notification.time, is_checked = notification.is_checked;
            var imagePath = (is_checked) ? "/svgs/check-round.svg" : "/svgs/dash-circle.svg";
            announcement_dropdown_menu.innerHTML +=
                "<div class=\"announcemnet  ".concat((is_checked) ? "is-checked" : "", "\">\n                        <div class=\"display-flex\">\n                            <div><span class=\"color-grey\">PA:</span> <span>").concat(pa, "</span> </div>\n                            <img src=\"").concat(imagePath, "\" alt=\"\">\n                        </div>\n                        <p>").concat(title, "</p>\n                        ").concat(course.length > 0 ? "<div class=\"class-course-color\">Course: ".concat(course, "</div>") : "", "\n                        ").concat(classes.length > 0 ? "<div class=\"class-course-color\">Class: ".concat(classes, "</div>") : "", "\n                        <div class=\"date-file\"> ").concat(attached_file_count > 0 ?
                    "<div><img src=\"../svgs/attach-file.svg\" alt=\"\">\n                            <span>".concat(attached_file_count, " files areattached</span>\n                            </div>") : "", "\n                            <span>").concat(time, "</span>\n                        </div>\n                    </div>");
        }
    })();
}).catch(function (error) { return console.error('Error fetching JSON:', error); });
// For underline effect
var menuItems = document.querySelectorAll(".mar-left > span");
console.log(menuItems);
menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
        for (var _i = 0, menuItems_1 = menuItems; _i < menuItems_1.length; _i++) {
            var item2 = menuItems_1[_i];
            item2.classList.remove("activate");
        }
        item.classList.add("activate");
    });
});
var menuItems2 = document.querySelectorAll(".simple-flex");
console.log(menuItems2);
menuItems2.forEach(function (item) {
    item.addEventListener("click", function (event) {
        for (var _i = 0, menuItems2_1 = menuItems2; _i < menuItems2_1.length; _i++) {
            var item2 = menuItems2_1[_i];
            item2.classList.remove("active-bor-bottom");
        }
        item.classList.add("active-bor-bottom");
    });
});
