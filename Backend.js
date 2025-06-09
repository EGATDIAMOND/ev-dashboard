// ✅ เพิ่ม mapping table สำหรับการจับคู่ชื่อสถานีจาก topic
const stationMetaMap = {
  "ST001": {
    frontendId: 1,
    mqttName: "Amphawa1",
    payloadName: "Amphawa1",
    topic: "OCPP/amphawa/heartbeat",
    pi5Topic: "OCPP/Amphawa1/heartbeatPI5",
    powerModuleTopic: "OCPP/Amphawa1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Amphawa1"
      },
  "ST002": {
    frontendId: 2,
    mqttName: "Ayuthaya3",
    payloadName: "Ayuthaya3",
    topic: "OCPP/PT100_Ayuthaya3/heartbeat",
    pi5Topic: "OCPP/Ayuthaya3/heartbeatPI5",
    powerModuleTopic: "OCPP/Ayuthaya3/PowerModule",  // ✅ เพิ่มตรงนี้
    tempTopic: "Thaya3"
  },
  "ST003": {
    frontendId: 3,
    mqttName: "Banbueng1",
    payloadName: "Banbueng1",
    topic: "OCPP/Banbueng1_DC_1/heartbeat",
    pi5Topic: "OCPP/Banbueng1/heartbeatPI5",
    powerModuleTopic: "OCPP/Banbueng1/PowerModule",
    tempTopic: "Banbueng1"  // ✅ เพิ่มตรงนี้
  },
  "ST004": {
    frontendId: 4,
    mqttName: "Banbueng9",
    payloadName: "Banbueng9",
    topic: "OCPP/Banbueng9_DC_1/heartbeat",
    pi5Topic: "OCPP/Banbueng9/heartbeatPI5",
    powerModuleTopic: "OCPP/Banbueng9/PowerModule",
    tempTopic: "Banbueng9"  // ✅ เพิ่มตรงนี้
  },
  "ST005": {
    frontendId: 5,
    mqttName: "Banbueng10",
    payloadName: "Banbueng10",
    topic: "OCPP/PT100_Banbueng10/heartbeat",
    pi5Topic: "OCPP/Banbueng10/heartbeatPI5",
    powerModuleTopic: "OCPP/Banbueng10/PowerModule",
    tempTopic: "Banbueng10"  // ✅ เพิ่มตรงนี้
  },
  "ST006": {
    frontendId: 6,
    mqttName: "BanNaDoem",
    payloadName: "BanNaDoem",
    topic: "OCPP/BanNaDoem/heartbeat",
    pi5Topic: "OCPP/BanNaDoem/heartbeatPI5",
    powerModuleTopic: "OCPP/BanNaDoem/PowerModule",
    tempTopic: "BanNaDoem"  // ✅ เพิ่มตรงนี้
  },
  "ST007": {
    frontendId: 7,
    mqttName: "BanKhai5",
    payloadName: "BanKhai5",
    topic: "OCPP/Elex_DC_PT_BanKhai5_1/heartbeat",
    pi5Topic: "OCPP/BanKhai5/heartbeatPI5",
    powerModuleTopic: "OCPP/BanKhai5/PowerModule",
    tempTopic: "BanKhai5"  // ✅ เพิ่มตรงนี้
  },
  "ST008": {
    frontendId: 8,
    mqttName: "BanPo3",
    payloadName: "BanPo3",
    topic: "OCPP/Elex_PT_BanPo3_1/heartbeat",
    pi5Topic: "OCPP/BanPo3/heartbeatPI5",
    powerModuleTopic: "OCPP/BanPo3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST009": {
    frontendId: 9,
    mqttName: "BanTak1",
    payloadName: "BanTak1",
    topic: "OCPP/Elex_DC_PT_BanTak1_1/heartbeat",
    pi5Topic: "OCPP/BanTak1/heartbeatPI5",
    powerModuleTopic: "OCPP/BanTak1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0010": {
    frontendId: 10,
    mqttName: "BanphotPhisai3",
    payloadName: "BanphotPhisai3",
    topic: "OCPP/EleX_PT100_BanphotPhisai3_DC_1/heartbeat",
    pi5Topic: "OCPP/BanphotPhisai3/heartbeatPI5",
    powerModuleTopic: "OCPP/BanphotPhisai3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanphotPhisai3"
      },
      "ST011": {
    frontendId: 11,
    mqttName: "BangBuaThong4",
    payloadName: "BangBuaThong4",
    topic: "OCPP/EleX_PT100_BangBuaThong4_1/heartbeat",
    pi5Topic: "OCPP/BangBuaThong4/heartbeatPI5",
    powerModuleTopic: "OCPP/BangBuaThong4/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BangBuaThong4"
      },
      "ST012": {
    frontendId: 12,
    mqttName: "BangBuaThong9",
    payloadName: "BangBuaThong9",
    topic: "OCPP/Elex_BangBuaThong9_1/heartbeat",
    pi5Topic: "OCPP/BangBuaThong9/heartbeatPI5",
    powerModuleTopic: "OCPP/BangBuaThong9/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BangBuaThong9"
      },
      "ST013": {
    frontendId: 13,
    mqttName: "BangBuaTong12",
    payloadName: "BangBuaTong12",
    topic: "OCPP/EleX_PT100_BangBuaTong12_DC_1/heartbeat",
    pi5Topic: "OCPP/BangBuaTong12/heartbeatPI5",
    powerModuleTopic: "OCPP/BangBuaTong12/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Bangbuathong12"
      },
      "ST014": {
    frontendId: 14,
    mqttName: "BangKhla4",
    payloadName: "BangKhla4",
    topic: "OCPP/PT100_BangKhla4/heartbeat",
    pi5Topic: "OCPP/BangKhla4/heartbeatPI5",
    powerModuleTopic: "OCPP/BangKhla4/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BangKhla4"
      },
      "ST015": {
    frontendId: 15,
    mqttName: "Banglamuung11",
    payloadName: "Banglamuung11",
    topic: "OCPP/Elex_PT_Banglamuung11_1/heartbeat",
    pi5Topic: "OCPP/Banglamuung11/heartbeatPI5",
    powerModuleTopic: "OCPP/Banglamuung11/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BangLamung11"
      },
      "ST016": {
    frontendId: 16,
    mqttName: "BangnaTrad1",
    payloadName: "BangnaTrad1",
    topic: "OCPP/PT_BangnaTrad1/heartbeat",
    pi5Topic: "OCPP/BangnaTrad1/heartbeatPI5",
    powerModuleTopic: "OCPP/BangnaTrad1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Natrad1"
      },
      "ST017": {
    frontendId: 17,
    mqttName: "BangnaTrad2",
    payloadName: "BangnaTrad2",
    topic: "OCPP/PT_BangnaTrad2/heartbeat",
    pi5Topic: "OCPP/BangnaTrad2/heartbeatPI5",
    powerModuleTopic: "OCPP/BangnaTrad2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BangnaTrad2"
      },
      "ST018": {
    frontendId: 18,
    mqttName: "BangPaIn3",
    payloadName: "BangPaIn3",
    topic: "OCPP/PT_BangPhain3/heartbeat",
    pi5Topic: "OCPP/BangPaIn3/heartbeatPI5",
    powerModuleTopic: "OCPP/BangPaIn3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BangPhain3"
      },
      "ST019": {
    frontendId: 19,
    mqttName: "Bangpahan",
    payloadName: "Bangpahan",
    topic: "OCPP/Bangpahan/heartbeat",
    pi5Topic: "OCPP/Bangpahan/heartbeatPI5",
    powerModuleTopic: "OCPP/Bangpahan/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BangPahan"
      },
      "ST020": {
    frontendId: 20,
    mqttName: "BangPahan4",
    payloadName: "BangPahan4",
    topic: "OCPP/PT_BangPahan4/heartbeat",
    pi5Topic: "OCPP/BangPahan4/heartbeatPI5",
    powerModuleTopic: "OCPP/BangPahan4/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Bangpahan4"
      },
      "ST021": {
    frontendId: 21,
    mqttName: "Bangphra2",
    payloadName: "Bangphra2",
    topic: "OCPP/Bangpha/heartbeat",
    pi5Topic: "OCPP/Bangphra2/heartbeatPI5",
    powerModuleTopic: "OCPP/Bangphra2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Bangphra2"
      },
      "ST022": {
    frontendId: 22,
    mqttName: "BangPhra3",
    payloadName: "BangPhra3",
    topic: "OCPP/PT100_BangPhra3/heartbeat",
    pi5Topic: "OCPP/BangPhra3/heartbeatPI5",
    powerModuleTopic: "OCPP/BangPhra3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BangPha3"
      },
      "ST023": {
    frontendId: 23,
    mqttName: "BangKhunThian1",
    payloadName: "BangKhunThian1",
    topic: "OCPP/BangKhunThian1/heartbeat",
    pi5Topic: "OCPP/BangKhunThian1/heartbeatPI5",
    powerModuleTopic: "OCPP/BangKhunThian1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BangKhunThian1"
      },
      "ST024": {
    frontendId: 24,
    mqttName: "Bangpakong",
    payloadName: "Bangpakong",
    topic: "OCPP/Elex_PT_Bangpakong_1/heartbeat",
    pi5Topic: "OCPP/Bangpakong/heartbeatPI5",
    powerModuleTopic: "OCPP/Bangpakong/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Bangpakong1"
      },
      "ST025": {
    frontendId: 25,
    mqttName: "Bangpokong2",
    payloadName: "Bangpokong2",
    topic: "OCPP/PT100_Bangpokong2/heartbeat",
    pi5Topic: "OCPP/Bangpokong2/heartbeatPI5",
    powerModuleTopic: "OCPP/Bangpokong2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Bangpokong2"
      },
      "ST026": {
    frontendId: 26,
    mqttName: "Bangpakong3",
    payloadName: "Bangpakong3",
    topic: "OCPP/Bangpakong3/heartbeat",
    pi5Topic: "OCPP/Bangpakong3/heartbeatPI5",
    powerModuleTopic: "OCPP/Bangpakong3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Pa3"
      },
      "ST027": {
    frontendId: 27,
    mqttName: "KamphaengPhet",
    payloadName: "KamphaengPhet",
    topic: "OCPP/Elex_PT_KamphaengPhet_1/heartbeat",
    pi5Topic: "OCPP/KamphaengPhet/heartbeatPI5",
    powerModuleTopic: "OCPP/KamphaengPhet/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "KamphaengPhet"
      },
      "ST028": {
    frontendId: 28,
    mqttName: "Tak",
    payloadName: "Tak",
    topic: "OCPP/Elex_BPTG_Tak_1/heartbeat",
    pi5Topic: "OCPP/Tak/heartbeatPI5",
    powerModuleTopic: "OCPP/Tak/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanTak1"
      },
      "ST029": {
    frontendId: 29,
    mqttName: "BuengKum3",
    payloadName: "BuengKum3",
    topic: "OCPP/BuengKum3/heartbeat",
    pi5Topic: "OCPP/BuengKum3/heartbeatPI5",
    powerModuleTopic: "OCPP/BuengKum3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BuengKum3"
      },
      "ST030": {
    frontendId: 30,
    mqttName: "CharoenRat",
    payloadName: "CharoenRat",
    topic: "OCPP/EleX_CharoenRat_1/heartbeat",
    pi5Topic: "OCPP/CharoenRat/heartbeatPI5",
    powerModuleTopic: "OCPP/CharoenRat/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "CharoenRat"
      },
      "ST031": {
    frontendId: 31,
    mqttName: "ChalongKrung1",
    payloadName: "ChalongKrung1",
    topic: "OCPP/Thanon_Chalong_Krung/heartbeat",
    pi5Topic: "OCPP/ChalongKrung1/heartbeatPI5",
    powerModuleTopic: "OCPP/ChalongKrung1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "ChalongKrung1"
      },
      "ST032": {
    frontendId: 32,
    mqttName: "ChalongKrung2",
    payloadName: "ChalongKrung2",
    topic: "OCPP/Elex_ChalongKrung2_1/heartbeat",
    pi5Topic: "OCPP/ChalongKrung2/heartbeatPI5",
    powerModuleTopic: "OCPP/ChalongKrung2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "ChalongKrung2"
      },
      "ST033": {
    frontendId: 33,
    mqttName: "Chachoengsao9",
    payloadName: "Chachoengsao9",
    topic: "OCPP/PT100_Chachoengsao9/heartbeat",
    pi5Topic: "OCPP/Chachoengsao9/heartbeatPI5",
    powerModuleTopic: "OCPP/Chachoengsao9/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Chachoengsao9"
      },
      "ST034": {
    frontendId: 34,
    mqttName: "Chachoengsao10",
    payloadName: "Chachoengsao10",
    topic: "OCPP/Chachoengsao10/heartbeat",
    pi5Topic: "OCPP/Chachoengsao10/heartbeatPI5",
    powerModuleTopic: "OCPP/Chachoengsao10/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Chachoengsao10"
      },
      "ST035": {
    frontendId: 35,
    mqttName: "Chanthaburi",
    payloadName: "Chanthaburi",
    topic: "OCPP/PT_Chanthaburi_1/heartbeat",
    pi5Topic: "OCPP/Chanthaburi/heartbeatPI5",
    powerModuleTopic: "OCPP/Chanthaburi/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Chanthaburi"
      },
      "ST036": {
    frontendId: 36,
    mqttName: "Chatturat",
    payloadName: "Chatturat",
    topic: "OCPP/PT_Chatturat/heartbeat",
    pi5Topic: "OCPP/Chatturat/heartbeatPI5",
    powerModuleTopic: "OCPP/Chatturat/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Chatturat"
      },
      "ST037": {
    frontendId: 37,
    mqttName: "Chiangmai1",
    payloadName: "Chiangmai1",
    topic: "OCPP/Chiangmai1/heartbeat",
    pi5Topic: "OCPP/Chiangmai1/heartbeatPI5",
    powerModuleTopic: "OCPP/Chiangmai1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Chiangmai1"
      },
      "ST038": {
    frontendId: 38,
    mqttName: "Chiangrai7",
    payloadName: "Chiangrai7",
    topic: "OCPP/Elex_PT_Chiangrai7_1/heartbeat",
    pi5Topic: "OCPP/Chiangrai7/heartbeatPI5",
    powerModuleTopic: "OCPP/Chiangrai7/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Chiangrai7"
      },
      "ST039": {
    frontendId: 39,
    mqttName: "EDS_Wangnoi",
    payloadName: "EDS_Wangnoi",
    topic: "OCPP/W_N/heartbeat",
    pi5Topic: "OCPP/EDS_Wangnoi/heartbeatPI5",
    powerModuleTopic: "OCPP/EDS_Wangnoi/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "WNTEP"
      },
      "ST040": {
    frontendId: 40,
    mqttName: "EGCO",
    payloadName: "EGCO",
    topic: "OCPP/EGCO/heartbeat",
    pi5Topic: "OCPP/EGCO/heartbeatPI5",
    powerModuleTopic: "OCPP/EGCO/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "ESCO"
      },
      "ST041": {
    frontendId: 41,
    mqttName: "Hangchat2",
    payloadName: "Hangchat2",
    topic: "OCPP/Elex_PT_Hangchat2_1/heartbeat",
    pi5Topic: "OCPP/Hangchat2/heartbeatPI5",
    powerModuleTopic: "OCPP/Hangchat2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Hangchat2"
      },
      "ST042": {
    frontendId: 42,
    mqttName: "HangDong7",
    payloadName: "HangDong7",
    topic: "OCPP/PT100_HangDong7/heartbeat",
    pi5Topic: "OCPP/HangDong7/heartbeatPI5",
    powerModuleTopic: "OCPP/HangDong7/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "HangDong"
      },
      "ST043": {
    frontendId: 43,
    mqttName: "HuaiPhueng",
    payloadName: "HuaiPhueng",
    topic: "OCPP/PT_HuaiPhueng/heartbeat",
    pi5Topic: "OCPP/HuaiPhueng/heartbeatPI5",
    powerModuleTopic: "OCPP/HuaiPhueng/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "HuaiPhueng1"
      },
      "ST044": {
    frontendId: 44,
    mqttName: "JPARK1",
    payloadName: "JPARK1",
    topic: "OCPP/Parking_JPARK1/heartbeat",
    pi5Topic: "OCPP/JPARK1/heartbeatPI5",
    powerModuleTopic: "OCPP/JPARK1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "JPARK1"
      },
      "ST045": {
    frontendId: 45,
    mqttName: "KabinBuri7",
    payloadName: "KabinBuri7",
    topic: "OCPP/PT_KabinBuri7/heartbeat",
    pi5Topic: "OCPP/KabinBuri7/heartbeatPI5",
    powerModuleTopic: "OCPP/KabinBuri7/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "KabinBuri7"
      },
      "ST046": {
    frontendId: 46,
    mqttName: "KabinBuri9",
    payloadName: "KabinBuri9",
    topic: "OCPP/Elex_PT_KabinBuri9_1/heartbeat",
    pi5Topic: "OCPP/KabinBuri9/heartbeatPI5",
    powerModuleTopic: "OCPP/KabinBuri9/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "KabinBuri9"
      },
      "ST047": {
    frontendId: 47,
    mqttName: "KamphaengPhet2",
    payloadName: "KamphaengPhet2",
    topic: "OCPP/Elex_PT_KamphaengPhet2_1/heartbeat",
    pi5Topic: "OCPP/KamphaengPhet2/heartbeatPI5",
    powerModuleTopic: "OCPP/KamphaengPhet2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "KamphaengPhet2"
      },
      "ST048": {
    frontendId: 48,
    mqttName: "Kanchanapisek1",
    payloadName: "Kanchanapisek1",
    topic: "OCPP/EleX_PT100_Kanchanapisek1_DC_1/heartbeat",
    pi5Topic: "OCPP/Kanchanapisek1/heartbeatPI5",
    powerModuleTopic: "OCPP/Kanchanapisek1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Kanchanapisek1"
      },
      "ST049": {
    frontendId: 49,
    mqttName: "Kanchanapisek2",
    payloadName: "Kanchanapisek2",
    topic: "OCPP/Kanchanapisek2/heartbeat",
    pi5Topic: "OCPP/Kanchanapisek2/heartbeatPI5",
    powerModuleTopic: "OCPP/Kanchanapisek2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Kanchanapisek2"
      },"ST050": {
    frontendId: 50,
    mqttName: "Klong4",
    payloadName: "Klong4",
    topic: "OCPP/PT_Klong4/heartbeat",
    pi5Topic: "OCPP/Klong4/heartbeatPI5",
    powerModuleTopic: "OCPP/Klong4/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Klong4"
      },"ST051": {
    frontendId: 51,
    mqttName: "Klaeng11",
    payloadName: "Klaeng11",
    topic: "OCPP/PT100_Klaeng11_DC_1/heartbeat",
    pi5Topic: "OCPP/Klaeng11/heartbeatPI5",
    powerModuleTopic: "OCPP/Klaeng11/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Klaeng11"
      },"ST052": {
    frontendId: 52,
    mqttName: "Klaeng12",
    payloadName: "Klaeng12",
    topic: "OCPP/Klaeng12/heartbeat",
    pi5Topic: "OCPP/Klaeng12/heartbeatPI5",
    powerModuleTopic: "OCPP/Klaeng12/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Klaeng12"
      },"ST053": {
    frontendId: 53,
    mqttName: "Klongluang3",
    payloadName: "Klongluang3",
    topic: "OCPP/PT100_Klongluang3/heartbeat",
    pi5Topic: "OCPP/Klongluang3/heartbeatPI5",
    powerModuleTopic: "OCPP/Klongluang3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Luang3"
      },"ST054": {
    frontendId: 54,
    mqttName: "Klongluang4",
    payloadName: "Klongluang4",
    topic: "OCPP/PT100_Klongluang4/heartbeat",
    pi5Topic: "OCPP/Klongluang4/heartbeatPI5",
    powerModuleTopic: "OCPP/Klongluang4/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },"ST055": {
    frontendId: 55,
    mqttName: "KhlongLuang6",
    payloadName: "KhlongLuang6",
    topic: "OCPP/PT100_Klongluang6/heartbeat",
    pi5Topic: "OCPP/KhlongLuang6/heartbeatPI5",
    powerModuleTopic: "OCPP/KhlongLuang6/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Luang6"
      },"ST056": {
    frontendId: 56,
    mqttName: "Klongluang10",
    payloadName: "Klongluang10",
    topic: "OCPP/PT100_Klongluang10_DC_1/heartbeat",
    pi5Topic: "OCPP/Klongluang10/heartbeatPI5",
    powerModuleTopic: "OCPP/Klongluang10/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "KhlongLueng10"
      },"ST057": {
    frontendId: 57,
    mqttName: "KhaoKhansong",
    payloadName: "KhaoKhansong",
    topic: "OCPP/PT100_KhaoKhansong/heartbeat",
    pi5Topic: "OCPP/KhaoKhansong/heartbeatPI5",
    powerModuleTopic: "OCPP/KhaoKhansong/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Khaokhansong"
      },"ST058": {
    frontendId: 58,
    mqttName: "KrokPhra2",
    payloadName: "KrokPhra2",
    topic: "OCPP/PT100_KrokPhra2/heartbeat",
    pi5Topic: "OCPP/KrokPhra2/heartbeatPI5",
    powerModuleTopic: "OCPP/KrokPhra2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "KrokPhra2"
      },"ST059": {
    frontendId: 59,
    mqttName: "KrungthepKreetha2",
    payloadName: "KrungthepKreetha2",
    topic: "OCPP/KrungthepKreetha2/heartbeat",
    pi5Topic: "OCPP/KrungthepKreetha2/heartbeatPI5",
    powerModuleTopic: "OCPP/KrungthepKreetha2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },"ST060": {
    frontendId: 60,
    mqttName: "KuiBuri",
    payloadName: "KuiBuri",
    topic: "OCPP/KuiBuri/heartbeat",
    pi5Topic: "OCPP/KuiBuri/heartbeatPI5",
    powerModuleTopic: "OCPP/KuiBuri/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "KuiBuri"
      },"ST061": {
    frontendId: 61,
    mqttName: "KungPhatthana",
    payloadName: "KungPhatthana",
    topic: "OCPP/KungPhatthana/heartbeat",
    pi5Topic: "OCPP/KungPhatthana/heartbeatPI5",
    powerModuleTopic: "OCPP/KungPhatthana/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "KungPhatthana"
      },"ST062": {
    frontendId: 62,
    mqttName: "KaengKhoi2",
    payloadName: "KaengKhoi2",
    topic: "OCPP/Elex_PT_KaengKhoi2_1/heartbeat",
    pi5Topic: "OCPP/KaengKhoi2/heartbeatPI5",
    powerModuleTopic: "OCPP/KaengKhoi2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "KaengKhoi2"
      },"ST063": {
    frontendId: 63,
    mqttName: "KingKaew2",
    payloadName: "KingKaew2",
    topic: "OCPP/Elex_KingKaew2_1/heartbeat",
    pi5Topic: "OCPP/KingKaew2/heartbeatPI5",
    powerModuleTopic: "OCPP/KingKaew2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "KingKaew2"
      },"ST064": {
    frontendId: 64,
    mqttName: "LamLukKa8",
    payloadName: "LamLukKa8",
    topic: "OCPP/Elex_PT_LamLukKa8_1/heartbeat",
    pi5Topic: "OCPP/LamLukKa8/heartbeatPI5",
    powerModuleTopic: "OCPP/LamLukKa8/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "LamLukKa8"
      },"ST065": {
    frontendId: 65,
    mqttName: "Lamae3",
    payloadName: "Lamae3",
    topic: "OCPP/Elex_PT_Lamae3_1/heartbeat",
    pi5Topic: "OCPP/Lamae3/heartbeatPI5",
    powerModuleTopic: "OCPP/Lamae3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Lamae3"
      },"ST066": {
    frontendId: 66,
    mqttName: "LatPlaDuk2",
    payloadName: "LatPlaDuk2",
    topic: "OCPP/Ladpladuk2/heartbeat",
    pi5Topic: "OCPP/LatPlaDuk2/heartbeatPI5",
    powerModuleTopic: "OCPP/LatPlaDuk2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Ladpladuk"
      },"ST067": {
    frontendId: 67,
    mqttName: "lamphun2",
    payloadName: "lamphun2",
    topic: "OCPP/lamphun2/heartbeat",
    pi5Topic: "OCPP/lamphun2/heartbeatPI5",
    powerModuleTopic: "OCPP/lamphun2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Lamphun2"
      },"ST068": {
    frontendId: 68,
    mqttName: "LatLumKaeo6",
    payloadName: "LatLumKaeo6",
    topic: "OCPP/Elex_PT_LatLumKaeo6_1/heartbeat",
    pi5Topic: "OCPP/LatLumKaeo6/heartbeatPI5",
    powerModuleTopic: "OCPP/LatLumKaeo6/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "LatLumKaeo6"
      },"ST069": {
    frontendId: 69,
    mqttName: "Latkrabang6",
    payloadName: "Latkrabang6",
    topic: "OCPP/Elex_Latkrabang6_1/heartbeat",
    pi5Topic: "OCPP/Latkrabang6/heartbeatPI5",
    powerModuleTopic: "OCPP/Latkrabang6/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Latkrabang6"
      },"ST070": {
    frontendId: 70,
    mqttName: "LiangMuangChon1",
    payloadName: "LiangMuangChon1",
    topic: "OCPP/LiangMuangChon1/heartbeat",
    pi5Topic: "OCPP/LiangMuangChon1/heartbeatPI5",
    powerModuleTopic: "OCPP/LiangMuangChon1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "MChon1"
      },"ST071": {
    frontendId: 71,
    mqttName: "Manorom2",
    payloadName: "Manorom2",
    topic: "OCPP/Elex_DC_PT_Manorom2_1/heartbeat",
    pi5Topic: "OCPP/Manorom2/heartbeatPI5",
    powerModuleTopic: "OCPP/Manorom2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Manorom2"
      },"ST072": {
    frontendId: 72,
    mqttName: "MaeChan",
    payloadName: "MaeChan",
    topic: "OCPP/Elex_DC_PT_MaeChan_1/heartbeat",
    pi5Topic: "OCPP/MaeChan/heartbeatPI5",
    powerModuleTopic: "OCPP/MaeChan/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "MaeChan"
      },"ST073": {
    frontendId: 73,
    mqttName: "MahaSarakham1",
    payloadName: "MahaSarakham1",
    topic: "OCPP/MahaSarakham1/heartbeat",
    pi5Topic: "OCPP/MahaSarakham1/heartbeatPI5",
    powerModuleTopic: "OCPP/MahaSarakham1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "MahaSarakham21"
      },"ST074": {
    frontendId: 74,
    mqttName: "MahaSarakham2",
    payloadName: "MahaSarakham2",
    topic: "OCPP/MahaSarakham2/heartbeat",
    pi5Topic: "OCPP/MahaSarakham2/heartbeatPI5",
    powerModuleTopic: "OCPP/MahaSarakham2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "MahaSarakham22"
      },"ST075": {
    frontendId: 75,
    mqttName: "MahaSarakham",
    payloadName: "MahaSarakham",
    topic: "OCPP/PT_MahaSarakham/heartbeat",
    pi5Topic: "OCPP/MahaSarakham/heartbeatPI5",
    powerModuleTopic: "OCPP/MahaSarakham/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "MahaSarakham"
      },"ST076": {
    frontendId: 76,
    mqttName: "Mukdahan1",
    payloadName: "Mukdahan1",
    topic: "OCPP/Mukdahan1/heartbeat",
    pi5Topic: "OCPP/Mukdahan1/heartbeatPI5",
    powerModuleTopic: "OCPP/Mukdahan1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Mukdahan1"
      },"ST077": {
    frontendId: 77,
    mqttName: "NakhonPathom9",
    payloadName: "NakhonPathom9",
    topic: "OCPP/PT_NakhonPathom9/heartbeat",
    pi5Topic: "OCPP/NakhonPathom9/heartbeatPI5",
    powerModuleTopic: "OCPP/NakhonPathom9/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Pathom9"
      },"ST078": {
    frontendId: 78,
    mqttName: "NamPhong",
    payloadName: "NamPhong",
    topic: "OCPP/NamPhong_1/heartbeat",
    pi5Topic: "OCPP/NamPhong/heartbeatPI5",
    powerModuleTopic: "OCPP/NamPhong/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "NamPhong"
      },"ST079": {
    frontendId: 79,
    mqttName: "NakhonLuang4",
    payloadName: "NakhonLuang4",
    topic: "OCPP/NakhonLuang4/heartbeat",
    pi5Topic: "OCPP/NakhonLuang4/heartbeatPI5",
    powerModuleTopic: "OCPP/NakhonLuang4/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "NakhonLuang4"
      },"ST080": {
    frontendId: 80,
    mqttName: "NakhonSawan2",
    payloadName: "NakhonSawan2",
    topic: "OCPP/NakhonSawan2/heartbeat",
    pi5Topic: "OCPP/NakhonSawan2/heartbeatPI5",
    powerModuleTopic: "OCPP/NakhonSawan2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "NakhonSawan2"
      },"ST081": {
    frontendId: 81,
    mqttName: "NakhonRatchasima8",
    payloadName: "NakhonRatchasima8",
    topic: "OCPP/PT100_NakhonRatchasima8/heartbeat",
    pi5Topic: "OCPP/NakhonRatchasima8/heartbeatPI5",
    powerModuleTopic: "OCPP/NakhonRatchasima8/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Sima8"
      },"ST082": {
    frontendId: 82,
    mqttName: "Nakhonratchasima12",
    payloadName: "Nakhonratchasima12",
    topic: "OCPP/Elex_PT_Nakhonratchasima12_1/heartbeat",
    pi5Topic: "OCPP/Nakhonratchasima12/heartbeatPI5",
    powerModuleTopic: "OCPP/Nakhonratchasima12/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Nakhonratchasima12"
      },"ST083": {
    frontendId: 83,
    mqttName: "Nhao",
    payloadName: "Nhao",
    topic: "OCPP/PT_Nhao_1/heartbeat",
    pi5Topic: "OCPP/Nhao/heartbeatPI5",
    powerModuleTopic: "OCPP/Nhao/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Nhao"
      },"ST084": {
    frontendId: 84,
    mqttName: "NongBunMak2",
    payloadName: "NongBunMak2",
    topic: "OCPP/PT_NONGBUNMAK2/heartbeat",
    pi5Topic: "OCPP/NongBunMak2/heartbeatPI5",
    powerModuleTopic: "OCPP/NongBunMak2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Nongbunmak2"
      },"ST085": {
    frontendId: 85,
    mqttName: "NonSung3",
    payloadName: "NonSung3",
    topic: "OCPP/NONSUNG_3/heartbeat",
    pi5Topic: "OCPP/NonSung3/heartbeatPI5",
    powerModuleTopic: "OCPP/NonSung3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Nonsung"
      },"ST086": {
    frontendId: 86,
    mqttName: "NonthaburiBridge",
    payloadName: "NonthaburiBridge",
    topic: "OCPP/NonthaburiBridge/heartbeat",
    pi5Topic: "OCPP/NonthaburiBridge/heartbeatPI5",
    powerModuleTopic: "OCPP/NonthaburiBridge/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "NonthaburiBridge"
      },"ST087": {
    frontendId: 87,
    mqttName: "Nongki",
    payloadName: "Nongki",
    topic: "OCPP/Elex_DC_PT_Nongki_1/heartbeat",
    pi5Topic: "OCPP/Nongki/heartbeatPI5",
    powerModuleTopic: "OCPP/Nongki/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Nongki"
      },"ST088": {
    frontendId: 88,
    mqttName: "NongKhae",
    payloadName: "NongKhae",
    topic: "OCPP/NongKgae1/heartbeat",
    pi5Topic: "OCPP/NongKhae/heartbeatPI5",
    powerModuleTopic: "OCPP/NongKhae/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "NongKhae1"
      },"ST089": {
    frontendId: 89,
    mqttName: "NongKhae5",
    payloadName: "NongKhae5",
    topic: "OCPP/PT100_NongKhae5/heartbeat",
    pi5Topic: "OCPP/NongKhae5/heartbeatPI5",
    powerModuleTopic: "OCPP/NongKhae5/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "NonKhae5"
      },
      
      "ST090": {
    frontendId: 90,
    mqttName: "NongKhaem",
    payloadName: "NongKhaem",
    topic: "OCPP/NongKhaem/heartbeat",
    pi5Topic: "OCPP/NongKhaem/heartbeatPI5",
    powerModuleTopic: "OCPP/NongKhaem/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "NongKhaem"
      },

      "ST091": {
    frontendId: 91,
    mqttName: "NongRuea4",
    payloadName: "NongRuea4",
    topic: "OCPP/Elex_PT_NongRuea4_1/heartbeat",
    pi5Topic: "OCPP/NongRuea4/heartbeatPI5",
    powerModuleTopic: "OCPP/NongRuea4/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "NongRuea4"
      },

      "ST092": {
    frontendId: 92,
    mqttName: "Nikompattana5",
    payloadName: "Nikompattana5",
    topic: "OCPP/PT100_Nikompattana5/heartbeat",
    pi5Topic: "OCPP/Nikompattana5/heartbeatPI5",
    powerModuleTopic: "OCPP/Nikompattana5/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Pattana5"
      },"ST093": {
    frontendId: 93,
    mqttName: "NimitMai2",
    payloadName: "NimitMai2",
    topic: "OCPP/PT100_NimitMai2_DC_1/heartbeat",
    pi5Topic: "OCPP/NimitMai2/heartbeatPI5",
    powerModuleTopic: "OCPP/NimitMai2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "NimitMai2"
      },"ST094": {
    frontendId: 94,
    mqttName: "Pai1_Silhouette",
    payloadName: "Pai1_Silhouette",
    topic: "OCPP/Pai/heartbeat",
    pi5Topic: "OCPP/Pai1_Silhouette/heartbeatPI5",
    powerModuleTopic: "OCPP/Pai1_Silhouette/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "PAI1"
      },"ST095": {
    frontendId: 95,
    mqttName: "PaIn1",
    payloadName: "PaIn1",
    topic: "OCPP/Elex_PT_PaIn1_1/heartbeat",
    pi5Topic: "OCPP/PaIn1/heartbeatPI5",
    powerModuleTopic: "OCPP/PaIn1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "PratunamPhraIn1"
      },"ST096": {
    frontendId: 96,
    mqttName: "PakThongChai2",
    payloadName: "PakThongChai2",
    topic: "OCPP/PakThongChai2/heartbeat",
    pi5Topic: "OCPP/PakThongChai2/heartbeatPI5",
    powerModuleTopic: "OCPP/PakThongChai2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "PakThongChai2"
      },"ST097": {
    frontendId: 97,
    mqttName: "PakChong2",
    payloadName: "PakChong2",
    topic: "OCPP/PakChong2/heartbeat",
    pi5Topic: "OCPP/PakChong2/heartbeatPI5",
    powerModuleTopic: "OCPP/PakChong2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "PakChong2"
      },"ST098": {
    frontendId: 98,
    mqttName: "PakChong5",
    payloadName: "PakChong5",
    topic: "OCPP/Elex_PakChong5_1/heartbeat",
    pi5Topic: "OCPP/PakChong5/heartbeatPI5",
    powerModuleTopic: "OCPP/PakChong5/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Pakchong5"
      },"ST099": {
    frontendId: 99,
    mqttName: "Prasat6",
    payloadName: "Prasat6",
    topic: "OCPP/Elex_DC_PT_Prasat6_1/heartbeat",
    pi5Topic: "OCPP/Prasat6/heartbeatPI5",
    powerModuleTopic: "OCPP/Prasat6/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Prasat6"
      },"ST0100": {
    frontendId: 100,
    mqttName: "Prawet4",
    payloadName: "Prawet4",
    topic: "OCPP/Elex_PT_Prawet4_1/heartbeat",
    pi5Topic: "OCPP/Prawet4/heartbeatPI5",
    powerModuleTopic: "OCPP/Prawet4/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Prawet4"
      },"ST0101": {
    frontendId: 101,
    mqttName: "Pranburi2",
    payloadName: "Pranburi2",
    topic: "OCPP/Elex_PT_Pranburi2_1/heartbeat",
    pi5Topic: "OCPP/Pranburi2/heartbeatPI5",
    powerModuleTopic: "OCPP/Pranburi2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Pranburi2"
      },"ST0102": {
    frontendId: 102,
    mqttName: "PhanThong3",
    payloadName: "PhanThong3",
    topic: "OCPP/PT100_PhanThong3/heartbeat",
    pi5Topic: "OCPP/PhanThong3/heartbeatPI5",
    powerModuleTopic: "OCPP/PhanThong3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "PhanThong3"
      },"ST0103": {
    frontendId: 103,
    mqttName: "Phraekkasa",
    payloadName: "Phraekkasa",
    topic: "OCPP/Phraekkasa/heartbeat",
    pi5Topic: "OCPP/Phraekkasa/heartbeatPI5",
    powerModuleTopic: "OCPP/Phraekkasa/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Phraekkasa"
      },"ST0104": {
    frontendId: 104,
    mqttName: "Phratep1",
    payloadName: "Phratep1",
    topic: "OCPP/Thanon_phartep/heartbeat",
    pi5Topic: "OCPP/Phratep1/heartbeatPI5",
    powerModuleTopic: "OCPP/Phratep1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Thanonphartep"
      },"ST0105": {
    frontendId: 105,
    mqttName: "PhanomSarakham2",
    payloadName: "PhanomSarakham2",
    topic: "OCPP/PT100_PhanomSarakham2/heartbeat",
    pi5Topic: "OCPP/PhanomSarakham2/heartbeatPI5",
    powerModuleTopic: "OCPP/PhanomSarakham2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },"ST0106": {
    frontendId: 106,
    mqttName: "PhanatNikhom3",
    payloadName: "PhanatNikhom3",
    topic: "OCPP/PhanatNikhom3/heartbeat",
    pi5Topic: "OCPP/PhanatNikhom3/heartbeatPI5",
    powerModuleTopic: "OCPP/PhanatNikhom3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "PhanatNiKhom3"
      },"ST0107": {
    frontendId: 107,
    mqttName: "PhanatNikhom7",
    payloadName: "PhanatNikhom7",
    topic: "OCPP/Elex_DC_PT_PhanatNikhom7_1/heartbeat",
    pi5Topic: "OCPP/PhanatNikhom7/heartbeatPI5",
    powerModuleTopic: "OCPP/PhanatNikhom7/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "PhanatNikhom7"
      },"ST0108": {
    frontendId: 108,
    mqttName: "Phetchabun1",
    payloadName: "Phetchabun1",
    topic: "OCPP/PT_Phetchabun1/heartbeat",
    pi5Topic: "OCPP/Phetchabun1/heartbeatPI5",
    powerModuleTopic: "OCPP/Phetchabun1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Phetchabun1"
      },"ST0109": {
    frontendId: 109,
    mqttName: "Phatthananikhom1",
    payloadName: "Phatthananikhom1",
    topic: "OCPP/Phatthananikhom1/heartbeat",
    pi5Topic: "OCPP/Phatthananikhom1/heartbeatPI5",
    powerModuleTopic: "OCPP/Phatthananikhom1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Nikhom1"
      },"ST0110": {
    frontendId: 110,
    mqttName: "Phatthananikhom2",
    payloadName: "Phatthananikhom2",
    topic: "OCPP/Elex_PT_Phatthananikhom2_1/heartbeat",
    pi5Topic: "OCPP/Phatthananikhom2/heartbeatPI5",
    powerModuleTopic: "OCPP/Phatthananikhom2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Phatthananikhom2"
      },"ST0111": {
    frontendId: 111,
    mqttName: "Phitsanulok3",
    payloadName: "Phitsanulok3",
    topic: "OCPP/PT100_Phitsanulok3/heartbeat",
    pi5Topic: "OCPP/Phitsanulok3/heartbeatPI5",
    powerModuleTopic: "OCPP/Phitsanulok3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Nulok3"
      },"ST0112": {
    frontendId: 112,
    mqttName: "Phitsanulok5",
    payloadName: "Phitsanulok5",
    topic: "OCPP/EleX_PT100_Phitsanulok5_DC_1/heartbeat",
    pi5Topic: "OCPP/Phitsanulok5/heartbeatPI5",
    powerModuleTopic: "OCPP/Phitsanulok5/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Phitsanulok5"
      },"ST0113": {
    frontendId: 113,
    mqttName: "PhromBuri2",
    payloadName: "PhromBuri2",
    topic: "OCPP/Elex_DC_PT_PhromBuri2_1/heartbeat",
    pi5Topic: "OCPP/PhromBuri2/heartbeatPI5",
    powerModuleTopic: "OCPP/PhromBuri2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "PhromBuri2"
      },"ST0114": {
    frontendId: 114,
    mqttName: "PhromPhiram6",
    payloadName: "PhromPhiram6",
    topic: "OCPP/PT100_PhromPhiram6/heartbeat",
    pi5Topic: "OCPP/PhromPhiram6/heartbeatPI5",
    powerModuleTopic: "OCPP/PhromPhiram6/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Phrom"
      },"ST0115": {
    frontendId: 115,
    mqttName: "Phutthamonthon3",
    payloadName: "Phutthamonthon3",
    topic: "OCPP/Phutthamonthon3/heartbeat",
    pi5Topic: "OCPP/Phutthamonthon3/heartbeatPI5",
    powerModuleTopic: "OCPP/Phutthamonthon3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },"ST0116": {
    frontendId: 116,
    mqttName: "Phutthamonthon4",
    payloadName: "Phutthamonthon4",
    topic: "OCPP/Elex_PT_Phutthamonthon4_1/heartbeat",
    pi5Topic: "OCPP/Phutthamonthon4/heartbeatPI5",
    powerModuleTopic: "OCPP/Phutthamonthon4/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Phutthamonthon4"
      },"ST0117": {
    frontendId: 117,
    mqttName: "Phutthamonthon5",
    payloadName: "Phutthamonthon5",
    topic: "OCPP/Phutthamonthon5/heartbeat",
    pi5Topic: "OCPP/Phutthamonthon5/heartbeatPI5",
    powerModuleTopic: "OCPP/Phutthamonthon5/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Phutthamonthon5"
      },"ST0118": {
    frontendId: 118,
    mqttName: "Ratchaphruek",
    payloadName: "Ratchaphruek",
    topic: "OCPP/EleX_Ratchaphruek_DC_1/heartbeat",
    pi5Topic: "OCPP/Ratchaphruek/heartbeatPI5",
    powerModuleTopic: "OCPP/Ratchaphruek/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Ratchaphruek"
      },"ST0119": {
    frontendId: 119,
    mqttName: "Ratchaburi7",
    payloadName: "Ratchaburi7",
    topic: "OCPP/PT_Ratchaburi_7/heartbeat",
    pi5Topic: "OCPP/Ratchaburi7/heartbeatPI5",
    powerModuleTopic: "OCPP/Ratchaburi7/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Ratchaburi7"
      },"ST0120": {
    frontendId: 120,
    mqttName: "RamInthra40",
    payloadName: "RamInthra40",
    topic: "OCPP/EleX_RamInthra40_1/heartbeat",
    pi5Topic: "OCPP/RamInthra40/heartbeatPI5",
    powerModuleTopic: "OCPP/RamInthra40/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "RamInthra40"
      },"ST0121": {
    frontendId: 121,
    mqttName: "Rama2km26",
    payloadName: "Rama2km26",
    topic: "OCPP/Elex_Rama2km26_1/heartbeat",
    pi5Topic: "OCPP/Rama2km26/heartbeatPI5",
    powerModuleTopic: "OCPP/Rama2km26/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },"ST0122": {
    frontendId: 122,
    mqttName: "Rama2km53",
    payloadName: "Rama2km53",
    topic: "OCPP/Elex_Rama2km53_1/heartbeat",
    pi5Topic: "OCPP/Rama2km53/heartbeatPI5",
    powerModuleTopic: "OCPP/Rama2km53/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },"ST0123": {
    frontendId: 123,
    mqttName: "Saraphi2",
    payloadName: "Saraphi2",
    topic: "OCPP/Saraphi2/heartbeat",
    pi5Topic: "OCPP/Saraphi2/heartbeatPI5",
    powerModuleTopic: "OCPP/Saraphi2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },"ST0124": {
    frontendId: 124,
    mqttName: "Sangkha3",
    payloadName: "Sangkha3",
    topic: "OCPP/PT_Sangkha3/heartbeat",
    pi5Topic: "OCPP/Sangkha3/heartbeatPI5",
    powerModuleTopic: "OCPP/Sangkha3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },"ST0125": {
    frontendId: 125,
    mqttName: "SamRoiYot1",
    payloadName: "SamRoiYot1",
    topic: "OCPP/Elex_DC_PT_SamRoiYot1_1/heartbeat",
    pi5Topic: "OCPP/SamRoiYot1/heartbeatPI5",
    powerModuleTopic: "OCPP/SamRoiYot1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },"ST0126": {
    frontendId: 126,
    mqttName: "Samutsongkhram4",
    payloadName: "Samutsongkhram4",
    topic: "OCPP/Elex_Samutsongkhram4_1/heartbeat",
    pi5Topic: "OCPP/Samutsongkhram4/heartbeatPI5",
    powerModuleTopic: "OCPP/Samutsongkhram4/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0127": {
    frontendId: 127,
    mqttName: "SaphanSung",
    payloadName: "SaphanSung",
    topic: "OCPP/EleX_PT100_SaphanSung_DC_1/heartbeat",
    pi5Topic: "OCPP/SaphanSung/heartbeatPI5",
    powerModuleTopic: "OCPP/SaphanSung/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0128": {
    frontendId: 128,
    mqttName: "SamKhok3",
    payloadName: "SamKhok3",
    topic: "OCPP/Elex_PT_SamKhok3_1/heartbeat",
    pi5Topic: "OCPP/SamKhok3/heartbeatPI5",
    powerModuleTopic: "OCPP/SamKhok3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0129": {
    frontendId: 129,
    mqttName: "Samutprakan2",
    payloadName: "Samutprakan2",
    topic: "OCPP/EleX_Samutprakan2_DC_1/heartbeat",
    pi5Topic: "OCPP/Samutprakan2/heartbeatPI5",
    powerModuleTopic: "OCPP/Samutprakan2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0130": {
    frontendId: 130,
    mqttName: "Samutprakan5",
    payloadName: "Samutprakan5",
    topic: "OCPP/PT100_Samutprakan5_DC_1/heartbeat",
    pi5Topic: "OCPP/Samutprakan5/heartbeatPI5",
    powerModuleTopic: "OCPP/Samutprakan5/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0131": {
    frontendId: 131,
    mqttName: "SanKamphaeng6",
    payloadName: "SanKamphaeng6",
    topic: "OCPP/PT100_SanKamphaeng6/heartbeat",
    pi5Topic: "OCPP/SanKamphaeng6/heartbeatPI5",
    powerModuleTopic: "OCPP/SanKamphaeng6/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0132": {
    frontendId: 132,
    mqttName: "SanSai4",
    payloadName: "SanSai4",
    topic: "OCPP/SanSai4/heartbeat",
    pi5Topic: "OCPP/SanSai4/heartbeatPI5",
    powerModuleTopic: "OCPP/SanSai4/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0133": {
    frontendId: 133,
    mqttName: "SuwinthawonKm28",
    payloadName: "SuwinthawonKm28",
    topic: "OCPP/Elex_SuwinthawonKm28_1/heartbeat",
    pi5Topic: "OCPP/SuwinthawonKm28/heartbeatPI5",
    powerModuleTopic: "OCPP/SuwinthawonKm28/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0134": {
    frontendId: 134,
    mqttName: "Swangweerawong",
    payloadName: "Swangweerawong",
    topic: "OCPP/Elex_DC_PT_Swangweerawong_1/heartbeat",
    pi5Topic: "OCPP/Swangweerawong/heartbeatPI5",
    powerModuleTopic: "OCPP/Swangweerawong/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0135": {
    frontendId: 135,
    mqttName: "Sikhio1",
    payloadName: "Sikhio1",
    topic: "OCPP/PT_Sikhio1/heartbeat",
    pi5Topic: "OCPP/Sikhio1/heartbeatPI5",
    powerModuleTopic: "OCPP/Sikhio1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0136": {
    frontendId: 136,
    mqttName: "Sikhio6",
    payloadName: "Sikhio6",
    topic: "OCPP/EleX_PT100_Sikhio6_1/heartbeat",
    pi5Topic: "OCPP/Sikhio6/heartbeatPI5",
    powerModuleTopic: "OCPP/Sikhio6/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },


      "ST0137": {
    frontendId: 137,
    mqttName: "Siracha7",
    payloadName: "Siracha7",
    topic: "OCPP/PT100_Siracha7/heartbeat",
    pi5Topic: "OCPP/Siracha7/heartbeatPI5",
    powerModuleTopic: "OCPP/Siracha7/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },


      "ST0138": {
    frontendId: 138,
    mqttName: "Siracha8",
    payloadName: "Siracha8",
    topic: "OCPP/Siracha8/heartbeat",
    pi5Topic: "OCPP/Siracha8/heartbeatPI5",
    powerModuleTopic: "OCPP/Siracha8/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "Siracha8"
      },
      "ST0139": {
    frontendId: 139,
    mqttName: "SNR1",
    payloadName: "SNR1",
    topic: "OCPP/SNR/heartbeat",
    pi5Topic: "OCPP/SNR1/heartbeatPI5",
    powerModuleTopic: "OCPP/SNR1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0140": {
    frontendId: 140,
    mqttName: "SopPrap",
    payloadName: "SopPrap",
    topic: "OCPP/PT100_SopPrap_DC_1/heartbeat",
    pi5Topic: "OCPP/SopPrap/heartbeatPI5",
    powerModuleTopic: "OCPP/SopPrap/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0141": {
    frontendId: 141,
    mqttName: "TaSai2",
    payloadName: "TaSai2",
    topic: "OCPP/EleX_TaSai2_1/heartbeat",
    pi5Topic: "OCPP/TaSai2/heartbeatPI5",
    powerModuleTopic: "OCPP/TaSai2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0142": {
    frontendId: 142,
    mqttName: "Tak2",
    payloadName: "Tak2",
    topic: "OCPP/EleX_PT100_Tak2_1/heartbeat",
    pi5Topic: "OCPP/Tak2/heartbeatPI5",
    powerModuleTopic: "OCPP/Tak2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0143": {
    frontendId: 143,
    mqttName: "Taphong3",
    payloadName: "Taphong3",
    topic: "OCPP/Taphong3/heartbeat",
    pi5Topic: "OCPP/Taphong3/heartbeatPI5",
    powerModuleTopic: "OCPP/Taphong3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0144": {
    frontendId: 144,
    mqttName: "ThaMaka3",
    payloadName: "ThaMaka3",
    topic: "OCPP/Elex_DC_PT_ThaMaka3_1/heartbeat",
    pi5Topic: "OCPP/ThaMaka3/heartbeatPI5",
    powerModuleTopic: "OCPP/ThaMaka3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0145": {
    frontendId: 145,
    mqttName: "ThanonChaoKhunThahan3",
    payloadName: "ThanonChaoKhunThahan3",
    topic: "OCPP/ThanonChaoKhunThahan3/heartbeat",
    pi5Topic: "OCPP/ThanonChaoKhunThahan3/heartbeatPI5",
    powerModuleTopic: "OCPP/ThanonChaoKhunThahan3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0146": {
    frontendId: 146,
    mqttName: "ThanonRatUthit2",
    payloadName: "ThanonRatUthit2",
    topic: "OCPP/Elex_PT100_ThanonRatUthit2_1/heartbeat",
    pi5Topic: "OCPP/ThanonRatUthit2/heartbeatPI5",
    powerModuleTopic: "OCPP/ThanonRatUthit2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0147": {
    frontendId: 147,
    mqttName: "ThanonSukprayu1",
    payloadName: "ThanonSukprayu1",
    topic: "OCPP/PT100_ThanonSukprayu1/heartbeat",
    pi5Topic: "OCPP/ThanonSukprayu1/heartbeatPI5",
    powerModuleTopic: "OCPP/ThanonSukprayu1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0148": {
    frontendId: 148,
    mqttName: "ThanonPhutthaBucha1",
    payloadName: "ThanonPhutthaBucha1",
    topic: "OCPP/ThanonPhutthaBucha1/heartbeat",
    pi5Topic: "OCPP/ThanonPhutthaBucha1/heartbeatPI5",
    powerModuleTopic: "OCPP/ThanonPhutthaBucha1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0149": {
    frontendId: 149,
    mqttName: "ThanonChan",
    payloadName: "ThanonChan",
    topic: "OCPP/Thanon_Chan/heartbeat",
    pi5Topic: "OCPP/ThanonChan/heartbeatPI5",
    powerModuleTopic: "OCPP/ThanonChan/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0150": {
    frontendId: 150,
    mqttName: "Thepharak2",
    payloadName: "Thepharak2",
    topic: "OCPP/EleX_Thepharak2_DC_1/heartbeat",
    pi5Topic: "OCPP/Thepharak2/heartbeatPI5",
    powerModuleTopic: "OCPP/Thepharak2/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0151": {
    frontendId: 151,
    mqttName: "Thepharak4",
    payloadName: "Thepharak4",
    topic: "OCPP/Thepharak4/heartbeat",
    pi5Topic: "OCPP/Thepharak4/heartbeatPI5",
    powerModuleTopic: "OCPP/Thepharak4/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0152": {
    frontendId: 152,
    mqttName: "Thoen3",
    payloadName: "Thoen3",
    topic: "OCPP/PT100_Thoen3/heartbeat",
    pi5Topic: "OCPP/Thoen3/heartbeatPI5",
    powerModuleTopic: "OCPP/Thoen3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0153": {
    frontendId: 153,
    mqttName: "Thungtako1",
    payloadName: "Thungtako1",
    topic: "OCPP/Elex_Thungtako1_1/heartbeat",
    pi5Topic: "OCPP/Thungtako1/heartbeatPI5",
    powerModuleTopic: "OCPP/Thungtako1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0154": {
    frontendId: 154,
    mqttName: "UdonThani",
    payloadName: "UdonThani",
    topic: "OCPP/PT_UdonThani_1/heartbeat",
    pi5Topic: "OCPP/UdonThani/heartbeatPI5",
    powerModuleTopic: "OCPP/UdonThani/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0155": {
    frontendId: 155,
    mqttName: "Uttaradit",
    payloadName: "Uttaradit",
    topic: "OCPP/PT100_Uttaradit/heartbeat",
    pi5Topic: "OCPP/Uttaradit/heartbeatPI5",
    powerModuleTopic: "OCPP/Uttaradit/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0156": {
    frontendId: 156,
    mqttName: "UThai",
    payloadName: "UThai",
    topic: "OCPP/PT_UThai/heartbeat",
    pi5Topic: "OCPP/UThai/heartbeatPI5",
    powerModuleTopic: "OCPP/UThai/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0157": {
    frontendId: 157,
    mqttName: "VibhavadiRangsit1",
    payloadName: "VibhavadiRangsit1",
    topic: "OCPP/Vibhavadi/heartbeat",
    pi5Topic: "OCPP/VibhavadiRangsit1/heartbeatPI5",
    powerModuleTopic: "OCPP/VibhavadiRangsit1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0158": {
    frontendId: 158,
    mqttName: "Wachirabarami1",
    payloadName: "Wachirabarami1",
    topic: "OCPP/Elex_DC_PT_Wachirabarami1_1/heartbeat",
    pi5Topic: "OCPP/Wachirabarami1/heartbeatPI5",
    powerModuleTopic: "OCPP/Wachirabarami1/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0159": {
    frontendId: 159,
    mqttName: "Wangnoi3",
    payloadName: "Wangnoi3",
    topic: "OCPP/PT_Wangnoi3/heartbeat",
    pi5Topic: "OCPP/Wangnoi3/heartbeatPI5",
    powerModuleTopic: "OCPP/Wangnoi3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0160": {
    frontendId: 160,
    mqttName: "Wangnoi4",
    payloadName: "Wangnoi4",
    topic: "OCPP/PT_Wangnoi4/heartbeat",
    pi5Topic: "OCPP/Wangnoi4/heartbeatPI5",
    powerModuleTopic: "OCPP/Wangnoi4/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0161": {
    frontendId: 161,
    mqttName: "Wattananakhon3",
    payloadName: "Wattananakhon3",
    topic: "OCPP/Elex_DC_PT_Wattananakhon3_1/heartbeat",
    pi5Topic: "OCPP/Wattananakhon3/heartbeatPI5",
    powerModuleTopic: "OCPP/Wattananakhon3/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      "ST0162": {
    frontendId: 162,
    mqttName: "Yasothon",
    payloadName: "Yasothon",
    topic: "OCPP/Yasothon/heartbeat",
    pi5Topic: "OCPP/Yasothon/heartbeatPI5",
    powerModuleTopic: "OCPP/Yasothon/PowerModule",  // ✅ เพิ่ม field แยก
    tempTopic: "BanPo3"
      },
      
      
  
};


const mqtt = require('mqtt');
const WebSocket = require('ws');

const wsConnections = new WeakMap();

const MQTT_BROKER = 'mqtt://212.80.215.42:1883';
const client = mqtt.connect(MQTT_BROKER);

/*const wss = new WebSocket.Server({ port: 8080, host: '0.0.0.0' });*/

/*wss.on('connection', function connection(ws) {
  console.log('✅ Client connected to WebSocket');
  ws.send('Hello from WebSocket server!');
});*/



//let wsConnections = {};
let activeCount = 0;
let inactiveCount = 0;

client.on('connect', () => {
  console.log('✅ Connected to MQTT Broker');

  // 🧠 Subscribe แบบอัตโนมัติตาม stationMetaMap
  const allTopics = Object.values(stationMetaMap)
    .flatMap(meta => [
      meta.topic,
      meta.pi5Topic,
      meta.powerModuleTopic,
      meta.tempTopic
    ])
    .filter(Boolean);

  allTopics.forEach(topic => {
    client.subscribe(topic, err => {
      if (err) {
        console.error(`❌ Failed to subscribe: ${topic}`);
      } else {
        console.log(`✅ Subscribed to: ${topic}`);
      }
    });
  });
});

  // ตั้งค่าหัวข้อ MQTT สำหรับแต่ละ EV Charger
/*  const mqttTopics = [

    'OCPP/PT_100Siracha7/heartbeat',
    
//EDGEBOX

  'OCPP/PT100_Ayuthaya3/heartbeat', 
  'OCPP/amphawa/heartbeat',
  'OCPP/BanNaDoem/heartbeat',
  'OCPP/PT_BangPahan4/heartbeat',
  'OCPP/PT_BangnaTrad1/heartbeat',
  'OCPP/BangKhunThian1/heartbeat',
  'OCPP/Banbueng1_DC_1/heartbeat',
  'OCPP/Banbueng9_DC_1/heartbeat',
  'OCPP/PT100_Banbueng10/heartbeat',
  'OCPP/PT100_Bangpokong2/heartbeat',
  'OCPP/Bangpakong3/heartbeat',
  'OCPP/Elex_DC_PT_BanKhai5_1/heartbeat',
  'OCPP/Elex_PT_BanPo3_1/heartbeat',
  'OCPP/Bangpha/heartbeat',
  'OCPP/PT100_BangKhla4/heartbeat',
  'OCPP/Bangpahan/heartbeat',
  'OCPP/PT_BangnaTrad2/heartbeat',
  'OCPP/PT100_BangPhra3/heartbeat',
  'OCPP/PT_BangPhain3/heartbeat',
  'OCPP/Elex_PT_Bangpakong_1/heartbeat',
  'OCPP/Elex_DC_PT_BanTak1_1/heartbeat',
  'OCPP/Elex_PT_Banglamuung11_1/heartbeat',
  'OCPP/EleX_PT100_BangBuaThong4_1/heartbeat',
  'OCPP/Elex_BangBuaThong9_1/heartbeat',
  'OCPP/EleX_PT100_BangBuaTong12_DC_1/heartbeat',
  'OCPP/EleX_PT100_BanphotPhisai3_DC_1/heartbeat',
  'OCPP/BuengKum3/heartbeat',
  'OCPP/EleX_CharoenRat_1/heartbeat',
  'OCPP/Chiangmai1/heartbeat',
  'OCPP/Elex_PT_Chiangrai7_1/heartbeat',
  'OCPP/PT_Chatturat/heartbeat',
  'OCPP/PT_Chanthaburi_1/heartbeat',
  'OCPP/Thanon_Chalong_Krung/heartbeat',
  'OCPP/Elex_ChalongKrung2_1/heartbeat',
  'OCPP/PT100_Chachoengsao9/heartbeat',
  'OCPP/Chachoengsao10/heartbeat',
  'OCPP/W_N/heartbeat',
  'OCPP/EGCO/heartbeat',
  'OCPP/Elex_PT_Hangchat2_1/heartbeat',
  'OCPP/PT100_HangDong7/heartbeat',
  'OCPP/PT_HuaiPhueng/heartbeat',
  'OCPP/Parking_JPARK1/heartbeat',
  'OCPP/Phraekkasa/heartbeat',
  'OCPP/Elex_PT_KabinBuri9_1/heartbeat',
  'OCPP/KrungthepKreetha2/heartbeat',
  'OCPP/PT_Klong4/heartbeat',
  'OCPP/PT100_Klongluang3/heartbeat',
  'OCPP/PT100_Klongluang4/heartbeat',
  'OCPP/PT100_Klongluang6/heartbeat',
  'OCPP/PT100_Klongluang10_DC_1/heartbeat',
  'OCPP/PT_KabinBuri7/heartbeat',
  'OCPP/Elex_KingKaew2_1/heartbeat',
  'OCPP/KuiBuri/heartbeat',
  'OCPP/EleX_PT100_Kanchanapisek1_DC_1/heartbeat',
  'OCPP/Kanchanapisek2/heartbeat',
  'OCPP/PT100_KhaoKhansong/heartbeat',
  'OCPP/PT100_Klaeng11_DC_1/heartbeat',
  'OCPP/KungPhatthana/heartbeat',
  'OCPP/Klaeng12/heartbeat',
  'OCPP/Elex_PT_KamphaengPhet2_1/heartbeat',
  'OCPP/Elex_PT_KamphaengPhet_1/heartbeat',
  'OCPP/PT100_KrokPhra2/heartbeat',
  'OCPP/Elex_PT_KaengKhoi2_1/heartbeat',
  'OCPP/EleX_Thepharak2_DC_1/heartbeat',
  'OCPP/Elex_Thungtako1_1/heartbeat',
  'OCPP/EleX_Ratchaphruek_DC_1/heartbeat',
  'OCPP/LiangMuangChon1/heartbeat',
  'OCPP/Elex_PT_LamLukKa8_1/heartbeat',
  'OCPP/Elex_PT_LatLumKaeo6_1/heartbeat',
  'OCPP/Elex_PT_Lamae3_1/heartbeat',
  'OCPP/Ladpladuk2/heartbeat',
  'OCPP/lamphun2/heartbeat',
  'OCPP/Elex_Latkrabang6_1/heartbeat',
  'OCPP/Mukdahan1/heartbeat',
  'OCPP/MahaSarakham1/heartbeat',
  'OCPP/MahaSarakham2/heartbeat',
  'OCPP/PT_MahaSarakham/heartbeat',
  'OCPP/Elex_DC_PT_MaeChan_1/heartbeat',
  'OCPP/Elex_DC_PT_Manorom2_1/heartbeat',
  'OCPP/NongKgae1/heartbeat',
  'OCPP/Elex_PT_NongRuea4_1/heartbeat',
  'OCPP/Elex_DC_PT_Nongki_1/heartbeat',
  'OCPP/NongKhaem/heartbeat',
  'OCPP/PT_Nhao_1/heartbeat',
  'OCPP/NonthaburiBridge/heartbeat',
  'OCPP/NakhonLuang4/heartbeat',
  'OCPP/PT100_NimitMai2_DC_1/heartbeat',
  'OCPP/PT100_Nikompattana5/heartbeat',
  'OCPP/PT100_NongKhae5/heartbeat',
  'OCPP/NamPhong_1/heartbeat',
  'OCPP/NONSUNG_3/heartbeat',
  'OCPP/PT100_NakhonRatchasima8/heartbeat',
  'OCPP/Elex_PT_Nakhonratchasima12_1/heartbeat',
  'OCPP/PT_NakhonPathom9/heartbeat',
  'OCPP/PT_NONGBUNMAK2/heartbeat',
  'OCPP/NakhonSawan2/heartbeat',
  'OCPP/Elex_PakChong5_1/heartbeat',
  'OCPP/Elex_PT_Prawet4_1/heartbeat',
  'OCPP/Elex_PT_Phutthamonthon4_1/heartbeat',
  'OCPP/Elex_DC_PT_Prasat6_1/heartbeat',
  'OCPP/Elex_PT_PaIn1_1/heartbeat',
  'OCPP/PhanatNikhom3/heartbeat',
  'OCPP/PT100_PhromPhiram6/heartbeat',
  'OCPP/Pai/heartbeat',
  'OCPP/Thanon_phartep/heartbeat',
  'OCPP/PakChong2/heartbeat',
  'OCPP/Phutthamonthon5/heartbeat',
  'OCPP/Elex_DC_PT_PhanatNikhom7_1/heartbeat',
  'OCPP/PT100_Phitsanulok3/heartbeat',
  'OCPP/PakThongChai2/heartbeat',
  'OCPP/Elex_DC_PT_PhromBuri2_1/heartbeat',
  'OCPP/Elex_PT_Phatthananikhom2_1/heartbeat',
  'OCPP/EleX_PT100_Phitsanulok5_DC_1/heartbeat',
  'OCPP/PT100_PhanThong3/heartbeat',
  'OCPP/PT_Phetchabun1/heartbeat',
  'OCPP/Elex_PT_Pranburi2_1/heartbeat',
  'OCPP/Phatthananikhom1/heartbeat',
  'OCPP/PT100_PhanomSarakham2/heartbeat',
  'OCPP/EleX_RamInthra40_1/heartbeat',
  'OCPP/Elex_Rama2km53_1/heartbeat',
  'OCPP/Elex_Rama2km26_1/heartbeat',
  'OCPP/PT_Ratchaburi_7/heartbeat',
  'OCPP/SanSai4/heartbeat',
  'OCPP/Siracha8/heartbeat',
  'OCPP/PT100_SanKamphaeng6/heartbeat',
  'OCPP/Elex_DC_PT_SamRoiYot1_1/heartbeat',
  'OCPP/EleX_PT100_SaphanSung_DC_1/heartbeat',
  'OCPP/Elex_SuwinthawonKm28_1/heartbeat',
  'OCPP/Elex_PT_SamKhok3_1/heartbeat',
  'OCPP/SNR/heartbeat',
  'OCPP/EleX_Samutprakan2_DC_1/heartbeat',
  'OCPP/PT100_SopPrap_DC_1/heartbeat',
  'OCPP/PT_Sikhio1/heartbeat',
  'OCPP/Elex_DC_PT_Swangweerawong_1/heartbeat',
  'OCPP/Saraphi2/heartbeat',
  'OCPP/Elex_Samutsongkhram4_1/heartbeat',
  'OCPP/PT100_Samutprakan5_DC_1/heartbeat',
  'OCPP/PT_Sangkha3/heartbeat',
  'OCPP/PT_100Siracha7/heartbeat',
  'OCPP/EleX_PT100_Sikhio6_1/heartbeat',
  'OCPP/EleX_PT100_Tak2_1/heartbeat',
  'OCPP/PT100_ThanonSukprayu1/heartbeat',
  'OCPP/ThanonChaoKhunThahan3/heartbeat',
  'OCPP/Elex_PT100_ThanonRatUthit2_1/heartbeat',
  'OCPP/Elex_DC_PT_ThaMaka3_1/heartbeat',
  'OCPP/Elex_BPTG_Tak_1/heartbeat',
  'OCPP/PT100_Thoen3/heartbeat',
  'OCPP/EleX_TaSai2_1/heartbeat',
  'OCPP/ThanonPhutthaBucha1/heartbeat',
  'OCPP/Thepharak4/heartbeat',
  'OCPP/Taphong3/heartbeat',
  'OCPP/Thanon_Chan/heartbeat',
  'OCPP/PT_UdonThani_1/heartbeat',
  'OCPP/PT_UThai/heartbeat',
  'OCPP/PT100_Uttaradit/heartbeat',
  'OCPP/Vibhavadi/heartbeat',
  'OCPP/Elex_DC_PT_Wachirabarami1_1/heartbeat',
  'OCPP/PT_Wangnoi4/heartbeat',
  'OCPP/PT_Wangnoi3/heartbeat',
  'OCPP/Elex_DC_PT_Wattananakhon3_1/heartbeat',
  'OCPP/Yasothon/heartbeat',
  'OCPP/Phutthamonthon3/heartbeat',

//Temp

'Amphawa1',
'BanPo3',
'Banbueng10',
'Banbueng9',
'Banbueng1',
'Luang3',
'BanKhai5',
'BangKhla4',
'BanNaDoem',
'Samutprakan2',
'KungPhatthana',
'Thepharak4',
'Thaya3',
'KaengKhoi2',
    

///PI5

"OCPP/Ayuthaya3/heartbeatPI5",
"OCPP/Amphawa1/heartbeatPI5",
"OCPP/BanNaDoem/heartbeatPI5",
"OCPP/BangPahan4/heartbeatPI5",
"OCPP/BangnaTrad1/heartbeatPI5",
"OCPP/BangKhunThian1/heartbeatPI5",
"OCPP/Banbueng1/heartbeatPI5",
"OCPP/Banbueng9/heartbeatPI5",
"OCPP/Banbueng10/heartbeatPI5",
"OCPP/Bangpokong2/heartbeatPI5",
"OCPP/Bangpakong3/heartbeatPI5",
"OCPP/BanKhai5/heartbeatPI5",
"OCPP/BanPo3/heartbeatPI5",
"OCPP/Bangphra2/heartbeatPI5",
"OCPP/BangKhla4/heartbeatPI5",
"OCPP/Bangpahan/heartbeatPI5",
"OCPP/BangnaTrad2/heartbeatPI5",
"OCPP/BangPhra3/heartbeatPI5",
"OCPP/BangPaIn3/heartbeatPI5",
"OCPP/Bangpakong/heartbeatPI5",
"OCPP/BanTak1/heartbeatPI5",
"OCPP/Banglamuung11/heartbeatPI5",
"OCPP/BangBuaThong4/heartbeatPI5",
"OCPP/BangBuaThong9/heartbeatPI5",
"OCPP/BangBuaTong12/heartbeatPI5",
"OCPP/BanphotPhisai3/heartbeatPI5",
"OCPP/BuengKum3/heartbeatPI5",
"OCPP/CharoenRat/heartbeatPI5",
"OCPP/Chiangmai1/heartbeatPI5",
"OCPP/Chiangrai7/heartbeatPI5",
"OCPP/Chatturat/heartbeatPI5",
"OCPP/Chanthaburi/heartbeatPI5",
"OCPP/ChalongKrung1/heartbeatPI5",
"OCPP/ChalongKrung2/heartbeatPI5",
"OCPP/Chachoengsao9/heartbeatPI5",
"OCPP/Chachoengsao10/heartbeatPI5",
"OCPP/EDS_Wangnoi/heartbeatPI5",
"OCPP/EGCO/heartbeatPI5",
"OCPP/Hangchat2/heartbeatPI5",
"OCPP/HangDong7/heartbeatPI5",
"OCPP/HuaiPhueng/heartbeatPI5",
"OCPP/JPARK1/heartbeatPI5",
"OCPP/Phraekkasa/heartbeatPI5",
"OCPP/KungPhatthana/heartbeatPI5",
"OCPP/KabinBuri9/heartbeatPI5",
"OCPP/KrungthepKreetha2/heartbeatPI5",
"OCPP/Klong4/heartbeatPI5",
"OCPP/Klongluang3/heartbeatPI5",
"OCPP/Klongluang4/heartbeatPI5",
"OCPP/KhlongLuang6/heartbeatPI5",
"OCPP/Klongluang10/heartbeatPI5",
"OCPP/KabinBuri7/heartbeatPI5",
"OCPP/KingKaew2/heartbeatPI5",
"OCPP/KuiBuri/heartbeatPI5",
"OCPP/Kanchanapisek1/heartbeatPI5",
"OCPP/Kanchanapisek2/heartbeatPI5",
"OCPP/KhaoKhansong/heartbeatPI5",
"OCPP/Klaeng11/heartbeatPI5",
"OCPP/Klaeng12/heartbeatPI5",
"OCPP/KamphaengPhet2/heartbeatPI5",
"OCPP/KamphaengPhet/heartbeatPI5",
"OCPP/KrokPhra2/heartbeatPI5",
"OCPP/KaengKhoi2/heartbeatPI5",
"OCPP/Thepharak2/heartbeatPI5",
"OCPP/Thungtako1/heartbeatPI5",
"OCPP/Ratchaphruek/heartbeatPI5",
"OCPP/LiangMuangChon1/heartbeatPI5",
"OCPP/LamLukKa8/heartbeatPI5",
"OCPP/LatLumKaeo6/heartbeatPI5",
"OCPP/Lamae3/heartbeatPI5",
"OCPP/LatPlaDuk2/heartbeatPI5",
"OCPP/lamphun2/heartbeatPI5",
"OCPP/Latkrabang6/heartbeatPI5",
"OCPP/Mukdahan1/heartbeatPI5",
"OCPP/MahaSarakham1/heartbeatPI5",
"OCPP/MahaSarakham2/heartbeatPI5",
"OCPP/MahaSarakham/heartbeatPI5",
"OCPP/MaeChan/heartbeatPI5",
"OCPP/Manorom2/heartbeatPI5",
"OCPP/NongKhae/heartbeatPI5",
"OCPP/NongRuea4/heartbeatPI5",
"OCPP/Nongki/heartbeatPI5",
"OCPP/NongKhaem/heartbeatPI5",
"OCPP/Nhao/heartbeatPI5",
"OCPP/NonthaburiBridge/heartbeatPI5",
"OCPP/NakhonLuang4/heartbeatPI5",
"OCPP/NimitMai2/heartbeatPI5",
"OCPP/Nikompattana5/heartbeatPI5",
"OCPP/NongKhae5/heartbeatPI5",
"OCPP/NamPhong/heartbeatPI5",
"OCPP/NonSung3/heartbeatPI5",
"OCPP/NakhonRatchasima8/heartbeatPI5",
"OCPP/Nakhonratchasima12/heartbeatPI5",
"OCPP/NakhonPathom9/heartbeatPI5",
"OCPP/NongBunMak2/heartbeatPI5",
"OCPP/NakhonSawan2/heartbeatPI5",
"OCPP/PakChong5/heartbeatPI5",
"OCPP/Prawet4/heartbeatPI5",
"OCPP/Phutthamonthon4/heartbeatPI5",
"OCPP/Prasat6/heartbeatPI5",
"OCPP/PaIn1/heartbeatPI5",
"OCPP/PhanatNikhom3/heartbeatPI5",
"OCPP/PhromPhiram6/heartbeatPI5",
"OCPP/Pai1_Silhouette/heartbeatPI5",
"OCPP/Phratep1/heartbeatPI5",
"OCPP/PakChong2/heartbeatPI5",
"OCPP/Phutthamonthon5/heartbeatPI5",
"OCPP/PhanatNikhom7/heartbeatPI5",
"OCPP/Phitsanulok3/heartbeatPI5",
"OCPP/PakThongChai2/heartbeatPI5",
"OCPP/PhromBuri2/heartbeatPI5",
"OCPP/Phatthananikhom2/heartbeatPI5",
"OCPP/Phitsanulok5/heartbeatPI5",
"OCPP/PhanThong3/heartbeatPI5",
"OCPP/Phetchabun1/heartbeatPI5",
"OCPP/Pranburi2/heartbeatPI5",
"OCPP/Phatthananikhom1/heartbeatPI5",
"OCPP/PhanomSarakham2/heartbeatPI5",
"OCPP/RamInthra40/heartbeatPI5",
"OCPP/Rama2km53/heartbeatPI5",
"OCPP/Rama2km26/heartbeatPI5",
"OCPP/Ratchaburi7/heartbeatPI5",
"OCPP/SanSai4/heartbeatPI5",
"OCPP/Siracha8/heartbeatPI5",
"OCPP/SanKamphaeng6/heartbeatPI5",
"OCPP/SamRoiYot1/heartbeatPI5",
"OCPP/SaphanSung/heartbeatPI5",
"OCPP/SuwinthawonKm28/heartbeatPI5",
"OCPP/SamKhok3/heartbeatPI5",
"OCPP/SNR1/heartbeatPI5",
"OCPP/Samutprakan2/heartbeatPI5",
"OCPP/SopPrap/heartbeatPI5",
"OCPP/Sikhio1/heartbeatPI5",
"OCPP/Swangweerawong/heartbeatPI5",
"OCPP/Saraphi2/heartbeatPI5",
"OCPP/Samutsongkhram4/heartbeatPI5",
"OCPP/Samutprakan5/heartbeatPI5",
"OCPP/Sangkha3/heartbeatPI5",
"OCPP/Siracha7/heartbeatPI5",
"OCPP/Sikhio6/heartbeatPI5",
"OCPP/Tak2/heartbeatPI5",
"OCPP/ThanonSukprayu1/heartbeatPI5",
"OCPP/ThanonChaoKhunThahan3/heartbeatPI5",
"OCPP/ThanonRatUthit2/heartbeatPI5",
"OCPP/ThaMaka3/heartbeatPI5",
"OCPP/Tak/heartbeatPI5",
"OCPP/Thoen3/heartbeatPI5",
"OCPP/TaSai2/heartbeatPI5",
"OCPP/ThanonPhutthaBucha1/heartbeatPI5",
"OCPP/Thepharak4/heartbeatPI5",
"OCPP/Taphong3/heartbeatPI5",
"OCPP/ThanonChan/heartbeatPI5",
"OCPP/UdonThani/heartbeatPI5",
"OCPP/UThai/heartbeatPI5",
"OCPP/Uttaradit/heartbeatPI5",
"OCPP/VibhavadiRangsit1/heartbeatPI5",
"OCPP/Wachirabarami1/heartbeatPI5",
"OCPP/Wangnoi4/heartbeatPI5",
"OCPP/Wangnoi3/heartbeatPI5",
"OCPP/Wattananakhon3/heartbeatPI5",
"OCPP/Yasothon/heartbeatPI5",
"OCPP/Phutthamonthon3/heartbeatPI5",


//PowerModule
"OCPP/Ayuthaya3/PowerModule",
"OCPP/Amphawa1/PowerModule",
"OCPP/BanNaDoem/PowerModule",
"OCPP/BangPahan4/PowerModule",
"OCPP/BangnaTrad1/PowerModule",
"OCPP/BangKhunThian1/PowerModule",
"OCPP/Banbueng1/PowerModule",
"OCPP/Banbueng9/PowerModule",
"OCPP/Banbueng10/PowerModule",
"OCPP/Bangpokong2/PowerModule",
"OCPP/Bangpakong3/PowerModule",
"OCPP/BanKhai5/PowerModule",
"OCPP/BanPo3/PowerModule",
"OCPP/Bangphra2/PowerModule",
"OCPP/BangKhla4/PowerModule",
"OCPP/BangnaTrad2/PowerModule",
"OCPP/BangPhra3/PowerModule",
"OCPP/BangPaIn3/PowerModule",
"OCPP/Bangpakong/PowerModule",
"OCPP/BanTak1/PowerModule",
"OCPP/Banglamuung11/PowerModule",
"OCPP/BangBuaThong4/PowerModule",
"OCPP/BangBuaThong9/PowerModule",
"OCPP/BangBuaTong12/PowerModule",
"OCPP/BanphotPhisai3/PowerModule",
"OCPP/BuengKum3/PowerModule",
"OCPP/CharoenRat/PowerModule",
"OCPP/Chiangmai1/PowerModule",
"OCPP/Chiangrai7/PowerModule",
"OCPP/Chatturat/PowerModule",
"OCPP/Chanthaburi/PowerModule",
"OCPP/ChalongKrung1/PowerModule",
"OCPP/ChalongKrung2/PowerModule",
"OCPP/Chachoengsao9/PowerModule",
"OCPP/Chachoengsao10/PowerModule",
"OCPP/EDS_Wangnoi/PowerModule",
"OCPP/EGCO/PowerModule",
"OCPP/Hangchat2/PowerModule",
"OCPP/HangDong7/PowerModule",
"OCPP/HuaiPhueng/PowerModule",
"OCPP/JPARK1/PowerModule",
"OCPP/Phraekkasa/PowerModule",
"OCPP/KungPhatthana/PowerModule",
"OCPP/KabinBuri9/PowerModule",
"OCPP/KrungthepKreetha2/PowerModule",
"OCPP/Klong4/PowerModule",
"OCPP/Klongluang3/PowerModule",
"OCPP/Klongluang4/PowerModule",
"OCPP/KhlongLuang6/PowerModule",
"OCPP/Klongluang10/PowerModule",
"OCPP/KabinBuri7/PowerModule",
"OCPP/KingKaew2/PowerModule",
"OCPP/KuiBuri/PowerModule",
"OCPP/Kanchanapisek1/PowerModule",
"OCPP/Kanchanapisek2/PowerModule",
"OCPP/KhaoKhansong/PowerModule",
"OCPP/Klaeng11/PowerModule",
"OCPP/Klaeng12/PowerModule",
"OCPP/KamphaengPhet2/PowerModule",
"OCPP/KamphaengPhet/PowerModule",
"OCPP/KrokPhra2/PowerModule",
"OCPP/KaengKhoi2/PowerModule",
"OCPP/Thepharak2/PowerModule",
"OCPP/Thungtako1/PowerModule",
"OCPP/Ratchaphruek/PowerModule",
"OCPP/LiangMuangChon1/PowerModule",
"OCPP/LamLukKa8/PowerModule",
"OCPP/LatLumKaeo6/PowerModule",
"OCPP/Lamae3/PowerModule",
"OCPP/LatPlaDuk2/PowerModule",
"OCPP/lamphun2/PowerModule",
"OCPP/Latkrabang6/PowerModule",
"OCPP/Mukdahan1/PowerModule",
"OCPP/MahaSarakham1/PowerModule",
"OCPP/MahaSarakham2/PowerModule",
"OCPP/MahaSarakham/PowerModule",
"OCPP/MaeChan/PowerModule",
"OCPP/Manorom2/PowerModule",
"OCPP/NongKhae/PowerModule",
"OCPP/NongRuea4/PowerModule",
"OCPP/Nongki/PowerModule",
"OCPP/NongKhaem/PowerModule",
"OCPP/Nhao/PowerModule",
"OCPP/NonthaburiBridge/PowerModule",
"OCPP/NakhonLuang4/PowerModule",
"OCPP/NimitMai2/PowerModule",
"OCPP/Nikompattana5/PowerModule",
"OCPP/NongKhae5/PowerModule",
"OCPP/NamPhong/PowerModule",
"OCPP/NonSung3/PowerModule",
"OCPP/NakhonRatchasima8/PowerModule",
"OCPP/Nakhonratchasima12/PowerModule",
"OCPP/NakhonPathom9/PowerModule",
"OCPP/NongBunMak2/PowerModule",
"OCPP/NakhonSawan2/PowerModule",
"OCPP/PakChong5/PowerModule",
"OCPP/Prawet4/PowerModule",
"OCPP/Phutthamonthon4/PowerModule",
"OCPP/Prasat6/PowerModule",
"OCPP/PaIn1/PowerModule",
"OCPP/PhanatNikhom3/PowerModule",
"OCPP/PhromPhiram6/PowerModule",
"OCPP/Pai1_Silhouette/PowerModule",
"OCPP/Phratep1/PowerModule",
"OCPP/PakChong2/PowerModule",
"OCPP/Phutthamonthon5/PowerModule",
"OCPP/PhanatNikhom7/PowerModule",
"OCPP/Phitsanulok3/PowerModule",
"OCPP/PakThongChai2/PowerModule",
"OCPP/PhromBuri2/PowerModule",
"OCPP/Phatthananikhom2/PowerModule",
"OCPP/Phitsanulok5/PowerModule",
"OCPP/PhanThong3/PowerModule",
"OCPP/Phetchabun1/PowerModule",
"OCPP/Pranburi2/PowerModule",
"OCPP/Phatthananikhom1/PowerModule",
"OCPP/PhanomSarakham2/PowerModule",
"OCPP/RamInthra40/PowerModule",
"OCPP/Rama2km53/PowerModule",
"OCPP/Rama2km26/PowerModule",
"OCPP/Ratchaburi7/PowerModule",
"OCPP/SanSai4/PowerModule",
"OCPP/Siracha8/PowerModule",
"OCPP/SanKamphaeng6/PowerModule",
"OCPP/SamRoiYot1/PowerModule",
"OCPP/SaphanSung/PowerModule",
"OCPP/SuwinthawonKm28/PowerModule",
"OCPP/SamKhok3/PowerModule",
"OCPP/SNR1/PowerModule",
"OCPP/Samutprakan2/PowerModule",
"OCPP/SopPrap/PowerModule",
"OCPP/Sikhio1/PowerModule",
"OCPP/Swangweerawong/PowerModule",
"OCPP/Saraphi2/PowerModule",
"OCPP/Samutsongkhram4/PowerModule",
"OCPP/Samutprakan5/PowerModule",
"OCPP/Sangkha3/PowerModule",
"OCPP/Siracha7/PowerModule",
"OCPP/Sikhio6/PowerModule",
"OCPP/Tak2/PowerModule",
"OCPP/ThanonSukprayu1/PowerModule",
"OCPP/ThanonChaoKhunThahan3/PowerModule",
"OCPP/ThanonRatUthit2/PowerModule",
"OCPP/ThaMaka3/PowerModule",
"OCPP/Tak/PowerModule",
"OCPP/Thoen3/PowerModule",
"OCPP/TaSai2/PowerModule",
"OCPP/ThanonPhutthaBucha1/PowerModule",
"OCPP/Thepharak4/PowerModule",
"OCPP/Taphong3/PowerModule",
"OCPP/ThanonChan/PowerModule",
"OCPP/UdonThani/PowerModule",
"OCPP/UThai/PowerModule",
"OCPP/Uttaradit/PowerModule",
"OCPP/VibhavadiRangsit1/PowerModule",
"OCPP/Wachirabarami1/PowerModule",
"OCPP/Wangnoi4/PowerModule",
"OCPP/Wangnoi3/PowerModule",
"OCPP/Wattananakhon3/PowerModule",
"OCPP/Yasothon/PowerModule",
"OCPP/Bangpahan/PowerModule",
"OCPP/Phutthamonthon3/PowerModule"






  ];*/

//  mqttTopics.forEach(topic => {
//    client.subscribe(topic, err => {
//      if (err) console.error(`❌ Failed to subscribe to topic: ${topic}`);
//    });
//  });
//});

const stationState = {}; // 📦 เก็บสถานะและเวลาแบบถาวร
const stationTimestamps = {};







function getStationIdFromTopic(topic) {
  // 🔍 ตรวจ exact match ก่อน
  for (const stationId in stationMetaMap) {
    const meta = stationMetaMap[stationId];
    if (
      topic === meta.topic ||
      topic === meta.pi5Topic ||
      topic === meta.powerModuleTopic ||
      topic === meta.tempTopic
    ) {
      return stationId;
    }
  }

  // 🧠 fallback แบบ fuzzy match (ปลอดภัยน้อยกว่า)
  for (const stationId in stationMetaMap) {
    const meta = stationMetaMap[stationId];
    if (
      topic.includes(meta.mqttName) ||
      topic.includes(meta.payloadName)
    ) {
      return stationId;
    }
  }

  return null;
}



function getStationIdFromPayload(payloadStr) {
  return Object.entries(stationMetaMap).find(([id, meta]) =>
    payloadStr.includes(meta.payloadName)
  )?.[0];
}


function normalizePayload(topic, payload) {
  try {
    const payloadStr = payload.toString();
    console.log("🧪 Incoming topic:", topic);
    console.log("🧪 Payload string:", payloadStr);
    const parsed = JSON.parse(payloadStr);
    console.log("🧪 Parsed JSON:", parsed);

    const stationId = getStationIdFromTopic(topic) || getStationIdFromPayload(payloadStr);
    if (!stationId) {
      console.warn("❗ stationId ไม่พบสำหรับ topic:", topic);
      return null;
    }

    if (topic.includes('/heartbeatPI5')) {
      return {
        stationId,
        heartbeat: null,
        temp: null,
        pi5: Number(parsed.heartbeatPI5 ?? parsed.heartbeat ?? null)
      };
    }

    if (topic.includes('/heartbeat')) {
      return {
        stationId,
        heartbeat: parsed.heartbeat ?? null,
        temp: null,
        pi5: null
      };
    }

    if (topic.includes('/status')) {
      return {
        stationId,
        heartbeat: null,
        temp: parsed.Status?.temp ?? null,
        pi5: null
      };
    }

    if (parsed.Status?.temp !== undefined) {
      return {
        stationId,
        heartbeat: null,
        temp: parsed.Status.temp,
        pi5: null
      };
    }

    // ✅ ใส่ตรงนี้: รองรับ PowerModule
    if (topic.includes('/PowerModule')) {
      return {
        stationId,
        heartbeat: null,
        temp: null,
        pi5: null,
        powerModule: parsed
      };
    }

    return null;
  } catch (err) {
    console.error("❌ Failed to parse payload:", err);
    return null;
  }
}




client.on("message", (topic, message) => {
  console.log(`📩 MQTT msg on ${topic}: ${message.toString()}`);
  const data = normalizePayload(topic, message);
  console.log("📦 normalizePayload returned:", data);

  if (!data) {
    console.warn("❌ Skipping broadcast: normalizePayload returned null");
    return;
  }

  const stationId = data.stationId;
  if (!stationId) return;

  if (!stationState[stationId]) {
    stationState[stationId] = {
      heartbeat: 1,
      lastOnline: Date.now(),
      deathTimestamp: null,
      temp: null,
      pi5: null,
      powerModule: null,
      powerModuleLastUpdate: null 
    };
  }

  if (data.heartbeat !== null) {
    stationState[stationId].heartbeat = data.heartbeat;
    stationState[stationId].lastOnline = Date.now();
    stationState[stationId].deathTimestamp = null;
  }
  
  if (data.temp !== null) {
    stationState[stationId].temp = data.temp;
  }

  if (data.pi5 !== null) {
    stationState[stationId].pi5 = data.pi5;
    stationState[stationId].pi5LastOnline = Date.now(); // ✅ เพิ่มบรรทัดนี้!
    stationState[stationId].deathTimestamp = null;   // (ถ้าอยากรีเซ็ตเหมือนกัน)
  }

  if (data.powerModule !== null) {
  stationState[stationId].powerModule = {
    ...stationState[stationId].powerModule,
    ...data.powerModule
  };
  stationState[stationId].powerModuleLastUpdate = Date.now();

  // ✅ LOG สำคัญ — ดูผลหลัง merge
  console.log("✅ Merged powerModule for", stationId, stationState[stationId].powerModule);
}



  const frontendId = stationMetaMap[stationId]?.frontendId ?? stationId;
  console.log(`📤 Broadcast to frontend ID ${frontendId} (${stationId})`);
  


  const output = {
    id: frontendId,
    topic,
    heartbeat: stationState[stationId].heartbeat,
    timestamp: stationState[stationId].lastOnline,
    deathTimestamp: stationState[stationId].deathTimestamp,
    temp: stationState[stationId].temp,
    pi5: stationState[stationId].pi5,
    pi5LastOnline: stationState[stationId].pi5LastOnline,
    //powerModule: stationState[stationId].powerModule,
    //powerModuleLastUpdate: stationState[stationId].powerModuleLastUpdate,
    //pmOffline: stationState[stationId].pmOffline || false
  };

  console.log("📤 Broadcasting data:", output);
  broadcastToClients(stationId, output);

  }
);




/*wss.on('connection', ws => {
  wsConnections.set(ws, { connectedAt: Date.now() });
  console.log('🔌 New client connected');
  ws.send(JSON.stringify({ type: "info", message: "Connected to EV Dashboard WebSocket" }));


  ws.on('message', message => {
    try {
      const data = JSON.parse(message);
      const stationId = Object.entries(stationMetaMap).find(
        ([_, meta]) => meta.frontendId === data.id
      )?.[0];
      
      if (!stationId) return;
      
      if (!wsConnections.has(ws)) {
        wsConnections.set(ws, new Set());
      }
      
      wsConnections.get(ws).add(stationId);
      
      console.log(`📝 Client subscribed to station ${stationId}`);
      
    } catch (err) {
      console.error('❌ Error parsing client message:', err.message);
    }
  });

  ws.on('close', () => {
    console.log('❎ WebSocket client disconnected');
    delete wsConnections[ws.id];
  });
});

wss.on('error', err => {
  console.error('❌ WebSocket Server Error:', err.message);
});*/




const stationDeathTimestamps = {}; // 🛠 ประกาศไว้บนสุดเลย




setInterval(() => {
  const now = Date.now();

  for (const id in stationState) {
    const state = stationState[id];

    if (state.heartbeat === 1 && now - state.lastOnline > 5 * 60 * 1000) {
      console.log(`⚠️ Station ${id} OFFLINE`);

      stationState[id].heartbeat = 0;
      stationState[id].deathTimestamp = now;

      const offlineData = {
        id: id,
        heartbeat: 0,
        timestamp: state.lastOnline,
        deathTimestamp: now,
        temp: state.temp
      };

      broadcastToClients(id, offlineData);
    }
  }
}, 60 * 1000);

function broadcastToClients(stationId, data) {
  const isPowerModule = data?.topic?.includes("/PowerModule");

  wss.clients.forEach((client, index) => {
    const subscribedStations = wsConnections.get(client);
    const isSubscribed = subscribedStations?.has(stationId);

    const shouldSend = client.readyState === WebSocket.OPEN &&
                       (isPowerModule || isSubscribed);

    console.log(`🧪 [Client ${index}] Subscribed to station ${stationId}? → ${isSubscribed}`);
    console.log(`🧪 [Client ${index}] isPowerModule: ${isPowerModule}`);
    console.log(`🧪 [Client ${index}] ReadyState: ${client.readyState}`);
    console.log(`🧪 [Client ${index}] Will Send? → ${shouldSend}`);

    if (shouldSend) {
      client.send(JSON.stringify(data));
      console.log(`📤 [Client ${index}] ✅ Sent data for station ${stationId}`);
    } else {
      console.log(`⛔ [Client ${index}] ❌ Skipped`);
    }
  });
}


////////////////////////////////////////////////////////////POWERMODULE

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // ✅ เพิ่มตรงนี้
const path = require('path');
const app = express();

app.use(cors()); // ✅ เปิด CORS ทุก origin

// ✅ Connect MongoDB
const user = 'EDS';
const password = encodeURIComponent('EV1');
const dbName = 'PowerModule';
const uri = `mongodb://${user}:${password}@45.91.135.9:27017/${dbName}?authSource=admin`;

mongoose.connect(uri)
  .then(() => {
    console.log('✅ MongoDB connected');
    testMongo(); // ทดสอบเขียนก่อน
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ ทดสอบเชื่อมต่อ (ใช้ TestModel แยก ไม่ยุ่งกับของจริง)
const TestSchema = new mongoose.Schema({ name: String });
const TestModel = mongoose.model('Test', TestSchema);

async function testMongo() {
  try {
    const doc = await TestModel.create({ name: 'ConnectionTest' });
    console.log('✅ Mongo write success:', doc);
    await TestModel.deleteMany({ name: 'ConnectionTest' });
    console.log('🧹 Test documents cleaned up.');
  } catch (err) {
    console.error('❌ Mongo write failed:', err);
  }
}

// ✅ โหลด Model จริง
const PowerModule = require('./models/PowerModule');

// ✅ API: ดึงข้อมูลล่าสุดของ PowerModule
app.get('/api/powermodule', async (req, res) => {
  const { stationId } = req.query;

  const stationKey = Object.keys(stationMetaMap).find(
    key => stationMetaMap[key].frontendId == Number(stationId)
  );
  if (!stationKey) return res.status(404).json({ error: 'ไม่พบสถานีใน stationMetaMap' });

  const collectionName = stationMetaMap[stationKey].payloadName;
  if (!collectionName) return res.status(404).json({ error: 'ไม่พบชื่อ collection สำหรับสถานีนี้' });

  try {
    const collection = mongoose.connection.db.collection(collectionName);
    const topic = stationMetaMap[stationKey].powerModuleTopic;

    // ✅ หา PM1 ล่าสุด
    const pm1Doc = await collection
      .find({ topic, "payload.PM1": { $ne: null } })
      .sort({ "payload.timestamp": -1 })
      .limit(1)
      .toArray();

    // ✅ หา PM2 ล่าสุด
    const pm2Doc = await collection
      .find({ topic, "payload.PM2": { $ne: null } })
      .sort({ "payload.timestamp": -1 })
      .limit(1)
      .toArray();

    const PM1 = pm1Doc[0]?.payload?.PM1 ?? null;
    const timestamp1 = pm1Doc[0]?.payload?.timestamp ?? null;

    const PM2 = pm2Doc[0]?.payload?.PM2 ?? null;
    const timestamp2 = pm2Doc[0]?.payload?.timestamp ?? null;

    res.json({
      powerModule: {
        PM1,
        timestamp1,
        PM2,
        timestamp2
      }
    });

  } catch (err) {
    console.error("❌ Error querying PowerModule:", err);
    res.status(500).json({ error: 'เกิดข้อผิดพลาดฝั่งเซิร์ฟเวอร์' });
  }
});


app.get('/api/powermodule/all', async (req, res) => {
  try {
    const results = [];

    for (const stationKey of Object.keys(stationMetaMap)) {
      const { frontendId, payloadName, powerModuleTopic } = stationMetaMap[stationKey];

      if (!frontendId || !payloadName || !powerModuleTopic) continue;

      const collection = mongoose.connection.db.collection(payloadName);

      // ดึงค่า PM1 ล่าสุด
      const pm1Doc = await collection
        .find({ topic: powerModuleTopic, "payload.PM1": { $ne: null } })
        .sort({ "payload.timestamp": -1 })
        .limit(1)
        .toArray();

      // ดึงค่า PM2 ล่าสุด
      const pm2Doc = await collection
        .find({ topic: powerModuleTopic, "payload.PM2": { $ne: null } })
        .sort({ "payload.timestamp": -1 })
        .limit(1)
        .toArray();

      results.push({
        stationId: String(frontendId),
        PM1: pm1Doc[0]?.payload?.PM1 ?? null,
        PM2: pm2Doc[0]?.payload?.PM2 ?? null,
        timestamp1: pm1Doc[0]?.payload?.timestamp ?? null,
        timestamp2: pm2Doc[0]?.payload?.timestamp ?? null
      });
    }

    res.json(results);
  } catch (err) {
    console.error("❌ Error in /api/powermodule/all:", err);
    res.status(500).json({ error: "เกิดข้อผิดพลาดในการโหลดข้อมูล PowerModule ทั้งหมด" });
  }
});

// ✅ Serve static files in /public
app.use(express.static(path.join(__dirname, 'public')));


const fallbackPath = path.join(__dirname, 'public/index.html');

app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    res.sendFile(fallbackPath);
  } else {
    next();
  }
});








// ✅ เริ่ม server
/*app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});*/

const http = require('http');
const { WebSocketServer } = require('ws');

const server = http.createServer(app);
/*const wss = new WebSocketServer({ server });*/
const wss = new WebSocketServer({ server, path: "/socket" });

wss.on('connection', ws => {
  wsConnections.set(ws, { connectedAt: Date.now() });
  console.log('🔌 New client connected');
  ws.send(JSON.stringify({ type: "info", message: "Connected to EV Dashboard WebSocket" }));


  ws.on('message', message => {
    try {
      const data = JSON.parse(message);
      const stationId = Object.entries(stationMetaMap).find(
        ([_, meta]) => meta.frontendId === data.id
      )?.[0];
      
      if (!stationId) return;
      
      if (!wsConnections.has(ws)) {
        wsConnections.set(ws, new Set());
      }
      
      wsConnections.get(ws).add(stationId);
      
      console.log(`📝 Client subscribed to station ${stationId}`);
      
    } catch (err) {
      console.error('❌ Error parsing client message:', err.message);
    }
  });

  ws.on('close', () => {
    console.log('❎ WebSocket client disconnected');
    delete wsConnections[ws.id];
  });
});

wss.on('error', err => {
  console.error('❌ WebSocket Server Error:', err.message);
});


wss.on('connection', (ws) => {
  console.log('🔌 WebSocket client connected');
  ws.send('🎉 Hello from WSS on Render!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server + WebSocket running on port ${PORT}`);
});




////////////////////////////////////////////////////////////POWERMODULE
