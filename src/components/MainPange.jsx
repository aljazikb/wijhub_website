import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoColor1 from "../assets/logo-color1.png";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import sariat from "../assets/sariat.png";
import anterflow from "../assets/anterflow.png";
import mediago from "../assets/mediago.png";
import liveCar from "../assets/live_car.png";
import aitea from "../assets/aitea.png";
import pureAdvance from "../assets/pure_advance.png";
import floraex from "../assets/floraex.png";
import qayd from "../assets/qayd.png";
import tamken from "../assets/tamken.png";

const STARTUPS = [
  {
    name: "شــركة ساريات ",
    logo: sariat,
    sector: "التقنية العقارية (PropTech)",
    stage: "البذرة (Seed)",
    age: "سنتين",
    description:
      'شركة سعودية ناشئة في التقنية العقارية والمالية، تمكّن التملك التدريجي للعقارات عبر منتج "استأجر الآن وادفع لاحقاً".',
  },
  {
    name: "شــركة انترفلو",
    logo: anterflow,
    sector: "تقنية المدفوعات للمطاعم والمقاهي",
    stage: "ما قبل البذرة (Pre-Seed)",
    age: "ستة أشهر",
    description:
      "نظام شامل للمطاعم والمقاهي يجمع الكاشير والتطبيقات المجانية والمنيو الإلكتروني في لوحة تحكم واحدة.",
  },
  {
    name: "شــركة ميدياقو ",
    logo: mediago,
    sector: "الإعلان الرقمي الخارجي",
    stage: "البذرة (Seed)",
    age: "سنة واحدة",
    description:
      "منصة سعودية للإعلانات الخارجية المتنقلة (DOOH) تمكّن المعلنين من نشر حملاتهم على الشاشات الرقمية بالمركبات.",
  },

  {
    name: "شــركة لايف كار ",
    logo: liveCar,
    sector: "السيارات / ما بعد البيع",
    stage: "ما قبل البذرة (Pre-Seed)",
    age: "ستة أشهر",
    description:
      "سوق ذكي لخدمات ما بعد البيع للسيارات يعتمد على الذكاء الاصطناعي والتشخيص الاستباقي.",
  },
  {
    name: "شــركة قطعة",
    logo: aitea,
    sector: "تقنيات السيارات (AutoTech)",
    stage: "ما قبل البذرة (Pre-Seed)",
    age: "سنة واحدة",
    description:
      "منصة تقنية تربط متاجر قطع غيار السيارات بمراكز الصيانة لتحويل بياناتها إلى تجربة أكثر ذكاءً وشفافية.",
  },
  {
    name: "شــركة بيو ر أدفانس",
    logo: pureAdvance,
    sector: "التقنيات الحيوية",
    stage: "ما قبل البذرة (Pre-Seed)",
    age: "سنتين",
    description:
      "شركة سعودية متخصصة في تطوير الحلول الحيوية المبتكرة في مجالات الصحة والبيئة.",
  },
  {
    name: "شــركة فلوراكس",
    logo: floraex,
    sector: "صناعة المطهرات والمنظفات الطبيعية",
    stage: "ما قبل البذرة (Pre-Seed)",
    age: "سنة واحدة",
    description:
      "شركة سعودية متخصصة في تطوير منتجات تطهير وتنظيف طبيعية موجهة للتطبيقات الغذائية.",
  },

  {
    name: "شــركة قيد",
    logo: qayd,
    sector: "التقنية المالية",
    stage: "ما قبل البذرة (Pre-Seed)",
    age: "سنة واحدة",
    description:
      "حلول مبتكرة لإدارة وتوثيق عمليات بيع الآجل متوافقة مع نقاط البيع والبرامج المحاسبية.",
  },
  {
    name: "شركة تمكن",
    logo: tamken,
    sector: "الذكاء الاصطناعي",
    stage: "ما قبل البذرة (Pre-Seed)",
    age: "سنة واحدة",
    description:
      "نظام تشغيل متكامل للأعمال الرقمية يجمع التجارة الإلكترونية ونقاط البيع وإدارة العملاء في لوحة واحدة.",
  },
];

const navItems = [
  "الـرئيسية",
  "مـن نـحـن",
  "شركـاتنـا",
  "دليل الشركـات الـنـاشئة",
  "استثمـاراتنـا",
  "الأخبــار",
  "تــواصل معنـا",
];

