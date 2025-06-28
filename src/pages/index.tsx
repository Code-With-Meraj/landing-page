import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";import ProductCard from '../../components/custom/product-card';
import { Product } from '@/type'; 

 const products: Product[] = [
  {
    id: "1",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "2",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "3",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/pizza-main.png",
    price: 500
  },
  {
    id: "4",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "5",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  }
];

export default function Home() {
  return (
    <div className="w-full">
      <section className="bg-white">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-16 py-12 gap-12">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-black font-sans leading-tight">
              Super Delicious Pizza in <br />
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>
            <p className="text-lg sm:text-2xl mt-6 sm:mt-8 max-w-lg mx-auto lg:mx-0 leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-6 sm:mt-8 text-base sm:text-lg rounded-full px-6 py-4 font-bold">
              Get your pizza now
            </Button>
          </div>
          <div>
            <img
              src="/pizza-main.png"
              alt="Pizza-main"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container px-4 sm:px-6 lg:px-12 py-8 "> 
          <Tabs defaultValue="pizza">
            <TabsList>
              <TabsTrigger value="pizza" className="text-sm sm:text-md">Pizza</TabsTrigger>
              <TabsTrigger value="beveragers" className="text-sm sm:text-md">Beveragers</TabsTrigger>
            </TabsList>

            <TabsContent value="pizza">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4 ">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beveragers">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4 ">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
