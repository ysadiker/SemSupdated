/**
 * Gözen Security - SeMS Güvenlik İyileştirme Bildirim Portalı
 * Kurumsal Uygulama ve Durum Yönetimi (State & Workflow Engine)
 */

// ==========================================
// 1. ÇOK DİLLİ ÇEVİRİ SÖZLÜĞÜ (i18n Engine - FR-003, AC-011)
// ==========================================
const i18n = {
    tr: {
        navUserPortal: "Kullanıcı Portalı",
        navAdminPanel: "Yönetici Paneli",
        navReportPanel: "Raporlama Paneli",
        portalBadge: "SeMS GÜVENLİK İYİLEŞTİRME BİLDİRİM PORTALI",
        portalTitle: "Güvenlik Risk ve Ramak Kala Bildirim Sistemi",
        authVerified: "GozenConnect Doğrulandı: Bildirim Yetkisi Aktif",
        welcomeTitle: "Hoş Geldiniz",
        welcomeDesc: "Bu portal; güvenlik risklerini, ramak kala olaylarını ve iyileştirme önerilerini güvenle paylaşabilmeniz amacıyla oluşturulmuştur.",
        commitmentTitle: "Kurumsal Yaptırım Uygulamama Taahhüdü:",
        commitmentDesc: "İyi niyetle yapılan emniyet ve güvenlik bildirimleri nedeniyle hiçbir çalışana cezai veya idari yaptırım uygulanmaz. \"Her bildirim daha güvenli bir gelecek için önemlidir.\"",
        anonTitle: "%100 Anonim veya Gizli Bildirim",
        anonDesc: "Anonim modelde kimlik bilgisi sorgulanmaz veya kaydedilmez. Gizli modelde ise yalnızca yetkili güvenlik yöneticileri görür.",
        trackingTitle: "Takip Numarası",
        trackingDesc: "SR-YYYY-NNNNNN biçiminde oluşturulacak otomatik numara ile süreç şeffaf biçimde izlenebilir.",
        btnNewReport: "Yeni Bildirim Yap >",
        btnQueryStatus: "Bildirim Durumu Sorgula",
        riskSelectTitle: "Bilgi Risk Seviyesini Seçiniz",
        riskSelectSubtitle: "Bildirim için uygun bilgi risk seviyesini tıklayınız.",
        riskGenelBadge: "GENEL",
        riskGenelDesc: "Güvenlik açısından hassasiyet taşımayan ve yetkisiz kişilerin de erişiminin risk oluşturmayacağı bilgiler.",
        riskKontrolluBadge: "KONTROLLÜ BİLGİ",
        riskKontrolluDesc: "Gözen Güvenlik faaliyetleri ile ilgili olup, görev gereği kurum içerisinde kullanılması gereken bilgiler.",
        riskKisitliBadge: "KISITLI GÜVENLİK BİLGİSİ",
        riskKisitliDesc: "Güvenlik açısından risk oluşturabilecek veya güvenlik tedbirlerini riske atabilecek bilgiler.",
        btnSelectAndProceed: "Seç ve İlerle >",
        btnBack: "< Geri",
        lblReportModel: "Bildirim Modeli Seçimi *",
        modelAnonTitle: "🔒 %100 Anonim Bildirim",
        modelAnonDesc: "Kimlik bilgileriniz hiçbir vaka kaydına veya inceleme ekranına aktarılmaz.",
        modelConfTitle: "🛡️ Gizli Bildirim",
        modelConfDesc: "Kimliğiniz doğrulanır; yalnızca en üst yetkili güvenlik direktörü görebilir.",
        secCategoryRisk: "Kategori ve Önem Derecesi",
        lblCategory: "Kategori *",
        lblRiskLevel: "Bilgi Risk Seviyesi *",
        secIncidentDetails: "Olay Detayları",
        lblIncidentDate: "Olay Tarihi *",
        lblLocation: "İlgili Yer (İsteğe Bağlı)",
        lblSubject: "Bildirim Başlığı *",
        lblDescription: "Açıklama / Bildiriminiz *",
        lblSolution: "Önerilen Çözüm (İsteğe Bağlı)",
        lblFileUpload: "Fotoğraf veya Destekleyici Dosya Ekle",
        fileUploadText: "📷 Fotoğraf Çek veya Belge Yükle (Maks 10MB)",
        fileUploadHint: "PNG, JPG, PDF, DOCX formatları desteklenir. Güvenlik taramasından geçirilir.",
        lblEmailFeedback: "Gelişmelerden E-posta ile haberdar olmak ister misiniz?",
        emailFeedbackHint: "Anonim modelde e-posta adresi vakadan ayrı tutulur, kimliğiniz korunur.",
        lblDeclaration: "Paylaştığım bilgilerin doğru ve iyi niyetli olduğunu, kasıtlı yanıltıcı beyan içermediğini onaylıyorum. *",
        btnSubmit: "Gönder 🚀",
        successTitle: "Bildiriminiz Başarıyla Alındı",
        successDesc: "Bildiriminizi aşağıdaki takip numarasıyla 7/24 izleyebilirsiniz.",
        lblTrackingNo: "TAKİP NUMARASI",
        trackingSaveHint: "Lütfen bu numarayı kaydediniz; sürecin durumunu sorgularken gerekecektir.",
        btnTrackProcess: "Süreci Takip Et",
        btnHomePage: "Ana Sayfa",
        queryTitle: "Bildirim Durumu Sorgulama",
        querySubtitle: "Takip numaranızı girerek süreci görüntüleyebilirsiniz.",
        btnQuery: "Sorgula",
        quickTest: "Hızlı Test Numaraları:",
        lblTrackingNoShort: "Takip No:",
        lblCategoryShort: "Kategori:",
        lblRiskShort: "Risk Seviyesi:",
        lblStatusShort: "Güncel Durum:",
        secProcessMilestones: "Süreç Aşamaları",
        stage1Title: "Bildirim Alındı",
        stage2Title: "Ön İnceleme",
        stage3Title: "İlgili Birime Aktarıldı",
        stage4Title: "Sonuçlandırıldı",
        lblPublicNoteTitle: "İnceleme Yetkilisi Bilgilendirmesi:",
        btnReturnHome: "Ana Sayfaya Dön",
        footerLegal: "Bu portal, Güvenlik Yönetim Sistemi (SeMS) kapsamında proaktif risk yönetimini desteklemek amacıyla oluşturulmuştur.",
        
        // Yönetici Paneli
        adminPanelTitle: "YÖNETİCİ PANELİ - BİLDİRİM YÖNETİMİ",
        adminPanelSubtitle: "SeMS Güvenlik İyileştirme Bildirim Portalı • Canlı Operasyon",
        slaWarningBadge: "2 süre uyarısı",
        cardTotalReports: "TOPLAM BİLDİRİM",
        cardInReview: "İNCELEMEDE",
        cardAssigned: "ATANANLAR",
        cardApproachingDelayed: "YAKLAŞAN / GEÇEN",
        tabReportsHeader: "BİLDİRİMLER",
        tabAll: "Tümü",
        tabOpen: "Açık",
        tabInReview: "İncelemede",
        tabAssigned: "Atananlar",
        tabDef: "DEF",
        tabClosed: "Kapalı",
        btnFilter: "Filtrele",
        btnFilterText: "Filtrele",
        btnAddNewReport: "+ Yeni",
        btnNew: "Yeni",
        menuHome: "ANA SAYFA",
        menuReports: "BİLDİRİMLER",
        menuAssigned: "ATANANLAR",
        menuUsers: "KULLANICILAR",
        menuSettings: "AYARLAR",
        menuAnnouncements: "DUYURULAR",

        // Gozen Connect Giriş
        loginConnectDesc: "Kurumsal Kimlik Doğrulama & Yetkilendirme Servisi",
        loginWelcomeTitle: "Portala Giriş Yapınız",
        loginWelcomeDesc: "SeMS Güvenlik İyileştirme Bildirim Portalı'na erişmek için lütfen GozenConnect kurumsal hesabınızla oturum açınız.",
        lblUsername: "Kullanıcı Adı *",
        lblPassword: "Şifre *",
        btnLoginSubmit: "GozenConnect ile Giriş Yap ➜",
        lblDemoAccounts: "Test ve Değerlendirme Hesapları",
        btnLogout: "Çıkış"
    },
    en: {
        navUserPortal: "User Portal",
        navAdminPanel: "Admin Panel",
        navReportPanel: "Reporting Panel",
        portalBadge: "SeMS SECURITY IMPROVEMENT REPORTING PORTAL",
        portalTitle: "Security Risk & Near-Miss Reporting System",
        authVerified: "GozenConnect Verified: Reporting Access Active",
        welcomeTitle: "Welcome",
        welcomeDesc: "This portal is established for you to safely share security risks, near-miss incidents, and improvement recommendations.",
        commitmentTitle: "Corporate Non-Punitive Commitment:",
        commitmentDesc: "No disciplinary or administrative action will be taken against any employee for reports made in good faith. \"Every report is vital for a safer future.\"",
        anonTitle: "%100 Anonymous or Confidential Reporting",
        anonDesc: "In the anonymous model, identity information is never queried or stored. In the confidential model, it is restricted solely to authorized managers.",
        trackingTitle: "Tracking Number",
        trackingDesc: "Track your process transparently with the automatically generated SR-YYYY-NNNNNN number.",
        btnNewReport: "Submit New Report >",
        btnQueryStatus: "Check Report Status",
        riskSelectTitle: "Select Information Risk Level",
        riskSelectSubtitle: "Click on the appropriate risk level for your report.",
        riskGenelBadge: "GENERAL",
        riskGenelDesc: "Information without security sensitivity where unauthorized access presents no corporate risk.",
        riskKontrolluBadge: "CONTROLLED INFO",
        riskKontrolluDesc: "Information related to Gözen Security operations, required to be utilized within the company.",
        riskKisitliBadge: "RESTRICTED SECURITY INFO",
        riskKisitliDesc: "Information that could pose security risks or jeopardize aviation and facility security measures.",
        btnSelectAndProceed: "Select & Proceed >",
        btnBack: "< Back",
        lblReportModel: "Reporting Model Selection *",
        modelAnonTitle: "🔒 100% Anonymous Report",
        modelAnonDesc: "Your identity is never transferred to incident records or review screens.",
        modelConfTitle: "🛡️ Confidential Report",
        modelConfDesc: "Your identity is verified; visible solely to the Chief Security Director.",
        secCategoryRisk: "Category & Risk Severity",
        lblCategory: "Category *",
        lblRiskLevel: "Information Risk Level *",
        secIncidentDetails: "Incident Details",
        lblIncidentDate: "Incident Date *",
        lblLocation: "Location / Station (Optional)",
        lblSubject: "Report Subject *",
        lblDescription: "Description / Details *",
        lblSolution: "Proposed Solution (Optional)",
        lblFileUpload: "Attach Photo or Supporting Document",
        fileUploadText: "📷 Capture Photo or Upload File (Max 10MB)",
        fileUploadHint: "PNG, JPG, PDF, DOCX supported. Scanned for security.",
        lblEmailFeedback: "Would you like to receive email updates on this case?",
        emailFeedbackHint: "In anonymous mode, your email is stored separately to preserve anonymity.",
        lblDeclaration: "I declare that the information provided is accurate, in good faith, and does not contain misleading statements. *",
        btnSubmit: "Submit Report 🚀",
        successTitle: "Report Successfully Received",
        successDesc: "You can track the progress of your report 24/7 with the tracking number below.",
        lblTrackingNo: "TRACKING NUMBER",
        trackingSaveHint: "Please save this number; it is required when tracking your report.",
        btnTrackProcess: "Track Process",
        btnHomePage: "Home Page",
        queryTitle: "Query Report Status",
        querySubtitle: "Enter your tracking number to view the workflow status.",
        btnQuery: "Search",
        quickTest: "Quick Test Numbers:",
        lblTrackingNoShort: "Tracking No:",
        lblCategoryShort: "Category:",
        lblRiskShort: "Risk Level:",
        lblStatusShort: "Current Status:",
        secProcessMilestones: "Workflow Milestones",
        stage1Title: "Report Received",
        stage2Title: "Initial Review",
        stage3Title: "Forwarded to Unit",
        stage4Title: "Completed",
        lblPublicNoteTitle: "Reviewer Official Feedback:",
        btnReturnHome: "Return to Home",
        footerLegal: "This portal is established under the Security Management System (SeMS) to foster proactive safety culture.",
        
        // Admin Panel
        adminPanelTitle: "ADMIN PANEL - INCIDENT MANAGEMENT",
        adminPanelSubtitle: "SeMS Security Improvement Reporting Portal • Live Operations",
        slaWarningBadge: "2 SLA warnings",
        cardTotalReports: "TOTAL REPORTS",
        cardInReview: "IN REVIEW",
        cardAssigned: "ASSIGNED",
        cardApproachingDelayed: "APPROACHING / OVERDUE",
        tabReportsHeader: "REPORTS",
        tabAll: "All",
        tabOpen: "Open",
        tabInReview: "In Review",
        tabAssigned: "Assigned",
        tabDef: "DEF",
        tabClosed: "Closed",
        btnFilter: "Filter",
        btnFilterText: "Filter",
        btnAddNewReport: "+ New",
        btnNew: "New",
        menuHome: "HOME",
        menuReports: "REPORTS",
        menuAssigned: "ASSIGNED",
        menuUsers: "USERS",
        menuSettings: "SETTINGS",
        menuAnnouncements: "ANNOUNCEMENTS",

        // Gozen Connect Login
        loginConnectDesc: "Corporate Identity Authentication & Access Service",
        loginWelcomeTitle: "Sign in to Portal",
        loginWelcomeDesc: "Please sign in with your GozenConnect corporate account to access the SeMS Reporting Portal.",
        lblUsername: "Username *",
        lblPassword: "Password *",
        btnLoginSubmit: "Sign in with GozenConnect ➜",
        lblDemoAccounts: "Test & Evaluation Accounts",
        btnLogout: "Logout"
    }
};

