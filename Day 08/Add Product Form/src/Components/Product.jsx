function Product({ productData }) {



  if (!productData || productData.length === 0) return null;

  return (
    <div className="main w-full min-h-screen bg-[#ffd84d] pt-[4%]">
      <h1 className="text-[26px] font-bold text-center mb-4">Product List</h1>

      <div className="product-box w-full h-auto px-4 py-6 flex flex-wrap justify-center gap-7">

        {productData.map((product, index) => (
          <div key={index} className="card-div flex flex-col  rounded-2xl cursor-pointer p-4 bg-white shadow-md w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
                <div className="w-full aspect-[1/1] rounded-2xl overflow-hidden">
                <img src={product.img} alt="Product" className="product-img w-full h-full object-cover bg-center duration-[0.2s] rounded-2xl"/>
                </div>

                <div className="info w-full mt-4">
                    <p className="text-xl font-light">
                        <span className="font-bold">Title:</span> {product.title}
                    </p>
                    <p className="text-lg font-light">
                        <span className="font-bold">Price:</span> ₹{product.price}
                    </p>
                    <p className="text-lg font-light">
                        <span className="font-bold">Color:</span> {product.color}
                    </p>
                    <p className="text-lg font-light">
                        <span className="font-bold">Material:</span> {product.material}
                    </p>
                    <p className="text-lg font-light">
                        <span className="font-bold">Cloth Type:</span> {product.clothTypes}
                    </p>
                    <p className="text-lg font-light break-words">
                        <span className="font-bold">Description:</span> {product.description}
                    </p>
                </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Product;
