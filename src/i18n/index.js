import { createI18n } from 'vue-i18n'

// This object contains the app full text in 3 languages: Chinese, Thai, and Vietnamese 
const messages = {
  zh: {
    nav: {
      home: "首页",
      leagueResults: "联赛结果",
      faq: "FAQ",
      aboutUs: "关于我们",
      contactUs: "联系我们"
    },
    leagueResults: {
      issue: "期号",
      startingTime: "开始时间",
      endTime: "结束时间",
      result: "结果",
      operate: "操作",
      playback: "回放",
      goTo: "前往",
      page: "页",
      itemsInTotal: "总共",
      itemsPerPage: "每页",
      live: "直播",
      hour: " 小时",
      minute: "分钟 ",
      second: "秒",
      info: '信息 '
    },
    footer:{
      total: '总共',
      page: '页',
      goTo: '前往'
    }
  },
  tai: {
    nav: {
      home: "Trang đầu",
      leagueResults: "Kết quả giải đấu",
      faq: "FAQ",
      aboutUs: "Về chúng tôi",
      contactUs: "Liên hệ chúng tôi"
    },
    leagueResults: {
      issue: "เลขที่",
      startingTime: "เวลาเริ่มต้น",
      endTime: "เวลาสิ้นสุด",
      result: "ผลลัพธ์",
      operate: "ดำเนินงาน",
      playback: "เล่นกลับ",
      goTo: "ไปที่",
      page: "หน้า",
      itemsInTotal: "รวม",
      itemsPerPage: "ต่อหน้า",
      live: "สตรีมมิงแบบสด",
      hour: "ชั่วโมง",
      minute: "นาที",
      second: "วินาที",
      info: 'ข้อมูล '
    },
    footer:{
      total: 'รวม',
      page: 'หน้า',
      goTo: 'ไปที่'
    }
  },
  yue: {
    nav: {
      home: "หน้าแรก",
      leagueResults: "ผลการแข่งขันลีก",
      faq: "FAQ",
      aboutUs: "เกี่ยวกับเรา",
      contactUs: "ติดต่อเรา"
    },
    leagueResults: {
      issue: "KHÔNG.",
      startingTime: "thời gian bắt đầu",
      endTime: "Thời gian kết thúc",
      result: "kết quả",
      operate: "vận hành",
      playback: "phát lại",
      goTo: "đi đến",
      page: "trang",
      itemsInTotal: "Tổng cộng",
      itemsPerPage: "mỗi trang",
      live: "video trực tiếp",
      hour: "Giờ ",
      minute: "Phút ",
      second: "Giây ",
      info: 'Thông tin'
    },
    footer:{
      total: 'Tổng cộng',
      page: 'Trang',
      goTo: 'Đi đến'
    }
  }
}

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  messages,
  globalInjection: true
})