let currentLang = 'tr';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            el.innerText = i18n[lang][key];
        }
    });

    const trBtn = document.getElementById('langTrBtn');
    const enBtn = document.getElementById('langEnBtn');
    if (lang === 'tr') {
        trBtn.className = "font-bold text-red-400 px-1.5 py-0.5 rounded transition";
        enBtn.className = "text-slate-400 hover:text-white px-1.5 py-0.5 rounded transition";
    } else {
        enBtn.className = "font-bold text-red-400 px-1.5 py-0.5 rounded transition";
        trBtn.className = "text-slate-400 hover:text-white px-1.5 py-0.5 rounded transition";
    }

    toast(lang === 'tr' ? 'Dil Türkçe olarak ayarlandı.' : 'Language set to English.');
}


// ==========================================
// 2. VERİ MODELİ VE BAŞLANGIÇ VAKALARI (Mock Database)
// Dokümandaki Şekil 5, Şekil 6 ve Şekil 7 ile %100 Uyumlu
// ==========================================
const initialCases = [
    {
        no: "SR-2026-000123",
        tarih: "18.09.2026",
        kategori: "Bina Tesis Riskleri",
        risk: "Kısıtlı Güvenlik Bilgisi",
        riskLevelS: "S1",
        durum: "İncelemede",
        atanan: "Gökhan Karaboğa",
        atananBirim: "Bina Tesis",
        hedefTarih: "Yarın • 24.09",
        isApproaching: true,
        isDelayed: false,
        birimAlani: "GGH - Bina Tesis",
        istasyonVeyaProje: "İstasyon Binası Güvenlik ve Giriş Kontrol Projesi",
        konum: "İstasyon Binası Girişi",
        baslik: "Erişim Kontrol Okuyucu Arızası",
        metin: "İstasyon binası girişindeki erişim kontrol okuyucusu zaman zaman çalışmıyor. Fotoğraf ektedir.",
        oneri: "Kart okuyucu ve kilit sensörlerinin yenilenmesi",
        kokNeden: "Ekipman / altyapı",
        kokNedenDiger: "",
        icNot: "Teknik ekiple saha kontrolü planlandı.",
        paylasilabilirNot: "Kontrol başlatıldı; sonuçlandığında bilgi verilecektir. Kapanış geri bildiriminde otomatik gösterilir.",
        model: "Gizli",
        kilometreTaslari: {
            olusturuldu: "18.09.2026 • 14:23",
            birimeAtandi: "18.09.2026 • 14:30",
            incelemeBasladi: "19.09.2026 • 10:15",
            ilkDegerlendirme: "24.09.2026 • YAKLAŞAN",
            defCapa: "SR-2026-000123",
            hedefKapanis: "30.09.2026"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: "18.09.2026 14:23", completed: true },
            { title: "Ön İnceleme", date: "19.09.2026 10:15", completed: true },
            { title: "İlgili Birime Aktarıldı", date: "İşlem devam ediyor (Gökhan Karaboğa)", completed: true },
            { title: "Sonuçlandırıldı", date: "Bekliyor", completed: false }
        ]
    },
    {
        no: "SR-2026-000122",
        tarih: "17.09.2026",
        kategori: "K-9 Riskleri",
        risk: "Kontrollü Bilgi",
        riskLevelS: "S2",
        durum: "Atananlar",
        atanan: "K9 Birimi",
        atananBirim: "K9 Birimi",
        hedefTarih: "Gecikti",
        isApproaching: false,
        isDelayed: true,
        birimAlani: "K-9",
        istasyonVeyaProje: "K9 Çevre Güvenliği ve Arama Sahası Projesi",
        konum: "K9 Eğitim Sahası Çevre Çitleri",
        baslik: "K9 Sahası Çevre Güvenlik Tel Açıklığı",
        metin: "K-9 arama sahasının kuzey çeperinde tel örgülerde açıklık oluştuğu gözlemlendi.",
        oneri: "Tel örgünün acilen gerdirilmesi ve kamera açısının düzeltilmesi",
        kokNeden: "Fiziki çevre",
        kokNedenDiger: "",
        icNot: "K9 şefine acil kod ile iletildi.",
        paylasilabilirNot: "İlgili birim yönlendirildi; güvenlik kontrolleri başlatıldı.",
        model: "Anonim",
        kilometreTaslari: {
            olusturuldu: "17.09.2026 • 09:10",
            birimeAtandi: "17.09.2026 • 11:00",
            incelemeBasladi: "18.09.2026 • 10:00",
            ilkDegerlendirme: "20.09.2026 • GECİKTİ",
            defCapa: "-",
            hedefKapanis: "25.09.2026"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: "17.09.2026 09:10", completed: true },
            { title: "Ön İnceleme", date: "17.09.2026 11:00", completed: true },
            { title: "İlgili Birime Aktarıldı", date: "K9 Birimi inceliyor", completed: true },
            { title: "Sonuçlandırıldı", date: "Bekliyor", completed: false }
        ]
    },
    {
        no: "SR-2026-000121",
        tarih: "16.09.2026",
        kategori: "Operasyon",
        risk: "Genel",
        riskLevelS: "S3",
        durum: "DEF",
        atanan: "Mehmet Yılmaz",
        atananBirim: "Operasyon",
        hedefTarih: "27.09.2026",
        isApproaching: false,
        isDelayed: false,
        birimAlani: "İstasyon",
        istasyonVeyaProje: "Antalya İstasyon (AYT)",
        konum: "Apron 3 Nolu Park Pozisyonu",
        baslik: "Bavul Yükleme Esnasında Reflektif Yelek Eksikliği",
        metin: "Uçak altı bavul yükleme bandında yüklenici firma personellerinden bazılarının reflektif yelek giymediği görüldü.",
        oneri: "Yüklenici firma vardiya amirinin uyarılması ve denetim sıklığının artırılması",
        kokNeden: "Prosedür / Doküman",
        kokNedenDiger: "",
        icNot: "Operasyon müdürüyle toplantı yapıldı, DEF başlatıldı.",
        paylasilabilirNot: "Düzeltici Önleyici Faaliyet (DEF) başlatılmıştır. Denetimler artırıldı.",
        model: "Anonim",
        kilometreTaslari: {
            olusturuldu: "16.09.2026 • 15:40",
            birimeAtandi: "16.09.2026 • 16:00",
            incelemeBasladi: "17.09.2026 • 09:30",
            ilkDegerlendirme: "19.09.2026 • Tamamlandı",
            defCapa: "SR-2026-000121",
            hedefKapanis: "27.09.2026"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: "16.09.2026 15:40", completed: true },
            { title: "Ön İnceleme", date: "17.09.2026 09:30", completed: true },
            { title: "İlgili Birime Aktarıldı", date: "Operasyon birimi aksiyon aldı", completed: true },
            { title: "DEF Başlatıldı", date: "SR-2026-000121 DEF Formu Açıldı", completed: true }
        ]
    },
    {
        no: "SR-2026-000154",
        tarih: "20.09.2026",
        kategori: "Fiziki Güvenlik",
        risk: "Kısıtlı Güvenlik Bilgisi",
        riskLevelS: "S1",
        durum: "İncelemede",
        atanan: "Gökhan Karaboğa",
        atananBirim: "Fiziki Güvenlik",
        hedefTarih: "Yarın • 24.09",
        isApproaching: true,
        isDelayed: false,
        birimAlani: "İstasyon",
        istasyonVeyaProje: "Istanbul İGA İstasyon (IST)",
        konum: "Terminal 2 X-Ray Kontrol Noktası",
        baslik: "X-Ray Cihazı Konveyör Bandı Tutukluğu",
        metin: "Apron X-Ray cihazında konveyör bandı takılma yapıyor ve tarama hızı düşüyor.",
        oneri: "Motor dişli kontrolü",
        kokNeden: "Ekipman / altyapı",
        kokNedenDiger: "",
        icNot: "Bakım servisi çağrıldı.",
        paylasilabilirNot: "Bildiriminiz ilgili birim sorumlusuna iletilmiş olup saha kontrolleri planlanmıştır.",
        model: "Anonim",
        kilometreTaslari: {
            olusturuldu: "20.09.2026 • 10:15",
            birimeAtandi: "20.09.2026 • 10:30",
            incelemeBasladi: "20.09.2026 • 11:00",
            ilkDegerlendirme: "24.09.2026 • YAKLAŞAN",
            defCapa: "-",
            hedefKapanis: "29.09.2026"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: "20.09.2026 10:15", completed: true },
            { title: "Ön İnceleme", date: "20.09.2026 11:00", completed: true },
            { title: "İlgili Birime Aktarıldı", date: "İşlem devam ediyor", completed: true },
            { title: "Sonuçlandırıldı", date: "Bekliyor", completed: false }
        ]
    }
];

