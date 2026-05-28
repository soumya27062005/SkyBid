// import React from 'react';

// const Products = () => {
//   const products = [
//     { id: 1, name: 'Product A', price: '$50', stock: 20 },
//     { id: 2, name: 'Product B', price: '$30', stock: 15 },
//     { id: 3, name: 'Product C', price: '$70', stock: 10 },
//   ];

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Products</h1>
//       <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
//         Add Product
//       </button>
//       <table className="min-w-full bg-white shadow rounded-lg">
//         <thead>
//           <tr>
//             <th className="border-b p-4 text-left">ID</th>
//             <th className="border-b p-4 text-left">Name</th>
//             <th className="border-b p-4 text-left">Price</th>
//             <th className="border-b p-4 text-left">Stock</th>
//             <th className="border-b p-4 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td className="border-b p-4">{product.id}</td>
//               <td className="border-b p-4">{product.name}</td>
//               <td className="border-b p-4">{product.price}</td>
//               <td className="border-b p-4">{product.stock}</td>
//               <td className="border-b p-4">
//                 <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">
//                   Edit
//                 </button>
//                 <button className="bg-red-500 text-white px-2 py-1 rounded">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Products;
