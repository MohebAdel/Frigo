/**
 * Frigo Global Group - Main Interactive Script
 * Multilingual Engine (EN / AR), RFQ Generator, Product Modal, and Micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Multilingual Translation Data (EN / AR)
    // ==========================================
    const translations = {
        en: {
            cold_chain_status: "Cold Chain Status: 100% Operational (-18°C)",
            nav_about: "About Us",
            nav_products: "Products",
            nav_coldchain: "Cold Chain",
            nav_origins: "Global Origins",
            nav_certifications: "Certifications",
            nav_quote_calc: "RFQ Calculator",
            nav_contact: "Contact",
            logo_slogan: "Meat & Frozen food trading",
            cta_quote: "Request Quote",

            hero_badge: "B2B International Food & Protein Trade",
            hero_title: "Connecting Continents Through <span class='gradient-text'>Cold Chain</span> Excellence",
            hero_desc: "Frigo Global Group is an international B2B trading house specializing in premium grade frozen beef, poultry, seafood, and vegetables. We bridge premier slaughterhouses in South America, Europe, and Australasia with high-demand markets worldwide.",
            hero_btn_explore: "Explore Products",
            hero_btn_rfq: "Instant RFQ Tool",
            trust_halal_title: "100% Halal Certified",
            trust_halal_sub: "Accredited slaughter ritual",
            trust_temp_title: "-18°C Cold Chain",
            trust_temp_sub: "GPS & temperature logged",
            trust_global_title: "45+ Export Markets",
            trust_global_sub: "MENA, GCC, Africa & Asia",
            hero_float_temp: "Reefer Temp",
            hero_float_quality: "Food Safety Standard",

            metric_volume: "Annual Shipped Volume",
            metric_countries: "Global Import Destinations",
            metric_origins: "Accredited Source Countries",
            metric_ontime: "On-Time Discharge Compliance",

            about_badge: "About Frigo Global Group",
            about_title: "Global Trading Backbone for International Food Security",
            about_p1: "Founded with a mission to deliver consistent excellence in international protein and frozen commodities, Frigo Global Group manages the complete trade lifecycle. From contracted livestock selection and certified Halal harvesting to full ocean reefer transport and custom clearance assistance.",
            about_p2: "We work directly with major food processors, government procurement agencies, supermarket distributors, and food service wholesale networks across the Middle East, North Africa, the Arabian Gulf, and Asia.",
            about_exp_text: "Years of Cold Chain Trading Expertise",
            feat_1_title: "Direct Origin Contracts",
            feat_1_desc: "Direct relationships with top tier slaughterhouses and processors without unnecessary middle layers.",
            feat_2_title: "Full Documentation & Veterinary Compliance",
            feat_2_desc: "Health certificates, Halal slaughter certificates, bill of lading, and certificate of origin tailored to destination customs.",
            feat_3_title: "Flexible Commercial Incoterms",
            feat_3_desc: "Offering CIF, CFR, and FOB shipments with established payment instruments including confirmed LC.",

            products_badge: "Product Portfolio",
            products_title: "International Certified Wholesale Commodities",
            products_sub: "Strictly inspected, IQF blast frozen, and packaged for commercial wholesale, retail, and manufacturing.",
            filter_all: "All Products",
            filter_beef: "Frozen Beef & Veal",
            filter_poultry: "Poultry & Chicken",
            filter_seafood: "Seafood & Fish",
            filter_veg: "Vegetables & Fries",
            tag_halal: "100% Halal",
            tag_wild: "Ocean Harvest",
            tag_gradeA: "Grade A Selected",
            btn_inquire: "Inquire Pricing",
            btn_details: "Full Specs →",

            p1_title: "Frozen Boneless Beef Cuts",
            p1_desc: "Prime cuts: Striploin, Ribeye, Tenderloin, Chuck Roll, Knuckle, Topside, Silverside, and manufacturing Trimmings (80/20, 90/10).",
            spec_blast: "Blast Frozen",
            spec_20kg: "20-25 KG Cartons",
            spec_vac: "Vacuum Polybag",

            p2_title: "Frozen Whole Chicken & Cuts",
            p2_desc: "Grade A Griller whole chicken (900g-1400g), Boneless Skinless Breast Fillets, Chicken Leg Quarters (CLQ), Wings (3-joint/2-joint), and MDM.",
            spec_gradeA: "Grade A Certified",
            spec_10kg: "10 KG / 15 KG Master",
            spec_poly: "Individual IWP",

            p3_title: "Frozen Seafood & Prime Fish",
            p3_desc: "Atlantic Salmon portions, White & Black Tiger Prawns, Pangasius Fillets, Whole Round Tilapia, Squid Tubes & Rings (Cleaned).",
            spec_iqf: "Individually Quick Frozen",
            spec_glaze: "10-20% Glazing Control",
            spec_haccp: "HACCP Inspected",

            p4_title: "French Fries & Farm Vegetables",
            p4_desc: "Premium Grade A French Fries (6x6mm, 9x9mm, 10x10mm shoestring & crinkle), Sweet Kernel Corn, Green Garden Peas, and 4-way Mixed Vegetables.",
            spec_fries: "Crispy Grade A",
            spec_pack4: "4x2.5 KG Bags",
            spec_natural: "100% Natural Harvest",

            cc_badge: "The Cold Chain Advantage",
            cc_title: "Zero Tolerance for Temperature Fluctuations",
            cc_sub: "How Frigo Global Group guarantees food integrity across 10,000 nautical miles.",
            step1_title: "Origin Blast Freezing",
            step1_desc: "Core temperature brought to -38°C in industrial spiral or air-blast freezing tunnels within hours of harvest to preserve cellular structure and moisture.",
            step2_title: "IoT Reefer Containerization",
            step2_desc: "State of the art 40ft High Cube refrigerated containers equipped with satellite GPS dataloggers tracking temperature, humidity, and airflow 24/7.",
            step3_title: "Dedicated Maritime Corridors",
            step3_desc: "Contracted slots with premier ocean carriers (Maersk, MSC, CMA CGM) ensuring expedited transit times and direct discharge routes.",
            step4_title: "Port Clearance & Delivery",
            step4_desc: "Rapid veterinary clearance at major destination ports with seamless plug-in cold yards and direct handover to wholesale buyers.",

            origins_badge: "Global Footprint",
            origins_title: "Direct Supply Networks From 5 Continents",
            origins_desc: "We strategically source from prime agricultural regions to assure uninterrupted supply, competitive price hedging, and seasonal redundancy for our commercial clients.",
            org_brazil: "Brazil & South America",
            org_australia: "Australia & New Zealand",
            org_europe: "European Union",
            org_usa: "North America (USA & Canada)",
            org_asia: "Southeast Asia",
            org_gcc: "GCC & North Africa Hubs",

            cert_badge: "Uncompromising Quality",
            cert_title: "Certified Global Food Safety Standards",
            cert_sub: "Every container shipped by Frigo Global Group is backed by recognized international and Islamic credentials.",
            cert1_title: "100% Halal Slaughter Authority",
            cert1_desc: "Strict adherence to Islamic Sharia slaughtering regulations, certified by accredited Halal certifying bodies at origin.",
            cert2_title: "ISO 22000 & HACCP",
            cert2_desc: "Comprehensive hazard analysis and critical control points implemented from cutting lines to port handling.",
            cert3_title: "Veterinary Health Certificates",
            cert3_desc: "Issued by national ministry departments (SIF Brazil, USDA, EFSA, DAFF) certifying disease-free status and full traceability.",
            cert4_title: "BRCGS & IFS Food Certified",
            cert4_desc: "Partnered processing facilities adhere to the highest benchmark in global food packaging hygiene and safety standards.",

            rfq_badge: "B2B Trade Inquiries",
            rfq_title: "Request Wholesale Container Quote",
            rfq_desc: "Select your requested food commodity, volume, and destination port to receive a fast, customized CFR/CIF commercial proforma quotation from our international trading desk.",
            perk_1: "Direct competitive export rates (FOB/CFR/CIF)",
            perk_2: "Guaranteed shipment booking within 72 hours",
            perk_3: "Full inspection & certificate package included",
            prefer_chat: "Need immediate assistance?",
            rfq_form_heading: "Instant Quote Request",
            lbl_product_type: "Product Category",
            opt_beef: "Frozen Boneless Beef Cuts",
            opt_poultry: "Frozen Whole Chicken & Cuts",
            opt_lamb: "Frozen Lamb & Mutton",
            opt_seafood: "Frozen Seafood & Fish",
            opt_veg: "French Fries & Frozen Vegetables",
            lbl_volume: "Target Volume",
            lbl_destination: "Destination Port / Country",
            lbl_incoterm: "Incoterm",
            lbl_company: "Company Name",
            lbl_email: "Corporate Email",
            lbl_phone: "Phone / WhatsApp",
            lbl_timeline: "Target Shipment Timeline",
            time_immediate: "Immediate / Next Sailing (10-15 days)",
            time_30: "Within Next 30 Days",
            time_qtr: "Upcoming Quarter Contract",
            lbl_notes: "Special Specifications or Brand Requirements",
            btn_submit_rfq: "Generate Proforma Inquiry",

            test_badge: "Trusted Globally",
            test_title: "What Commercial Buyers Say",
            test1_quote: "\"Frigo Global Group has been our exclusive frozen beef supplier for 3 consecutive years. Temperature dataloggers consistently prove -18°C integrity, and documentation is flawless at Alexandria port clearance.\"",
            test2_quote: "\"Supplying 25+ reefer containers of Grade A whole chicken and fries monthly into Jebel Ali. Fast turnaround, transparent vessel tracking, and genuine Halal compliance.\"",
            test3_quote: "\"In international protein trade, reliability is everything. Frigo Global secures our shipments even through volatile supply seasons in South America with firm price lock.\"",

            contact_badge: "Trading Desks",
            contact_title: "Get in Touch With Our Trading Specialists",
            contact_desc: "Our multicultural commodity desks operate across Dubai, Cairo, and São Paulo to provide seamless trading, documentation, and logistical support.",
            office_dubai: "Dubai Commercial Hub",
            office_cairo: "Cairo Regional Desk",
            office_sp: "São Paulo Origin Desk",
            quick_inquiry: "General & Partnership Inquiry",
            lbl_name: "Full Name",
            lbl_subject: "Subject",
            lbl_message: "Message",
            btn_send_message: "Send Message",

            footer_desc: "Global meat, poultry, seafood and frozen food trading company. Dedicated to continuous cold chain integrity, international certifications, and dependable wholesale partnerships.",
            footer_quick_links: "Quick Navigation",
            footer_commodities: "Commodities",
            footer_market_intel: "Market Intelligence",
            footer_newsletter_desc: "Receive our monthly global protein price indices, livestock slaughter statistics, and freight route updates.",
            btn_subscribe: "Subscribe",
            btn_quote_this: "Request Quote for This Product",
            btn_close: "Close"
        },

        ar: {
            cold_chain_status: "حالة سلسلة التبريد: تعمل بكفاءة 100% (-18°م)",
            nav_about: "من نحن",
            nav_products: "منتجاتنا",
            nav_coldchain: "سلسلة التبريد",
            nav_origins: "مصادر التوريد",
            nav_certifications: "الشهادات والجودة",
            nav_quote_calc: "حاسبة الأسعار",
            nav_contact: "تواصل معنا",
            logo_slogan: "تجارة اللحوم والأغذية المجمدة",
            cta_quote: "طلب عرض أسعار",

            hero_badge: "تجارة الأغذية والبروتين المجمد الدولية B2B",
            hero_title: "نربط القارات بتميز <span class='gradient-text'>سلاسل التبريد</span> الفائقة",
            hero_desc: "مجموعة فريجو العالمية (Frigo Global Group) هي بيت تجارة وتوريد دولي متخصص في اللحوم البقرية، الدواجن، الأسماك والخضروات المجمدة فائقة الجودة. نربط كبرى المسالخ المعتمدة في أمريكا الجنوبية، أوروبا، وأستراليا بالأسواق العالمية الكبرى.",
            hero_btn_explore: "تصفح المنتجات",
            hero_btn_rfq: "طلب تسعير فوري",
            trust_halal_title: "حلال 100% معتمد",
            trust_halal_sub: "ذبح إسلامي بإشراف شرعي",
            trust_temp_title: "تبريد -18° مئوية",
            trust_temp_sub: "مراقبة مستمرة مع تتبع GPS",
            trust_global_title: "أكثر من 45 وجهة تصدير",
            trust_global_sub: "الشرق الأوسط، الخليج، وأفريقيا",
            hero_float_temp: "حرارة الحاوية",
            hero_float_quality: "معايير سلامة الغذاء",

            metric_volume: "حجم الشحن السنوي (طن)",
            metric_countries: "دول الاستيراد العالمية",
            metric_origins: "دول ومزارع المنشأ المعتمدة",
            metric_ontime: "نسبة الالتزام بمواعيد التفريغ",

            about_badge: "نبذة عن فريجو العالمية",
            about_title: "العمود الفقري لتجارة الأغذية وتأمين سلاسل الإمداد الدولية",
            about_p1: "تأسست فريجو العالمية برؤية واضحة لتقديم أعلى مستويات الاحترافية في توريد البروتين والسلع المجمدة دولياً. ندير دورة التجارة الكاملة من اختيار الماشية المعتمدة والذبح الحلال المشرف عليه، إلى الشحن البحري بالحاويات المبردة والتخليص الجمركي.",
            about_p2: "نتعامل مباشرة مع كبرى مصانع الأغذية، هيئات التوريد الحكومية، سلاسل الهايبرماركت، وشركات التموين في مصر، دول الخليج العربي، شمال أفريقيا، وآسيا.",
            about_exp_text: "عاماً من الخبرة في التجارة والتبريد العالمي",
            feat_1_title: "عقود توريد مباشرة من المنشأ",
            feat_1_desc: "شراكات حصرية ومباشرة مع أكبر المسالخ والمصانع العالمية دون وسطاء وتكاليف إضافية.",
            feat_2_title: "توثيق بيطري وشهادات شرعية كاملة",
            feat_2_desc: "شهادات صحية رسمية، شهادات ذبح حلال، وبوالص شحن مطابقة لاشتراطات الجمارك المحلية بدقة.",
            feat_3_title: "شروط تجارية مرنة (Incoterms)",
            feat_3_desc: "توفير الشحن بأنظمة CIF و CFR و FOB وتسهيلات مصرفية عبر اعتمادات مستندية (LC) معتمدة.",

            products_badge: "محفظة المنتجات",
            products_title: "سلع غذائية مجمدة ومعتمدة للتجارة بالجملة",
            products_sub: "فحص بيطري دقيق، تجميد سريع IQF فائق الجودة، وتعبئة تلائم الصناعة والتجزئة.",
            filter_all: "كافة المنتجات",
            filter_beef: "لحوم بقرية مجمدة",
            filter_poultry: "دواجن ومصنعاتها",
            filter_seafood: "أسماك ومأكولات بحرية",
            filter_veg: "بطاطس وخضروات",
            tag_halal: "حلال 100%",
            tag_wild: "صيد بحري نقي",
            tag_gradeA: "نخب أول ممتاز",
            btn_inquire: "طلب تسعير الحاوية",
            btn_details: "المواصفات الفنية ←",

            p1_title: "قطعيات لحوم بقري بالعظم وبدون عظم",
            p1_desc: "قطعيات فاخرة: ستريبلوين، ريب آي، تندرلوين، تشاك رول، سمانة، وش فخذ، ترمنجز تصنيع (80/20 و 90/10).",
            spec_blast: "تجميد صدمة هوائي",
            spec_20kg: "كراتين 20-25 كجم",
            spec_vac: "أكياس فاكيوم محكمة",

            p2_title: "دجاج كامل مجمد وأجزاء دواجن",
            p2_desc: "دجاج كامل مجمد جريلر نخب أول (900-1400 جم)، صدور دجاج مخلية فيليه، أوراك دجاج كاملة، أجنحة، ولحم مفروم ميكانيكياً MDM.",
            spec_gradeA: "شهادة نخب أول Grade A",
            spec_10kg: "كرتون رئيسي 10-15 كجم",
            spec_poly: "تغليف فردي IWP",

            p3_title: "مأكولات بحرية وأسماك فاخرة مجمدة",
            p3_desc: "قطع سالمون أطلسي، جمبري تايجر أبيض وأسود، فيليه سمك باسا، سمك بلطي كامل، وحلقات وأنابيب كاليماري منظفة.",
            spec_iqf: "تجميد فردي سريع IQF",
            spec_glaze: "نسبة جليز مدروسة 10-20%",
            spec_haccp: "خاضع لاشتراطات الهاسب",

            p4_title: "بطاطس نصف مقلية وخضار مشكل",
            p4_desc: "بطاطس نصف مقلية نخب أول (مقاسات 6×6، 9×9، 10×10 مم مقطعة عادية ومموجة)، ذرة حلوة، بازلاء خضراء، وخضار مشكل 4 أصناف.",
            spec_fries: "قرمشة ونخب أول",
            spec_pack4: "أكياس 4×2.5 كجم",
            spec_natural: "حصاد مزارع طبيعي 100%",

            cc_badge: "ميزة سلسلة التبريد المتقدمة",
            cc_title: "صفر تهاون مع أي تغير في درجات الحرارة",
            cc_sub: "كيف تضمن فريجو العالمية سلامة وجودة الشحنات عبر آلاف الأميال البحرية.",
            step1_title: "التجميد الفائق في المنشأ",
            step1_desc: "تصل درجة حرارة قلب المنتج إلى -38°م فور الذبح أو الحصاد للحفاظ على الألياف الطبيعية والعصارة.",
            step2_title: "حاويات ريفير ذكية بتقنية IoT",
            step2_desc: "حاويات 40 قدم هاي كيوب مبردة مزودة بأجهزة استشعار وتتبع متصلة بالأقمار الصناعية 24/7.",
            step3_title: "خطوط ملاحية سريعة ومباشرة",
            step3_desc: "حجوزات مسبقة ومؤكدة مع كبرى خطوط الشحن (Maersk, MSC, CMA CGM) لتقليص مدة الرحلة.",
            step4_title: "سرعة الإفراج والتسليم في الموانئ",
            step4_desc: "إنهاء الإجراءات البيطرية بسرعة وربط الحاويات بكهرباء ساحات التبريد حتى التسليم للمستورد.",

            origins_badge: "شبكة التوريد العالمية",
            origins_title: "عقود توريد مباشرة من 5 قارات",
            origins_desc: "نستورد استراتيجياً من أفضل المناطق الزراعية والحيوانية لضمان استقرار الإمداد على مدار العام وبأفضل تكلفة استيراد تنافسية.",
            org_brazil: "البرازيل وأمريكا الجنوبية",
            org_australia: "أستراليا ونيوزيلندا",
            org_europe: "الاتحاد الأوروبي",
            org_usa: "أمريكا الشمالية (أمريكا وكندا)",
            org_asia: "جنوب شرق آسيا",
            org_gcc: "مراكز التوزيع بالخليج ومصر",

            cert_badge: "جودة لا تقبل المساومة",
            cert_title: "شهادات ومعايير سلامة الغذاء العالمية",
            cert_sub: "كل حاوية توردها فريجو العالمية تحمل كامل الشهادات الصحية والشرعية المعترف بها دولياً.",
            cert1_title: "اعتماد الذبح الحلال 100%",
            cert1_desc: "التزام كامل بالشريعة الإسلامية تحت إشراف هيئات ومراكز إسلامية معتمدة دولياً ومحلياً.",
            cert2_title: "معايير ISO 22000 و HACCP",
            cert2_desc: "تطبيق نظم إدارة سلامة الغذاء ونقاط التحكم الحرجة من خطوط التجهيز وحتى التفريغ.",
            cert3_title: "شهادات صحية وبيطرية حكومية",
            cert3_desc: "تصدر من وزارات الزراعة الرسمية في دول المنشأ (SIF البرازيل، وزارة الزراعة الأمريكية، وغيرها).",
            cert4_title: "اعتماد BRCGS و IFS العالمية",
            cert4_desc: "مطابقة مصانع التعبئة لأعلى اشتراطات النظافة وسلامة التغليف الغذائي الدولي.",

            rfq_badge: "طلبات عروض الأسعار B2B",
            rfq_title: "طلب عرض أسعار حاويات مجمدة بالجملة",
            rfq_desc: "حدد صنف السلعة والكمية وميناء الوصول لتتلقى عرض سعر تجاري استرشادي ومبدئي (CIF / CFR) من مكتب التداول فوراً.",
            perk_1: "أسعار تصديرية مباشرة وتنافسية (FOB / CFR / CIF)",
            perk_2: "تأكيد حجز الشحنة البحرية خلال 72 ساعة",
            perk_3: "باقة كاملة من الشهادات والفحوصات المخبرية المعتمدة",
            prefer_chat: "تحتاج إلى تواصل فوري؟",
            rfq_form_heading: "نموذج التسعير الفوري",
            lbl_product_type: "صنف المنتج",
            opt_beef: "قطعيات لحوم بقرية مجمدة",
            opt_poultry: "دجاج كامل مجمد ومصنعاته",
            opt_lamb: "لحوم ضأن وخراف مجمدة",
            opt_seafood: "أسماك ومأكولات بحرية مجمدة",
            opt_veg: "بطاطس نصف مقلية وخضروات مجمدة",
            lbl_volume: "الكمية المطلوبة",
            lbl_destination: "ميناء أو دولة الوصول",
            lbl_incoterm: "شرط الشحن (Incoterm)",
            lbl_company: "اسم الشركة / المؤسسة",
            lbl_email: "البريد الإلكتروني للعمل",
            lbl_phone: "رقم الهاتف / واتساب",
            lbl_timeline: "الموعد المستهدف للشحن",
            time_immediate: "فوري / أقرب إبحار (10-15 يوماً)",
            time_30: "خلال الـ 30 يوماً القادمة",
            time_qtr: "عقد توريد ربع سنوي",
            lbl_notes: "أي مواصفات خاصة أو طلب تغليف بماركة العميل",
            btn_submit_rfq: "توليد طلب التسعير المبدئي",

            test_badge: "ثقة عالمية",
            test_title: "آراء شركائنا وعملائنا التجاريين",
            test1_quote: "\"تعتبر مجموعة فريجو العالمية موردنا الحصري للحوم البقرية المجمدة منذ 3 سنوات. مسجلات الحرارة تثبت دائماً ثبات الـ -18°م، والمستندات لا تواجه أي عائق في ميناء الإسكندرية.\"",
            test2_quote: "\"توريد أكثر من 25 حاوية ريفير شهرياً من الدجاج الكامل والبطاطس إلى ميناء جبل علي. سرعة في الرد، شفافية في تتبع السفن، ومطابقة تامة لاشتراطات الحلال.\"",
            test3_quote: "\"في تجارة البروتين العالمية، الالتزام هو الأهم. فريجو تؤمّن شحناتنا بدقة حتى في أوقات تقلبات العرض في أمريكا الجنوبية مع تثبيت ممتاز للأسعار التعاقدية.\"",

            contact_badge: "مكاتب التداول والتصدير",
            contact_title: "تواصل مع مستشاري تجارة الأغذية لدينا",
            contact_desc: "تعمل مكاتبنا في دبي، القاهرة، وساو باولو على مدار الساعة لخدمة عملائنا في التعاقدات والخدمات اللوجستية.",
            office_dubai: "المكتب التجاري الرئيسي - دبي",
            office_cairo: "المكتب الإقليمي - القاهرة",
            office_sp: "مكتب المشتريات والمنشأ - ساو باولو",
            quick_inquiry: "استفسار تجاري وشراكات عامة",
            lbl_name: "الاسم بالكامل",
            lbl_subject: "الموضوع",
            lbl_message: "نص الرسالة أو الاستفسار",
            btn_send_message: "إرسال الرسالة",

            footer_desc: "مجموعة فريجو العالمية لتجارة اللحوم، الدواجن، الأسماك والأغذية المجمدة. نلتزم بسلسلة تبريد غير منقطعة، أعلى الشهادات الدولية، وشراكات تجارية طويلة الأمد.",
            footer_quick_links: "روابط سريعة",
            footer_commodities: "السلع والمنتجات",
            footer_market_intel: "بيانات الأسواق",
            footer_newsletter_desc: "اشترك للحصول على النشرة الشهرية لمؤشرات أسعار اللحوم والبروتين وتحديثات الشحن الملاحي الدولي.",
            btn_subscribe: "اشتراك",
            btn_quote_this: "طلب تسعير لهذا المنتج",
            btn_close: "إغلاق"
        }
    };

    // Product Specifications Database for Modals
    const productSpecs = {
        p1: {
            category_en: "Frozen Beef & Veal",
            category_ar: "لحوم بقرية مجمدة",
            title_en: "Frozen Boneless Beef Cuts (South American & Oceanic)",
            title_ar: "قطعيات لحوم بقري بدون عظم (أمريكا الجنوبية وأستراليا)",
            origins: "Brazil (SIF Plants), Argentina (SENASA), Uruguay (MGAP), Australia (AUS-MEAT)",
            shelf_life: "24 Months at -18°C or below",
            specs_en: [
                { label: "Available Cuts", value: "Striploin, Ribeye, Tenderloin, Topside, Silverside, Rump, Chuck Roll, Flank, Brisket, Trimmings (80/20, 90/10)" },
                { label: "Freezing Method", value: "Blast frozen at -38°C core temperature, stored at -18°C" },
                { label: "Packaging", value: "Individually vacuum packed (IVP) in 4-6 polybags per 20-25 KG strong export corrugated master carton" },
                { label: "Certifications", value: "100% Halal Certified (Fambras, Cdial, or Halal Food Authority), SIF Veterinary Health Certificate" },
                { label: "Container Load", value: "Approx. 27-28 Metric Tons per 40' Reefer Container (FCL)" }
            ],
            specs_ar: [
                { label: "القطعيات المتوفرة", value: "ستريبلوين، ريب آي، عرق فلتو (تندرلوين)، وش فخذ، سمانة، كولاتة، تشاك رول، فلانك، سن، ترمنجز تصنيع (80/20 و 90/10)" },
                { label: "طريقة التجميد", value: "تجميد صدمة هوائي عند -38°م لقلب اللحم، والحفظ عند -18°م" },
                { label: "نوعية التعبئة", value: "تغليف مفرغ من الهواء (فاكيوم فردي) في أكياس محكمة داخل كراتين تصدير مقواة سعة 20-25 كجم" },
                { label: "الشهادات والاعتمادات", value: "شهادة ذبح حلال 100%، شهادة صحية بيطرية رسمية من دولة المنشأ، شهادة تحليل خلو من الإشعاع والمتبقيات" },
                { label: "حمولة الحاوية", value: "حوالي 27 - 28 طن متري لكل حاوية 40 قدم ريفير مبردة" }
            ]
        },
        p2: {
            category_en: "Poultry & Chicken",
            category_ar: "دواجن ومصنعاتها",
            title_en: "Frozen Whole Chicken (Grillers) & Specialized Cuts",
            title_ar: "دجاج كامل مجمد (جريلر) ومصنعات الدواجن",
            origins: "Brazil, Poland, Ukraine, USA",
            shelf_life: "12-24 Months at -18°C",
            specs_en: [
                { label: "Griller Calibers", value: "900g, 1000g, 1100g, 1200g, 1300g, 1400g (Grade A, without giblets or with giblets)" },
                { label: "Chicken Cuts", value: "Boneless Skinless Breast (BSB / Fillet), Leg Quarters (CLQ), 3-Joint Wings, Drumsticks, MDM (Mechanically Deboned Meat)" },
                { label: "Freezing Method", value: "Tunnel blast frozen, IQF for cuts" },
                { label: "Packaging", value: "Individual polybag (IWP), 10 x 1kg or 15kg bulk carton, moisture-resistant export boxes" },
                { label: "Halal Slaughter", value: "Hand slaughtered strictly according to Islamic rite, free of water injection, zero hormones" },
                { label: "Container Load", value: "Approx. 25-27 Metric Tons per 40' Reefer FCL" }
            ],
            specs_ar: [
                { label: "أوزان الجريلر", value: "900، 1000، 1100، 1200، 1300، 1400 جرام (نخب أول ممتاز، مع أو بدون القوانص)" },
                { label: "مقطعات الدواجن", value: "صدور مخلية بدون جلد فيليه (BSB)، أوراك كاملة كوارترز (CLQ)، أجنحة 3 مفاصل، دبابيس، مفروم دواجن ميكانيكي MDM" },
                { label: "طريقة التجميد", value: "تجميد أنفاق هوائي سريع، تجميد فردي IQF للمقطعات" },
                { label: "التعبئة والتغليف", value: "تغليف فردي بأكياس مطبوعة أو بدون، داخل كرتون رئيسي 10 كجم أو 15 كجم" },
                { label: "الذبح الحلال", value: "ذبح يدوي إسلامي حلال 100%، خالي من أي حقن مائي، بدون هرمونات" },
                { label: "حمولة الحاوية", value: "حوالي 25 - 27 طن متري للحاوية 40 قدم ريفير" }
            ]
        },
        p3: {
            category_en: "Seafood & Fish",
            category_ar: "مأكولات بحرية وأسماك",
            title_en: "Frozen Seafood, Salmon, Prawns & Ocean Catch",
            title_ar: "مأكولات بحرية، سالمون، جمبري وأسماك محيطية",
            origins: "Norway, Chile, Vietnam, India, Oman",
            shelf_life: "24 Months at -18°C",
            specs_en: [
                { label: "Featured Products", value: "Atlantic Salmon (Salmo Salar) Portions & Fillets, Vannamei Shrimps (HOSO/HLSO/PDTO), Pangasius Fillets (Well-trimmed), Whole Tilapia, Cleaned Calamari" },
                { label: "Glazing Percentage", value: "Custom controlled from 5% to 20% protective glaze per destination regulation" },
                { label: "Freezing Standard", value: "IQF (Individually Quick Frozen) onboard or post-harvest modern plant" },
                { label: "Packing Details", value: "10 x 1 KG retail bags or 10 KG bulk master export cartons" },
                { label: "Testing & Quality", value: "Microbiological analysis, heavy metals free, antibiotic residue compliant, HACCP & EU approved" }
            ],
            specs_ar: [
                { label: "المنتجات الرئيسية", value: "سالمون أطلسي فيليه وجزل، جمبري فانامي (كامل / منزوع الرأس / مقشر)، فيليه باسا أبيض نقي، بلطي كامل مجمد، كاليماري حلقات وقوارب منظفة" },
                { label: "نسبة الجليز (التزجيج)", value: "مضبوطة بدقة من 5% إلى 20% بحسب المواصفات القياسية لميناء الاستيراد" },
                { label: "معيار التجميد", value: "تجميد فردي فائق السرعة IQF فور الصيد للحفاظ على الطزاجة" },
                { label: "طريقة التعبئة", value: "أكياس 1 كجم مطبوعة أو كراتين صب 10 كجم للبيع بالجملة ومصانع الأغذية" },
                { label: "الجودة والتحاليل", value: "فحص ميكروبيولوجي كامل، خلو تام من المعادن الثقيلة ومتبقيات المضادات الحيوية، اعتماد هاسب وأوروبي" }
            ]
        },
        p4: {
            category_en: "Vegetables & Fries",
            category_ar: "بطاطس وخضروات",
            title_en: "Grade A French Fries & Farm Fresh Frozen Vegetables",
            title_ar: "بطاطس نصف مقلية وخضروات مجمدة نخب أول",
            origins: "Belgium, Netherlands, Egypt, Poland",
            shelf_life: "24 Months at -18°C",
            specs_en: [
                { label: "Potato Cuts", value: "6x6mm (Shoestring), 9x9mm (Straight cut), 10x10mm, Crinkle Cut, Wedges (Skin-on/off)" },
                { label: "Frozen Farm Veggies", value: "Green Peas (Sweet Garden), Kernel Sweet Corn, Cut Green Beans, 4-Way Mix (Peas, Corn, Carrots, Beans), Chopped Spinach, Okra (Zero/Extra)" },
                { label: "Solid Content", value: "High dry-matter potato (Bintje / Innovator / Fontane) ensuring golden crispiness with low oil absorption" },
                { label: "Packaging Formats", value: "4 x 2.5 KG food-service bags per 10 KG master carton, or custom retail private label (400g - 1kg)" },
                { label: "Non-GMO Verification", value: "100% Non-GMO verified, no chemical additives or artificial flavorings" }
            ],
            specs_ar: [
                { label: "قطعيات البطاطس", value: "مقاس 6×6 مم، 9×9 مم، 10×10 مم، أصابع مموجة، بطاطس ودجز بالقشرة أو بدون" },
                { label: "الخضروات المجمدة", value: "بازلاء خضراء سكرية، حبوب ذرة حلوة، فاصوليا خضراء مقطعة، خضار مشكل 4 أصناف، سبانخ مفرومة، بامية (إكسترا / زيرو)" },
                { label: "نسبة المادة الجافة", value: "مادة جافة مرتفعة من أجود أصناف البطاطس الأوروبية (إنوفيتور / فونتاني) لضمان القرمشة الذهبية وقلة امتصاص الزيت" },
                { label: "أشكال التعبئة", value: "كرتون 10 كجم (4 أكياس × 2.5 كجم) للفنادق والمطاعم، أو أكياس تجزئة 400 جم و 1 كجم بماركة العميل" },
                { label: "سلامة المحصول", value: "غير معدلة وراثياً 100% Non-GMO، خالية من المواد الحافظة والملونات الصناعية" }
            ]
        }
    };

    // State
    let currentLang = localStorage.getItem('frigo_lang') || 'en';

    // Elements
    const htmlEl = document.documentElement;
    const langToggleBtn = document.getElementById('langToggleBtn');
    const langCurrentSpan = document.getElementById('langCurrent');
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const toastContainer = document.getElementById('toastContainer');
    const productModal = document.getElementById('productModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalDismissBtn = document.getElementById('modalDismissBtn');
    const modalOrderBtn = document.getElementById('modalOrderBtn');
    const rfqForm = document.getElementById('rfqForm');
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    // ==========================================
    // 2. Language Switcher Engine
    // ==========================================
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('frigo_lang', lang);

        htmlEl.setAttribute('lang', lang);
        htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Toggle label text
        langCurrentSpan.textContent = lang === 'ar' ? 'English' : 'العربية';

        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update form placeholders
        updateFormPlaceholders(lang);
    }

    function updateFormPlaceholders(lang) {
        const destInput = document.getElementById('rfqDestination');
        const companyInput = document.getElementById('rfqCompanyName');
        const notesInput = document.getElementById('rfqNotes');
        const contactNameInput = document.getElementById('contactName');
        const contactSubjectInput = document.getElementById('contactSubject');
        const contactMsgInput = document.getElementById('contactMessage');

        if (lang === 'ar') {
            if (destInput) destInput.placeholder = "مثال: ميناء الإسكندرية، جبل علي، جدة، دمياط، بورسعيد...";
            if (companyInput) companyInput.placeholder = "مثال: شركة النور لاستيراد وتوزيع المواد الغذائية";
            if (notesInput) notesInput.placeholder = "اذكر هنا أي تفاصيل خاصة بالماركة، شروط التعبئة، أو مواصفات الذبح المطلوبة...";
            if (contactNameInput) contactNameInput.placeholder = "الاسم الكريم";
            if (contactSubjectInput) contactSubjectInput.placeholder = "طلب وكالة تجارية / اتفاقية توريد دورية";
            if (contactMsgInput) contactMsgInput.placeholder = "اكتب استفسارك أو تفاصيل متطلباتك هنا...";
        } else {
            if (destInput) destInput.placeholder = "e.g. Alexandria, Jebel Ali, Jeddah, Damietta";
            if (companyInput) companyInput.placeholder = "e.g. Al-Noor Food Import LLC";
            if (notesInput) notesInput.placeholder = "e.g. Grade A cuts, private label packaging, specific Halal certifying authority, etc.";
            if (contactNameInput) contactNameInput.placeholder = "John Doe";
            if (contactSubjectInput) contactSubjectInput.placeholder = "Wholesale Supply Agreement / Agency Partnership";
            if (contactMsgInput) contactMsgInput.placeholder = "Detail your requirements or inquiry here...";
        }
    }

    langToggleBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(nextLang);
        showToast(nextLang === 'ar' ? 'تم تحويل اللغة إلى العربية بنجاح' : 'Language switched to English', 'success');
    });

    // Initialize Language
    setLanguage(currentLang);

    // ==========================================
    // 3. Mobile Navigation Menu
    // ==========================================
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    // ==========================================
    // 4. Product Category Filters
    // ==========================================
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });

    // ==========================================
    // 5. Product Specs Modal
    // ==========================================
    let activeModalProductId = 'p1';

    function openProductModal(productId) {
        const spec = productSpecs[productId];
        if (!spec) return;

        activeModalProductId = productId;

        const isAr = currentLang === 'ar';
        document.getElementById('modalTag').textContent = isAr ? spec.category_ar : spec.category_en;
        document.getElementById('modalTitle').textContent = isAr ? spec.title_ar : spec.title_en;
        document.getElementById('modalOrigin').textContent = (isAr ? "دول ومزارع المنشأ المعتمدة: " : "Certified Supply Origins: ") + spec.origins;

        const specsList = isAr ? spec.specs_ar : spec.specs_en;
        let tableHtml = `<table class="modal-specs-table"><tbody>`;
        specsList.forEach(item => {
            tableHtml += `
                <tr>
                    <td>${item.label}</td>
                    <td>${item.value}</td>
                </tr>
            `;
        });
        tableHtml += `</tbody></table>`;

        document.getElementById('modalBody').innerHTML = tableHtml;
        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
        productModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.view-spec-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            openProductModal(id);
        });
    });

    modalCloseBtn.addEventListener('click', closeProductModal);
    modalDismissBtn.addEventListener('click', closeProductModal);

    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeProductModal();
        }
    });

    // Quick Quote from Product Cards & Modal
    document.querySelectorAll('.open-rfq-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const prodName = e.currentTarget.getAttribute('data-product');
            prefillRFQ(prodName);
        });
    });

    modalOrderBtn.addEventListener('click', () => {
        const spec = productSpecs[activeModalProductId];
        if (spec) {
            prefillRFQ(currentLang === 'ar' ? spec.title_ar : spec.title_en);
            closeProductModal();
        }
    });

    function prefillRFQ(productName) {
        const contactSubject = document.getElementById('contactSubject');
        const contactMessage = document.getElementById('contactMessage');
        
        if (contactSubject) {
            contactSubject.value = currentLang === 'ar'
                ? `استفسار عن أسعار وتوريد: ${productName}`
                : `Pricing & supply inquiry for: ${productName}`;
        }

        if (contactMessage) {
            contactMessage.value = currentLang === 'ar' 
                ? `نرجو التكرم بموافاتنا بأحدث الأسعار والمواصفات المتاحة للمنتج: ${productName}.`
                : `Please provide current commercial quotation and specifications for: ${productName}.`;
        }

        const contactSec = document.getElementById('contact');
        if (contactSec) {
            contactSec.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // ==========================================
    // 6. Interactive RFQ Form Submission (if present)
    // ==========================================
    if (rfqForm) {
        rfqForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const category = document.getElementById('rfqCategory')?.value || '';
            const volume = document.getElementById('rfqVolume')?.value || '';
            const destination = document.getElementById('rfqDestination')?.value || '';
            const incoterm = document.getElementById('rfqIncoterm')?.value || '';
            const company = document.getElementById('rfqCompanyName')?.value || '';
            const email = document.getElementById('rfqEmail')?.value || '';
            const phone = document.getElementById('rfqPhone')?.value || '';
            const timeline = document.getElementById('rfqTimeline')?.value || '';
            const notes = document.getElementById('rfqNotes')?.value || '';

            // Build WhatsApp Message Link
            const messageText = `*FRIGO GLOBAL GROUP - B2B QUOTE REQUEST*%0A%0A` +
                `*Company:* ${encodeURIComponent(company)}%0A` +
                `*Product Category:* ${encodeURIComponent(category)}%0A` +
                `*Requested Volume:* ${encodeURIComponent(volume)}%0A` +
                `*Destination Port:* ${encodeURIComponent(destination)} (${encodeURIComponent(incoterm)})%0A` +
                `*Target Timeline:* ${encodeURIComponent(timeline)}%0A` +
                `*Contact Phone:* ${encodeURIComponent(phone)}%0A` +
                `*Email:* ${encodeURIComponent(email)}%0A` +
                (notes ? `*Notes:* ${encodeURIComponent(notes)}%0A` : '');

            const waUrl = `https://wa.me/201220307828?text=${messageText}`;

            // Toast feedback
            const isAr = currentLang === 'ar';
            showToast(
                isAr 
                    ? 'تم استلام طلب التسعير بنجاح! يتم الآن توجيهك إلى مكتب التداول عبر الواتساب لإصدار الفاتورة المبدئية.'
                    : 'Quote request registered! Connecting you to our trading desk via WhatsApp for instant proforma confirmation.',
                'success'
            );

            // Open WhatsApp in new tab after brief delay
            setTimeout(() => {
                window.open(waUrl, '_blank');
            }, 800);

            rfqForm.reset();
        });
    }

    // ==========================================
    // 7. General Contact Form
    // ==========================================
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contactName')?.value.trim() || '';
        const email = document.getElementById('contactEmail')?.value.trim() || '';
        const subject = document.getElementById('contactSubject')?.value.trim() || 'Inquiry - Frigo Global Group';
        const message = document.getElementById('contactMessage')?.value.trim() || '';

        const emailBody = `Full Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoUrl = `mailto:info@frigoglobalgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        const isAr = currentLang === 'ar';
        showToast(
            isAr 
                ? 'يتم الآن فتح تطبيق البريد لإرسال رسالتك إلى info@frigoglobalgroup.com'
                : 'Opening your email client to send your message to info@frigoglobalgroup.com',
            'success'
        );

        window.location.href = mailtoUrl;
        contactForm.reset();
    });

    // ==========================================
    // 8. Newsletter Subscription (if present)
    // ==========================================
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const isAr = currentLang === 'ar';
            showToast(
                isAr 
                    ? 'تم اشتراكك بنجاح في النشرة الشهرية لمؤشرات أسعار اللحوم وسلاسل التبريد العالمية.'
                    : 'Successfully subscribed to Frigo Global monthly protein indices & cold chain intelligence reports.',
                'success'
            );
            newsletterForm.reset();
        });
    }

    // ==========================================
    // 9. Toast Notification System
    // ==========================================
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const iconSvg = type === 'success' 
            ? `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`
            : `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

        toast.innerHTML = `${iconSvg}<span>${message}</span>`;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(15px)';
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    }

    // ==========================================
    // 10. Metric Animated Counters on Scroll
    // ==========================================
    const counters = document.querySelectorAll('.counter');
    let countersStarted = false;

    function startCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000;
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.ceil(current).toLocaleString();
                }
            }, stepTime);
        });
    }

    const metricsSection = document.querySelector('.metrics-strip');
    if (metricsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersStarted) {
                    countersStarted = true;
                    startCounters();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(metricsSection);
    }

    // Set Copyright Year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