export default function MainPage() {
  const [selected, setSelected] = useState(null);
  const [activeNav, setActiveNav] = useState("الرئيسية");

  const handleSelect = (startup) => {
    setSelected((prev) => (prev?.name === startup.name ? null : startup));
  };

  return (
    <main
      dir="rtl"
      className="bg-[#F6EFE5] min-h-screen"
    
    >
      {/* Hero */}
      {/* Navigation */}
      <header className="bg-white border-b border-[#EFE6D8] sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center gap-20">
          <img
            src={logoColor1}
            alt="شعار الدليل"
            className="w-28 md:w-36 object-contain"
          />

          <nav>
            <ul className="flex items-center h-full text-lg font-semibold">
              {navItems.map((item) => (
                <li key={item} className="h-full">
                  <a
                    href="#"
                    onClick={() => setActiveNav(item)}
                    className={`h-24 flex items-center px-6 transition-all duration-200 text-[#5e825f] ${
                      activeNav === item
                        ? "bg-[#c39969] text-white"
                        : "text-[#2B1B12] hover:bg-[#F3E5D7]"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Page title */}
      <section className="bg-[#5e825f] text-white py-16 text-center">
        <h1
          className="text-3xl md:text-4xl font-bold"
          style={{ fontFamily: "'El Messiri', serif" }}
        >
          دلــيــل الشـركــات الـنـاشـئـة
        </h1>
      </section>

      {/* Companies */}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-12 max-w-6xl mx-auto px-6 py-16">
        {STARTUPS.map((startup, index) => {
          const isSelected = selected?.name === startup.name;

          return (
            <motion.button
              key={startup.name}
              onClick={() => handleSelect(startup)}
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: (index % 5) * 0.08 }}
            >
              <div
                className={`w-36 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-white border-4 p-1 transition-all duration-300 ${
                  isSelected
                    ? "border-[#C2703D] scale-105"
                    : "border-[#EFE6D8] group-hover:border-[#C2703D] group-hover:scale-105"
                }`}
              >
                <img
                  src={startup.logo}
                  alt={startup.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="mt-4 text-sm md:text-base font-semibold text-[#2B1B12] text-center">
                {startup.name}
              </h3>
            </motion.button>
          );
        })}
      </div>

      {/* Summary panel */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-6"
            >
              <div
                className="bg-white rounded-3xl shadow-2xl max-w-xl w-full relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 left-5 text-3xl text-gray-500 hover:text-black"
                >
                  ×
                </button>

                <div className="p-10 text-center">
                  <img
                    src={selected.logo}
                    alt={selected.name}
                    className="w-28 h-28 object-contain mx-auto mb-6"
                  />

                  <h2
                    className="text-3xl font-bold"
                    style={{ fontFamily: "'El Messiri', serif" }}
                  >
                    {selected.name}
                  </h2>

                  <span className="inline-block mt-3 px-4 py-2 rounded-full bg-[#FBF3E7] text-[#C2703D]">
                    {selected.sector}
                  </span>

                  <p className="mt-6 text-gray-600 leading-8">
                    {selected.description}
                  </p>

                  <div className="grid grid-cols-3 mt-8 border rounded-xl overflow-hidden">
                    <div className="p-5">
                      <p className="text-xs text-gray-500">المرحلة</p>
                      <p className="font-semibold mt-1">{selected.stage}</p>
                    </div>

                    <div className="p-5 border-x">
                      <p className="text-xs text-gray-500">العمر</p>
                      <p className="font-semibold mt-1">{selected.age}</p>
                    </div>

                    <div className="p-5">
                      <p className="text-xs text-gray-500">القطاع</p>
                      <p className="font-semibold mt-1">{selected.sector}</p>
                    </div>
                  </div>

                  <a
                    href={selected.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block bg-[#8B5E3C] hover:bg-[#73492D] text-white px-8 py-3 rounded-xl transition"
                  >
                    زيارة الشركة
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="bg-[#5e825f] text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <img
              src={logoColor1}
              alt="Wadi Jeddah"
              className="w-40 object-contain mb-6"
            />

            <p className="text-amber-100 leading-8">
              دليل الشركات الناشئة التابع لوادي جدة، يهدف إلى إبراز الشركات
              المبتكرة وربطها بالمستثمرين ورواد الأعمال.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">روابط سريعة</h3>

            <ul className="space-y-3 text-amber-100">
              <li>
                <a href="#">من نحن</a>
              </li>
              <li>
                <a href="#">شركاتنا</a>
              </li>
              <li>
                <a href="#">استثماراتنا</a>
              </li>
              <li>
                <a href="#">ريادة الأعمال</a>
              </li>
              <li>
                <a href="#">اتصل بنا</a>
              </li>
              <li>
                <a href="#">هل لديك فكرة مبتكرة؟</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">بيانات التواصل</h3>

            <div className="space-y-3 text-amber-100">
              <p>جدة، المملكة العربية السعودية</p>
              <p dir="ltr">+966 12 250 6083</p>
              <p>info@wadi-jeddah.com.sa</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              الإشتراك في النشرة البريدية
            </h3>

            <p className="text-amber-100 mb-5">
              للحصول على آخر أخبار شركة وادي جدة وشركاتها التابعة.
            </p>

            <input
              type="email"
              placeholder="ادخل البريد الإلكتروني"
              className="w-full rounded-lg px-4 py-3 text-black mb-3 outline-none"
            />

            <button className="w-full bg-white text-[#8B5E3C] font-bold py-3 rounded-lg hover:bg-amber-100 transition">
              اشتراك
            </button>

            <div className="mt-8">
              <p className="mb-4 font-semibold">قنواتنا</p>

              <div className="flex gap-5 text-2xl">
                <FaLinkedin className="cursor-pointer hover:text-amber-200" />
                <FaXTwitter className="cursor-pointer hover:text-amber-200" />
                <FaInstagram className="cursor-pointer hover:text-amber-200" />
                <FaYoutube className="cursor-pointer hover:text-amber-200" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="max-w-6xl mx-auto px-6 py-5 text-center text-sm text-amber-100">
            © 2026 وادي جدة. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </main>
  );
}
