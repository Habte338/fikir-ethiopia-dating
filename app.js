/**
 * FIKIR (ፍቅር) - Ethiopian Dating Web Application Logic
 * Features: Touch/Mouse Swipe Cards, Cultural Matching, Amharic/English Bilingual,
 * Telebirr & CBE Birr VIP Freemium Simulation, Live Chat with Buna Icebreakers.
 */

// ============================================================================
// 1. DATA: PROFILES, CONVERSATIONS & LOCALIZATION
// ============================================================================

const PROFILES = [
  {
    id: 1,
    name: "Selamawit",
    nameAm: "ሰላማዊት ታደሰ",
    age: 24,
    gender: "female",
    city: "Bole",
    cityFull: "Addis Ababa, Bole (ቦሌ)",
    occupation: "Architect & Interior Designer",
    occupationAm: "አርክቴክት እና ዲዛይነር",
    faith: "Orthodox",
    faithLabel: "Ethiopian Orthodox",
    faithLabelAm: "የኢትዮጵያ ኦርቶዶክስ",
    fasting: true,
    bunaLover: true,
    image: "assets/ethiopian_woman_profile1_1792309419035.jpg",
    bio: "Passionate about preserving traditional Ethiopian architecture with modern sustainable flair. Weekend ritual: Tomoca macchiato in Bole and reading by Friendship Park. Let's talk art, music, and deep conversations over Buna!",
    bioAm: "የባህላዊ የኢትዮጵያ አርክቴክቸር ወዳጅ ነኝ። ቅዳሜና እሁድ ቦሌ ቶሞካ ማኪያቶ እያጣጣምኩ መፅሃፍ ማንበብ ደስ ይለኛል። ቡና እየጠጣን ስለ ጥበብና ባህላችን እናውራ!",
    tags: ["☕ Tomoca Addict", "⛪ Fasting Friendly (ጾመኛ)", "🎨 Art & Design", "🇪🇹 Proud Habesha"],
    tagsAm: ["☕ ቶሞካ ወዳጅ", "⛪ ጾመኛ", "🎨 ስነ-ጥበብ", "🇪🇹 ኩሩ ሀበሻ"],
    voicePrompt: "My ideal first date: A slow walk in Entoto Park followed by traditional Buna ceremony."
  },
  {
    id: 2,
    name: "Dawit",
    nameAm: "ዳዊት ኃይሌ",
    age: 27,
    gender: "male",
    city: "Kazanchis",
    cityFull: "Addis Ababa, Kazanchis (ካዛንቺስ)",
    occupation: "Software Engineer & Tech Lead",
    occupationAm: "ሶፍትዌር ኢንጂነር",
    faith: "Protestant",
    faithLabel: "Protestant",
    faithLabelAm: "ፕሮቴስታንት",
    fasting: true,
    bunaLover: true,
    image: "assets/ethiopian_man_profile1_1792309463785.jpg",
    bio: "Building tech products for Africa. Love trail running up Entoto Mountain, acoustic guitar, and finding the best fasting shiro spots in Kazanchis. Looking for a genuine connection grounded in faith and ambition.",
    bioAm: "ለአፍሪካ የቴክኖሎጂ ምርቶችን እየገነባሁ ነው። እንጦጦ ላይ መሮጥና አኮስቲክ ጊታር መጫወት ያስደስተኛል። በእምነትና በትጋት የተሞላች የህይወት አጋር እፈልጋለሁ።",
    tags: ["💻 Tech Geek", "🏃 Entoto Hiker", "🎸 Live Music", "🍲 Shiro Connoisseur"],
    tagsAm: ["💻 የቴክ ሰው", "🏃 የእንጦጦ ተጓዥ", "🎸 ሙዚቃ", "🍲 የሽሮ አፍቃሪ"],
    voicePrompt: "What makes me smile: Live acoustic Kirar melodies and warm Addis evenings."
  },
  {
    id: 3,
    name: "Hanan",
    nameAm: "ሀናን መሐመድ",
    age: 25,
    gender: "female",
    city: "Bole",
    cityFull: "Addis Ababa, Bole (ቦሌ)",
    occupation: "Fashion Stylist & Habesha Kemis Curator",
    occupationAm: "የፋሽን ዲዛይነር",
    faith: "Muslim",
    faithLabel: "Muslim",
    faithLabelAm: "ሙስሊም",
    fasting: false,
    bunaLover: true,
    image: "assets/ethiopian_woman_profile2_1792309642691.jpg",
    bio: "Blending contemporary haute couture with vibrant Ethiopian Tibeb patterns. Family-oriented, love Dire Dawa spicy delicacies and cozy garden bistros. Looking for someone kind-hearted with a good sense of humor.",
    bioAm: "የዘመናዊ ፋሽንና የሀበሻ ጥበብ ልብሶችን አስተባብራለሁ። ከቤተሰብ ጋር ጊዜ ማሳለፍና የድሬዳዋ ቅመማቅመሞችን እወዳለሁ። ቅንና ጨዋ ሰው እፈልጋለሁ።",
    tags: ["👗 Habesha Tibeb", "✨ Dire Dawa Vibe", "☕ Spiced Buna", "🪴 Plant Lover"],
    tagsAm: ["👗 የሀበሻ ጥበብ", "✨ የድሬዳዋ ልጅ", "☕ ባለቅመም ቡና", "🪴 ተፈጥሮ"],
    voicePrompt: "Favorite Ethiopian song: Aster Aweke's classics any time of day."
  },
  {
    id: 4,
    name: "Yohannes",
    nameAm: "ዮሐንስ በቀለ",
    age: 28,
    gender: "male",
    city: "Bole",
    cityFull: "Addis Ababa, Bole Edna Mall (ቦሌ ኤድና ሞል)",
    occupation: "Film Director & Storyteller",
    occupationAm: "የፊልም ዳይሬክተር",
    faith: "Orthodox",
    faithLabel: "Ethiopian Orthodox",
    faithLabelAm: "የኢትዮጵያ ኦርቶዶክስ",
    fasting: true,
    bunaLover: true,
    image: "assets/ethiopian_man_profile2_1792309893956.jpg",
    bio: "Passionate about telling authentic Ethiopian stories on screen. When not filming around Piassa or Bole, you'll catch me playing chess or enjoying an Ethiopian jazz night at Mama's Kitchen.",
    bioAm: "የኢትዮጵያን እውነተኛ ታሪክ በሲኒማ ለማሳየት እተጋለሁ። ትርፍ ጊዜዬን ቼዝ በመጫወትና የኢትዮ-ጃዝ ሙዚቃ በማዳመጥ አሳልፋለሁ።",
    tags: ["🎬 Film Director", "🎷 Ethio-Jazz", "♟️ Chess Player", "☕ Jebena Fan"],
    tagsAm: ["🎬 ፊልም ዳይሬክተር", "🎷 ኢትዮ-ጃዝ", "♟️ ቼዝ ተጫዋች", "☕ የጀበና ቡና"],
    voicePrompt: "A random fact about me: I know every historic building in Piassa by heart."
  },
  {
    id: 5,
    name: "Bethlehem",
    nameAm: "ቤተልሔም ግርማ",
    age: 23,
    gender: "female",
    city: "Hawassa",
    cityFull: "Hawassa, Lake Shore (ሐዋሳ)",
    occupation: "Environmental Researcher",
    occupationAm: "የአካባቢ ጥበቃ ተመራማሪ",
    faith: "Orthodox",
    faithLabel: "Ethiopian Orthodox",
    faithLabelAm: "የኢትዮጵያ ኦርቶዶክስ",
    fasting: true,
    bunaLover: true,
    image: "assets/ethiopian_woman_profile3_1792309910865.jpg",
    bio: "Living by the peaceful shores of Lake Hawassa. Passionate about nature conservation, biking, and weekend fresh grilled tilapia with Awaze! Seeking a calm, honest companion who values family and heritage.",
    bioAm: "በሐዋሳ ሀይቅ ዳርቻ የምኖር ተመራማሪ ነኝ። የተፈጥሮ ጥበቃ፣ ብስክሌት መንዳትና የሀዋሳ አሳ መመገብ ያስደስተኛል። ቅንና ቤተሰብ ወዳጅ የሆነ አጋር እፈልጋለሁ።",
    tags: ["🌊 Hawassa Breeze", "🚴 Lake Cycling", "🐟 Awaze Fish", "⛪ Orthodox Faith"],
    tagsAm: ["🌊 የሐዋሳ ንፋስ", "🚴 ብስክሌት", "🐟 አሳ በአዋዜ", "⛪ ኦርቶዶክስ"],
    voicePrompt: "If we go on a date in Hawassa: Sunrise boat ride to see the waterbirds."
  }
];

// Who Liked You mock cards (for Freemium preview)
const WHO_LIKED_YOU = [
  { id: 101, name: "Helen", age: 24, city: "Addis Ababa - Piassa", img: "assets/ethiopian_woman_profile1_1792309419035.jpg", time: "2 hours ago" },
  { id: 102, name: "Mahlet", age: 26, city: "Addis Ababa - CMC", img: "assets/ethiopian_woman_profile2_1792309642691.jpg", time: "5 hours ago" },
  { id: 103, name: "Tigist", age: 23, city: "Hawassa", img: "assets/ethiopian_woman_profile3_1792309910865.jpg", time: "Yesterday" },
  { id: 104, name: "Sara", age: 25, city: "Addis Ababa - Bole", img: "assets/ethiopian_hero_brand_1792309677216.jpg", time: "2 days ago" }
];

