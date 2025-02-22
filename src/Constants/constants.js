const videos = [
    { id: 1, title: "IDOL", category: "Music", uploader: "BTS", thumbnail: "https://img.youtube.com/vi/pBuZEGYXA6E/0.jpg", url: "pBuZEGYXA6E" },
    { id: 2, title: "AYA", category: "Music", uploader: "MAMAMOO", thumbnail: "https://img.youtube.com/vi/UoI9riNffEU/0.jpg", url: "UoI9riNffEU" },
    { id: 3, title: "Relaxing cooking", category: "Cooking", uploader: "Cooking tree", thumbnail: "https://img.youtube.com/vi/3NvvOVrm1uY/0.jpg", url: "3NvvOVrm1uY" },
    { id: 4, title: "VG Day", category: "Gaming", uploader: "The Official Pokémon", thumbnail: "https://img.youtube.com/vi/2afOI-8tcxg/0.jpg", url: "2afOI-8tcxg" },
    { id: 5, title: "Strategy", category: "Music", uploader: "TWICE", thumbnail: "https://img.youtube.com/vi/Sz_wWzgh-vQ/0.jpg", url: "Sz_wWzgh-vQ" },
    { id: 6, title: "ลูกชุบผักผลไม้", category: "Cooking", uploader: "ป้าหนึ่ง ตึ่งโป๊ะ", thumbnail: "https://img.youtube.com/vi/VNiaUA5D3mQ/0.jpg", url: "VNiaUA5D3mQ" },
    { id: 7, title: "LIAR", category: "Music", uploader: "BUS", thumbnail: "https://img.youtube.com/vi/KQF6M-3URC8/0.jpg", url: "KQF6M-3URC8" },
    { id: 8, title: "ไฮไลท์ฟุตบอล", category: "Sports", uploader: "TrueVisionsOfficial", thumbnail: "https://img.youtube.com/vi/RqBORghElkg/0.jpg", url: "RqBORghElkg" },
    { id: 9, title: "Peach Cake", category: "Cooking", uploader: "Cooking tree", thumbnail: "https://img.youtube.com/vi/Rn8q0CF_RSI/0.jpg", url: "Rn8q0CF_RSI" },
    { id: 10, title: "Honda LPGA", category: "Sports", uploader: "PPTV SPORTS", thumbnail: "https://img.youtube.com/vi/UKN5TbDgekQ/0.jpg", url: "UKN5TbDgekQ" },
    { id: 11, title: "RoV Pro", category: "Gaming", uploader: "Garena RoV Thailand", thumbnail: "https://img.youtube.com/vi/ejvjc9TjYWg/0.jpg", url: "ejvjc9TjYWg" },
    { id: 12, title: "DARARI", category: "Music", uploader: "TREASURE", thumbnail: "https://img.youtube.com/vi/2bCdVnoztc8/0.jpg", url: "2bCdVnoztc8" },
    { id: 13, title: "LOVE SCENARIO", category: "Music", uploader: "iKON", thumbnail: "https://img.youtube.com/vi/vecSVX1QYbQ/0.jpg", url: "vecSVX1QYbQ" },
    { id: 14, title: "Tteokbokki", category: "Cooking", uploader: "Delight", thumbnail: "https://img.youtube.com/vi/ub1WfnpqXFc/0.jpg", url: "ub1WfnpqXFc" },
    { id: 15, title: "พรีวิวพรีเมียร์ลีก", category: "Sports", uploader: "PPTV SPORTS", thumbnail: "https://img.youtube.com/vi/aPWjXlOUdxY/0.jpg", url: "aPWjXlOUdxY" },
    { id: 16, title: "RoV:จัดอันดับตัวเก่ง", category: "Gaming", uploader: "กิต งายย", thumbnail: "https://img.youtube.com/vi/wUAwuutrMB4/0.jpg", url: "wUAwuutrMB4" },
    { id: 17, title: "Mr.Lonely", category: "Music", uploader: "ATLAS", thumbnail: "https://img.youtube.com/vi/fXBOxxhBdL8/0.jpg", url: "fXBOxxhBdL8" },
    { id: 18, title: "Blood Sweat & Tears", category: "Music", uploader: "BTS", thumbnail: "https://img.youtube.com/vi/hmE9f-TEutc/0.jpg", url: "hmE9f-TEutc" },
    { id: 19, title: "Korean meals at home", category: "Cooking", uploader: "Hamzy", thumbnail: "https://img.youtube.com/vi/f6NigurDekg/0.jpg", url: "f6NigurDekg" },
    { id: 20, title: "HARBIN 2025", category: "Sports", uploader: "AIS PLAY", thumbnail: "https://img.youtube.com/vi/ke77PYmXgu8/0.jpg", url: "ke77PYmXgu8" },
    { id: 21, title: "Sanhok Destruction", category: "Gaming", uploader: "PUBG", thumbnail: "https://img.youtube.com/vi/C0q9b6bKdqo/0.jpg", url: "C0q9b6bKdqo" },
    { id: 22, title: "สามชั้นทอด", category: "Cooking", uploader: "กับข้าวกับปลาโอ", thumbnail: "https://img.youtube.com/vi/093Bzk8ahJU/0.jpg", url: "093Bzk8ahJU" },
    { id: 23, title: "DDU-DU DDU-DU", category: "Music", uploader: "BLACKPINK", thumbnail: "https://img.youtube.com/vi/IHNzOHi8sJs/0.jpg", url: "IHNzOHi8sJs" },
    { id: 24, title: "APT", category: "Music", uploader: "ROSÉ & Bruno Mars", thumbnail: "https://img.youtube.com/vi/ekr2nIex040/0.jpg", url: "ekr2nIex040" },
    { id: 25, title: "Bento Boxes", category: "Cooking", uploader: "Hanako's kitchen", thumbnail: "https://img.youtube.com/vi/PmNSvttyYJg/0.jpg", url: "PmNSvttyYJg" },
    { id: 26, title: "PYTHON'", category: "Music", uploader: "GOT7", thumbnail: "https://img.youtube.com/vi/4d5C_PQl8Tg/0.jpg", url: "4d5C_PQl8Tg" },
    { id: 27, title: "Energetic", category: "Music", uploader: "Wanna One", thumbnail: "https://img.youtube.com/vi/EVaV7AwqBWg/0.jpg", url: "EVaV7AwqBWg" },
    { id: 28, title: "เครปเย็นไส้ทะลัก", category: "Cooking", uploader: "ป้าหนึ่ง ตึ่งโป๊ะ", thumbnail: "https://img.youtube.com/vi/AL35aTBz4YQ/0.jpg", url: "AL35aTBz4YQ" },
    
  ];
  
  const categories = ["All", "Music", "Cooking", "Sports", "Gaming"];

  export {
    videos,
    categories,
  };