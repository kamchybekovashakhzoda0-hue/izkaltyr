(function () {
    "use strict";

    const translations = {
        ky: {
            languageName: "Кыргызча",
            languageLabel: "Тил",
            mainNavigation: "Негизги навигация",
            homeTitle: "Билим жана мүмкүнчүлүк",
            metaDescription: "«Из Калтыр» — жаштардын билим алуусун жана өнүгүүсүн колдогон стипендиялык демилге.",
            skipLink: "Негизги мазмунга өтүү",
            home: "Башкы бет",
            about: "Биз жөнүндө",
            scholarship: "Стипендия",
            team: "Команда",
            scholars: "Стипендиаттар",
            volunteers: "Ыктыярчылар",
            sponsors: "Өнөктөштөр",
            news: "Жаңылыктар",
            contact: "Байланыш",
            apply: "Стипендияга тапшыруу",
            demoBanner: "Бул сайттагы долбоор тууралуу фактылар PDF материалынан алынды; кабыл алуу мөөнөттөрү жана тартиби документте көрсөтүлгөн эмес.",
            heroEyebrow: "Билим. Өнүгүү. Мүмкүнчүлүк.",
            heroTitle: "Бүгүнкү билимдүү жаштар — эртеңки өлкөнүн өнүгүүсү!",
            heroText: "Из Калтыр — жаштардын билим алуусуна, өнүгүүсүнө жана коомго салым кошуусуна жол ачкан стипендиялык демилге.",
            learnScholarship: "Стипендия жөнүндө",
            ourImpact: "Биздин таасирибиз", 
            photoNote: "Уюмдун логотиби жана стипендиялык программа түшүрүлгөн расмий баннер.",
            photoAlt: "Тоолордун сүрөтү жана Из Калтыр стипендиялык программасынын логотиби түшүрүлгөн баннер.",
            statsEyebrow: "Биздин көрсөткүчтөр",
            statsTitle: "Ар бир мүмкүнчүлүк маанилүү",
            statsNote: "Көрсөткүчтөр PDF документинде көрсөтүлгөн агымдардын маалыматтарына негизделет.",
            statFirstCohort: "1-агымдын студенттери",
            statSecondCohort: "2-агымдын студенттери",
            statScholarshipRecipients: "2-агымдын стипендиаттары",
            statVolunteers: "Ыктыярчылар",
            statEvents: "Иш-чаралар",
            aboutEyebrow: "Биз жөнүндө",
            aboutTitle: "Билим аркылуу жаңы мүмкүнчүлүктөрдү ачабыз",
            aboutText: "«Из Калтыр» — билимге умтулган, активдүү жана өзүн өнүктүрүүгө аракет кылган мыкты студенттерди колдоого, алардын ар тараптуу өнүгүүсүнө жана коомго пайда алып келе турган келечекке кадам таштоосуна шарт түзгөн стипендиялык долбоор.",
            missionLabel: "Максат",
            missionDraft: "Студенттерге жаңы мүмкүнчүлүктөрдү ачуу, ар тараптуу өнүгүүсүн колдоо жана коомго пайда алып келе турган келечекке кадам таштоосуна көмөктөшүү.",
            visionLabel: "Көз караш",
            visionDraft: "Көз караш расмий бекитилгенден кийин жарыяланат.",
            historyLabel: "Тарыхы",
            historyPending: "Долбоор 2025-жылы ишин баштаган. Биринчи агымга 80 студент катышып, ай сайын 3 000 сом стипендия алган.",
            valuesLabel: "Баалуулуктар",
            valuesText: "Билим · мүмкүнчүлүк · жоопкерчилик · коомчулук",
            readAbout: "Демилге жөнүндө",
            scholarshipEyebrow: "Стипендиялык демилге",
            scholarshipTitle: "Кийинки кадамды билим менен жасаңыз",
            scholarshipText: "Документте биринчи жана экинчи агымдын жыйынтыктары, стипендиянын өлчөмү жана катышуучулардын жоопкерчилиги берилген. Кийинки кабыл алуунун мөөнөтү, тандоо баскычтары жана документтердин тизмеси көрсөтүлгөн эмес.",
            statusLabel: "Кабыл алуу статусу",
            statusUnconfirmed: "Кийинки кабыл алуунун мөөнөтү документте көрсөтүлгөн эмес",
            deadlineLabel: "Арыз берүү мөөнөтү",
            deadlinePending: "Расмий дата жарыялана элек",
            benefitsLabel: "Программанын артыкчылыктары",
            benefitsPending: "Ай сайын берилүүчү стипендия; жаңы чөйрө; нетворкинг; иш-чаралар; тажрыйба; өнүгүү; бирдиктүү жана ишенимдүү чөйрө.",
            benefitScholarship: "Ай сайын берилүүчү стипендия",
            benefitNewEnvironment: "Жаңы чөйрө",
            benefitNetworking: "Нетворкинг",
            benefitEvents: "Иш-чаралар",
            benefitExperience: "Тажрыйба",
            benefitDevelopment: "Өнүгүү",
            benefitCommunity: "Бирдиктүү жана ишенимдүү чөйрө",
            eligibilityLabel: "Катышуу шарттары",
            eligibilityPending: "Долбоор билимге умтулган, активдүү жана өзүн өнүктүрүүгө аракет кылган мыкты студенттерди колдойт. Документте тапшыруунун так критерийлери берилген эмес.",
            stagesLabel: "Арыз берүү баскычтары",
            stagesPending: "Документте тандоо же арыз берүү баскычтары көрсөтүлгөн эмес.",
            documentsLabel: "Керектүү документтер",
            documentsPending: "Тапшырууга керектүү документтердин тизмеси документте көрсөтүлгөн эмес.",
            responsibilitiesLabel: "Стипендиаттын жоопкерчилиги",
            responsibilityParticipation: "Жолугушууларга жана долбоордун иш-чараларына активдүү катышуу.",
            responsibilityCommitment: "Милдеттерди убагында аткаруу жана берилген мүмкүнчүлүккө олуттуу мамиле кылуу.",
            responsibilityInitiative: "Идея, аракет жана демилге менен долбоордун жашоосуна салым кошуу.",
            responsibilityGrowth: "Стипендия менен катар долбоор берген билимди, тажрыйбаны жана мүмкүнчүлүктөрдү колдонуп өнүгүү.",
            responsibilityTeamwork: "Башка стипендиаттарды колдоо, бири-бирин сыйлоо жана команда болуп иштөө.",
            noApplication: "Кийинки кабыл алууга тапшыруу шилтемеси документте жок.",
            details: "Толук маалымат",
            readStory: "Окуяны окуу",
            founderName: "Абдыманап Бахтиержанов",
            founderRole: "«Из Калтыр» долбоорунун негиздөөчүсү жана башкы демөөрчүсү; Жалал-Абад облусунун күрөш федерациясынын президенти; күрөш федерациясынын мүчөсү; MB Sport брендинин негиздөөчүсү.",
            founderIntro: "PDF документинде көрсөтүлгөн негиздөөчүнүн билим жолу жана ишмердиги:",
            founder2012: "Бишкек шаарындагы №16 мектеп",
            founder2014: "Кастамону университети, түрк тили",
            founder2016: "Кыргыз-Кытай улуттук университети",
            founder2016to2020: "Шанхай педагогикалык университети, магистратура",
            founder2020Study: "Малайзияда тил курсу",
            founder2020Work: "MB Sport бренди негизделген",
            founder2024to2026: "Кыргыз улуттук университети, эл аралык кытай экономикасы багыты",
            founderSince2024: "Аманат жаш мамлекетчилдер мектебинин демөөрчүсү",
            founderSinceLabel: "2024-жылдан тартып",
            founder2025: "Күрөш федерациясынын мүчөсү",
            founder2026: "«Из Калтыр» стипендиялык долбоорунун негиздөөчүсү жана башкы демөөрчүсү",
            cohortsEyebrow: "Долбоордун агымдары",
            cohortsTitle: "Биринчи кадамдан жаңы башталышка чейин",
            cohortFirstTitle: "1-агым",
            cohortSecondTitle: "2-агым",
            cohortFirstDescription: "Долбоор 2025-жылы ишин баштаган.",
            cohortSecondDescription: "Документте экинчи агым «жаңы башталыш» катары көрсөтүлгөн.",
            cohortParticipants: "Студент",
            cohortRecipients: "Стипендиат",
            cohortVolunteers: "Ыктыярчы",
            cohortMonthlyScholarship: "Ай сайын берилүүчү стипендия",
            scholarsEyebrow: "Биздин коомчулук",
            scholarsTitle: "Стипендиаттар",
            scholarsText: "PDF документинде экинчи агымда 30 стипендиат болгону айтылат. Жеке профилдер документте берилген эмес.",
            allScholars: "Бардык стипендиаттар",
            storiesEyebrow: "Окуялар",
            storiesTitle: "Маанилүү өзгөрүүлөр адамдан башталат",
            storiesText: "Чыныгы окуялар каармандардын уруксаты менен кошулат. Азырынча жарыялоого даяр окуялар жок.",
            sponsorsEyebrow: "Өнөктөштүк",
            sponsorsTitle: "Билимге бирге жол ачалы",
            sponsorsText: "Расмий өнөктөштөр тууралуу маалымат ырасталгандан кийин жарыяланат.",
            becomePartner: "Өнөктөш болуу",
            volunteerEyebrow: "Коомчулукка кошулуңуз",
            volunteerTitle: "Убактыңызды жана жөндөмүңүздү бөлүшүңүз",
            volunteerText: "Ыктыярчылык мүмкүнчүлүктөрү тууралуу маалымат уюм тарабынан ырасталгандан кийин жарыяланат.",
            becomeVolunteer: "Ыктыярчы болуу",
            newsEyebrow: "Жаңылыктар жана иш-чаралар",
            newsTitle: "Акыркы жаңылыктар",
            newsText: "Расмий жарыялар даяр болгондо бул жерде бөлүшүлөт.",
            allNews: "Бардык жаңылыктар",
            faqEyebrow: "Көп берилүүчү суроолор",
            faqTitle: "Сурооңуз барбы?",
            faqDraft: "Жооптор долбоор тууралуу PDF материалындагы маалыматка негизделет.",
            faqQ1: "Долбоор кимдерди колдойт?",
            faqA1: "Билимге умтулган, активдүү жана өзүн өнүктүрүүгө аракет кылган мыкты студенттерди. Так тандоо критерийлери документте көрсөтүлгөн эмес.",
            faqQ2: "Стипендиянын өлчөмү канча?",
            faqA2: "Биринчи агымда ай сайын 3 000 сом, экинчи агымда ай сайын 4 000 сом деп көрсөтүлгөн.",
            faqQ3: "Стипендиаттардын жоопкерчилиги кандай?",
            faqA3: "Жолугушууларга жана иш-чараларга активдүү катышуу; милдеттерди убагында аткаруу; долбоорго идея жана демилге менен салым кошуу; берилген мүмкүнчүлүктөр аркылуу өнүгүү; башка стипендиаттарды колдоп, командада иштөө.",
            faqQ4: "Арыз берүүнүн мөөнөтү жана баскычтары кандай?",
            faqA4: "PDF документинде кийинки кабыл алуунун датасы, арыз берүү тартиби, тандоо баскычтары жана керектүү документтер көрсөтүлгөн эмес.",
            contactEyebrow: "Байланыш",
            contactTitle: "Биз менен байланышта болуңуз",
            contactText: "Расмий байланыш маалыматтары уюм тарабынан берилгенден кийин бул жерге кошулат.",
            emailLabel: "Электрондук почта",
            emailPlaceholder: "[Расмий электрондук почта]",
            phoneLabel: "Телефон",
            phonePlaceholder: "[Телефон номери]",
            addressLabel: "",
            addressPlaceholder: "[Кеңсенин дареги]",
            socialPlaceholder: "Расмий социалдык шилтемелер кийин кошулат.",
            contactFormTitle: "Бизге жазыңыз",
            nameLabel: "Атыңыз",
            emailField: "Электрондук почта",
            messageLabel: "Билдирүү",
            sendMessage: "Билдирүү жөнөтүү",
            volunteerFormTitle: "Ыктыярчы болууга кызыгуум бар",
            partnerFormTitle: "Өнөктөштүк тууралуу сүйлөшөлү",
            organizationLabel: "Уюм / компания",
            interestLabel: "Кызыгууңуз тууралуу кыскача",
            submitInterest: "Кызыгууну билдирүү",
            formDemoNotice: "Демо форма: маалымат текшерилди, бирок эч жакка жөнөтүлгөн же сакталган жок. Чыныгы жөнөтүү үчүн сервердик кызмат туташтырылышы керек.",
            emptyScholars: "Азырынча жарыяланган стипендиаттар жок.",
            emptySponsors: "Расмий өнөктөштөр азырынча жарыялана элек.",
            emptyTeam: "Команда мүчөлөрү тууралуу текшерилген маалымат азырынча жок.",
            emptyVolunteers: "Ыктыярчылар тууралуу маалымат азырынча жарыялана элек.",
            emptyNews: "Азырынча жарыяланган жаңылыктар жок.",
            emptyStories: "Азырынча жарыяланган окуялар жок.",
            emptyEvents: "Иш-чаралар кийин жарыяланат.",
            searchLabel: "Издөө",
            searchPlaceholder: "Аты же ачкыч сөз боюнча издөө",
            yearFilter: "Стипендия алган жыл",
            universityFilter: "ЖОЖ",
            fieldFilter: "Окуу багыты",
            allOptions: "Баары",
            noResults: "Бул издөө боюнча маалымат табылган жок.",
            categoryFilter: "Бөлүм",
            datePending: "Жарыяланган күнү көрсөтүлө элек",
            articleMissing: "Бул материал азырынча жарыяланган эмес.",
            backToNews: "Жаңылыктарга кайтуу",
            adminTitle: "Административдик панель",
            adminUnavailable: "Админ-панель коопсуз сервердик аутентификациясыз иштетилбейт. Бул статикалык демо сайтта кирүү же түзөтүү функциялары жок. Маалыматтарды коргоо үчүн сервердик кызмат жана уруксаттарды серверде текшерүү зарыл.",
            adminCounts: "Көрсөткүчтөр жалпы демо маалымат топтомунан эсептелет.",
            legalDraft: "Бул баракча долбоордук үлгү гана; юрист тарабынан каралган эмес. Расмий саясат жарыяланганга чейин бул текстти колдонбоңуз.",
            privacyTitle: "Купуялык саясаты",
            termsTitle: "Колдонуу шарттары",
            footerDescription: "Билим алууга, өнүгүүгө жана коомго салым кошууга көмөк көрсөткөн стипендиялык демилге.",
            privacy: "Купуялык саясаты",
            terms: "Колдонуу шарттары",
            copyright: "Бардык укуктар корголгон.",
            notFoundTitle: "Барак табылган жок",
            notFoundText: "Сиз издеген барак жок же азырынча жарыяланган эмес.",
            backHome: "Башкы бетке кайтуу",
            menuOpen: "Менюну ачуу",
            menuClose: "Менюну жабуу",
            formNameRequired: "Атыңызды киргизиңиз.",
            formEmailRequired: "Туура электрондук почта дарегин киргизиңиз.",
            formMessageRequired: "Билдирүүңүздү киргизиңиз.",
            formOrganizationRequired: "Уюмдун атын киргизиңиз.",
            formInterestRequired: "Кызыгууңузду кыскача жазыңыз.",
            formSubmissionBlocked: "Форма текшерүүдөн өтпөдү. Маалымат жөнөтүлгөн жок.",
            honeypotLabel: "Бул талааны бош калтырыңыз"
        },
        ru: {
            languageName: "Русский",
            languageLabel: "Язык",
            mainNavigation: "Основная навигация",
            homeTitle: "Образование и возможности",
            metaDescription: "«Из Калтыр» — стипендиальная инициатива, поддерживающая образование и развитие молодёжи.",
            skipLink: "Перейти к основному содержимому",
            home: "Главная",
            about: "О нас",
            scholarship: "Стипендия",
            team: "Команда",
            scholars: "Стипендиаты",
            volunteers: "Волонтёры",
            sponsors: "Партнёры",
            news: "Новости",
            contact: "Контакты",
            apply: "Подать заявку",
            demoBanner: "Факты о проекте взяты из PDF; сроки и порядок следующего набора в документе не указаны.",
            heroEyebrow: "Знание. Развитие. Возможности.",
            heroTitle: "Образованная молодёжь сегодня — развитие страны завтра!",
            heroText: "«Из Калтыр» — стипендиальная инициатива, которая помогает молодёжи получать образование, развиваться и вносить вклад в общество.",
            learnScholarship: "О стипендии",
            ourImpact: "Наш вклад",
            photoNote: "Официальный баннер с логотипом организации и стипендиальной программой.",
            photoAlt: "Баннер с изображением гор и логотипом стипендиальной программы «Из Калтыр».",
            statsEyebrow: "Наши показатели",
            statsTitle: "Каждая возможность важна",
            statsNote: "Показатели основаны на данных о потоках, приведённых в PDF-документе.",
            statFirstCohort: "Студентов в 1-м потоке",
            statSecondCohort: "Студентов во 2-м потоке",
            statScholarshipRecipients: "Стипендиатов во 2-м потоке",
            statVolunteers: "Волонтёры",
            statEvents: "Мероприятия",
            aboutEyebrow: "О нас",
            aboutTitle: "Открываем новые возможности через образование",
            aboutText: "«Из Калтыр» — стипендиальный проект, который поддерживает стремящихся к знаниям, активных и развивающихся студентов, помогает им расти всесторонне и делать шаг к будущему, полезному для общества.",
            missionLabel: "Миссия",
            missionDraft: "Открывать студентам новые возможности, поддерживать их всестороннее развитие и помогать им двигаться к будущему, полезному для общества.",
            visionLabel: "Видение",
            visionDraft: "Видение будет опубликовано после официального утверждения.",
            historyLabel: "История",
            historyPending: "Проект начал работу в 2025 году. В первом потоке участвовали 80 студентов; ежемесячная стипендия составляла 3 000 сомов.",
            valuesLabel: "Ценности",
            valuesText: "Образование · возможности · ответственность · сообщество",
            readAbout: "О нашей инициативе",
            scholarshipEyebrow: "Стипендиальная инициатива",
            scholarshipTitle: "Сделайте следующий шаг с помощью образования",
            scholarshipText: "В документе приведены сведения о первом и втором потоках, размере стипендии и ответственности стипендиатов. Сроки следующего набора, этапы отбора и список документов не указаны.",
            statusLabel: "Статус приёма",
            statusUnconfirmed: "Сроки следующего набора в документе не указаны",
            deadlineLabel: "Срок подачи",
            deadlinePending: "Официальная дата не объявлена",
            benefitsLabel: "Преимущества программы",
            benefitsPending: "Ежемесячная стипендия; новое окружение; нетворкинг; мероприятия; опыт; развитие; единое и доверительное сообщество.",
            benefitScholarship: "Ежемесячная стипендия",
            benefitNewEnvironment: "Новое окружение",
            benefitNetworking: "Нетворкинг",
            benefitEvents: "Мероприятия",
            benefitExperience: "Опыт",
            benefitDevelopment: "Развитие",
            benefitCommunity: "Единое и доверительное сообщество",
            eligibilityLabel: "Условия участия",
            eligibilityPending: "Проект поддерживает стремящихся к знаниям, активных и развивающихся студентов. Точные критерии отбора в документе не указаны.",
            stagesLabel: "Этапы подачи заявки",
            stagesPending: "Этапы подачи заявки и отбора в документе не указаны.",
            documentsLabel: "Необходимые документы",
            documentsPending: "Список необходимых документов в документе не указан.",
            responsibilitiesLabel: "Ответственность стипендиата",
            responsibilityParticipation: "Активно участвовать во встречах и мероприятиях проекта.",
            responsibilityCommitment: "Выполнять свои обязанности вовремя и серьёзно относиться к предоставленной возможности.",
            responsibilityInitiative: "Вносить вклад в жизнь проекта своими идеями, действиями и инициативой.",
            responsibilityGrowth: "Развиваться, используя не только стипендию, но и знания, опыт и возможности проекта.",
            responsibilityTeamwork: "Поддерживать других стипендиатов, уважать друг друга и работать командой.",
            noApplication: "Ссылка для подачи заявки на следующий набор в документе отсутствует.",
            details: "Подробнее",
            readStory: "Читать историю",
            founderName: "Абдыманап Бахтиержанов",
            founderRole: "Основатель и главный спонсор проекта «Из Калтыр»; президент федерации борьбы Жалал-Абадской области; член федерации борьбы; основатель бренда MB Sport.",
            founderIntro: "Образование и деятельность основателя по материалам PDF:",
            founder2012: "Школа № 16 в Бишкеке",
            founder2014: "Университет Кастамону, турецкий язык",
            founder2016: "Кыргызско-Китайский национальный университет",
            founder2016to2020: "Шанхайский педагогический университет, магистратура",
            founder2020Study: "Языковой курс в Малайзии",
            founder2020Work: "Основан бренд MB Sport",
            founder2024to2026: "Кыргызский национальный университет, направление «международная китайская экономика»",
            founderSince2024: "Спонсор школы молодых государственников «Аманат»",
            founderSinceLabel: "С 2024 года",
            founder2025: "Член федерации борьбы",
            founder2026: "Основатель и главный спонсор стипендиального проекта «Из Калтыр»",
            cohortsEyebrow: "Потоки проекта",
            cohortsTitle: "От первого шага к новому началу",
            cohortFirstTitle: "1-й поток",
            cohortSecondTitle: "2-й поток",
            cohortFirstDescription: "Проект начал работу в 2025 году.",
            cohortSecondDescription: "В документе второй поток обозначен как «новое начало».",
            cohortParticipants: "Студентов",
            cohortRecipients: "Стипендиатов",
            cohortVolunteers: "Волонтёров",
            cohortMonthlyScholarship: "Ежемесячная стипендия",
            scholarsEyebrow: "Наше сообщество",
            scholarsTitle: "Стипендиаты",
            scholarsText: "В PDF указано, что во втором потоке было 30 стипендиатов. Индивидуальные профили в документе не представлены.",
            allScholars: "Все стипендиаты",
            storiesEyebrow: "Истории",
            storiesTitle: "Важные перемены начинаются с людей",
            storiesText: "Реальные истории будут опубликованы с согласия героев. Готовых к публикации материалов пока нет.",
            sponsorsEyebrow: "Партнёрство",
            sponsorsTitle: "Вместе откроем путь к знаниям",
            sponsorsText: "Информация об официальных партнёрах появится после подтверждения.",
            becomePartner: "Стать партнёром",
            volunteerEyebrow: "Присоединяйтесь к сообществу",
            volunteerTitle: "Делитесь временем и навыками",
            volunteerText: "Информация о волонтёрских возможностях будет опубликована после подтверждения организацией.",
            becomeVolunteer: "Стать волонтёром",
            newsEyebrow: "Новости и события",
            newsTitle: "Последние новости",
            newsText: "Официальные объявления появятся здесь, когда будут готовы.",
            allNews: "Все новости",
            faqEyebrow: "Частые вопросы",
            faqTitle: "Остались вопросы?",
            faqDraft: "Ответы основаны на сведениях о проекте из PDF-документа.",
            faqQ1: "Кого поддерживает проект?",
            faqA1: "Стремящихся к знаниям, активных и развивающихся студентов. Точные критерии отбора в документе не указаны.",
            faqQ2: "Каков размер стипендии?",
            faqA2: "В первом потоке указана ежемесячная стипендия 3 000 сомов, во втором — 4 000 сомов.",
            faqQ3: "За что отвечает стипендиат?",
            faqA3: "За активное участие во встречах и мероприятиях, своевременное выполнение обязанностей, вклад в проект, собственное развитие и командную поддержку других стипендиатов.",
            faqQ4: "Когда и как подать заявку?",
            faqA4: "В PDF не указаны даты следующего набора, порядок подачи, этапы отбора или список необходимых документов.",
            contactEyebrow: "Контакты",
            contactTitle: "Будьте на связи",
            contactText: "Официальные контактные данные будут добавлены после их предоставления организацией.",
            emailLabel: "Электронная почта",
            emailPlaceholder: "Официальная электронная почта",
            phoneLabel: "Телефон",
            phonePlaceholder: "Номер телефона",
            addressLabel: "Адрес",
            addressPlaceholder: "",
            socialPlaceholder: "Официальные ссылки на соцсети появятся позже.",
            contactFormTitle: "Напишите нам",
            nameLabel: "Ваше имя",
            emailField: "Электронная почта",
            messageLabel: "Сообщение",
            sendMessage: "Отправить сообщение",
            volunteerFormTitle: "Хочу стать волонтёром",
            partnerFormTitle: "Обсудим партнёрство",
            organizationLabel: "Организация / компания",
            interestLabel: "Кратко расскажите о своём интересе",
            submitInterest: "Отправить запрос",
            formDemoNotice: "Демо-форма: данные проверены, но не отправлены и не сохранены. Для настоящей отправки необходимо подключить серверный сервис.",
            emptyScholars: "Опубликованных профилей стипендиатов пока нет.",
            emptySponsors: "Официальные партнёры пока не представлены.",
            emptyTeam: "Проверенная информация о команде пока не добавлена.",
            emptyVolunteers: "Информация о волонтёрах пока не опубликована.",
            emptyNews: "Опубликованных новостей пока нет.",
            emptyStories: "Опубликованных историй пока нет.",
            emptyEvents: "Информация о мероприятиях появится позже.",
            searchLabel: "Поиск",
            searchPlaceholder: "Поиск по имени или ключевому слову",
            yearFilter: "Год стипендии",
            universityFilter: "Вуз",
            fieldFilter: "Направление обучения",
            allOptions: "Все",
            noResults: "По вашему запросу ничего не найдено.",
            categoryFilter: "Категория",
            datePending: "Дата и публикации ",
            articleMissing: "Этот материал пока не опубликован.",
            backToNews: "Вернуться к новостям",
            adminTitle: "Панель администратора",
            adminUnavailable: "Панель администратора не включена без безопасной серверной аутентификации. В этой статической демоверсии нет функций входа и редактирования. Для защиты данных необходимы серверная часть и авторизация на сервере.",
            adminCounts: "Показатели рассчитываются по общему демо-набору данных.",
            legalDraft: "Это только черновой шаблон, не проверенный юристом. Не используйте его до публикации официальной политики.",
            privacyTitle: "Политика конфиденциальности",
            termsTitle: "Условия использования",
            footerDescription: "Стипендиальная инициатива, поддерживающая образование, развитие и вклад в общество.",
            privacy: "Конфиденциальность",
            terms: "Условия использования",
            copyright: "Все права защищены.",
            notFoundTitle: "",
            notFoundText: "Такой страницы нет или она ещё не опубликована.",
            backHome: "На главную",
            menuOpen: "Открыть меню",
            menuClose: "Закрыть меню",
            formNameRequired: "Укажите ваше имя.",
            formEmailRequired: "Укажите корректный адрес электронной почты.",
            formMessageRequired: "Введите сообщение.",
            formOrganizationRequired: "Укажите название организации.",
            formInterestRequired: "Кратко опишите ваш интерес.",
            formSubmissionBlocked: "Проверка формы ",
            honeypotLabel: "Оставьте это поле пустым"
        },
        en: {
            languageName: "English",
            languageLabel: "Language",
            mainNavigation: "Main navigation",
            homeTitle: "Education and opportunity",
            metaDescription: "Iz Kaltyr is a scholarship initiative supporting education and youth development.",
            skipLink: "Skip to main content",
            home: "Home",
            about: "About Us",
            scholarship: "Scholarship",
            team: "Our Team",
            scholars: "Scholars",
            volunteers: "Volunteers",
            sponsors: "Partners",
            news: "News",
            contact: "Contact",
            apply: "Apply for Scholarship",
            demoBanner: "Project facts are taken from the PDF; the next application dates and process are not specified in the document.",
            heroEyebrow: "Knowledge. Growth. Opportunity.",
            heroTitle: "Educated young people today — a stronger country tomorrow!",
            heroText: "Iz Kaltyr is a scholarship initiative that supports young people in learning, growing, and contributing to their communities.",
            learnScholarship: "About the scholarship",
            ourImpact: "Our impact",
            photoNote: "Official banner featuring the organization logo and scholarship program.",
            photoAlt: "Banner with a mountain scene and the Iz Kaltyr scholarship program logo.",
            statsEyebrow: "Our impact",
            statsTitle: "Every opportunity matters",
            statsNote: "Figures are based on the cohort information provided in the PDF.",
            statFirstCohort: "Students in cohort 1",
            statSecondCohort: "Students in cohort 2",
            statScholarshipRecipients: "Scholarship recipients in cohort 2",
            statVolunteers: "Volunteers",
            statEvents: "Events",
            aboutEyebrow: "About us",
            aboutTitle: "Opening new opportunities through education",
            aboutText: "Iz Kaltyr is a scholarship project that supports excellent students who are eager to learn, active, and committed to self-development, helping them grow in multiple ways and move toward a future that benefits society.",
            missionLabel: "Mission",
            missionDraft: "Create new opportunities for students, support their holistic development, and help them take steps toward a future that benefits society.",
            visionLabel: "Vision",
            visionDraft: "The vision will be published after official approval.",
            historyLabel: "History",
            historyPending: "The project began in 2025. Its first cohort included 80 students, with a monthly scholarship of 3,000 soms.",
            valuesLabel: "Values",
            valuesText: "Education · opportunity · responsibility · community",
            readAbout: "About the initiative",
            scholarshipEyebrow: "Scholarship initiative",
            scholarshipTitle: "Take your next step through education",
            scholarshipText: "The document describes the first and second cohorts, scholarship amounts, and scholar responsibilities. It does not specify dates for the next intake, selection stages, or required documents.",
            statusLabel: "Application status",
            statusUnconfirmed: "The document does not specify dates for the next intake",
            deadlineLabel: "Application deadline",
            deadlinePending: "No official date announced",
            benefitsLabel: "Program benefits",
            benefitsPending: "Monthly scholarship; a new community; networking; events; experience; development; a united and supportive environment.",
            benefitScholarship: "Monthly scholarship",
            benefitNewEnvironment: "A new community",
            benefitNetworking: "Networking",
            benefitEvents: "Events",
            benefitExperience: "Experience",
            benefitDevelopment: "Development",
            benefitCommunity: "A united and supportive environment",
            eligibilityLabel: "Eligibility",
            eligibilityPending: "The project supports students who are eager to learn, active, and committed to self-development. Exact selection criteria are not specified in the document.",
            stagesLabel: "Application stages",
            stagesPending: "The document does not specify application or selection stages.",
            documentsLabel: "Required documents",
            documentsPending: "The document does not list the required application documents.",
            responsibilitiesLabel: "Scholar responsibilities",
            responsibilityParticipation: "Actively participate in project meetings and events.",
            responsibilityCommitment: "Complete responsibilities on time and take the opportunity seriously.",
            responsibilityInitiative: "Contribute to the project through ideas, action, and initiative.",
            responsibilityGrowth: "Grow by using the project's knowledge, experience, and opportunities as well as the scholarship.",
            responsibilityTeamwork: "Support other scholars, respect one another, and work as a team.",
            noApplication: "The document does not include a link for the next application period.",
            details: "Learn more",
            readStory: "Read story",
            founderName: "Abdymanap Bakhtierjanov",
            founderRole: "Founder and main sponsor of the Iz Kaltyr project; president of the Jalal-Abad regional wrestling federation; member of the wrestling federation; founder of the MB Sport brand.",
            founderIntro: "The founder's education and work history, as stated in the PDF:",
            founder2012: "School No. 16 in Bishkek",
            founder2014: "Kastamonu University, Turkish language",
            founder2016: "Kyrgyz-Chinese National University",
            founder2016to2020: "Shanghai Normal University, master's studies",
            founder2020Study: "Language course in Malaysia",
            founder2020Work: "MB Sport brand founded",
            founder2024to2026: "Kyrgyz National University, international Chinese economy program",
            founderSince2024: "Sponsor of the Amanat School of Young Statesmen",
            founderSinceLabel: "Since 2024",
            founder2025: "Member of the wrestling federation",
            founder2026: "Founder and main sponsor of the Iz Kaltyr scholarship project",
            cohortsEyebrow: "Project cohorts",
            cohortsTitle: "From the first step to a new beginning",
            cohortFirstTitle: "Cohort 1",
            cohortSecondTitle: "Cohort 2",
            cohortFirstDescription: "The project began in 2025.",
            cohortSecondDescription: "The document describes the second cohort as a “new beginning.”",
            cohortParticipants: "Students",
            cohortRecipients: "Scholarship recipients",
            cohortVolunteers: "Volunteers",
            cohortMonthlyScholarship: "Monthly scholarship",
            scholarsEyebrow: "Our community",
            scholarsTitle: "Scholars",
            scholarsText: "The PDF states that cohort 2 had 30 scholarship recipients. Individual profiles are not included in the document.",
            allScholars: "All scholars",
            storiesEyebrow: "Stories",
            storiesTitle: "Meaningful change starts with people",
            storiesText: "Real stories will be shared with the subjects' consent. No stories are ready for publication yet.",
            sponsorsEyebrow: "Partnership",
            sponsorsTitle: "Opening doors to learning, together",
            sponsorsText: "Official partner information will be published once verified.",
            becomePartner: "Become a partner",
            volunteerEyebrow: "Join the community",
            volunteerTitle: "Share your time and skills",
            volunteerText: "Volunteer opportunities will be listed once confirmed by the organization.",
            becomeVolunteer: "Become a volunteer",
            newsEyebrow: "News and events",
            newsTitle: "Latest updates",
            newsText: "Official announcements will be shared here when available.",
            allNews: "All news",
            faqEyebrow: "Frequently asked questions",
            faqTitle: "Have a question?",
            faqDraft: "Answers are based on the project information in the PDF.",
            faqQ1: "Who does the project support?",
            faqA1: "Students who are eager to learn, active, and committed to self-development. Exact selection criteria are not specified in the document.",
            faqQ2: "What is the scholarship amount?",
            faqA2: "The first cohort is listed with a monthly scholarship of 3,000 soms; the second, 4,000 soms.",
            faqQ3: "What are scholars responsible for?",
            faqA3: "Actively participating in meetings and events, completing responsibilities on time, contributing to the project, developing themselves, and supporting fellow scholars as a team.",
            faqQ4: "When and how can I apply?",
            faqA4: "The PDF does not specify the next intake dates, application process, selection stages, or required documents.",
            contactEyebrow: "Contact",
            contactTitle: "Get in touch",
            contactText: "Official contact details will be added when provided by the organization.",
            emailLabel: "Email",
            emailPlaceholder: "[Official email]",
            phoneLabel: "Phone",
            phonePlaceholder: "[Phone number]",
            addressLabel: "Address",
            addressPlaceholder: "[Office address]",
            socialPlaceholder: "Official social links will be added later.",
            contactFormTitle: "Send us a message",
            nameLabel: "Your name",
            emailField: "Email address",
            messageLabel: "Message",
            sendMessage: "Send message",
            volunteerFormTitle: "I'm interested in volunteering",
            partnerFormTitle: "Let's discuss a partnership",
            organizationLabel: "Organization / company",
            interestLabel: "Briefly describe your interest",
            submitInterest: "Submit inquiry",
            formDemoNotice: "Demo form: your input was validated but was not sent or saved. A backend service is required for real submissions.",
            emptyScholars: "No scholar profiles have been published yet.",
            emptySponsors: "No official partners have been listed yet.",
            emptyTeam: "Verified team information has not been added yet.",
            emptyVolunteers: "Volunteer information has not been published yet.",
            emptyNews: "No news articles have been published yet.",
            emptyStories: "No stories have been published yet.",
            emptyEvents: "Event details will be shared later.",
            searchLabel: "Search",
            searchPlaceholder: "Search by name or keyword",
            yearFilter: "Scholarship year",
            universityFilter: "University",
            fieldFilter: "Field of study",
            allOptions: "All",
            noResults: "No results match your search.",
            categoryFilter: "Category",
            datePending: "Publication date not provided",
            articleMissing: "This article has not been published.",
            backToNews: "Back to news",
            adminTitle: "Admin dashboard",
            adminUnavailable: "The admin dashboard is disabled without secure server-side authentication. This static demo has no login or editing features. A backend and server-enforced authorization are required to protect data.",
            adminCounts: "Statistics are calculated from the shared demo data set.",
            legalDraft: "This is a draft template only and has not been reviewed by a lawyer. Do not use it as an official policy.",
            privacyTitle: "Privacy Policy",
            termsTitle: "Terms of Use",
            footerDescription: "A scholarship initiative supporting education, growth, and community contribution.",
            privacy: "Privacy Policy",
            terms: "Terms of Use",
            copyright: "All rights reserved.",
            notFoundTitle: "Page not found",
            notFoundText: "This page does not exist or has not been published yet.",
            backHome: "Back to home",
            menuOpen: "Open menu",
            menuClose: "Close menu",
            formNameRequired: "Please enter your name.",
            formEmailRequired: "Please enter a valid email address.",
            formMessageRequired: "Please enter a message.",
            formOrganizationRequired: "Please enter your organization name.",
            formInterestRequired: "Please briefly describe your interest.",
            formSubmissionBlocked: "Form validation failed. Your information was not submitted.",
            honeypotLabel: "Leave this field empty"
        }
    };

    const data = window.SITE_DATA;
    const app = document.getElementById("app");
    const navKeys = ["home", "about", "scholarship", "team", "scholars", "volunteers", "sponsors", "news", "contact"];
    const statKeys = ["firstCohort", "secondCohort", "scholarshipRecipients", "volunteers"];
    const benefitKeys = ["benefitScholarship", "benefitNewEnvironment", "benefitNetworking", "benefitEvents", "benefitExperience", "benefitDevelopment", "benefitCommunity"];
    const responsibilityKeys = ["responsibilityParticipation", "responsibilityCommitment", "responsibilityInitiative", "responsibilityGrowth", "responsibilityTeamwork"];
    const founderTimeline = [
        ["2012", "founder2012"],
        ["2014", "founder2014"],
        ["2016", "founder2016"],
        ["2016–2020", "founder2016to2020"],
        ["2020", "founder2020Study"],
        ["2020", "founder2020Work"],
        ["founderSinceLabel", "founderSince2024"],
        ["2024–2026", "founder2024to2026"],
        ["2025", "founder2025"],
        ["2026", "founder2026"]
    ];
    const state = {
        language: localStorage.getItem("iz-kaltyr-language") || "ky",
        menuOpen: false,
        scholarQuery: "",
        scholarYear: "",
        scholarUniversity: "",
        scholarField: "",
        newsQuery: "",
        newsCategory: ""
    };

    if (!translations[state.language]) {
        state.language = "ky";
    }

    function t(key) {
        return translations[state.language][key] || translations.ky[key] || key;
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, (character) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;",
            "'": "&#39;"
        })[character]);
    }

    function recordText(record, key) {
        const value = record[key];
        if (value && typeof value === "object") {
            return value[state.language] || value.ky || "";
        }
        return value || "";
    }

    function externalUrl(value) {
        if (!value) return "";
        try {
            const url = new URL(value, window.location.href);
            if (url.protocol === "https:" || url.protocol === "http:" || url.protocol === "file:") {
                return url.href;
            }
        } catch (error) {
            if (!(error instanceof TypeError)) throw error;
            console.error("Ignoring an invalid URL in the local site data.", error);
            return "";
        }
        console.error("Ignoring a URL with an unsupported protocol in the local site data.");
        return "";
    }

    function link(route, label, className) {
        return `<a${className ? ` class="${className}"` : ""} href="#${route}">${label}</a>`;
    }

    function header() {
        const navItems = navKeys.map((key) => `<a href="#${key}"${getRoute() === key ? ' aria-current="page"' : ""}>${t(key)}</a>`).join("");
        return `
            <div class="demo-banner" role="note">${t("demoBanner")}</div>
            <header class="site-header">
              <div class="container header-inner">
                ${link("home", '<img class="brand-logo" src="public/images/logo.jpeg" alt=""><span>Из Калтыр</span>', "brand")}
                <button class="menu-toggle" type="button" aria-expanded="${state.menuOpen}" aria-controls="primary-navigation" aria-label="${state.menuOpen ? t("menuClose") : t("menuOpen")}">
                  <span></span><span></span><span></span>
                </button>
                <nav id="primary-navigation" class="primary-navigation${state.menuOpen ? " is-open" : ""}" aria-label="${t("mainNavigation")}">
                  ${navItems}
                  <label class="language-picker">
                    <span class="visually-hidden">${t("languageLabel")}</span>
                    <select id="language-select" aria-label="${t("languageLabel")}">
                      ${["ky", "ru", "en"].map((language) => `<option value="${language}"${state.language === language ? " selected" : ""}>${translations[language].languageName}</option>`).join("")}
                    </select>
                  </label>
                  ${link("scholarship", t("apply"), "button button-small button-orange")}
                </nav>
              </div>
            </header>`;
    }

    function footer() {
        return `
          <footer class="site-footer">
            <div class="container footer-grid">
              <div class="footer-brand">
                ${link("home", '<img class="brand-logo" src="public/images/logo.jpeg" alt=""><span>Из Калтыр</span>', "brand brand-light")}
                <p>${t("footerDescription")}</p>
              </div>
              <div><h2>${t("about")}</h2><ul>
                <li>${link("about", t("about"))}</li>
                <li>${link("team", t("team"))}</li>
                <li>${link("scholars", t("scholars"))}</li>
              </ul></div>
              <div><h2>${t("scholarship")}</h2><ul>
                <li>${link("scholarship", t("details"))}</li>
                <li>${link("volunteers", t("volunteers"))}</li>
                <li>${link("sponsors", t("sponsors"))}</li>
              </ul></div>
              <div><h2>${t("contact")}</h2><ul>
                <li>${link("contact", t("contact"))}</li>
                <li>${link("privacy", t("privacy"))}</li>
                <li>${link("terms", t("terms"))}</li>
              </ul></div>
            </div>
            <div class="container footer-bottom">
              <span>© ${new Date().getFullYear()} Из Калтыр. ${t("copyright")}</span>
              <span>${t("socialPlaceholder")}</span>
              <label class="footer-language"><span class="visually-hidden">${t("languageLabel")}</span><select id="footer-language-select" aria-label="${t("languageLabel")}">
                ${["ky", "ru", "en"].map((language) => `<option value="${language}"${state.language === language ? " selected" : ""}>${translations[language].languageName}</option>`).join("")}
              </select></label>
            </div>
          </footer>`;
    }

    function shell(content) {
        return `${header()}<main id="main-content" tabindex="-1">${content}</main>${footer()}`;
    }

    function pageIntro(eyebrow, title, description) {
        return `<section class="page-intro"><div class="container">
          <p class="eyebrow">${t(eyebrow)}</p><h1>${t(title)}</h1><p class="lead">${t(description)}</p>
        </div></section>`;
    }

    function emptyState(messageKey, icon) {
        return `<div class="empty-state"><span class="empty-icon" aria-hidden="true">${icon || "—"}</span><p>${t(messageKey)}</p></div>`;
    }

    function homePage() {
        const statistics = data.statistics();
        return `
          <section class="hero">
            <div class="container hero-grid">
              <div class="hero-copy">
                <p class="eyebrow eyebrow-light">${t("heroEyebrow")}</p>
                <h1>${t("heroTitle")}</h1>
                <p class="hero-lead">${t("heroText")}</p>
                <div class="hero-actions">${link("scholarship", t("learnScholarship"), "button button-orange")}${link("home#impact", t("ourImpact"), "button button-ghost")}</div>
              </div>
              <figure class="hero-visual">
                <img src="public/images/iz-kartyr.jpeg" alt="${t("photoAlt")}" fetchpriority="high" decoding="async">
                <figcaption>${t("photoNote")}</figcaption>
                <span class="hero-accent" aria-hidden="true"></span>
              </figure>
            </div>
          </section>
          <section class="stats-section" id="impact">
            <div class="container">
              <div class="section-heading section-heading-row"><div><p class="eyebrow">${t("statsEyebrow")}</p><h2>${t("statsTitle")}</h2></div><p>${t("statsNote")}</p></div>
              <div class="stats-grid">${statKeys.map((key) => `<article class="stat-card"><span class="stat-number" data-stat="${key}" data-target="${statistics[key]}">0</span><h3>${t(`stat${key[0].toUpperCase()}${key.slice(1)}`)}</h3></article>`).join("")}</div>
            </div>
          </section>
          ${aboutPreview()}
          ${scholarshipPreview()}
          ${cohortsSection()}
          ${scholarsPreview()}
          ${storiesSection()}
          ${sponsorsSection()}
          ${volunteerCallout()}
          ${newsPreview()}
          ${faqSection()}
          ${contactSection()}`;
    }

    function aboutPreview() {
        return `<section class="section"><div class="container about-grid">
          <div class="about-visual"><div class="about-visual-inner"><span class="visual-letter" aria-hidden="true">И</span><span class="visual-caption">${t("valuesText")}</span></div></div>
          <div class="about-copy"><p class="eyebrow">${t("aboutEyebrow")}</p><h2>${t("aboutTitle")}</h2><p class="lead">${t("aboutText")}</p>
            <div class="values-grid">
              <div><h3>${t("missionLabel")}</h3><p>${t("missionDraft")}</p></div>
              <div><h3>${t("visionLabel")}</h3><p>${t("visionDraft")}</p></div>
            </div>${link("about", `${t("readAbout")} <span aria-hidden="true">↗</span>`, "text-link")}
          </div>
        </div></section>`;
    }

    function scholarshipPreview() {
        return `<section class="section section-muted"><div class="container scholarship-panel">
          <div><p class="eyebrow">${t("scholarshipEyebrow")}</p><h2>${t("scholarshipTitle")}</h2><p class="lead">${t("scholarshipText")}</p></div>
          <div class="program-card">
            <div class="program-status"><span class="status-dot"></span>${t("statusUnconfirmed")}</div>
            <div class="program-detail"><h3>${t("statusLabel")}</h3><p>${t("statusUnconfirmed")}</p></div>
            <div class="program-detail"><h3>${t("deadlineLabel")}</h3><p>${t("deadlinePending")}</p></div>
            <div class="program-detail"><h3>${t("eligibilityLabel")}</h3><p>${t("eligibilityPending")}</p></div>
            ${link("scholarship", t("details"), "button button-navy")}
          </div>
        </div></section>`;
    }

    function cohortsSection() {
        return `<section class="section section-muted" id="cohorts"><div class="container">
          <div class="section-heading"><p class="eyebrow">${t("cohortsEyebrow")}</p><h2>${t("cohortsTitle")}</h2></div>
          <div class="cohort-grid">${data.cohorts.map((cohort) => {
            const details = [
                [t("cohortParticipants"), cohort.participants],
                [t("cohortMonthlyScholarship"), `${cohort.monthlyScholarship.toLocaleString(state.language)} сом`]
            ];
            if (cohort.scholarshipRecipients) details.push([t("cohortRecipients"), cohort.scholarshipRecipients]);
            if (cohort.volunteers) details.push([t("cohortVolunteers"), cohort.volunteers]);
            return `<article class="cohort-card"><p class="eyebrow">${t(cohort.id === "first" ? "cohortFirstTitle" : "cohortSecondTitle")}</p><h3>${t(cohort.id === "first" ? "cohortFirstTitle" : "cohortSecondTitle")}</h3><p>${t(cohort.id === "first" ? "cohortFirstDescription" : "cohortSecondDescription")}</p><dl>${details.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl></article>`;
          }).join("")}</div>
        </div></section>`;
    }

    function scholarsPreview() {
        return `<section class="section"><div class="container">
          <div class="section-heading section-heading-row"><div><p class="eyebrow">${t("scholarsEyebrow")}</p><h2>${t("scholarsTitle")}</h2></div><p>${t("scholarsText")}</p></div>
          ${scholarsMarkup(data.records.scholars.filter((record) => record.published && !record.deleted), false)}${link("scholars", t("allScholars"), "button button-outline")}
        </div></section>`;
    }

    function storiesSection() {
        const stories = data.records.stories.filter((story) => story.published && !story.deleted);
        const cards = stories.length
            ? `<div class="card-grid">${stories.map((story) => {
                const image = externalUrl(story.image);
                const title = recordText(story, "title");
                return `<article class="news-card">${image ? `<img class="card-image" src="${escapeHtml(image)}" alt="${escapeHtml(recordText(story, "imageAlt") || title)}" loading="lazy">` : ""}<p class="eyebrow">${escapeHtml(recordText(story, "category"))}</p><h3>${escapeHtml(title)}</h3><p>${escapeHtml(recordText(story, "excerpt"))}</p></article>`;
            }).join("")}</div>`
            : emptyState("emptyStories", "✳");
        return `<section class="section section-muted"><div class="container">
          <div class="section-heading"><p class="eyebrow">${t("storiesEyebrow")}</p><h2>${t("storiesTitle")}</h2><p class="lead">${t("storiesText")}</p></div>
          ${cards}
        </div></section>`;
    }

    function sponsorCards() {
        const sponsors = data.records.sponsors.filter((sponsor) => sponsor.visible && !sponsor.deleted);
        if (!sponsors.length) return emptyState("emptySponsors", "✳");
        return `<div class="card-grid">${sponsors.map((sponsor) => {
            const logo = externalUrl(sponsor.logo);
            const website = externalUrl(sponsor.website);
            const name = recordText(sponsor, "name");
            const displayWebsite = website ? new URL(website).host : "";
            return `<article class="partner-card">${logo ? `<img src="${escapeHtml(logo)}" alt="${escapeHtml(name)} logo" loading="lazy">` : `<div class="partner-placeholder" aria-hidden="true">${escapeHtml(name.slice(0, 1))}</div>`}<h3>${escapeHtml(name)}</h3><p>${escapeHtml(recordText(sponsor, "description"))}</p>${website ? `<a class="text-link" href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer">${escapeHtml(displayWebsite)} <span aria-hidden="true">↗</span></a>` : ""}</article>`;
        }).join("")}</div>`;
    }

    function sponsorsSection() {
        return `<section class="section"><div class="container">
          <div class="section-heading section-heading-row"><div><p class="eyebrow">${t("sponsorsEyebrow")}</p><h2>${t("sponsorsTitle")}</h2></div><p>${t("sponsorsText")}</p></div>
          ${sponsorCards()}${link("sponsors#partner-form-section", t("becomePartner"), "button button-outline")}
        </div></section>`;
    }

    function eventsList() {
        const events = data.records.events.filter((event) => event.published && !event.deleted);
        if (!events.length) return emptyState("emptyEvents", "✳");
        return `<div class="card-grid">${events.map((event) => {
            const title = recordText(event, "title");
            const image = externalUrl(event.image);
            const visual = image
                ? `<img class="card-image" src="${escapeHtml(image)}" alt="${escapeHtml(recordText(event, "imageAlt") || title)}" loading="lazy" decoding="async">`
                : `<div class="event-placeholder" aria-hidden="true">✳</div>`;
            return `<article class="news-card">${visual}<p class="eyebrow">${escapeHtml(recordText(event, "date") || t("datePending"))}</p><h3>${escapeHtml(title)}</h3><p>${escapeHtml(recordText(event, "description"))}</p></article>`;
        }).join("")}</div>`;
    }

    function volunteerCards() {
        const volunteers = data.records.volunteers.filter((volunteer) => volunteer.active && !volunteer.deleted);
        if (!volunteers.length) return emptyState("emptyVolunteers", "✳");
        return `<div class="card-grid">${volunteers.map((volunteer) => {
            const photo = externalUrl(volunteer.photo);
            const name = recordText(volunteer, "name");
            const image = photo
                ? `<img class="profile-image" src="${escapeHtml(photo)}" alt="${escapeHtml(recordText(volunteer, "photoAlt") || name)}" loading="lazy" decoding="async">`
                : `<div class="person-placeholder" aria-hidden="true">И</div>`;
            return `<article class="person-card">${image}<h3>${escapeHtml(name)}</h3><p class="eyebrow">${escapeHtml(recordText(volunteer, "position"))}</p><p>${escapeHtml(recordText(volunteer, "biography"))}</p></article>`;
        }).join("")}</div>`;
    }

    function volunteerCallout() {
        return `<section class="callout"><div class="container callout-inner">
          <div><p class="eyebrow eyebrow-light">${t("volunteerEyebrow")}</p><h2>${t("volunteerTitle")}</h2><p>${t("volunteerText")}</p></div>
          ${link("volunteers#volunteer-form-section", t("becomeVolunteer"), "button button-orange")}
        </div></section>`;
    }

    function newsPreview() {
        return `<section class="section section-muted"><div class="container">
          <div class="section-heading section-heading-row"><div><p class="eyebrow">${t("newsEyebrow")}</p><h2>${t("newsTitle")}</h2></div><p>${t("newsText")}</p></div>
          ${newsMarkup(data.records.articles.filter((article) => article.published && !article.deleted), false)}${link("news", t("allNews"), "button button-outline")}
        </div></section>`;
    }

    function faqSection() {
        return `<section class="section" id="faq"><div class="container faq-layout">
          <div><p class="eyebrow">${t("faqEyebrow")}</p><h2>${t("faqTitle")}</h2><p class="muted-text">${t("faqDraft")}</p></div>
          <div class="faq-list">${[1, 2, 3, 4].map((number) => `<details class="faq-item"><summary>${t(`faqQ${number}`)}</summary><p>${t(`faqA${number}`)}</p></details>`).join("")}</div>
        </div></section>`;
    }

    function contactDetails() {
        return `<div class="contact-details">
          <div><span class="detail-label">${t("emailLabel")}</span><p>${t("emailPlaceholder")}</p></div>
          <div><span class="detail-label">${t("phoneLabel")}</span><p>${t("phonePlaceholder")}</p></div>
          <div><span class="detail-label">${t("addressLabel")}</span><p>${t("addressPlaceholder")}</p></div>
          <p class="muted-text">${t("socialPlaceholder")}</p>
        </div>`;
    }

    function contactForm(type, titleKey) {
        const partnerFields = type === "partner";
        const volunteerForm = type === "volunteer";
        const submitKey = partnerFields || volunteerForm ? "submitInterest" : "sendMessage";
        const formId = `${type}-form`;
        return `<form class="site-form" id="${formId}" data-demo-form="${type}" novalidate>
          <h2>${t(titleKey)}</h2>
          <label>${t("nameLabel")}<input name="name" type="text" autocomplete="name" required aria-describedby="${formId}-name-error"><span class="field-error" id="${formId}-name-error" data-error-for="name"></span></label>
          <label>${t("emailField")}<input name="email" type="email" autocomplete="email" required aria-describedby="${formId}-email-error"><span class="field-error" id="${formId}-email-error" data-error-for="email"></span></label>
          ${partnerFields ? `<label>${t("organizationLabel")}<input name="organization" type="text" required aria-describedby="${formId}-organization-error"><span class="field-error" id="${formId}-organization-error" data-error-for="organization"></span></label>` : ""}
          <label>${t(partnerFields || volunteerForm ? "interestLabel" : "messageLabel")}<textarea name="message" rows="4" required aria-describedby="${formId}-message-error"></textarea><span class="field-error" id="${formId}-message-error" data-error-for="message"></span></label>
          <label class="honeypot" aria-hidden="true">${t("honeypotLabel")}<input name="website" type="text" tabindex="-1" autocomplete="off"></label>
          <button class="button button-orange" type="submit">${t(submitKey)}</button>
          <p class="form-status" role="status" aria-live="polite">${t("formDemoNotice")}</p>
        </form>`;
    }

    function contactSection() {
        return `<section class="section section-muted"><div class="container contact-layout">
          <div><p class="eyebrow">${t("contactEyebrow")}</p><h2>${t("contactTitle")}</h2><p class="lead">${t("contactText")}</p>${contactDetails()}</div>
          ${contactForm("contact", "contactFormTitle")}
        </div></section>`;
    }

    function aboutPage() {
        return `${pageIntro("aboutEyebrow", "aboutTitle", "aboutText")}${aboutPreview()}<section class="section section-muted"><div class="container"><p class="eyebrow">${t("historyLabel")}</p><h2>${t("historyLabel")}</h2><p class="lead">${t("historyPending")}</p></div></section>${storiesSection()}${teamSection()}`;
    }

    function scholarshipPage() {
        return `${pageIntro("scholarshipEyebrow", "scholarshipTitle", "scholarshipText")}
          ${cohortsSection()}
          <section class="section"><div class="container scholarship-detail-layout">
            <article class="program-card program-card-large">
              <div class="program-status"><span class="status-dot"></span>${t("statusUnconfirmed")}</div>
              <h2>${t("statusLabel")}</h2><p>${t("statusUnconfirmed")}</p>
              <h3>${t("deadlineLabel")}</h3><p>${t("deadlinePending")}</p>
              <h3>${t("benefitsLabel")}</h3><ul class="program-list">${benefitKeys.map((key) => `<li>${t(key)}</li>`).join("")}</ul>
              <h3>${t("eligibilityLabel")}</h3><p>${t("eligibilityPending")}</p>
              <h3>${t("stagesLabel")}</h3><p>${t("stagesPending")}</p>
              <h3>${t("documentsLabel")}</h3><p>${t("documentsPending")}</p>
              <h3>${t("responsibilitiesLabel")}</h3><ol class="program-list">${responsibilityKeys.map((key) => `<li>${t(key)}</li>`).join("")}</ol>
              <p class="notice-box">${t("noApplication")}</p>
            </article>
            <aside class="side-note"><h2>${t("faqTitle")}</h2><p>${t("faqDraft")}</p><a href="#home#faq" class="text-link">${t("details")} <span aria-hidden="true">↗</span></a></aside>
          </div></section>${faqSection()}`;
    }

    function teamSection() {
        const members = data.records.team.filter((member) => member.published && !member.deleted);
        const profiles = members.length
            ? `<div class="card-grid">${members.map((member) => {
                const photo = externalUrl(member.photo);
                const name = recordText(member, "name");
                return `<article class="person-card">${photo ? `<img class="profile-image" src="${escapeHtml(photo)}" alt="${escapeHtml(recordText(member, "photoAlt") || `${name} — ${recordText(member, "position")}`)}" loading="lazy" decoding="async">` : `<div class="person-placeholder" aria-hidden="true">И</div>`}<h3>${escapeHtml(name)}</h3><p class="eyebrow">${escapeHtml(recordText(member, "position"))}</p><p>${escapeHtml(recordText(member, "biography"))}</p></article>`;
            }).join("")}</div>`
            : emptyState("emptyTeam", "✳");
        const founder = `<section class="section"><div class="container founder-layout">
          <div><p class="eyebrow">${t("team")}</p><h2>${t("founderName")}</h2><p class="lead">${t("founderRole")}</p></div>
          <div><h3>${t("founderIntro")}</h3><ol class="founder-timeline">${founderTimeline.map(([year, key]) => `<li><time>${year === "founderSinceLabel" ? t(year) : year}</time><span>${t(key)}</span></li>`).join("")}</ol></div>
        </div></section>`;
        return `${founder}<section class="section section-muted"><div class="container"><div class="section-heading"><p class="eyebrow">${t("team")}</p><h2>${t("team")}</h2></div>${profiles}</div></section>`;
    }

    function directoryPage() {
        const scholars = data.records.scholars.filter((record) => record.published && !record.deleted);
        const options = (field) => [...new Set(scholars.map((record) => field === "year" ? record.year : recordText(record, field)).filter(Boolean))]
            .sort((left, right) => String(left).localeCompare(String(right), undefined, { numeric: true }));
        return `${pageIntro("scholarsEyebrow", "scholarsTitle", "scholarsText")}
          <section class="section"><div class="container">
            <div class="filter-bar">
              <label>${t("searchLabel")}<input id="scholar-search" type="search" placeholder="${t("searchPlaceholder")}" value="${escapeHtml(state.scholarQuery)}"></label>
              ${filterSelect("scholar-year", "yearFilter", options("year"), state.scholarYear)}
              ${filterSelect("scholar-university", "universityFilter", options("university"), state.scholarUniversity)}
              ${filterSelect("scholar-field", "fieldFilter", options("field"), state.scholarField)}
            </div>
            <div id="directory-results">${scholarsMarkup(scholars)}</div>
          </div></section>`;
    }

    function filterSelect(id, labelKey, values, selected) {
        return `<label>${t(labelKey)}<select id="${id}"><option value="">${t("allOptions")}</option>${values.map((value) => `<option value="${escapeHtml(value)}"${selected === value ? " selected" : ""}>${escapeHtml(value)}</option>`).join("")}</select></label>`;
    }

    function scholarsMarkup(scholars, useFilters = true) {
        const query = useFilters ? state.scholarQuery.trim().toLocaleLowerCase() : "";
        const filtered = scholars.filter((scholar) => {
            const searchable = `${recordText(scholar, "name")} ${recordText(scholar, "university")} ${recordText(scholar, "field")}`.toLocaleLowerCase();
            return (!query || searchable.includes(query))
                && (!useFilters || !state.scholarYear || String(scholar.year) === state.scholarYear)
                && (!useFilters || !state.scholarUniversity || recordText(scholar, "university") === state.scholarUniversity)
                && (!useFilters || !state.scholarField || recordText(scholar, "field") === state.scholarField);
        });
        if (!filtered.length) {
            return emptyState(scholars.length ? "noResults" : "emptyScholars", "✳");
        }
        return `<div class="card-grid">${filtered.map((scholar) => {
            const photo = externalUrl(scholar.photo);
            const name = recordText(scholar, "name");
            const image = photo
                ? `<img class="profile-image" src="${escapeHtml(photo)}" alt="${escapeHtml(recordText(scholar, "photoAlt") || name)}" loading="lazy" decoding="async">`
                : `<div class="person-placeholder" aria-hidden="true">И</div>`;
            return `<article class="person-card">${image}<p class="eyebrow">${escapeHtml(String(scholar.year || ""))}</p><h2>${escapeHtml(name)}</h2><p>${escapeHtml(recordText(scholar, "university"))}</p><p>${escapeHtml(recordText(scholar, "field"))}</p>${link(`scholar/${encodeURIComponent(scholar.id)}`, t("readStory"), "text-link")}</article>`;
        }).join("")}</div>`;
    }

    function newsPage() {
        const articles = data.records.articles.filter((article) => article.published && !article.deleted);
        const categories = [...new Set(articles.map((article) => recordText(article, "category")).filter(Boolean))].sort();
        return `${pageIntro("newsEyebrow", "newsTitle", "newsText")}
          <section class="section"><div class="container">
            <div class="filter-bar">
              <label>${t("searchLabel")}<input id="news-search" type="search" placeholder="${t("searchPlaceholder")}" value="${escapeHtml(state.newsQuery)}"></label>
              ${filterSelect("news-category", "categoryFilter", categories, state.newsCategory)}
            </div><div id="news-results">${newsMarkup(articles)}</div>
          </div></section>`;
    }

    function newsMarkup(articles, useFilters = true) {
        const query = useFilters ? state.newsQuery.trim().toLocaleLowerCase() : "";
        const filtered = articles.filter((article) => {
            const text = `${recordText(article, "title")} ${recordText(article, "excerpt")} ${recordText(article, "category")}`.toLocaleLowerCase();
            return (!query || text.includes(query)) && (!useFilters || !state.newsCategory || recordText(article, "category") === state.newsCategory);
        });
        if (!filtered.length) {
            return emptyState(articles.length ? "noResults" : "emptyNews", "✳");
        }
        return `<div class="card-grid">${filtered.map((article) => {
            const image = externalUrl(article.image);
            const title = recordText(article, "title");
            return `<article class="news-card">${image ? `<img class="card-image" src="${escapeHtml(image)}" alt="${escapeHtml(recordText(article, "imageAlt") || title)}" loading="lazy">` : ""}<p class="eyebrow">${escapeHtml(recordText(article, "category"))}</p><h2>${link(`article/${encodeURIComponent(article.id)}`, escapeHtml(title))}</h2><p>${escapeHtml(recordText(article, "excerpt"))}</p><span>${escapeHtml(recordText(article, "date") || t("datePending"))}</span></article>`;
        }).join("")}</div>`;
    }

    function volunteersPage() {
        return `${pageIntro("volunteerEyebrow", "volunteerTitle", "volunteerText")}
          <section class="section section-muted"><div class="container split-layout">
            <div><h2>${t("volunteers")}</h2>${volunteerCards()}<h2>${t("statEvents")}</h2>${eventsList()}</div>
            <div id="volunteer-form-section">${contactForm("volunteer", "volunteerFormTitle")}</div>
          </div></section>`;
    }

    function sponsorsPage() {
        return `${pageIntro("sponsorsEyebrow", "sponsorsTitle", "sponsorsText")}
          <section class="section"><div class="container"><h2>${t("sponsors")}</h2>${sponsorCards()}</div></section>
          <section class="section section-muted"><div class="container contact-layout"><div><p class="eyebrow">${t("becomePartner")}</p><h2>${t("partnerFormTitle")}</h2><p class="lead">${t("sponsorsText")}</p></div><div id="partner-form-section">${contactForm("partner", "partnerFormTitle")}</div></div></section>`;
    }

    function contactPage() {
        return `${pageIntro("contactEyebrow", "contactTitle", "contactText")}
          <section class="section section-muted"><div class="container contact-layout">${contactDetails()}${contactForm("contact", "contactFormTitle")}</div></section>
          <section class="section"><div class="container"><h2>${t("addressLabel")}</h2><div class="map-placeholder">${t("addressPlaceholder")}</div></div></section>`;
    }

    function legalPage(titleKey) {
        return `${pageIntro(titleKey, titleKey, "legalDraft")}<section class="section"><div class="container legal-draft"><p>${t("legalDraft")}</p></div></section>`;
    }

    function adminPage() {
        return `${pageIntro("adminTitle", "adminTitle", "adminUnavailable")}
          <section class="section"><div class="container admin-notice"><span class="notice-icon" aria-hidden="true">!</span><div><h2>${t("adminTitle")}</h2><p>${t("adminUnavailable")}</p><p class="muted-text">${t("adminCounts")}</p></div></div></section>`;
    }
    function routeContent(route) {
        if (route === "home") return homePage();
        if (route === "about") return aboutPage();
        if (route === "scholarship") return scholarshipPage();
        if (route === "team") return `${pageIntro("team", "team", "emptyTeam")}${teamSection()}`;
        if (route === "scholars") return directoryPage();
        if (route === "volunteers") return volunteersPage();
        if (route === "sponsors") return sponsorsPage();
        if (route === "sponsors#partner-form") return sponsorsPage();
        if (route === "news") return newsPage();
        if (route === "contact") return contactPage();
        if (route.startsWith("scholar/")) {
            const id = route.slice("scholar/".length);
            const scholar = data.records.scholars.find((record) => record.id === id && record.published && !record.deleted);
            if (scholar) {
                const photo = externalUrl(scholar.photo);
                const name = recordText(scholar, "name");
                return `${pageIntro("scholarsEyebrow", "scholarsTitle", "scholarsText")}<section class="section"><article class="container article-body"><p class="eyebrow">${escapeHtml(String(scholar.year || ""))}</p><h1>${escapeHtml(name)}</h1><p>${escapeHtml(recordText(scholar, "university"))}</p><p>${escapeHtml(recordText(scholar, "field"))}</p>${photo ? `<img class="article-image" src="${escapeHtml(photo)}" alt="${escapeHtml(recordText(scholar, "photoAlt") || name)}">` : ""}<p>${escapeHtml(recordText(scholar, "story"))}</p>${link("scholars", t("allScholars"), "text-link")}</article></section>`;
            }
            return `<section class="not-found"><div class="container"><h1>${t("notFoundTitle")}</h1><p>${t("articleMissing")}</p>${link("scholars", t("allScholars"), "button button-outline")}</div></section>`;
        }
        if (route === "privacy") return legalPage("privacyTitle");
        if (route === "terms") return legalPage("termsTitle");
        if (route === "admin") return adminPage();
        if (route.startsWith("article/")) {
            const id = route.slice("article/".length);
            const article = data.records.articles.find((record) => record.id === id && record.published && !record.deleted);
            if (article) {
                const image = externalUrl(article.image);
                const title = recordText(article, "title");
                return `${pageIntro("newsEyebrow", "newsTitle", "datePending")}<section class="section"><article class="container article-body"><p class="eyebrow">${escapeHtml(recordText(article, "category"))}</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(recordText(article, "date") || t("datePending"))}</p>${image ? `<img class="article-image" src="${escapeHtml(image)}" alt="${escapeHtml(recordText(article, "imageAlt") || title)}">` : ""}<p>${escapeHtml(recordText(article, "body") || recordText(article, "excerpt"))}</p>${link("news", t("backToNews"), "text-link")}</article></section>`;
            }
            return `${pageIntro("newsEyebrow", "articleMissing", "articleMissing")}<section class="section"><div class="container">${link("news", t("backToNews"), "button button-outline")}</div></section>`;
        }
        return `<section class="not-found"><div class="container"><p class="eyebrow">404</p><h1>${t("notFoundTitle")}</h1><p>${t("notFoundText")}</p>${link("home", t("backHome"), "button button-orange")}</div></section>`;
    }

    function getRoute() {
        const hash = window.location.hash.replace(/^#\/?/, "");
        return (hash.split("?")[0] || "home").split("#")[0];
    }

    function render() {
        const route = getRoute();
        app.innerHTML = shell(routeContent(route));
        document.documentElement.lang = state.language;
        document.querySelector(".skip-link").textContent = t("skipLink");
        document.title = `${route === "home" ? t("homeTitle") : t(navKeys.includes(route) ? route : "notFoundTitle")} — Из Калтыр`;
        document.querySelector('meta[name="description"]').content = t("metaDescription");
        document.querySelector('meta[property="og:description"]').content = t("metaDescription");
        document.querySelector('meta[property="og:title"]').content = `${t("homeTitle")} — Из Калтыр`;
        document.querySelector('meta[property="og:locale"]').content = { ky: "ky_KG", ru: "ru_RU", en: "en_US" }[state.language];
        bindControls();
        animateStatistics();
    }

    function animateStatistics() {
        const counters = [...document.querySelectorAll("[data-stat]")];
        if (!("IntersectionObserver" in window)) {
            counters.forEach((counter) => { counter.textContent = counter.dataset.target; });
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const counter = entry.target;
                observer.unobserve(counter);
                const target = Number(counter.dataset.target);
                const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                if (reducedMotion || target === 0) {
                    counter.textContent = String(target);
                    return;
                }
                const start = performance.now();
                const duration = 750;
                const update = (now) => {
                    const progress = Math.min((now - start) / duration, 1);
                    counter.textContent = String(Math.round(target * progress));
                    if (progress < 1) window.requestAnimationFrame(update);
                };
                window.requestAnimationFrame(update);
            });
        }, { threshold: 0.4 });
        counters.forEach((counter) => observer.observe(counter));
    }

    function setLanguage(language) {
        if (!translations[language]) return;
        const scrollPosition = window.scrollY;
        state.language = language;
        try {
            localStorage.setItem("iz-kaltyr-language", language);
        } catch (error) {
            if (!(error instanceof DOMException)) throw error;
            console.error("Could not save the selected language in local storage.", error);
        }
        render();
        window.scrollTo(0, scrollPosition);
    }

    function bindControls() {
        const languageSelect = document.getElementById("language-select");
        languageSelect.addEventListener("change", (event) => setLanguage(event.target.value));
        document.getElementById("footer-language-select").addEventListener("change", (event) => setLanguage(event.target.value));

        const menuToggle = document.querySelector(".menu-toggle");
        menuToggle.addEventListener("click", () => {
            state.menuOpen = !state.menuOpen;
            const navigation = document.getElementById("primary-navigation");
            navigation.classList.toggle("is-open", state.menuOpen);
            menuToggle.setAttribute("aria-expanded", String(state.menuOpen));
            menuToggle.setAttribute("aria-label", state.menuOpen ? t("menuClose") : t("menuOpen"));
        });

        document.querySelectorAll(".primary-navigation a").forEach((anchor) => {
            anchor.addEventListener("click", (event) => {
                state.menuOpen = false;
                const targetSeparator = anchor.hash.indexOf("#", 1);
                if (targetSeparator >= 0) {
                    event.preventDefault();
                    window.location.hash = anchor.hash.slice(1);
                }
            });
        });

        const scholarSearch = document.getElementById("scholar-search");
        if (scholarSearch) {
            scholarSearch.addEventListener("input", (event) => {
                state.scholarQuery = event.target.value;
                document.getElementById("directory-results").innerHTML = scholarsMarkup(data.records.scholars.filter((record) => record.published && !record.deleted));
            });
            [["scholar-year", "scholarYear"], ["scholar-university", "scholarUniversity"], ["scholar-field", "scholarField"]].forEach(([elementId, stateKey]) => {
                document.getElementById(elementId).addEventListener("change", (event) => {
                    state[stateKey] = event.target.value;
                    document.getElementById("directory-results").innerHTML = scholarsMarkup(data.records.scholars.filter((record) => record.published && !record.deleted));
                });
            });
        }

        const newsSearch = document.getElementById("news-search");
        if (newsSearch) {
            newsSearch.addEventListener("input", (event) => {
                state.newsQuery = event.target.value;
                document.getElementById("news-results").innerHTML = newsMarkup(data.records.articles.filter((record) => record.published && !record.deleted));
            });
            document.getElementById("news-category").addEventListener("change", (event) => {
                state.newsCategory = event.target.value;
                document.getElementById("news-results").innerHTML = newsMarkup(data.records.articles.filter((record) => record.published && !record.deleted));
            });
        }

        document.querySelectorAll("[data-demo-form]").forEach((form) => {
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                validateDemoForm(form);
            });
            form.querySelectorAll("input, textarea").forEach((field) => {
                field.addEventListener("input", () => {
                    const error = form.querySelector(`[data-error-for="${field.name}"]`);
                    if (error) error.textContent = "";
                });
            });
        });
    }

    function validateDemoForm(form) {
        const formData = new FormData(form);
        const values = Object.fromEntries(formData.entries());
        const errors = {};
        const status = form.querySelector(".form-status");
        if (String(values.website || "").trim()) {
            status.textContent = t("formSubmissionBlocked");
            return;
        }
        if (!String(values.name || "").trim()) errors.name = t("formNameRequired");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(values.email || "").trim())) errors.email = t("formEmailRequired");
        if (!String(values.message || "").trim()) errors.message = form.dataset.demoForm === "partner" || form.dataset.demoForm === "volunteer" ? t("formInterestRequired") : t("formMessageRequired");
        if (form.dataset.demoForm === "partner" && !String(values.organization || "").trim()) errors.organization = t("formOrganizationRequired");

        Object.entries(errors).forEach(([fieldName, message]) => {
            const error = form.querySelector(`[data-error-for="${fieldName}"]`);
            if (error) error.textContent = message;
        });
        if (Object.keys(errors).length) {
            status.textContent = Object.values(errors)[0];
            const firstInvalid = form.querySelector(`[name="${Object.keys(errors)[0]}"]`);
            if (firstInvalid) firstInvalid.focus();
            return;
        }
        status.textContent = t("formDemoNotice");
        form.reset();
    }

    window.addEventListener("hashchange", () => {
        state.menuOpen = false;
        render();
        const targetId = window.location.hash.split("#").slice(2).join("#");
        if (targetId) {
            const target = document.getElementById(decodeURIComponent(targetId));
            if (target) target.scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    });

    render();
}());
