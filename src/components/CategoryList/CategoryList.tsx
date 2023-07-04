import { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";

export default function CategoryList() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("PCategory.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {}
    };

    fetchData();
  }, []);

  // const responsiveLayout = [
  //   {
  //     breakpoint: 600,
  //     cols: 1,
  //     rows: 2,
  //     gap: 10,
  //     loop: true,
  //     autoplay: 1000
  //   },
  //   {
  //     breakpoint: 800,
  //     cols: 2,
  //     rows: 2,
  //     gap: 10,
  //     loop: true,
  //     autoplay: 1000
  //   },
  //   {
  //     breakpoint: 992,
  //     cols: 3,
  //     rows: 2,
  //     gap: 10,
  //     loop: true,
  //     autoplay: 1000
  //   },
  //   {
  //     breakpoint: 1080,
  //     cols: 3,
  //     rows: 2,
  //     gap: 10,
  //     loop: true,
  //     autoplay: 1000
  //   }
  // ];

  return (
    <div className="px-2 py-8">
      <div>
        <h1 className="text-4xl lg:text-5xl font-serif text-white my-4">
          Popular <span className="text-cyan-500">Category</span> List
        </h1>
        <p className="font-mono">
          To choose your trending job dream & to make future bright.
        </p>
      </div>
      <div className="my-10">
        <Carousel cols={4} rows={2} gap={20} autoplay={2000} loop>
          {data?.map((d: any) => (
            <Carousel.Item>
              <div className="flex flex-col justify-center items-center bg-[#001618] rounded w-full h-52">
                <div className="h-20 w-20 rounded-full p-2 border-gray-600 hover:border-[#0fa5a8] border-r-2 border-l-2 mb-5">
                  <div className="bg-[#062224] p-3 rounded-full h-full">
                    <img
                      className="filter invert"
                      width="100%"
                      height="100%"
                      src={d.icon}
                    />
                  </div>
                </div>
                <h4 className="text-xl mb-2 hover:text-[#0aa8ab]">{d.category}</h4>
                <p className="text-sm">{d.vacancy_count} Jobs Available</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