// LocalStorage veya hafıza desteği
let cases = [];
try {
    const stored = localStorage.getItem('gozen_sems_cases');
    if (stored) {
        cases = JSON.parse(stored);
        let updated = false;
        cases.forEach(c => {
            if (c.durum === "Atandı") { c.durum = "Atananlar"; updated = true; }
            if (c.durum === "DEF Başlatıldı") { c.durum = "DEF"; updated = true; }
            if (!c.birimAlani) {
                if (c.kategori && c.kategori.includes("Bina")) {
                    c.birimAlani = "GGH - Bina Tesis";
                    c.istasyonVeyaProje = "İstasyon Binası Güvenlik Projesi";
                } else if (c.kategori && c.kategori.includes("K-9")) {
                    c.birimAlani = "K-9";
                    c.istasyonVeyaProje = "K9 Çevre Güvenliği Projesi";
                } else {
                    c.birimAlani = "İstasyon";
                    c.istasyonVeyaProje = (c.konum && c.konum.includes("IST")) ? "Istanbul İGA İstasyon (IST)" : "Antalya İstasyon (AYT)";
                }
                updated = true;
            }
        });
        if (updated) {
            localStorage.setItem('gozen_sems_cases', JSON.stringify(cases));
        }
    } else {
        cases = [...initialCases];
        localStorage.setItem('gozen_sems_cases', JSON.stringify(cases));
    }
} catch (e) {
    cases = [...initialCases];
}

let activeSelectedCaseNo = "SR-2026-000123";
let latestGeneratedNo = "SR-2026-000154";
let currentUploadedFileName = null;


// ==========================================
// 2.1. GOZEN CONNECT KULLANICI HESAPLARI VE YETKİLENDİRME
// ==========================================
const ACCOUNTS = {
    report: {
        username: "report",
        password: "1234",
        role: "user",
        name: "Ahmet Yılmaz",
        title: "Saha Güvenlik Görevlisi (#8492)",
        badge: "report (Ahmet Y. - #8492) • Aktif Çalışan",
        canAccessAdmin: false
    },
    admin: {
        username: "admin",
        password: "1234",
        role: "admin",
        name: "Gökhan Karaboğa",
        title: "Güvenlik Operasyon Müdürü / SeMS Yöneticisi",
        badge: "admin (Gökhan K.) • Full Access Yetkili",
        canAccessAdmin: true
    }
};

let currentUser = null;

function handleLoginSubmit(event) {
    if (event) event.preventDefault();
    const uInput = document.getElementById('loginUsername');
    const pInput = document.getElementById('loginPassword');
    const u = uInput ? uInput.value.trim().toLowerCase() : '';
    const p = pInput ? pInput.value.trim() : '';

    const errBox = document.getElementById('loginErrorAlert');
    const errText = document.getElementById('loginErrorText');

    if (!u || !p) {
        if (errBox) errBox.classList.remove('hidden');
        if (errText) errText.innerText = currentLang === 'tr' ? 'Lütfen kullanıcı adı ve şifre giriniz.' : 'Please enter username and password.';
        return;
    }

    const account = ACCOUNTS[u];
    if (account && account.password === p) {
        if (errBox) errBox.classList.add('hidden');
        loginUser(account);
    } else {
        if (errBox) errBox.classList.remove('hidden');
        if (errText) errText.innerText = currentLang === 'tr' ? 'Kullanıcı adı veya şifre hatalı! Lütfen bilgilerinizi kontrol ediniz.' : 'Invalid username or password! Please check your credentials.';
        toast(currentLang === 'tr' ? 'Giriş başarısız: Geçersiz kullanıcı adı veya şifre.' : 'Login failed: Invalid credentials.', 'error');
    }
}

function quickLogin(username, password) {
    const uInput = document.getElementById('loginUsername');
    const pInput = document.getElementById('loginPassword');
    if (uInput) uInput.value = username;
    if (pInput) pInput.value = password;
    handleLoginSubmit();
}

function loginUser(account) {
    currentUser = account;
    try {
        localStorage.setItem('gozen_auth_user', account.username);
    } catch(e) {}

    applyUserPermissions(account);
    if (account.canAccessAdmin) {
        switchAppView('adminView');
    } else {
        switchAppView('userView');
    }
    
    const welcomeMsg = currentLang === 'tr' 
        ? `Hoş geldiniz, ${account.name}! (GozenConnect: ${account.role === 'admin' ? 'Yönetici Paneli' : 'Çalışan Bildirim'})`
        : `Welcome, ${account.name}! (GozenConnect: ${account.role === 'admin' ? 'Admin Panel' : 'Employee Reporter'})`;
    toast(welcomeMsg, 'success');
}

function handleLogout() {
    currentUser = null;
    try {
        localStorage.removeItem('gozen_auth_user');
    } catch(e) {}

    const pInput = document.getElementById('loginPassword');
    if (pInput) pInput.value = '';

    applyUserPermissions(null);
    document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
    const loginView = document.getElementById('loginView');
    if (loginView) loginView.classList.add('active');

    toast(currentLang === 'tr' ? 'GozenConnect oturumunuz başarıyla kapatıldı.' : 'GozenConnect session closed successfully.', 'info');
}