// Bilingual Translations Dictionary
const I18N = {
  en: {
    tagline: "Habesha Connections & Cultural Matchmaking",
    navDiscover: "Discover",
    navChats: "Chats & Matches",
    navWhoLiked: "Who Liked You",
    upgradeVip: "Get Fikir VIP",
    allLocations: "All Ethiopia",
    allFaiths: "All Beliefs",
    fastingFriendly: "Fasting Friendly (ጾም)",
    bunaLover: "Buna Lovers (ቡና)",
    boostAddis: "Boost in Addis",
    verifiedCommunity: "100% Habesha Verified",
    sidebarTitle: "Dating Built for Ethiopia",
    sidebarDesc: "Find your soulmate in Addis Ababa and beyond with respect for Ethiopian heritage, values, and traditions.",
    bunaDateFeature: "Traditional Buna Coffee Date",
    bunaDateDesc: "Send a virtual traditional coffee invite directly to someone special before you even match!",
    sendBunaBtn: "Send Buna Invite",
    vipPerksTitle: "Fikir VIP Privileges",
    vipSubtext: "Pay easily with Telebirr or CBE Birr",
    perk1: "Unlimited Daily Swipes & Likes",
    perk2: "See Who Liked You (Unblur photos)",
    perk3: "5 Weekly Buna Super-Likes",
    perk4: "Addis Ababa Sub-City Profile Boost",
    perk5: "Rewind any accidental left swipe",
    upgradeTelebirrBtn: "Upgrade with Telebirr (199 ETB)",
    yourMatches: "Your Matches",
    whoLikedTitle: "Who Liked You (የወደዱህ ሰዎች)",
    whoLikedSubtitle: "4 attractive Ethiopian singles recently liked your profile! Upgrade to VIP to unblur their photos and start chatting immediately.",
    unblurAllTelebirr: "✨ Unblur All with Telebirr (199 ETB)",
    upgradeModalTitle: "Upgrade to Fikir VIP (ፍቅር ቪአይፒ)",
    upgradeModalSubtitle: "Supercharge your dating life in Ethiopia with unlimited access & local Telebirr payments.",
    plan1Month: "1 Month",
    billedMonthly: "Instant activation",
    bestValue: "POPULAR",
    plan3Months: "3 Months",
    save30: "Save 20% (166 ETB/mo)",
    plan1Year: "1 Year",
    bestForDating: "Ultimate Habesha Match",
    selectPaymentMethod: "Select Local Payment Method:",
    enterTelebirrPhone: "Ethiopian Mobile Number (Telebirr / CBE):",
    telebirrHint: "You will receive an instant payment confirmation prompt on your phone.",
    selectedPlan: "Selected Plan:",
    totalBirr: "Total Amount:",
    matchTitle: "ተጋጠማችሁ! (It's a Match!)",
    sendBunaMessage: "☕ Send Buna & Message Now",
    keepExploring: "Keep Exploring",
    limitTitle: "Daily Free Likes Reached",
    limitDesc: "You have used your 5 free likes for today. Upgrade to Fikir VIP for unlimited swipes, see who liked you, and send direct Buna Super Likes!",
    unlockTelebirr: "⚡ Unlock VIP via Telebirr / CBE Birr",
    maybeTomorrow: "Maybe Tomorrow",
    noMoreProfiles: "You've explored all local singles!",
    checkBackSoon: "Check back soon for new profiles in your area, or widen your location filters.",
    resetFilters: "Reset & See Again",

    // Fayda & Referral Localization (English)
    faydaVerified: "Fayda Verified",
    referralWidgetTitle: "Earn Free Credits (2X Double)",
    referralWidgetSub: "Share with friends & double when they join!",
    statCredits: "Credits",
    statVerified: "Fayda Friends",
    statBonus: "Double Bonus",
    shareTelegramBtn: "Share via Telegram (2X)",
    faydaModalSubtitle: "Verify your Ethiopian citizenship with Fayda ID to eliminate catfishing, earn the verified green shield, and claim 10 Free Bonus Credits!",
    stepPhone: "Phone & FIN",
    stepOtp: "e-Signet OTP",
    stepCard: "Verified ID",
    faydaFullName: "Full Name (እንደ መታወቂያዎ):",
    faydaRegisteredPhone: "Fayda-Registered Mobile Phone:",
    faydaPhoneHint: "Must match the phone linked with your Ethiopian National ID record.",
    faydaFinLabel: "Fayda Identification Number (FIN / 12-Digits):",
    faydaFinHint: "Found on your digital or physical Fayda National ID card.",
    sendFaydaOtp: "Request National ID OTP Verification",
    enterNidpOtp: "Enter Fayda e-Signet 6-Digit OTP",
    didntGetOtp: "Didn't receive code?",
    resendOtp: "Resend OTP (58s)",
    verifyFaydaIdentity: "Verify My Identity & Activate Profile",
    bonusAwarded: "+10 Free Welcome Bonus Credits Unlocked!",
    bonusAwardedDesc: "Your profile now carries the verified Habesha green shield for maximum matches and safety.",
    startDatingFayda: "Start Dating with Verified Status",
    shareModalTitle: "Share Fikir & Double Your Free Credits!",
    shareModalSubtitle: "Give friends free likes. When they join and verify with their Fayda National ID, your credits automatically DOUBLE (2X)!",
    totalCredits: "Your Balance",
    invitedFriends: "Friends Invited",
    faydaVerifiedFriends: "Fayda Verified (2X)",
    how1Title: "Share Your Link",
    how1Desc: "Instantly earn +5 Free Credits when sending.",
    how2Title: "Friend Fayda Verifies",
    how2Desc: "They register with genuine Ethiopian Fayda ID.",
    how3Title: "Credits Double!",
    how3Desc: "Your reward doubles to +10 Credits or VIP days!",
    yourUniqueLink: "Your Exclusive Habesha Invitation Link:",
    copyLink: "Copy",
    shareInstantly: "Share Instantly on Socials:",
    trySimulation: "Want to test the viral mechanics?",
    simDesc: "Click below to simulate a friend joining and verifying via Fayda to watch your credits double live!",
    simBtn: "Simulate Friend Joining via Link (Trigger 2X Double)",
    spendCreditsTitle: "Redeem Your Free Credits:",
    redeem: "Redeem",

    // Settings & Auth Localization (English)
    signIn: "Sign In",
    signOut: "Sign Out of Fikir (ውጣ)",
    tabEditProfile: "Edit Profile",
    tabSecurity: "Fayda & Telegram",
    tabPreferences: "Preferences",
    fullName: "Full Name (ሙሉ ስም):",
    age: "Age (ዕድሜ):",
    cityDistrict: "Location (ከተማ / ክፍለ ከተማ):",
    faithBelief: "Faith (እምነት):",
    occupation: "Occupation / Career:",
    fastingCheckbox: "Fasting Friendly (ጾመኛ ነኝ 🥗)",
    bunaCheckbox: "Traditional Buna Lover (የባህል ቡና ወዳጅ ☕)",
    bioLabel: "About Me (ስለ እኔ):",
    saveChanges: "Save Profile Changes (መረጃ መዝግብ)",
    manageFayda: "Manage Fayda ID Certificate",
    changeTelegram: "Switch Telegram Account",
    interestedIn: "Interested in Meeting:",
    ageRange: "Age Range Preference (18 - 40):",
    welcomeBack: "Welcome to Fikir (እንኳን ደህና መጡ)",
    authSubtitle: "Ethiopia's trusted cultural dating platform with Fayda National ID & Telegram security.",
    signInTelegram: "Continue with Telegram (በቴሌግራም ግባ)",
    instantVerifiedTg: "Instant 1-Click Ethiopian Login (@Habte338)",
    orPhone: "OR LOG IN WITH ETHIOPIAN PHONE / FAYDA ID",
    phoneOrFayda: "Mobile Number or Fayda FIN:",
    smsCodeOrPin: "SMS Passcode or Fayda e-Signet OTP:",
    rememberDevice: "Remember on this device (አስታውሰኝ)",
    logInNow: "Log In to Fikir (ግባ)",
    quickDemoAccounts: "Quick Access Demo Accounts:"
  },
  am: {
    tagline: "የኢትዮጵያውያን የፍቅርና የትዳር መድረክ",
    navDiscover: "አግኝ",
    navChats: "መልእክቶችና ግጥምጥሞች",
    navWhoLiked: "የወደዱህ ሰዎች",
    upgradeVip: "ፍቅር ቪአይፒ ያግኙ",
    allLocations: "መላው ኢትዮጵያ",
    allFaiths: "ሁሉም እምነቶች",
    fastingFriendly: "ጾመኛ ወዳጅ",
    bunaLover: "የቡና ወዳጆች",
    boostAddis: "አዲስ አበባ ውስጥ አድምቅ",
    verifiedCommunity: "100% የታመነ ሀበሻ ማህበረሰብ",
    sidebarTitle: "ለኢትዮጵያውያን የተዘጋጀ የፍቅር መድረክ",
    sidebarDesc: "የባህልና የእምነት መከባበር በጠበቀ መልኩ የህይወት አጋርዎን በአዲስ አበባና በመላው ሀገሪቱ ያግኙ።",
    bunaDateFeature: "የባህል የቡና ቀጠሮ ግብዣ",
    bunaDateDesc: "ሳያጋጥማችሁ በፊት በቀጥታ የባህል ቡና ጋብዙና ልዩ ፍቅር ጀምሩ!",
    sendBunaBtn: "የቡና ግብዣ ላክ",
    vipPerksTitle: "የፍቅር ቪአይፒ ልዩ ጥቅሞች",
    vipSubtext: "በቴሌብር ወይም በሲቢኢ ብር (CBE Birr) በቀላሉ ይክፈሉ",
    perk1: "ያልተገደበ የዕለት ላይክና ስዋይፕ",
    perk2: "የወደዱህን ሰዎች ፎቶ በቀጥታ ማየት",
    perk3: "በየሳምንቱ 5 የቡና ሱፐር-ላይኮች",
    perk4: "በአዲስ አበባ ውስጥ ፕሮፋይልህን ማድመቂያ",
    perk5: "የተሳሳተ ስዋይፕን ወደኋላ መመለስ",
    upgradeTelebirrBtn: "በቴሌብር አሻሽል (199 ብር)",
    yourMatches: "የእርስዎ ግጥምጥሞች",
    whoLikedTitle: "የወደዱህ ሰዎች",
    whoLikedSubtitle: "4 ውብ ኢትዮጵያውያን ፕሮፋይልህን ወደውታል! ፎቷቸውን አይተህ ወዲያውኑ መልእክት ለመለዋወጥ ቪአይፒ ሁን።",
    unblurAllTelebirr: "✨ በቴሌብር ሁሉንም ክፈት (199 ብር)",
    upgradeModalTitle: "ወደ ፍቅር ቪአይፒ (VIP) ያሳድጉ",
    upgradeModalSubtitle: "ያልተገደበ ተጠቃሚ በመሆን በፍጥነት የህይወት አጋርዎን በቴሌብር ክፍያ ያግኙ።",
    plan1Month: "1 ወር",
    billedMonthly: "ፈጣን ማግበር",
    bestValue: "ተመራጭ",
    plan3Months: "3 ወር",
    save30: "20% ቅናሽ (166 ብር/በወር)",
    plan1Year: "1 ዓመት",
    bestForDating: "የተሟላ የፍቅር ጉዞ",
    selectPaymentMethod: "የአከፋፈል አማራጭ ይምረጡ:",
    enterTelebirrPhone: "የኢትዮጵያ ስልክ ቁጥር (ቴሌብር / ሲቢኢ):",
    telebirrHint: "በስልክዎ ላይ የፈጣን ክፍያ ማረጋገጫ ጥሪ ይደርስዎታል።",
    selectedPlan: "የተመረጠ ፓኬጅ:",
    totalBirr: "ጠቅላላ ክፍያ:",
    matchTitle: "ተጋጠማችሁ! (It's a Match!)",
    sendBunaMessage: "☕ ቡና ጋብዘህ አሁኑኑ አውራ",
    keepExploring: "መፈለጌን ልቀጥል",
    limitTitle: "የዕለቱ ነፃ ላይክ አልቋል",
    limitDesc: "የዛሬውን 5 ነፃ ላይኮች ተጠቅመዋል። ያልተገደበ ላይክ ለማግኘትና የወደዱዎትን ለማየት ወደ ፍቅር ቪአይፒ ያሳድጉ!",
    unlockTelebirr: "⚡ በቴሌብር / ሲቢኢ ብር VIP ያግኙ",
    maybeTomorrow: "ነገ እመለሳለሁ",
    noMoreProfiles: "በአካባቢዎ ያሉትን ሁሉንም አይተዋል!",
    checkBackSoon: "በቅርቡ አዳዲስ ሰዎችን ያገኛሉ፣ ወይም የፍለጋ ከተማዎን ያሰፉ።",
    resetFilters: "እንደገና ጀምር",

    // Fayda & Referral Localization (Amharic)
    faydaVerified: "በፋይዳ የተረጋገጠ",
    referralWidgetTitle: "ነፃ ክሬዲት ያግኙ (2X እጥፍ)",
    referralWidgetSub: "ለጓደኞችዎ ያጋሩ፤ ሲገቡ ክሬዲትዎ እጥፍ ይሆናል!",
    statCredits: "ክሬዲት",
    statVerified: "የተረጋገጡ ጓደኞች",
    statBonus: "እጥፍ ቦነስ",
    shareTelegramBtn: "በቴሌግራም አጋራ (2X)",
    faydaModalSubtitle: "ትክክለኛ ኢትዮጵያዊ መሆንዎን በፋይዳ (Fayda) ብሔራዊ መታወቂያ በማረጋገጥ ደህንነትዎን ይጠብቁ፤ የ10 ነፃ ቦነስ ክሬዲት ባለቤት ይሁኑ!",
    stepPhone: "ስልክና ፋይዳ ቁጥር",
    stepOtp: "የኤስኤምኤስ ኮድ",
    stepCard: "የተረጋገጠ መታወቂያ",
    faydaFullName: "ሙሉ ስም (እንደ መታወቂያዎ):",
    faydaRegisteredPhone: "በፋይዳ የተመዘገበ ስልክ ቁጥር:",
    faydaPhoneHint: "በብሔራዊ መታወቂያዎ ላይ ካለው ስልክ ጋር አንድ መሆን አለበት።",
    faydaFinLabel: "የፋይዳ መለያ ቁጥር (FIN / 12-አሃዝ):",
    faydaFinHint: "በዲጂታል ወይም በካርድ መታወቂያዎ ላይ የሚገኝ ቁጥር ነው።",
    sendFaydaOtp: "የማረጋገጫ ኮድ (OTP) ላክ",
    enterNidpOtp: "የፋይዳ 6-አሃዝ የኤስኤምኤስ ኮድ ያስገቡ",
    didntGetOtp: "ኮዱ አልደረሰዎትም?",
    resendOtp: "እንደገና ላክ (58ሰ)",
    verifyFaydaIdentity: "ማንነቴን አረጋግጥና ፕሮፋይሌን ክፈት",
    bonusAwarded: "+10 ነፃ የእንኳን ደህና መጡ ክሬዲት አግኝተዋል!",
    bonusAwardedDesc: "ፕሮፋይልዎ በአስተማማኝ የፋይዳ አርማ በመደምቁ ታማኝነትዎ ከፍተኛ ሆኗል።",
    startDatingFayda: "በተረጋገጠ ፕሮፋይል ይጀምሩ",
    shareModalTitle: "ፍቅርን ለጓደኞች ያጋሩ፤ እጥፍ ክሬዲት ያግኙ!",
    shareModalSubtitle: "ጓደኞችዎ በእርስዎ ሊንክ ገብተው በፋይዳ (Fayda ID) ሲረጋገጡ ክሬዲትዎ ወዲያውኑ በእጥፍ (2X) ያድጋል!",
    totalCredits: "ያለዎት ክሬዲት",
    invitedFriends: "የተጋበዙ ጓደኞች",
    faydaVerifiedFriends: "በፋይዳ የተረጋገጡ (2X)",
    how1Title: "ሊንክዎን ያጋሩ",
    how1Desc: "ሲልኩ ወዲያውኑ +5 ነፃ ክሬዲት ያገኛሉ።",
    how2Title: "ጓደኛዎ በፋይዳ ሲረጋገጥ",
    how2Desc: "በእውነተኛ የኢትዮጵያ ብሔራዊ መታወቂያ ይመዘገባሉ።",
    how3Title: "ክሬዲትዎ እጥፍ ይሆናል!",
    how3Desc: "ቦነስዎ ወደ +10 ክሬዲት ወይም የVIP ቀናት በእጥፍ ያድጋል!",
    yourUniqueLink: "የእርስዎ ልዩ የግብዣ ሊንክ:",
    copyLink: "ቅዳ",
    shareInstantly: "በማህበራዊ ሚዲያ አጋራ:",
    trySimulation: "የእጥፍ ክሬዲት ሂደቱን መሞከር ይፈልጋሉ?",
    simDesc: "ጓደኛዎ ገብቶ በፋይዳ ሲረጋገጥ ክሬዲትዎ እንዴት እጥፍ እንደሚሆን በቀጥታ ይመልከቱ!",
    simBtn: "ጓደኛ ሲገባና ሲረጋገጥ ሞክር (2X እጥፍ ቀስቅስ)",
    spendCreditsTitle: "ያገኙትን ነፃ ክሬዲት ይጠቀሙ:",
    redeem: "ተጠቀም",

    // Settings & Auth Localization (Amharic)
    signIn: "ግባ",
    signOut: "ከፍቅር መድረክ ውጣ",
    tabEditProfile: "ፕሮፋይል አስተካክል",
    tabSecurity: "ፋይዳና ቴሌግራም",
    tabPreferences: "ምርጫዎች",
    fullName: "ሙሉ ስም (እንደ መታወቂያዎ):",
    age: "ዕድሜ:",
    cityDistrict: "ከተማ / ክፍለ ከተማ:",
    faithBelief: "እምነት:",
    occupation: "የስራ መስክ:",
    fastingCheckbox: "ጾመኛ ነኝ (የጾም ምግብ) 🥗",
    bunaCheckbox: "የባህል ቡና ወዳጅ ☕",
    bioLabel: "ስለ እኔ አጭር መግለጫ:",
    saveChanges: "መረጃዬን መዝግብ",
    manageFayda: "የፋይዳ መታወቂያ ሰርተፍኬት",
    changeTelegram: "የቴሌግራም አካውንት ቀይር",
    interestedIn: "የምፈልገው ፆታ:",
    ageRange: "የዕድሜ ክልል ምርጫ (18 - 40):",
    welcomeBack: "እንኳን ወደ ፍቅር በደህና መጡ",
    authSubtitle: "በኢትዮጵያ አስተማማኙ የፍቅር መድረክ በፋይዳ ብሔራዊ መታወቂያና በቴሌግራም የተጠበቀ።",
    signInTelegram: "በቴሌግራም በፍጥነት ግባ",
    instantVerifiedTg: "የ1-ጠቅታ የፈጣን መግቢያ (@Habte338)",
    orPhone: "ወይም በስልክ ቁጥርና በፋይዳ መታወቂያ ግባ",
    phoneOrFayda: "የስልክ ቁጥር ወይም የፋይዳ FIN:",
    smsCodeOrPin: "የኤስኤምኤስ ፓስኮድ ወይም የፋይዳ OTP:",
    rememberDevice: "በዚህ መሳሪያ ላይ አስታውሰኝ",
    logInNow: "ወደ ፍቅር ግባ",
    quickDemoAccounts: "የሙከራ አካውንቶች:"
  }
};

