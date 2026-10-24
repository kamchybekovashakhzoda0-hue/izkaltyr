(function () {
    "use strict";


    const cohorts = Object.freeze([
        Object.freeze({ id: "first", participants: 80, monthlyScholarship: 3000 }),
        Object.freeze({ id: "second", participants: 41, scholarshipRecipients: 30, volunteers: 11, monthlyScholarship: 4000 })
    ]);

    window.SITE_DATA = Object.freeze({
        demoMode: true,
        organizationName: "Из Калтыр",
        directorProfile: Object.freeze({
            image: "public/images/director-abdumanap.jpg",
            languages: Object.freeze({
                ky: Object.freeze({
                    name: "Абдуманап Бахтиержанов",
                    biography: "Кыскача өмүр баяны, кесиптик тажрыйбасы жана жетишкендиктери тууралуу маалыматты ырасталгандан кийин бул жерге кошуңуз.",
                    roles: Object.freeze([
                        "«Из Калтыр» стипендиялык долбоорунун негиздөөчүсү жана башкы демөөрчүсү",
                        "Жалал-Абад облусунун Күрөш федерациясынын президенти",
                        "Күрөш федерациясынын мүчөсү"
                    ]),
                    education: Object.freeze([
                        Object.freeze({ year: "2012", institution: "Бишкек шаарындагы № 16 мектеп" }),
                        Object.freeze({ year: "2014", institution: "Кастамону университети — түрк тилин үйрөнүү" }),
                        Object.freeze({ year: "2016", institution: "Кыргыз-Кытай улуттук университети" }),
                        Object.freeze({ year: "2016–2020", institution: "Шанхай педагогикалык университети — магистратурада окуу" }),
                        Object.freeze({ year: "2020", institution: "Малайзиядагы тил курсу" }),
                        Object.freeze({ year: "2024–2026", institution: "Кыргыз улуттук университети" })
                    ])
                }),
                ru: Object.freeze({
                    name: "Абдуманап Бахтиержанов",
                    biography: "Краткую биографию, профессиональный опыт и достижения можно добавить здесь после подтверждения сведений.",
                    roles: Object.freeze([
                        "Основатель и главный спонсор стипендиального проекта «Из Калтыр»",
                        "Президент Жалал-Абадской областной федерации Курош",
                        "Член Федерации Курош"
                    ]),
                    education: Object.freeze([
                        Object.freeze({ year: "2012", institution: "Школа № 16 в Бишкеке" }),
                        Object.freeze({ year: "2014", institution: "Университет Кастамону — изучение турецкого языка" }),
                        Object.freeze({ year: "2016", institution: "Кыргызско-Китайский национальный университет" }),
                        Object.freeze({ year: "2016–2020", institution: "Шанхайский педагогический университет — обучение в магистратуре" }),
                        Object.freeze({ year: "2020", institution: "Языковой курс в Малайзии" }),
                        Object.freeze({ year: "2024–2026", institution: "Кыргызский национальный университет" })
                    ])
                }),
                en: Object.freeze({
                    name: "Абдуманап Бахтиержанов",
                    biography: "Add a short biography, professional experience, and achievements here once those details are provided and verified.",
                    roles: Object.freeze([
                        "Founder and main sponsor of the Iz Kaltyr scholarship project",
                        "President of the Jalal-Abad Regional Kurosh Federation",
                        "Member of the Kurosh Federation"
                    ]),
                    education: Object.freeze([
                        Object.freeze({ year: "2012", institution: "School No. 16 in Bishkek" }),
                        Object.freeze({ year: "2014", institution: "Kastamonu University — Turkish language studies" }),
                        Object.freeze({ year: "2016", institution: "Kyrgyz-Chinese National University" }),
                        Object.freeze({ year: "2016–2020", institution: "Shanghai Normal University — master's studies" }),
                        Object.freeze({ year: "2020", institution: "Language course in Malaysia" }),
                        Object.freeze({ year: "2024–2026", institution: "Kyrgyz National University" })
                    ])
                })
            })
        }),
        records: Object.freeze({
                scholars: [],
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
