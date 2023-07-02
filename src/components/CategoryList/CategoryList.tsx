import { useEffect, useState } from "react";


export default function CategoryList (){
    const [data, setData] = useState<any>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('PCategory.json');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
    console.log(data);

    return (
        <div className="mx-2 my-8">
        <div>
            <h1 className="text-4xl lg:text-5xl font-serif text-white my-4">Popular <span className="text-cyan-500">Category</span> List</h1>
            <p className="font-mono">To choose your trending job dream & to make future bright.</p>
        </div>
        <div>
            {
                data.map((d: any) => <h1>{d.category}</h1>)
            }
        </div>
        </div>
    );
};

