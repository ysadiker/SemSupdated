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
        hedefTarih: "Yarın • 24.09 (Yaklaşan)",
        isApproaching: true,
        isDelayed: false,
        kapandiZamaninda: false,
        birimAlani: "GGH - Bina Tesis",
        istasyonVeyaProje: "İstasyon Binası Güvenlik ve Giriş Kontrol Projesi",
        konum: "İstasyon Binası Girişi",
        baslik: "Erişim Kontrol Okuyucu Arızası",
        metin: "İstasyon binası girişindeki erişim kontrol okuyucusu zaman zaman çalışmıyor. Fotoğraf ektedir.",
        oneri: "Kart okuyucu ve kilit sensörlerinin yenilenmesi",
        kokNeden: "Ekipman / altyapı",
        kokNedenDiger: "",
        icNot: "Teknik ekiple saha kontrolü planlandı. Sistem logları inceleniyor.",
        paylasilabilirNot: "Kontrol başlatıldı; sonuçlandığında bilgi verilecektir. Kapanış geri bildiriminde otomatik gösterilir.",
        model: "Gizli",
        kategoriDegisti: true,
        eskiKategori: "S2 • Operasyon",
        yeniKategori: "S1 • Bina Tesis Riskleri",
        degisiklikGerekcesi: "Etki büyüdü, altyapı arızası teyit edildi",
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
        atanan: "K9 Birimi / Ekrem Çelik",
        atananBirim: "K9 Birimi",
        hedefTarih: "Gecikti (SLA Aşımı)",
        isApproaching: false,
        isDelayed: true,
        kapandiZamaninda: false,
        birimAlani: "K-9",
        istasyonVeyaProje: "K9 Çevre Güvenliği ve Arama Sahası Projesi",
        konum: "K9 Eğitim Sahası Çevre Çitleri",
        baslik: "K9 Sahası Çevre Güvenlik Tel Açıklığı",
        metin: "K-9 arama sahasının kuzey çeperinde tel örgülerde açıklık oluştuğu gözlemlendi.",
        oneri: "Tel örgünün acilen gerdirilmesi ve kamera açısının düzeltilmesi",
        kokNeden: "Fiziki çevre",
        kokNedenDiger: "",
        icNot: "K9 şefine acil kod ile iletildi. Onarım için malzeme bekleniyor.",
        paylasilabilirNot: "İlgili birim yönlendirildi; güvenlik kontrolleri başlatıldı.",
        model: "Anonim",
        kategoriDegisti: false,
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
        hedefTarih: "7 Gün (DEF Sürecinde)",
        isApproaching: false,
        isDelayed: false,
        kapandiZamaninda: false,
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
        kategoriDegisti: false,
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
        atanan: "Canan Demir",
        atananBirim: "Fiziki Güvenlik",
        hedefTarih: "Yarın • 24.09 (Yaklaşan)",
        isApproaching: true,
        isDelayed: false,
        kapandiZamaninda: false,
        birimAlani: "İstasyon",
        istasyonVeyaProje: "Istanbul İGA İstasyon (IST)",
        konum: "Terminal 2 X-Ray Kontrol Noktası",
        baslik: "X-Ray Cihazı Konveyör Bandı Tutukluğu",
        metin: "Apron X-Ray cihazında konveyör bandı takılma yapıyor ve tarama hızı düşüyor.",
        oneri: "Motor dişli kontrolü",
        kokNeden: "Ekipman / altyapı",
        kokNedenDiger: "",
        icNot: "Bakım servisi çağrıldı, acil kod ile parça bekleniyor.",
        paylasilabilirNot: "Bildiriminiz ilgili birim sorumlusuna iletilmiş olup saha kontrolleri planlanmıştır.",
        model: "Anonim",
        kategoriDegisti: false,
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
    },
    {
        no: "SR-2026-000117",
        tarih: "10.08.2026",
        kategori: "K-9 Riskleri",
        risk: "Kontrollü Bilgi",
        riskLevelS: "S2",
        durum: "Kapalı",
        atanan: "K9 Birimi / Ekrem Çelik",
        atananBirim: "K9 Birimi",
        hedefTarih: "Zamanında Kapanan",
        isApproaching: false,
        isDelayed: false,
        kapandiZamaninda: true,
        birimAlani: "K-9",
        istasyonVeyaProje: "K9 Arama Sahası Projesi",
        konum: "K9 Eğitim Sahası",
        baslik: "K9 Arama Alanında Mekanik Kilit Gevşemesi",
        metin: "K9 köpek arama kulübelerinin yakınındaki kilit mekanizmasının gevşediği tespit edildi.",
        oneri: "Mekanik kilit yenilenmeli",
        kokNeden: "Eğitim / yetkinlik",
        kokNedenDiger: "",
        icNot: "Kilit yenilendi, personele eğitim tekrarı verildi.",
        paylasilabilirNot: "Aksiyon tamamlandı, kilit yenilenerek vaka kapatıldı.",
        model: "Gizli",
        kategoriDegisti: true,
        eskiKategori: "Bina Tesis",
        yeniKategori: "K-9 Riskleri",
        degisiklikGerekcesi: "Yeniden inceleme sonucunda K9 birimine aktarıldı",
        kilometreTaslari: {
            olusturuldu: "10.08.2026 • 08:30",
            birimeAtandi: "10.08.2026 • 09:00",
            incelemeBasladi: "10.08.2026 • 11:00",
            ilkDegerlendirme: "11.08.2026 • Tamamlandı",
            defCapa: "-",
            hedefKapanis: "15.08.2026"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: "10.08.2026 08:30", completed: true },
            { title: "Ön İnceleme", date: "10.08.2026 11:00", completed: true },
            { title: "İlgili Birime Aktarıldı", date: "Tamamlandı", completed: true },
            { title: "Sonuçlandırıldı", date: "14.08.2026 Kapatıldı", completed: true }
        ]
    },
    {
        no: "SR-2026-000109",
        tarih: "15.07.2026",
        kategori: "Siber Güvenlik / Bilgi Güvenliği",
        risk: "Kontrollü Bilgi",
        riskLevelS: "S2",
        durum: "Kapalı",
        atanan: "Ali Vural",
        atananBirim: "Siber Güvenlik",
        hedefTarih: "Zamanında Kapanan",
        isApproaching: false,
        isDelayed: false,
        kapandiZamaninda: true,
        birimAlani: "İstasyon",
        istasyonVeyaProje: "İzmir İstasyon (ADB)",
        konum: "Güvenlik Operasyon Merkezi",
        baslik: "Terminal CCTV İstasyonunda Parola Paylaşımı Riski",
        metin: "CCTV operatör bilgisayarında ortak parola kullanımı riski tespit edildi.",
        oneri: "İki aşamalı doğrulama zorunlu kılınmalı",
        kokNeden: "Bilgi teknolojileri",
        kokNedenDiger: "",
        icNot: "Hesaplar bireysel hale getirildi, 2FA aktif edildi.",
        paylasilabilirNot: "Kullanıcı hesapları güncellenerek kapatılmıştır.",
        model: "Anonim",
        kategoriDegisti: true,
        eskiKategori: "S3 • Diğer",
        yeniKategori: "S2 • Kontrollü Bilgi",
        degisiklikGerekcesi: "Tekrarlayan olay sebebiyle kritiklik artırıldı",
        kilometreTaslari: {
            olusturuldu: "15.07.2026 • 13:00",
            birimeAtandi: "15.07.2026 • 14:00",
            incelemeBasladi: "16.07.2026 • 09:00",
            ilkDegerlendirme: "17.07.2026 • Tamamlandı",
            defCapa: "-",
            hedefKapanis: "20.07.2026"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: "15.07.2026 13:00", completed: true },
            { title: "Ön İnceleme", date: "16.07.2026 09:00", completed: true },
            { title: "İlgili Birime Aktarıldı", date: "Tamamlandı", completed: true },
            { title: "Sonuçlandırıldı", date: "19.07.2026 Kapatıldı", completed: true }
        ]
    },
    {
        no: "SR-2026-000094",
        tarih: "05.05.2026",
        kategori: "Fiziki Güvenlik",
        risk: "Genel",
        riskLevelS: "S3",
        durum: "Kapalı",
        atanan: "Canan Demir",
        atananBirim: "Fiziki Güvenlik",
        hedefTarih: "Zamanında Kapanan",
        isApproaching: false,
        isDelayed: false,
        kapandiZamaninda: true,
        birimAlani: "İstasyon",
        istasyonVeyaProje: "Ankara İstasyon (ESB)",
        konum: "Giriş Güvenlik Kapısı 4",
        baslik: "Nöbet Değişimi Esnasında Görev Yeri Boşluğu",
        metin: "Vardiya değişimi yapılırken nöbet kulübesinde yaklaşık 3 dakika personelsiz kalındı.",
        oneri: "Devir-teslim prosedürünün revize edilmesi",
        kokNeden: "İnsan faktörü",
        kokNedenDiger: "",
        icNot: "Personel uyarıldı, amir ile görüşüldü.",
        paylasilabilirNot: "Prosedür hatırlatması yapıldı, vaka sonuçlandırıldı.",
        model: "Anonim",
        kategoriDegisti: true,
        eskiKategori: "Operasyon",
        yeniKategori: "Fiziki Güvenlik",
        degisiklikGerekcesi: "Yetki alanı kontrolü ve görev tanımı eşleşmesi",
        kilometreTaslari: {
            olusturuldu: "05.05.2026 • 16:15",
            birimeAtandi: "05.05.2026 • 17:00",
            incelemeBasladi: "06.05.2026 • 09:30",
            ilkDegerlendirme: "07.05.2026 • Tamamlandı",
            defCapa: "-",
            hedefKapanis: "12.05.2026"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: "05.05.2026 16:15", completed: true },
            { title: "Ön İnceleme", date: "06.05.2026 09:30", completed: true },
            { title: "İlgili Birime Aktarıldı", date: "Tamamlandı", completed: true },
            { title: "Sonuçlandırıldı", date: "10.05.2026 Kapatıldı", completed: true }
        ]
    },
    {
        no: "SR-2026-000082",
        tarih: "12.03.2026",
        kategori: "İş Güvenliği",
        risk: "Genel",
        riskLevelS: "S3",
        durum: "Kapalı",
        atanan: "Gökhan Karaboğa",
        atananBirim: "Bina Tesis",
        hedefTarih: "Zamanında Kapanan",
        isApproaching: false,
        isDelayed: false,
        kapandiZamaninda: true,
        birimAlani: "GGH - Bina Tesis",
        istasyonVeyaProje: "Kargo Depolama Binası Güvenlik Projesi",
        konum: "Kargo Hangarı Girişi",
        baslik: "Kargo Rampasında Zemin Yağlanması ve Kayma Riski",
        metin: "Kargo rampasında forklift yağ kaçağı nedeniyle kaygan zemin oluşmuş.",
        oneri: "Talaş dökülmesi ve rampa temizliği",
        kokNeden: "Personel / kaynak yetersizliği",
        kokNedenDiger: "",
        icNot: "Temizlik yapıldı, forklift bakıma alındı.",
        paylasilabilirNot: "Zemin temizliği sağlandı.",
        model: "Anonim",
        kategoriDegisti: false,
        kilometreTaslari: {
            olusturuldu: "12.03.2026 • 11:20",
            birimeAtandi: "12.03.2026 • 12:00",
            incelemeBasladi: "12.03.2026 • 14:00",
            ilkDegerlendirme: "13.03.2026 • Tamamlandı",
            defCapa: "-",
            hedefKapanis: "16.03.2026"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: "12.03.2026 11:20", completed: true },
            { title: "Ön İnceleme", date: "12.03.2026 14:00", completed: true },
            { title: "İlgili Birime Aktarıldı", date: "Tamamlandı", completed: true },
            { title: "Sonuçlandırıldı", date: "15.03.2026 Kapatıldı", completed: true }
        ]
    },
    {
        no: "SR-2026-000075",
        tarih: "22.02.2026",
        kategori: "Prosedür / İşleyiş Düzenlemesi",
        risk: "Kontrollü Bilgi",
        riskLevelS: "S2",
        durum: "DEF",
        atanan: "Mehmet Yılmaz",
        atananBirim: "Operasyon",
        hedefTarih: "Geciken (Aksiyon Bekleniyor)",
        isApproaching: false,
        isDelayed: true,
        kapandiZamaninda: false,
        birimAlani: "İstasyon",
        istasyonVeyaProje: "İstanbul SAW İstasyon (SAW)",
        konum: "Dış Hatlar Güvenlik Kontrol",
        baslik: "Bagaj Güvenlik Tarama Talimatının Güncellenmemesi",
        metin: "Yeni SHGM güvenlik genelgesi maddelerinin panoda güncellenmediği görüldü.",
        oneri: "Talimat panolarının baskısı ve dağıtımı",
        kokNeden: "Prosedür / Doküman",
        kokNedenDiger: "",
        icNot: "DEF takip süreci başlatıldı, yeni talimatlar onay bekliyor.",
        paylasilabilirNot: "DEF kapsamında talimatlar revize edilmektedir.",
        model: "Gizli",
        kategoriDegisti: false,
        kilometreTaslari: {
            olusturuldu: "22.02.2026 • 10:00",
            birimeAtandi: "22.02.2026 • 11:30",
            incelemeBasladi: "23.02.2026 • 09:00",
            ilkDegerlendirme: "25.02.2026 • Gecikti",
            defCapa: "SR-2026-000075",
            hedefKapanis: "10.03.2026"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: "22.02.2026 10:00", completed: true },
            { title: "Ön İnceleme", date: "23.02.2026 09:00", completed: true },
            { title: "İlgili Birime Aktarıldı", date: "DEF Takibinde", completed: true },
            { title: "DEF Başlatıldı", date: "Aksiyon devam ediyor", completed: true }
        ]
    },
    {
        no: "SR-2026-000060",
        tarih: "10.01.2026",
        kategori: "İç Tehdit",
        risk: "Kısıtlı Güvenlik Bilgisi",
        riskLevelS: "S1",
        durum: "Kapalı",
        atanan: "Gökhan Karaboğa",
        atananBirim: "Fiziki Güvenlik",
        hedefTarih: "Zamanında Kapanan",
        isApproaching: false,
        isDelayed: false,
        kapandiZamaninda: true,
        birimAlani: "İstasyon",
        istasyonVeyaProje: "İstanbul AHL İstasyon (AHL)",
        konum: "VIP Giriş Salonu",
        baslik: "Geçici Kartla Yetkisiz Koridora Geçiş Girişimi",
        metin: "Yüklenici personelin yetkisiz alana geçiş için geçici kart okutması loglandı.",
        oneri: "Geçiş yetkilerinin derhal iptali",
        kokNeden: "Yönetim / gözetim",
        kokNedenDiger: "",
        icNot: "Kart iptal edildi, kurum amirine raporlandı.",
        paylasilabilirNot: "Güvenlik protokolleri işletilerek vaka kapatıldı.",
        model: "Gizli",
        kategoriDegisti: false,
        kilometreTaslari: {
            olusturuldu: "10.01.2026 • 15:00",
            birimeAtandi: "10.01.2026 • 15:30",
            incelemeBasladi: "10.01.2026 • 16:00",
            ilkDegerlendirme: "11.01.2026 • Tamamlandı",
            defCapa: "-",
            hedefKapanis: "14.01.2026"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: "10.01.2026 15:00", completed: true },
            { title: "Ön İnceleme", date: "10.01.2026 16:00", completed: true },
            { title: "İlgili Birime Aktarıldı", date: "Tamamlandı", completed: true },
            { title: "Sonuçlandırıldı", date: "13.01.2026 Kapatıldı", completed: true }
        ]
    },
    {
        no: "SR-2026-000055",
        tarih: "18.09.2026",
        kategori: "Operasyon",
        risk: "Genel",
        riskLevelS: "S3",
        durum: "İncelemede",
        atanan: "Mehmet Yılmaz",
        atananBirim: "Operasyon",
        hedefTarih: "7 Gün (Normal)",
        isApproaching: false,
        isDelayed: false,
        kapandiZamaninda: false,
        birimAlani: "İstasyon",
        istasyonVeyaProje: "Bodrum İstasyon (BJV)",
        konum: "İç Hatlar Bagaj Alım Sahası",
        baslik: "Telsiz İletişiminde Parazit ve İletişim Kopukluğu",
        metin: "Apron telsiz kanal 4 frekansında yoğun parazit nedeniyle anonslar anlaşılamıyor.",
        oneri: "Röle ve anten kontrolü",
        kokNeden: "İletişim",
        kokNedenDiger: "",
        icNot: "Haberleşme ekibine iş emri açıldı.",
        paylasilabilirNot: "İnceleme başlatılmıştır.",
        model: "Anonim",
        kategoriDegisti: false,
        kilometreTaslari: {
            olusturuldu: "18.09.2026 • 09:40",
            birimeAtandi: "18.09.2026 • 10:15",
            incelemeBasladi: "18.09.2026 • 11:30",
            ilkDegerlendirme: "Planlanıyor",
            defCapa: "-",
            hedefKapanis: "25.09.2026"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: "18.09.2026 09:40", completed: true },
            { title: "Ön İnceleme", date: "18.09.2026 11:30", completed: true },
            { title: "İlgili Birime Aktarıldı", date: "İşlem sürüyor", completed: true },
            { title: "Sonuçlandırıldı", date: "Bekliyor", completed: false }
        ]
    },
    {
        no: "SR-2026-000048",
        tarih: "21.09.2026",
        kategori: "Fiziki Güvenlik",
        risk: "Kontrollü Bilgi",
        riskLevelS: "S2",
        durum: "Atananlar",
        atanan: "Canan Demir",
        atananBirim: "Fiziki Güvenlik",
        hedefTarih: "3 Gün (Öncelikli)",
        isApproaching: true,
        isDelayed: false,
        kapandiZamaninda: false,
        birimAlani: "İstasyon",
        istasyonVeyaProje: "Dalaman İstasyon (DLM)",
        konum: "Çevre Tel Örgüsü Sektör 5",
        baslik: "Çevre Tel Boyu Projektör Aydınlatma Arızası",
        metin: "Gece devriyesinde sektör 5 aydınlatma direğinin yanmadığı fark edildi.",
        oneri: "Ampul veya sigorta değişimi",
        kokNeden: "Fiziki çevre",
        kokNedenDiger: "",
        icNot: "Elektrik servisine sevk edildi.",
        paylasilabilirNot: "Bakım ekibi görevlendirildi.",
        model: "Anonim",
        kategoriDegisti: false,
        kilometreTaslari: {
            olusturuldu: "21.09.2026 • 07:15",
            birimeAtandi: "21.09.2026 • 08:30",
            incelemeBasladi: "21.09.2026 • 09:00",
            ilkDegerlendirme: "23.09.2026 • Yaklaşan",
            defCapa: "-",
            hedefKapanis: "26.09.2026"
        },
        asamalar: [
            { title: "Bildirim Alındı", date: "21.09.2026 07:15", completed: true },
            { title: "Ön İnceleme", date: "21.09.2026 09:00", completed: true },
            { title: "İlgili Birime Aktarıldı", date: "İşlem sürüyor", completed: true },
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
        if (!cases || cases.length < initialCases.length) {
            cases = [...initialCases];
            localStorage.setItem('gozen_sems_cases', JSON.stringify(cases));
        } else {
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
        if (typeof applyReportFilters === 'function') {
            applyReportFilters();
        }
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
            // Eğer tıklanan yer işlem butonu değilse seç ve modalı aç
            if (!e.target.closest('.action-btn')) {
                loadCaseDetail(c.no);
                openAdminCaseModal(c.no);
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
                <button onclick="openAdminCaseModal('${c.no}')" title="Detayı İncele (Modal)" class="p-1 hover:bg-slate-200 rounded text-slate-600 hover:text-gozenNavy transition mr-1">
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

    renderAdminTable();
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

// ==========================================
// 5.1. YÖNETİCİ BİLDİRİM İNCELEME MODAL FONKSİYONLARI (ADM-MODAL)
// ==========================================
let modalActiveCaseNo = null;

function openAdminCaseModal(caseNo) {
    modalActiveCaseNo = caseNo;
    const c = cases.find(item => item.no === caseNo);
    if (!c) return;

    document.getElementById("mCaseModalRiskSelect").value = c.risk;

    // Header Bilgileri
    const elNo = document.getElementById('mCaseModalNo');
    const elStatus = document.getElementById('mCaseModalStatusBadge');
    const elModel = document.getElementById('mCaseModalModelBadge');
    if (elNo) elNo.innerText = c.no;
    if (elStatus) {
        elStatus.innerText = c.durum;
        elStatus.className = `px-2.5 py-0.5 rounded-full text-[11px] font-bold ${getStatusClass(c.durum)}`;
    }
    if (elModel) {
        elModel.innerText = c.model === 'Gizli' ? '🛡️ Gizli Bildirim' : '🔒 %100 Anonim Bildirim';
    }

    // 1. Bildirim Detayları ve Kendisi (En Üstte)
    const elTitle = document.getElementById('mCaseModalTitle');
    const elDate = document.getElementById('mCaseModalDate');
    const elCat = document.getElementById('mCaseModalCategory');
    const elLoc = document.getElementById('mCaseModalLocation');
    const elText = document.getElementById('mCaseModalText');
    const elSolBox = document.getElementById('mCaseModalSolutionBox');
    const elSol = document.getElementById('mCaseModalSolution');
    const elRepInfo = document.getElementById('mCaseModalReporterInfo');

    if (elTitle) elTitle.innerText = c.baslik || 'Güvenlik İyileştirme Bildirimi';
    if (elDate) elDate.innerText = `📅 ${c.tarih || '-'}`;
    if (elCat) elCat.innerText = `🏷️ ${c.kategori || '-'}`;
    const locText = (c.birimAlani ? c.birimAlani + ' • ' : '') + (c.istasyonVeyaProje || c.konum || 'Genel Saha');
    if (elLoc) elLoc.innerText = `📍 ${locText}`;
    if (elText) elText.innerText = c.metin || 'Açıklama belirtilmemiş.';
    if (elRepInfo) {
        elRepInfo.innerText = c.model === 'Gizli' ? 'Yetkili Güvenlik İncelemesi' : 'Anonim Kullanıcı Kaydı';
    }
    if (elSolBox && elSol) {
        if (c.oneri && c.oneri.trim()) {
            elSolBox.classList.remove('hidden');
            elSol.innerText = c.oneri;
        } else {
            elSolBox.classList.add('hidden');
        }
    }

    // 2. Risk Seviyesine Göre Termin Süresi (SLA Göstergesi)
    const elSlaBox = document.getElementById('mCaseModalSlaBox');
    const elSlaIcon = document.getElementById('mCaseModalSlaIcon');
    const elRiskBadge = document.getElementById('mCaseModalRiskBadge');
    const elSlaTitle = document.getElementById('mCaseModalSlaTitle');
    const elSlaDesc = document.getElementById('mCaseModalSlaDesc');
    const elSlaStatus = document.getElementById('mCaseModalSlaStatus');

    const isS1 = c.riskLevelS === 'S1' || (c.risk && c.risk.includes('Kısıtlı'));
    const isS2 = c.riskLevelS === 'S2' || (c.risk && c.risk.includes('Kontrollü'));

    if (isS1) {
        if (elSlaBox) elSlaBox.className = "p-4 rounded-2xl border transition shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-red-50/90 border-red-200";
        if (elSlaIcon) elSlaIcon.innerText = "⚡";
        if (elRiskBadge) {
            elRiskBadge.innerText = "S1 • KRİTİK GÜVENLİK";
            elRiskBadge.className = "px-2 py-0.5 rounded text-[10px] font-black bg-red-600 text-white uppercase";
        }
        if (elSlaTitle) elSlaTitle.innerText = "Azami Termin Süresi: 0-3 Gün";
        if (elSlaDesc) elSlaDesc.innerText = "Kısıtlı Güvenlik Bilgisi için termin süresi 0-3 gündür.";
    } else if (isS2) {
        if (elSlaBox) elSlaBox.className = "p-4 rounded-2xl border transition shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50/90 border-amber-200";
        if (elSlaIcon) elSlaIcon.innerText = "⏱️";
        if (elRiskBadge) {
            elRiskBadge.innerText = "S2 • YÜKSEK ÖNCELİK";
            elRiskBadge.className = "px-2 py-0.5 rounded text-[10px] font-black bg-amber-500 text-white uppercase";
        }
        if (elSlaTitle) elSlaTitle.innerText = "Azami Termin Süresi: 0-15 Gün";
        if (elSlaDesc) elSlaDesc.innerText = "Kontrollü Bilgi için termin süresi 0-15 gündür.";
    } else {
        if (elSlaBox) elSlaBox.className = "p-4 rounded-2xl border transition shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-emerald-50/90 border-emerald-200";
        if (elSlaIcon) elSlaIcon.innerText = "📅";
        if (elRiskBadge) {
            elRiskBadge.innerText = "S3 • STANDART GÜVENLİK";
            elRiskBadge.className = "px-2 py-0.5 rounded text-[10px] font-black bg-emerald-600 text-white uppercase";
        }
        if (elSlaTitle) elSlaTitle.innerText = "Azami Termin Süresi: 0-30 Gün";
        if (elSlaDesc) elSlaDesc.innerText = "Genel bilgi için termin süresi 0-30 gündür.";
    }

    if (elSlaStatus) {
        let statusText = c.hedefTarih || "Normal Süreç";
        let statusBadgeClass = "bg-slate-100 text-slate-800 border-slate-300";
        if (c.isDelayed || statusText.includes('Gecikti') || statusText.includes('Aşımı')) {
            statusBadgeClass = "bg-red-100 text-red-900 border-red-300 font-black";
        } else if (c.isApproaching || statusText.includes('Yaklaşan') || statusText.includes('Yarın')) {
            statusBadgeClass = "bg-amber-100 text-amber-900 border-amber-300 font-black";
        } else if (c.kapandiZamaninda || statusText.includes('Zamanında')) {
            statusBadgeClass = "bg-emerald-100 text-emerald-900 border-emerald-300 font-black";
        }
        elSlaStatus.innerText = statusText;
        elSlaStatus.className = `inline-block px-3 py-1 rounded-xl text-xs border ${statusBadgeClass}`;
    }

    // 3. Kök Neden
    const elRootCause = document.getElementById('mCaseModalRootCause');
    const elOtherRootCause = document.getElementById('mCaseModalOtherRootCause');
    if (elRootCause) elRootCause.value = c.kokNeden || "";
    if (elOtherRootCause) elOtherRootCause.value = c.kokNedenDiger || "";
    handleModalRootCauseChange();

    // DEF Durumu
    updateModalDefUI(c);

    // 4. Notlar (Zorunlu Yönetici İç Notu & Opsiyonel Bildirim Sahibi Notu)
    const elIntNote = document.getElementById('mCaseModalInternalNote');
    const elPubNote = document.getElementById('mCaseModalPublicNote');
    if (elIntNote) elIntNote.value = c.icNot || "";
    if (elPubNote) elPubNote.value = c.paylasilabilirNot || "";

    // 5. Atanan Sorumlu & Durum
    const elAssign = document.getElementById('mCaseModalAssignSelect');
    const elStatusSelect = document.getElementById('mCaseModalStatusSelect');
    if (elAssign) elAssign.value = c.atanan || "Bina Tesis / Gökhan Karaboğa";
    if (elStatusSelect) elStatusSelect.value = c.durum || "İncelemede";

    // Modalı Göster
    const modalEl = document.getElementById('adminCaseModal');
    if (modalEl) modalEl.classList.remove('hidden');
}

function closeAdminCaseModal() {
    const modalEl = document.getElementById('adminCaseModal');
    if (modalEl) modalEl.classList.add('hidden');
}

function handleModalRootCauseChange() {
    const val = document.getElementById('mCaseModalRootCause') ? document.getElementById('mCaseModalRootCause').value : "";
    const otherDiv = document.getElementById('mCaseModalOtherRootCauseDiv');
    if (otherDiv) {
        if (val === 'Diğer') {
            otherDiv.classList.remove('hidden');
        } else {
            otherDiv.classList.add('hidden');
        }
    }
}

function updateModalDefUI(c) {
    const isDef = (c.durum === 'DEF' || (c.kilometreTaslari && c.kilometreTaslari.defCapa === c.no));
    const statusText = document.getElementById('mCaseModalDefStatusText');
    const trackingText = document.getElementById('mCaseModalDefTrackingNo');
    const toggleBtn = document.getElementById('mCaseModalDefToggleBtn');
    const defBox = document.getElementById('mCaseModalDefBox');

    if (isDef) {
        if (statusText) statusText.innerText = "DEF / CAPA Süreci Başlatıldı";
        if (trackingText) trackingText.innerText = `Bağlı DEF Takip No: ${c.no}`;
        if (toggleBtn) {
            toggleBtn.innerText = "DEF Aktif ✓";
            toggleBtn.className = "px-3 py-1.5 rounded-lg text-xs font-bold transition bg-purple-700 text-white shadow-xs";
        }
        if (defBox) defBox.className = "p-3 rounded-xl border flex items-center justify-between bg-purple-100/90 border-purple-300";
    } else {
        if (statusText) statusText.innerText = "DEF Süreci Başlatılmadı";
        if (trackingText) trackingText.innerText = "Aynı takip no ile bağlanır";
        if (toggleBtn) {
            toggleBtn.innerText = "DEF Başlat";
            toggleBtn.className = "px-3 py-1.5 rounded-lg text-xs font-bold transition bg-purple-600 hover:bg-purple-700 text-white shadow-xs";
        }
        if (defBox) defBox.className = "p-3 rounded-xl border flex items-center justify-between bg-purple-50 border-purple-200";
    }
}

function toggleModalDefAction() {
    const c = cases.find(item => item.no === modalActiveCaseNo);
    if (!c) return;

    if (c.durum === 'DEF') {
        toast(`${c.no} için DEF süreci zaten aktiftir.`);
        return;
    }

    c.durum = "DEF";
    if (!c.kilometreTaslari) c.kilometreTaslari = {};
    c.kilometreTaslari.defCapa = c.no;
    c.paylasilabilirNot = `Bu bildirim için ${c.no} numaralı Düzeltici ve Önleyici Faaliyet (DEF / CAPA) süreci başlatılmıştır.`;
    
    const statusSelect = document.getElementById('mCaseModalStatusSelect');
    if (statusSelect) statusSelect.value = "DEF";

    const pubNote = document.getElementById('mCaseModalPublicNote');
    if (pubNote && !pubNote.value.trim()) {
        pubNote.value = c.paylasilabilirNot;
    }

    updateModalDefUI(c);
    toast(`🛡️ ${c.no} için DEF / CAPA süreci başlatıldı!`, 'success');
}

function saveAdminCaseModal() {
    const c = cases.find(item => item.no === modalActiveCaseNo);
    if (!c) return;

    // 1. ZORUNLU YÖNETİCİ İÇ NOTU KONTROLÜ
    const internalNote = document.getElementById('mCaseModalInternalNote').value.trim();
    if (!internalNote) {
        alert('UYARI: Yönetici iç notu alanı zorunludur! Lütfen iç operasyonel inceleme notunuzu giriniz.');
        document.getElementById('mCaseModalInternalNote').focus();
        return;
    }

    // 2. KÖK NEDEN KONTROLÜ
    const rootCause = document.getElementById('mCaseModalRootCause').value;
    if (!rootCause) {
        alert('UYARI: Kök neden seçilmeden işlem tamamlanamaz! Lütfen bir kök neden belirleyiniz.');
        document.getElementById('mCaseModalRootCause').focus();
        return;
    }

    const otherRootCause = document.getElementById('mCaseModalOtherRootCause').value.trim();
    if (rootCause === 'Diğer' && !otherRootCause) {
        alert('UYARI: "Diğer" seçildiğinde açıklama girilmesi zorunludur!');
        document.getElementById('mCaseModalOtherRootCause').focus();
        return;
    }

    // 3. OPSİYONEL BİLDİRİM SAHİBİ NOTU
    const publicNote = document.getElementById('mCaseModalPublicNote').value.trim();

    if (!currentUser || !currentUser.canAccessAdmin) return;
    applyCaseRisk(c, document.getElementById("mCaseModalRiskSelect").value);

    // Değerleri Kaydet
    c.icNot = internalNote;
    c.paylasilabilirNot = publicNote;
    c.kokNeden = rootCause;
    c.kokNedenDiger = otherRootCause;
    c.atanan = document.getElementById('mCaseModalAssignSelect').value;
    c.durum = document.getElementById('mCaseModalStatusSelect').value;

    if (c.durum === 'DEF') {
        if (!c.kilometreTaslari) c.kilometreTaslari = {};
        c.kilometreTaslari.defCapa = c.no;
    }

    saveCases();
    renderAdminTable();
    loadCaseDetail(c.no);
    if (typeof applyReportFilters === 'function') {
        applyReportFilters();
    }

    closeAdminCaseModal();
    toast(`✅ ${c.no} bildirim detayları ve yönetici notları başarıyla kaydedildi.`, 'success');
}

function openAnnounceModalFromCurrentCase() {
    if (modalActiveCaseNo) {
        activeSelectedCaseNo = modalActiveCaseNo;
    }
    closeAdminCaseModal();
    openAnnounceModal();
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
// 8. KAPSAMLI RAPORLAMA VE FİLTRELEME MERKEZİ (Şekil 7 & Bölüm 12)
// Toplam Bildirim, Kritiklik, İstasyon, Proje, Kategori, Kök Neden,
// Kapanma Süresi, Aylık/6 Aylık/Yıllık, Değiştirilen Kategoriler
// ==========================================
let activeReportPeriod = 'all'; // 'all', 'monthly', 'sixMonths', 'yearly'
let filteredReportCases = [];

function isDateInPeriod(dateStr, period) {
    if (period === 'all') return true;
    if (!dateStr) return false;
    const parts = dateStr.split('.');
    if (parts.length !== 3) return true;
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    // Sistem operasyonel referans dönemi: 2026 yılı
    if (period === 'monthly') {
        // Son 1 Ay: Eylül 2026 (Ay 9)
        return year === 2026 && month === 9;
    }
    if (period === 'sixMonths') {
        // Son 6 Ay: Nisan - Eylül 2026 (Ay 4..9)
        return year === 2026 && month >= 4 && month <= 9;
    }
    if (period === 'yearly') {
        // Son 1 Yıl: 2026 yılı tümü
        return year === 2026;
    }
    return true;
}

function setReportPeriod(period) {
    activeReportPeriod = period;

    const btnAll = document.getElementById('btnPeriodAll');
    const btnMon = document.getElementById('btnPeriodMonthly');
    const btn6M = document.getElementById('btnPeriod6M');
    const btnYr = document.getElementById('btnPeriodYearly');
    const dateInput = document.getElementById('reportDateRange');

    const allBtns = [btnAll, btnMon, btn6M, btnYr];
    allBtns.forEach(b => {
        if (b) {
            b.className = "period-btn px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition font-bold";
        }
    });

    if (period === 'all' && btnAll) {
        btnAll.className = "period-btn px-2.5 py-1 rounded-lg bg-red-600 text-white shadow-xs transition font-bold";
        if (dateInput) dateInput.value = "Tüm Zamanlar (2026)";
    } else if (period === 'monthly' && btnMon) {
        btnMon.className = "period-btn px-2.5 py-1 rounded-lg bg-red-600 text-white shadow-xs transition font-bold";
        if (dateInput) dateInput.value = "01.09 - 30.09.2026";
    } else if (period === 'sixMonths' && btn6M) {
        btn6M.className = "period-btn px-2.5 py-1 rounded-lg bg-red-600 text-white shadow-xs transition font-bold";
        if (dateInput) dateInput.value = "01.04 - 30.09.2026";
    } else if (period === 'yearly' && btnYr) {
        btnYr.className = "period-btn px-2.5 py-1 rounded-lg bg-red-600 text-white shadow-xs transition font-bold";
        if (dateInput) dateInput.value = "01.01 - 31.12.2026";
    }

    applyReportFilters();
}

function applyReportFilters() {
    const criticalityVal = document.getElementById('rptFilterCriticality') ? document.getElementById('rptFilterCriticality').value : 'all';
    const stationVal = document.getElementById('rptFilterStation') ? document.getElementById('rptFilterStation').value : 'all';
    const projectVal = document.getElementById('rptFilterProject') ? document.getElementById('rptFilterProject').value : 'all';
    const categoryVal = document.getElementById('rptFilterCategory') ? document.getElementById('rptFilterCategory').value : 'all';
    const rootCauseVal = document.getElementById('rptFilterRootCause') ? document.getElementById('rptFilterRootCause').value : 'all';
    const slaVal = document.getElementById('rptFilterSla') ? document.getElementById('rptFilterSla').value : 'all';
    const catChangedChecked = document.getElementById('rptFilterCategoryChanged') ? document.getElementById('rptFilterCategoryChanged').checked : false;

    let filtered = cases.filter(c => {
        // 1. Zaman Periyodu Filtresi
        if (!isDateInPeriod(c.tarih, activeReportPeriod)) return false;

        // 2. Kritiklik Seviyesi Filtresi (S1 / S2 / S3)
        if (criticalityVal !== 'all') {
            if (criticalityVal === 'S1' && !(c.riskLevelS === 'S1' || (c.risk && c.risk.includes('Kısıtlı')))) return false;
            if (criticalityVal === 'S2' && !(c.riskLevelS === 'S2' || (c.risk && c.risk.includes('Kontrollü')))) return false;
            if (criticalityVal === 'S3' && !(c.riskLevelS === 'S3' || (c.risk && c.risk.includes('Genel')))) return false;
        }

        // 3. İstasyon Filtresi (AYT, IST, ADB, ESB, SAW, AHL, BJV, DLM)
        if (stationVal !== 'all') {
            const loc = (c.istasyonVeyaProje || '') + ' ' + (c.konum || '') + ' ' + (c.birimAlani || '');
            if (!loc.includes(stationVal)) return false;
        }

        // 4. Proje Filtresi (GGH - Bina Tesis, K-9)
        if (projectVal !== 'all') {
            if (projectVal === 'GGH - Bina Tesis') {
                const isBina = (c.birimAlani === 'GGH - Bina Tesis') || (c.istasyonVeyaProje && c.istasyonVeyaProje.includes('Bina')) || (c.kategori && c.kategori.includes('Bina'));
                if (!isBina) return false;
            } else if (projectVal === 'K-9') {
                const isK9 = (c.birimAlani === 'K-9') || (c.istasyonVeyaProje && (c.istasyonVeyaProje.includes('K-9') || c.istasyonVeyaProje.includes('K9'))) || (c.kategori && c.kategori.includes('K-9'));
                if (!isK9) return false;
            }
        }

        // 5. Kategori Filtresi
        if (categoryVal !== 'all') {
            if (c.kategori !== categoryVal) return false;
        }

        // 6. Kök Neden Filtresi
        if (rootCauseVal !== 'all') {
            if (c.kokNeden !== rootCauseVal) return false;
        }

        // 7. Bildirimin Kapanma Süresi / SLA Durumu
        if (slaVal !== 'all') {
            if (slaVal === 'ontime') {
                if (!(c.kapandiZamaninda || (c.hedefTarih && c.hedefTarih.includes('Zamanında')) || (c.durum === 'Kapalı' && !c.isDelayed))) return false;
            } else if (slaVal === 'approaching') {
                if (!(c.isApproaching || (c.hedefTarih && (c.hedefTarih.includes('Yaklaşan') || c.hedefTarih.includes('Yarın'))))) return false;
            } else if (slaVal === 'delayed') {
                if (!(c.isDelayed || (c.hedefTarih && (c.hedefTarih.includes('Gecikti') || c.hedefTarih.includes('Aşımı'))))) return false;
            } else if (slaVal === 'open') {
                if (c.durum !== 'Açık' && c.durum !== 'İncelemede' && c.durum !== 'Atananlar') return false;
            } else if (slaVal === 'def') {
                if (c.durum !== 'DEF' && !(c.kilometreTaslari && c.kilometreTaslari.defCapa && c.kilometreTaslari.defCapa !== '-')) return false;
            }
        }

        // 8. Değiştirilen Kategoriler Filtresi
        if (catChangedChecked) {
            if (!c.kategoriDegisti) return false;
        }

        return true;
    });

    filteredReportCases = filtered;
    updateReportMetrics(filtered);
    renderReportFilteredTable(filtered);
    renderLiveReportCharts(filtered);
}

function resetReportFilters() {
    activeReportPeriod = 'all';

    const btnAll = document.getElementById('btnPeriodAll');
    const btnMon = document.getElementById('btnPeriodMonthly');
    const btn6M = document.getElementById('btnPeriod6M');
    const btnYr = document.getElementById('btnPeriodYearly');
    if (btnAll) btnAll.className = "period-btn px-2.5 py-1 rounded-lg bg-red-600 text-white shadow-xs transition font-bold";
    if (btnMon) btnMon.className = "period-btn px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition font-bold";
    if (btn6M) btn6M.className = "period-btn px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition font-bold";
    if (btnYr) btnYr.className = "period-btn px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition font-bold";

    const dateInput = document.getElementById('reportDateRange');
    if (dateInput) dateInput.value = "01.01 - 23.09.2026";

    const elCrit = document.getElementById('rptFilterCriticality');
    const elSt = document.getElementById('rptFilterStation');
    const elPrj = document.getElementById('rptFilterProject');
    const elCat = document.getElementById('rptFilterCategory');
    const elRc = document.getElementById('rptFilterRootCause');
    const elSla = document.getElementById('rptFilterSla');
    const elCatCh = document.getElementById('rptFilterCategoryChanged');

    if (elCrit) elCrit.value = 'all';
    if (elSt) elSt.value = 'all';
    if (elPrj) elPrj.value = 'all';
    if (elCat) elCat.value = 'all';
    if (elRc) elRc.value = 'all';
    if (elSla) elSla.value = 'all';
    if (elCatCh) elCatCh.checked = false;

    applyReportFilters();
    toast('Raporlama filtreleri başarıyla sıfırlandı.', 'info');
}

function updateReportMetrics(filtered) {
    const totalEl = document.getElementById('rptKpiTotal');
    const s1s2s3El = document.getElementById('rptKpiS1S2S3');
    const openDelayedEl = document.getElementById('rptKpiOpenDelayed');
    const evalEl = document.getElementById('rptKpiFirstEval');
    const onTimeEl = document.getElementById('rptKpiOnTimeRate');

    const total = filtered.length;
    const s1 = filtered.filter(c => c.riskLevelS === 'S1' || (c.risk && c.risk.includes('Kısıtlı'))).length;
    const s2 = filtered.filter(c => c.riskLevelS === 'S2' || (c.risk && c.risk.includes('Kontrollü'))).length;
    const s3 = filtered.filter(c => c.riskLevelS === 'S3' || (c.risk && c.risk.includes('Genel'))).length;
    const openCount = filtered.filter(c => c.durum === 'İncelemede' || c.durum === 'Açık' || c.durum === 'Atananlar').length;
    const delayedCount = filtered.filter(c => c.isDelayed || (c.hedefTarih && c.hedefTarih.includes('Gecikti'))).length;
    const onTimeCount = filtered.filter(c => c.kapandiZamaninda || (c.hedefTarih && c.hedefTarih.includes('Zamanında'))).length;
    const closedCount = filtered.filter(c => c.durum === 'Kapalı').length;

    const onTimePct = closedCount > 0 ? Math.round((onTimeCount / closedCount) * 100) : (total > 0 ? 82 : 0);

    if (totalEl) totalEl.innerText = `${total}`;
    if (s1s2s3El) s1s2s3El.innerText = `${s1} / ${s2} / ${s3}`;
    if (openDelayedEl) openDelayedEl.innerText = `${openCount} / ${delayedCount}`;
    if (evalEl) evalEl.innerText = '1,8 gün';
    if (onTimeEl) onTimeEl.innerText = `%${onTimePct}`;

    // Aktif Bilgi Şeridi Metinleri
    const summaryText = document.getElementById('rptFilterSummaryText');
    const matchText = document.getElementById('rptFilterMatchText');
    let summaryParts = [];
    if (activeReportPeriod !== 'all') {
        summaryParts.push(activeReportPeriod === 'monthly' ? 'Aylık Dönem' : (activeReportPeriod === 'sixMonths' ? '6 Aylık Dönem' : 'Yıllık Dönem'));
    }
    const catVal = document.getElementById('rptFilterCategory') ? document.getElementById('rptFilterCategory').value : 'all';
    if (catVal !== 'all') summaryParts.push(catVal);
    const stVal = document.getElementById('rptFilterStation') ? document.getElementById('rptFilterStation').value : 'all';
    if (stVal !== 'all') summaryParts.push(stVal);
    const prjVal = document.getElementById('rptFilterProject') ? document.getElementById('rptFilterProject').value : 'all';
    if (prjVal !== 'all') summaryParts.push(prjVal);
    const critVal = document.getElementById('rptFilterCriticality') ? document.getElementById('rptFilterCriticality').value : 'all';
    if (critVal !== 'all') summaryParts.push(critVal);
    const rcVal = document.getElementById('rptFilterRootCause') ? document.getElementById('rptFilterRootCause').value : 'all';
    if (rcVal !== 'all') summaryParts.push(rcVal);
    const slaVal = document.getElementById('rptFilterSla') ? document.getElementById('rptFilterSla').value : 'all';
    if (slaVal !== 'all') summaryParts.push(slaVal === 'ontime' ? 'Zamanında Kapananlar' : slaVal);
    const catCh = document.getElementById('rptFilterCategoryChanged') ? document.getElementById('rptFilterCategoryChanged').checked : false;
    if (catCh) summaryParts.push('Kategori Değişiklikleri');

    if (summaryText) {
        summaryText.innerText = summaryParts.length > 0 ? summaryParts.join(' • ') : 'Tüm Kriterler Aktif (Filtresiz)';
    }
    if (matchText) {
        matchText.innerText = `Filtrelenen: ${total} / Toplam: ${cases.length} Bildirim`;
    }
}

function renderReportFilteredTable(list) {
    const tbody = document.getElementById('rptTableBody');
    const badge = document.getElementById('rptTableCountBadge');
    if (badge) badge.innerText = `${list.length} Kayıt`;
    if (!tbody) return;

    tbody.innerHTML = "";
    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" class="text-center py-6 text-slate-400 font-semibold">Seçilen filtre kriterlerine uygun bildirim kaydı bulunamadı.</td></tr>`;
        return;
    }

    list.forEach(c => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50 transition cursor-pointer";
        tr.onclick = (e) => {
            if (!e.target.closest('button')) {
                openAdminCaseModal(c.no);
            }
        };

        let riskBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold badge-genel">S3</span>`;
        if (c.riskLevelS === 'S1' || (c.risk && c.risk.includes('Kısıtlı'))) {
            riskBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold badge-kisitli">S1 • Kritik</span>`;
        } else if (c.riskLevelS === 'S2' || (c.risk && c.risk.includes('Kontrollü'))) {
            riskBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold badge-kontrollu">S2 • Yüksek</span>`;
        }

        let slaBadge = `<span class="text-slate-600">${c.hedefTarih || '-'}</span>`;
        if (c.isDelayed || (c.hedefTarih && (c.hedefTarih.includes('Gecikti') || c.hedefTarih.includes('Aşımı')))) {
            slaBadge = `<span class="bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded font-bold text-[10px]">Gecikti</span>`;
        } else if (c.isApproaching || (c.hedefTarih && (c.hedefTarih.includes('Yaklaşan') || c.hedefTarih.includes('Yarın')))) {
            slaBadge = `<span class="bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded font-bold text-[10px]">${c.hedefTarih}</span>`;
        } else if (c.kapandiZamaninda || (c.hedefTarih && c.hedefTarih.includes('Zamanında'))) {
            slaBadge = `<span class="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold text-[10px]">Zamanında</span>`;
        }

        const loc = c.istasyonVeyaProje || c.konum || (c.birimAlani || '-');

        tr.innerHTML = `
            <td class="py-3 px-4 font-mono font-bold text-slate-800">${c.no}</td>
            <td class="py-3 px-4 text-slate-500">${c.tarih}</td>
            <td class="py-3 px-4 font-semibold text-slate-800">${c.kategori}</td>
            <td class="py-3 px-4 text-slate-600">${loc}</td>
            <td class="py-3 px-4">${riskBadge}</td>
            <td class="py-3 px-4 text-slate-700">${c.kokNeden || '-'}</td>
            <td class="py-3 px-4">${slaBadge}</td>
            <td class="py-3 px-4"><span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${getStatusClass(c.durum)}">${c.durum}</span></td>
            <td class="py-3 px-4 text-center">
                <button onclick="openAdminCaseModal('${c.no}')" class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition text-[11px]">
                    İncele
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function selectReportSubtab(btn, subtabName) {
    document.querySelectorAll('.report-subtab').forEach(b => {
        b.className = "report-subtab px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold";
    });
    btn.className = "report-subtab px-3 py-1.5 rounded-lg bg-red-600 text-white shadow-xs font-bold";
    
    // Subtab tıklamasında uygun filtreyi otomatik tetikle
    if (subtabName === 'Toplam Bildirim') {
        resetReportFilters();
    } else if (subtabName === 'S1-S3') {
        const el = document.getElementById('rptFilterCriticality');
        if (el) el.value = 'S1';
        applyReportFilters();
    } else if (subtabName === 'Lokasyon / İstasyon') {
        const el = document.getElementById('rptFilterStation');
        if (el) el.focus();
    } else if (subtabName === 'Olay Kategorileri') {
        const el = document.getElementById('rptFilterCategory');
        if (el) el.focus();
    } else if (subtabName === 'Açık / Gecikmiş Aksiyonlar') {
        const el = document.getElementById('rptFilterSla');
        if (el) el.value = 'delayed';
        applyReportFilters();
    } else if (subtabName === 'Zamanında Kapanma') {
        const el = document.getElementById('rptFilterSla');
        if (el) el.value = 'ontime';
        applyReportFilters();
    } else if (subtabName === 'Kök Neden') {
        const el = document.getElementById('rptFilterRootCause');
        if (el) el.focus();
    } else if (subtabName === 'Kritiklik / Kategori Değişiklikleri') {
        const el = document.getElementById('rptFilterCategoryChanged');
        if (el) el.checked = true;
        applyReportFilters();
    } else if (subtabName === 'Aylık / Yıllık Eğilim') {
        setReportPeriod('monthly');
    }

    toast(`Raporlama odak filtre seçildi: [${subtabName}]`);
}

function applyReportDateFilter() {
    applyReportFilters();
    const range = document.getElementById('reportDateRange') ? document.getElementById('reportDateRange').value : "";
    toast(`Filtreler uygulandı. Tarih aralığı: ${range}`);
}

function exportReport(format) {
    const activeDate = document.getElementById('reportDateRange') ? document.getElementById('reportDateRange').value : "2026";
    
    applyReportFilters();
    if (format === 'pdf') {
        preparePdfReport(filteredReportCases);
        toast("PDF raporu hazır. Yazdırma penceresinde PDF Olarak Kaydet seçiniz.");
        window.print();
        return;
    }

    // Excel indirme işlemi
    exportFilteredToExcel(activeDate);
}

function exportFilteredToExcel(dateRangeStr) {
    const list = filteredReportCases;
    if (!list || list.length === 0) {
        toast('Dışa aktarılacak bildirim verisi bulunamadı.', 'warning');
        return;
    }

    // 1. Filtrelenmiş Vaka Listesi
    const reportData = list.map(c => ({
        "Takip No": c.no || "",
        "Tarih": c.tarih || "",
        "Kategori": c.kategori || "",
        "Risk Seviyesi": c.risk || "",
        "Kritiklik Kodu": c.riskLevelS || "",
        "Durum": c.durum || "",
        "Atanan Sorumlu": c.atanan || "",
        "Faaliyet Alanı": c.birimAlani || "-",
        "İstasyon / Proje": c.istasyonVeyaProje || c.konum || "-",
        "Hedef Kapanış / SLA": c.hedefTarih || "",
        "Kök Neden": c.kokNeden || "-",
        "Kök Neden Detayı": c.kokNedenDiger || "-",
        "Kategori Değişikliği": c.kategoriDegisti ? `Evet (${c.eskiKategori || ''} → ${c.yeniKategori || ''})` : "Hayır",
        "Bildirim Başlığı": c.baslik || "",
        "Olay Metni": c.metin || "",
        "Önerilen Çözüm": c.oneri || "-",
        "Yönetici İç Notu": c.icNot || "-",
        "Bildirim Sahibi Notu": c.paylasilabilirNot || "-",
        "Bildirim Modeli": c.model || "Anonim",
        "DEF Takip No": (c.kilometreTaslari && c.kilometreTaslari.defCapa) ? c.kilometreTaslari.defCapa : "-"
    }));

    // 2. Aktif Filtre Parametreleri ve KPI Özeti
    const activePeriodText = activeReportPeriod === 'monthly' ? 'Aylık (Son 1 Ay)' : (activeReportPeriod === 'sixMonths' ? '6 Aylık' : (activeReportPeriod === 'yearly' ? 'Yıllık' : 'Tüm Zamanlar'));
    const critFilter = document.getElementById('rptFilterCriticality') ? document.getElementById('rptFilterCriticality').value : 'all';
    const stFilter = document.getElementById('rptFilterStation') ? document.getElementById('rptFilterStation').value : 'all';
    const prjFilter = document.getElementById('rptFilterProject') ? document.getElementById('rptFilterProject').value : 'all';
    const catFilter = document.getElementById('rptFilterCategory') ? document.getElementById('rptFilterCategory').value : 'all';
    const rcFilter = document.getElementById('rptFilterRootCause') ? document.getElementById('rptFilterRootCause').value : 'all';
    const slaFilter = document.getElementById('rptFilterSla') ? document.getElementById('rptFilterSla').value : 'all';
    const catChFilter = document.getElementById('rptFilterCategoryChanged') ? document.getElementById('rptFilterCategoryChanged').checked : false;

    const s1Count = list.filter(c => c.riskLevelS === 'S1' || (c.risk && c.risk.includes('Kısıtlı'))).length;
    const s2Count = list.filter(c => c.riskLevelS === 'S2' || (c.risk && c.risk.includes('Kontrollü'))).length;
    const s3Count = list.filter(c => c.riskLevelS === 'S3' || (c.risk && c.risk.includes('Genel'))).length;
    const defCount = list.filter(c => c.durum === 'DEF').length;
    const delayedCount = list.filter(c => c.isDelayed || (c.hedefTarih && c.hedefTarih.includes('Gecikti'))).length;
    const onTimeCount = list.filter(c => c.kapandiZamaninda || (c.hedefTarih && c.hedefTarih.includes('Zamanında'))).length;

    const summaryData = [
        { "Rapor Parametresi": "Kurum / Portal", "Değer": "Gözen Security - SeMS Güvenlik İyileştirme Bildirim Portalı" },
        { "Rapor Parametresi": "Rapor Türü", "Değer": "Filtrelenmiş Çok Boyutlu Bildirim Analiz Raporu" },
        { "Rapor Parametresi": "Rapor Oluşturma Zamanı", "Değer": new Date().toLocaleString('tr-TR') },
        { "Rapor Parametresi": "Raporu Alan Yönetici", "Değer": currentUser ? `${currentUser.name} (${currentUser.title})` : "Yetkili Güvenlik Yöneticisi" },
        { "Rapor Parametresi": "------------------------------", "Değer": "------------------------------" },
        { "Rapor Parametresi": "UYGULANAN FİLTRELER", "Değer": "" },
        { "Rapor Parametresi": "• Zaman Periyodu", "Değer": activePeriodText },
        { "Rapor Parametresi": "• Kritiklik Filtresi", "Değer": critFilter === 'all' ? 'Tümü' : critFilter },
        { "Rapor Parametresi": "• İstasyon Filtresi", "Değer": stFilter === 'all' ? 'Tüm İstasyonlar' : stFilter },
        { "Rapor Parametresi": "• Proje Filtresi", "Değer": prjFilter === 'all' ? 'Tüm Projeler' : prjFilter },
        { "Rapor Parametresi": "• Kategori Filtresi", "Değer": catFilter === 'all' ? 'Tüm Kategoriler' : catFilter },
        { "Rapor Parametresi": "• Kök Neden Filtresi", "Değer": rcFilter === 'all' ? 'Tüm Kök Nedenler' : rcFilter },
        { "Rapor Parametresi": "• Kapanma / SLA Filtresi", "Değer": slaFilter === 'all' ? 'Tümü' : slaFilter },
        { "Rapor Parametresi": "• Kategori Değişiklik Filtresi", "Değer": catChFilter ? "Sadece Değiştirilenler" : "Tümü" },
        { "Rapor Parametresi": "------------------------------", "Değer": "------------------------------" },
        { "Rapor Parametresi": "METRİK VE KPI ÖZETİ", "Değer": "" },
        { "Rapor Parametresi": "Sistemdeki Genel Toplam Bildirim", "Değer": cases.length },
        { "Rapor Parametresi": "Filtreye Uyan Bildirim Sayısı", "Değer": list.length },
        { "Rapor Parametresi": "S1 Kritik Bildirimler", "Değer": s1Count },
        { "Rapor Parametresi": "S2 Yüksek Öncelikli Bildirimler", "Değer": s2Count },
        { "Rapor Parametresi": "S3 Standart Bildirimler", "Değer": s3Count },
        { "Rapor Parametresi": "DEF / CAPA Sürecindeki Bildirimler", "Değer": defCount },
        { "Rapor Parametresi": "SLA Aşımı / Geciken Bildirimler", "Değer": delayedCount },
        { "Rapor Parametresi": "Zamanında Kapanan Bildirimler", "Değer": onTimeCount }
    ];

    const todayStr = new Date().toISOString().split('T')[0];
    const fileName = `Gozen_SeMS_Filtreli_Rapor_${todayStr}.xlsx`;

    if (typeof XLSX !== 'undefined') {
        try {
            const wb = XLSX.utils.book_new();
            const wsReports = XLSX.utils.json_to_sheet(reportData);
            const wsSummary = XLSX.utils.json_to_sheet(summaryData);

            wsReports['!cols'] = [
                { wch: 18 }, { wch: 12 }, { wch: 24 }, { wch: 22 }, { wch: 12 },
                { wch: 14 }, { wch: 24 }, { wch: 20 }, { wch: 30 }, { wch: 20 },
                { wch: 22 }, { wch: 24 }, { wch: 24 }, { wch: 35 }, { wch: 50 },
                { wch: 35 }, { wch: 45 }, { wch: 45 }, { wch: 14 }, { wch: 20 }
            ];

            wsSummary['!cols'] = [
                { wch: 38 }, { wch: 55 }
            ];

            XLSX.utils.book_append_sheet(wb, wsReports, "Filtrelenmiş Bildirimler");
            XLSX.utils.book_append_sheet(wb, wsSummary, "Rapor ve Filtre Özeti");

            XLSX.writeFile(wb, fileName);
            toast(`📊 Filtrelenmiş Excel raporu başarıyla indirildi: ${fileName}`, 'success');
            return;
        } catch (err) {
            console.error("XLSX export error, falling back to CSV:", err);
        }
    }

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

const riskSettings = {
    'Genel': {code:'S3', days:30, color:'#10b981'},
    'Kontrollü Bilgi': {code:'S2', days:15, color:'#f59e0b'},
    'Kısıtlı Güvenlik Bilgisi': {code:'S1', days:3, color:'#ef4444'}
};
function previewModalRisk() {
    const risk = document.getElementById('mCaseModalRiskSelect').value;
    const cfg = riskSettings[risk];
    document.getElementById('mCaseModalRiskBadge').textContent = cfg.code + ' • ' + risk;
    document.getElementById('mCaseModalRiskBadge').style.backgroundColor = cfg.color;
    document.getElementById('mCaseModalSlaTitle').textContent = 'Azami Termin Süresi: 0-' + cfg.days + ' Gün';
    document.getElementById('mCaseModalSlaDesc').textContent = 'Kaydettiğinizde seçilen risk seviyesi ve termin uygulanır.';
}
function applyCaseRisk(c, risk) {
    const cfg = riskSettings[risk];
    if (!cfg || c.risk === risk) return;
    (c.riskHistory ||= []).push({from:c.risk, to:risk, at:new Date().toISOString(), by:currentUser.username});
    c.risk = risk;
    c.riskLevelS = cfg.code;
    const parts = c.tarih.split('.').map(Number);
    const due = new Date(parts[2], parts[1]-1, parts[0]);
    due.setDate(due.getDate() + cfg.days);
    const today = new Date(); today.setHours(0,0,0,0);
    const remaining = Math.ceil((due - today)/86400000);
    const closed = ['Kapalı','Reddedildi','Pasif'].includes(c.durum);
    c.isDelayed = !closed && remaining < 0;
    c.isApproaching = !closed && remaining >= 0 && remaining <= 2;
    c.hedefTarih = due.toLocaleDateString('tr-TR') + ' • 0-' + cfg.days + ' Gün' + (c.isDelayed ? ' (Gecikti)' : c.isApproaching ? ' (Yaklaşan)' : '');
    (c.kilometreTaslari ||= {}).hedefKapanis = due.toLocaleDateString('tr-TR');
}
function escapeReportText(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function preparePdfReport(list) {
    const groups = Object.entries(riskSettings).map(([label,cfg]) => ({label,...cfg,count:list.filter(c=>c.risk===label).length}));
    let angle = -Math.PI/2;
    const total = groups.reduce((n,g)=>n+g.count,0);
    const slices = groups.map(g=>{
        if (!g.count) return '';
        if (g.count===total) return `<circle cx="120" cy="120" r="110" fill="${g.color}"/>`;
        const end = angle + g.count/total * 2*Math.PI;
        const path = `<path d="M120 120 L${120+110*Math.cos(angle)} ${120+110*Math.sin(angle)} A110 110 0 ${end-angle>Math.PI?1:0} 1 ${120+110*Math.cos(end)} ${120+110*Math.sin(end)} Z" fill="${g.color}" stroke="white" stroke-width="2"/>`;
        angle=end; return path;
    }).join('');
    const summary = document.getElementById('rptFilterSummaryText')?.textContent || 'Tüm bildirimler';
    document.getElementById('pdfReport').innerHTML = `<h1>Gözen Security — SeMS Bildirim Raporu</h1><p>${escapeReportText(new Date().toLocaleString('tr-TR'))} • ${list.length} bildirim</p><p>Filtreler: ${escapeReportText(summary)}</p><div class="pdf-chart"><div><h2>Bilgi Risk Seviyesi Dağılımı</h2>${total ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240" role="img" aria-label="Risk dağılımı pasta grafiği">${slices}</svg>` : '<p>Seçili filtrelerde bildirim bulunamadı.</p>'}</div><ul>${groups.map(g=>`<li><span style="color:${g.color}">●</span> ${g.label}: ${g.count} (%${total?(100*g.count/total).toFixed(1):'0'})</li>`).join('')}</ul></div><table><thead><tr><th>Takip No</th><th>Tarih</th><th>Kategori</th><th>Risk Seviyesi</th><th>Durum</th></tr></thead><tbody>${list.map(c=>`<tr>${[c.no,c.tarih,c.kategori,c.risk,c.durum].map(v=>`<td>${escapeReportText(v)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}
window.addEventListener('beforeprint', () => {
    if (currentUser?.canAccessAdmin) { applyReportFilters(); preparePdfReport(filteredReportCases); }
});

function reportPie(groups) {
    const total = groups.reduce((n,g)=>n+g.count,0);
    if (!total) return '<p class="chart-empty">Seçilen filtrelere uygun bildirim bulunamadı.</p>';
    let angle = -Math.PI/2;
    const slices = groups.map(g => {
        if (!g.count) return '';
        const title = `<title>${escapeReportText(g.label)}: ${g.count} (%${(100*g.count/total).toFixed(1)})</title>`;
        if (g.count === total) return `<circle cx="120" cy="120" r="110" fill="${g.color}">${title}</circle>`;
        const end = angle + g.count/total*2*Math.PI;
        const result = `<path d="M120 120 L${120+110*Math.cos(angle)} ${120+110*Math.sin(angle)} A110 110 0 ${end-angle>Math.PI?1:0} 1 ${120+110*Math.cos(end)} ${120+110*Math.sin(end)} Z" fill="${g.color}" stroke="white" stroke-width="2">${title}</path>`;
        angle=end; return result;
    }).join('');
    return `<svg viewBox="0 0 240 240" class="live-pie" role="img" aria-label="${escapeReportText(groups.map(g=>g.label+': '+g.count).join(', '))}">${slices}</svg><ul class="chart-legend">${groups.map(g=>`<li><span style="color:${g.color}">●</span><span>${escapeReportText(g.label)}</span><strong>${g.count} <small>(%${(100*g.count/total).toFixed(1)})</small></strong></li>`).join('')}</ul>`;
}
function renderLiveReportCharts(list) {
    const riskEl = document.getElementById('liveRiskDistribution');
    const categoryEl = document.getElementById('liveCategoryDistribution');
    const trendEl = document.getElementById('liveMonthlyTrend');
    if (!riskEl || !categoryEl || !trendEl) return;
    const riskGroups = Object.entries(riskSettings).map(([label,cfg])=>({label:cfg.code+' • '+label,color:cfg.color,count:list.filter(c=>c.risk===label).length}));
    riskEl.innerHTML = reportPie(riskGroups);
    const counts = new Map();
    list.forEach(c=>counts.set(c.kategori || 'Diğer',(counts.get(c.kategori || 'Diğer') || 0)+1));
    const colors = ['#dc2626','#2563eb','#f59e0b','#10b981','#8b5cf6','#0891b2','#db2777','#64748b'];
    categoryEl.innerHTML = reportPie([...counts].sort((a,b)=>b[1]-a[1]).map(([label,count],i)=>({label,count,color:colors[i%colors.length]})));
    const months = new Map();
    list.forEach(c=>{
        const [day,month,year] = (c.tarih || '').split('.').map(Number);
        if (!day || !month || !year) return;
        const key = year+'-'+String(month).padStart(2,'0');
        months.set(key,(months.get(key)||0)+1);
    });
    if (!months.size) { trendEl.innerHTML='<p class="chart-empty">Seçilen filtrelere uygun bildirim bulunamadı.</p>'; return; }
    const keys=[...months.keys()].sort();
    const first=new Date(Number(keys[0].slice(0,4)),Number(keys[0].slice(5))-1,1);
    const last=new Date(Number(keys.at(-1).slice(0,4)),Number(keys.at(-1).slice(5))-1,1);
    const series=[];
    for (let date=new Date(first);date<=last;date.setMonth(date.getMonth()+1)) {
        const key=date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0');
        series.push({label:date.toLocaleDateString('tr-TR',{month:'short',year:'numeric'}),count:months.get(key)||0});
    }
    const max=Math.max(1,...series.map(s=>s.count));
    const points=series.map((s,i)=>({x:series.length===1?160:30+i*260/(series.length-1),y:150-s.count/max*120,...s}));
    trendEl.innerHTML=`<svg viewBox="0 0 320 180" class="live-trend" role="img" aria-label="Aylık bildirim sayıları"><line x1="30" y1="150" x2="290" y2="150" stroke="#cbd5e1"/><text x="5" y="35" font-size="12">${max}</text><text x="8" y="154" font-size="12">0</text><polyline points="${points.map(p=>p.x+','+p.y).join(' ')}" fill="none" stroke="#dc2626" stroke-width="3"/>${points.map(p=>`<circle cx="${p.x}" cy="${p.y}" r="5" fill="#dc2626"><title>${p.label}: ${p.count}</title></circle>`).join('')}</svg><ul class="chart-legend">${series.map(s=>`<li><span>${s.label}</span><strong>${s.count}</strong></li>`).join('')}</ul>`;
}
