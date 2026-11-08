(function () {
    "use strict";

    const students = [
    {
        "created_at":  "19:13:57",
        "full_name":  "Жолдубаева Айгелем",
        "cohort":  "1-агым",
        "university":  "Ала - Тоо ",
        "language":  "Кыргыз Орус англис",
        "photo_url":  "https://drive.google.com/open?id=1ArUEoJIgBed1-e7YjwzA2ehRr1cdapPc"
    },
    {
        "created_at":  "19:14:50",
        "full_name":  "Абдиллаева Нурмира Анарбаевна",
        "cohort":  "1-агым",
        "university":  "Ала-Тоо ",
        "language":  "Кыргыз тили- эне тил, Орус тили-эркин, Англис тили-B1, немецкий-А2",
        "photo_url":  "https://drive.google.com/open?id=1j1hUJJ_jeDnEXP-NgMrIuOA1ZFp-1S6h"
    },
    {
        "created_at":  "22:33:57",
        "full_name":  "Абдимиталипова Мадина Алмазбековна ",
        "cohort":  "2-агым",
        "university":  "КММА",
        "language":  "Кыргыз тили, орус тили, англис тили (В1), немис тили(А1)",
        "photo_url":  ""
    },
    {
        "created_at":  "11:31:08",
        "full_name":  "Абдыбакыева Сезим Булутбековна",
        "cohort":  "1-агым",
        "university":  "КММА",
        "language":  "Кыргыз тили - эркин. Орус тили - эркин. Англис тили - А2. Түрк тили- В1",
        "photo_url":  "https://drive.google.com/open?id=10xdl0P3coaEu-phITAad7fZrTTZWUtii17SSuhyCars"
    },
    {
        "created_at":  "15:39:51",
        "full_name":  "Абдыкалыкова Айсезим Абдыкалыковна",
        "cohort":  "1-агым",
        "university":  "КУУ",
        "language":  "Кыргыз тили,орус тили,англис тили ,турк тили,казак тили ",
        "photo_url":  "https://drive.google.com/open?id=1tsiQapPqa0UezdanTfLniFrOdWYBEz-k"
    },
    {
        "created_at":  "18:58:56",
        "full_name":  "Абдыракманов Сыймык Жолдошбекович ",
        "cohort":  "2-агым",
        "university":  "АУЦА",
        "language":  "Кыргыз тили, Орус тили, Англис тили ",
        "photo_url":  "https://drive.google.com/open?id=1x2KPugXfyD3gfk7N-BZnh2OSj6bDzxa6"
    },
    {
        "created_at":  "22:58:58",
        "full_name":  "Абдыракманов Сыймык Жолдошбекович ",
        "cohort":  "2-агым",
        "university":  "АУЦА",
        "language":  "Кыргыз тили, Орус тили, Англис тили ",
        "photo_url":  "https://drive.google.com/open?id=1H1lAArAbiJ9Dsx0gYB0ujqVP892mz4E6"
    },
    {
        "created_at":  "12:15:15",
        "full_name":  "Акматбек Абдрахманов",
        "cohort":  "2-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз,түрк жана орус тилдерин билем",
        "photo_url":  "https://drive.google.com/open?id=1Iyk0SpKGxOuXXA4fsa8n_qawueQ6QO6s"
    },
    {
        "created_at":  "19:40:39",
        "full_name":  "Акпаралиева Сабина Анваровна",
        "cohort":  "2-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз тили,англис тили,турк тили",
        "photo_url":  "https://drive.google.com/open?id=1x39VGks4PHaG1W-xLBh6hUBCghVxCUp8"
    },
    {
        "created_at":  "20:22:56",
        "full_name":  "Алыкулова Селима Мирбековна ",
        "cohort":  "1-агым",
        "university":  "КРСУ ",
        "language":  "Кыргызча-эркин,орусча-эркин ,английский Б2, немецкий Б2,",
        "photo_url":  "https://drive.google.com/open?id=1wbWWeXg90ANCgE6BVI4RQAFbZrbZEgkN"
    },
    {
        "created_at":  "17:56:25",
        "full_name":  "Анарбаева Альбина ",
        "cohort":  "1-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз Орус Немец Турк ",
        "photo_url":  "https://drive.google.com/open?id=1EqXCQM7JAk3OEHRsTeDqzj4laA2hR6A-"
    },
    {
        "created_at":  "19:14:43",
        "full_name":  "Араббоева Нурайым",
        "cohort":  "2-агым",
        "university":  "КГУ",
        "language":  "Кыргыз-тили Орус-тили",
        "photo_url":  "https://drive.google.com/open?id=1MpwXWJku50M5J_L5xxFHK6E6lKznUKjk"
    },
    {
        "created_at":  "17:26:18",
        "full_name":  "Арапбай к Айдай",
        "cohort":  "1-агым",
        "university":  "ЭКУ",
        "language":  "Кыргыз тили, орус тили, англис тили жана араб тили ",
        "photo_url":  "https://drive.google.com/open?id=1Me8YicMs_HK5whoCI6zI6gOkwM5zO3fC"
    },
    {
        "created_at":  "17:58:22",
        "full_name":  "Арапбай кызы Айдай ",
        "cohort":  "1-агым",
        "university":  "ЭКУ",
        "language":  "Кыргыз орус англис Араб",
        "photo_url":  "https://drive.google.com/open?id=15kGZpsBXtyzphCBlxbll5BOemn5e4Aya"
    },
    {
        "created_at":  "22:33:59",
        "full_name":  "Арслан Тагайбеков",
        "cohort":  "1-агым",
        "university":  "МАНАС ",
        "language":  "Кыргызча, түркчө, орусча, тыва тили",
        "photo_url":  "https://drive.google.com/open?id=1Nduo13spZHJGCgp1tQG-z4RFSpzPHroA"
    },
    {
        "created_at":  "21:45:09",
        "full_name":  "Арыналиева Элиза ",
        "cohort":  "1-агым",
        "university":  "КНУКИ",
        "language":  "Кыргыз тили,орус англис жана турк тили",
        "photo_url":  "https://drive.google.com/open?id=1YRZHnImVPzwdpvDnRPCrmtpGhPluC-Mh"
    },
    {
        "created_at":  "6:53:29",
        "full_name":  "Бакасова Сүйдүмкан Баридиновна",
        "cohort":  "1-агым",
        "university":  "КГМА ",
        "language":  "Кыргыз тили- эркин. Орус тили (В1),англис тили (В1)",
        "photo_url":  "https://drive.google.com/open?id=133kzRbatvMifJQgXElrw5IcJEJoL9k-R"
    },
    {
        "created_at":  "17:08:32",
        "full_name":  "Бекбооева Азима Бекбооевна ",
        "cohort":  "2-агым",
        "university":  "АЛА-ТОО",
        "language":  "Кыргыз, орус  , англис , түрк , немис А-2, казак,бир аз испан",
        "photo_url":  "https://drive.google.com/open?id=1-LG0lL3wUXq1ouk1ZZjWtNgNUYKBmx7I"
    },
    {
        "created_at":  "23:23:17",
        "full_name":  "Болотканова Бегимай",
        "cohort":  "1-агым",
        "university":  "КМУ",
        "language":  "Кыргыз тили кытай тили орус тили англис тили",
        "photo_url":  "https://drive.google.com/open?id=11T_6OEaRr6fm8Y4hX9JIr9wAJs2egsDM"
    },
    {
        "created_at":  "10:56:01",
        "full_name":  "Болотова Айке Арстанбековна",
        "cohort":  "2-агым",
        "university":  "КМТУ",
        "language":  "Кыргыз тили, Орус тили, Турк тили , Англис тили(А2)",
        "photo_url":  "https://drive.google.com/open?id=1_wP-Kn0kr150dUjrKRZJkcu5eOpGYcff"
    },
    {
        "created_at":  "21:06:36",
        "full_name":  "Дайырова Азиза Нурбековна ",
        "cohort":  "1-агым",
        "university":  "КУУ",
        "language":  "Кыргыз тили-С1 , орус тили-С1 , англис тили-Б2, корей тили-(А1-А2) , немис тили- А1 ",
        "photo_url":  "https://drive.google.com/open?id=1UlA1V65EFwTIIV3P8PwP2R1ijku4rGhC"
    },
    {
        "created_at":  "19:38:43",
        "full_name":  "Довлатов Байсал Жолдошалиев ",
        "cohort":  "2-агым",
        "university":  "ЭКУ",
        "language":  "Кыргыз тили , Озбек тили , Англис тили ",
        "photo_url":  "https://drive.google.com/open?id=1GU-XQpaj9Ovc4I60WD_Zx79vhH95N_cB"
    },
    {
        "created_at":  "15:08:36",
        "full_name":  "Дөөлөталиев Ынтымак",
        "cohort":  "2-агым",
        "university":  "КГУСТА",
        "language":  "Англ, орус , ",
        "photo_url":  "https://drive.google.com/open?id=1gQgOGW8ve-UvmwOCD58DrWz_oy3FX5JK"
    },
    {
        "created_at":  "20:47:34",
        "full_name":  "Жакыпова Жамила Нурпазыловна",
        "cohort":  "1-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз тили (эне тилим), Түрк тили С1, Орус тили В2, Англис тили А1, Француз тили А2",
        "photo_url":  ""
    },
    {
        "created_at":  "23:19:37",
        "full_name":  "Жаныбекова Алиса Жаныбековна ",
        "cohort":  "2-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз тили,Турк тили",
        "photo_url":  "https://drive.google.com/open?id=1O-896M6M8uVF5D99kxoqhLjvS4xU6JMJ"
    },
    {
        "created_at":  "8:35:03",
        "full_name":  "Жаңыбаева Адинай Болотбековна ",
        "cohort":  "2-агым",
        "university":  "МАНАС ",
        "language":  "Кыргызча эне тил, Орус тил C2 (олимпиадалардын жеңүүчүсү), англис тили B2, Түрк тили B2",
        "photo_url":  "https://drive.google.com/open?id=1wOvDvxJLxOjI2msoLZo-Wjvgu7TNfTk0"
    },
    {
        "created_at":  "22:21:35",
        "full_name":  "Жарашбекова Лейла Жолдошбековна",
        "cohort":  "2-агым",
        "university":  "АУЦА",
        "language":  "Кыргыз, Орус, Англис тилдери",
        "photo_url":  "https://drive.google.com/open?id=1yNUUVmWoOcbSExNO-6TMyvoIXINMY0As"
    },
    {
        "created_at":  "15:41:41",
        "full_name":  "Женишбек кызы Асылзат",
        "cohort":  "1-агым",
        "university":  "БГУ",
        "language":  "Кыргыз тили -эркин, орус тили- С1, турецкий-В1, английский- В1",
        "photo_url":  "https://drive.google.com/open?id=1h0D_koyH0r6iLXkZtauQkPf2i-jM-Trf"
    },
    {
        "created_at":  "17:56:08",
        "full_name":  "Жолдубаева Айгелем Жеңишбековна",
        "cohort":  "1-агым",
        "university":  "Ала-Тоо",
        "language":  "Кыргыз,орус,англис тили B2,немецкийА1",
        "photo_url":  ""
    },
    {
        "created_at":  "11:00:42",
        "full_name":  "Жороева Жибек Абдумуталибовна ",
        "cohort":  "2-агым",
        "university":  "БГУ",
        "language":  "Кыргыз тили, Орус тили, Англис тили ",
        "photo_url":  "https://drive.google.com/open?id=1HqcU9aJV_whWdlAFKhGveuJ1bBeCcXZJ"
    },
    {
        "created_at":  "11:19:49",
        "full_name":  "Жумабекова Албина Токттбековна",
        "cohort":  "1-агым",
        "university":  "КУУ",
        "language":  "Кыргыз тили- эне тилим, Орус тили В2, Англис тили А2, Түрк тили А2",
        "photo_url":  "https://drive.google.com/open?id=1iZ213lPgK8I-VY92sIP2wLslUL9udXlc"
    },
    {
        "created_at":  "21:15:34",
        "full_name":  "Жумаева Мадина Зикирияевна ",
        "cohort":  "1-агым",
        "university":  "КУВЕЙТ",
        "language":  "Кыргыз тили-эне тилим, Араб тили-В1, Англис тили-В1, Орус-эркин",
        "photo_url":  "https://drive.google.com/open?id=1cymq29pPnF2bWsNFTk9_hU1LPzp4Zy-k"
    },
    {
        "created_at":  "22:18:14",
        "full_name":  "Жунушев Бекназар Бердибекович ",
        "cohort":  "1-агым",
        "university":  "КММА",
        "language":  "Кыргыз тили,Орус тили, Англис тили",
        "photo_url":  ""
    },
    {
        "created_at":  "23:54:58",
        "full_name":  "Зайирбеков Арашан Русланович",
        "cohort":  "2-агым",
        "university":  "КМУ",
        "language":  "Кыргыз, Орус, Чет тили  А2",
        "photo_url":  "https://drive.google.com/open?id=1NUbrnluKIuVGPx-tLiZ9J5MNbrro0k6J"
    },
    {
        "created_at":  "18:16:35",
        "full_name":  "Исмайылбекова Айназик Эсенбековна ",
        "cohort":  "1-агым",
        "university":  "АГУПКР - магистратура",
        "language":  "Кыргыз тили, орус тили, немис тили, англис тили",
        "photo_url":  "https://drive.google.com/open?id=1otZGYpmnYTnLW5StFL_Rq76YAolAcu2w"
    },
    {
        "created_at":  "19:05:30",
        "full_name":  "Кадырбеков Рамазан Кадырбекович ",
        "cohort":  "1-агым",
        "university":  "КМТУ",
        "language":  "Кыргыз Тили, Орус Тили, Англис Тили(А2)",
        "photo_url":  "https://drive.google.com/open?id=1qmNypsVAe8DQDRU_16zhWErZT13BZOfm"
    },
    {
        "created_at":  "23:14:19",
        "full_name":  "Кадыркулова Айжаркын Кадыркуловна",
        "cohort":  "2-агым",
        "university":  "КГУ",
        "language":  "Кыргыз тили, орус тили, англис тили ( b2) кытай тили ( в базовом уровне)",
        "photo_url":  "https://drive.google.com/open?id=1V-6Z9HfMu5d-GbeQBEXbg3At3evrCqlD"
    },
    {
        "created_at":  "22:04:35",
        "full_name":  "Кадырова Айжан Орозбаевна",
        "cohort":  "1-агым",
        "university":  "БГУ",
        "language":  "1.Кыргыз тил-эне тили 2.Орус тил -B1,3.Англис тил-B1, 4Кытай тили-hsk 3,Түрк тили.",
        "photo_url":  "https://drive.google.com/open?id=10xJXtAtAa-uMy6U4CNi05-JwcMMLpkc7"
    },
    {
        "created_at":  "22:26:53",
        "full_name":  "Кадырова Айжан Орозбаевна",
        "cohort":  "1-агым",
        "university":  "БГУ",
        "language":  "1.Кыргыз тил-эне тил,2.Орус тили -средний 3.Англис тил-B1,Кытай тил-hsk3,Түрк тили",
        "photo_url":  "https://drive.google.com/open?id=12WOFLzPZVXx-heXffKp1PYcwMYeUE8s3"
    },
    {
        "created_at":  "10:53:37",
        "full_name":  "Камчыбекова Шахзода",
        "cohort":  "2-агым",
        "university":  "БГУ ",
        "language":  "Кыргыз узбек орус англис араб",
        "photo_url":  "https://drive.google.com/open?id=1EiuK33oLcPLiIXht5cUtf5jSolT-S0dd"
    },
    {
        "created_at":  "17:39:19",
        "full_name":  "Касмалиева Медина Каныбековна",
        "cohort":  "2-агым",
        "university":  "НИУ",
        "language":  "орус тили, кыргыз тили",
        "photo_url":  "https://drive.google.com/open?id=1Rq_Lt2MsOFQim52QWDu4xvRP9LKnk9NR"
    },
    {
        "created_at":  "19:11:36",
        "full_name":  "Көчөкбаев Алишер Анарбекович ",
        "cohort":  "2-агым",
        "university":  "КГТУ ",
        "language":  "Немец тили ",
        "photo_url":  "https://drive.google.com/open?id=1s1LuBrfVgdBs1H4IWKkgv6ohYZArXl0Q"
    },
    {
        "created_at":  "20:42:34",
        "full_name":  "Кубанычбекова Гаухар Мырзашовна",
        "cohort":  "1-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз тил - эне тил; Русский язык- B2; Английский-C1; Турецкий - С1; Китайский - начинающий ",
        "photo_url":  "https://drive.google.com/open?id=11WgHNVeIwSimtVbMqsHnUqmY6nwjaNRh"
    },
    {
        "created_at":  "18:25:27",
        "full_name":  "Кубатали кызы Айжамал",
        "cohort":  "1-агым",
        "university":  "КМУ",
        "language":  "Кыргыз тили - эне тилим, Англис тили B2, Япон тили N4",
        "photo_url":  "https://drive.google.com/open?id=1pG_mtoNxIbCqxAy-5-6EMEA0cYkbK-Xd"
    },
    {
        "created_at":  "22:34:51",
        "full_name":  "Кубатов Ноорузбек Сабыркулович",
        "cohort":  "2-агым",
        "university":  "КУУ",
        "language":  "Кыргыз, орус, түрк, немец",
        "photo_url":  "https://drive.google.com/open?id=1iuSC8j4v2Wr0p8uTllWm6elYadPjPceh"
    },
    {
        "created_at":  "21:54:05",
        "full_name":  "Нурмухамед к Даткагүл",
        "cohort":  "1-агым",
        "university":  "74-мектепте иштейм",
        "language":  "Эне тил орус тили  англис тили",
        "photo_url":  "https://drive.google.com/open?id=1ilAXjGAWtSMOnpC4_KPjCMJnM0K8Dgwp"
    },
    {
        "created_at":  "13:23:24",
        "full_name":  "Кудайкулов Нурсултан Мансуралиевич ",
        "cohort":  "2-агым",
        "university":  "КГМА",
        "language":  "Англис А2 Турк2 Орус тили",
        "photo_url":  "https://drive.google.com/open?id=1L9w-IQzn7CXVEtAT3nLUpWOzalbgI4iL"
    },
    {
        "created_at":  "12:59:54",
        "full_name":  "Макамбаева Диёра Авазбековна ",
        "cohort":  "1-агым",
        "university":  "КМУ",
        "language":  "Кыргыз тили, өзбек тили, орус тили, түрк тили,англис тили А2",
        "photo_url":  "https://drive.google.com/open?id=1S-Rx5pC049DgGnyoSOZSPfOHq3T3lqGy"
    },
    {
        "created_at":  "19:12:06",
        "full_name":  "Маманова Аэлита Нуртилековна",
        "cohort":  "1-агым",
        "university":  "ДИПЛОМАТИЯЛЫК АКАДЕМИЯ",
        "language":  "Кыргыз тили, Орус тили, Англис тили, Түрк тили, Араб тили",
        "photo_url":  "https://drive.google.com/open?id=1tGI7qVVcL45H4SXwz5uBYmy3O5fWEmSu"
    },
    {
        "created_at":  "11:12:13",
        "full_name":  "Маматкулова Жазгүл Абдурасуловна ",
        "cohort":  "1-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз тили эне тил, орус тили В1, англис тили В1, түрк тили С1",
        "photo_url":  "https://drive.google.com/open?id=1ribF5TOYcfFosYHKq9wyyJfiS0q0HLkS"
    },
    {
        "created_at":  "22:30:45",
        "full_name":  "Мирлан кызы Арууке",
        "cohort":  "1-агым",
        "university":  "КМУ",
        "language":  "Эне тили-эркин,орус тили-А2 немис тилиА-2 кытай тилиА-2",
        "photo_url":  "https://drive.google.com/open?id=1sMki4Aur9sQ-IrpMjujNt3y6yznAsDOw"
    },
    {
        "created_at":  "19:11:50",
        "full_name":  "Момунбеков Диннур Момунбекович",
        "cohort":  "2-агым",
        "university":  "КМУ",
        "language":  "Кыргыз тили Орус тили англис тили",
        "photo_url":  "https://drive.google.com/open?id=1ULQ1nIQ5o619asiuVxdxgMyL65vI8siZ"
    },
    {
        "created_at":  "11:08:10",
        "full_name":  "Музаалиева Милана Ажыбековна ",
        "cohort":  "1-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз тили жогорку деңгээлде, Орус тили B1, Түрк тили С1, Англис тили А2",
        "photo_url":  "https://drive.google.com/open?id=1Jo5K1XX9ctm5kbeDkEEt1_o59YtdYaEa"
    },
    {
        "created_at":  "19:42:38",
        "full_name":  "Мундузбаева Гүлзат Жетилгеновна",
        "cohort":  "1-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз тили, орус тили, англис тили, түрк тили, кытай тили",
        "photo_url":  "https://drive.google.com/open?id=1YYkTWKQYV8TxozHMNOGFFmVZsoIjLBUW"
    },
    {
        "created_at":  "23:42:57",
        "full_name":  "Мээрим Нурдиллаева Баатыралиевна ",
        "cohort":  "2-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз тили-С1 Түрк тили-С1 Өзбек тили -С1 Англис тили - В2 Орус тили-В2",
        "photo_url":  "https://drive.google.com/open?id=157ETsibsIF-Dwa9jqm0bxXcBbHzZpBEB"
    },
    {
        "created_at":  "11:52:27",
        "full_name":  "Нуриллаева Акылай Алмидиновна ",
        "cohort":  "2-агым",
        "university":  "Ишеналы Арабаев КМУ",
        "language":  "Кыргыз тили, Орус тили, Турк тили, Англис тили, Китай тили(бираз)",
        "photo_url":  "https://drive.google.com/open?id=1dUE0ctPKJdVennGVC0qzi3Hh5WXXYPfL"
    },
    {
        "created_at":  "22:22:26",
        "full_name":  "Нурмухамед к Даткагүл",
        "cohort":  "1-агым",
        "university":  "БГУ",
        "language":  "Кыргыз тил англис тил орус тили",
        "photo_url":  "https://drive.google.com/open?id=1NbiRVJ0Vq2iRy1SDZqn2AWf8KtztIZnJ"
    },
    {
        "created_at":  "12:37:49",
        "full_name":  "Омурова Айданек Улукбековна",
        "cohort":  "1-агым",
        "university":  "КУУ",
        "language":  "Жакшы",
        "photo_url":  "https://drive.google.com/open?id=1fj-_p0vUkosoCVSqXothlujonlF64hOw"
    },
    {
        "created_at":  "21:12:56",
        "full_name":  "Орозобекова Жазгүл Бердибековна",
        "cohort":  "1-агым",
        "university":  "КММА",
        "language":  "Кыргыз тили,русский язык,английский язык-А2,турецкий язык-А1",
        "photo_url":  "https://drive.google.com/open?id=1gNwZ0hvb1NMVKoTsVZTRdlbX_oj4ZfX3"
    },
    {
        "created_at":  "15:19:03",
        "full_name":  "Орузбеков Самат Меербекович ",
        "cohort":  "2-агым",
        "university":  "Кыргыз Республикасынын Башкы Прокуратурасынын  академиясында",
        "language":  "Кыргыз, орус, английский, узбек, казак, немец тилин азыркы учурда уйронуп жатам ",
        "photo_url":  "https://drive.google.com/open?id=1gTtxE8VM16ZbMgDxuiKjJLhkNgBIPJBZ"
    },
    {
        "created_at":  "11:53:41",
        "full_name":  "Осконов Азимбек Расулович ",
        "cohort":  "2-агым",
        "university":  "КУУ",
        "language":  "Кыргыз тили, орус тили, англис тили, турк тили, немис тили.",
        "photo_url":  "https://drive.google.com/open?id=11gbg12JZo-PaQEEbXj5gkfhokCuhZDpU"
    },
    {
        "created_at":  "22:36:47",
        "full_name":  "Парманасова Акылай Тыныбековна",
        "cohort":  "1-агым",
        "university":  "КУУ",
        "language":  "Кыргыз, орус, түрк тили",
        "photo_url":  "https://drive.google.com/open?id=1fBAEPHmg1-A907eL7qUHtVBAFmfm1Tr8"
    },
    {
        "created_at":  "13:30:40",
        "full_name":  "Рахматиллаев Адахан Замирбекович ",
        "cohort":  "1-агым",
        "university":  "КММА ",
        "language":  "Орус тил, кыргыз тил ",
        "photo_url":  "https://drive.google.com/open?id=15Sq4l654WHm8Yin9AaTyLBANMpGqFDUZ"
    },
    {
        "created_at":  "12:01:50",
        "full_name":  "Руслан уулу Нурболот ",
        "cohort":  "2-агым",
        "university":  "АУЦА",
        "language":  "Кыргыз тили, Орус тили, Англис тили",
        "photo_url":  "https://drive.google.com/open?id=1fFpaZDkMMbH8K6-4tAHB0CcBPnnnAKh3"
    },
    {
        "created_at":  "19:19:45",
        "full_name":  "Русланов Бекзат Русланович",
        "cohort":  "2-агым",
        "university":  "КНАУ",
        "language":  "Кыргыз,орус",
        "photo_url":  ""
    },
    {
        "created_at":  "19:12:44",
        "full_name":  "Сайпидинова Бүүзайнаб Жамалидиновна",
        "cohort":  "2-агым",
        "university":  "КММА",
        "language":  "Кыргыз тили,орус тили,турк тили",
        "photo_url":  "https://drive.google.com/open?id=19hcEE8Qf-uEomHGn_TDW05iH1auLXvOE"
    },
    {
        "created_at":  "10:56:21",
        "full_name":  "Соодонбекова Альбина Тимуровна",
        "cohort":  "2-агым",
        "university":  "БГУ",
        "language":  "Кыргыз, орус тили эркин. Кошумча англис немис тилдери.",
        "photo_url":  "https://drive.google.com/open?id=1C0xCWVEua5i1PnPrXyrby4kspX0w0iaQ"
    },
    {
        "created_at":  "19:50:05",
        "full_name":  "Сулайманова Малика Талайбековна",
        "cohort":  "2-агым",
        "university":  "МАНАС ",
        "language":  "кыргыз тили, орус тили, англис тили(B2), түрк тили(C1), немис тили (А2)",
        "photo_url":  "https://drive.google.com/open?id=1weh2oMIW7bCdzM6O6d6XiHM3GIDtoGWM"
    },
    {
        "created_at":  "11:13:32",
        "full_name":  "Султанмуратова Алина Абдивалиевна",
        "cohort":  "2-агым",
        "university":  "КГТУ ",
        "language":  "Кыргыз тили, орус тили, немец тили баштапкы деңгээл",
        "photo_url":  "https://drive.google.com/open?id=1_oC0z6Ky_CDEh0bQ0JtL_eAnIyyBtOlU"
    },
    {
        "created_at":  "15:03:59",
        "full_name":  "Таалайбекова Айжаркын Таалайбековна",
        "cohort":  "2-агым",
        "university":  "ЭКУ",
        "language":  "Кыргыз тил , Орус тил , Араб тил",
        "photo_url":  "https://drive.google.com/open?id=1SDryajSjVrRgmU_ElcfJRtfZiXpnVDX9"
    },
    {
        "created_at":  "20:58:49",
        "full_name":  "Тажидинова Айдай Арыстанбековна",
        "cohort":  "1-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз тили - эне тилим; Орус тили - С1; Түрк тили - С1; Немис тили - В1; Англис тили - А2",
        "photo_url":  ""
    },
    {
        "created_at":  "23:23:43",
        "full_name":  "Тажидинова Айдай Арыстанбековна",
        "cohort":  "1-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз тили-эне тилим, орус тили - С1, түрк тили - С1, немис тили - Б1 жана англис тили - А2",
        "photo_url":  ""
    },
    {
        "created_at":  "19:26:16",
        "full_name":  "Талантбекова Айбийке Толубековна ",
        "cohort":  "1-агым",
        "university":  "КРСУ ",
        "language":  "кыргыз тил,орус тили b2,англис тили b1,турк тиои b1,француз тили а1",
        "photo_url":  "https://drive.google.com/open?id=1OYDJxFiw8uUwtc6XleHFnPlIg7i4nudb"
    },
    {
        "created_at":  "22:34:18",
        "full_name":  "Тилдобеков Арген",
        "cohort":  "2-агым",
        "university":  "КУУ",
        "language":  "Кыргыз тил, Орус тили",
        "photo_url":  "https://drive.google.com/open?id=1dD9-woOIsAEQ-arrFXif0_MR59Cs038H"
    },
    {
        "created_at":  "22:29:07",
        "full_name":  "Тиленов Жыргалбек Авазбекович",
        "cohort":  "2-агым",
        "university":  "КМУ",
        "language":  "Кыргызча / орусча / англисче",
        "photo_url":  "https://drive.google.com/open?id=130VqH5nc1t3kCSF1TaX4nkDXKwYJTx9h"
    },
    {
        "created_at":  "20:37:45",
        "full_name":  "Токторалиев Мадамбек ",
        "cohort":  "1-агым",
        "university":  "КГТУ ",
        "language":  "Кыргыз тил, Орус тили,  Немис тили.",
        "photo_url":  "https://drive.google.com/open?id=1u7iQsn23AGhTTB2dXnVcd6We7X_y0DWe"
    },
    {
        "created_at":  "17:40:47",
        "full_name":  "Төрөбаев Артур Уланбекович",
        "cohort":  "2-агым",
        "university":  "КМУ",
        "language":  "Кыргыз тили, орус тили, англис тили А2",
        "photo_url":  ""
    },
    {
        "created_at":  "19:11:16",
        "full_name":  "Төрөкулова Рахима Төрөкуловна",
        "cohort":  "1-агым",
        "university":  "МАНАС ",
        "language":  "Орус тили - эркин, кыргыз тили -эркин , түрк тили (В1) , англис тили (А2) ,француз тили ( А1)",
        "photo_url":  ""
    },
    {
        "created_at":  "10:54:11",
        "full_name":  "Туратбекова Гүлзана Ринатовна",
        "cohort":  "1-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз тили-эне тилим, орус тили-С1, англис тили-В1, түрк тили-С1",
        "photo_url":  "https://drive.google.com/open?id=129zQIBuHh3Ax9LlgfDmo2jU2OtV4g1Qo"
    },
    {
        "created_at":  "22:31:54",
        "full_name":  "Турганбаев Курманбек",
        "cohort":  "2-агым",
        "university":  "КУУ ",
        "language":  "Кыргыз тили, Орус тили",
        "photo_url":  "https://drive.google.com/open?id=1rpnvdfiY3jOREGBdnn9rpJJWrQTWO2uJ"
    },
    {
        "created_at":  "11:14:15",
        "full_name":  "Турсунбаева Асема Акылбековна ",
        "cohort":  "2-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз тили, Орус тили, Англис тили, Турк тили ",
        "photo_url":  "https://drive.google.com/open?id=1nvHg2zrtny3EUhtczCZzY1Lpi_M3xMSM"
    },
    {
        "created_at":  "22:41:47",
        "full_name":  "Уланова Даткаайым Улановна ",
        "cohort":  "2-агым",
        "university":  "КГТУ ",
        "language":  "Кыргыз тили, орус тили",
        "photo_url":  "https://drive.google.com/open?id=1V6ET3UP-grVE93WQQpW85czYlWy2ljuy"
    },
    {
        "created_at":  "20:48:12",
        "full_name":  "Худжамбердиева Асель Усмоналиевна",
        "cohort":  "1-агым",
        "university":  "КММА",
        "language":  "Кыргыз тили — эне тили. Орус тили —  (C1). Англис тили — (B1). Немис тили —(B1)",
        "photo_url":  "https://drive.google.com/open?id=1Cr2MOq8Zt4LNdpctK7BIBoWGIQJ2C_FV"
    },
    {
        "created_at":  "17:54:14",
        "full_name":  "Шарим кызы Гулнура ",
        "cohort":  "1-агым",
        "university":  "МАНАС ",
        "language":  "Кыргыз , Орус , Турк Немис Англис",
        "photo_url":  "https://drive.google.com/open?id=1-UJFjX0oxMQr8h6Gi0vtd7BW6bpPvMQg"
    },
    {
        "created_at":  "19:15:19",
        "full_name":  "Шаршенбекова Азима ",
        "cohort":  "2-агым",
        "university":  "КРЭАУ ",
        "language":  "Кыргыз тили ,орус тили, англис тили pre intermediate/ корей тили B2",
        "photo_url":  "https://drive.google.com/open?id=1hSkppMYVS1xnP445bpf1P5Qq6duXhRoN"
    },
    {
        "created_at":  "19:21:30",
        "full_name":  "Шаршенова Гүлназик Бекболотовна ",
        "cohort":  "1-агым",
        "university":  "АУЦА ",
        "language":  "Кыргыз тили-эркин,орус тили B1,англис тили B2",
        "photo_url":  "https://drive.google.com/open?id=1-k1v2jfDR7Rx5sjm6dynTbuiNAKbsdKH"
    },
    {
        "created_at":  "19:12:12",
        "full_name":  "Ысманова Асел ",
        "cohort":  "1-агым",
        "university":  "Ала-Тоо ",
        "language":  "Кыргыз тили, орус тили, англис тили, турк тили",
        "photo_url":  ""
    },
    {
        "created_at":  "13:25:06",
        "full_name":  "Эркиналиева Жумайида Кубанычбековна",
        "cohort":  "1-агым",
        "university":  "КУУ",
        "language":  "Кыргыз тили- Эне тили, Орус тили-B2, Англис тили- B1, Немис тили-А2, Корей тили-А1",
        "photo_url":  ""
    },
    {
        "created_at":  "10:57:15",
        "full_name":  "Эрмаматова Арууке ",
        "cohort":  "1-агым",
        "university":  "БИК",
        "language":  "Кыргыз тили , орус тили ,англис тили, араб тили ,түрк тили ,француз тили",
        "photo_url":  null
    }
];
    window.STUDENTS = Object.freeze(students.map((student) => Object.freeze(student)));
}());
