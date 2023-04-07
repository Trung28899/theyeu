import Image1 from "@/public/viewpage/trunghuyen/12th6.png";
import Image2 from "@/public/viewpage/trunghuyen/23th6.png";
import Image3 from "@/public/viewpage/trunghuyen/14th7.png";
import Image4 from "@/public/viewpage/trunghuyen/25th8.png";
import Image5 from "@/public/viewpage/trunghuyen/11th9.png";
import Image6 from "@/public/viewpage/trunghuyen/16th9.png";
import Image7 from "@/public/viewpage/trunghuyen/23th10.png";
import Image8 from "@/public/viewpage/trunghuyen/6th11.png";
import Image9 from "@/public/viewpage/trunghuyen/14th12.png";
import Image10 from "@/public/viewpage/trunghuyen/23th1.png";
import Image11 from "@/public/viewpage/trunghuyen/24th1.png";
import Image12 from "@/public/viewpage/trunghuyen/14th2.png";
import Image13 from "@/public/viewpage/trunghuyen/18th2.png";
import type { ImageData } from "../types";

export const useDemoData = () => {
  const DATA: ImageData[] = [
    {
      id: "123",
      date: "12/06/2022",
      image: Image1,
      title: "The Day I Felt In Love With You",
      description:
        "Despite of all the craziness, that's the day I know that I want you to be mine...",
    },
    {
      id: "432",
      date: "23/06/2022",
      image: Image2,
      title: "Sinh Nhật Em",
      description:
        "Sinh nhật em, lần đầu gặp bố mẹ và gia đình em. Hơi run nhưng cũng rất vui ^^",
    },
    {
      id: "143",
      date: "14/07/2022",
      image: Image3,
      title: "1 Month Anniversary",
      description:
        "Tròn 1 tháng mình yêu nhau, đi ăn sushi và những dự định cho tương lai...",
    },
    {
      id: "6552",
      date: "25/08/2022",
      image: Image4,
      title: "Sinh Nhật Anh",
      description:
        "Sinh nhật đầu tiên với em. Bây giờ thì mình đã có chỗ ở riêng rồi, và em làm anh rất vui!",
    },
    {
      id: "422",
      date: "11/09/2022",
      image: Image5,
      title: "Lần Đầu Đi Nhạc Hội Với Nhau",
      description:
        "Những thành phố mơ màng. Có Ngọt, pháo hoa và em. Chỉ thế là đủ cho một kỷ niệm tuyệt vời và ngọt ngào...",
    },
    {
      id: "1432",
      date: "16/09/2022",
      image: Image6,
      title: "Lần Đầu Đi Gym Với Nhau",
      description:
        "Sau khi quẩy thì về đi gym nhỉ. Những bước đầu cho một mối quan hệ Healthy và Balance ^^",
    },
    {
      id: "4242",
      date: "23/10/2022",
      image: Image7,
      title: "Đi Ănnn",
      description:
        "Lần đầu đưa em đi ăn fine dining. Gordon Ramsey làm chúng mình tò mò xem fine dining nó ngon thế nào",
    },
    {
      id: "1145",
      date: "06/11/2022",
      image: Image8,
      title: "Lần Đầu Đi Du Lịch Với Nhau",
      description:
        "Mình đi Hạ Long, thuyền Capella, có cả gia đình anh. Tuy nhiều chuyện xảy ra, nhưng anh đã rất vui và hãnh diện vì có em",
    },
    {
      id: "768",
      date: "14/12/2022",
      image: Image9,
      title: "Đi Du Lịch 2 Đứa Thuiii",
      description:
        "Đi Phú Quốc chỉ có 2 đứa mình. 1 chuyến đi sang chảnh và riêng tư. Chúng mình đã rất vui vì được nghỉ ngơi và dành thời gian cho nhau sau một khoảng thời gian bận rộn",
    },
    {
      id: "8888",
      date: "24/01/2023",
      image: Image10,
      title: "Đến Nhà Đức Nèe",
      description:
        "Đến nhà Đức chơi ngày mùng 3 tết. Lần đầu đi tàu trên cao đến Hà Đông. Em cứ bị say tàu ý, buồn cười lắm ^^",
    },
    {
      id: "89898",
      date: "25/01/2023",
      image: Image11,
      title: "Mùng 4 Tết",
      description:
        "Tết anh khum gặp em được nhiều vì anh ốm huhu. Chán lắm, may mà em không dỗi anh lâu. Mình chỉ đi chùa đầu năm, đi đến nhà chúc tết bố mẹ và đi du xuân thôi. Năm sau Tết anh sẽ giữ sức khoẻ để đi với em nhiều hơn",
    },
    {
      id: "3232",
      date: "14/02/2022",
      image: Image12,
      title: "Valentine",
      description:
        "Valentine đầu tiên, 2 đứa đi spa và đi xem phim. Mình đi message và em dụ được anh nặn mụn, nặn xong ai cũng thương. Đi xem phim ngồi ghế gold class cũng thícc. Nhẹ nhàng thế thôi",
    },
    {
      id: "16156",
      date: "18/02/2022",
      image: Image13,
      title: "Ảnh Này Cutee",
      description:
        "Ảnh này 2 đứa cutee. Lúc này cũng là lúc mọi thứ trở nên khó khăn hơn cho anh và em. Anh thấy biết ơn vì mình vẫn cùng nhau cố gắng",
    },
  ];

  return {
    imageData: DATA.map((item) => item.image),
    data: DATA,
  };
};
