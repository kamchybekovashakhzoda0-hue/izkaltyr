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
        news: Object.freeze([
            Object.freeze({
                id: "first-lesson-cohort-two-2026-11-15",
                category: Object.freeze({
                    ky: "Иш-чара",
                    ru: "Мероприятие",
                    en: "Event"
                }),
                title: Object.freeze({
                    ky: "«Из Калтыр» — жаңы билимдерге карай кадам!",
                    ru: "«Из Калтыр» — шаг к новым знаниям!",
                    en: "“Из Калтыр” — a step toward new knowledge!"
                }),
                excerpt: Object.freeze({
                    ky: "15-ноябрда долбоордун 2-агымынын алгачкы сабагы белгилүү мугалим Гапыр Мадаминов агайдын катышуусунда өтөт.",
                    ru: "15 ноября состоится первый урок 2-го потока проекта с участием известного преподавателя Гапыра Мадаминова.",
                    en: "On November 15, the first lesson of the project’s second cohort will take place with renowned teacher Гапыр Мадаминов."
                }),
                body: Object.freeze({
                    ky: "«Из калтыр» — жаңы билимдерге карай кадам!\n\n15-ноябрда долбоордун 2-агымынын алгачкы сабагы белгилүү мугалим Гапыр Мадаминов агайдын катышуусунда өтөт.\n\n📚 Тема: «АЭМ» методунун негизинде билим алуу.\n\nОшондой эле ноябрь айынын стипендия тапшыруу аземи өткөрүлөт. Абдыманап Бахтиержанов жана Айгерим Нууманбек кызынын катышуусунда.\n\n📍 ROX Centre (Чүй 346)\n\n⏰ 9:30 баштайбыз. Негиздөөчүлөрдүн бири Айгерим Нууманбек кызы менен жолугушуу, андан соң сабак!\n\nБаарыңарды күтөбүз!\n\nДресс-код: классика.",
                    ru: "«Из Калтыр» — шаг к новым знаниям!\n\n15 ноября состоится первый урок 2-го потока проекта с участием известного преподавателя Гапыра Мадаминова.\n\n📚 Тема: обучение на основе метода «АЭМ».\n\nТакже состоится церемония вручения стипендий за ноябрь с участием Абдыманапа Бахтиержанова и Айгерим Нууманбек кызы.\n\n📍 ROX Centre (Чуй 346)\n\n⏰ Начинаем в 9:30. Встреча с одной из основательниц, Айгерим Нууманбек кызы, затем урок!\n\nБудем ждать всех!\n\nДресс-код: классический стиль.",
                    en: "“Из Калтыр” — a step toward new knowledge!\n\nOn November 15, the first lesson of the project’s second cohort will take place with renowned teacher Гапыр Мадаминов.\n\n📚 Topic: learning based on the “АЭМ” method.\n\nThe November scholarship award ceremony will also be held, with Абдыманап Бахтиержанов and Айгерим Нууманбек кызы in attendance.\n\n📍 ROX Centre (Chüy 346)\n\n⏰ We begin at 9:30. Meet with one of the founders, Айгерим Нууманбек кызы, followed by the lesson!\n\nWe look forward to seeing you!\n\nDress code: classic attire."
                }),
                image: "public/images/november-15-2026-event-poster.jpeg",
                imageAlt: Object.freeze({
                    ky: "15-ноябрдагы «Из Калтыр» долбоорунун 2-агымынын сабагынын расмий афишасы",
                    ru: "Официальная афиша урока 2-го потока проекта «Из Калтыр» 15 ноября",
                    en: "Official poster for the Iz Kaltyr project’s second-cohort lesson on November 15"
                }),
                actionLabel: Object.freeze({
                    ky: "Толук маалымат",
                    ru: "Подробнее",
                    en: "Read more"
                }),
                date: "2026-11-14",
                featured: true,
                poster: true,
                published: true
            })
        ]),
        events: Object.freeze([])
    });
}());
