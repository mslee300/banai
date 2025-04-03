import Header from './components/Header';
import CarouselSection from './components/CarouselSection';
import Banner from './components/Banner';

export default function Home() {
  const recommendedProfiles = [
    {
      imageSrc: '/profiles/lana-condor.png',
      name: 'Lana Condor',
      description: "Nữ diễn viên gốc Việt tỏa sáng tại Hollywood với vai diễn trong 'To All the Boys I've Loved Before'.",
      nickname: '@MeoMupMiem'
    },
    {
      imageSrc: '/profiles/ty-quay.png',
      name: 'Tý Quậy',
      description: "Cậu học trò nghịch ngợm nhưng thông minh, luôn mang đến những câu chuyện hài hước và ý nghĩa.",
      nickname: '@NguyenCode'
    },
    {
      imageSrc: '/profiles/den-vau.png',
      name: 'Đen Vâu',
      description: "Rapper với phong cách mộc mạc, lời rap chân thật chạm đến trái tim người nghe.",
      nickname: '@BanTraDa'
    },
    {
      imageSrc: '/profiles/xa-xe.png',
      name: 'Xã Xệ and Lý Toét',
      description: "Cặp đôi biếm họa kinh điển, phản ánh xã hội xưa một cách hài hước.",
      nickname: '@CayBuoiNhaTo'
    },
    {
      imageSrc: '/profiles/ba-giai.png',
      name: 'Ba Giai and Tú Xuất',
      description: "Bộ đôi lém lỉnh, nổi tiếng với những trò đùa dân gian thú vị.",
      nickname: '@LapTrinhLaChanh'
    },
    {
      imageSrc: '/profiles/bich.png',
      name: 'Bích Phương',
      description: "Nữ ca sĩ ballad với loạt hit tình cảm chạm đến trái tim.",
      nickname: '@BaDaoChuaBaoGio'
    }
  ];

  const featuredProfiles = [
    {
      imageSrc: '/profiles/hesman.png',
      name: 'Dũng sĩ Hesman',
      description: "Siêu robot không lồ, biểu tượng của lòng dũng cảm và chính nghĩa trong truyện tranh Việt.",
      nickname: '@HesmanOfficial'
    },
    {
      imageSrc: '/profiles/son-tung.png',
      name: 'Sơn Tùng M-TP',
      description: "Ca sĩ hàng đầu V-pop, nổi bật với phong cách âm nhạc độc đáo và loạt hit đình đám.",
      nickname: '@MTP'
    },
    {
      imageSrc: '/profiles/maggie.png',
      name: 'Maggie Q',
      description: "Nữ diễn viên hành động gốc Việt, nổi tiếng với vai chính trong series 'Nikita' và các phim Hollywood.",
      nickname: '@MaggieQ'
    },
    {
      imageSrc: '/profiles/trang.png',
      name: 'Trạng Quỳnh',
      description: "Nhân vật dân gian, nổi tiếng với trí thông minh và những câu chuyện hài hước.",
      nickname: '@OtHiemLevel99'
    },
    {
      imageSrc: '/profiles/noo.png',
      name: 'Noo Phước Thịnh',
      description: "Hoàng tử V-pop, chinh phục khán giả bằng giọng hát ngọt ngào.",
      nickname: '@LanhLungMaDeThuong'
    },
    {
      imageSrc: '/profiles/toc.png',
      name: 'Tóc Tiên',
      description: "Ca sĩ cá tính, phong cách hiện đại và âm nhạc sôi động.",
      nickname: '@TuoiThoLaDay'
    }
    
  ];

  const popularProfiles = [
    {
      imageSrc: '/profiles/hochiminh.png',
      name: 'Hồ Chí Minh',
      description: "Lãnh tụ vĩ đại, người cha già kính yêu của dân tộc Việt Nam.",
      nickname: '@NghiNgoToanTap'
    },
    {
      imageSrc: '/profiles/suboi.png',
      name: 'Suboi',
      description: "Nữ hoàng rap Việt, chất riêng không lẫn vào đâu.",
      nickname: '@BoSuuTapTinhTe'
    },
    {
      imageSrc: '/profiles/tran.png',
      name: 'Trấn Thành',
      description: "MC đa tài, diễn viên hài hước, chinh phục mọi khán giả.",
      nickname: '@TraSuaLaChanLy'
    },
    {
      imageSrc: '/profiles/min.png',
      name: 'Min',
      description: "Nữ ca sĩ đa tài, từ vũ đạo đến giọng hát đều cuốn hút.",
      nickname: '@ThangBeCung'
    },
    {
      imageSrc: '/profiles/erik.png',
      name: 'Erik',
      description: "Giọng ca trẻ triển vọng, ghi dấu với nhiều bản hit ballad.",
      nickname: '@BacSiTamLy'
    },
    {
      imageSrc: '/profiles/sailor-moon.png',
      name: 'Sailor Moon',
      description: "Chiến binh xinh đẹp trong bộ đồng phục thủy thủ, bảo vệ tình yêu và công lý.",
      nickname: '@DoiKhongNhuLaMo'
    }
  ];

  const trendingProfiles = [
    {
      imageSrc: '/profiles/ho.png',
      name: 'Hồ Ngọc Hà',
      description: "Nữ hoàng giải trí, giọng ca đầy cảm xúc và phong cách.",
      nickname: '@AnhCoder'
    },
    {
      imageSrc: '/profiles/chi-pu.png',
      name: 'Chi Pu',
      description: "Từ hot girl đến ca sĩ, diễn viên đa năng, luôn đổi mới.",
      nickname: '@ConCaHe'
    },
    {
      imageSrc: '/profiles/hoa-minzy.png',
      name: 'Hòa Minzy',
      description: "Giọng ca nội lực, quán quân 'Học viện ngôi sao' đầy triển vọng.",
      nickname: '@NguoiHayCuoi'
    },
    {
      imageSrc: '/profiles/phurong.png',
      name: 'Phương Ly',
      description: "Ca sĩ trẻ với phong cách dễ thương và âm nhạc bắt tai.",
      nickname: '@VoCucVaHonThe'
    },
    {
      imageSrc: '/profiles/doraemon.png',
      name: 'Doraemon',
      description: "Chú mèo máy đến từ tương lai, bạn thân của Nobita, luôn giúp đỡ bằng bảo bối thần kỳ.",
      nickname: '@ChuTichHoiFan'
    },
    {
      imageSrc: '/profiles/tom-and-jerry.png',
      name: 'Tom and Jerry',
      description: "Cặp đôi mèo và chuột huyền thoại, mang đến những màn rượt đuổi hài hước.",
      nickname: '@ChoiGameChua'
    }
  ];

  const newProfiles = [
    {
      imageSrc: '/profiles/issac.png',
      name: 'Isaac',
      description: "Cựu trưởng nhóm 365, ca sĩ điển trai với giọng hát cuốn hút.",
      nickname: '@CauBeUBu'
    },
    {
      imageSrc: '/profiles/khoi.png',
      name: 'Khởi My',
      description: "Ca sĩ trẻ trung, năng động, ghi dấu với nhiều bản hit tuổi teen.",
      nickname: '@BanhMiNong'
    },
    {
      imageSrc: '/profiles/le-ti.png',
      name: 'Lê Tí',
      description: "Thần đồng đất Việt, cậu bé thông minh giải quyết mọi thử thách.",
      nickname: '@BanMaiXanh'
    },
    {
      imageSrc: '/profiles/karik.png',
      name: 'Karik',
      description: "Rapper cá tính, giám khảo 'Rap Việt', ghi dấu với nhiều bản rap chất lượng.",
      nickname: '@CauBeUBu'
    },
    {
      imageSrc: '/profiles/nu.png',
      name: 'Nu, pogodi!',
      description: "Sói và Thỏ, cặp đôi hoạt hình Nga với những màn rượt đuổi kinh điển.",
      nickname: '@BanhMiNong'
    },
    {
      imageSrc: '/profiles/hurong-tram.png',
      name: 'Hương Tràm',
      description: "Quán quân 'The Voice', giọng ca đầy cảm xúc và nội lực.",
      nickname: '@BanMaiXanh'
    }
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <Banner />
      <div style={{ paddingTop: "10px", paddingBottom: "80px" }}>
        <CarouselSection title="Đề xuất" profiles={recommendedProfiles} />
        <CarouselSection title="Nổi bật" profiles={featuredProfiles} />
        <CarouselSection title="Phổ biến" profiles={popularProfiles} />
        <CarouselSection title="Thịnh hành" profiles={trendingProfiles} />
        <CarouselSection title="Mới nhất" profiles={newProfiles} />
      </div>
    </div>
  );
}