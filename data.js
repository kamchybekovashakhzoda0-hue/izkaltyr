(function () {
    "use strict";

    const records = {
        scholars: [],
        sponsors: [],
        volunteers: [],
        events: [],
        team: [],
        articles: [],
        stories: []
    };

    const cohorts = Object.freeze([
        Object.freeze({ id: "first", participants: 80, monthlyScholarship: 3000 }),
        Object.freeze({ id: "second", participants: 41, scholarshipRecipients: 30, volunteers: 11, monthlyScholarship: 4000 })
    ]);

    window.SITE_DATA = Object.freeze({
        demoMode: true,
        organizationName: "Из Калтыр",
        records: Object.freeze(records),
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
