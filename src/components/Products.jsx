import React from 'react'

const Products = () => {

    return (
        <section>
            <div className="container">
                <h2 className='mb-10'>Products</h2>
            </div>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-x-6 gap-y-14 mb-10 '>
                {products.length > 1 && products.map((p, index) => {
                    return (
                        <li>
                            <div>
                                <img src={p.image} alt={p.title} />
                            </div>
                            <div>
                                <h3 className='text-xl font-extrabold text-gray-500'>
                                    {p.title.slice(0, 15)}
                                </h3>
                                <p className='text-gray-500 text-sm font-medium'>
                                    {p.title.slece(0, 20)}
                                </p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='text-2xl font-bold'>P</span>
                                <button onClick={() => dispatch(addCart(p))} className='bg-yellow-300 rounded-lg text-white font-bold text-sm py-2 px-5'>Add to cart</button>
                            </div>
                        </li>
                    )

                })}

            </ul>
        </section >
    )
}

export default Products