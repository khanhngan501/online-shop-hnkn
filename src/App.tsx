import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import CardProduct from "./components/product/CardProduct"
import CollectionType from "./components/type/CollectionType"
import PostCard from "./components/card/PostCard";
import PostItem from "./components/card/PostItem";

function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 460 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 460, min: 0 },
      items: 2,
      partialVisibilityGutter: 30
    }
  };
  const topSeller = [
    {
      id: 1,
      name: "MacBook Air 13 inch M2 2022 8-core GPU",
      ram: "8 GB",
      storage: "256 GB",
      price: "26.490.000",
      img: "https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-bac-600x600.jpg",
      screen: "13.6\", Retina",
      chip: "Apple M2, 100GB/s",
      graphic: "8 nhân GPU",
      pin: "Lên đến 18 giờ",
      weight: 1.24
    },
    {
      id: 2,
      name: "MacBook Air 13 inch M2 2022 8-core GPU",
      ram: "8 GB",
      storage: "256 GB",
      price: "26.490.000",
      img: "https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-bac-600x600.jpg",
      screen: "13.6\", Retina",
      chip: "Apple M2, 100GB/s",
      graphic: "8 nhân GPU",
      pin: "Lên đến 18 giờ",
      weight: 1.24
    },
    {
      id: 3,
      name: "MacBook Air 13 inch M2 2022 8-core GPU",
      ram: "8 GB",
      storage: "256 GB",
      price: "26.490.000",
      img: "https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-bac-600x600.jpg",
      screen: "13.6\", Retina",
      chip: "Apple M2, 100GB/s",
      graphic: "8 nhân GPU",
      pin: "Lên đến 18 giờ",
      weight: 1.24
    },
    {
      id: 4,
      name: "MacBook Air 13 inch M2 2022 8-core GPU",
      ram: "8 GB",
      storage: "256 GB",
      price: "26.490.000",
      img: "https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-bac-600x600.jpg",
      screen: "13.6\", Retina",
      chip: "Apple M2, 100GB/s",
      graphic: "8 nhân GPU",
      pin: "Lên đến 18 giờ",
      weight: 1.24
    },
    {
      id: 5,
      name: "MacBook Air 13 inch M2 2022 8-core GPU",
      ram: "8 GB",
      storage: "256 GB",
      price: "26.490.000",
      img: "https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-bac-600x600.jpg",
      screen: "13.6\", Retina",
      chip: "Apple M2, 100GB/s",
      graphic: "8 nhân GPU",
      pin: "Lên đến 18 giờ",
      weight: 1.24
    }
  ]

  return (
    <>
      <Header />
      {/* Collections type */}
      <CollectionType />
      {/* Collections product hot seller */}
      <section className="mx-auto max-w-screen-xl mb-16">
        <h2 className="text-7xl tracking-wide font-normal mb-4 max-sm:text-4xl" id="header">Sản phẩm bán chạy</h2>
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
          {
            topSeller.map((value, index) => (
              <CardProduct key={index} item={value} />
            ))
          }
        </div>

      </section>
      <section className="bg-[#222] mx-auto max-w-screen-xl max-sm:flex max-sm:flex-col items-center max-sm:mb-6">
        {/* <div className="text-white flex flex-col items-center max-sm:mb-8">
          <div className="bg-white text-black w-fit max-sm:px-4 max-sm:text-sm rounded-full"><span>Mới</span></div>
        </div> */}
        <div className="max-sm:mb-3">
          <img src="https://cdn.tgdd.vn/2022/08/banner/banner-cao-cao-desktop-1200x200.png" 
            alt="san pham moi" 
            className="object-contain max-sm:w-[100vw] max-sm:h-auto"
          />
        </div>
        <div className="max-sm:px-4 max-sm:mb-4">
          <div className=" gap-4 max-sm:grid max-sm:grid-cols-2">
            {
              topSeller.map((value, index) => { 
                return (
                  <CardProduct key={index} item={value} />
                )
              })
            }
          </div>
        </div>
        <div className="uppercase rounded-md flex bg-white max-sm:px-2 max-sm:text-xs max-sm:mb-4">
          <span>Xem tất cả Laptop cao cấp, sang trọng</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 max-sm:w-4 max-sm:h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </section>
      {/* Brands posts */}
      <section className="bg-[#121a2d]">
        <Carousel responsive={responsive}
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots max-sm:mb-6 max-sm:pt-2 max-sm:pb-4
          "
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="max-sm:ml-2"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          slidesToSlide={1}
          swipeable
        >
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Carousel>
        <div className="flex flex-col border-[#2c4581] border-[1.2px] bg-[#151f38] items-center max-sm:py-3 max-sm:rounded-md">
          <h3 className="text-white max-sm:text-sm max-sm:mb-4">Bài viết công nghệ nổi bật</h3>
          <div className="grid grid-cols-2 max-sm:gap-4">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