// Simulated Chats
const INITIAL_CONVERSATIONS = [
  {
    profileId: 1,
    name: "Selamawit",
    avatar: "assets/ethiopian_woman_profile1_1792309419035.jpg",
    lastMsg: "Selam! That sounds wonderful, Tomoca in Bole is my favorite!",
    lastTime: "10:32 AM",
    messages: [
      { sender: "them", text: "Selam Abebe! Happy to connect with you here! 😊", time: "10:15 AM" },
      { sender: "me", text: "Selamawit! Endet nesh? I really admire your architectural work around Addis.", time: "10:20 AM" },
      { sender: "them", text: "Ameseginalehu! That means a lot. Are you often around Bole?", time: "10:25 AM" },
      { sender: "me", text: "Yes, I work nearby! Would love to invite you for buna at Tomoca this Friday afternoon. ☕", time: "10:30 AM" },
      { sender: "them", text: "Selam! That sounds wonderful, Tomoca in Bole is my favorite! Let's do it!", time: "10:32 AM" }
    ]
  },
  {
    profileId: 3,
    name: "Hanan",
    avatar: "assets/ethiopian_woman_profile2_1792309642691.jpg",
    lastMsg: "Ameseginalehu! I'd love to share my new Habesha dress designs with you.",
    lastTime: "Yesterday",
    messages: [
      { sender: "them", text: "Selam! Your profile picture at Entoto overlook is breathtaking!", time: "Yesterday" },
      { sender: "me", text: "Selam Hanan! Thank you so much. Your traditional Habesha embroidery is pure talent!", time: "Yesterday" },
      { sender: "them", text: "Ameseginalehu! I'd love to share my new Habesha dress designs with you.", time: "Yesterday" }
    ]
  }
];

// ============================================================================
// 2. APPLICATION STATE & PERSISTENCE
// ============================================================================

const STORAGE_KEY = "fikir_ethiopia_user_session_v1";

const state = {
  currentLang: "en",
  currentView: "discover",
  isLoggedIn: true,
  currentUser: {
    fullName: "Habte Mikael",
    nameAm: "ሀብተ ሚካኤል",
    age: 26,
    gender: "male",
    city: "Addis Ababa - Bole",
    occupation: "Software Entrepreneur & Builder",
    faith: "Orthodox",
    fasting: true,
    bunaLover: true,
    bio: "Passionate about Ethiopian tech, coffee ceremonies in Bole, and finding an authentic Habesha life partner.",
    phone: "911 234 567",
    telegram: "@Habte338",
    isTelegramConnected: true,
    isFaydaVerified: true,
    fin: "4820 9182 3410",
    avatar: "assets/ethiopian_man_profile1_1792309463785.jpg"
  },
  isVip: false,
  freeLikesRemaining: 5,
  creditsBalance: 15,
  invitedFriendsCount: 3,
  faydaVerifiedFriendsCount: 2,
  isFaydaVerified: true,
  faydaUser: {
    fullName: "Habte Mikael",
    phone: "911 234 567",
    fin: "4820 9182 3410"
  },
  selectedPlan: "1-month",
  selectedPrice: 199,
  selectedPayment: "telebirr",
  genderFilter: "female",
  cityFilter: "all",
  faithFilter: "all",
  tsomFilter: false,
  bunaFilter: false,
  cardIndex: 0,
  swipedHistory: [],
  matches: [...INITIAL_CONVERSATIONS],
  activeChatProfileId: 1
};

function saveUserSession() {
  try {
    const sessionData = {
      isLoggedIn: state.isLoggedIn,
      currentUser: state.currentUser,
      isVip: state.isVip,
      creditsBalance: state.creditsBalance,
      freeLikesRemaining: state.freeLikesRemaining,
      isFaydaVerified: state.isFaydaVerified,
      invitedFriendsCount: state.invitedFriendsCount,
      faydaVerifiedFriendsCount: state.faydaVerifiedFriendsCount
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionData));
  } catch (e) {
    console.warn("localStorage write failed:", e);
  }
}

function loadUserSession() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      if (typeof data.isLoggedIn === "boolean") state.isLoggedIn = data.isLoggedIn;
      if (data.currentUser) state.currentUser = Object.assign(state.currentUser, data.currentUser);
      if (typeof data.isVip === "boolean") state.isVip = data.isVip;
      if (typeof data.creditsBalance === "number") state.creditsBalance = data.creditsBalance;
      if (typeof data.freeLikesRemaining === "number") state.freeLikesRemaining = data.freeLikesRemaining;
      if (typeof data.isFaydaVerified === "boolean") state.isFaydaVerified = data.isFaydaVerified;
      if (typeof data.invitedFriendsCount === "number") state.invitedFriendsCount = data.invitedFriendsCount;
      if (typeof data.faydaVerifiedFriendsCount === "number") state.faydaVerifiedFriendsCount = data.faydaVerifiedFriendsCount;
    }
  } catch (e) {
    console.warn("localStorage read failed:", e);
  }
}

function updateUserAuthUI() {
  const loginBtn = document.getElementById("headerLoginBtn");
  const userProfileBtn = document.getElementById("userProfileBtn");
  const userHeaderAvatar = document.getElementById("userHeaderAvatar");

  // Settings modal user preview
  const settingsUserAvatar = document.getElementById("settingsUserAvatar");
  const settingsDisplayName = document.getElementById("settingsDisplayName");
  const settingsAgeTag = document.getElementById("settingsAgeTag");
  const settingsSubTitle = document.getElementById("settingsSubTitle");
  const settingsFaydaBadge = document.getElementById("settingsFaydaBadge");
  const settingsTelegramBadge = document.getElementById("settingsTelegramBadge");
  const settingsVipBadge = document.getElementById("settingsVipBadge");

  // Form inputs in settings
  const inputUserName = document.getElementById("inputUserName");
  const inputUserAge = document.getElementById("inputUserAge");
  const inputUserCity = document.getElementById("inputUserCity");
  const inputUserFaith = document.getElementById("inputUserFaith");
  const inputUserOccupation = document.getElementById("inputUserOccupation");
  const checkUserFasting = document.getElementById("checkUserFasting");
  const checkUserBuna = document.getElementById("checkUserBuna");
  const inputUserBio = document.getElementById("inputUserBio");

  // Security elements
  const secFaydaStatusBadge = document.getElementById("secFaydaStatusBadge");
  const secFaydaFinText = document.getElementById("secFaydaFinText");
  const secTelegramStatusBadge = document.getElementById("secTelegramStatusBadge");
  const secTelegramHandleText = document.getElementById("secTelegramHandleText");
  const secPhoneText = document.getElementById("secPhoneText");
  const settingsCreditsVal = document.getElementById("settingsCreditsVal");
  const settingsVipStatusVal = document.getElementById("settingsVipStatusVal");

  // Header login vs profile avatar toggle
  if (state.isLoggedIn) {
    if (loginBtn) loginBtn.style.display = "none";
    if (userProfileBtn) userProfileBtn.style.display = "inline-flex";
  } else {
    if (loginBtn) loginBtn.style.display = "inline-flex";
    if (userProfileBtn) userProfileBtn.style.display = "none";
  }

  const u = state.currentUser;
  if (userHeaderAvatar) userHeaderAvatar.src = u.avatar;
  if (settingsUserAvatar) settingsUserAvatar.src = u.avatar;
  if (settingsDisplayName) settingsDisplayName.textContent = u.fullName;
  if (settingsAgeTag) settingsAgeTag.textContent = u.age;
  if (settingsSubTitle) settingsSubTitle.textContent = `📍 ${u.city} • ${u.occupation}`;

  if (settingsFaydaBadge) {
    settingsFaydaBadge.style.display = state.isFaydaVerified ? "inline-flex" : "none";
  }
  if (settingsTelegramBadge) {
    settingsTelegramBadge.textContent = `✈️ ${u.telegram}`;
    settingsTelegramBadge.style.display = u.isTelegramConnected ? "inline-flex" : "none";
  }
  if (settingsVipBadge) {
    settingsVipBadge.textContent = state.isVip ? "👑 VIP ACTIVE" : "FREE TIER";
    settingsVipBadge.className = `badge-pill ${state.isVip ? "pill-vip" : "pill-telegram"}`;
  }

  // Populate form inputs
  if (inputUserName) inputUserName.value = u.fullName;
  if (inputUserAge) inputUserAge.value = u.age;
  if (inputUserCity) inputUserCity.value = u.city;
  if (inputUserFaith) inputUserFaith.value = u.faith;
  if (inputUserOccupation) inputUserOccupation.value = u.occupation;
  if (checkUserFasting) checkUserFasting.checked = u.fasting;
  if (checkUserBuna) checkUserBuna.checked = u.bunaLover;
  if (inputUserBio) inputUserBio.value = u.bio;

  // Security elements
  if (secFaydaFinText) {
    secFaydaFinText.textContent = state.isFaydaVerified
      ? `${u.fin.slice(0, 4)} •••• •••• ${u.fin.slice(-4)}`
      : "Not Linked";
  }
  if (secFaydaStatusBadge) {
    secFaydaStatusBadge.textContent = state.isFaydaVerified ? "Verified ✓" : "Pending";
    secFaydaStatusBadge.className = state.isFaydaVerified ? "status-verified-pill" : "status-verified-pill telegram-pill";
  }
  if (secTelegramHandleText) secTelegramHandleText.textContent = u.telegram;
  if (secTelegramStatusBadge) {
    secTelegramStatusBadge.textContent = u.isTelegramConnected ? "Connected ✓" : "Disconnected";
  }
  if (secPhoneText) secPhoneText.textContent = `+251 ${u.phone}`;
  if (settingsCreditsVal) settingsCreditsVal.textContent = `${state.creditsBalance} Credits`;
  if (settingsVipStatusVal) settingsVipStatusVal.textContent = state.isVip ? "👑 Premium VIP" : "FREE Tier";
}