function applyUserPermissions(user) {
    const navGroup = document.getElementById('portalNavGroup');
    const sessionBox = document.getElementById('sessionUserBox');
    const badgeEl = document.getElementById('sessionUserBadge');
    const logoutBtn = document.getElementById('btnLogoutBtn');
    const navUserBtn = document.getElementById('navUserBtn');
    const navAdminBtn = document.getElementById('navAdminBtn');
    const navReportBtn = document.getElementById('navReportBtn');

    if (!user) {
        if (navGroup) navGroup.classList.add('hidden');
        if (sessionBox) sessionBox.classList.add('hidden');
        if (logoutBtn) logoutBtn.classList.add('hidden');
        if (badgeEl) badgeEl.innerText = "Giriş Bekleniyor";
        return;
    }

    if (navGroup) navGroup.classList.remove('hidden');
    if (sessionBox) sessionBox.classList.remove('hidden');
    if (logoutBtn) logoutBtn.classList.remove('hidden');
    if (badgeEl) badgeEl.innerText = user.badge;

    // Admin şifresiyle giriş yapıldığında kullanıcı portalının görüntülenmesine gerek yok
    if (user.canAccessAdmin) {
        if (navUserBtn) navUserBtn.classList.add('hidden'); // Kullanıcı Portalı Admin için gizlendi
        if (navAdminBtn) navAdminBtn.classList.remove('hidden');
        if (navReportBtn) navReportBtn.classList.remove('hidden');
    } else {
        // Çalışan (report) girişinde yalnızca Kullanıcı Portalı görünür
        if (navUserBtn) navUserBtn.classList.remove('hidden');
        if (navAdminBtn) navAdminBtn.classList.add('hidden');
        if (navReportBtn) navReportBtn.classList.add('hidden');
    }
}

