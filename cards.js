document.addEventListener("DOMContentLoaded", function () {
  let cardsInformations = [
    {
      id: 1,
      jobName: "KREDİT MÜTƏXƏSSİSİ",
      companyName: "Lombard",
      category: "Maliyyə",
      kind: "Kredit mütəxəssisi",
      staj: "1 ildən aşağı",
      startTime: "İyul 18, 2024",
      endTime: "Avqust 17, 2024",
      education: "Ali",
      age: "20 - 30 yaş",
      text1: "İş saatı: 09:00-dan -20:00-dək",
      text2: "Həftədə bir gün istirahət.",
      text3: "İlk aylar maaş 500 manat.",
      text4: "İş qabiliyyətinə uyğun növbəti aylarda maaş artır.",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1:
        "Lombarda kredit mütəxəssisi vakansiyasına xanım işçi tələb olunur",
      demand2: "Əsasən ali təhsilli",
      demand3: "Məsuliyyətli",
      demand4:
        "Ofis proqramlar və rus dili biliyi olan şəxslərə üstünlük verilir",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "500-800 AZN",
      contact: "TƏBRİZ",
      phoneNumber: "(012) 433-65-87",
      email: "m79071441@gmail.com",
      dates: "07.18.2024",
      date: "18.07.2024",
    },
    {
      id: 2,
      jobName: "SIĞORTA MÜTƏXƏSSİSİ",
      companyName: "MAX insurance",
      category: "Maliyyə",
      kind: "Sığorta",
      staj: "1 ildən aşağı",
      startTime: "İyun 24, 2024",
      endTime: "İyul 24, 2024",
      education: "Orta",
      age: "19 - 35 yaş",
      text1: "Əmək müqaviləsi əsasında",
      text2: "İş qrafiki: I-V günlər (10:30-dan - 17:00-dək)",
      text3:
        "Şənbə və bazar günləri, dövlət bayramları və milli hüzn günü qeyri-iş günləridir",
      text4:
        "Yekun əmək haqqı: Namizədin təcrübə, bilik və bacarıqlarına əsasən təyin olunur",
      text5: "Əmək haqqından əlavə olaraq rüblük və illik bonus verilir",
      text6: "Ünvan : Şamil Əzizbəyov 88 (Nizami mt)",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Yalnız Xanım namizədlər",
      demand2: "Yaş: 23-60",
      demand3: "Təhsil: Ali və ya orta texniki",
      demand4: "İş təcrübəsi: müvafiq sahədə 1 (bir) ildən çox",
      demand5: "Kompyüter bilikləri: MS office yaxşı səviyyədə bilməsi",
      demand6:
        "Dil bilikləri: azərbaycan dili (əla), rus dili və ingilis dili (arzuolunandır)",
      demand7: "Ünsiyyət qurmaq bacarığı",
      demand8: "Stressə davamlılıq və münaqişələri həll etmə bacarığı",
      demand9: "Yüksək səviyyədə nitq qabiliyyəti, özünütəqdimat bacarığı",
      demand10: "Səlis, aydın, əmin danışıq tərzi",
      prices: 500,
      price: "500-700 AZN",
      contact: "İslam Balabəyov",
      phoneNumber: "(070) 275-55-05",
      email: "maxinsurance.sigorta@gmail.com",
      dates: "07.24.2024",
      date: "24.07.2024",
    },
    {
      id: 3,
      jobName: "AUDİT KÖMƏKÇİSİ",
      companyName: "Aqro-Vest DC MMC",
      category: "Maliyyə",
      kind: "Audit",
      staj: "1 ildən aşağı",
      startTime: "İyul 19, 2024",
      endTime: "Avqust 18, 2024",
      education: "Orta",
      age: "20 - 30 yaş",
      text1: "Həftədə 5 gün iş günü",
      text2: "08:00-dan-17:00-dək iş saatı",
      text3: "Gündəlik nahar pulu verilir",
      text4: "Ofis ünvanı Bakıxanov qəs.",
      text5:
        "Gündəlik marketleri ziyarət edib verilən tapşırıqlar əsasında yoxlamalar ediləcək",
      text6:
        "Satış nümayəndələrin səhvlərini aşkar edib düzəlməsi üçün tapşırıqlar veriləcəkdir.",
      text7: "Əmək haqqı fiks 500 (+200 bonu tapşırıqlar əsasında) AZN",
      text8: "055 400 44 24 (whatsapp)",
      text9: "055 400 44 84 (zəng)",
      text10: "",
      demand1: "Yalnız xanım namizədlər",
      demand2: "Gənc, dinamik və öyrənməyə meyilli olması",
      demand3: "Problem həll edə bilmə qabiliyyəti",
      demand4: "Komanda ilə birgə işləyə bimək",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "500-700",
      contact: "Elvin",
      phoneNumber: "(055) 400-44-84",
      email: "hr@agrowestdc.az",
      dates: "07.19.2024",
      date: "19.07.2024",
    },
    {
      id: 4,
      jobName: "BAŞ MÜHASİB",
      companyName: "Azərbaycan Sənaye Korporasiyası ASC",
      category: "Maliyyə",
      kind: "Mühasibat",
      staj: "3 ildən 5 ilə qədər",
      startTime: "İyul 22, 2024",
      endTime: "Avqust 21, 2024",
      education: "Ali",
      age: "25 - 45 yaş",
      text1: "Əmək haqqı: müsahibə əsasında müəyyən olunacaqdır",
      text2: "İş qrafiki : yarım iş günü (5 iş günü)",
      text3: "İş saatları: 09:00-dan - 13:00-dək",
      text4:
        "İş yeri: “ASK Security” MMC (Bakı şəh., Tbilisi pr. ev 35, məh.1033)",
      text5:
        "Göstərilən tələblərə cavab verən namizədlərdən CV-lərinin mövzu yerinə “Baş mühasib” yazaraq hr@ask.gov.az ünvanına göndərilməsi xahiş olunur. Yalnız tələblərə cavab verən namizədlər müsahibəyə dəvət olunacaqlar.",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1:
        "Tam ali iqtisadi təhsil (mühasibatlıq və ya maliyyə ixtisası üzrə) Magistr, MBA arzu olunandır",
      demand2: "Baş mühasib kimi 3 ildən az olmayaraq iş təcrübəsi",
      demand3:
        "Səlis azərbaycan dili (ingilis və yarus dili bilikləri arzuolunandır)",
      demand4: "Komandada işləmək bacarığı",
      demand5:
        "Word, Excel, Power Point və Outlook proqramlarını yaxşı səviyyədə bilmək",
      demand6:
        "PMS sertifikatına malik olmaq, digər sertifikatlarının olması üstünlükdür.",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 600,
      price: "600-900 AZN",
      contact: "İnsan resursları şöbəsi",
      phoneNumber: "(077) 277-11-79",
      email: "hr@ask.gov.az",
      dates: "07.22.2024",
      date: "22.07.2024",
    },
    {
      id: 5,
      jobName: "MALİYYƏÇİ",
      companyName: "Kral ət və ət məhsulları",
      category: "Maliyyə",
      kind: "Maliyyə analizi",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 22, 2024",
      endTime: "Avqust 21, 2024",
      education: "Ali",
      age: "minimum 22 yaş",
      text1:
        "1c 8.2 üzərindən satış və anbar əməliyyatların aparılması, rəhbərliyin verdiyi tapşırıqları vaxtında yerinə yetirməsi",
      text2: "İş yeri: Babək pr. 53 A",
      text3:
        "İş qrafiki/ Bazar ertəsi - şənbə günləri, (şənbə növbəli iş günü)",
      text4: "Əmək haqqı:1000 Azn (artan maaş)",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Xanım namizəd",
      demand2: "Dil biliyi: azərbaycan dili, rus dili (arzuolunandır)",
      demand3: "Təhsil: ali təhsil",
      demand4: "Müvafiq sahədə minimum 1 il aktiv təcrübəsinin olması",
      demand5: "1C əməliyyat sistemində sərbəst işləmə bacarığı",
      demand6: "Ofis proqramlarını (Word, Excel) bilmək",
      demand7: "Fərdi qaydada və komandada işləmək bacarığına malik olmaq",
      demand8:
        "Məsuliyyətli və məsələlərin həllində təşəbbüsün göstərilməsi bacarığına malik olması",
      demand9: "Analitik təhlil etmə qabiliyyəti",
      demand10: "İşə yaradıcı və təşəbbüskar yanaşma",
      prices: 1000,
      price: "1000 AZN",
      contact: "İnsan resursları şöbəsi",
      phoneNumber: "-",
      email: "hr@hakanfoods.az",
      dates: "07.22.2024",
      date: "22.07.2024",
    },
    {
      id: 6,
      jobName: "Təcrübəçi",
      companyName: " Azər Türk Bank",
      category: "Maliyyə",
      kind: "Bank xidməti",
      staj: "1 ildən aşağı",
      startTime: "İyul 12, 2024",
      endTime: "Avqust 31, 2024",
      education: "Ali",
      age: "18-30 yaş",
      text1:
        "Bankın məhsullarının bazarda müvafiq müştərilərə tanıdılması yollarının öyrənilməsi;",
      text2:
        "KOB müştəri bazasının idarə edilməsi və satış bacarıqlarının öyrənilməsi;",
      text3:
        "Bank tərəfindən öyrədilən bilik və bacarıqların mənimsənilməsi və təcrübi tətbiqi;",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Ali təhsil (iqtisadi təhsil arzuolunandır);",
      demand2:
        "Azərbaycan dilində səlis danışma, yazma bacarığı (xarici dili arzuolunandır);",
      demand3: "Analitik düşünmə və təhlil bacarığı;",
      demand4: "Ünsiyyət qurma bacarığı;",
      demand5: "Komandada işləyə bilmə bacarığı;",
      demand6: "Ərazidə işləyə bilmə bacarığı;",
      demand7: "Stresə davamlılıq.",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "500 AZN",
      contact: "Cahan",
      phoneNumber: "(+994)12 404 14 45",
      email: "azerturkbank@gmail.com",
      dates: "07.12.2024",
      date: "12.07.2024",
    },
    {
      id: 7,
      jobName: "XƏZİNƏDAR",
      companyName: "Sinteks",
      category: "Maliyyə",
      kind: "Kassir",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 22, 2024",
      endTime: "Avqust 21, 2024",
      education: "Ali",
      age: "20 - 30 yaş",
      text1:
        "Bu vəzifənin rolu pul vəsaitlərinin və məhsulların hərəkətinə nəzarət etməkdir.",
      text2:
        "Kassa aparatlarının və diqər avadanlıqların düzgün işləməsinə nəzarət edir.",
      text3: "Mağazanın təmizlənməsinə nəzarət edir.",
      text4: "Mağazada məhsulları qəbul edir və yoxlamalarda iştirak edir.",
      text5:
        "Mağazada mövcud olan məhsulların və inventarların saxlanmasına və hərəkətinə nəzarət edir.",
      text6: "Kassa əməliyyatlarını həyata keçirir.",
      text7:
        "Gün ərzində yekun hesabat aparır, inkassasiya aparır və POS-terminal qəbzlərini İtkinlərin qarşısının alınması şöbəsinə təhvil verir.",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Kassa aparatı və Pos terminalın istismar qaydaları",
      demand2: "Müştəri xidmətinin əsasları",
      demand3: "MS Office və 1C proqramları",
      demand4: "",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 600,
      price: "600-700 AZN",
      contact: "İnsan Resursları",
      phoneNumber: "(051) 235-78-74",
      email: "recruitment.sales@sinteks.com",
      dates: "07.22.2024",
      date: "22.07.2024",
    },
    {
      id: 8,
      jobName: "Aparıcı mütəxəssis",
      companyName: "AERA",
      category: "Maliyyə",
      kind: "İqtisadçı",
      staj: "3 ildən az olmayaraq",
      startTime: "31.03.2024",
      endTime: "01.04.2024",
      education: "Ali",
      age: "25 - 40",
      text1:
        "Müvafiq sahədə bazar münasibətlərinin qurulması üçün təkliflər verir;",
      text2:
        "Şöbəyə daxil olan ərizə, təklif və şikayətlərin araşdırılması və cavablandırılmasını təmin edir;",
      text3:
        "Şöbə müdirinin tapşırığı ilə hesabatlar, arayışlar və məlumatlar hazırlayır.",
      text4: "Enerji sahəsində iqtisadi təkliflər hazırlayır.",
      text5:
        "Müvafiq sahədə tariflərin (qiymətlərin) iqtisadi cəhətdən əsaslılığı, səmərəliliyi və bazarın tənzimlənməsi baxımından optimallığının müəyyənləşdirilməsi üçün araşdırmalar aparır, subyektlərin tarifləri barəsində qabaqcıl təcrübəyə əsaslanmış hesabatlar hazırlayır və təkliflər verir; ",
      text6:
        "Müvafiq sahənin səmərəli fəaliyyətini və istehlakçılara aşağı tariflə (qiymətlə) yüksək keyfiyyətli xidmətlərin göstərilməsi üçün balanslaşdırılmış investisiya yönümlü tarif mexanizmlərini işləyir;",
      text7:
        "Elektrik və istilik enerjisi, habelə qaz təchizatı üzrə qiymətlərin (tariflərin) tənzimlənməsi məsələləri ilə bağlı xarici ölkələrin qabaqcıl təcrübəsini öyrənir; ",
      text8:
        "Enerji sahəsində iqtisadi siyasətin formalaşdırılmasına dair təkliflər hazırlayır və qanunvericiliklə nəzərdə tutulmuş qaydada həyata keçirilməsini Agentliyin Aparatının struktur bölmələri ilə birgə təmin edir;",
      text9:
        "Enerji sahəsində iqtisadi, tarif və statistika siyasətinin təkmilləşdirilməsi ilə əlaqədar təkliflər hazırlayır və həyata keçirilməsi ilə bağlı tədbirlər görür;",
      text10:
        "Agentliyin Aparatının struktur bölmələri ilə birlikdə qüvvədə olan qanunvericiliyə uyğun olaraq, enerji tənzimləmə xidmətləri üzrə tarif siyasətinin dünya təcrübəsini və ölkənin sosial-iqtisadi inkişafı nəzərə alınmaqla formalaşdırılması istiqamətlərinin müəyyən edilməsində və tariflərin təkmilləşdirilməsi ilə əlaqədar təkliflərin hazırlanmasında iştirak edir;",
      demand1:
        "“İqtisadiyyat və idarəetmə ixtisasları qrupu” istiqamətləri üzrə ali təhsili və ixtisas profilinə uyğun 3 ildən az olmayaraq iş təcrübəsi;",
      demand2: "Yaş həddi 25-40 aralığı;",
      demand3:
        "Azərbaycan dilini səlis, ingilis dili  yüksək səviyyədə bilməli və rus dili arzu olunandı;",
      demand4: "Fikrini düzgün ifadə etmə və savadlı  yazı qabiliyyəti;",
      demand5:
        "Maliyyə Hesabatlarının Beynəlxalq Standarları və Korporativ Maliyyə sahəsi üzrə orta səviyyədə biliklərə malik olmalıdır;",
      demand6:
        "İFRS və Korporativ Maliyyə sahəsi üzrə yüksək səviyyədə biliklərə malik olmalıdır ",
      demand7:
        "ACCA, CFA və ya digər beynəlxalq maliyyə sertifikatlarının olması arzuolunandır ",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 800,
      price: "800 AZN",
      contact: "Akif",
      phoneNumber: "-",
      email: "akif123@gmail.com",
      dates: "03.31.2024",
      date: "31.03.2024",
    },
    {
      id: 9,
      jobName: "MÜHASİB KÖMƏKÇİSİ",
      companyName: "ATA PACK MMC",
      category: "Maliyyə",
      kind: "Digər",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 19, 2024",
      endTime: "Avqust 18, 2024",
      education: "Ali",
      age: "25 - 30 yaş",
      text1:
        "Hesab-fakturaları, qaimə-fakturaları və digər xərc sənədlərini tərtib edilməsi",
      text2:
        "Bank əməliyyatlarının icra edilməsi, həmçinin onların uçotunun aparılması",
      text3: "Əmək haqqının hesablanması və ödənilməsi.",
      text4:
        "Debitor və kreditor hesablarının aparılması və onlara nəzarət edilməsi",
      text5: "5 günlük iş qrafiki",
      text6: "Ünvan: Sabunçu rayonu, Balaxanı Sənaye Parkı",
      text7: "Nahar, rabitə xərci və servis şirkət tərəfindən təqdim olunur",
      text8: "Ə/h 500-550 manat",
      text9: "",
      text10: "",
      demand1:
        "Ali təhsil (maliyyə, iqtisadiyyat və ya iqtisadiyyatla bağlı digər sahələr)",
      demand2: "Mövcud sahədə 1-3 il iş təcrübəsi",
      demand3:
        "Vergi Məcəlləsi, müvafiq normativ-hüquqi sənədlər, Müəssisə daxili normativ sənədlər",
      demand4: "Microsoft Office",
      demand5: "Logo, e-taxes proqramlarında sərbəst işləməyi üstünlükdür",
      demand6:
        "Şəxsi keyfiyyətlər: Məsuliyyətli, diqqətli, ünsiyyətcil və çalışqan",
      demand7: "Komandada işləmək bacarığına malik olan",
      demand8: "Yalnız xanım namizədlər",
      demand9:
        "Maraqlanan namizədlər mövzu yerində “Mühasib köməkçisi” yazmaqla öz CV-lərini info@atapack.az ünvanına göndərə bilərlər",
      demand10: "",
      prices: 500,
      price: "500-550 AZN",
      contact: "Fidan xanım",
      phoneNumber: "(050) 596-08-06",
      email: "info@atapack.az",
      dates: "07.19.2024",
      date: "19.07.2024",
    },
    {
      id: 10,
      jobName: "SMM MENECER",
      companyName: "Corn Advertising MMC",
      category: "Marketinq",
      kind: "Marketinq menecment",
      staj: "1 ildən 3 ilə qədər",
      startTime: "yul 19, 2024",
      endTime: "Avqust 18, 2024",
      education: "Ali",
      age: "25 - 35 yaş",
      text1: "Rəqəmsal marketinq sahəsində ən azı 1 il iş təcrübəsi",
      text2: "Kreativ yanaşmaya sahib və yeniliklərə açıq olmalı",
      text3: "Reklam yerləşdirmə bacarığı",
      text4: "Kontent hazırlama bacarığı",
      text5: "Səlis ünsiyyət bacarığı",
      text6: "Müştərilər ilə etik davranış qaydalarına əməl etmək",
      text7: "İş saatları həftə içi 5 gün saat 09:00-dan-18:00-dək",
      text8:
        "Rəqəmsal marketinq üzrə təcrübə, bütün növ dijital platformalarda işləmə bacarığı (Facebook, Instagram, Linkedin, YouTube, Tik-Tok)",
      text9:
        "Aylıq post-plan hazırlanması, kreativ ideyaların verilməsi, kampaniyaların düşünülməsi",
      text10:
        "Bazarın, rəqiblərin araşdırılması, analizlərin aparılması və tələbatın müəyyənləşdirilməsi",
      demand1:
        "Rəqəmsal marketinq üzrə təcrübə, bütün növ dijital platformalarda işləmə bacarığı (Facebook, Instagram, Linkedin, YouTube, Tik-Tok)",
      demand2:
        "Aylıq post-plan hazırlanması, kreativ ideyaların verilməsi, kampaniyaların düşünülməsi",
      demand3:
        "Bazarın, rəqiblərin araşdırılması, analizlərin aparılması və tələbatın müəyyənləşdirilməsi",
      demand4:
        "İşə qarşı məsuliyyətli olmalı, işlərini planlı şəkildə icra etməli, vaxtında təhvil verməlidir",
      demand5:
        "Bazar trendlərinin, yeniliklərin izlənilməsi və onların səhifələrdə tətbiqi",
      demand6: "İnstagram və Meta üzərindən reklam və retargetinq bilikləri",
      demand7:
        "Müştərilərin müraciətlərinin operativ şəkildə cavablandırılması",
      demand8: "Aylıq hesabatların hazırlanması",
      demand9:
        "Əmək haqqı namizədin sahə üzrə təcrübə və bilikləri əsasında müəyyən olunacaq",
      demand10: "",
      prices: 500,
      price: "500-700 AZN",
      contact: "Nazim",
      phoneNumber: "(051) 935-07-53",
      email: "vacancy@corn.az",
      dates: "07.19.2024",
      date: "19.07.2024",
    },
    {
      id: 11,
      jobName: "ÇAĞRI MƏRKƏZİ OPERATORU",
      companyName: "Baku Estate Agency",
      category: "Marketinq",
      kind: "İctimayətlə əlaqələr",
      staj: "1 ildən aşağı",
      startTime: "İyun 27, 2024",
      endTime: "İyul 27, 2024",
      education: "Orta",
      age: "19 - 40 yaş",
      text1: "Mövcud müştəri bazasına zənglər",
      text2:
        "Formalaşdırılması və korporativ müştərilərlə işgüzar əlaqələrin qurulması",
      text3: "Günlük plan üzrə sosial hesablara nəzarət və cavablandırma",
      text4: "Müştərilərin ehtiyaclarının müəyyənləşdirilməsi",
      text5: "Bazar araşdırması",
      text6: "Yeni məlumatların bazaya əlavəolunması",
      text7: "İşinə qarşı məsuliyyətli yanaşmaq",
      text8:
        "İş prosesində müəssisə rəhbərliyinin tapşırıqlarını vaxtında və lazımi qaydada icra etmək",
      text9: "Fix maaş sistemidir",
      text10: "Saat 09:00-dan - 18:00-dək",
      demand1: "Yalnız Xanım namizədlər",
      demand2: "Təhsil: orta",
      demand3: "Yaş: 19 - 40",
      demand4: "Satış sahəsində geniş bacarıqlara malik olan",
      demand5: "Bakı şəhərini yaxşı tanımalı",
      demand6: "Səlis və aydın nitq, sistemli təqdimat bacarığı",
      demand7:
        "Şirkətin iş proseslərinə uyğun qaydada və komanda ilə işləmə bacarığı",
      demand8: "Dil bilikləri: azərbaycan dili- səlis",
      demand9: "CV formalarınızı Whatsapp üzərindən göndərməyiniz xahiş olunur",
      demand10: "",
      prices: 500,
      price: "500-600 AZN",
      contact: "Ceyhun",
      phoneNumber: "(055) 209-59-21",
      email: "bakuestateagency@gmail.com",
      dates: "06.27.2024",
      date: "27.06.2024",
    },
    {
      id: 12,
      jobName: "VİDEOQRAF",
      companyName: "MediaBalans",
      category: "Marketinq",
      kind: "Reklam",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 10, 2024",
      endTime: "Avqust 09, 2024",
      education: "Ali",
      age: "23 - 36 yaş",
      text1: "Video çəkimlərinin aparılması",
      text2: "Video montajlarının yüksək peşəkarlıqla edilməsi",
      text3:
        "Tapşırılan işlərin vaxtında, keyfiyyətli həll olunmasını təmin etmək",
      text4:
        "Veriləcək qeydlər və materiallar əsasında videoların hazırlanması",
      text5: "İş rejimi: Həftənin 5 günü 09:00-dan 18:00-dək",
      text6: "Servis",
      text7: "Nahar şirkət tərəfindən verilir.",
      text8:
        "Zəhmət olmasa CV-lərinizi göndərərkən mövzu yerinə Videoqraf qeyd edərsiniz.",
      text9: "",
      text10: "",
      demand1: "3 illik iş təcrübəsi olmalı",
      demand2: "Stresli vəziyyətləri idarə edə bilmək",
      demand3: "İş və vaxt idarəsini düzgün bacarmaq",
      demand4: "Komandayla işləmə bacarığı",
      demand5: "Xarici görünüşə diqqət göstərmək",
      demand6:
        "Adobe After Effects, Adobe Premiere, - proqramlarında işləmək bacarığı",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 1100,
      price: "1100-1400 AZN",
      contact: "Azad",
      phoneNumber: "(012) 404-19-99",
      email: "cv@mediabalans.com",
      dates: "07.10.2024",
      date: "10.07.2024",
    },
    {
      id: 13,
      jobName: "KOPİRAYTER",
      companyName: "Medical Group",
      category: "Marketinq ",
      kind: "Kopiraytinq",
      staj: "1 ildən aşağı",
      startTime: "İyul 09, 2024",
      endTime: "Avqust 08, 2024",
      education: "Ali",
      age: "23 - 40 yaş",
      text1: "5 günlük iş qrafiki. 09:00-dan - 18:00-dək",
      text2: "Məzmun ideyanın yaradılması və yazılması",
      text3: "Kreativ postlar üçün ideyaların verilməsi",
      text4: "Mətnlərin və sosial media postlarının yazılması",
      text5: "Araşdırma və trendlərə uyğun kontent yaradılması",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Yazılı və şifahi Azərbaycan dili biliyi (səlist)",
      demand2: "Rus və ingilis dili biliyi orta səviyyə üstünlükdür",
      demand3: "Yaradıcı düşüncə qabiliyyəti",
      demand4: "Məsuliyyətli və diqqətli olmaq",
      demand5: "Komandada işləmə bacarığı",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "500-800 AZN",
      contact: "Züleyxa xanım",
      phoneNumber: "(055) 966-55-44",
      email: "ofeliya@medicalgroup.az",
      dates: "07.09.2024",
      date: "09.07.2024",
    },
    {
      id: 14,
      jobName: "Sistemlərinin İdarə Edilməsi",
      companyName: "Kapital Bank",
      category: "İnformasiya texnologiyaları",
      kind: "Sistem idarəetmə",
      staj: "1ildən aşağı",
      startTime: "İyun 12, 2024",
      endTime: "İyul 12, 2024",
      education: "Ali",
      age: "20-30",
      text1:
        "Bank sirri xarakteri daşıyan məlumatların kənara sızılmasının qarşısının alınması",
      text2:
        "Təhlükəsizlik sistemlərinin quraşdırılması üçün tələblərin hazırlanması.",
      text3:
        "İnformasiya təhlükəsizlik sistemlərinin qurulması, sazlanması və monitorinqi",
      text4: "Təcrübəçi vəzifəsi",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1:
        "Şəbəkə, sistem və verilənlər bazasına (Oracle,MS Sql, PL/SQL) aid baza biliklərinin olması;",
      demand2: "Proqramlaşdırma biliyinin olması arzuolunandır;",
      demand3:
        "İT, İnformasiya Təhlükəsizliyi, Kompüter elmləri, İnformasiya Texnologiyaları və s. kimi ixtisaslar üzrə ali təhsilin olması;",
      demand4:
        "Azərbaycan və ingilis dillərində yazılı və şifahi ünsiyyət qurmaq bacarıqları (rus dili arzuolunandır);",
      demand5: "Komandada işləmə bacarığı;",
      demand6: "Daima öyrənməyə meyillilik.",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "500-700 AZN",
      contact: "Insan resursları",
      phoneNumber: "196",
      email: "kapitalbank@kapitalbank.az",
      dates: "06.12.2024",
      date: "12.06.2024",
    },
    {
      id: 15,
      jobName: "АНАЛИТИК БАЗЫ ДАННЫХ",
      companyName: "Elem İnshaat",
      category: "İnformasiya texnologiyaları",
      kind: "Məlumat bazasının idarəedilməsi",
      staj: "1 ildən aşağı",
      startTime: "İyul 08, 2024",
      endTime: "Avqust 07, 2024",
      education: "Ali",
      age: "18 - 60 yaş",
      text1: "График работы 09:00 – 18:00",
      text2: "6 дней в неделю",
      text3: "Зарплата 600 азн",
      text4: "Зарплата 600 азн",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1:
        "Базовые знания работы с Excel: умение создавать таблицы, использовать базовые функции",
      demand2:
        "Опыт работы не обязателен, но желательно иметь базовое понимание работы с данными",
      demand3:
        "Безупречное знание азербайджанского и русского языков (устная и письменная речь)",
      demand4:
        "Уверенное владение компьютером и умение оперативно обучаться новым программам и инструментам",
      demand5:
        "Хорошие навыки устного и письменного общения для взаимодействия с коллегами и представления результатов работы",
      demand6: "Внимательность к деталям и умение следовать инструкциям",
      demand7: "Способность эффективно управлять временем и выполнять задачи",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 600,
      price: "600 AZN",
      contact: "Emin",
      phoneNumber: "(055) 425-01-10",
      email: "gm@elem.az",
      dates: "07.08.2024",
      date: "08.07.2024",
    },
    {
      id: 16,
      jobName: "İT MÜTƏXƏSSİSİ",
      companyName: "GATEVAY GLOBAL LTD MMC",
      category: "İnformasiya texnologiyaları",
      kind: "İT mütəxəssisi",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 04, 2024",
      endTime: "Avqust 03, 2024",
      education: "Ali",
      age: "20 - 35 yaş",
      text1: "Bazar ertəsi-cümə 09:00-dan -18:00-dək,",
      text2:
        "İT avadanlıqlarının quraşdırılması və problemlərin aradan qaldırılması",
      text3:
        "Təhlükəsizlik avadanlıqlarının quraşdırılması, sazlanması və problemlərin həll edilməsi",
      text4: "İT sahasındə qoyulan tapşırıqların yerinə yetirilməsi",
      text5: "Tapşırılan işlərin vaxtında və keyfiyyətlə həll edilməsi",
      text6: "Rəhbərliyə görülən işlərlə bağlı hesabatların təqdim edilməsi",
      text7: "Maaş 1000 AZN – razılaşma",
      text8: "",
      text9: "",
      text10: "",
      demand1:
        "İnformatika, İT, Telekom və ya müvafiq sahədə təhsil və ya sertifikatların olması",
      demand2: "2+ il HelpDesk və ya İT dəstək sahəsində iş təcrübəsi",
      demand3: "Texniki problemləri diaqnostika və həll etmə bacarığı",
      demand4: "Optimal həll yollarını və yenilikləri tətbiq etmə bacarığı",
      demand5: "Əla şifahi və yazılı kommunikasiya bacarığı",
      demand6:
        "Tapşırıqları effektiv şəkildə prioritetləşdirmək və idarə etmə bacarığı",
      demand7: "Məsuliyyət və təşəbbüskarlıq",
      demand8: "Operativ və komanda ilə işləmə bacarığı",
      demand9: "",
      demand10: "",
      prices: 1000,
      price: "1000 AZN",
      contact: "Cavid",
      phoneNumber: "-",
      email: "p_cavidh@vfsglobal.com,",
      dates: "07.04.2024",
      date: "04.07.2024",
    },
    {
      id: 17,
      jobName: "JUNİOR SOFTWARE DEVELOPER",
      companyName: "PortBIM",
      category: "İnformasiya texnologiyaları",
      kind: "Proqramlaşdırma",
      staj: "1 ildən aşağı",
      startTime: "İyul 16, 2024",
      endTime: "Avqust 15, 2024",
      education: "Ali",
      age: "22 - 35 yaş",
      text1: "I - VI günlər ",
      text2:
        "Namizəd ilkin olaraq iş təcrübəsi əldə etmək üçün training periodundan keçəcəkdir.",
      text3: "Layihecilərin tələblərinə əsasən template-də yeniliklər etmək.",
      text4: "Proqramlama scriptlərin hazırlanması.",
      text5: "IT layihələrin hazırlanması və bənzəri işlər",
      text6: "İş saatları: 9:00-dan - 18:00-dək",
      text7:
        "Tikinti sektorunda layihelendirmenin aftomatiklesdirilmesi ucun hər hansı programlama biliyi olan təcrübəçi vakansiyasını elan edirik.",
      text8: "Başlanğıc maaşı 500 azn. Hər 6 ayda bir artmaqla",
      text9: "Yemək şirkət tərəfindən təmin olunur.",
      text10: "Ünvan: Bakı şəhəri, Nərimanov metrosuna yaxın",
      demand1: "Mütləq: Ingilis Dili (Min: Upperintermediate)",
      demand2: "Mütləq: Python və ya hər hansı proqramlama dili",
      demand3:
        "Mütləq: Yüksək IQ Səviyyəsi (Universitetə daxil olma balı qeyd etməklə)",
      demand4: "Yenilikçi, Dəqiq",
      demand5: "Microsoft Excel və Word bilgisi",
      demand6:
        "İnkişafa meyilli, punktual, məsuliyyətli, komanda ilə işləyə bilmək, stresə davamlı",
      demand7: "Yaş: 18 – 30",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "500-700 AZN",
      contact: "Vusal Quliyev",
      phoneNumber: "(012) 460-72-01",
      email: "info@portbim.com",
      dates: "07.16.2024",
      date: "16.07.2024",
    },
    {
      id: 18,
      jobName: "Layihlərin idarə edilməsi",
      companyName: "Olivia Beauty & Care",
      category: "İnformasiya texnologiyaları",
      kind: "İT Layihələndirmə",
      staj: "1ildən 3ilə qədər",
      startTime: "İyul 7, 2024",
      endTime: "Avqust 7, 2024",
      education: "Ali",
      age: "20-30",
      text1:
        "Marketinq lahiyələrinin planlanması, icrası və hesabatın tərtib edilməsi;",
      text2: "Tərəfdaşlarla münasibətlərin inkişaf etdirilməsi;",
      text3: "Layihə çərçivəsində sənədlərin hazırlanması;",
      text4: "Aylıq hesabatların hazırlanması.",
      text5:
        "Tərəfdaşlarla ortaq layihələrin müzakirəsi, planlanması, icrası və hesabatın tərtib edilməsi;",
      text6:
        "Marketinq kampaniyalarının planlanması, icrası və hesabatın tərtib edilməsi;",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Ali təhsil",
      demand2:
        "Azərbaycan dili və ingilis dili biliyi yükəsək səviyyədə ( həm yazılı, həm şifahi) rus dili biliyi arzuolunandır;",
      demand3: "İş təcrübəsi aidiyyatı sahədə minimum 1 il;",
      demand4: "Ofis proqram bilikləri yaxşı;",
      demand5: "Dataların toplanılması və analizi bacarığı",
      demand6: "Yüksək səviyyədə yazılı və şifahi kommunikasiya bacarığı;",
      demand7: "Analitik düşünmə qabiliyyəti;",
      demand8: "Dəqiqlik, məsuliyyətlilik;",
      demand9: "Nəticə yönümlülük",
      demand10: "",
      prices: 1000,
      price: "1000 AZN",
      contact: "Zaur",
      phoneNumber: "-",
      email: "zaur@bk.ru",
      dates: "07.07.2024",
      date: "07.07.2024",
    },
    {
      id: 19,
      jobName: "ELEKTRİK MÜHƏNDİSİ",
      companyName: "Smartcontrol.az",
      category: "İnformasiya texnologiyaları",
      kind: "Texniki avadanlıq mütəxəssisi",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 15, 2024",
      endTime: "Avqust 14, 2024",
      education: "Ali",
      age: "26 - 40 yaş",
      text1: "Həftədə 6 gün iş günü",
      text2: "09:00-dan - 18:00-dək iş saatı",
      text3:
        "Zəhmət olmasa CV-lərinizi başlıq hissəsinə “Elektrik Mühəndisi” qeyd edərək hr@smartcontrol.az e-mail adresinə göndərin.",
      text4: "hr@smartcontrol.az",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Elektrik üzrə minimum 1 il təcrübə",
      demand2: "IP domofon quraşdırılması üzrə təcrübə",
      demand3: "Kamera və NVR sistemləri quraşdırılması üzrə təcrübə",
      demand4: "Ağıllı ev sistemləri haqqında məlumat",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 700,
      price: "700-1200 AZN",
      contact: "Azad",
      phoneNumber: "(077) 769-00-07",
      email: "hr@smartcontrol.az",
      dates: "07.15.2024",
      date: "15.07.2024",
    },
    {
      id: 20,
      jobName: "TEXNİKİ İCRAÇI (İKT KABELÇİ)",
      companyName: "B2B Group LLC",
      category: "İnformasiya texnologiyaları ",
      kind: "Digər",
      staj: "1 ildən aşağı",
      startTime: "İyul 02, 2024",
      endTime: "Avqust 01, 202",
      education: "Ali",
      age: "20 - 60 yaş",
      text1: "Tikinti sahəsində zəif axın və optik kabellərin çəkilməsi",
      text2:
        "Tikinti sahəsində Cat6 və Cat6A kabellərin çəkilməsi və sonlandırılması",
      text3: "Pach Panellərin yığılması",
      text4: "Rack kabinlərin yığılması",
      text5: "Əmək haqqı: 600-700 AZN",
      text6: "AR Əmək Məcəlləsinə əsasən sənədləşmə",
      text7: "Əmək haqqı: işçinin bilik və bacarıqlarına əsasən təyin ediləcək",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Kabel çəkmə işində iş təcrübəsi",
      demand2: "Ümumi İKT sahəsində biliklər",
      demand3: "Wİ-Fİ nöqtələrinin qoşulması üzrə biliklər",
      demand4: "Rack kabinlərin təyinatlarını bilməli",
      demand5:
        "CCTV və IP kameraların qoşulması və qurulması üzrə bilik və bacarıqlar",
      demand6: "Pach Paneldə sonlama üzrə bacarıqlar",
      demand7:
        "Sxemlər və topologiyalar ilə işləmə bacarıqlarının olması tələb olunur",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 600,
      price: "600-700 AZN",
      contact: "Nazim",
      phoneNumber: "(012) 310-11-78",
      email: "hr@b2bgroup.az",
      dates: "07.02.2024",
      date: "02.07.2024",
    },
    {
      id: 21,
      jobName: "ASSİSTENT",
      companyName: "İdeya Tərcümə Mərkəzi",
      category: "İnzibati",
      kind: "İnzibati dəstək",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 22, 2024",
      endTime: "Avqust 21, 2024",
      education: "Ali",
      age: "23 - 30 yaş",
      text1: "E-mail və ofis proqramları ilə iş",
      text2: "Ofis daxili işlərin görülməsi.",
      text3: "Digər tapşırıqların yerinə yetirilməsi",
      text4: "Rahat ofis şəraiti",
      text5: "Peşəkar inkişaf imkanı",
      text6: "Rəsmi sənədləşmə",
      text7: "Əmək haqqı: 400 manat",
      text8: "İş qrafiki: həftədə 5 gün 09:00-dan-18:00-dək",
      text9: "",
      text10: "",
      demand1: "Yalnız xanım namizədlər",
      demand2: "Aktiv, ünsiyyətcil, detallara diqqətli olmaq vacibdir",
      demand3: "Məsuliyyətli və punktual",
      demand4: "Düzgün yazılı və şifahi dil bilikləri",
      demand5: "İngilis dili biliyi üstünlükdür",
      demand6: "Microsoft Office (Word, Excel)",
      demand7: "İşgüzar münasibət etikası, səlis danışıq qabiliyyəti",
      demand8: "Səliqəli və xoş görünüşlü",
      demand9: "Güclü öyrənmək qabiliyyəti olmalıdır",
      demand10: "Tərcüməçilik üzrə məzun olanlara üstünlük veriləcək",
      prices: 400,
      price: "400 AZN",
      contact: "Akim",
      phoneNumber: "(012) 408-18-59",
      email: "info@ideya-tm.az",
      dates: "07.22.2024",
      date: "22.07.2024",
    },
    {
      id: 22,
      jobName: "OFİS MENECERİ",
      companyName: "PrinterBaku",
      category: "İnzibati",
      kind: "Menecment",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 10, 2024",
      endTime: "Avqust 09, 2024",
      education: "Ali",
      age: "22 - 35 yaş",
      text1:
        "Elan və onlayn satış saytlarında şirkətin mağazalarının idarə olunması",
      text2:
        "Şirkətin movcud saytlarına nəzarət (Gələn sorğuları cavablandırmaq və.s)",
      text3: "Qrafik dizayn proqramları ilə işləmə bacarıqı",
      text4: "6 günlük iş qrafiki: Saat 10:00-dan 19:00-dək",
      text5: "Şənbə: qısa iş günüdür",
      text6: "Nahar fasiləsi: 13:00-dan - 14:00-dək",
      text7:
        "İlk 1 ay sınaq müddəti (Sınaq müddətində əmək haqqı tam ödənilir)",
      text8:
        "Əmək haqqı: fiks 700-1000 AZN (İntervü əsasında təyin olunacaq) + satışdan faiz",
      text9:
        "Maraqlanan namizədlərdən aşağıda göstərilən qaydada müraciət etmək xahiş olunur:",
      text10: "CV e-mail ünvanına göndərilməlidir (hr@printerbaku.az)",
      demand1:
        "Gündəlik görülən işlərlər bağlı rəhbəriliyə hesabatın verilməsi",
      demand2: "Müvafiq sahədə minimum 1 illik uğurlu iş təcrübəsi;",
      demand3:
        "Azərbaycan dilini səlis bilməlidir, rus və ingilis dili arzuolunandır;",
      demand4: "Analitik təhlil qabiliyyəti;",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 700,
      price: "700-1000 AZN",
      contact: "Müjgan xanım",
      phoneNumber: "(050) 688-11-88",
      email: "hr@printerbaku.az",
      dates: "07.10.2024",
      date: "10.07.2024",
    },
    {
      id: 23,
      jobName: "OFİS MENECERİ",
      companyName: "Compar Academy",
      category: "İnzibati",
      kind: "Ofis menecmenti",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 19, 2024",
      endTime: "Avqust 18, 2024",
      education: "Ali",
      age: "22 - 30 yaş",
      text1: "Rəhbərliyin verdiyi tapşırıqların vaxtında yerinə yetirilməsi",
      text2: "İş günləri: 1-5 günlər, şənbə günü yarı iş günü",
      text3: "İş rejimi: 09:45-dən - 19:00-dək",
      text4: "Nahar: 13:00-dan - 14:00-dək",
      text5: "Əmək haqqı: 500 manat və hər yeni tələbədən 5% bonus.",
      text6: "Ünvan: 28 May,Şamil Əzizbəyov 185a",
      text7:
        "QEYD: Uyğun namizədlər öz şəkilli CV-lərini hr@compar.edu.az mail ünvanına göndərə bilərlər.",
      text8: "Ofis daxili sənədlərin hazırlanması, qeydiyyatı və kordinasiyası",
      text9:
        "E-mail və yazışmaları həyata keçirmək, mailə gələn məktubları cavablandırmaq",
      text10:
        "Tədris mərkəzinə daxil olmuş zənglərin və müraciətlərin operativ cavablandırılması, qeydiyyatı, araşdırılması və təyin edilməsi",
      demand1: "23-30 yaş arası xanım namizədlər.",
      demand2:
        "Səliqəli, nəzakətli danışıq, intizamlı və işinə qarşı məsuliyyətli olmaq",
      demand3: "Kollektivdə işləmək bacarığı",
      demand4:
        "Dil bilikləri: Azərbaycan dili və Rus dili mütləqdir, İngilis dili üstünlükdür",
      demand5: "Başlanğıc səviyyə kompyüter bacarığı",
      demand6: "CV-də şəkil mütləqdir.",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "500-800 AZN",
      contact: "Günəş xanım",
      phoneNumber: "(012) 570-65-42",
      email: "hr@compar.edu.az",
      dates: "07.19.2024",
      date: "19.07.2024",
    },
    {
      id: 24,
      jobName: "KATİBƏ",
      companyName: "ButaEmlak",
      category: "İnzibati",
      kind: "Katibə/Resepşn",
      staj: "1 ildən aşağı",
      startTime: "İyul 20, 2024",
      endTime: "Avqust 19, 2024",
      education: "Ali",
      age: "19 - 40 yaş",
      text1: "Bayram günləri qeyri iş günüdür",
      text2: "Həftədə 1 gün istirahət",
      text3: "İş saatı 10:00-dan 19:00-dək, nahar 13:00-dan 14:00-dək",
      text4: "Bayram günləri qeyri iş günüdür",
      text5:
        "Şirkət Genclik ve 28 May mt/s-lerin yaxinliginda Ceyhun Hacibeyli kuc.,-de yerlesir.",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Buta Əmlak şirkəti yeni vakansiyalar elan edir!",
      demand2:
        "Əməkdaşlıq etmək istəyən namizədlər şəkilli cv lərini öncədən whatsapp nömrəsinə göndərsin.",
      demand3: "Qazanc Fiks 400 azn + bonuslar.",
      demand4: "Məhdudiyyət yoxdur!",
      demand5: "Bacarıqlı şəxslər aylıq 1.500 azn üzəri qazanc edə bilir!",
      demand6: "Namizədlərin insanlarla yüksək ünsiyyət qabiliyyəti olmalıdır",
      demand7: "Metn yazarlig bacarigi olmalidir.",
      demand8: "Xarici görünüşə önəm verilir",
      demand9: "Şəhəri orta səviyyədə tanımağı vacibdir",
      demand10: "Komputer biliyi orta olmağı kifayət edir",
      prices: 400,
      price: "400-2300 AZN",
      contact: "Hemid Bey",
      phoneNumber: "(070) 217-38-38",
      email: "rehimovs209@gmail.com",
      dates: "07.20.2024",
      date: "20.07.2024",
    },
    {
      id: 25,
      jobName: "PORTER",
      companyName: "Batıgöz klinikası",
      category: "İnzibati",
      kind: "Digər",
      staj: "1 ildən aşağı",
      startTime: "İyul 22, 2024",
      endTime: "Avqust 21, 2024",
      education: "1 ildən aşağı",
      age: "21 - 30 yaş",
      text1: "6 günlük iş qrafikində, rəsmi əmək müqaviləsi ilə işləyəcəkdir",
      text2:
        "Sumqayıt şəhərində yeni açılacaq klinikanın əməliyyatxana bölməsinə porter vəzifəsinə işçi axtarılır",
      text3: "Həftədə 1 gün istirahət",
      text4: "Bayram günləri qeyri iş günüdür",
      text5:
        "İş əməliyyatxanada əməliyyata gəlmiş xəstələrin əməliyyatxanaya yerləşdirilməsi, əməliyyatxan sonra əməliyyatxanadan palatalara daşınmasından ibarətdir",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Yalnız bəy namizədlər işə qəbul ediləcəkdir",
      demand2:
        "Sumqayıtda yeni açılacaq klinikaya çevik, elastik iş saatına uyğun",
      demand3: "Kollektivlə işləmə bacarığına malik bəy namizədlər axtarılır",
      demand4: "Kollec təhsili və ya ali təhsilli olması vacibdir",
      demand5:
        "Yalnız Sumqayıt şəhərində yaşayan namizədlər işə qəbul ediləcəkdir",
      demand6:
        "Namizədlərdən info@batigoz.az elektron poçtuna öz şəkilli cv-lərini göndərməkləri xahiş olunur",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 300,
      price: "300-400 AZN",
      contact: "Günel Məmmədli",
      phoneNumber: "(012) 310-40-33",
      email: "info@batigoz.az",
      dates: "07.22.2024",
      date: "22.07.2024",
    },
    {
      id: 26,
      jobName: "ГРАФИЧЕСКИЙ ДИЗАЙНЕР",
      companyName: "Asthetiklab",
      category: "Dizayn",
      kind: "Veb dizayn",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 15, 2024",
      endTime: "Avqust 14, 2024",
      education: "Ali",
      age: "23 - 35 yaş",
      text1: "Дизайн рекламных материалов;",
      text2: "Редактирование и обработка фотоматериалов",
      text3: "Полиграфический дизайн",
      text4: "Дизайн фирменного стиля",
      text5:
        "Создание векторных иллюстраций, логотипов График работы:. с 10:00 до 19:00, 6/1",
      text6: "Зарплата : 1500-2000",
      text7:
        "Создание макетов, верстка, подготовка к печати в соответствии с техническими требованиями",
      text8: "",
      text9: "",
      text10: "",
      demand1:
        "Владение графическими программами: Adobe Photoshop, Adobe Illustrator,Adobe Premiere",
      demand2: "Знание Русского и Азербайджанского языка",
      demand3: "Знание типографии, композиции и иллюстрирования",
      demand4: "Творческий подход и дизайнерское мышление",
      demand5: "Умение четко выполнять поставленные задачи",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 1500,
      price: "1500-2000 AZN",
      contact: "Atilla",
      phoneNumber: "(055) 457-17-17",
      email: "asthetiklab.baku@gmail.com",
      dates: "07.15.2024",
      date: "15.07.2024",
    },
    {
      id: 27,
      jobName: "MEMAR",
      companyName: "lsb_memarliq",
      category: "Dizayn",
      kind: "Memar",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 01, 2024",
      endTime: "İyul 31, 2024",
      education: "Ali",
      age: "21 - 28 yaş",
      text1: "Əmək haqqı: 500-600 AZN",
      text2: "İş qrafiki: 09:00-dan -18:00-dək",
      text3: "Eskiz və layihələrin düzgün formada hazırlanması",
      text4: "İşinndə dəqiq və məsuliyyətli",
      text5:
        "Dizayn işlərinin hazırlanması seçilmiş dizayna uyğun olaraq müəyyən edilmiş vaxtda icrasını təmin etmək",
      text6: "İxtisas üzrə namizədlərə üstünlük veriləcək.",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "ArchiCad",
      demand2: "AutoCad",
      demand3: "3DS MAX",
      demand4: "Corona",
      demand5: "PhotoShop",
      demand6:
        "Yaradıcılıq və müasir dizayn tendensiyaları üzrə biliklli olması üstünlükdür",
      demand7:
        "Qeyd olunan göstəricilərə cavab verən namizədlərdən öz CV və Portfolio mövzu hissəsində “Memar” qeyd etməklə lsb_memarliq@yahoo.com elektron ünvanına göndərmələri xahiş olunur",
      demand8: "Portfoliosuz Cv -lərə baxılmayacaq",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "500-800 AZN",
      contact: "Nihad",
      phoneNumber: "(055) 217-80-09",
      email: "lsb_memarliq@yahoo.com",
      dates: "07.01.2024",
      date: "01.07.2024",
    },
    {
      id: 28,
      jobName: "VİZUAL MERÇENDAYZER",
      companyName: "Çinici",
      category: "Dizayn",
      kind: "Geyim dizaynı",
      staj: "3 ildən 5 ilə qədər",
      startTime: "İyul 01, 2024",
      endTime: "İyul 31, 2024",
      education: "Ali",
      age: "23 - 35 yaş",
      text1: "Mağazaların düzəlişi - vitrinlər, manekenlər və s.",
      text2: "AR Əmək məcəlləsinə əsasən rəsmi sənədləşmə",
      text3: "5/7 iş qrafiki, iş saatları -09:30-dan - 19:00-dək",
      text4: "Nahar şirkət tərəfindən ödənilir",
      text5:
        "Kişi, qadın və uşaq bölmələrinin hazırlanması və məhsulların yerləşdirilməsi",
      text6:
        "Müştərini bütün mağaza boyunca yönləndirə biləcək cəlbedici və göz oxşayan vizual görüntünün yaradılması",
      text7:
        "Müştərilərin cəlb edilməsi və satışların artırılması üçün bütün vacib məhsul təşəbbüslərinin seçilməsi və nümayiş etdirilməsi",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Moda sahəsində minimum 3 il müvafiq iş təcrübəsinin olması",
      demand2: "Vizual merçendayzinq bilikləri",
      demand3:
        "Moda tendensiyaları barədə məlumatlı olmaq və onları yenidən vizual merçendayzinqdə şərh etmək bacarığı",
      demand4: "MS Office Proqramları bilikləri",
      demand5: "Yaradıcılıq və başqalarını ilhamlandırmaq bacarığı",
      demand6:
        "Standartlar, marketinq, işıqlandırma, yerləşdirmə, pəncərələr kimi detallara xüsusi diqqət yetirmək bacarığı",
      demand7:
        "Qeyd: yalnız geyim sektorunda işləyən namizədlərə üstünlük veriləcək",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 700,
      price: "700-900 AZN",
      contact: "Amaliya xanım",
      phoneNumber: "(012) 510-58-83",
      email: "cv@cinici.az",
      dates: "07.01.2024",
      date: "01.07.2024",
    },
    {
      id: 29,
      jobName: "Rəssam",
      companyName: "Digital Art Center",
      category: "Dizayn",
      kind: "Rəssam",
      staj: "1 ildən aşağı",
      startTime: "21 aprel 2024",
      endTime: "21 may 2024",
      education: "Orta",
      age: "20-30",
      text1: "Nahar şirkət tərəfindən ödənilir",
      text2: "5/7 iş qrafiki, iş saatları -09:30-dan - 19:00-dək",
      text3: "İşində dəqiq və məsuliyyətli",
      text4: "Digital Art Center açıq vakansiya elan edir",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1:
        "Rəsm çəkmək qabiliyyəti ,Dizayna maraq göstərən,skech etməyi sevən hərkəs müraciət edə bilər",
      demand2: "Yaş məhdudiyyəti yoxdur.Ofis Xırdalan və 20 yanvardadır",
      demand3: "IŞ ÖYRƏDİLİR!!",
      demand4: "",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "500-800 AZN",
      contact: "Aysu xanım",
      phoneNumber: "(055) 819-74-15",
      email: "digitalArt@gmail.com",
      dates: "04.21.2024",
      date: "21.04.2024",
    },
    {
      id: 30,
      jobName: "RƏQƏMSAL ÇAP OPERATORU",
      companyName: "Azprint",
      category: "Dizayn",
      kind: "Digər",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 19, 2024",
      endTime: "Avqust 18, 2024",
      education: "Ali",
      age: "20 - 55 yaş",
      text1: "İşə qəbul AR qanunvericiliyinə uyğun olaraq aparılır.",
      text2: "İş saatları: l – Vl 09:00-dan 18:00-dək",
      text3: "İş ünvanı: Nərimanov metrosunun yanı (Saat Qülləsinin qarşısı)",
      text4:
        "C3070 və Mimaki UJF3042 rəqəmsal printerlərində çap operatoru olaraq işləyəcək",
      text5:
        "CV göndərəcəyiniz zaman emailin başlıq hissəsinə Rəqəmsal Çap Operatoru yazmağınız xahiş olunur.",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1:
        "Faylların çapa hazırlıq mərhələsini tamamlaya bilməsi və printerləri istifadə edə bilməsi üçün orta səviyyədə CorelDraw və Photoshop istifadə edə bilməlidir",
      demand2: "Rəqəmsal Çap avadanlıqlarının istifadə qaydalarını bilməlidir",
      demand3:
        "İşə başlayacağı gündən sərbəst şəkildə oturub çap etməli olduğu üçün yalnız göstərilən tələblərin hər birini qarşılayan namizədlərin müraciət etməsi xahiş olunur",
      demand4: "",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "500-700 AZN",
      contact: "Vəliyeva Aysel",
      phoneNumber: "(012) 421-11-11",
      email: "hr@azprint.az",
      dates: "07.19.2024",
      date: "10.07.2024",
    },
    {
      id: 31,
      jobName: "RİELTOR",
      companyName: "Rich Estate Baku",
      category: "Satış",
      kind: "Daşınmaz əmlak agenti/makler",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 18, 2024",
      endTime: "Avqust 17, 2024",
      education: "Ali",
      age: "22 - 45 yaş",
      text1: "Peşəkar mütəxəssislər qrupu və geniş məlumat bazası",
      text2: "İş saatları: Həftənin 6 günü saat 10:00-dan - 19:00-dək",
      text3: "İş təcrübəsi olmayan əməkdaşlara təcrübə keçirilir",
      text4: "Şirkət tərəfindən limitsiz telefon danışığı",
      text5:
        "Daşınmaz əmlak reklam saytlarına limitsiz elan vermək imkanı yaradılır",
      text6:
        "Əmək haqqı faizlədir, sabit (fix) maaş deyil, görülən işin 50% ödənilir - Satış şöbəsində və icarə şöbəsi üçün aktualdır",
      text7:
        "Yüksək gəlir əldə etmək sansiviz var, orta aylıq gəlir işçinin bacarığından asılı olaraq dəyişir",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Məsuliiyyətli, ciddi, punktual, işgüzar, məqsədyönlü",
      demand2: "Xanımlar və bəylər",
      demand3: "Kollektivdə işləmək bacarığı olan",
      demand4: "Müştərilərnən yüksək səviyyədə ünsiyyət qurmaq bacarığı",
      demand5:
        "İnsanlarla ünsiyyət qurmaq, səlist danışıq, satış və kirayə sahələrində özünü gostere bilən",
      demand6:
        "Müştərilərlə danışıqların aparılması, obyektlərə mənzillərə gedib baxmaq, müqavilələrin imzalanması, şirkətin bazası ilə işləmək",
      demand7: "Əmlakçı kimi işləmək həvəsi olan, iş barədə məlumatli",
      demand8: "Əlaqə üçün whatcap vasitəsiylədə yaza bilərsiz",
      demand9: "",
      demand10: "",
      prices: 400,
      price: "400-2000 AZN",
      contact: "Ülvi",
      phoneNumber: "(050) 478-00-06",
      email: "richestatebaku0@gmail.com",
      dates: "07.18.2024",
      date: "18.07.2024",
    },
    {
      id: 32,
      jobName: "SATIŞ TƏMSİLÇİSİ",
      companyName: "RSİR GROUP",
      category: "Satış",
      kind: "Digər",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 22, 2024",
      endTime: "Avqust 21, 2024",
      education: "Ali",
      age: "22 - 35 yaş",
      text1: "İş saatı-09:00-dan-18:00-dək -Növbəli",
      text2: "Həftədə 1 gün istirahət",
      text3: "Əmək haqqı: 600-900 AZN( + satışın %-i + bonus)",
      text4: "Qeyd: Başlıqsız göndərilən CV lərə baxılmayacaq !",
      text5:
        "Özünüz haqqında məlumatları CV formasında Satış təmsilçisi başlığı rsirgroup@rsirgroup.az ünvanına göndərə bilərsiniz",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Satış bacarığı",
      demand2: "Müştərini qazanmaq qabiliyyəti",
      demand3: "Ünsiyyətcillik",
      demand4: "Dəqiqlik və məsuliyyət",
      demand5: "Problemləri həll etmə bacarığı",
      demand6: "Stresə davamlılıq",
      demand7: "Dil biliyi-Peşəkar səviyyədə Azərbaycan dili",
      demand8: "Rus dili ing dili bilse emek haqqi yuksek olur",
      demand9: "Yaş: 22-35 xanım və bəylər",
      demand10:
        "Ünsiyyətcil olmaq və kollektivlə birgə işləməyi bacarmaq satiş təmsilcisi tikinti üzrə",
      prices: 600,
      price: "600-900 AZN",
      contact: "İR şöbəsi",
      phoneNumber: "(050) 752-48-15",
      email: "rsirgroup@rsirgroup.az",
      dates: "07.22.2024",
      date: "22.07.2024",
    },
    {
      id: 33,
      jobName: "Vəkil",
      companyName: "MG Consulting",
      category: "Hüquqşünas",
      kind: "Vəkil",
      staj: "3ildən 5ilə qədər",
      startTime: "May 12, 2024",
      endTime: "İyun 12, 2024",
      education: "Ali",
      age: "20-30",
      text1: "Onlayn şəkildə daxil olmuş şikayətlərin/müraciətlərin təhlili",
      text2: "İş qrafiki 1-5 günləri, saat 09:00-dan 18:00-dək",
      text3: "Rəhbərlik tərəfindən verilmiş digər tapşırıqların icrası",
      text4: "Müraciət edənlərə müvafiq cavabların yazılması",
      text5:
        "Zərurət olduğu zaman müraciət edənlərin müvafiq dövlət orqanlarında və məhkəmələrdə təmsil edilməsi",
      text6:
        "Müraciətlər üzrə müxtəlif hüquqi sənədlərin (ərizə, şikayət, təklif və s.) hazırlanması və aidiyyatı dövlət orqanlarına göndərilməsi",
      text7:
        "Yerli qanunvericiliklə bağlı müraciət edənlərə onlayn qaydada məsləhətlərin verilməsi",
      text8: "",
      text9: "",
      text10: "",
      demand1: "Azərbaycan Respublikası Vəkillər Kollegiyasının üzvü olmaq",
      demand2: "Vəkil kimi ən az 3 il təcrübənin olması",
      demand3: "Dil bilikləri: Azərbaycan dili (Rus dili arzu olunandır)",
      demand4: "Fiziki və hüquqi şəxslərlə işləmək bacarığı",
      demand5: "Dövlət orqanları ilə işləmək bacarığı",
      demand6: "Sosial şəbəkələrlə işləmək bacarığı",
      demand7: "Ünsiyyət qurmaq və komandada işləmək bacarığı",
      demand8:
        "Standart MS Office proqramlarında qabaqcıl kompüter bacarıqları (Word, Excel, və s.)",
      demand9: "",
      demand10: "",
      prices: 2000,
      price: "2000-2500 AZN",
      contact: "Nailə",
      phoneNumber: "-",
      email: "naile@gmail.com",
      dates: "05.12.2024",
      date: "12.05.2024",
    },
    {
      id: 34,
      jobName: "Cinayət hüququ",
      companyName: "Melissa Group",
      category: "Hüquqşunas",
      kind: "Cinayət hüququ",
      staj: "3ilə qədər",
      startTime: "May 12, 2024",
      endTime: "İyun 12, 2024",
      education: "Ali",
      age: "25-45",
      text1: "Hüquqi normativ sənədlərin hazırlanmasını təmin etmək",
      text2: "Əlaqədar qurumlarla işləmək",
      text3:
        "Proses və prosedurların hüquqi ekspertizası və hüquqi əsaslarının təmini",
      text4: "Hüquqi normativ sənədlərin hazırlanmasını təmin etmək",
      text5:
        "Hüquqi sənədlərin işlənib hazırlanmasında, cavabların hazırlanmasında iştirak etmək, qanunvericiliyin tətbiqi ilə bağlı mübahisəli məsələlərə dair rəylər hazırlamaq;",
      text6:
        "Müqavilələri hazırlanması, rəsmiləşdirilməsi, analizinin aparılması, analizi prosesində çatışmazlıqların aradan qaldırılması üçün müvafiq proseslərin icrası.  ",
      text7:
        "Müqavilələrin hazırlanması, eləcə də bağlanması üçün zəruri olan görüş və danışıqlarda, eləcə də iclaslarda iştirak etmək",
      text8:
        "Daşınmaz əmlakla bağlı proseslərdə hüquqi bazanın təmin edilməsi, sənədlərin hazırlanması, baş verən fors-major hallarda ani müdaxilələrin edilməsi",
      text9:
        "Müəsisənin partnyor təşkilatlar, qurumlar və idarələr qarşısında hüquqi təmsilini həyata keçirmək",
      text10:
        "Yeni qanunvercilik aktlarının, müvafiq dəyişikliklərin müəssisənin struktur bölmələrinin fəaliyyətində, eləcə də hüquqi təmsil olunmasında iştirak etmək. ",
      demand1: "Ali təhsil (müvafiq istiqamətdə)",
      demand2: "Kompüter biliyi ",
      demand3:
        "Azərbaycan və rus dillərində mükəmməl danışıq qabilliyyəti və ünsiyyət bacarığı;",
      demand4: "Təşkilati bacarıqlar;",
      demand5: "Yazılı və şifahi ünsiyyət bacarığı;",
      demand6: "Yüksək etik davranış qabiliyyəti;",
      demand7: "Səbrli və məsuliyyətli olmalı.",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 1500,
      price: "1500-1700 AZN",
      contact: "Tahir",
      phoneNumber: "-",
      email: "tahir@gmail.com",
      dates: "05.12.2024",
      date: "12.05.2024",
    },
    {
      id: 35,
      jobName: "HÜQUQŞÜNAS",
      companyName: "Polad Texno MMC",
      category: "Hüquqşünas",
      kind: "Hüquqşünas",
      staj: "5 ildən artıq",
      startTime: "İyul 22, 2024",
      endTime: "Avqust 21, 2024",
      education: "Ali",
      age: "30 - 50 yaş",
      text1: "Əmək qanunvericliyinə əsasən zəruri sənədlərin hazırlanması",
      text2:
        "İddia ərizələrinin, apellyasiya və kassasiya şikayətlərinin yazılması",
      text3: "Müəssisədaxili fəaliyyəti tənzimləyən normativ sənədlərə düzəliş",
      text4: "Təqdim edilmiş müqavilələrin hüquqi ekspertizasının aparılması",
      text5:
        "Tələb olunan müqavilələrin, hüquqi məsələlərlə bağlı məktubların, ərizələrin, şikayətlərin və digər hüquqi sənədlərin hazırlanması",
      text6:
        "Məhkəmələrdə və ya dövlət orqanları qarşısında Cəmiyyətin təmsil edilməsi, cəmiyyətin və ya cəmiyyətin əməkdaşlıq etdiyi şəxslərin icrası bitmiş məhkəmə işlərinin hesabatlarının hazırlanması",
      text7:
        "Əqli mülkiyyət qanunlarına, Miqrasiya Məcəlləsinə, Azərbaycan Respublikasının qanunvericliyi ilə müəyyən olunmuş hallarda sahibkarlıq fəaliyyəti ilə məşğul olmaq üçün xüsusi icazə (lisenziya) sənədlərin alınması üçün müvafiq sənədlərin hazırlanması və müvafiq qurumlara müraciətin edilməsi, Cəmiyyətin təmsil olunması",
      text8:
        "Rəhbərliyin hüquqi işlərlə əlaqəli vermiş olduğu təlimatlarının yerinə yetirilməsi.",
      text9:
        "Tələb olunan müqavilələrin, hüquqi məsələlərlə bağlı məktubların, ərizələrin, şikayətlərin və digər hüquqi sənədlərin hazırlanması",
      text10:
        "Hüquqi şəxsin təsis sənədlərinin və qanunvericlik əsasında digər zəruri sənədlərinin hazırlanması",
      demand1: "İş təcrübəsi : 5 ildən artıq",
      demand2: "Yaş : 30 - 50",
      demand3: "Hüquq sahəsində ali təhsil",
      demand4:
        "Azərbaycan (rus,Inglis dillərini bilməsi arzu olunandır) dilini yüksək səviyyədə bilməli",
      demand5: "Hüquq vəzifəsi üzrə ən azı 5 il iş təcrübəsi",
      demand6: "MS Office proqramlarında iş bacarığı",
      demand7: "Yüksək səviyyədə yazılı və şifahi ünsiyyət bacarığı",
      demand8: "Məntiqi və hüquqi analiz qabiliyyəti yüksək olmalı",
      demand9: "Yüksək araşdırma və tədqiqat bacarığı",
      demand10: "Yeni bilik və bacarıqlara yiyələnmək həvəsi, təşəbbüskarlıq",
      prices: 1000,
      price: "1000-1500 AZN",
      contact: "Abbasova Olqa",
      phoneNumber: "(018) 653-24-90",
      email: "olabbasova@poladtexno.com",
      dates: "07.22.2024",
      date: "22.07.2024",
    },
    {
      id: 36,
      jobName: "Müvəqqəti müəllim",
      companyName: "Global Brands LLC",
      category: "Təhsil və elm",
      kind: "Məktəb tədrisi",
      staj: "1ildən 3ilə qədər",
      startTime: "İyun 22, 2024",
      endTime: "İyul 22, 2024",
      education: "Ali",
      age: "20-50",
      text1: "İngilis dili bilik səviyyəsi (minimum B2)",
      text2: "Şagirdlərlə iş təcrübəsi",
      text3: "Fərqli yaş aralıqlarında olan uşaqlarla işləmək bacarığı",
      text4: "Şagirdlərə nəzarət",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "İş rejimi 10:00-17:00 (həftəiçi 5 gün)",
      demand2: "Əmək haqqı: 700 AZN",
      demand3: "Qidalanma və nəqliyyat qarşılanır (gediş 8:00, qayıdış 18:00)",
      demand4:
        "Yay düşərgələrimiz  30 Avqusta qədər davam edəcək (minimum 2 həftə işləməlisiniz)",
      demand5: "Tələbələr də müraciət edə bilər",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 600,
      price: "600 AZN",
      contact: "İsmayıl",
      phoneNumber: "-",
      email: "ismayil@gmail.com",
      dates: "06.22.2024",
      date: "22.06.2024",
    },
    {
      id: 37,
      jobName: "ALMAN DİLİ MÜƏLLİMİ",
      companyName: "Prym Academy",
      category: "Təhsil və elm",
      kind: "Repetitor",
      staj: "1 ildən 3 ilə qədər",
      startTime: "İyul 22, 2024",
      endTime: "Avqust 21, 2024",
      education: "Ali",
      age: "25 - 35 yaş",
      text1:
        "Fərdi və qrup dərs planlarını hazırlayaraq Alman dilini tədris etmək.",
      text2:
        "Tələbələrin dil bacarıqlarını qiymətləndirmək və onların inkişafında dəstək olmaq.",
      text3: "-",
      text4: "-",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1:
        "Alman dilində səlis və qrammatik cəhətdən doğru danışıq və yazı bacarıqları.",
      demand2:
        "Alman dili və ədəbiyyatı sahəsində ali təhsil diploması və ya müvafiq sahədə təcrübə.",
      demand3:
        "Dərsi maraqlı və interaktiv edə biləcək metodlarla tədris etmə bacarığı.",
      demand4:
        "Məsuliyyətli, təşkilatçılıq bacarığı yüksək və komanda ilə işləməyə yiyələnmiş.",
      demand5: "Rus dilində danışıq və yazı bacarıqları üstünlük təşkil edir.",
      demand6: "Müxtəlif yaş qruplarına və səviyyələrə uyğun tədris təcrübəsi.",
      demand7:
        "Yeni tədris texnologiyalarına (online) yiyələnmə və onları tədris prosesində tətbiq etmə bacarığı.",
      demand8:
        "Maraqlanan namizədlərdən CV-lərini academyprym@gmail.com e-mail ünvanına və ya nömrəsinə göndərmələri xahiş olunur.",
      demand9:
        "İşə qəbul prosesi, namizədlərin təhsil və iş təcrübələri nəzərə alınaraq həyata keçiriləcəkdir.",
      demand10: "",
      prices: 900,
      price: "900-1000 AZN",
      contact: "Dilarə",
      phoneNumber: "(055) 228-60-22",
      email: "academyprym@gmail.com",
      dates: "07.22.2024",
      date: "22.07.2024",
    },
  ];
  cardsInformations.sort((a, b) => {
    let d1 = new Date(a.dates);
    let d2 = new Date(b.dates);
    return d2 - d1;
  });
  const rentCar = [
    {
      id: 1,
      jobName: "",
      companyName: "",
      category: "",
      kind: "",
      staj: "",
      startTime: "",
      endTime: "",
      education: "",
      age: "",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "",
      demand2: "",
      demand3: "",
      demand4: "",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "",
      contact: "",
      phoneNumber: "",
      email: "",
      dates: "07.24.2024",
      date: "24.07.2024",
    },
    {
      id: 2,
      jobName: "",
      companyName: "",
      category: "",
      kind: "",
      staj: "",
      startTime: "",
      endTime: "",
      education: "",
      age: "",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "",
      demand2: "",
      demand3: "",
      demand4: "",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "",
      contact: "",
      phoneNumber: "",
      email: "",
      dates: "07.24.2024",
      date: "24.07.2024",
    },
    {
      id: 3,
      jobName: "",
      companyName: "",
      category: "",
      kind: "",
      staj: "",
      startTime: "",
      endTime: "",
      education: "",
      age: "",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "",
      demand2: "",
      demand3: "",
      demand4: "",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "",
      contact: "",
      phoneNumber: "",
      email: "",
      dates: "07.24.2024",
      date: "24.07.2024",
    },
    {
      id: 4,
      jobName: "",
      companyName: "",
      category: "",
      kind: "",
      staj: "",
      startTime: "",
      endTime: "",
      education: "",
      age: "",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "",
      demand2: "",
      demand3: "",
      demand4: "",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "",
      contact: "",
      phoneNumber: "",
      email: "",
      dates: "07.24.2024",
      date: "24.07.2024",
    },
    {
      id: 5,
      jobName: "",
      companyName: "",
      category: "",
      kind: "",
      staj: "",
      startTime: "",
      endTime: "",
      education: "",
      age: "",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "",
      demand2: "",
      demand3: "",
      demand4: "",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "",
      contact: "",
      phoneNumber: "",
      email: "",
      dates: "07.24.2024",
      date: "24.07.2024",
    },
    {
      id: 6,
      jobName: "",
      companyName: "",
      category: "",
      kind: "",
      staj: "",
      startTime: "",
      endTime: "",
      education: "",
      age: "",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "",
      demand2: "",
      demand3: "",
      demand4: "",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "",
      contact: "",
      phoneNumber: "",
      email: "",
      dates: "07.24.2024",
      date: "24.07.2024",
    },
    {
      id: 7,
      jobName: "",
      companyName: "",
      category: "",
      kind: "",
      staj: "",
      startTime: "",
      endTime: "",
      education: "",
      age: "",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      demand1: "",
      demand2: "",
      demand3: "",
      demand4: "",
      demand5: "",
      demand6: "",
      demand7: "",
      demand8: "",
      demand9: "",
      demand10: "",
      prices: 500,
      price: "",
      contact: "",
      phoneNumber: "",
      email: "",
      dates: "07.24.2024",
      date: "24.07.2024",
    },
  ];

  rentCar.sort((a, b) => {
    let d1 = new Date(a.dates);
    let d2 = new Date(b.dates);
    return d2 - d1;
  });

  // ------------------------cards--------------------
  const cardsElement = document.querySelector(".cards-element");
  const paginationControls = document.getElementById("pagination-controls");

  let isCardClicked = false;
  let isNewCardClicked = false;
  const recordsPerPage = 20;
  const numberOfPages = Math.ceil(cardsInformations.length / recordsPerPage);

  const currentDate = new Date();

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function renderCards(page) {
    const startIndex = (page - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const itemsToShow = cardsInformations.slice(startIndex, endIndex);

    cardsElement.innerHTML = "";

    if (isCardClicked) {
      // ------------------all-cards------------------
      const shuffledCards = shuffle([...cardsInformations]);
      shuffledCards.forEach((card) => {
        const cardElement = document.createElement("li");
        cardElement.innerHTML = `
        <div class="card-text">
        <div class="upSide">
          <h3>${card.jobName}</h3>
          <p>${card.companyName}</p>
          <b class="price-text">${card.price}</b>
          <div class="card-marka-model">
            <p>*${card.text1}</p>
            <p>*${card.text2}</p>
            <p>*${card.text3}</p>
            <p>*${card.text4}</p>
            <p>...</p>
          </div>
        </div>
        <span class="card-date">${card.date}</span>
      </div>
      `;
        cardsElement.appendChild(cardElement);
        // ---------------------cards-click------------
        cardElement.addEventListener("click", (e) => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "works.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
      });
    } else if (isNewCardClicked) {
      // ------------------rent-cards------------------
      rentCar.forEach((card) => {
        const cardElement = document.createElement("li");
        cardElement.innerHTML = `
        <div class="card-text">
        <div class="upSide">
          <h3>${card.jobName}</h3>
          <p>${card.companyName}</p>
          <b class="price-text">${card.price}</b>
          <div class="card-marka-model">
            <p>*${card.text1}</p>
            <p>*${card.text2}</p>
            <p>*${card.text3}</p>
            <p>*${card.text4}</p>
            <p>...</p>
          </div>
        </div>
        <span class="card-date">${card.date}</span>
      </div>
        `;
        cardsElement.appendChild(cardElement);
        // ---------------------cards-click------------
        cardElement.addEventListener("click", (e) => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "works.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
      });
    } else {
      // ------------------------------------
      itemsToShow.forEach((card) => {
        const cardElement = document.createElement("li");
        cardElement.innerHTML = `
        <div class="card-text">
          <div class="upSide">
            <h3>${card.jobName}</h3>
            <p>${card.companyName}</p>
            <b class="price-text">${card.price}</b>
            <div class="card-marka-model">
              <p>*${card.text1}</p>
              <p>*${card.text2}</p>
              <p>*${card.text3}</p>
              <p>*${card.text4}</p>
              <p>...</p>
            </div>
          </div>
          <span class="card-date">${card.date}</span>
        </div>
      `;
        cardsElement.appendChild(cardElement);
        // ---------------------cards-click------------
        cardElement.addEventListener("click", (e) => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "works.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
      });
    }
  }

  function renderPagination(currentPage) {
    paginationControls.innerHTML = "";

    for (let i = 1; i <= numberOfPages; i++) {
      const pageLink = document.createElement("button");
      pageLink.textContent = i;
      pageLink.className = "page-number";
      if (i === currentPage) {
        pageLink.style.backgroundColor = "#266d67";
      }
      pageLink.addEventListener("click", () => {
        renderCards(i);
        renderPagination(i);
      });
      paginationControls.appendChild(pageLink);
    }
  }

  renderCards(1);
  renderPagination(1);

  // ------------------------all-cards--------------------
  const filterElement = document.querySelector(".filter-container");
  const sliderElement = document.querySelector(".slider-container");
  const activeAllCArd = document.querySelector(".active-all-card");
  const activeNewCArd = document.querySelector(".active-new-card");
  const activeCrashCArd = document.querySelector(".active-crash-card");
  const activeRentCArd = document.querySelector(".active-rent-card");
  const hamburgerClosed = document.querySelector(".mobile-list");

  document.querySelectorAll(".all-cards").forEach((card) => {
    card.addEventListener("click", () => {
      filterElement.style.display = "none";
      sliderElement.style.display = "none";
      paginationControls.style.display = "none";
      isCardClicked = true;
      isNewCardClicked = false;
      renderCards(1);
      activeAllCArd.style.setProperty("--zero", "100%");
      activeNewCArd.style.setProperty("--zero", "0%");
      activeCrashCArd.style.setProperty("--zero", "0%");
      activeRentCArd.style.setProperty("--zero", "0%");
      hamburgerClosed.style.display = "none";
      document.body.style.overflow = "unset";
    });
  });

  // ------------------rent-cards-----------
  document.querySelectorAll(".new-cards").forEach((rentCard) => {
    rentCard.addEventListener("click", () => {
      filterElement.style.display = "none";
      sliderElement.style.display = "none";
      paginationControls.style.display = "none";
      isCardClicked = false;
      isNewCardClicked = false;
      renderCards(1);
      activeAllCArd.style.setProperty("--zero", "0%");
      activeNewCArd.style.setProperty("--zero", "0%");
      activeCrashCArd.style.setProperty("--zero", "0%");
      activeRentCArd.style.setProperty("--zero", "100%");
      hamburgerClosed.style.display = "none";
      document.body.style.overflow = "unset";
    });
  });

  // ---------------refresh-page---------------
  const homeCards = document.querySelector(".home-cards");
  homeCards.addEventListener("click", () => {
    location.reload();
  });
  const homeCardsMobile = document.querySelector(".home-cards-mobile");
  homeCardsMobile.addEventListener("click", () => {
    location.reload();
  });
  // ------------------------select--------------------
  const categoryContainer = [
    "Bütün Kateqoriyalar",
    "Maliyyə",
    "Marketinq",
    "İnformasiya texnologiyaları",
    "İnzibati",
    "Dizayn",
    "Satış",
    "Hüquqşünas",
    "Təhsil və elm",
    "Xidmət",
    "Tibb əczaçılıq",
    "Müxtəlif",
  ];
  const kindContainer = [
    {
      id: 1,
      marka: "Maliyyə",
      model: [
        "Vacib deyil",
        "Kredit mütəxəssisi",
        "Audit",
        "Sığorta",
        "Mühasibat",
        "Maliyyə analiz",
        "Bank Xidməti",
        "Kassir",
        "İqtisadçı",
        "Digər",
      ],
    },
    {
      id: 2,
      marka: "Marketinq",
      model: [
        "Vacib deyil",
        "Marketinq-menecment",
        "İctimayətlə əlaqələr",
        "Reklam",
        "Koperaytinq",
      ],
    },
    {
      id: 3,
      marka: "İnformasiya texnologiyaları",
      model: [
        "Vacib deyil",
        "Sistem idarəetmə",
        "Məlumat bazasının idarəedilməsi",
        "İT mütəxəssisi",
        "Proqramlaşdırma",
        "İT Layihələndirmə",
        "Texniki avadanlıq mütəxəssisi",
        "Digər",
      ],
    },
    {
      id: 4,
      marka: "İnzibati",
      model: [
        "Vacib deyil",
        "İnzibati dəstək",
        "Menecment",
        "Ofis menecmenti",
        "Katibə/Resepşn",
        "Digər",
      ],
    },
    {
      id: 5,
      marka: "Dizayn",
      model: [
        "Vacib deyil",
        "Veb dizayn",
        "Memar",
        "Geyim dizaynı",
        "Rəssam",
        "Digər",
      ],
    },
    {
      id: 6,
      marka: "Satış",
      model: ["Vacib deyil", "Daşınmaz əmlak agenti/makler", "Digər"],
    },
    {
      id: 7,
      marka: "Hüquqşünas",
      model: ["Vacib deyil", "Vəkil", "Cinayət hüququ", "Hüquqşünas", "Digər"],
    },
    {
      id: 8,
      marka: "Təhsil və elm",
      model: [
        "Vacib deyil",
        "Məktəb tədrisi",
        "Universitet tədrisi",
        "Repetitor",
        "Digər",
      ],
    },
    {
      id: 9,
      marka: "Xidmət",
      model: [
        "Vacib deyil",
        "Kuryer",
        "SPA və Gözəllik",
        "Xadimə",
        "Anbardar",
        "Restoran işi",
        "Sürücü",
        "Dayə",
        "Digər",
      ],
    },
    {
      id: 10,
      marka: "Tibb əczaçılıq",
      model: ["Vacib deyil", "Həkim", "Tibbi personal", "Digər"],
    },
    {
      id: 11,
      marka: "Müxtəlif",
      model: ["Vacib deyil", "Jurnalistika", "Tələbələr üçün"],
    },
  ];
  const salaryElementOption = [
    "Vacib deyil",
    "100 azn",
    "200 azn",
    "300 azn",
    "400 azn",
    "500 azn",
    "600 azn",
    "700 azn",
    "800 azn",
    "900 azn",
    "1000 azn",
    "1100 azn",
    "1200 azn",
    "1300 azn",
    "1400 azn",
    "1500 azn və yuxarı",
  ];
  // --------marka---------
  const categoryElement = document.querySelector("#marka");
  const kindElement = document.querySelector("#model");
  const salaryElement = document.querySelector("#salary");
  const kindElementOneItem = document.createElement("option");
  const salaryElementOneItem = document.createElement("option");
  kindElementOneItem.value = "Vacib deyil";
  kindElementOneItem.textContent = "Vacib deyil";
  salaryElementOneItem.textContent = "Vacib deyil";
  kindElement.appendChild(kindElementOneItem);

  kindElement.style.pointerEvents = "none";
  salaryElement.style.pointerEvents = "none";
  kindElement.style.backgroundColor = "#e3e3e3";
  salaryElement.style.backgroundColor = "#e3e3e3";

  categoryContainer.forEach((marka) => {
    const categoryElementItem = document.createElement("option");
    categoryElementItem.value = marka;
    categoryElementItem.textContent = marka;
    categoryElement.appendChild(categoryElementItem);
  });
  salaryElementOption.forEach((salary) => {
    const salaryElementItem = document.createElement("option");
    salaryElementItem.value = salary;
    salaryElementItem.textContent = salary;
    salaryElement.appendChild(salaryElementItem);
  });
  categoryElement.addEventListener("change", () => {
    if (categoryElement.value === "Bütün Kateqoriyalar") {
      kindElement.style.pointerEvents = "none";
      salaryElement.style.pointerEvents = "none";
      kindElement.style.backgroundColor = "#e3e3e3";
      salaryElement.style.backgroundColor = "#e3e3e3";
    }
    if (categoryElement.value !== "Bütün Kateqoriyalar") {
      kindElement.style.pointerEvents = "unset";
      salaryElement.style.pointerEvents = "unset";
      kindElement.style.backgroundColor = "white";
      salaryElement.style.backgroundColor = "white";
    }
  });
  // --------model---------
  categoryElement.addEventListener("change", () => {
    const selectedCategory = categoryElement.value;
    kindElement.innerHTML = "";
    kindContainer.forEach((model) => {
      if (model.marka === selectedCategory) {
        model.model.forEach((model) => {
          const kindElementItem = document.createElement("option");
          kindElementItem.value = model;
          kindElementItem.textContent = model;
          kindElement.appendChild(kindElementItem);
        });
      } else if (selectedCategory === "Bütün Kateqoriyalar") {
        const kindElementOneItem = document.createElement("option");
        kindElementOneItem.value = "Vacib deyil";
        kindElementOneItem.textContent = "Vacib deyil";
        kindElement.appendChild(kindElementOneItem);
      }
    });
  });
  // --------------filter-----------
  const selectedContainer = document.querySelector(".selected-container");
  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener(
    "click",
    (filterCards = (e) => {
      e.preventDefault();
      const cardsElement = document.querySelector(".cards-element");
      const selectedCategory = categoryElement.value;
      const selectedKind = kindElement.value;

      selectedContainer.innerHTML = "";
      cardsInformations.forEach((card) => {
        if (
          (card.category === selectedCategory && card.kind === selectedKind) ||
          (card.category === selectedCategory && selectedKind === "Vacib deyil")
        ) {
          const selectedLi = document.createElement("li");
          selectedLi.innerHTML = `
          <div class="card-text">
            <div class="upSide">
              <h3>${card.jobName}</h3>
              <p>${card.companyName}</p>
              <b class="price-text">${card.price}</b>
              <div class="card-marka-model">
                <p>*${card.text1}</p>
                <p>*${card.text2}</p>
                <p>*${card.text3}</p>
                <p>*${card.text4}</p>
                <p>...</p>
              </div>
            </div>
            <span class="card-date">${card.date}</span>
          </div>
        `;
          cardsElement.style.display = "none";
          selectedContainer.appendChild(selectedLi);
          selectedContainer.style.display = "flex";
          paginationContainer.style.display = "none";
          // ---------------------cards-click------------
          selectedLi.addEventListener("click", (e) => {
            localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
            const url = new URL(window.location.href);
            url.pathname = "works.html";
            url.searchParams.set("id", card.id);
            window.open(url.toString(), "_blank");
          });
        } else {
          cardsElement.style.display = "none";
        }
        if (
          categoryElement.value === "Bütün Kateqoriyalar" &&
          kindElement.value === "Vacib deyil"
        ) {
          selectedContainer.style.display = "none";
          cardsElement.style.display = "flex";
          paginationContainer.style.display = "flex";
        }
        if (
          categoryElement.value === "Bütün Kateqoriyalar" &&
          kindElement.value === "Vacib deyil" &&
          priceMin <= card.prices &&
          priceMax >= card.prices
        ) {
          const selectedLi = document.createElement("li");
          selectedLi.innerHTML = `
          <div class="card-image">
            <img src="${card.image}" alt="image ${card.id}" />
            <p class="card-crash" ${
              card.crash ? "" : 'style="display: none;"'
            }>${card.crash || ""}</p>
          </div>
          <div class="card-text">
            <h3>${card.price}</h3>
            <div class="card-marka-model">
              <p>${card.marka}</p>
              <span>${card.model}</span>
            </div>
            <p>${card.description}</p>
            <span class="card-date">${card.date}</span>
          </div>
        `;
        }
      });
    })
  );
});
// ---------------------login-----------------
const loginEntryText = document.querySelector(".login-entry-text");
const loginRegistrationText = document.querySelector(
  ".login-registration-text"
);
const entryElement = document.querySelector(".entry-element");
const registrationElement = document.querySelector(".registration-element");
const loginContainer = document.querySelector(".login-container");
loginContainer.style.display = "none";
registrationElement.style.display = "none";
const entrySubmitButton = document.querySelector(".entry-button");
const addCarsText = document.querySelector(".add-cars-texts");

const usersAddCars = document.querySelector(".users-add-cars");
const searchCars = document.querySelector(".search-cars");
const addCars = document.querySelector(".add-cars");

const cardContainer = document.querySelector(".cards-container");
const paginationContainer = document.querySelector("#pagination-controls");

const userButton = document.querySelector(".user-in-mobile");
const login = document.querySelector(".login");
const loginButton = document.querySelector(".login-in-mobile");
const userDesktop = document.querySelector(".user-in-desktop");
userButton.style.display = "none";
userDesktop.style.display = "none";

function loginFunction() {
  if (loginContainer.style.display === "none") {
    document.querySelector("body").style.overflow = "hidden";
    loginContainer.style.display = "flex";
    window.scrollTo(0, 0);
    if (window.innerWidth < 1024) {
      userDesktop.style.display = "none";
      if (addCars.addEventListener) {
        addCars.addEventListener("click", () => {
          usersAddCars.style.display = "block";
          addCarsText.style.display = "none";
          cardContainer.style.display = "none";
          paginationContainer.style.display = "none";
          document.querySelector(".filter-container").style.height = "950px";
          document.querySelector(".filter-elements").style.height = "950px";
        });
      }
      if (searchCars.addEventListener) {
        searchCars.addEventListener("click", () => {
          usersAddCars.style.display = "none";
          addCarsText.style.display = "none";
          cardContainer.style.display = "block";
          paginationContainer.style.display = "flex";
          document.querySelector(".filter-container").style.height = "320px";
          document.querySelector(".filter-elements").style.height = "320px";
        });
      }
    }
    loginEntryText.addEventListener("click", () => {
      loginEntryText.style.setProperty("--searchCars", "100%");
      loginRegistrationText.style.setProperty("--addCars", "0");
      entryElement.style.display = "flex";
      registrationElement.style.display = "none";
    });
    loginRegistrationText.addEventListener("click", () => {
      loginEntryText.style.setProperty("--searchCars", "0");
      loginRegistrationText.style.setProperty("--addCars", "100%");
      entryElement.style.display = "none";
      registrationElement.style.display = "flex";
    });
  } else {
    loginContainer.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  }
}
// -------------------entry-button----------------
entrySubmitButton.addEventListener("click", () => {
  userButton.style.display = "flex";
  loginButton.style.display = "none";
  loginContainer.style.display = "none";
  login.style.display = "none";
  if (window.innerWidth < 1024) {
    userDesktop.style.display = "none";
  }
  if (window.innerWidth > 1024) {
    userDesktop.style.display = "flex";
  }
  if (userDesktop.style.display === "flex") {
    if (addCars.addEventListener) {
      addCars.addEventListener("click", () => {
        usersAddCars.style.display = "block";
        addCarsText.style.display = "none";
        cardContainer.style.display = "none";
        paginationContainer.style.display = "none";
        document.querySelector(".filter-container").style.height = "750px";
        document.querySelector(".filter-elements").style.height = "750px";
      });
    }
    if (searchCars.addEventListener) {
      searchCars.addEventListener("click", () => {
        usersAddCars.style.display = "none";
        addCarsText.style.display = "none";
        cardContainer.style.display = "block";
        paginationContainer.style.display = "flex";
        document.querySelector(".filter-container").style.height = "200px";
        document.querySelector(".filter-elements").style.height = "200px";
      });
    }
  }
  document.querySelector("body").style.overflow = "auto";
});

const userElement = document.querySelector(".user-element");
const userElement1 = document.querySelector(".user-element1");
const userButton1 = document.querySelector(".user1");
userElement.style.display = "none";
userElement1.style.display = "none";

userButton.addEventListener("click", () => {
  if (userElement.style.display === "none") {
    userElement.style.display = "block";
  } else if (userElement.style.display === "block") {
    userElement.style.display = "none";
  }
});
userButton1.addEventListener("click", () => {
  if (userElement1.style.display === "none") {
    userElement1.style.display = "block";
  } else if (userElement1.style.display === "block") {
    userElement1.style.display = "none";
  }
});

const userCloseDesktop = document.querySelector(".user-exit-desktop");
const userCloseMobile = document.querySelector(".user-exit-mobile");
const searchInputs = document.querySelector(".input-elements");

userCloseDesktop.addEventListener("click", () => {
  userDesktop.style.display = "none";
  login.style.display = "flex";
  if (addCars.addEventListener) {
    addCars.addEventListener("click", () => {
      usersAddCars.style.display = "none";
      addCarsText.style.display = "flex";
      cardContainer.style.display = "block";
      paginationContainer.style.display = "flex";
      document.querySelector(".filter-container").style.height = "200px";
      document.querySelector(".filter-elements").style.height = "200px";
    });
  }
});
userCloseMobile.addEventListener("click", () => {
  userButton.style.display = "none";
  loginButton.style.display = "flex";
  if (addCars.addEventListener) {
    addCars.addEventListener("click", () => {
      usersAddCars.style.display = "none";
      addCarsText.style.display = "flex";
      cardContainer.style.display = "block";
      paginationContainer.style.display = "flex";
      document.querySelector(".filter-container").style.height = "220px";
      document.querySelector(".filter-elements").style.height = "220px";
    });
  }
});