// ============================================================================
// 3. AUDIO SOUND EFFECTS (Web Audio API Synthesizer - Zero External Files)
// ============================================================================

const soundFx = {
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },
  playSwipe(isLike) {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      const now = this.ctx.currentTime;
      if (isLike) {
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
      } else {
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(160, now + 0.15);
      }
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.16);
    } catch (e) { /* ignore audio permission restrictions */ }
  },
  playMatchCelebration() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.15, now + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.01, now + idx * 0.1 + 0.25);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.26);
      });
    } catch (e) { }
  },
  playBunaChime() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(987.77, now);
      osc.frequency.exponentialRampToValueAtTime(1318.51, now + 0.25);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.36);
    } catch (e) { }
  }
};

// ============================================================================
// 4. UI INITIALIZATION & EVENT LISTENERS
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  loadUserSession();
  setupNavigation();
  setupFilters();
  setupDeckControls();
  setupModals();
  setupFaydaModal();
  setupReferralModal();
  setupSettingsModal();
  setupAuthModal();
  setupChatHandlers();
  setupLanguageToggle();
  renderSwipeDeck();
  renderWhoLikedYou();
  renderMatchesList();
  renderActiveChat();
  updateCreditsUI();
  updateFaydaUI();
  updateUserAuthUI();
});

// Toast Notifications
function showToast(message, icon = "✨") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Navigation between Discover, Chats, and Who Liked You
function setupNavigation() {
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetView = btn.getAttribute("data-view");
      switchView(targetView);
    });
  });

  // Logo returns to Discover
  document.getElementById("brandLogo").addEventListener("click", () => switchView("discover"));
}

function switchView(viewName) {
  state.currentView = viewName;
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-view") === viewName);
  });

  document.getElementById("viewDiscover").style.display = viewName === "discover" ? "block" : "none";
  document.getElementById("viewMatches").style.display = viewName === "matches" ? "block" : "none";
  document.getElementById("viewLikes").style.display = viewName === "likes" ? "block" : "none";

  if (viewName === "likes") renderWhoLikedYou();
  if (viewName === "matches") renderMatchesList();
}

// Language Switcher
function setupLanguageToggle() {
  const toggleBtn = document.getElementById("langToggleBtn");
  toggleBtn.addEventListener("click", () => {
    state.currentLang = state.currentLang === "en" ? "am" : "en";
    updateLanguageUI();
  });
}

function updateLanguageUI() {
  const isAm = state.currentLang === "am";
  document.getElementById("langEn").classList.toggle("active-lang", !isAm);
  document.getElementById("langAm").classList.toggle("active-lang", isAm);

  // Update all data-i18n elements
  const dict = I18N[state.currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update dynamic parts
  renderSwipeDeck();
  renderMatchesList();
  renderWhoLikedYou();
  updateLikesCounter();
}

// ============================================================================
// 5. CULTURAL FILTERS & PROFILES FILTERING
// ============================================================================

function setupFilters() {
  const citySelect = document.getElementById("filterCity");
  const faithSelect = document.getElementById("filterFaith");
  const tsomBtn = document.getElementById("filterTsom");
  const bunaBtn = document.getElementById("filterBuna");
  const genderPills = document.querySelectorAll(".gender-pill");

  citySelect.addEventListener("change", (e) => {
    state.cityFilter = e.target.value;
    state.cardIndex = 0;
    renderSwipeDeck();
  });

  faithSelect.addEventListener("change", (e) => {
    state.faithFilter = e.target.value;
    state.cardIndex = 0;
    renderSwipeDeck();
  });

  tsomBtn.addEventListener("click", () => {
    state.tsomFilter = !state.tsomFilter;
    tsomBtn.classList.toggle("active", state.tsomFilter);
    state.cardIndex = 0;
    renderSwipeDeck();
  });

  bunaBtn.addEventListener("click", () => {
    state.bunaFilter = !state.bunaFilter;
    bunaBtn.classList.toggle("active", state.bunaFilter);
    state.cardIndex = 0;
    renderSwipeDeck();
  });

  genderPills.forEach(pill => {
    pill.addEventListener("click", () => {
      genderPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.genderFilter = pill.getAttribute("data-gender");
      state.cardIndex = 0;
      renderSwipeDeck();
    });
  });

  // Boost Button
  document.getElementById("btnBoostProfile").addEventListener("click", () => {
    if (!state.isVip) {
      showToast(state.currentLang === "am" ? "የአዲስ አበባ ማድመቂያ ለVIP ተጠቃሚዎች ነው!" : "Profile Boost is a Fikir VIP feature! Upgrade to boost.", "👑");
      openVipModal();
    } else {
      showToast(state.currentLang === "am" ? "⚡ ፕሮፋይልዎ በአዲስ አበባ ለ30 ደቂቃ ደምቋል!" : "⚡ Your profile is now boosted in Addis Ababa for 30 mins!", "🚀");
    }
  });

  // Reset Deck
  document.getElementById("resetDeckBtn").addEventListener("click", () => {
    state.cardIndex = 0;
    state.swipedHistory = [];
    renderSwipeDeck();
  });
}

function getFilteredProfiles() {
  return PROFILES.filter(p => {
    if (state.genderFilter !== "all" && p.gender !== state.genderFilter) return false;
    if (state.cityFilter !== "all" && !p.cityFull.includes(state.cityFilter)) return false;
    if (state.faithFilter !== "all" && p.faith !== state.faithFilter) return false;
    if (state.tsomFilter && !p.fasting) return false;
    if (state.bunaFilter && !p.bunaLover) return false;
    return true;
  });
}

// ============================================================================
// 6. SWIPE CARD STACK & GESTURE DRAGGING
// ============================================================================

function renderSwipeDeck() {
  const deck = document.getElementById("swipeDeck");
  const emptyState = document.getElementById("deckEmptyState");
  deck.innerHTML = "";

  const filtered = getFilteredProfiles();
  const remaining = filtered.slice(state.cardIndex);

  if (remaining.length === 0) {
    deck.style.display = "none";
    emptyState.style.display = "flex";
    return;
  }

  deck.style.display = "block";
  emptyState.style.display = "none";

  // Render top 3 cards for 3D stack effect
  const cardsToRender = remaining.slice(0, 3);
  cardsToRender.reverse().forEach((profile, idx) => {
    const isCurrent = idx === cardsToRender.length - 1;
    const isNext = idx === cardsToRender.length - 2;
    const isThird = idx === cardsToRender.length - 3;

    const card = createCardElement(profile, isCurrent, isNext, isThird);
    deck.appendChild(card);

    if (isCurrent) {
      attachDragGestures(card, profile);
    }
  });
}

function createCardElement(profile, isCurrent, isNext, isThird) {
  const card = document.createElement("div");
  card.className = "dating-card";
  if (isCurrent) card.classList.add("card-current");
  if (isNext) card.classList.add("card-next");
  if (isThird) card.classList.add("card-third");
  card.setAttribute("data-id", profile.id);

  const isAm = state.currentLang === "am";
  const displayName = isAm ? profile.nameAm : profile.name;
  const displayOccupation = isAm ? profile.occupationAm : profile.occupation;
  const displayBio = isAm ? profile.bioAm : profile.bio;
  const tagsList = isAm ? profile.tagsAm : profile.tags;

  card.innerHTML = `
    <div class="card-image-wrap">
      <img src="${profile.image}" alt="${profile.name}" class="card-profile-photo" draggable="false">
      <div class="card-gradient-overlay"></div>

      <!-- Stamps -->
      <div class="card-stamp stamp-like">${isAm ? "ወደድኩሽ ❤️" : "LIKE ❤️"}</div>
      <div class="card-stamp stamp-nope">${isAm ? "አለፈኝ ✕" : "NOPE ✕"}</div>
      <div class="card-stamp stamp-buna">☕ ${isAm ? "ቡና ጋብዝ" : "BUNA INVITE"}</div>

      <!-- Top Badges -->
      <div class="card-top-badges">
        <div class="ethio-flag-badge">
          <span>🇪🇹</span> <span>${profile.city}</span>
        </div>
        <div class="verified-habesha-badge">
          <span>✓</span> <span>${isAm ? "የተረጋገጠ" : "VERIFIED"}</span>
        </div>
      </div>

      <!-- Bottom Card Info -->
      <div class="card-info-content">
        <div class="card-name-row">
          <span class="card-name">${displayName}</span>
          <span class="card-name-amharic">${isAm ? profile.name : profile.nameAm}</span>
          <span class="card-age">${profile.age}</span>
        </div>

        <div class="card-location-row">
          <span>📍</span> <span>${profile.cityFull}</span> • <span>${displayOccupation}</span>
        </div>

        <div class="card-cultural-tags">
          <span class="cultural-tag tag-faith">🕊️ ${isAm ? profile.faithLabelAm : profile.faithLabel}</span>
          ${profile.fasting ? `<span class="cultural-tag tag-fasting">🥗 ${isAm ? "ጾመኛ" : "Fasting Friendly"}</span>` : ""}
          <span class="cultural-tag">☕ ${isAm ? "የባህል ቡና" : "Buna Lover"}</span>
        </div>

        <p class="card-bio-snippet">${displayBio}</p>
      </div>
    </div>
  `;

  return card;
}

// Touch and Mouse Dragging with Physics
function attachDragGestures(card, profile) {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;

  const likeStamp = card.querySelector(".stamp-like");
  const nopeStamp = card.querySelector(".stamp-nope");
  const bunaStamp = card.querySelector(".stamp-buna");

  const onStart = (e) => {
    isDragging = true;
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;
    startX = clientX;
    startY = clientY;
    card.style.transition = "none";
  };

  const onMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;
    currentX = clientX - startX;
    currentY = clientY - startY;

    const rotation = currentX * 0.08;
    card.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg)`;

    // Stamp Opacities
    if (currentX > 30) {
      likeStamp.style.opacity = Math.min((currentX - 30) / 90, 1);
      nopeStamp.style.opacity = 0;
      bunaStamp.style.opacity = 0;
    } else if (currentX < -30) {
      nopeStamp.style.opacity = Math.min((-currentX - 30) / 90, 1);
      likeStamp.style.opacity = 0;
      bunaStamp.style.opacity = 0;
    } else if (currentY < -40) {
      bunaStamp.style.opacity = Math.min((-currentY - 40) / 90, 1);
      likeStamp.style.opacity = 0;
      nopeStamp.style.opacity = 0;
    } else {
      likeStamp.style.opacity = 0;
      nopeStamp.style.opacity = 0;
      bunaStamp.style.opacity = 0;
    }
  };

  const onEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    card.style.transition = "transform 0.3s ease, opacity 0.3s ease";

    const threshold = 110;
    if (currentX > threshold) {
      handleSwipeRight(card, profile);
    } else if (currentX < -threshold) {
      handleSwipeLeft(card, profile);
    } else if (currentY < -100) {
      handleSuperLike(card, profile);
    } else {
      // Snap back
      card.style.transform = "";
      likeStamp.style.opacity = 0;
      nopeStamp.style.opacity = 0;
      bunaStamp.style.opacity = 0;
    }
  };

  card.addEventListener("mousedown", onStart);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onEnd);

  card.addEventListener("touchstart", onStart, { passive: true });
  window.addEventListener("touchmove", onMove, { passive: true });
  window.addEventListener("touchend", onEnd);
}

// ============================================================================
// 7. SWIPE ACTIONS & FREEMIUM LIKES LIMIT LOGIC
// ============================================================================

function setupDeckControls() {
  document.getElementById("btnLike").addEventListener("click", () => {
    const currentCard = document.querySelector(".dating-card.card-current");
    const filtered = getFilteredProfiles();
    const profile = filtered[state.cardIndex];
    if (currentCard && profile) handleSwipeRight(currentCard, profile);
  });

  document.getElementById("btnPass").addEventListener("click", () => {
    const currentCard = document.querySelector(".dating-card.card-current");
    const filtered = getFilteredProfiles();
    const profile = filtered[state.cardIndex];
    if (currentCard && profile) handleSwipeLeft(currentCard, profile);
  });

  document.getElementById("btnSuperlike").addEventListener("click", () => {
    const currentCard = document.querySelector(".dating-card.card-current");
    const filtered = getFilteredProfiles();
    const profile = filtered[state.cardIndex];
    if (currentCard && profile) handleSuperLike(currentCard, profile);
  });

  document.getElementById("btnRewind").addEventListener("click", handleRewind);
  document.getElementById("btnInfo").addEventListener("click", () => {
    const filtered = getFilteredProfiles();
    const profile = filtered[state.cardIndex];
    if (profile) openProfileDetailModal(profile);
  });

  // Sidebar Buna Invite
  document.getElementById("sidebarBunaBtn").addEventListener("click", () => {
    const filtered = getFilteredProfiles();
    const profile = filtered[state.cardIndex];
    if (profile) handleSuperLike(null, profile);
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (state.currentView !== "discover") return;
    const currentCard = document.querySelector(".dating-card.card-current");
    const filtered = getFilteredProfiles();
    const profile = filtered[state.cardIndex];
    if (!profile) return;

    if (e.key === "ArrowRight") handleSwipeRight(currentCard, profile);
    if (e.key === "ArrowLeft") handleSwipeLeft(currentCard, profile);
    if (e.key === "ArrowUp") handleSuperLike(currentCard, profile);
  });
}

function handleSwipeRight(card, profile) {
  // Check Freemium Likes Limit
  if (!state.isVip) {
    if (state.freeLikesRemaining <= 0) {
      showVipLimitOverlay();
      return;
    }
    state.freeLikesRemaining--;
    updateLikesCounter();
  }

  soundFx.playSwipe(true);
  state.swipedHistory.push({ profile, action: "like" });

  if (card) {
    card.style.transform = "translate(500px, -20px) rotate(35deg)";
    card.style.opacity = "0";
  }

  setTimeout(() => {
    state.cardIndex++;
    // Trigger match on Selamawit (id: 1) or Bethlehem (id: 5)
    if (profile.id === 1 || profile.id === 5) {
      triggerMatchCelebration(profile);
    } else {
      renderSwipeDeck();
    }
  }, 220);
}

function handleSwipeLeft(card, profile) {
  soundFx.playSwipe(false);
  state.swipedHistory.push({ profile, action: "pass" });

  if (card) {
    card.style.transform = "translate(-500px, -20px) rotate(-35deg)";
    card.style.opacity = "0";
  }

  setTimeout(() => {
    state.cardIndex++;
    renderSwipeDeck();
  }, 220);
}

function handleSuperLike(card, profile) {
  soundFx.playBunaChime();
  state.swipedHistory.push({ profile, action: "buna" });

  showToast(
    state.currentLang === "am"
      ? `☕ ባህላዊ የቡና ግብዣ ለ${profile.nameAm} ተልኳል!`
      : `☕ Traditional Buna date invite sent to ${profile.name}!`,
    "☕"
  );

  if (card) {
    card.style.transform = "translate(0, -600px) scale(1.1)";
    card.style.opacity = "0";
  }

  setTimeout(() => {
    state.cardIndex++;
    triggerMatchCelebration(profile);
  }, 250);
}

function handleRewind() {
  if (!state.isVip) {
    showToast(
      state.currentLang === "am"
        ? "የተሳሳተ ስዋይፕ መመለስ (Rewind) የVIP ተጠቃሚዎች ልዩ ጥቅም ነው!"
        : "Rewind is a Fikir VIP feature! Upgrade to undo any swipe.",
      "👑"
    );
    openVipModal();
    return;
  }

  if (state.swipedHistory.length === 0 || state.cardIndex === 0) {
    showToast(state.currentLang === "am" ? "የሚመለስ ፕሮፋይል የለም" : "No swipe to rewind!", "⚠️");
    return;
  }

  state.swipedHistory.pop();
  state.cardIndex--;
  showToast(state.currentLang === "am" ? "ፕሮፋይሉ ተመልሷል!" : "Rewound last profile!", "🔄");
  renderSwipeDeck();
}

function updateLikesCounter() {
  const chip = document.getElementById("dailyLikesChip");
  const text = document.getElementById("likesRemainingText");
  const isAm = state.currentLang === "am";

  if (state.isVip) {
    chip.classList.add("unlimited-chip");
    text.textContent = isAm ? "ያልተገደበ ላይክ (VIP)" : "Unlimited VIP Likes";
  } else {
    chip.classList.remove("unlimited-chip");
    text.textContent = isAm
      ? `${state.freeLikesRemaining} ነፃ ላይክ ቀርቷል`
      : `${state.freeLikesRemaining} Free Likes Left`;
  }
}

function showVipLimitOverlay() {
  const overlay = document.getElementById("vipLimitOverlay");
  overlay.style.display = "flex";
}

// ============================================================================
// 8. CELEBRATION & MATCH MODAL
// ============================================================================

function triggerMatchCelebration(profile) {
  soundFx.playMatchCelebration();
  const modal = document.getElementById("matchModalBackdrop");
  const desc = document.getElementById("matchModalDesc");
  const matchImg = document.getElementById("matchModalProfileImg");

  const isAm = state.currentLang === "am";
  desc.textContent = isAm
    ? `እርስዎና ${profile.nameAm} ተዋደዳችኋል! የባህል ቡና ቀጠሮ ይጀምሩ!`
    : `You and ${profile.name} liked each other! Start your Habesha journey.`;

  matchImg.src = profile.image;
  modal.style.display = "flex";
  createConfettiParticles();

  // Add to matches if not exists
  const exists = state.matches.some(m => m.profileId === profile.id);
  if (!exists) {
    state.matches.unshift({
      profileId: profile.id,
      name: profile.name,
      avatar: profile.image,
      lastMsg: isAm ? "ተጋጥማችኋል! ቡና ጋብዘው ያውሩ።" : "You matched! Send a Buna invite.",
      lastTime: "Just now",
      messages: [
        { sender: "them", text: isAm ? `ሰላም! በመተዋወቃችን ደስ ብሎኛል 😊` : `Selam! Wonderful to match with you 😊`, time: "Just now" }
      ]
    });
    document.getElementById("matchBadgeCount").textContent = state.matches.length;
    document.getElementById("matchesTotalBadge").textContent = state.matches.length;
  }
}

function createConfettiParticles() {
  const container = document.getElementById("confettiContainer");
  container.innerHTML = "";
  const colors = ["#f5bd02", "#009b4d", "#e03a3e", "#ffffff", "#ffd700"];

  for (let i = 0; i < 40; i++) {
    const bit = document.createElement("div");
    bit.style.position = "absolute";
    bit.style.width = `${Math.random() * 8 + 6}px`;
    bit.style.height = `${Math.random() * 12 + 8}px`;
    bit.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.top = "-20px";
    bit.style.borderRadius = "2px";
    bit.style.transform = `rotate(${Math.random() * 360}deg)`;
    bit.style.opacity = Math.random();
    bit.style.transition = `top ${Math.random() * 2 + 1.5}s cubic-bezier(0.25, 1, 0.5, 1), transform 2s ease`;
    container.appendChild(bit);

    setTimeout(() => {
      bit.style.top = "100%";
      bit.style.transform = `rotate(${Math.random() * 720}deg) scale(0.5)`;
      bit.style.opacity = "0";
    }, 50);
  }
}

// ============================================================================
// 9. WHO LIKED YOU (FREEMIUM / VIP UNBLUR)
// ============================================================================

function renderWhoLikedYou() {
  const grid = document.getElementById("whoLikedGrid");
  const callout = document.getElementById("likesPageVipCallout");
  const statusPill = document.getElementById("likesStatusPill");
  const isAm = state.currentLang === "am";
  grid.innerHTML = "";

  if (state.isVip) {
    statusPill.className = "status-pill status-vip";
    statusPill.textContent = isAm ? "ፕላን፡ ቪአይፒ (ያልተገደበ)" : "Plan: FIKIR VIP (UNLOCKED)";
    document.getElementById("likesPageUpgradeBtn").style.display = "none";
  } else {
    statusPill.className = "status-pill status-free";
    statusPill.textContent = isAm ? "ፕላን፡ ነፃ (የተገደበ)" : "Plan: FREE (LOCKED)";
    document.getElementById("likesPageUpgradeBtn").style.display = "inline-flex";
  }

  WHO_LIKED_YOU.forEach(item => {
    const card = document.createElement("div");
    card.className = `liked-card ${state.isVip ? "" : "is-blurred"}`;
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="liked-card-img">
      ${!state.isVip ? `
        <div class="blur-overlay-lock">
          <div class="lock-shield-icon">🔒</div>
          <div class="blur-hint-text">${isAm ? "በቴሌብር ፎቶ ክፈት" : "Unlock with VIP"}</div>
        </div>
      ` : ""}
      <div class="liked-card-bottom-info">
        <div class="liked-card-name">${state.isVip ? `${item.name}, ${item.age}` : "Ethiopian Single"}</div>
        <div class="liked-card-city">📍 ${item.city} • ${item.time}</div>
      </div>
    `;

    card.addEventListener("click", () => {
      if (!state.isVip) {
        openVipModal();
      } else {
        showToast(
          isAm
            ? `ከ${item.name} ጋር በቀጥታ ማውራት ይችላሉ!`
            : `You can chat with ${item.name} directly!`,
          "❤️"
        );
      }
    });

    grid.appendChild(card);
  });
}

// ============================================================================
// 10. VIP UPGRADE MODAL & TELEBIRR / CBE BIRR CHECKOUT
// ============================================================================

function setupModals() {
  const vipModal = document.getElementById("vipModalBackdrop");
  const openVipButtons = [
    document.getElementById("openVipModalBtn"),
    document.getElementById("sidebarUpgradeBtn"),
    document.getElementById("limitUpgradeBtn"),
    document.getElementById("likesPageUpgradeBtn")
  ];

  openVipButtons.forEach(btn => {
    if (btn) btn.addEventListener("click", openVipModal);
  });

  document.getElementById("closeVipModalBtn").addEventListener("click", () => {
    vipModal.style.display = "none";
  });

  document.getElementById("limitCloseBtn").addEventListener("click", () => {
    document.getElementById("vipLimitOverlay").style.display = "none";
  });

  // Plan Cards Selection
  const planCards = document.querySelectorAll(".plan-card");
  planCards.forEach(card => {
    card.addEventListener("click", () => {
      planCards.forEach(c => c.classList.remove("active-plan"));
      card.classList.add("active-plan");
      state.selectedPlan = card.getAttribute("data-plan");
      state.selectedPrice = parseInt(card.getAttribute("data-price"), 10);
      updatePaymentSummary();
    });
  });

  // Payment Option Cards Selection
  const paymentCards = document.querySelectorAll(".payment-option-card");
  paymentCards.forEach(card => {
    card.addEventListener("click", () => {
      paymentCards.forEach(c => c.classList.remove("active-payment"));
      card.classList.add("active-payment");
      const radio = card.querySelector('input[type="radio"]');
      radio.checked = true;
      state.selectedPayment = radio.value;
      updatePaymentSummary();
    });
  });

  // Payment Form Submission
  const form = document.getElementById("paymentInputForm");
  form.addEventListener("submit", handlePaymentSubmit);

  // Match Modal Actions
  document.getElementById("matchStartChatBtn").addEventListener("click", () => {
    document.getElementById("matchModalBackdrop").style.display = "none";
    switchView("matches");
  });

  document.getElementById("matchKeepSwipingBtn").addEventListener("click", () => {
    document.getElementById("matchModalBackdrop").style.display = "none";
    renderSwipeDeck();
  });

  document.getElementById("closeProfileDetailBtn").addEventListener("click", () => {
    document.getElementById("profileDetailModalBackdrop").style.display = "none";
  });
}

function openVipModal() {
  document.getElementById("vipModalBackdrop").style.display = "flex";
  updatePaymentSummary();
}

function updatePaymentSummary() {
  const isAm = state.currentLang === "am";
  const planNameEl = document.getElementById("summaryPlanName");
  const totalPriceEl = document.getElementById("summaryTotalPrice");
  const payBtnText = document.getElementById("btnPayText");

  let planDisplay = state.selectedPlan === "1-month" ? "1 Month VIP" : (state.selectedPlan === "3-months" ? "3 Months VIP" : "1 Year VIP");
  if (isAm) {
    planDisplay = state.selectedPlan === "1-month" ? "1 ወር VIP" : (state.selectedPlan === "3-months" ? "3 ወር VIP" : "1 ዓመት VIP");
  }

  const paymentName = state.selectedPayment === "telebirr" ? "Telebirr (ቴሌብር)" : (state.selectedPayment === "cbebirr" ? "CBE Birr" : "Chapa");

  planNameEl.textContent = planDisplay;
  totalPriceEl.textContent = `${state.selectedPrice} ETB`;
  payBtnText.textContent = isAm
    ? `${state.selectedPrice} ብር በ${paymentName} ይክፈሉ`
    : `Pay ${state.selectedPrice} ETB via ${paymentName}`;
}

function handlePaymentSubmit(e) {
  e.preventDefault();
  const phone = document.getElementById("payerPhoneNumber").value;
  const simBox = document.getElementById("paymentSimBox");
  const simStatus = document.getElementById("simStatusText");
  const simSub = document.getElementById("simSubText");
  const submitBtn = document.getElementById("btnSubmitPayment");

  simBox.style.display = "block";
  submitBtn.disabled = true;

  const isAm = state.currentLang === "am";

  // Step 1: Connecting to Telebirr / CBE
  simStatus.textContent = isAm
    ? `ከቴሌብር ኔትወርክ ጋር እየተገናኘ ነው (+251 ${phone})...`
    : `Connecting to Telebirr USSD Gateway (+251 ${phone})...`;
  simSub.textContent = isAm ? "እባክዎትን ይጠብቁ..." : "Initiating mobile payment prompt...";

  setTimeout(() => {
    // Step 2: USSD Push Sent to phone
    simStatus.textContent = isAm
      ? `የክፍያ ጥያቄ ወደ ስልክዎ ተልኳል (*127#)!`
      : `USSD Push prompt sent to your device (*127#)!`;
    simSub.textContent = isAm ? "በስልክዎ ላይ ፒን (PIN) ቁጥርዎን በማስገባት ያረጋግጡ" : "Please approve prompt & enter your Telebirr PIN";

    setTimeout(() => {
      // Step 3: Success!
      simStatus.textContent = isAm
        ? "ክፍያው በተሳካ ሁኔታ ተጠናቋል! እናመሰግናለን!"
        : "Payment Confirmed! Transaction ID: ETB-984210";
      simSub.textContent = isAm ? "የፍቅር ቪአይፒ (VIP) በርቷል!" : "Fikir VIP Membership Activated!";

      soundFx.playMatchCelebration();

      setTimeout(() => {
        // Upgrade complete
        state.isVip = true;
        document.getElementById("vipStatusBadge").className = "logo-badge vip-active";
        document.getElementById("vipStatusBadge").textContent = "👑 VIP";
        document.getElementById("vipModalBackdrop").style.display = "none";
        document.getElementById("vipLimitOverlay").style.display = "none";
        simBox.style.display = "none";
        submitBtn.disabled = false;

        showToast(
          isAm
            ? "🎉 እንኳን ደስ አለዎት! ፍቅር ቪአይፒ በርቷል (ያልተገደበ ላይክና የወደዱህን ማየት)!"
            : "🎉 Welcome to Fikir VIP! Unlimited swipes & Unblurred matches are active!",
          "👑"
        );

        updateLikesCounter();
        renderWhoLikedYou();
        renderSwipeDeck();
      }, 1200);
    }, 2000);
  }, 1500);
}

// ============================================================================
// 11. CHATS & CONVERSATIONS
// ============================================================================

function setupChatHandlers() {
  const sendBtn = document.getElementById("chatSendBtn");
  const input = document.getElementById("chatTextInput");
  const giftCoffeeBtn = document.getElementById("sendGiftCoffeeBtn");

  const sendMsg = () => {
    const text = input.value.trim();
    if (!text) return;
    sendMessage(text);
    input.value = "";
  };

  sendBtn.addEventListener("click", sendMsg);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMsg();
  });

  // Buna Virtual Gift
  giftCoffeeBtn.addEventListener("click", () => {
    soundFx.playBunaChime();
    const coffeeGiftText = state.currentLang === "am"
      ? "☕ ባህላዊ የኢትዮጵያ ቡና በጀበና ጋብዤሃለሁ/ሻለሁ! ጣፋጭ ቀጠሮ ይሁንልን!"
      : "☕ I sent you a traditional Ethiopian Jebena coffee gift! Let's share a cup soon.";
    sendMessage(coffeeGiftText, true);
  });

  // Coffee Quick Replies
  document.querySelectorAll(".quick-reply-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const quickText = btn.getAttribute("data-text");
      sendMessage(quickText);
    });
  });

  // Chat Header actions
  document.getElementById("chatBunaInviteBtn").addEventListener("click", () => {
    soundFx.playBunaChime();
    const invite = state.currentLang === "am"
      ? "☕ ቦሌ ቶሞካ ተገናኝተን ባህላዊ ማኪያቶ እንጠጣ?"
      : "☕ Would you like to meet at Tomoca Cafe in Bole for coffee this weekend?";
    sendMessage(invite);
  });
}

function renderMatchesList() {
  const list = document.getElementById("conversationList");
  const recentRow = document.getElementById("recentMatchesRow");
  list.innerHTML = "";
  recentRow.innerHTML = "";

  state.matches.forEach(conv => {
    // Recent match circle
    const circle = document.createElement("div");
    circle.className = "recent-match-item";
    circle.innerHTML = `
      <div class="recent-match-avatar-wrap">
        <img src="${conv.avatar}" alt="${conv.name}" class="recent-match-avatar">
      </div>
      <span class="recent-match-name">${conv.name}</span>
    `;
    circle.addEventListener("click", () => {
      state.activeChatProfileId = conv.profileId;
      renderActiveChat();
      renderMatchesList();
    });
    recentRow.appendChild(circle);

    // Sidebar item
    const item = document.createElement("div");
    item.className = `conversation-item ${conv.profileId === state.activeChatProfileId ? "active" : ""}`;
    item.innerHTML = `
      <div class="conv-avatar-wrap">
        <img src="${conv.avatar}" alt="${conv.name}" class="conv-avatar">
        <span class="online-dot"></span>
      </div>
      <div class="conv-info">
        <div class="conv-top-row">
          <span class="conv-name">${conv.name}</span>
          <span class="conv-time">${conv.lastTime}</span>
        </div>
        <p class="conv-last-msg">${conv.lastMsg}</p>
      </div>
    `;

    item.addEventListener("click", () => {
      state.activeChatProfileId = conv.profileId;
      renderActiveChat();
      renderMatchesList();
    });

    list.appendChild(item);
  });
}

function renderActiveChat() {
  const activeConv = state.matches.find(m => m.profileId === state.activeChatProfileId) || state.matches[0];
  if (!activeConv) return;

  document.getElementById("activeChatAvatar").src = activeConv.avatar;
  document.getElementById("activeChatName").textContent = activeConv.name;

  const messagesBox = document.getElementById("chatMessages");
  messagesBox.innerHTML = "";

  activeConv.messages.forEach(msg => {
    const bubble = document.createElement("div");
    bubble.className = `message-bubble ${msg.sender === "me" ? "message-outgoing" : "message-incoming"}`;
    bubble.innerHTML = `
      <div>${msg.text}</div>
      <div class="message-time">${msg.time}</div>
    `;
    messagesBox.appendChild(bubble);
  });

  messagesBox.scrollTop = messagesBox.scrollHeight;
}

function sendMessage(text, isBuna = false) {
  const activeConv = state.matches.find(m => m.profileId === state.activeChatProfileId);
  if (!activeConv) return;

  const now = new Date();
  const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

  activeConv.messages.push({
    sender: "me",
    text: text,
    time: timeStr
  });
  activeConv.lastMsg = text;
  activeConv.lastTime = timeStr;

  renderActiveChat();
  renderMatchesList();

  // Simulated Ethiopian response after 1.5 seconds
  setTimeout(() => {
    const responsesEn = [
      "Eshi! That sounds like such a great plan! What time works for you?",
      "Betam des yilal! I love traditional coffee spots with quiet conversation.",
      "Ameseginalehu! You seem so respectful and genuine. I'm excited!",
      "Tomoca macchiato is always the best choice in Addis! Let's make it happen. ✨"
    ];
    const responsesAm = [
      "እሺ! በጣም ደስ ይላል። ስንት ሰዓት እንገናኝ?",
      "በጣም ደስ ይላል! ከእንጦጦ ንፋስ በኋላ ቡና መጠጣት ደስ ይለኛል።",
      "አመሰግናለሁ! በጣም ደስ የሚል ሀሳብ ነው፣ እንገናኝ።",
      "ቶሞካ ማኪያቶ በአዲስ አበባ ወደር የለውም! ቅዳሜ ይሁንልን። ✨"
    ];

    const pool = state.currentLang === "am" ? responsesAm : responsesEn;
    const replyText = pool[Math.floor(Math.random() * pool.length)];

    activeConv.messages.push({
      sender: "them",
      text: replyText,
      time: timeStr
    });
    activeConv.lastMsg = replyText;
    renderActiveChat();
    renderMatchesList();
    soundFx.playSwipe(true);
  }, 1600);
}

// ============================================================================
// 12. FULL PROFILE DETAIL MODAL
// ============================================================================

function openProfileDetailModal(profile) {
  const modal = document.getElementById("profileDetailModalBackdrop");
  const content = document.getElementById("profileDetailContent");
  const isAm = state.currentLang === "am";

  content.innerHTML = `
    <img src="${profile.image}" alt="${profile.name}" class="profile-detail-header-img">
    <div class="profile-detail-body">
      <div class="card-name-row">
        <h2 class="card-name">${isAm ? profile.nameAm : profile.name}</h2>
        <span class="card-name-amharic">${isAm ? profile.name : profile.nameAm}</span>
        <span class="card-age">${profile.age}</span>
      </div>

      <div class="card-location-row">
        <span>📍</span> <span>${profile.cityFull}</span> • <span>${isAm ? profile.occupationAm : profile.occupation}</span>
      </div>

      <!-- Voice Prompt -->
      <div class="profile-detail-voice-note">
        <button class="voice-play-btn" onclick="soundFx.playBunaChime()">▶</button>
        <div>
          <div style="font-size:0.75rem; color:var(--ethio-gold); font-weight:700;">${isAm ? "የድምጽ መልእክት (Voice Prompt)" : "Habesha Voice Prompt"}</div>
          <p style="font-size:0.82rem; color:#fff; margin-top:2px;">"${profile.voicePrompt}"</p>
        </div>
      </div>

      <!-- Full Bio -->
      <div>
        <h4 style="font-size:0.9rem; color:var(--ethio-gold); margin-bottom:4px;">${isAm ? "ስለ እኔ" : "About Me"}</h4>
        <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6;">
          ${isAm ? profile.bioAm : profile.bio}
        </p>
      </div>

      <!-- Cultural Tags -->
      <div>
        <h4 style="font-size:0.9rem; color:var(--ethio-gold); margin-bottom:8px;">${isAm ? "ባህላዊና እምነት መገለጫዎች" : "Faith & Cultural Lifestyle"}</h4>
        <div class="card-cultural-tags">
          <span class="cultural-tag tag-faith">🕊️ ${isAm ? profile.faithLabelAm : profile.faithLabel}</span>
          ${profile.fasting ? `<span class="cultural-tag tag-fasting">🥗 ${isAm ? "ጾመኛ" : "Fasting Friendly"}</span>` : ""}
          <span class="cultural-tag">☕ ${isAm ? "የባህል ቡና" : "Buna Lover"}</span>
          ${(isAm ? profile.tagsAm : profile.tags).map(t => `<span class="cultural-tag">${t}</span>`).join("")}
        </div>
      </div>

      <div style="display:flex; gap:12px; margin-top:10px;">
        <button class="btn btn-primary btn-block" onclick="document.getElementById('profileDetailModalBackdrop').style.display='none'; handleSwipeRight(null, PROFILES.find(p => p.id === ${profile.id}))">
          ${isAm ? "❤️ ወደድኩሽ / ወደድኩህ" : "❤️ Send Like"}
        </button>
        <button class="btn btn-outline" onclick="soundFx.playBunaChime(); document.getElementById('profileDetailModalBackdrop').style.display='none'; handleSuperLike(null, PROFILES.find(p => p.id === ${profile.id}))">
          ☕ ${isAm ? "ቡና ጋብዝ" : "Buna Invite"}
        </button>
      </div>
    </div>
  `;

  modal.style.display = "flex";
}

