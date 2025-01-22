import React from 'react';

const Topbar = () => {
  return (
    <header>
      <div className='bg-white shadow-sm border-b mx-auto flex flex-col'> </div>
        <div className='bg-black text-slate-50 py-2 text-sm flex between items-center px-8 w-full'>

            <div className='text-center flex-1 text-orange-600 font-extrabold text-2xl'>
        Food <span className='text-white font-extrabold text-2xl'>Tuck</span>

     </div>
        
    </div> 
    </header>
  )
};

export default Topbar;