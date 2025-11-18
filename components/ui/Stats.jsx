"use client";

import CountUp from 'react-countup'

const stats = [
    {
        num: 2,
        text: "years of knowing you"
    },
    {
        num: 100,
        text: "percent love for you"
    },
    {
        num: 1000,
        text: "years of loving you"
    },
        
    
]
function Stats() {
  return (
    <section className='pt-4 pb-4 xl:pt-0 xl:pb-0'>
        <div className="">
            <div className='flex flex-wrap flex-col md:flex-row gap-6 xl:max-w-none justify-center '>
                {stats.map((item, index) => {
                    return <div key={index} className='flex-1 flex gap-4 items-center justify-center xl:justify-start '>
                        <CountUp end={item.num} duration = {5} delay={2} className='text-4xl text-white/60 xl:text-6xl font-extrabold'/>
                        <p className={`${
                            item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                        }`}>{item.text}</p>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats