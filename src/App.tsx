import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"
import GalleryImage from "./components/gallery/GalleryImage"
import Header from "./components/header/Header"

function App() {
  
  const topSeller = [
    {
      id: '1',
      name: "Model 000 Black",
      price: 145,
      img1: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/b382b7dc-9240-4b09-a07a-3bd26b10ead2/iPhone_B07/w=3840,quality=80",
      img2: "https://cdn.sanity.io/images/47jnag19/production/989ea3c5d525f3293c012338b2089490fcc01499-8116x6087.jpg?w=1024&q=80&auto=format"
    },
    {
      id: '2',
      name: "Model 000 White",
      price: 145,
      img1: "https://cdn.shopify.com/s/files/1/0231/2060/9358/files/618a5e595e8e72c57b2fbe8b29fee0447a7ec8bd-3000x3750.jpg?v=1690913451&width=800&height=800",
      img2: "https://cdn.sanity.io/images/47jnag19/production/3f33b2e5d4a8173e381e520ca6102d96dc748346-2668x4000.jpg?w=1024&q=80&auto=format"
    },
    {
      id: '3',
      name: "Model 000 Navy",
      price: 145,
      img1: "https://cdn.shopify.com/s/files/1/0231/2060/9358/files/a35cfae4824e2bec46452893714a1f9a5eadd812-3000x3750.jpg?v=1690913689&width=800&height=800",
      img2: "https://cdn.sanity.io/images/47jnag19/production/a038f5dd6ab3cbe6028698f373a9e87f73bad7ee-4000x2668.jpg?w=1024&q=80&auto=format"
    },
    {
      id: '4',
      name: "Model 000 Black",
      price: 145,
      img1: "https://cdn.shopify.com/s/files/1/0231/2060/9358/files/3ae61f22cedfc3249f605e0bc57e4b4af5ebf59a-3000x3750.jpg?v=1690913642&width=800&height=800",
      img2: "https://cdn.sanity.io/images/47jnag19/production/6f61c8ec014e94dc8b4b97de73cfb9db877058f5-1080x1080.jpg?w=1024&q=80&auto=format"
    },
    {
      id: '5',
      name: "Model 000 White",
      price: 145,
      img1: "https://cdn.shopify.com/s/files/1/0231/2060/9358/files/f4eb715d96d1340283b1fe27fbccf55a22194514-3000x3750.jpg?v=1690913747&width=800&height=800",
      img2: "https://cdn.sanity.io/images/47jnag19/production/88e478f33adc42b8a1e7f7f13a22f1a4c391aba8-2668x4000.jpg?w=1024&q=80&auto=format"
    },
    {
      id: '6',
      name: "Model 000 Navy",
      price: 145,
      img1: "https://cdn.shopify.com/s/files/1/0231/2060/9358/files/fd16eb98a496c32ab650a589cefb6d81bbf839d5-3000x3750.jpg?v=1690913576&width=800&height=800",
      img2: "https://cdn.sanity.io/images/47jnag19/production/412cd46e5dd364c43b66e9b35cc7df874f325d4a-8256x6192.jpg?w=1024&q=80&auto=format"
    },
  ]
  const prodsNew = [
    {
      id: '1',
      name: "Model 000 Black",
      price: 145,
      img1: "https://cdn.shopify.com/s/files/1/0231/2060/9358/files/bf474077f69cbfdd1cbc83fbfe54306a02f19df0-3000x3750.jpg?v=1690913369&width=800&height=800",
      img2: "https://cdn.sanity.io/images/47jnag19/production/989ea3c5d525f3293c012338b2089490fcc01499-8116x6087.jpg?w=1024&q=80&auto=format"
    },
    {
      id: '2',
      name: "Model 000 White",
      price: 145,
      img1: "https://cdn.shopify.com/s/files/1/0231/2060/9358/files/618a5e595e8e72c57b2fbe8b29fee0447a7ec8bd-3000x3750.jpg?v=1690913451&width=800&height=800",
      img2: "https://cdn.sanity.io/images/47jnag19/production/3f33b2e5d4a8173e381e520ca6102d96dc748346-2668x4000.jpg?w=1024&q=80&auto=format"
    },
    {
      id: '3',
      name: "Model 000 Navy",
      price: 145,
      img1: "https://cdn.shopify.com/s/files/1/0231/2060/9358/files/a35cfae4824e2bec46452893714a1f9a5eadd812-3000x3750.jpg?v=1690913689&width=800&height=800",
      img2: "https://cdn.sanity.io/images/47jnag19/production/a038f5dd6ab3cbe6028698f373a9e87f73bad7ee-4000x2668.jpg?w=1024&q=80&auto=format"
    }
  ]
  const itemData = [
    {
      img: 'https://cdn.sanity.io/images/47jnag19/production/a9f4960b4e510d96642506724eb9a242cd27244a-3024x4032.jpg?w=1024&q=80&auto=format',
      title: 'Breakfast',
    },
    {
      img: 'https://cdn.sanity.io/images/47jnag19/production/07653f964a72b380c7ce936121c1a1f5c8ed0cc1-1132x1200.jpg?w=1024&q=80&auto=format',
      title: 'Burger',
    },
    {
      img: 'https://cdn.sanity.io/images/47jnag19/production/adba3e60d14656d6d63a407fa6ef060a2bdcbcbc-1080x1080.jpg?w=1024&q=80&auto=format',
      title: 'Camera',
    },
    {
      img: 'https://cdn.sanity.io/images/47jnag19/production/82fb156244f843ad142dfd8da1d8b57a30e91738-1080x1349.jpg?w=1024&q=80&auto=format',
      title: 'Coffee',
    },
    {
      img: 'https://cdn.sanity.io/images/47jnag19/production/f63f0f42591b741284bbe94c9693ca06cd0bc05a-1080x1350.jpg?w=1024&q=80&auto=format',
      title: 'Hats',
    }
  ]
  return (
    <>
      <Header />
      <GalleryImage />
      {/* Collections product hot seller */}
      <section className="mx-auto max-w-screen-xl mb-16">
        <h2 className="text-7xl tracking-wide font-normal mb-4 max-sm:text-4xl" id="header">Sản phẩm bán chạy</h2>
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
        {
          topSeller.map((value, index) => (
            <Card key={index} prod={value} />
          ))
        }
        </div>
      </section>
      <section className="mx-auto max-w-screen-xl mb-16 grid grid-cols-3 gap-4 max-sm:flex max-sm:flex-col">
        <div className="sm:col-span-2 bg-[#F2F2F2] flex flex-col justify-center items-center rounded-xl">
          <h3 id="header" className="text-8xl h-1/3 flex items-center max-sm:text-4xl">The Hype is real...</h3>
          <div className="flex h-[75%] w-full">
            <img src="https://cdn.sanity.io/images/47jnag19/production/d9bc337d30daa11613cce5b5f8334c46e9000670-536x536.png?w=1024&q=80&auto=format"
              alt="anh" className="object-cover w-1/2 rounded-xl"
            />
            <div className="text-center flex items-center font-serif tracking-wide text-3xl px-4 max-sm:text-sm">
              <span>
                “Stylish simple most comfortable shoes. I'm buying a second pair. Wear it daily.”
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl relative max-sm:w-full max-sm:h-[40vh] max-sm:relative">
          <div className="px-8 w-full h-full relative max-sm:px-4 max-sm:text-white max-sm:font-medium">
            <a href="#" className="w-full h-full block">
              <img src="https://cdn.sanity.io/images/47jnag19/production/0d2f461b022772393f7c6491b55b220e74254663-1064x1370.jpg?w=1024&q=80&auto=format" alt="anh" 
                className="rounded-xl absolute top-0 left-0 object-cover h-full z-20 max-sm:w-full"
              />
              <div className="absolute bottom-4 z-30">Model 000: Navy</div>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-black mx-auto max-w-screen-xl max-sm:py-4 max-sm:flex max-sm:flex-col items-center">
        <div className="text-white flex flex-col items-center max-sm:mb-8">
          <div className="bg-white text-black w-fit max-sm:px-4 max-sm:text-sm rounded-full"><span>Mới</span></div>
          <h3 id="header" className="max-sm:text-4xl">Giới thiệu sản phẩm</h3>
        </div>
        <div className="max-sm:mb-6">
          <img src="https://cdn.sanity.io/images/47jnag19/production/38f66dcd765181ef2c0ff57f20701a6b744416e2-5290x7932.jpg?rect=331,4931,4842,2906&w=2048&h=1229&q=80&auto=format" alt="san pham moi"/>
        </div>
        <div className="max-sm:px-4">
          <h3 className="text-white max-sm:mb-4">Khám phá dòng 001</h3>
          <div className=" gap-4 max-sm:grid max-sm:grid-cols-2">
          {
            prodsNew.map((value, index) => {
              return(
                <Card key={index} prod={value} />
              )
            })
          }
          </div>
        </div>
      </section>
      {/* Collection models images */}
      <section className="max-sm:mb-8">
        <h3 id="header" className="max-sm:text-4xl">Bộ sưu tập</h3>
        <div className="grid max-sm:flex max-sm:gap-3 max-sm:flex-wrap justify-center">
        {
          itemData.map((value, index) => (
            <div key={index} className="max-sm:w-[45vw] max-sm:h-[150px]" >
              <img src={value.img} alt="anh" className="rounded-xl max-sm:w-full max-sm:h-full max-sm:object-center" />
            </div>
          ))
        }
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
