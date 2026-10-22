(function () {
    "use strict";


    const cohorts = Object.freeze([
        Object.freeze({ id: "first", participants: 80, monthlyScholarship: 3000 }),
        Object.freeze({ id: "second", participants: 41, scholarshipRecipients: 30, volunteers: 11, monthlyScholarship: 4000 })
    ]);

    window.SITE_DATA = Object.freeze({
        demoMode: true,
        organizationName: "Из Калтыр",
        records: Object.freeze({
                scholars: [
                    {
                        id: "scholar-1",
                        name: "Момунбаев Диннур",
                        cohort: "second",
                        profileImage: "диннур.jpg",
                        profileImageAlt: "Момунбаев Диннур",
                        profileImageCaption: "Момунбаев Диннур",
                        profileImageCaptionAlt: "Момунбаев Диннур",
                        university: "И.Араев атындагы Кыргыз мамлекеттик университети",
                        profileText: "Момунбаев Диннур 2026-жылы «Из Калтыр» долбоорунун экинчи агымында стипендия алган. Ал билимге болгон кызыгуусу жана коомдук ишмердүүлүгү менен белгилүү.",

                        id: "scholar-2",
                        name: "Жороева Жибек",
                        cohort: "second",
                        profileImage: "жороева.jpg",
                        profileImageAlt: "Жороева Жибек",
                        profileImageCaption: "Жороева Жибек",
                        profileImageCaptionAlt: "Жороева Жибек",
                        university: "Кусеин Карасаев атфндагы Бишкек Мамлекеттик университети",
                        profileText: "Жороева Жибек 2026-жылы «Из Калтыр» долбоорунун экинчи агымында стипендия алган. Ал билимге болгон кызыгуусу жана коомдук ишмердүүлүгү менен белгилүү.",

                        id: "scholar-3",
                        name: "Касмалиева Медина",
                        cohort: "second",
                        profileImage: "касмалиева.jpg",
                        profileImageAlt: "Касмалиева Медина",
                        profileImageCaption: "Касмалиева Медина",
                        profileImageCaptionAlt: "Касмалиева Медина",
                        university: "НИУ Кыргыз Экономикалык университети",
                        profileText: "Касмалиева Медина 2026-жылы «Из Калтыр» долбоорунун экинчи агымында стипендия алган. Ал билимге болгон кызыгуусу жана коомдук ишмердүүлүгү менен белгилүү.",

                        id: "scholar-4",
                        name: "Турганбаев Курманбек",
                        cohort: "second",
                        profileImage: "турганбаев.jpg",
                        profileImageAlt: "Турганбаев Курманбек",
                        profileImageCaption: "Турганбаев Курманбек",
                        profileImageCaptionAlt: "Турганбаев Курманбек",
                        university: "Кыргыз Улуттук университети",
                        profileText: "Турганбаев Курманбек 2026-жылы «Из Калтыр» долбоорунун экинчи агымында стипендия алган. Ал билимге болгон кызыгуусу жана коомдук ишмердүүлүгү менен белгилүү.",

                        id: "scholar-5",
                        name: "Баялиев Нурбол",
                        cohort: "second",
                        profileImage: "баялиев.jpg",
                        profileImageAlt: "Баялиев Нурбол",
                        profileImageCaption: "Баялиев Нурбол",
                        profileImageCaptionAlt: "Баялиев Нурбол",
                        university: "И.Араев атындагы Кыргыз мамлекеттик университети",
                        profileText: "Баялиев Нурбол 2026-жылы «Из Калтыр» долбоорунун экинчи агымында стипендия алган. Ал билимге болгон кызыгуусу жана коомдук ишмердүүлүгү менен белгилүү."

                        id: "scholar-6",}
                ],
                sponsors: [],
                volunteers: [],
                events: [],
                team: [],
                articles: [],
                stories: []
            }),
        cohorts,
        statistics() {
            return {
                firstCohort: cohorts[0].participants,
                secondCohort: cohorts[1].participants,
                scholarshipRecipients: cohorts[1].scholarshipRecipients,
                volunteers: cohorts[1].volunteers
            };
        },
        scholarship: Object.freeze({
            status: "unconfirmed",
            deadline: null,
            applicationUrl: null
        })
    });
}());
