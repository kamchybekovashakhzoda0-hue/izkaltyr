(function () {
    "use strict";

    window.PROJECT_CONTENT = Object.freeze({
        leadership: Object.freeze([
            Object.freeze({
                id: "president",
                roleKey: "leaderPresident",
                fullName: Object.freeze({
                    ky: "Абдуманап Бахтиержанов",
                    ru: "Абдуманап Бахтиержанов",
                    en: "Abdumanap Bakhtierjanov"
                }),
                photo: "public/images/director-abdumanap.jpg",
                biography: Object.freeze({ ky: "", ru: "", en: "" }),
                background: Object.freeze({ ky: "", ru: "", en: "" }),
                achievements: Object.freeze({ ky: "", ru: "", en: "" }),
                responsibilities: Object.freeze({ ky: "", ru: "", en: "" })
            }),
            Object.freeze({
                id: "first-cohort-leader",
                roleKey: "leaderFirstCohort",
                fullName: Object.freeze({
                    ky: "Адылбек уулу Алыбек",
                    ru: "Адылбек уулу Алыбек",
                    en: "Adylbek uulu Alybek"
                }),
                photo: "public/images/leader-cohort-one.jpeg",
                biography: Object.freeze({ ky: "", ru: "", en: "" }),
                background: Object.freeze({ ky: "", ru: "", en: "" }),
                achievements: Object.freeze({ ky: "", ru: "", en: "" }),
                responsibilities: Object.freeze({ ky: "", ru: "", en: "" })
            }),
            Object.freeze({
                id: "second-cohort-leader",
                roleKey: "leaderSecondCohort",
                fullName: Object.freeze({
                    ky: "Мунира Бакытбековна",
                    ru: "Мунира Бакытбековна",
                    en: "Munira Bakytbekovna"
                }),
                photo: "public/images/leader-cohort-two.jpeg",
                biography: Object.freeze({ ky: "", ru: "", en: "" }),
                background: Object.freeze({ ky: "", ru: "", en: "" }),
                achievements: Object.freeze({ ky: "", ru: "", en: "" }),
                responsibilities: Object.freeze({ ky: "", ru: "", en: "" })
            })
        ]),
        galleryCategories: Object.freeze([
            Object.freeze({ id: "activities", labelKey: "galleryActivities" }),
            Object.freeze({ id: "meetings", labelKey: "galleryMeetings" }),
            Object.freeze({ id: "gatherings", labelKey: "galleryGatherings" }),
            Object.freeze({ id: "education", labelKey: "galleryEducation" }),
            Object.freeze({ id: "moments", labelKey: "galleryMoments" })
        ]),
        gallery: Object.freeze([
            Object.freeze({
                id: "second-cohort-gathering-2026",
                category: "gatherings",
                image: "public/images/cohort-two-2026.jpeg",
                caption: Object.freeze({
                    ky: "«Из Калтыр» стипендиялык программасынын 2-агымы",
                    ru: "Встреча участников 2-го потока стипендиальной программы «Из Калтыр»",
                    en: "Second cohort of the Iz Kaltyr scholarship program"
                }),
                date: "2026-10-03",
                published: true
            })
        ]),
        stories: Object.freeze([
            Object.freeze({
                id: "second-cohort-meeting-2026",
                category: Object.freeze({
                    ky: "Иш-чара",
                    ru: "Мероприятие",
                    en: "Event"
                }),
                title: Object.freeze({
                    ky: "2-чи агым менен жолугушуу",
                    ru: "Встреча со 2-м потоком",
                    en: "Meeting with the second cohort"
                }),
                excerpt: Object.freeze({
                    ky: "2026-жылдын 3-октябрында «Из Калтыр» стипендиялык программасынын 2-агымы менен таанышуу жана стипендия тапшыруу аземи өттү.",
                    ru: "3 октября 2026 года состоялась встреча со 2-м потоком стипендиальной программы «Из Калтыр» и церемония вручения стипендий.",
                    en: "On October 3, 2026, the Iz Kaltyr scholarship program welcomed its second cohort and held a scholarship award ceremony."
                }),
                image: "public/images/cohort-two-meeting-2026.jpeg",
                imageAlt: Object.freeze({
                    ky: "«Из Калтыр» стипендиялык программасынын 2-агымынын жолугушуусунда тартылган жалпы сүрөт",
                    ru: "Общее фото со встречи участников 2-го потока стипендиальной программы «Из Калтыр»",
                    en: "Group photo from the meeting of the second cohort of the Iz Kaltyr scholarship program"
                }),
                published: true
            })
        ]),
        news: Object.freeze([]),
        events: Object.freeze([])
    });
}());