// ============================================================================
// 13. FAYDA NATIONAL ID (ፋይዳ) VERIFICATION & E-KYC LOGIC
// ============================================================================

function setupFaydaModal() {
  const modal = document.getElementById("faydaModalBackdrop");
  const openBtn = document.getElementById("headerFaydaBtn");
  const closeBtn = document.getElementById("closeFaydaModalBtn");
  const finInput = document.getElementById("faydaFinInput");
  const qrBtn = document.getElementById("btnScanFaydaQr");
  const stage1 = document.getElementById("faydaStage1");
  const stage2 = document.getElementById("faydaStage2");
  const stage3 = document.getElementById("faydaStage3");
  const stage1Form = document.getElementById("faydaStage1Form");
  const verifyOtpBtn = document.getElementById("btnVerifyOtpSubmit");
  const resendOtpBtn = document.getElementById("btnResendFaydaOtp");
  const completeBtn = document.getElementById("btnFaydaComplete");

  // Open / Close
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    resetFaydaStepper();
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // FIN Auto-Format (space every 4 digits)
  finInput.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, "").slice(0, 12);
    let formatted = "";
    for (let i = 0; i < val.length; i++) {
      if (i > 0 && i % 4 === 0) formatted += " ";
      formatted += val[i];
    }
    e.target.value = formatted;
  });

  // QR Scan Simulation
  qrBtn.addEventListener("click", () => {
    finInput.value = "4820 9182 3410";
    showToast(
      state.currentLang === "am"
        ? "📷 የፋይዳ QR ኮድ ተነቧል! FIN: 4820 9182 3410"
        : "📷 Fayda QR scanned successfully! FIN: 4820 9182 3410",
      "📷"
    );
  });

  // Stage 1 -> Stage 2 (Send OTP)
  stage1Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = document.getElementById("faydaFullName").value;
    const phone = document.getElementById("faydaPhone").value;
    const fin = finInput.value;

    state.faydaUser.fullName = fullName;
    state.faydaUser.phone = phone;
    state.faydaUser.fin = fin;

    document.getElementById("otpPhoneNotice").textContent = `SMS sent from NIDP to +251 ${phone}`;

    // Advance stepper
    stage1.style.display = "none";
    stage2.style.display = "block";
    document.getElementById("faydaStep2Node").classList.add("active");
    document.getElementById("faydaStepLine1").classList.add("active");

    showToast(
      state.currentLang === "am"
        ? "📩 የፋይዳ ማረጋገጫ ኮድ በኤስኤምኤስ ተልኳል (ኮድ፡ 589214)"
        : "📩 Fayda e-Signet OTP sent via SMS (Code: 589214)",
      "📩"
    );
  });

  // OTP inputs auto-advance
  const otpDigits = document.querySelectorAll(".otp-digit");
  otpDigits.forEach((digitInput, idx) => {
    digitInput.addEventListener("input", (e) => {
      if (e.target.value.length === 1 && idx < otpDigits.length - 1) {
        otpDigits[idx + 1].focus();
      }
    });
    digitInput.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !e.target.value && idx > 0) {
        otpDigits[idx - 1].focus();
      }
    });
  });

  // Resend OTP
  resendOtpBtn.addEventListener("click", () => {
    showToast(
      state.currentLang === "am"
        ? "📩 አዲስ የፋይዳ ኮድ ተልኳል፡ 589214"
        : "📩 New Fayda OTP resent to your phone: 589214",
      "📩"
    );
  });

  // Stage 2 -> Stage 3 (Verify Identity & Biometrics)
  verifyOtpBtn.addEventListener("click", () => {
    const bioText = document.getElementById("bioScanText");
    bioText.textContent = state.currentLang === "am"
      ? "🔍 የፊትና የዓይን ብሌን ባዮሜትሪክስ ከብሔራዊ ዳታቤዝ ጋር እየተመሳከረ ነው..."
      : "🔍 Matching Facial & Iris Biometrics against National Registry...";

    verifyOtpBtn.disabled = true;

    setTimeout(() => {
      // Biometrics matched!
      stage2.style.display = "none";
      stage3.style.display = "block";
      document.getElementById("faydaStep3Node").classList.add("active");
      document.getElementById("faydaStepLine2").classList.add("active");

      document.getElementById("cardNameVal").textContent = state.faydaUser.fullName;
      document.getElementById("cardFinVal").textContent = state.faydaUser.fin;

      soundFx.playMatchCelebration();
      verifyOtpBtn.disabled = false;
    }, 1800);
  });

  // Stage 3 Complete
  completeBtn.addEventListener("click", () => {
    state.isFaydaVerified = true;
    state.currentUser.isFaydaVerified = true;
    state.currentUser.fin = state.faydaUser.fin;
    state.currentUser.fullName = state.faydaUser.fullName;
    state.creditsBalance += 10; // Welcome Bonus
    updateFaydaUI();
    updateCreditsUI();
    updateUserAuthUI();
    saveUserSession();
    modal.style.display = "none";

    showToast(
      state.currentLang === "am"
        ? "🛡️ የፋይዳ ማረጋገጫ ተጠናቀቀ! 10 ነፃ ቦነስ ክሬዲት ተጨምሯል!"
        : "🛡️ Fayda National ID Verified! 10 Free Bonus Credits added!",
      "🎉"
    );
  });
}

function resetFaydaStepper() {
  document.getElementById("faydaStage1").style.display = "block";
  document.getElementById("faydaStage2").style.display = "none";
  document.getElementById("faydaStage3").style.display = "none";
  document.getElementById("faydaStep1Node").className = "step-node active";
  document.getElementById("faydaStep2Node").className = "step-node";
  document.getElementById("faydaStep3Node").className = "step-node";
  document.getElementById("faydaStepLine1").className = "step-line";
  document.getElementById("faydaStepLine2").className = "step-line";
}

function updateFaydaUI() {
  const btn = document.getElementById("headerFaydaBtn");
  const txt = document.getElementById("headerFaydaStatusText");
  const isAm = state.currentLang === "am";

  if (state.isFaydaVerified) {
    btn.className = "fayda-badge-btn verified";
    txt.textContent = isAm ? "በፋይዳ የተረጋገጠ ✓" : "Fayda Verified ✓";
  } else {
    btn.className = "fayda-badge-btn unverified";
    txt.textContent = isAm ? "በፋይዳ አረጋግጥ 🛡️" : "Verify Fayda 🛡️";
  }
}

// ============================================================================
// 14. VIRAL FREE CREDITS & 2X REFERRAL MULTIPLIER SYSTEM
// ============================================================================

function setupReferralModal() {
  const modal = document.getElementById("referralModalBackdrop");
  const openBtn = document.getElementById("openReferralModalBtn");
  const sidebarBtn = document.getElementById("sidebarShareBtn");
  const closeBtn = document.getElementById("closeReferralModalBtn");
  const copyBtn = document.getElementById("btnCopyReferralLink");
  const copyInput = document.getElementById("referralLinkInput");
  const telegramBtn = document.getElementById("btnShareTelegram");
  const whatsappBtn = document.getElementById("btnShareWhatsapp");
  const smsBtn = document.getElementById("btnShareSms");
  const simBtn = document.getElementById("btnSimulateFriendJoin");

  // Open & Close
  if (openBtn) openBtn.addEventListener("click", () => modal.style.display = "flex");
  if (sidebarBtn) sidebarBtn.addEventListener("click", () => modal.style.display = "flex");
  if (closeBtn) closeBtn.addEventListener("click", () => modal.style.display = "none");

  // Copy Referral Link
  copyBtn.addEventListener("click", () => {
    copyInput.select();
    navigator.clipboard.writeText(copyInput.value).then(() => {
      const copyText = document.getElementById("copyBtnText");
      const isAm = state.currentLang === "am";
      copyText.textContent = isAm ? "ተቀድቷል! ✓" : "Copied! ✓";
      showToast(isAm ? "የግብዣ ሊንክ ተቀድቷል!" : "Referral link copied to clipboard!", "📋");
      setTimeout(() => {
        copyText.textContent = isAm ? "ቅዳ" : "Copy";
      }, 2500);
    }).catch(() => {
      showToast("Link: " + copyInput.value, "📋");
    });
  });

  // Telegram Share (Primary in Ethiopia)
  telegramBtn.addEventListener("click", () => {
    const isAm = state.currentLang === "am";
    const shareText = isAm
      ? encodeURIComponent("እንኳን ወደ ፍቅር (Fikir) የኢትዮጵያውያን የፍቅር መድረክ በሰላም መጡ! በፋይዳ (Fayda ID) የተረጋገጡ ውብ ሰዎችን ያግኙ። በእኔ ሊንክ ሲገቡ ነፃ ክሬዲት ያገኛሉ:")
      : encodeURIComponent("Join Fikir, Ethiopia's verified cultural dating platform with Fayda National ID security! Use my link to claim free likes & credits:");
    const shareUrl = encodeURIComponent("https://fikir.et/join?ref=HABESHA-ABEBE");
    window.open(`https://t.me/share/url?url=${shareUrl}&text=${shareText}`, "_blank");

    // Award initial share reward
    state.creditsBalance += 5;
    updateCreditsUI();
    showToast(isAm ? "✈️ በቴሌግራም ስለተጋራ +5 ነፃ ክሬዲት ተጨምሯል!" : "✈️ Shared to Telegram! +5 Free Credits awarded!", "🎁");
  });

  // WhatsApp Share
  whatsappBtn.addEventListener("click", () => {
    const text = encodeURIComponent("Join me on Fikir Ethiopian Dating with Fayda National ID! https://fikir.et/join?ref=HABESHA-ABEBE");
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  });

  // SMS Share
  smsBtn.addEventListener("click", () => {
    window.location.href = "sms:?body=" + encodeURIComponent("Join me on Fikir Ethiopian Dating: https://fikir.et/join?ref=HABESHA-ABEBE");
  });

  // Simulate Friend Joining & Fayda Verification (Trigger 2X Double Bonus!)
  simBtn.addEventListener("click", () => {
    const sampleFriends = [
      { name: "Marta", city: "Addis Ababa (Bole)" },
      { name: "Kidus", city: "Addis Ababa (Kazanchis)" },
      { name: "Tsion", city: "Hawassa" },
      { name: "Eyob", city: "Addis Ababa (Piassa)" }
    ];
    const friend = sampleFriends[Math.floor(Math.random() * sampleFriends.length)];

    state.invitedFriendsCount++;
    state.faydaVerifiedFriendsCount++;
    // 2X Double Bonus reward: +10 Credits!
    const doubleReward = 10;
    state.creditsBalance += doubleReward;

    soundFx.playMatchCelebration();
    createConfettiParticles();
    updateCreditsUI();

    const isAm = state.currentLang === "am";
    showToast(
      isAm
        ? `🎉 ${friend.name} (${friend.city}) በሊንክዎ ተመዝግበው በፋይዳ ተረጋገጡ! የ2X እጥፍ ቦነስ ነቅቷል፡ +${doubleReward} ነፃ ክሬዲት!`
        : `🎉 ${friend.name} from ${friend.city} joined & verified with Fayda ID! 2X Double Bonus activated: +${doubleReward} Free Credits!`,
      "⚡"
    );
  });

  // Credits Redemption Store
  document.querySelectorAll(".btn-redeem").forEach(btn => {
    btn.addEventListener("click", () => {
      const cost = parseInt(btn.getAttribute("data-cost"), 10);
      const reward = btn.getAttribute("data-reward");
      const isAm = state.currentLang === "am";

      if (state.creditsBalance < cost) {
        showToast(
          isAm
            ? `በቂ ክሬዲት የለዎትም (${cost} ያስፈልጋል)። ለጓደኞችዎ በማጋራት ተጨማሪ ያግኙ!`
            : `Insufficient credits (${cost} needed)! Share with friends to earn more.`,
          "⚠️"
        );
        return;
      }

      state.creditsBalance -= cost;
      updateCreditsUI();
      soundFx.playBunaChime();

      if (reward === "likes") {
        state.freeLikesRemaining += 5;
        updateLikesCounter();
        showToast(isAm ? "⚡ 5 ነፃ ላይኮች ተጨምረዋል!" : "⚡ 5 Free Likes added to your deck!", "❤️");
      } else if (reward === "buna") {
        showToast(isAm ? "☕ 1 የባህል ቡና ሱፐር-ላይክ ተሰጥቷል!" : "☕ 1 Free Buna Super-Like unlocked!", "☕");
      } else if (reward === "boost") {
        showToast(isAm ? "🚀 ፕሮፋይልዎ በአዲስ አበባ ለ30 ደቂቃ ደምቋል!" : "🚀 Profile boosted in Addis Ababa for 30 minutes!", "⚡");
      } else if (reward === "vip") {
        state.isVip = true;
        document.getElementById("vipStatusBadge").className = "logo-badge vip-active";
        document.getElementById("vipStatusBadge").textContent = "👑 VIP";
        updateLikesCounter();
        renderWhoLikedYou();
        renderSwipeDeck();
        showToast(isAm ? "👑 24-ሰዓት ሙሉ የፍቅር ቪአይፒ በርቷል!" : "👑 24-Hour Full VIP Access activated!", "👑");
      }
    });
  });
}

