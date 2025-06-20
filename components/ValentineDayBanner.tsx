import React from 'react';

function ValentineDayBanner() {
    return (
        <div className='bg-gradient-to-r from-red-600 to-black text-white px-6 py-10 mx-4 mt-2 rounded-lg shadow-lg'>
            <div className='container mx-auto flex items-center justify-between'>
                <div className='flex-1'>
                    <h2 className='text-3xl sm:text-5xl font-extrabold text-left mb-4'>
                        Dia dos Namorados
                    </h2>
                    <p className='text-left text-xl sm:text-3xl font-semibold mb-6'>
                        Aproveite ofertas especiais para celebrar o amor!
                    </p>
                    <div className='flex'>
                        <div className='bg-white text-black py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300'>
                            <p className='text-base sm:text-xl font-bold text-center'>
                                Use o código <span className='text-red-600'>LOVE</span> e ganhe 15% de desconto!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ValentineDayBanner;
