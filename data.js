const stockItems = [
  // 水・食料
  { id:  1, name: "飲料水",             en: "Drinking Water",     category: "水・食料", catEn: "Water & Food",       calcType: "per_person_per_day", value: 1,  unit: "L" },
  { id:  2, name: "非常食",             en: "Emergency Food",     category: "水・食料", catEn: "Water & Food",       calcType: "per_person_per_day", value: 3,  unit: "食" },
  { id:  3, name: "カセットガス",       en: "Camping Gas",        category: "水・食料", catEn: "Water & Food",       calcType: "fixed",              value: 3,  unit: "本" },

  // 衛生用品
  { id:  4, name: "簡易トイレ",         en: "Portable Toilet",    category: "衛生用品", catEn: "Hygiene",            calcType: "per_person_per_day", value: 5,  unit: "回分" },
  { id:  5, name: "ウェットティッシュ", en: "Wet Wipes",          category: "衛生用品", catEn: "Hygiene",            calcType: "per_person",         value: 2,  unit: "パック" },
  { id:  6, name: "マスク",             en: "Face Mask",          category: "衛生用品", catEn: "Hygiene",            calcType: "per_person",         value: 10, unit: "枚" },
  { id:  7, name: "消毒液",             en: "Hand Sanitizer",     category: "衛生用品", catEn: "Hygiene",            calcType: "fixed",              value: 1,  unit: "本" },

  // 防災用具
  { id:  8, name: "懐中電灯",           en: "Flashlight",         category: "防災用具", catEn: "Emergency Gear",     calcType: "fixed",              value: 1,  unit: "個" },
  { id:  9, name: "携帯ラジオ",         en: "Portable Radio",     category: "防災用具", catEn: "Emergency Gear",     calcType: "fixed",              value: 1,  unit: "台" },
  { id: 10, name: "乾電池（単3）",      en: "AA Batteries",       category: "防災用具", catEn: "Emergency Gear",     calcType: "fixed",              value: 12, unit: "本" },
  { id: 11, name: "モバイルバッテリー", en: "Power Bank",         category: "防災用具", catEn: "Emergency Gear",     calcType: "per_person",         value: 1,  unit: "個" },
  { id: 12, name: "救急セット",         en: "First Aid Kit",      category: "防災用具", catEn: "Emergency Gear",     calcType: "fixed",              value: 1,  unit: "式" },

  // 生活用品
  { id: 13, name: "毛布",               en: "Blanket",            category: "生活用品", catEn: "Daily Essentials",   calcType: "per_person",         value: 1,  unit: "枚" },
  { id: 14, name: "軍手",               en: "Work Gloves",        category: "生活用品", catEn: "Daily Essentials",   calcType: "per_person",         value: 1,  unit: "双" },
  { id: 15, name: "雨具（ポンチョ等）", en: "Rain Poncho",        category: "生活用品", catEn: "Daily Essentials",   calcType: "per_person",         value: 1,  unit: "着" },
  { id: 16, name: "ゴミ袋",             en: "Garbage Bags",       category: "生活用品", catEn: "Daily Essentials",   calcType: "fixed",              value: 10, unit: "枚" },
  { id: 17, name: "ラップ",             en: "Plastic Wrap",       category: "生活用品", catEn: "Daily Essentials",   calcType: "fixed",              value: 1,  unit: "本" },

  // こどものための備え
  { id: 18, name: "粉ミルク・液体ミルク", en: "Baby Formula",     category: "こどものための備え", catEn: "For Children", calcType: "fixed",   value: 1, unit: "缶",    conditions: ["child"] },
  { id: 19, name: "おむつ",               en: "Diapers",          category: "こどものための備え", catEn: "For Children", calcType: "per_day", value: 8, unit: "枚",    conditions: ["child"] },
  { id: 20, name: "離乳食・子ども用食品", en: "Baby Food",        category: "こどものための備え", catEn: "For Children", calcType: "per_day", value: 3, unit: "食",    conditions: ["child"] },

  // 女性の備え
  { id: 21, name: "生理用品",           en: "Sanitary Products",  category: "女性の備え", catEn: "For Women",          calcType: "fixed", value: 1, unit: "セット", conditions: ["female"] },
  { id: 22, name: "サニタリーショーツ", en: "Sanitary Shorts",    category: "女性の備え", catEn: "For Women",          calcType: "fixed", value: 2, unit: "枚",    conditions: ["female"] },

  // 高齢者のための備え
  { id: 23, name: "介護食",           en: "Care Food",            category: "高齢者のための備え", catEn: "For Elderly", calcType: "per_day", value: 3, unit: "食", conditions: ["elderly"] },
  { id: 24, name: "常備薬・お薬手帳", en: "Medication & Record",  category: "高齢者のための備え", catEn: "For Elderly", calcType: "fixed",   value: 1, unit: "式", conditions: ["elderly"] },
  { id: 25, name: "大人用おむつ",     en: "Adult Diapers",        category: "高齢者のための備え", catEn: "For Elderly", calcType: "per_day", value: 4, unit: "枚", conditions: ["elderly"] },
];
