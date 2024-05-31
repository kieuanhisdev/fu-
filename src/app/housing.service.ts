import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [
    {
      name: 'Onepunch Man',
      photo: `https://i.truyenvua.com/ebook/190x247/onepunch-man_1552232163.jpg?gt=hdfgdfg&mobile=2`,
      id: 1,
      profile: 'Onepunch-Man là một Manga thể loại siêu anh hùng với đặc trưng phồng tôm đấm phát chết luôn… Lol!!! Nhân vật chính trong Onepunch-man là Saitama, một con người mà nhìn đâu cũng thấy “tầm thường”, từ khuôn mặt vô hồn, cái đầu trọc lóc, cho tới thể hình long tong. Tuy nhiên, con người nhìn thì tầm thường này lại chuyên giải quyết những vấn đề hết sức bất thường. Anh thực chất chính là một siêu anh hùng luôn tìm kiếm cho mình một đối thủ mạnh. Vấn đề là, cứ mỗi lần bắt gặp một đối thủ tiềm năng, thì đối thủ nào cũng như đối thủ nào, chỉ ăn một đấm của anh là… chết luôn. Liệu rằng Onepunch-Man Saitaman có thể tìm được cho mình một kẻ ác dữ dằn đủ sức đấu với anh? Hãy theo bước Saitama trên con đường một đấm tìm đối cực kỳ hài hước của anh!!'
    },
    {
      name: 'Võ Luyện Đỉnh Phong',
      photo: `https://i.truyenvua.com/ebook/190x247/vo-luyen-dinh-phong_1514903369.jpg?gt=hdfgdfg&mobile=2`,
      id: 2,
      profile: `Võ đạo đỉnh phong, là cô độc, là tịch mịch, là dài đằng đẵng cầu tác, là cao xử bất thắng hàn
      Phát triển trong nghịch cảnh, cầu sinh nơi tuyệt địa, bất khuất không buông tha, mới có thể có thể phá võ chi cực đạo.
      Lăng Tiêu các thí luyện đệ tử kiêm quét rác gã sai vặt Dương Khai ngẫu lấy được một bản vô tự hắc thư, từ nay về sau đạp vào dài đằng đẵng võ đạo.`
    },
    {
      name: 'Thầy Cúng Đại Chiến',
      photo: `https://i.truyenvua.com/ebook/190x247/jujutsu-kaisen_1531626913.jpg?gt=hdfgdfg&mobile=2`,
      id: 3,
      profile: `Yuuji Itadori là một thiên tài có tốc độ và sức mạnh, nhưng cậu ấy muốn dành thời gian của mình trong Câu lạc bộ Tâm Linh. Một ngày sau cái chết của ông mình, anh gặp Megumi Fushiguro, người đang tìm kiếm vật thể bị nguyền rủa mà các thành viên CLB đã tìm thấy.
      Đối mặt với những con quái vật khủng khiếp bị "Ám", Yuuji nuốt vật thể bị phong ấn để có được sức mạnh của nó và cứu bạn bè của mình! Nhưng giờ Yuuji là người bị "Ám", và cậu ấy sẽ bị kéo vào thế giới ma quỷ ly kỳ của Megumi và những con quái vật độc ác ...`
    },
    {
      name: 'Nguyên Lai Ta Là Tu Tiên Đại Lão',
      photo: `https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1781/cover/processed-a02cf6d213d581566861a559c072eb89.jpg`,
      id: 4,
      profile: `Từ một thế giới tu tiên đang trên đà xuống dốc , sự xuất hiện của hắn giống như thổi một làn sức sống mới ngăn chặn sự xuống dốc đó . Từ sau đại kiếp , Long môn , Địa Phủ , Thiên Cung bị phong bế đều bởi vì hắn mà lần lượt mở ra ... Truyện đi từ từ dần dần mang đậm phong cách hài hước , tuy cũng có sạn nhưng cũng không phải nhiều bởi mỗi thế giới là của một tác giả tạo nên cho nên chẳng có ai có thể định đúng sai , tác giả có khác gì thiên đạo , truyện này mang tính giải trí cực cao , đủ để các đạo hữu đọc tới xuyên đêm .`
    },
    {
      name: 'Hôm Nay - Tôi Hóa Kaiju',
      photo: `https://i.truyenvua.com/ebook/190x247/hom-nay-toi-hoa-kaiju_1595055488.jpg?gt=hdfgdfg&mobile=2`,
      id: 5,
      profile: `Hibino Kafka một thanh niên vốn bất mãn với việc làm tại công ty vệ sinh chịu trách nhiệm xử lí xác kaiju. Sau khi bị thương bởi một trận tấn công bất ngờ lại bỗng nhiên hóa thành kaiju! Dưới hình dạng mới, ước mơ và lời hứa khi xưa với cô bạn thuở nhỏ đã có thể thực hiện được`
    },
    {
      name: 'One Piece',
      photo: `https://i.truyenvua.com/ebook/190x247/dao-hai-tac_1552224567.jpg?gt=hdfgdfg&mobile=2`,
      id: 6,
      profile: `
      One Piece là câu truyện kể về Luffy và các thuyền viên của mình. Khi còn nhỏ, Luffy ước mơ trở thành Vua Hải Tặc. Cuộc sống của cậu bé thay đổi khi cậu vô tình có được sức mạnh có thể co dãn như cao su, nhưng đổi lại, cậu không bao giờ có thể bơi được nữa. Giờ đây, Luffy cùng những người bạn hải tặc của mình ra khơi tìm kiếm kho báu One Piece, kho báu vĩ đại nhất trên thế giới. Trong One Piece, mỗi nhân vật trong đều mang một nét cá tính đặc sắc kết hợp cùng các tình huống kịch tính, lối dẫn truyện hấp dẫn chứa đầy các bước ngoặt bất ngờ và cũng vô cùng hài hước đã biến One Piece trở thành một trong những bộ truyện nổi tiếng nhất không thể bỏ qua. Hãy đọc One Piece để hòa mình vào một thế giới của những hải tặc rộng lớn, đầy màu sắc, sống động và thú vị, cùng đắm chìm với những nhân vật yêu tự do, trên hành trình đi tìm ước mơ của mình.`
    },
    {
      name: 'Ánh Sáng Cuối Con Đường',
      photo: `https://i.truyenvua.com/ebook/190x247/the-beginning-after-the-end_1552143666.jpg?gt=hdfgdfg&mobile=2`,
      id: 7,
      profile: `King Grey là người sở hữu tất cả trong một thế giới bị Võ thuật chi phối. Nhưng đi đôi với một sức mạnh to lớn lại là sự cô độc không hồi kết. Thế nên, mặc dù vẻ bên ngoài là một quốc vương mạnh mẽ, nhưng sâu trong thâm tâm lại là một kẻ yếu đuối không có ý chí. Nhưng sau đó lại được tái sinh trong một thế giới fantasy để làm lại một cuộc đời mới. Tuy nhuyên đâu dễ ăn đến thế ? Đằng sau sự hòa bình của thế giới này có vẻ tồn tại một mối đe dọa khủng khiếp nào đó. Với trọng trách lớn lao đó, lý do anh main nhà ta chuyển sinh đến đây là gì ?`
    },
    {
      name: 'Học Viện Anh Hùng',
      photo: `https://i.truyenvua.com/ebook/190x247/boku-no-hero-academia_1552459650.jpg?gt=hdfgdfg&mobile=2`,
      id: 8,
      profile: `
      Vào tương lai, lúc mà con người với những sức mạnh siêu nhiên là điều thường thấy quanh thế giới. Đây là câu chuyện về Izuku Midoriya, từ một kẻ bất tài trở thành một siêu anh hùng. Tất cả ta cần là mơ ước.
      `
    },
    {
      name: 'Yêu Thần Ký',
      photo: `https://i.truyenvua.com/ebook/190x247/yeu-than-ky_1443013926.jpg?gt=hdfgdfg&mobile=2`,
      id: 9,
      profile: `Yêu Thần Vừa Xuất, Ai Dám Tranh Phong
      Yêu Linh Sư Mạnh Nhất Thánh Linh Đại Lục Nhiếp Li, bởi vì một cuốn sách thần bí Yêu Linh Thời Không mà trở về năm 13 tuổi, tu luyện mạnh nhất công pháp, mạnh nhất yêu linh chi lực, đột phá tới võ đạo đỉnh phong...
      Kẻ thù kiếp trước, toàn bộ thanh toán...
      Nếu như đã trùng sinh, thì kiếp này ta là chúa tể đại lục, Vạn Thần chi Vương,để cho tất cả run rẩy dưới chân ta đi`
    },
    {
      name: '7 Viên Ngọc Rồng',
      photo: `https://i.truyenvua.com/ebook/190x247/7-vien-ngoc-rong_1552225535.jpg?gt=hdfgdfg&mobile=2`,
      id: 10,
      profile: `Câu truyện kể về một cậu bé tên Songoku cùng nhóm bạn của mình tham gia những chuyến phiêu lưu tìm ngọc rồng, chống lại cái ác bảo vệ trái đất. Nhân vật Songoku được mọi người ưa thích bởi tính thánh thiện và ngây ngô của mình. Câu truyện lôi cuốn người qua những tình huống phiêu lưu kì thú, những pha đấu võ đẹp mắt, và những tình huống hài hước.
      Dragon ball là bộ truyện tranh thuộc nhóm nổi tiếng nhất thế giới, được rất nhiều bạn trẻ ưa thích.`
    },
    {
      name: 'Hoa Sơn Tái Xuất',
      photo: `https://i.truyenvua.com/ebook/190x247/hoa-son-tai-xuat_1625218263.jpg?gt=hdfgdfg&mobile=2`,
      id: 11,
      profile: `Câu truyện mang đậm máu và nước mắt của những nỗi buồn và tiếng cười, kể về hành trình của một cao thủ được mệnh danh Thánh Kiếm có tên là Chung Myung trên con đường thực hiện nhiệm vụ cao cả ở kiếp sau đó là… Khôi phục môn phái Hoa Sơn đã bị lãng quên hơn 100 năm kể từ trận tử chiến với Ma Vương Chun Ma. Liệu anh sẽ thành công hay sẽ thất bại? Thế giới có yên bình sau cái chết của Ma Vương hay lời tiên tri của hắn sẽ thành sự thật? Bạn đọc hãy tự mình tìm câu trả lời qua những trang này truyện nhé.`
    },
    {
      name: 'Toàn Chức Pháp Sư',
      photo: `https://i.truyenvua.com/ebook/190x247/toan-chuc-phap-su_1518956513.jpg?gt=hdfgdfg&mobile=2`,
      id: 12,
      profile: `Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. `
    },
  ];

  constructor() { }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

}

