import { useState, useEffect } from 'react';

export const TodoItems = () => {
//   const [products, setProducts] = useState([]);
//    const [products1, setProducts1] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         console.log("response",response);
        
//         const data = await response.json();
//         console.log("data",data);
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect (()=>{

//     const fetchProducts1 = async () => {
//         try{
//     const respoonse1 = await fetch('https://fakestoreapi.com/products');
//     const dat1= await respoonse1.json();
//     setProducts(dat1);
//   }
//   catch(error){
//     console.error('Error fetching data:', error);
//   }
//     };
//     fetchProducts1();
//   },[]);

  return (
    // <div className="container mx-auto p-4">
    //   <h1 className="text-2xl font-bold mb-4 text-center">Fake Store Products</h1>
    //   <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    //     {products.map((item : any) => (
    //       <li
    //         key={item.id}
    //         className="border p-4 rounded shadow hover:shadow-lg transition duration-200"
    //       >
    //         <img src={item.image} alt={item.title} className="h-40 mx-auto object-contain mb-2" />
    //         <h2 className="font-semibold text-lg mb-1">{item.title}</h2>
    //         <p className="text-sm text-gray-600 mb-2">{item.category}</p>
    //         <p className="font-bold text-blue-600">${item.price}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <>
    
    <div className='flex flex-row-reverse  flex-warp'>

        <div className="basis-1/3 hover:basis-1/2">1</div>
        <div className="basis-1/3 hover:basis-1/2">2</div>
        <div className="basis-1/3 hover:basis-1/2">3</div>
        
    </div>
    
    </>
  );
};