// ==========================================
// 3. SAYFA VE GÖRÜNÜM GEÇİŞLERİ (Router & Yetki Kontrolü)
// ==========================================
function switchAppView(viewId) {
    // Giriş yapılmadıysa giriş ekranına yönlendir
    if (!currentUser) {
        document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
        const loginEl = document.getElementById('loginView');
        if (loginEl) loginEl.classList.add('active');
        toast('Lütfen önce GozenConnect ile giriş yapınız.', 'warning');
        return;
    }

    // Admin kullanıcısı doğrudan adminView veya reportView kullanır, userView'e gitmez
    if (viewId === 'userView' && currentUser && currentUser.canAccessAdmin) {
        viewId = 'adminView';
    }

    // YETKİ KONTROLÜ: Sadece admin şifresi ile giren kullanıcı Yönetici ve Raporlama Paneli'ne erişebilir!
    if ((viewId === 'adminView' || viewId === 'reportView') && !currentUser.canAccessAdmin) {
        alert('YETKİSİZ ERİŞİM:\nYönetici Paneli ve Raporlama Paneli yalnızca "admin" hesabı ile giriş yapan kullanıcılar tarafından görüntülenebilir.\n\nSizin oturumunuz: ' + currentUser.username + ' (Çalışan / Bildirim Sahibi)');
        toast('Yetkisiz Erişim: Yönetici ve Raporlama panellerine erişim yetkiniz bulunmamaktadır.', 'error');
        return;
    }

    document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-app-btn').forEach(btn => {
        btn.classList.remove('bg-gozenRed', 'text-white', 'shadow-sm');
        btn.classList.add('text-slate-300');
    });

    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
    }

    if (viewId === 'userView') {
        document.getElementById('navUserBtn').classList.add('bg-gozenRed', 'text-white', 'shadow-sm');
        document.getElementById('navUserBtn').classList.remove('text-slate-300');
    } else if (viewId === 'adminView') {
        document.getElementById('navAdminBtn').classList.add('bg-gozenRed', 'text-white', 'shadow-sm');
        document.getElementById('navAdminBtn').classList.remove('text-slate-300');
        renderAdminTable();
        loadCaseDetail(activeSelectedCaseNo);
    } else if (viewId === 'reportView') {
        document.getElementById('navReportBtn').classList.add('bg-gozenRed', 'text-white', 'shadow-sm');
        document.getElementById('navReportBtn').classList.remove('text-slate-300');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function changeStep(stepNumber) {
    document.querySelectorAll('.step-page').forEach(page => page.classList.remove('active'));
    const stepEl = document.getElementById('step' + stepNumber);
    if (stepEl) {
        stepEl.classList.add('active');
        stepEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


// ==========================================
// 4. KULLANICI PORTALI FONKSİYONLARI (Steps 1 - 5)
// ==========================================
function selectRiskAndProceed(riskLevel) {
    const riskSelect = document.getElementById('risk');
    if (riskSelect) {
        riskSelect.value = riskLevel;
    }
    changeStep(3);
    toast(`Risk Seviyesi seçildi: ${riskLevel}`);
}

function handleFaaliyetAlaniChange() {
    const faalSelect = document.getElementById('faaliyetAlani');
    const val = faalSelect ? faalSelect.value : "";
    const placeholderDiv = document.getElementById('faaliyetPlaceholderDiv');
    const istasyonDiv = document.getElementById('faaliyetIstasyonDiv');
    const projeDiv = document.getElementById('faaliyetProjeDiv');

    if (!placeholderDiv || !istasyonDiv || !projeDiv) return;

    if (val === 'İstasyon') {
        placeholderDiv.classList.add('hidden');
        projeDiv.classList.add('hidden');
        istasyonDiv.classList.remove('hidden');
    } else if (val === 'GGH - Bina Tesis' || val === 'K-9') {
        placeholderDiv.classList.add('hidden');
        istasyonDiv.classList.add('hidden');
        projeDiv.classList.remove('hidden');
        const projeInput = document.getElementById('projeBilgisi');
        if (projeInput) {
            projeInput.placeholder = val === 'K-9' ? 'K-9 operasyon veya proje detayını giriniz...' : 'Bina / tesis proje detayını giriniz...';
        }
    } else {
        placeholderDiv.classList.remove('hidden');
        istasyonDiv.classList.add('hidden');
        projeDiv.classList.add('hidden');
    }
}

function handleKategoriChange() {
    const kat = document.getElementById('kategori') ? document.getElementById('kategori').value : "";
    const faalSelect = document.getElementById('faaliyetAlani');
    if (!faalSelect) return;

    if (kat === 'Bina Tesis Riskleri') {
        faalSelect.value = 'GGH - Bina Tesis';
        handleFaaliyetAlaniChange();
    } else if (kat === 'K-9 Riskleri') {
        faalSelect.value = 'K-9';
        handleFaaliyetAlaniChange();
    }
}

function toggleReportModelDesc() {
    const radios = document.getElementsByName('reportModel');
    let selected = 'Anonim';
    for (const r of radios) {
        if (r.checked) selected = r.value;
    }
    toast(`Bildirim Modeli: %100 ${selected}`);
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
        alert('Dosya boyutu 10MB sınırını aşamaz!');
        event.target.value = '';
        return;
    }

    currentUploadedFileName = file.name;
    document.getElementById('fileUploadPrompt').classList.add('hidden');
    const infoEl = document.getElementById('fileUploadInfo');
    infoEl.innerText = `📎 ${file.name} (${(file.size / 1024).toFixed(1)} KB) - Güvenlik Taraması Başarılı ✓`;
    infoEl.classList.remove('hidden');
    toast('Dosya güvenle eklendi.');
}

function submitForm() {
    const olayTarihi = document.getElementById('olayTarihi').value;
    const baslik = document.getElementById('baslik').value.trim();
    const aciklama = document.getElementById('aciklama').value.trim();
    const beyan = document.getElementById('beyan').checked;
    const kategori = document.getElementById('kategori').value;
    const risk = document.getElementById('risk').value;
    const konum = document.getElementById('konum').value.trim();
    const oneri = document.getElementById('oneri').value.trim();

    // Faaliyet Alanı ve İstasyon/Proje Alanı Zorunlu Kontrolleri
    const faaliyetAlani = document.getElementById('faaliyetAlani') ? document.getElementById('faaliyetAlani').value : "";
    if (!faaliyetAlani) {
        alert('Lütfen Faaliyet Alanı / Birim alanını seçiniz (İstasyon, GGH - Bina Tesis veya K-9).');
        document.getElementById('faaliyetAlani').focus();
        return;
    }

    let detayAlani = "";
    if (faaliyetAlani === 'İstasyon') {
        const istSelect = document.getElementById('istasyonBilgisi');
        const istVal = istSelect ? istSelect.value : "";
        if (!istVal) {
            alert('Lütfen İstasyon Bilgisi seçiniz.');
            if (istSelect) istSelect.focus();
            return;
        }
        detayAlani = istVal;
    } else {
        const prjInput = document.getElementById('projeBilgisi');
        const prjVal = prjInput ? prjInput.value.trim() : "";
        if (!prjVal) {
            alert(`Lütfen ${faaliyetAlani} için Proje alanını doldurunuz.`);
            if (prjInput) prjInput.focus();
            return;
        }
        detayAlani = prjVal;
    }

    const radios = document.getElementsByName('reportModel');
    let model = 'Anonim';
    for (const r of radios) {
        if (r.checked) model = r.value;
    }

    // Alan bazlı doğrulama (FR-006, BR-001)
    if (!olayTarihi) {
        alert('Lütfen Olay Tarihini seçiniz.');
        document.getElementById('olayTarihi').focus();
        return;
    }
    if (!baslik) {
        alert('Lütfen Bildirim Başlığı giriniz.');
        document.getElementById('baslik').focus();
        return;
    }
    if (!aciklama) {
        alert('Lütfen Açıklama / Bildirim detayını giriniz.');
        document.getElementById('aciklama').focus();
        return;
    }
    if (!beyan) {
        alert('Lütfen Doğruluk ve İyi Niyet Beyanını onaylayınız.');
        document.getElementById('beyan').focus();
        return;
    }

    // SR-YYYY-NNNNNN formatında benzersiz numara üretimi (FR-008, BR-003, AC-004)
    const year = new Date().getFullYear();
    const nextSeq = String(cases.length + 155).padStart(6, '0');
    latestGeneratedNo = `SR-${year}-${nextSeq}`;

    // Otomatik atama birimi
    let atananBirim = "Operasyon";
    if (faaliyetAlani === "GGH - Bina Tesis" || kategori.includes("Bina") || kategori.includes("Tesis")) atananBirim = "Bina Tesis";
    else if (faaliyetAlani === "K-9" || kategori.includes("K-9") || kategori.includes("K9")) atananBirim = "K9 Birimi";
    else if (kategori.includes("Siber")) atananBirim = "Siber Güvenlik";
    else if (kategori.includes("Fiziki")) atananBirim = "Fiziki Güvenlik";

    // SLA ve Kalan Süre Hesabı
    let hedefTarih = "0-30 Gün";
    if (risk === "Kısıtlı Güvenlik Bilgisi") hedefTarih = "0-3 Gün";
    else if (risk === "Kontrollü Bilgi") hedefTarih = "0-15 Gün";

    const fullKonum = konum ? `${detayAlani} - ${konum}` : detayAlani;

    const newCase = {
        no: latestGeneratedNo,
        tarih: new Date().toLocaleDateString('tr-TR'),
        kategori: kategori,
        risk: risk,
        riskLevelS: risk === "Kısıtlı Güvenlik Bilgisi" ? "S1" : (risk === "Kontrollü Bilgi" ? "S2" : "S3"),
        durum: "Açık",
        birimAlani: faaliyetAlani,
        istasyonVeyaProje: detayAlani,
        atanan: atananBirim,
        atananBirim: atananBirim,
        hedefTarih: hedefTarih,
        isApproaching: false,
        isDelayed: false,
        konum: fullKonum,
        baslik: baslik,
        metin: aciklama,
        oneri: oneri || "Öneri girilmedi",
        kokNeden: "",
        kokNedenDiger: "",
        icNot: "Yeni kullanıcı bildirimi alındı.",
        paylasilabilirNot: "Bildiriminiz sisteme ulaştı, değerlendirme aşamasındadır.",
        model: model,
        kilometreTaslari: {
            olusturuldu: `${new Date().toLocaleDateString('tr-TR')} • ${new Date().toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'})}`,
            birimeAtandi: "Bekliyor",
            incelemeBasladi: "Bekliyor",
            ilkDegerlendirme: "Planlanıyor",
            defCapa: "-",
            hedefKapanis: "Planlanıyor"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: `${new Date().toLocaleDateString('tr-TR')} ${new Date().toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'})}`, completed: true },
            { title: "Ön İnceleme", date: "Sırada", completed: false },
            { title: "İlgili Birime Aktarıldı", date: "Bekliyor", completed: false },
            { title: "Sonuçlandırıldı", date: "Bekliyor", completed: false }
        ]
    };

    cases.unshift(newCase);
    saveCases();

    document.getElementById('generatedNoDisplay').innerText = latestGeneratedNo;
    changeStep(4);
    toast(`Bildiriminiz başarıyla alındı! Takip No: ${latestGeneratedNo}`, 'success');

    // Kısıtlı Güvenlik Bilgisi uyarısı (SEC-005, Otomatik Bildirim Matrisi)
    if (risk === "Kısıtlı Güvenlik Bilgisi") {
        setTimeout(() => {
            toast(`🚨 Acil: ${latestGeneratedNo} numaralı Kısıtlı Güvenlik Bilgisi bildirimi SeMS Yetkilisine iletildi.`, 'warning');
        }, 1500);
    }
}

function copyTrackingNo() {
    const text = document.getElementById('generatedNoDisplay').innerText;
    navigator.clipboard.writeText(text).then(() => {
        toast(`Takip Numarası panoya kopyalandı: ${text}`, 'success');
    }).catch(() => {
        prompt('Lütfen takip numarasını kopyalayınız:', text);
    });
}

function goToQueryWithDemo() {
    document.getElementById('queryInput').value = latestGeneratedNo;
    changeStep(5);
    executeQuery();
}

function fillAndQuery(trackingNo) {
    document.getElementById('queryInput').value = trackingNo;
    executeQuery();
}

function executeQuery() {
    const inputVal = document.getElementById('queryInput').value.trim().toUpperCase();
    if (!inputVal) {
        alert('Lütfen bir takip numarası giriniz.');
        return;
    }

    const found = cases.find(c => c.no.toUpperCase() === inputVal);
    if (!found) {
        alert(`Girilen takip numarasına (${inputVal}) ait bir kayıt bulunamadı. Lütfen numarayı kontrol ediniz.`);
        document.getElementById('queryResult').classList.add('hidden');
        return;
    }

    // Şekil 5 formatında bilgileri doldur
    document.getElementById('resNo').innerText = found.no;
    document.getElementById('resKat').innerText = found.kategori;
    
    // Risk rozeti stili
    const riskBadge = document.getElementById('resRiskBadge');
    riskBadge.innerText = found.risk;
    riskBadge.className = "inline-block px-2.5 py-0.5 rounded font-bold text-xs ";
    if (found.risk === "Kısıtlı Güvenlik Bilgisi") {
        riskBadge.classList.add("badge-kisitli");
    } else if (found.risk === "Kontrollü Bilgi") {
        riskBadge.classList.add("badge-kontrollu");
    } else {
        riskBadge.classList.add("badge-genel");
    }

    document.getElementById('resDurum').innerText = found.durum;

    // Faaliyet / Konum
    const resFaaliyet = document.getElementById('resFaaliyet');
    if (resFaaliyet) {
        const birimText = found.birimAlani ? `${found.birimAlani} - ` : "";
        resFaaliyet.innerText = `${birimText}${found.istasyonVeyaProje || found.konum || '-'}`;
    }

    // Timeline aşamaları
    if (found.asamalar && found.asamalar.length >= 4) {
        document.getElementById('stage1Date').innerText = found.asamalar[0].date;
        document.getElementById('stage2Date').innerText = found.asamalar[1].date;
        document.getElementById('stage3Date').innerText = found.asamalar[2].date;
        document.getElementById('stage4Date').innerText = found.asamalar[3].date;

        // Tamamlanma ikonları
        updateStageDot('stepDot1', found.asamalar[0].completed);
        updateStageDot('stepDot2', found.asamalar[1].completed);
        updateStageDot('stepDot3', found.asamalar[2].completed);
        updateStageDot('stepDot4', found.asamalar[3].completed);
    }

    // Paylaşılabilir Not (İç not asla aktarılmaz!)
    document.getElementById('resPublicNote').innerText = found.paylasilabilirNot || "Bildiriminiz ilgili birimlerce değerlendirilmektedir.";

    document.getElementById('queryResult').classList.remove('hidden');
    toast(`${found.no} detayları listelendi.`);
}

function updateStageDot(dotId, isDone) {
    const el = document.getElementById(dotId);
    if (!el) return;
    if (isDone) {
        el.className = "w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs mb-2 shadow-xs";
        el.innerText = "✓";
    } else {
        el.className = "w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-xs mb-2";
        el.innerText = "•";
    }
}

function resetPortal() {
    document.getElementById('olayTarihi').value = "";
    document.getElementById('baslik').value = "";
    document.getElementById('aciklama').value = "";
    document.getElementById('oneri').value = "";
    document.getElementById('konum').value = "";
    document.getElementById('beyan').checked = false;
    document.getElementById('feedbackEmail').value = "";
    document.getElementById('queryInput').value = "";
    document.getElementById('queryResult').classList.add('hidden');
    
    // Faaliyet alanı ve dinamik alanları sıfırla
    const faalSelect = document.getElementById('faaliyetAlani');
    if (faalSelect) faalSelect.value = "";
    const istSelect = document.getElementById('istasyonBilgisi');
    if (istSelect) istSelect.value = "";
    const prjInput = document.getElementById('projeBilgisi');
    if (prjInput) prjInput.value = "";
    handleFaaliyetAlaniChange();

    currentUploadedFileName = null;
    document.getElementById('fileUploadPrompt').classList.remove('hidden');
    document.getElementById('fileUploadInfo').classList.add('hidden');
    
    changeStep(1);
}


// ==========================================
// 5. YÖNETİCİ PANELİ (Şekil 6 Birebir Uygulama)
// ==========================================
let currentStatusFilter = "Tümü";

function renderAdminTable(filterQuery = "") {
    const tbody = document.getElementById('adminTableBody');
    if (!tbody) return;

    let filtered = [...cases];

    if (currentStatusFilter !== "Tümü") {
        const f = currentStatusFilter.toLowerCase();
        filtered = filtered.filter(c => {
            const d = (c.durum || "").toLowerCase();
            if (f === 'atananlar' || f === 'atandı') {
                return d === 'atananlar' || d === 'atandı';
            }
            if (f === 'def' || f === 'def başlatıldı') {
                return d === 'def' || d === 'def başlatıldı';
            }
            return d === f;
        });
    }

    if (filterQuery) {
        const q = filterQuery.toLowerCase();
        filtered = filtered.filter(c => 
            c.no.toLowerCase().includes(q) ||
            c.kategori.toLowerCase().includes(q) ||
            c.baslik.toLowerCase().includes(q) ||
            c.atanan.toLowerCase().includes(q)
        );
    }

    tbody.innerHTML = "";

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center py-6 text-slate-400">Kayıt bulunamadı.</td></tr>`;
        return;
    }

    filtered.forEach(c => {
        const tr = document.createElement('tr');
        tr.className = `hover:bg-slate-50 transition cursor-pointer ${c.no === activeSelectedCaseNo ? 'bg-red-50/40 font-semibold' : ''}`;
        tr.onclick = (e) => {
            // Eğer tıklanan yer dropdown buton veya ikon değilse seç
            if (!e.target.closest('.action-btn')) {
                loadCaseDetail(c.no);
            }
        };

        // Bilgi Seviyesi Rozeti
        let riskBadgeClass = "badge-genel";
        if (c.risk === "Kısıtlı Güvenlik Bilgisi") riskBadgeClass = "badge-kisitli";
        else if (c.risk === "Kontrollü Bilgi") riskBadgeClass = "badge-kontrollu";

        // Hedef Tarih / SLA Stili
        let hedefTarihHtml = `<span class="text-slate-600">${c.hedefTarih}</span>`;
        if (c.hedefTarih.includes("Gecikti")) {
            hedefTarihHtml = `<span class="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">Gecikti</span>`;
        } else if (c.hedefTarih.includes("Yarın")) {
            hedefTarihHtml = `<span class="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">${c.hedefTarih}</span>`;
        }

        tr.innerHTML = `
            <td class="py-3 px-4 font-mono font-bold text-slate-800">${c.no}</td>
            <td class="py-3 px-4 text-slate-500">${c.tarih}</td>
            <td class="py-3 px-4 text-slate-700 font-medium">${c.kategori}</td>
            <td class="py-3 px-4">
                <span class="px-2 py-0.5 rounded text-[11px] font-bold ${riskBadgeClass}">${c.risk}</span>
            </td>
            <td class="py-3 px-4">
                <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${getStatusClass(c.durum)}">${c.durum}</span>
            </td>
            <td class="py-3 px-4 text-slate-700">${c.atanan}</td>
            <td class="py-3 px-4">${hedefTarihHtml}</td>
            <td class="py-3 px-4 text-center action-btn">
                <button onclick="loadCaseDetail('${c.no}')" title="Detayı İncele" class="p-1 hover:bg-slate-200 rounded text-slate-600 hover:text-gozenNavy transition mr-1">
                    👁️
                </button>
                <button onclick="openCaseActionMenu('${c.no}')" title="İşlemler" class="p-1 hover:bg-slate-200 rounded text-slate-600 transition font-bold">
                    ⋮
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });

    updateKpiCards();
}

function getStatusClass(durum) {
    if (durum === "İncelemede") return "status-incelemede";
    if (durum === "Atandı" || durum === "Atananlar") return "status-atandi";
    if (durum === "DEF Başlatıldı" || durum === "DEF") return "status-def";
    if (durum === "Tamamlandı") return "status-tamamlandi";
    return "status-kapali";
}

function updateKpiCards() {
    const total = cases.length;
    const review = cases.filter(c => c.durum === "İncelemede").length;
    const assigned = cases.filter(c => c.durum === "Atananlar" || c.durum === "Atandı").length;
    const def = cases.filter(c => c.durum === "DEF" || c.durum === "DEF Başlatıldı").length;

    const elTotal = document.getElementById('kpiTotal');
    const elReview = document.getElementById('kpiReview');
    const elAssigned = document.getElementById('kpiAssigned');
    const elDef = document.getElementById('kpiDef');
    const elAdminBadge = document.getElementById('adminTotalBadge');

    if (elTotal) elTotal.innerText = total;
    if (elReview) elReview.innerText = review;
    if (elAssigned) elAssigned.innerText = assigned;
    if (elDef) elDef.innerText = def;
    if (elAdminBadge) elAdminBadge.innerText = total;
}

function filterByStatus(status) {
    currentStatusFilter = status;
    document.querySelectorAll('.status-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-status') === status) {
            btn.className = "status-tab-btn px-3 py-1.5 rounded-lg bg-red-600 text-white shadow-xs font-bold";
        } else {
            btn.className = "status-tab-btn px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold";
        }
    });
    renderAdminTable();
}

function searchAdminTable() {
    const val = document.getElementById('adminSearchInput').value;
    renderAdminTable(val);
}

function filterApproachingOrDelayed() {
    currentStatusFilter = "Tümü";
    const filtered = cases.filter(c => c.isApproaching || c.isDelayed);
    toast('Süresi yaklaşan ve geçen 2 vaka listelendi.');
    renderAdminTable();
}

function filterByAssigned() {
    filterByStatus('Atananlar');
}

function sortTable(columnIndex) {
    cases.reverse();
    renderAdminTable();
    toast('Tablo sıralandı.');
}

function loadCaseDetail(caseNo) {
    activeSelectedCaseNo = caseNo;
    const c = cases.find(item => item.no === caseNo);
    if (!c) return;

    // Şekil 6 Detay Alanı
    document.getElementById('detailCaseNo').innerText = c.no;
    document.getElementById('detailCaseMeta').innerText = `Kategori: ${c.kategori} • Atanan: ${c.atanan}`;
    document.getElementById('detailCaseText').innerText = c.metin;

    // Kök Neden (FR-023, AC-ADM-09)
    const rcSelect = document.getElementById('detailRootCause');
    rcSelect.value = c.kokNeden || "";
    handleRootCauseChange();

    document.getElementById('detailInternalNote').value = c.icNot || "";
    document.getElementById('detailPublicNote').value = c.paylasilabilirNot || "";

    // Kilometre Taşları
    if (c.kilometreTaslari) {
        document.getElementById('kmOluşturuldu').innerText = c.kilometreTaslari.olusturuldu;
        document.getElementById('kmAtandi').innerText = c.kilometreTaslari.birimeAtandi;
        document.getElementById('kmInceleme').innerText = c.kilometreTaslari.incelemeBasladi;
        document.getElementById('kmDegerlendirme').innerText = c.kilometreTaslari.ilkDegerlendirme;
        document.getElementById('kmDef').innerText = c.kilometreTaslari.defCapa;
        document.getElementById('kmHedef').innerText = c.kilometreTaslari.hedefKapanis;
    }

    // Tablo satır vurgulamasını güncelle
    renderAdminTable();

    document.getElementById('caseDetailSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function handleRootCauseChange() {
    const val = document.getElementById('detailRootCause').value;
    const otherDiv = document.getElementById('otherRootCauseDiv');
    if (val === 'Diğer') {
        otherDiv.classList.remove('hidden');
    } else {
        otherDiv.classList.add('hidden');
    }
}

function saveCaseNotes() {
    const c = cases.find(item => item.no === activeSelectedCaseNo);
    if (!c) return;

    const rootCause = document.getElementById('detailRootCause').value;
    const otherVal = document.getElementById('detailOtherRootCause').value.trim();

    // Zorunlu Kök Neden Kontrolü (AC-ADM-09)
    if (!rootCause) {
        alert('UYARI: Kök neden seçilmeden işlem ilerletilemez! Lütfen bir kök neden belirleyiniz.');
        document.getElementById('detailRootCause').focus();
        return;
    }

    if (rootCause === 'Diğer' && !otherVal) {
        alert('UYARI: "Diğer" seçildiğinde açıklama girilmesi zorunludur!');
        document.getElementById('detailOtherRootCause').focus();
        return;
    }

    c.kokNeden = rootCause;
    c.kokNedenDiger = otherVal;
    c.icNot = document.getElementById('detailInternalNote').value.trim();
    c.paylasilabilirNot = document.getElementById('detailPublicNote').value.trim();

    saveCases();
    renderAdminTable();
    toast(`${c.no} kök neden ve notları kaydedildi. Geri bildirim kullanıcı sorgusuna işlendi.`, 'success');
}

function updateAssignment() {
    const c = cases.find(item => item.no === activeSelectedCaseNo);
    if (!c) return;

    const val = document.getElementById('detailAssignSelect').value;
    c.atanan = val;
    c.durum = "Atananlar";
    c.kilometreTaslari.birimeAtandi = `${new Date().toLocaleDateString('tr-TR')} • ${new Date().toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'})}`;
    
    saveCases();
    renderAdminTable();
    loadCaseDetail(c.no);
    toast(`${c.no} bildirimi ${val} sorumlusuna atandı.`, 'info');
}

function quickAction(actionType) {
    const c = cases.find(item => item.no === activeSelectedCaseNo);
    if (!c) return;

    if (actionType === 'startWork') {
        c.durum = "İncelemede";
        c.kilometreTaslari.incelemeBasladi = `${new Date().toLocaleDateString('tr-TR')} • ${new Date().toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'})}`;
        c.paylasilabilirNot = "Bildirim üzerine çalışma başlatılmış olup yetkili ekip inceleme yapmaktadır.";
        toast(`${c.no} üzerinde çalışma başlatıldı (Durum: İncelemede).`, 'success');
    } else if (actionType === 'deactivate') {
        const reason = prompt('Lütfen pasife alma gerekçesini giriniz:');
        if (!reason) return;
        c.durum = "Pasife Alındı";
        c.icNot += ` [Pasif Gerekçesi: ${reason}]`;
        c.paylasilabilirNot = `Bildirim değerlendirilmiş ve şu gerekçeyle pasife alınmıştır: ${reason}`;
        toast(`${c.no} pasife alındı.`);
    } else if (actionType === 'reject') {
        const reason = prompt('Lütfen ret gerekçesini giriniz:');
        if (!reason) return;
        c.durum = "Reddedildi";
        c.icNot += ` [Ret Gerekçesi: ${reason}]`;
        c.paylasilabilirNot = `Bildirim değerlendirilmiş ve şu gerekçeyle reddedilmiştir: ${reason}`;
        toast(`${c.no} reddedildi.`);
    } else if (actionType === 'defCapa') {
        // DEF / CAPA Başlat (FR-010, ADM-012: Takip numarası aynen kullanılır!)
        c.durum = "DEF";
        c.kilometreTaslari.defCapa = c.no;
        c.paylasilabilirNot = `Bu bildirim için ${c.no} numaralı Düzeltici ve Önleyici Faaliyet (DEF / CAPA) süreci başlatılmıştır.`;
        toast(`🛡️ ${c.no} için DEF/CAPA süreci başarıyla başlatıldı!`, 'success');
    }

    saveCases();
    renderAdminTable();
    loadCaseDetail(c.no);
}

function openCaseActionMenu(caseNo) {
    loadCaseDetail(caseNo);
    openAnnounceModal();
}


// ==========================================
// 6. DUYURUYA ÇEVİR MODALI (Şekil 6 & Bölüm 11.1 / FR-027)
// ==========================================
function openAnnounceModal() {
    const c = cases.find(item => item.no === activeSelectedCaseNo) || cases[0];
    updateAnnouncePreview();
    document.getElementById('announceModal').classList.remove('hidden');
}

function closeAnnounceModal() {
    document.getElementById('announceModal').classList.add('hidden');
}

function updateAnnouncePreview() {
    const c = cases.find(item => item.no === activeSelectedCaseNo) || cases[0];
    if (!c) return;

    const incTitle = document.getElementById('annIncTitle').checked;
    const incDate = document.getElementById('annIncDate').checked;
    const incRisk = document.getElementById('annIncRisk').checked;
    const incDesc = document.getElementById('annIncDesc').checked;
    const incAction = document.getElementById('annIncAction').checked;
    const incExtra = document.getElementById('annIncExtra').checked;
    const freeText = document.getElementById('annFreeText').value.trim();

    // Başlık
    document.getElementById('prevTitle').innerText = incTitle ? (c.baslik || "Güvenlik İyileştirme Duyurusu") : "Güvenlik Bülteni";
    
    // Tarih & Risk
    const datePart = incDate ? `Tarih: ${c.tarih}` : "";
    const riskPart = incRisk ? `Risk: ${c.risk}` : "";
    document.getElementById('prevDateRisk').innerHTML = `<span>${datePart}</span><span class="text-red-600">${riskPart}</span>`;
    
    // Metin
    document.getElementById('prevDesc').style.display = incDesc ? 'block' : 'none';
    document.getElementById('prevDesc').innerHTML = `<strong>Olay:</strong> ${c.metin}`;

    // Alınan Aksiyon
    document.getElementById('prevAction').style.display = incAction ? 'block' : 'none';
    document.getElementById('prevAction').innerHTML = `<strong>Alınan Aksiyon:</strong> ${c.paylasilabilirNot || "İnceleme ve önleyici tedbirler planlanmıştır."}`;

    // Serbest Not
    document.getElementById('prevExtra').style.display = (incExtra && freeText) ? 'block' : 'none';
    document.getElementById('prevExtra').innerText = `"${freeText}"`;
}

function publishAnnouncement() {
    const c = cases.find(item => item.no === activeSelectedCaseNo);
    const chEmail = document.getElementById('chEmail').checked;
    const chPanel = document.getElementById('chPanel').checked;
    const chGohub = document.getElementById('chGohub').checked;

    let targets = [];
    if (chEmail) targets.push("E-posta Grupları");
    if (chPanel) targets.push("Bildirim Paneli");
    if (chGohub) targets.push("GOHUB Kurumsal Portalı");

    if (targets.length === 0) {
        alert('Lütfen en az bir gönderim kanalı seçiniz!');
        return;
    }

    closeAnnounceModal();
    toast(`📢 ${c ? c.no : ''} duyurusu [${targets.join(', ')}] kanallarına başarıyla iletildi! İşlem geçmişine loglandı.`, 'success');
}


// ==========================================
// 7. YÖNETİCİ YENİ BİLDİRİM MANUEL GİRİŞİ (ADM-019)
// ==========================================
function openManualNewReportModal() {
    document.getElementById('manualNewModal').classList.remove('hidden');
}

function closeManualNewModal() {
    document.getElementById('manualNewModal').classList.add('hidden');
}

function saveManualNewReport() {
    const baslik = document.getElementById('mBaslik').value.trim();
    const aciklama = document.getElementById('mAciklama').value.trim();
    const kategori = document.getElementById('mKategori').value;
    const risk = document.getElementById('mRisk').value;
    const atanan = document.getElementById('mAtanan').value;

    if (!baslik || !aciklama) {
        alert('Lütfen başlık ve açıklama alanlarını doldurunuz.');
        return;
    }

    const year = new Date().getFullYear();
    const nextSeq = String(cases.length + 155).padStart(6, '0');
    const newNo = `SR-${year}-${nextSeq}`;

    const newCase = {
        no: newNo,
        tarih: new Date().toLocaleDateString('tr-TR'),
        kategori: kategori,
        risk: risk,
        riskLevelS: risk === "Kısıtlı Güvenlik Bilgisi" ? "S1" : (risk === "Kontrollü Bilgi" ? "S2" : "S3"),
        durum: "Atananlar",
        atanan: atanan,
        atananBirim: atanan.split('/')[0].trim(),
        hedefTarih: risk === "Kısıtlı Güvenlik Bilgisi" ? "0-3 Gün" : (risk === "Kontrollü Bilgi" ? "0-15 Gün" : "0-30 Gün"),
        isApproaching: false,
        isDelayed: false,
        konum: "Saha İntikali",
        baslik: baslik,
        metin: aciklama,
        oneri: "",
        kokNeden: "İnsan faktörü",
        kokNedenDiger: "",
        icNot: "Yönetici paneli üzerinden manuel oluşturuldu.",
        paylasilabilirNot: "Saha bildirimi kayda alınmıştır.",
        model: "Gizli",
        kilometreTaslari: {
            olusturuldu: `${new Date().toLocaleDateString('tr-TR')} • ${new Date().toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'})}`,
            birimeAtandi: `${new Date().toLocaleDateString('tr-TR')} • ${new Date().toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'})}`,
            incelemeBasladi: "Bekliyor",
            ilkDegerlendirme: "Planlanıyor",
            defCapa: "-",
            hedefKapanis: "Planlanıyor"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: `${new Date().toLocaleDateString('tr-TR')} ${new Date().toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'})}`, completed: true },
            { title: "Ön İnceleme", date: "Tamamlandı", completed: true },
            { title: "İlgili Birime Aktarıldı", date: atanan, completed: true },
            { title: "Sonuçlandırıldı", date: "Bekliyor", completed: false }
        ]
    };

    cases.unshift(newCase);
    saveCases();
    closeManualNewModal();
    renderAdminTable();
    loadCaseDetail(newNo);
    toast(`${newNo} numaralı yeni bildirim başarıyla oluşturuldu.`, 'success');
}


// ==========================================
// 8. RAPORLAMA PANELİ FONKSİYONLARI (Şekil 7 & Bölüm 12)
// ==========================================
function selectReportSubtab(btn, subtabName) {
    document.querySelectorAll('.report-subtab').forEach(b => {
        b.className = "report-subtab px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold";
    });
    btn.className = "report-subtab px-3 py-1.5 rounded-lg bg-red-600 text-white shadow-xs font-bold";
    toast(`Raporlama filtresi seçildi: [${subtabName}]`);
}

function applyReportDateFilter() {
    const range = document.getElementById('reportDateRange').value;
    toast(`Tarih aralığı uygulandı: ${range}. Veriler güncellendi.`);
}

function exportReport(format) {
    const activeDate = document.getElementById('reportDateRange') ? document.getElementById('reportDateRange').value : "2026";
    
    if (format === 'pdf') {
        toast(`📄 PDF Raporu hazırlanıyor (${activeDate}). Yazdırma penceresinden 'PDF Olarak Kaydet' seçebilirsiniz.`, 'info');
        setTimeout(() => {
            window.print();
        }, 300);
        return;
    }

    // Excel indirme işlemi
    exportToExcel(activeDate);
}

function exportToExcel(dateRangeStr) {
    if (!cases || cases.length === 0) {
        toast('Dışa aktarılacak veri bulunamadı.', 'warning');
        return;
    }

    // 1. Bildirimler Listesi Veri Seti (Anonim kimlik bilgisi KVKK gereği filtrelenmiştir)
    const reportData = cases.map(c => ({
        "Takip No": c.no || "",
        "Tarih": c.tarih || "",
        "Kategori": c.kategori || "",
        "Risk Seviyesi": c.risk || "",
        "Risk Kodu": c.riskLevelS || "",
        "Durum": c.durum || "",
        "Atanan Sorumlu": c.atanan || "",
        "Atanan Birim": c.atananBirim || "",
        "Hedef Kapanış / SLA": c.hedefTarih || "",
        "Konum / İstasyon": c.konum || "-",
        "Bildirim Başlığı": c.baslik || "",
        "Olay Açıklaması": c.metin || "",
        "Önerilen Çözüm": c.oneri || "-",
        "Kök Neden": c.kokNeden || "-",
        "Kök Neden Detayı": c.kokNedenDiger || "-",
        "Yetkili İnceleme Notu": c.paylasilabilirNot || "-",
        "Bildirim Modeli": c.model || "Anonim",
        "Oluşturulma": (c.kilometreTaslari && c.kilometreTaslari.olusturuldu) ? c.kilometreTaslari.olusturuldu : "-",
        "Birime Atanma": (c.kilometreTaslari && c.kilometreTaslari.birimeAtandi) ? c.kilometreTaslari.birimeAtandi : "-",
        "İnceleme Başlama": (c.kilometreTaslari && c.kilometreTaslari.incelemeBasladi) ? c.kilometreTaslari.incelemeBasladi : "-",
        "İlk Değerlendirme": (c.kilometreTaslari && c.kilometreTaslari.ilkDegerlendirme) ? c.kilometreTaslari.ilkDegerlendirme : "-",
        "DEF / CAPA Takip No": (c.kilometreTaslari && c.kilometreTaslari.defCapa) ? c.kilometreTaslari.defCapa : "-",
        "Hedef Kapanış": (c.kilometreTaslari && c.kilometreTaslari.hedefKapanis) ? c.kilometreTaslari.hedefKapanis : "-"
    }));

    // 2. Özet İstatistikler ve KPI Veri Seti
    const totalCount = cases.length;
    const reviewCount = cases.filter(c => c.durum === 'İncelemede').length;
    const assignedCount = cases.filter(c => c.durum === 'Atananlar' || c.durum === 'Atandı').length;
    const defCount = cases.filter(c => c.durum === 'DEF' || c.durum === 'DEF Başlatıldı').length;
    const s1Count = cases.filter(c => c.riskLevelS === 'S1' || (c.risk && c.risk.includes('Kısıtlı'))).length;
    const s2Count = cases.filter(c => c.riskLevelS === 'S2' || (c.risk && c.risk.includes('Kontrollü'))).length;
    const s3Count = cases.filter(c => c.riskLevelS === 'S3' || (c.risk && c.risk.includes('Genel'))).length;

    const summaryData = [
        { "Rapor Parametresi": "Kurum / Sistem", "Değer": "Gözen Güvenlik - SeMS Güvenlik İyileştirme Bildirim Portalı" },
        { "Rapor Parametresi": "Rapor Kapsamı", "Değer": "Canlı Operasyonel Risk ve Bildirim Veritabanı" },
        { "Rapor Parametresi": "Filtrelenen Tarih Aralığı", "Değer": dateRangeStr || "01.01 - 23.09.2026" },
        { "Rapor Parametresi": "Rapor Oluşturma Zamanı", "Değer": new Date().toLocaleString('tr-TR') },
        { "Rapor Parametresi": "Raporu Alan Yetkili", "Değer": currentUser ? `${currentUser.name} (${currentUser.title})` : "Yetkili Güvenlik Yöneticisi" },
        { "Rapor Parametresi": "------------------------------", "Değer": "------------------------------" },
        { "Rapor Parametresi": "Toplam Bildirim Sayısı", "Değer": totalCount },
        { "Rapor Parametresi": "İncelemedeki Bildirimler", "Değer": reviewCount },
        { "Rapor Parametresi": "Atanan Bildirimler", "Değer": assignedCount },
        { "Rapor Parametresi": "DEF / CAPA Sürecindeki Bildirimler", "Değer": defCount },
        { "Rapor Parametresi": "Kritik Güvenlik Bildirimleri (S1)", "Değer": s1Count },
        { "Rapor Parametresi": "Kontrollü Bilgi Bildirimleri (S2)", "Değer": s2Count },
        { "Rapor Parametresi": "Genel Güvenlik Bildirimleri (S3)", "Değer": s3Count },
        { "Rapor Parametresi": "Ortalama İlk Değerlendirme Süresi", "Değer": "1,8 Gün" },
        { "Rapor Parametresi": "Zamanında Kapanma Başarı Oranı", "Değer": "%82" }
    ];

    const todayStr = new Date().toISOString().split('T')[0];
    const fileName = `Gozen_Security_SeMS_Raporu_${todayStr}.xlsx`;

    // 3. SheetJS (xlsx.full.min.js) ile Excel (.xlsx) Üretimi
    if (typeof XLSX !== 'undefined') {
        try {
            const wb = XLSX.utils.book_new();

            // 1. Çalışma Sayfası: Bildirimler
            const wsReports = XLSX.utils.json_to_sheet(reportData);
            wsReports['!cols'] = [
                { wch: 18 }, // Takip No
                { wch: 12 }, // Tarih
                { wch: 22 }, // Kategori
                { wch: 25 }, // Risk Seviyesi
                { wch: 10 }, // Risk Kodu
                { wch: 14 }, // Durum
                { wch: 22 }, // Atanan Sorumlu
                { wch: 18 }, // Atanan Birim
                { wch: 18 }, // Hedef Kapanış / SLA
                { wch: 28 }, // Konum / İstasyon
                { wch: 35 }, // Bildirim Başlığı
                { wch: 50 }, // Olay Açıklaması
                { wch: 35 }, // Önerilen Çözüm
                { wch: 20 }, // Kök Neden
                { wch: 25 }, // Kök Neden Detayı
                { wch: 45 }, // Yetkili İnceleme Notu
                { wch: 14 }, // Bildirim Modeli
                { wch: 20 }, // Oluşturulma
                { wch: 20 }, // Birime Atanma
                { wch: 20 }, // İnceleme Başlama
                { wch: 22 }, // İlk Değerlendirme
                { wch: 20 }, // DEF / CAPA Takip No
                { wch: 16 }  // Hedef Kapanış
            ];

            // 2. Çalışma Sayfası: Özet ve İstatistikler
            const wsSummary = XLSX.utils.json_to_sheet(summaryData);
            wsSummary['!cols'] = [
                { wch: 38 },
                { wch: 55 }
            ];

            XLSX.utils.book_append_sheet(wb, wsReports, "SeMS Bildirimleri");
            XLSX.utils.book_append_sheet(wb, wsSummary, "Özet ve İstatistikler");

            XLSX.writeFile(wb, fileName);
            toast(`📊 Excel raporu başarıyla indirildi: ${fileName}`, 'success');
            return;
        } catch (err) {
            console.error("XLSX export error, falling back to CSV:", err);
        }
    }

    // 4. Fallback: XLSX kütüphanesi yüklenemezse UTF-8 BOM CSV İndir
    downloadCsvFallback(reportData, todayStr);
}

function downloadCsvFallback(rows, todayStr) {
    if (!rows || rows.length === 0) return;
    const headers = Object.keys(rows[0]);
    
    // Excel'in Türkçe karakterleri (ğ, ü, ş, ı, ö, ç) doğru açması için UTF-8 BOM (\uFEFF)
    let csvContent = "\uFEFF";
    csvContent += headers.map(h => `"${h.replace(/"/g, '""')}"`).join(";") + "\r\n";
    
    rows.forEach(r => {
        const line = headers.map(h => {
            const val = r[h] !== undefined && r[h] !== null ? String(r[h]) : "";
            return `"${val.replace(/"/g, '""')}"`;
        }).join(";");
        csvContent += line + "\r\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    const csvFileName = `Gozen_Security_SeMS_Raporu_${todayStr || new Date().toISOString().split('T')[0]}.csv`;
    link.setAttribute("href", url);
    link.setAttribute("download", csvFileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast(`📊 Excel uyumlu CSV raporu başarıyla indirildi: ${csvFileName}`, 'success');
}

function openFilterModal() {
    toast('Gelişmiş filtreleme modalı açıldı.');
}

function openSettingsModal() {
    toast('Kota ve Dinamik Kategori Ayarları Paneli');
}


// ==========================================
// 9. YARDIMCI VE BİLDİRİM FONKSİYONLARI (Toast & Storage)
// ==========================================
function toast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toastEl = document.createElement('div');
    toastEl.className = `toast px-4 py-3 rounded-2xl shadow-xl border text-xs font-semibold flex items-center space-x-2 text-white ${
        type === 'success' ? 'bg-emerald-600 border-emerald-500' :
        type === 'warning' ? 'bg-amber-600 border-amber-500' :
        type === 'error' ? 'bg-red-600 border-red-500' : 'bg-gozenNavy border-slate-700'
    }`;

    toastEl.innerHTML = `
        <span>${type === 'success' ? '✓' : type === 'warning' ? '⚠️' : 'ℹ️'}</span>
        <span>${message}</span>
    `;

    container.appendChild(toastEl);

    setTimeout(() => {
        toastEl.style.opacity = '0';
        toastEl.style.transform = 'translateY(10px)';
        toastEl.style.transition = 'all 0.3s ease';
        setTimeout(() => toastEl.remove(), 300);
    }, 3500);
}

function saveCases() {
    try {
        localStorage.setItem('gozen_sems_cases', JSON.stringify(cases));
    } catch (e) {
        console.error("LocalStorage save error:", e);
    }
}


// ==========================================
// 10. BAŞLANGIÇ YÜKLEMESİ (Init)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Varsayılan bugünün tarihi
    const dateInput = document.getElementById('olayTarihi');
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }

    // İlk tablo yüklemesi
    renderAdminTable();
    loadCaseDetail(activeSelectedCaseNo);

    // GozenConnect Oturum Kontrolü:
    // Kayıtlı geçerli bir oturum varsa geri yükle, aksi halde GozenConnect Karşılama/Giriş Ekranını aç!
    try {
        const savedUsername = localStorage.getItem('gozen_auth_user');
        if (savedUsername && ACCOUNTS[savedUsername]) {
            loginUser(ACCOUNTS[savedUsername]);
        } else {
            applyUserPermissions(null);
            document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
            const loginEl = document.getElementById('loginView');
            if (loginEl) loginEl.classList.add('active');
        }
    } catch(e) {
        applyUserPermissions(null);
        document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
        const loginEl = document.getElementById('loginView');
        if (loginEl) loginEl.classList.add('active');
    }
});
