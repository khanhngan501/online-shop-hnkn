import Card from "./components/card/Card"
import GalleryImage from "./components/gallery/GalleryImage"
import Header from "./components/header/Header"

function App() {
  
  const topSeller = [
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

  return (
    <>
      <Header />
      <GalleryImage />
      {/* Collections product hot seller */}
      <section className="mx-auto max-w-screen-xl mb-16">
        <h2 className="text-7xl tracking-wide font-normal mb-4" id="header">Sản phẩm bán chạy</h2>
        <div className="grid grid-cols-3 gap-4">
        {
          topSeller.map((value, index) => (
            <Card key={index} prod={value} />
          ))
        }
        </div>
      </section>
      <section className="mx-auto max-w-screen-xl grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-[#F2F2F2] flex flex-col justify-center items-center rounded-xl">
          <h3 id="header" className="text-8xl h-1/3 flex items-center">The Hype is real...</h3>
          <div className="flex h-[75%] w-full">
            <img src="https://cdn.sanity.io/images/47jnag19/production/d9bc337d30daa11613cce5b5f8334c46e9000670-536x536.png?w=1024&q=80&auto=format"
              alt="anh" className="object-cover w-1/2 rounded-xl"
            />
            <div className="text-center flex items-center font-serif tracking-wide text-3xl px-4">
              <span>
                “Stylish simple most comfortable shoes. I’m buying a second pair. Wear it daily.”
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl relative">
          <div className="px-8 w-full h-full relative">
            <a href="#" className="w-full h-full block">
              <img src="https://cdn.sanity.io/images/47jnag19/production/0d2f461b022772393f7c6491b55b220e74254663-1064x1370.jpg?w=1024&q=80&auto=format" alt="anh" 
                className="rounded-xl absolute top-0 left-0 object-cover h-full z-20"
              />
              <div className="absolute bottom-4 z-30">Model 000: Navy</div>
            </a>
          </div>
        </div>
      </section>
      <h1 className='text-red-500'>Home Page</h1>
    </>
  )
}

export default App
