import React from 'react';
import Footer from './footer';

export default function ProductCard() {
  const products = [
    {
      name: '1 Ounce Deal - AA+ Rainbow belts',
      price: '$69.99',
      tag: 'HYBRID',
      image: 'https://heyabby.com/cdn/shop/articles/rainbow_belts_strain.png?v=1719458754'
    },
    {
      name: '1 Ounce Deal - AA+ Lemon Larry',
      price: '$69.99',
      tag: 'SATIVA',
      image: 'https://www.cannaconnection.com/14508/lemon-larry-og-kush-ibl.jpg'
    },
    {
      name: '1 Ounce Deal - AA+ Tom Ford Pink Kush',
      price: '$69.99',
      tag: 'INDICA',
      image: 'https://herbapproach.com/wp-content/uploads/2024/03/Tom-Ford-Pink-Kush-2-1.jpg'
    },
    {
      name: '1 Ounce Deal - AAA+ Cheese and Chong',
      price: '$84.99',
      tag: 'SATIVA',
      image:'https://askgrowers.com/uploads/images/strains/sativa-dominant-hybrid/sativa-dominant-hybrid_1243819801.webp'
    },
    {
      name: '1 Ounce Deal - AAA+ El Muerte',
      price: '$84.99',
      tag: 'INDICA',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXl6qVGCfDZDT5qEU14B4PG5GWwqTxXi5x6A&s'
    },
    {
      name: '1 Ounce Deal - AAA+ Londom Mints',
      price: '$79.99',
      tag: 'Hybrid',
      image : 'https://herbaldispatch.com/cdn/shop/files/24.png?v=1724446146'
    },
    {
      name: '2 and 3 Ounce Deal - AA+ Lemon Larry',
      price: '$114.99 - $179.99',
      tag: 'SATIVA',
      image: 'https://www.cannaconnection.com/14508/lemon-larry-og-kush-ibl.jpg'
    },
    {
      name: '2 and 3 Ounce Deal - AA+ Rainbow Belts',
      price: '$119.99 - $184.99',
      tag: 'FLOWER',
      image: 'https://heyabby.com/cdn/shop/articles/rainbow_belts_strain.png?v=1719458754'
    },
    {
      name: '2 and 3 Ounce Deal - AA+ TOM FORD PINK KUSH',
      price: '$119.99 - $184.99',
      tag: 'INDICA',
      image: 'https://herbapproach.com/wp-content/uploads/2024/03/Tom-Ford-Pink-Kush-2-1.jpg'
    },
     {
      name: '2 and 3 Ounce Deal - AAA+ Cheese and Chong',
      price: '$144.99 - $224.99',
      tag: 'FLOWER',
      image:'https://askgrowers.com/uploads/images/strains/sativa-dominant-hybrid/sativa-dominant-hybrid_1243819801.webp'
    },
    {
      name: '2 and 3 Ounce Deal - AAA+ El Muerte',
      price: '$145.99 - $224.99',
      tag: 'FLOWER',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXl6qVGCfDZDT5qEU14B4PG5GWwqTxXi5x6A&s'
    },
    {
      name: '2 and 3 Ounce Deal - AAA+ Londom Mints',
      price: '$144.99 - $224.99',
      tag: 'HYBRID',
      image : 'https://herbaldispatch.com/cdn/shop/files/24.png?v=1724446146'
    },
    {
      name: 'African Spice - AAA',
      price:'$14.50 – $120.00',
      tag: 'HYBRID',
      image:'https://static.scientificamerican.com/sciam/cache/file/BD7DB489-3897-4684-BAF1CCA5E5D673F8_source.jpg?crop=4%3A3%2Csmart&w=1200'
    },
    {
      name: 'Amnesia - Sativa Dominant AAA',
        price:'$15.50 - $124.00',
      tag: 'SATIVA',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRme-rd1zj7svXyj8hs5Edgvhns9WL7xeUzPQ&s'
    },
    {
      name: 'Banana Milkshake OG - AAAA',
      price:'$30.00 - $240.00',
      tag: 'HYBRID',
      image :'https://allbud.s3.amazonaws.com/media/images/strain/banana-milkshake-og/Pi9G8LG5/strawbeey-diseljpeg.jpg'
    },
    {
      name: 'Blackberry Moonrocks - Dominant AAAA',
      price: '$25.00 – $240.00',
      tag: 'INDICA',
      image: 'https://premiumcultivars.com/cdn/shop/files/blackberry-moonrocks-seeds-2489480.jpg?v=1763719399'
    },
    {
      name: 'Boys Scout Cookies - AAA+',
      price:'$19.49 - $169.49',
      tag: 'HYBRID',
      image:'https://images.leafly.com/flower-images/defaults/short-dense-heavy/strain-7.png'
    },
    {
      name: 'Citrus Slurricane AAA+',
      price:'$19.49 – $169.49',
      tag: 'HYBRID',
      image:'https://images.weedmaps.com/strains/000/001/136/avatar/1733836199-stock_indica_5.jpg'
    },
    {
      name: 'Cream Soda - AAAA',
      price:'$29.00 – $240.00',
      tag: 'HYBRID',
      image: 'https://mmjexpress.cc/wp-content/uploads/2025/07/cream-soda-cannabis.jpg' 
    },
    {
      name: 'Death Wedding Cake - AAA+',
      price:'$27.49 – $184.49',
      tag: 'HYBRID',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6D84ZS3FWLgbPAMX9tVPo0d9DKeIGlx31AA&s'
    },
    {
      name: 'El Jefe - AAA+',
      price:'$19.49 - $169.49',
      tag: 'INDICA',
      image:'https://rightpuff.ca/wp-content/uploads/2025/08/279e0388-df92-4822-8bed-a378c236ace1-600x600.jpg'
    },
    {
      name: 'Fire OG - AAA',
      price:'$14.50 – $119.00',
      tag: 'INDICA',
      image:'https://images.hytiva.com/Fire-Og-E2E5.jpg?mw505-mh757'
    },
    {
      name: 'Funky Charms - AAA',
      price:'$17.50 – $119.00',
      tag: 'HYBRID',
      image: 'https://www.alchimiaweb.com/ils/17705027/xlrg-0/6/funky-charms-6-seeds.webp'
    },
    {
      name: 'Galactic Gas - AAA+',
      price:'$19.49 - $169.49',
      tag: 'INDICA',
      image: 'https://sativauniversity.com/wp-content/uploads/2024/05/Galactic-Gas-strain-of-weed-1024x574.jpg'
    },
    {
      name: 'Gas Monkey - AAAA',
      price:'$29.00 – $240.00',
      tag: 'INDICA',
      image:'https://thrivenevada.com/wp-content/uploads/2022/05/Grease_Monkey_Strain_Thrive_1-1-scaled.webp'
    },
    {
      name: 'Gas Truffle AAA+',
      price:'$19.49 - $169.49',
      tag: 'INDICA',
      image:'https://solarthera.com/wp-content/uploads/2023/07/GasTruffle-bud.jpg'
    },
    {
        name:'Gouda Berry -AAA',
        price:'$14.50 - $119.00',
        tag:'HYBRID',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNIqorY4K-ret16yDmlWsk2T5Ab1LJf-tNQ&s'
    },
    {
      name: 'Grape Gelato - AAAA',
      price: '$29.00 – $240.00',
      tag: 'HYBRID',
      image: 'https://images.squarespace-cdn.com/content/v1/5fa770dca3f03b5541c866a5/1666716323571-3IY7FFL4ZYSVPXB5PK9R/GelatoGrapePieBud-3_EDIT.jpg'
    },
    {
      name: 'Grape Gusher Smalls - AAA',
      price:'$17.50 – $119.00',
      tag: 'HYBRID',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJf2DH2TybbvaL_PayaCwM9TxIFqMLiqLJg&s'
    },
    {
      name: 'Grape Soda - AAA+',
      price:'$19.49 - $169.49',
      tag: 'INDICA',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkTTFFnzsQeje9tnn6Mf24OI8eB9O56ywIA&s'
    },
    {
      name: 'Guava Cookies - AAAA',
      price:'$30.00 - $240.00',
      tag: 'SATIVA',
      image:'https://beleafer.com/wp-content/uploads/2025/01/GuavaCookies-scaled.jpg'
    },
    {
      name: 'Hawaiian Pie - AAAA',
      price:'$29.00 - $240.00',
      tag: 'HYBRID',
      image:'https://www.worldofseeds.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/a/hawaiian-wave-ripper-seeds.jpg'
    },
    {
      name: 'Jelly Pancakes - AAA',
      price:'$14.50 – $119.00',
      tag: 'INDICA',
      image : 'https://theherbcentre.co/wp-content/uploads/2024/01/Jelly-Pancakes-Bulk.webp'
    },
    {
      name: 'Lemon Cake - AAA',
      price:'$14.50 - $119.00',
      tag: 'HYBRID',
      image: 'https://saltonverde.com/wp-content/uploads/2023/06/Auto-Lemon-Cake.jpg'
    },
    {
      name: 'Lemon Sour Diesel - AAA+',
      price:'$19.49 - $169.49',
      tag: 'SATIVA',
      image: 'https://herbaldispatch.com/cdn/shop/files/lemon-sour-diesel-11-10-23-bud.jpg?v=1699990712'
    },
    {
      name: 'Mango Dream - AAA',
      price:'$14.50 - $ 119.00',
      tag: 'HYBRID',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoXKKR4pBl8JkU3k8GMBE4e6BgfriH04Fyw&s'
    },
     {
      name: 'Mango Ice - AAA',
      price:'$14.50 - $119.00',
      tag: 'INDICA',
      image:'https://allbud.s3.amazonaws.com/media/images/strain/mango-ice/ajcAX7Y3/mangojpg.jpg'
    },
    {
      name: 'Maui Wowie - AAAA',
      price:'$20.00 - $240.00',
      tag: 'SATIVA',
      image:'https://www.cannaconnection.com/14188/hawaii-maui-waui.jpg'
    },
    {
      name: 'Melon cake - AAA',
      price:'$14.50 - $119.00',
      tag: 'HYBRID',
      image : 'https://premiumseedbank.com/wp-content/uploads/2025/02/premium-seed-market-thumbnail-4.jpeg.webp'
    },
    {
      name: 'Melted Strawberry - AAAA',
      price:'$19.00 - $240.00',
      tag: 'HYBRID',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_khMW9zWx-pxqgJg8SP7WKh6g8E0JeCtsw&s'
    },
    {
      name: 'Mike Tyson - AAAA',
      price:'$19.00 - $240.00',
      tag: 'INDICA',
      image:'https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fbc22a96c-8ec3-11e9-afbe-8bab2c71e5a4.jpg?crop=1000%2C1000%2C0%2C0'
    },
    {
      name: 'Orange Cookies - AAA',
      price:'$14.50 – $119.00',
      tag: 'HYBRID',
      image :'https://images.weedmaps.com/strains/000/000/167/avatar/1563310058-180225_49250_Orange_crush_1__1_.jpg'
    },
    {
      name: 'Orange Kush - AAA',
      price:'$14.50 – $119.00',
      tag: 'HYBRID',
      image: 'https://www.evaseeds.com/814-thickbox_default/orange-kush-auto.jpg'
    },
    {
      name: 'Papaya Sorbet - AAAA',
      price:'$19.00 - $240.00',
      tag: 'INDICA',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozBwN-TdQIKrhxlkXDxPejPRx792GanOxQA&s'
    },
    {
      name: 'Pineberry Smalls - AAA+',
      price: '$19.49 - $169.49',
      tag: 'INDICA',
      image:'https://www.drganja.com/wp-content/uploads/2022/06/Dr.Ganja-Pineberry-Smalls-600x400.jpg'
    },
    {
      name: 'Pink Death - AAA+',
      price:'$19.49 - $169.49',
      tag: 'INDICA',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHCpZL78rLjNVHA9yCgzPqe96tFOv6zkwZQ&s' 
    },
    {
      name: 'Pink Panties - AAA',
      price:'$14.50 – $119.00',
      tag: 'INDICA',
      image: 'https://images.weedmaps.com/strains/000/000/179/avatar/1550019599-171121_36425_PinkPanties_1.jpg'
    },
    {
      name: 'Platinum Girl Scout Cookies - AAA',
      price:'$14.50 - $119.0',
      tag: 'HYBRID',
      image:'https://leafly-public.imgix.net/strains/reviews/photos/platinum-girl-scout-cookies__primary_c429.jpg'
    },
    {
      name: 'Pre-98 Bubba Kush - AAA+',
      price:'$19.49 - $169.49',
      tag: 'INDICA',
      image:'https://teamelitegenetics.com/cdn/shop/files/pre98_Bubba_Dried_Flower_2048x.jpg?v=1725731265'
    },
    {
      name: 'Purple Dragon - AAAA',
      price:'$29.00 - $235.00',
      tag: 'HYBRID',
      image: 'https://www.pacificseedbank.com/wp-content/uploads/2022/03/Purple-Dragon-Feminized-Seeds.jpg'
    },
    {
      name: 'Purple Octane - AAA+',
      price:'$19.49 - $169.49',
      tag: 'INDICA',
      image: 'https://premiumcultivars.com/cdn/shop/files/purple-octane-seeds-3301456.webp?v=1763719398&width=1445'
    },
    {
      name: 'Purple Pineapple Express - AAAA',
      price:'$29.00 - $240.00',
      tag: 'HYBRID',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHM2QzatZ5shLQy_fzKie6njKhoQRHWDvvA&s'
    },
    {
      name: 'Purple Pineapple Shunk - AAA',
      price:'$14.50 - $119.00',
      tag: 'HYBRID',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsWxbnx5FfQztnJe4ITkRDXOPSWLYWp052w&s'
    },
    {
    name:'Purple Starburst - AAAA',
    price:'$24.99 - $239.00',
    tag:'HYBRID',
    image:'https://images.leafly.com/flower-images/defaults/purple/strain-7.png'
    },
    {
      name: 'Sensi Star - AAA+',
      price:'$19.49 - $169.49',
      tag: 'INDICA',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMgalahiwqugrmHACnLUQKxxhLVeG_6FtJg&s'
    },
    {
      name: 'Skittlez Pie - AAA',
      price:'$14.50 - $119.00',
      tag: 'INDICA',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinkUNxzTT8lvoTKJndPIJS4QBBvAgv0ginQ&s'
    },
    {
      name: 'Snoop Dogg OG - AAAA',
      price:'$19.00 - $240.00',
      tag: 'INDICA',
      image:'https://leafly-public.imgix.net/strains/reviews/photos/snoop-dogg-og__primary_6edc.jpg'
    },
    {
      name: 'Space Monkey - AAA+',
      price:'$19.49 - $169.49',
      tag: 'INDICA',
      image:'https://welcometofarmhouse.com/wp-content/uploads/2024/10/3ba18f9a-6e3d-402e-be31-931ca570f221.jpg'
    },
    {
    name:'Sugar Berry - AAA',
    price:'$14.50 – $119.00',
    tag:'INDICA',
    image:'https://askgrowers.com/uploads/images/strains/indica-dominant-hybrid/indica-dominant-hybrid_1998872516.webp'
    },
    {
      name: 'Sugarland Kush - AAA+',
      price:'$19.49 - $169.49',
      tag: 'HYBRID',
      image: 'https://buymyweedonline.cc/wp-content/uploads/2024/09/popeyes-sugarland-1.jpg'
    },
    {
      name: 'Sugarland Kush Smalls - AAAA',
      price:'$19.00 - $240.00',
      tag: 'INDICA',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlbw-lzTq8hj2Hp_YKqrhKzTzwHmfq5hcpLQ&s'
    },
    {
      name: 'Super Mochi - AAA',
      price:'$19.00 - $119.00',
      tag: 'INDICA',
      image:'https://www.greentherapynyc.com/wp-content/uploads/2024/08/IMG_7368-699x800.jpeg'
    },
    {
      name: 'Sweet And Sour Widow - AAAA',
      price:'$16.00 - $240.00',
      tag: 'HYBRID',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRseLTvW4_HEj1CErWVypDyFfsvRkSP9pdDcA&s'
    },
    {
    name:'Sweet Mandarin Zkittlez - AAA+',
    price:'$27.49 - $184.49',
    tag:'HYBRID',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP2rA9qhMfGOvgs5XyPHXKqFSNuDrV7OR6Lw&s'
    },
    {
      name: 'Truffle Butter - Gas Demon - AAAA',
      price:'$19.00 - $240.00',
      tag: 'INDICA',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV96z9j2IM7out87jH3u1HHDwCzpRMr9FcCw&s'
    },
    {
    name:'Tutti Fruitti Smalls - AAA',
    price:'$14.50 - $119.00',
    tag:'HYBRID',
    image:'https://weed-side-story.com/img/p/3/9/3/9/3939.jpg'
    },
    {
    name:'Violator - Indica Dominant - AAA',
    price:'$14.50 - $119.00',
    tag:'INDICA',
    image:'https://dnagenetics.com/wp-content/uploads/2025/06/Violator-Kush-Cannabis-Strain-1-2.webp'
    },
    {
    name:'Zoap - AAAA',
    price:'$19.49 - $169.49',
    tag:'HYBRID',
    image:'https://hemphop.co/cdn/shop/files/ZoapIndoorCannabisFlower.jpg?v=1707102250'
    }
  ];

  return (
    <div>
    <div className="min-h-screen p-10">
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-[200px] h-[350px] bg-white rounded-lg overflow-hidden shadow-lg"
          >
            {/* Image Container */}
            <div className="relative h-[250px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded text-xs font-semibold uppercase">
                {product.tag}
              </div>
            </div>

            {/* Details Section */}
            <div className="p-4">
              <h3 className="text-base text-gray-900 leading-tight">
                {product.name}
              </h3>
              <p className="text-m text-gray-900">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
      <Footer></Footer>
      </div>
  );
}