function updateCreditsUI() {
  const headerCount = document.getElementById("headerCreditsCount");
  const sideStatCredits = document.getElementById("sideStatCredits");
  const modalStatCredits = document.getElementById("modalStatCredits");
  const sideStatFriends = document.getElementById("sideStatFriends");
  const modalStatFriends = document.getElementById("modalStatFriends");
  const modalStatVerified = document.getElementById("modalStatVerified");

  const isAm = state.currentLang === "am";
  const creditWord = isAm ? "ክሬዲት" : "Credits";

  if (headerCount) headerCount.textContent = `${state.creditsBalance} ${creditWord}`;
  if (sideStatCredits) sideStatCredits.textContent = state.creditsBalance;
  if (modalStatCredits) modalStatCredits.textContent = state.creditsBalance;
  if (sideStatFriends) sideStatFriends.textContent = state.faydaVerifiedFriendsCount;
  if (modalStatFriends) modalStatFriends.textContent = state.invitedFriendsCount;
  if (modalStatVerified) modalStatVerified.textContent = state.faydaVerifiedFriendsCount;
}

// ============================================================================
// 14. USER SETTINGS & PROFILE VERIFICATION CENTER
// ============================================================================

function setupSettingsModal() {
  const modal = document.getElementById("userSettingsModalBackdrop");
  const openBtn = document.getElementById("userProfileBtn");
  const closeBtn = document.getElementById("closeSettingsModalBtn");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      updateUserAuthUI();
      modal.style.display = "flex";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Settings Tabs Switching
  const tabs = modal.querySelectorAll(".tab-btn");
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      btn.classList.add("active");

      const targetId = btn.getAttribute("data-tab");
      modal.querySelectorAll(".settings-tab-content").forEach(c => {
        c.style.display = "none";
      });
      const activeContent = document.getElementById(targetId);
      if (activeContent) activeContent.style.display = "block";
    });
  });

  // Change Profile Avatar Photo Cycle
  const changeAvatarBtn = document.getElementById("btnChangeAvatar");
  const avatarList = [
    "assets/ethiopian_man_profile1_1792309463785.jpg",
    "assets/ethiopian_man_profile2_1792309893956.jpg",
    "assets/ethiopian_woman_profile1_1792309419035.jpg",
    "assets/ethiopian_woman_profile2_1792309642691.jpg",
    "assets/ethiopian_woman_profile3_1792309910865.jpg"
  ];
  let avatarIndex = 0;
  if (changeAvatarBtn) {
    changeAvatarBtn.addEventListener("click", () => {
      avatarIndex = (avatarIndex + 1) % avatarList.length;
      state.currentUser.avatar = avatarList[avatarIndex];
      updateUserAuthUI();
      saveUserSession();
      soundFx.playBunaChime();
      showToast(state.currentLang === "am" ? "📷 የፕሮፋይል ፎቶ ተቀይሯል!" : "📷 Profile photo updated!", "📷");
    });
  }

  // Edit Profile Form Submission (Persists to localStorage)
  const profileForm = document.getElementById("editProfileForm");
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      state.currentUser.fullName = document.getElementById("inputUserName").value.trim() || state.currentUser.fullName;
      state.currentUser.age = parseInt(document.getElementById("inputUserAge").value, 10) || state.currentUser.age;
      state.currentUser.city = document.getElementById("inputUserCity").value;
      state.currentUser.faith = document.getElementById("inputUserFaith").value;
      state.currentUser.occupation = document.getElementById("inputUserOccupation").value.trim() || state.currentUser.occupation;
      state.currentUser.fasting = document.getElementById("checkUserFasting").checked;
      state.currentUser.bunaLover = document.getElementById("checkUserBuna").checked;
      state.currentUser.bio = document.getElementById("inputUserBio").value.trim() || state.currentUser.bio;

      saveUserSession();
      updateUserAuthUI();
      soundFx.playBunaChime();
      showToast(
        state.currentLang === "am"
          ? "✅ የፕሮፋይል መረጃዎ በተሳካ ሁኔታ ተቀምጧል!"
          : "✅ Profile changes saved successfully to your device!",
        "✅"
      );
    });
  }

  // Fayda Re-verification Trigger
  const btnReverifyFayda = document.getElementById("btnReverifyFayda");
  if (btnReverifyFayda) {
    btnReverifyFayda.addEventListener("click", () => {
      modal.style.display = "none";
      const faydaModal = document.getElementById("faydaModalBackdrop");
      if (faydaModal) faydaModal.style.display = "flex";
    });
  }

  // Telegram Account Switcher / Verification
  const btnManageTelegram = document.getElementById("btnManageTelegram");
  if (btnManageTelegram) {
    btnManageTelegram.addEventListener("click", () => {
      const currentHandle = state.currentUser.telegram || "@Habte338";
      const newHandle = prompt(
        state.currentLang === "am"
          ? "የቴሌግራም መለያዎን (Telegram Username) ያስገቡ (ምሳሌ፡ @Habte338)፦"
          : "Enter your Telegram username (e.g. @Habte338):",
        currentHandle
      );
      if (newHandle && newHandle.trim()) {
        const formatted = newHandle.trim().startsWith("@") ? newHandle.trim() : `@${newHandle.trim()}`;
        state.currentUser.telegram = formatted;
        state.currentUser.isTelegramConnected = true;
        saveUserSession();
        updateUserAuthUI();
        soundFx.playBunaChime();
        showToast(
          state.currentLang === "am"
            ? `✈️ የቴሌግራም መለያ ${formatted} በተሳካ ሁኔታ ተገናኝቷል!`
            : `✈️ Telegram account ${formatted} successfully connected!`,
          "✈️"
        );
      }
    });
  }

  // Dating Preference Buttons (Women / Men / Everyone)
  const prefBtns = modal.querySelectorAll(".pref-btn");
  prefBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      prefBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const pref = btn.getAttribute("data-pref");
      state.genderFilter = pref;
      state.cardIndex = 0;
      renderSwipeDeck();
      showToast(
        state.currentLang === "am"
          ? `🎯 የመፈለጊያ ጾታ ምርጫ ተቀይሯል፦ ${btn.textContent}`
          : `🎯 Seeking preference updated to: ${btn.textContent}`,
        "🎯"
      );
    });
  });

  // Age Slider Preference
  const ageRangeInput = document.getElementById("prefAgeRange");
  const prefAgeVal = document.getElementById("prefAgeVal");
  if (ageRangeInput && prefAgeVal) {
    ageRangeInput.addEventListener("input", (e) => {
      prefAgeVal.textContent = `18 - ${e.target.value} years old`;
    });
  }

  // Settings VIP Upgrade
  const settingsUpgradeVipBtn = document.getElementById("settingsUpgradeVipBtn");
  if (settingsUpgradeVipBtn) {
    settingsUpgradeVipBtn.addEventListener("click", () => {
      modal.style.display = "none";
      openVipModal();
    });
  }

  // Settings Redeem Credits Shortcut
  const settingsRedeemCreditsBtn = document.getElementById("settingsRedeemCreditsBtn");
  if (settingsRedeemCreditsBtn) {
    settingsRedeemCreditsBtn.addEventListener("click", () => {
      modal.style.display = "none";
      const refModal = document.getElementById("referralModalBackdrop");
      if (refModal) refModal.style.display = "flex";
    });
  }

  // Sign Out Button
  const logoutBtn = document.getElementById("btnLogoutUser");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      state.isLoggedIn = false;
      saveUserSession();
      updateUserAuthUI();
      modal.style.display = "none";
      showToast(
        state.currentLang === "am"
          ? "👋 ከፍቅር አካውንትዎ በተሳካ ሁኔታ ወጥተዋል። በቅርቡ ይመለሱ!"
          : "👋 Signed out of Fikir. See you soon in Addis Ababa!",
        "👋"
      );
    });
  }
}

// ============================================================================
// 15. WEB LOGIN & TELEGRAM/FAYDA AUTH SYSTEM
// ============================================================================

function setupAuthModal() {
  const modal = document.getElementById("authModalBackdrop");
  const loginNavBtn = document.getElementById("headerLoginBtn");
  const closeBtn = document.getElementById("closeAuthModalBtn");

  if (loginNavBtn) {
    loginNavBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Telegram Quick 1-Click Authentication
  const btnTelegram = document.getElementById("btnTelegramQuickLogin");
  if (btnTelegram) {
    btnTelegram.addEventListener("click", () => {
      soundFx.playMatchCelebration();
      state.isLoggedIn = true;
      state.currentUser.telegram = "@Habte338";
      state.currentUser.isTelegramConnected = true;
      state.isFaydaVerified = true;
      saveUserSession();
      updateUserAuthUI();
      modal.style.display = "none";
      showToast(
        state.currentLang === "am"
          ? "🎉 እንኳን ደህና መጡ ሀብተ (@Habte338)! በቴሌግራም በተሳካ ሁኔታ ገብተዋል።"
          : "🎉 Welcome back Habte (@Habte338)! Logged in via 1-Click Telegram.",
        "✈️"
      );
    });
  }

  // Phone / Fayda Login Form Submit
  const authForm = document.getElementById("authLoginForm");
  if (authForm) {
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const phoneVal = document.getElementById("authLoginPhone").value.trim();
      state.isLoggedIn = true;
      if (phoneVal) state.currentUser.phone = phoneVal;
      saveUserSession();
      updateUserAuthUI();
      modal.style.display = "none";
      soundFx.playBunaChime();
      showToast(
        state.currentLang === "am"
          ? "✨ በተሳካ ሁኔታ ገብተዋል! መልካም የፍቅር ጊዜ።"
          : "✨ Successfully authenticated with Fikir!",
        "✨"
      );
    });
  }

  // Quick Demo Accounts
  const demoHabte = document.getElementById("btnDemoHabte");
  if (demoHabte) {
    demoHabte.addEventListener("click", () => {
      state.isLoggedIn = true;
      state.currentUser.fullName = "Habte Mikael";
      state.currentUser.telegram = "@Habte338";
      state.currentUser.isTelegramConnected = true;
      state.isFaydaVerified = true;
      state.currentUser.fin = "4820 9182 3410";
      saveUserSession();
      updateUserAuthUI();
      modal.style.display = "none";
      soundFx.playBunaChime();
      showToast(
        state.currentLang === "am"
          ? "🇪🇹 በሀብተ አካውንት ገብተዋል (በፋይዳና ቴሌግራም የተረጋገጠ)"
          : "🇪🇹 Logged in as Habte (Fayda & Telegram Verified)!",
        "🇪🇹"
      );
    });
  }

  const demoGuest = document.getElementById("btnDemoGuest");
  if (demoGuest) {
    demoGuest.addEventListener("click", () => {
      state.isLoggedIn = true;
      state.currentUser.fullName = "Guest Explorer";
      state.isFaydaVerified = false;
      saveUserSession();
      updateUserAuthUI();
      modal.style.display = "none";
      showToast(
        state.currentLang === "am"
          ? "👤 እንደ እንግዳ ገብተዋል። ለሙሉ ክብር በፋይዳ ያረጋግጡ!"
          : "👤 Browsing as Guest. Verify with Fayda to unlock full access!",
        "👤"
      );
    });
  }
}
