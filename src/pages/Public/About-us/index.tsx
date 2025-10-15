import React from "react";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen text-white py-8 px-4 font-sans">
      {/* Main Title */}
      <div className="text-center mb-2">
        <h1 className="text-4xl md:text-5xl font-dfvn-graphit font-extrabold text-white drop-shadow-lg">
          VỀ CHÚNG TÔI
        </h1>
      </div>

      {/* First Scroll Section - Dai Viet Ky Nhan */}
      <div className="mb-16">
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Scroll Paper Background */}
          <Image
            src="/ScrollPaper.svg"
            alt="Scroll Paper"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />

          {/* Content - Tận dụng không gian tối đa trên desktop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] sm:w-[60%] md:w-[70%] lg:w-[75%] h-[65%] sm:h-[70%] md:h-[50%] lg:h-[70%]">
            {/* Thay đổi để mobile cũng hiển thị 2 cột như desktop */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 items-stretch h-full">
              {/* Left Side - Text Content - Sử dụng tối đa không gian có sẵn */}
              <div className="text-gray-800 h-[90%] overflow-y-auto pr-1 lg:mt-8">
                {/* Font size responsive - nhỏ cho mobile, lớn cho desktop */}
                <h2 className="
  text-start font-bd-street-sign text-3xl sm:text-4xl md:text-5xl lg:text-6xl
  mb-1 md:mb-3 lg:mb-4 drop-shadow-sm pt-1
  bg-radial-[at_25%_66%] from-[#F2BE5D] to-[#CBA247] to-90%
  text-transparent bg-clip-text
">
                  ĐẠI VIỆT KỲ NHÂN
                </h2>
                <div className="space-y-1 md:space-y-2 lg:space-y-3">
                  {/* Font size responsive - tận dụng không gian desktop */}
                  <p className="text-[8px] font-dfvn-graphit sm:text-[10px] md:text-sm lg:text-base leading-tight md:leading-relaxed lg:leading-relaxed text-gray-700">
                    Dự án cộng đồng được xây dựng với sứ mệnh giúp người trẻ biết thêm về lịch sử dân tộc.
                  </p>
                  <p className="text-[8px] font-dfvn-graphit sm:text-[10px] md:text-sm lg:text-base leading-tight md:leading-relaxed lg:leading-relaxed text-gray-700">
                    Đại Việt Kỳ Nhân đã nghiên cứu và minh họa hơn 500 nhân vật lịch sử Việt Nam. Dự án giúp các bạn trẻ hình tượng hóa các nhân vật lịch sử, xây dựng kho tư liệu trực quan đa dạng từ vua chúa, tướng lĩnh cho đến danh nhân văn hóa, nghệ nhân và cả những nhân vật bình dân. Với ba giá trị cốt lõi: tôn trọng sử liệu – thẩm mỹ thị giác – kết nối cộng đồng, Đại Việt Kỳ Nhân mong muốn tạo nên một không gian nơi lịch sử không chỉ được ghi nhớ, mà còn được sống lại một cách sáng tạo và truyền cảm hứng trong đời sống hiện đại.
                  </p>
                  <p className="text-[8px] font-dfvn-graphit sm:text-[10px] md:text-sm lg:text-base leading-tight md:leading-relaxed lg:leading-relaxed text-gray-700">
                    Với ba giá trị cốt lõi: tôn trọng sử liệu – thẩm mỹ thị giác – kết nối cộng đồng, Đại Việt Kỳ Nhân mong muốn tạo nên một không gian nơi lịch sử không chỉ được ghi nhớ, mà còn được sống lại một cách sáng tạo và truyền cảm hứng trong đời sống hiện đại.
                  </p>
                </div>
              </div>

              {/* Right Side - Images - Cố định, không scroll */}
              <div className="flex flex-col gap-1 md:gap-2 justify-center items-center h-full">
                {/* Giảm kích thước ảnh để nằm trong ảnh nền */}
                <div className="w-full max-w-[80%] md:max-w-xs">
                  <Image
                    src="/boardgamefb2b 1.svg"
                    alt="Đại Việt Kỷ Nhân Cards"
                    width={300}
                    height={225}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                {/* Giảm kích thước ảnh để nằm trong ảnh nền */}
                <div className="w-full max-w-[80%] md:max-w-xs">
                  <Image
                    src="/daivietkynhan1h 1.svg"
                    alt="Đại Việt Kỷ Nhân Cards"
                    width={300}
                    height={225}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Scroll Section - Founder */}

      <div className="mb-16">
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Scroll Paper Background */}
          <Image
            src="/ScrollPaper.svg"
            alt="Scroll Paper"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />

          {/* Content - Tận dụng không gian tối đa trên desktop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] sm:w-[60%] md:w-[70%] lg:w-[75%] h-[65%] sm:h-[70%] md:h-[50%] lg:h-[55%]">
            <div className="grid grid-cols-2 gap-2 md:gap-4 items-stretch h-full">
              {/* Left Side - Logo */}
              <div className="flex justify-center items-center h-full">
                <div className="w-full h-32 md:h-64">
                  {/* Reduced mobile height for logo */}
                  <Image
                    src="/big-logo.svg"
                    alt="Đại Việt Kỷ Nhân Logo"
                    width={300}
                    height={300}
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Right Side - Text Content - Sử dụng tối đa không gian có sẵn */}
              <div className="text-gray-800 h-full overflow-y-auto pr-1 lg:mt-2">
                <h2 className="
  text-start font-bd-street-sign text-3xl sm:text-4xl md:text-5xl lg:text-6xl
  mb-1 md:mb-3 lg:mb-4 drop-shadow-sm pt-1
  bg-radial-[at_25%_66%] from-[#F2BE5D] to-[#CBA247] to-90%
  text-transparent bg-clip-text
">
                  FOUNDER
                </h2>
                <div className="space-y-1 md:space-y-2 lg:space-y-3">
                  {/* Font size responsive - tận dụng không gian desktop */}
                  <p className="text-[8px] font-dfvn-graphit sm:text-[10px] md:text-sm lg:text-base leading-tight md:leading-relaxed lg:leading-relaxed text-gray-700">
                    Đại Việt Kỳ Nhân được sáng lập bởi một người trẻ yêu sử – Tô Quốc Nghi, một họa sĩ, nhà sáng tạo nội dung có niềm đam mê đặc biệt với lịch sử và bản sắc dân tộc.
                  </p>
                  <p className="text-[8px] font-dfvn-graphit sm:text-[10px] md:text-sm lg:text-base leading-tight md:leading-relaxed lg:leading-relaxed text-gray-700">
                    Anh nhận thấy Việt Nam đang thiếu những sản phẩm minh họa hình ảnh các nhân vật lịch sử và quyết định thực hiện dự án Đại Việt Kỳ Nhân.
                  </p>
                  <p className="text-[8px] font-dfvn-graphit sm:text-[10px] md:text-sm lg:text-base leading-tight md:leading-relaxed lg:leading-relaxed text-gray-700">
                    Từ những nét vẽ đầu tiên, anh đã dần định hình nên một dự án không chỉ tôn vinh lịch sử Việt, mà còn truyền cảm hứng sáng tạo cho thế hệ trẻ thông qua những góc nhìn mới mẻ, gần gũi và đầy cảm xúc. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
