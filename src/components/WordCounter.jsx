import React from 'react'

const WordCounter = () => {
    return (
        <div className='border p-10 mx-auto max-w-4xl h-120'>
            <div className='flex justify-center mb-10'>
                <hi className="font-medium text-3xl">WORD COUNTER</hi>
            </div>
            <div className='flex justify-between h-80'>
                <div>
                    <input className='outline-none py-2 border w-4/2' type="text" placeholder='Enter You Text' />
                </div>

                <div className='px-5 text-center gap-3 grid grid-cols-2 items-center'>
                    <div>
                        <span className="font-medium text-2xl">0</span>
                        <h1 className="text-2xl font-medium">WORDS</h1>
                    </div>
                    <div>
                        <span className="font-medium text-2xl">0</span>
                        <h1 className="font-medium text-2xl">FACEBOOK</h1>
                    </div>
                    <div>
                        <span className="font-medium text-2xl">0</span>
                        <h1 className="font-medium text-2xl">TWITTER</h1>
                    </div>
                    <div>
                        <span className="font-medium text-2xl">0</span>
                        <h1 className="font-medium text-2xl">INSTAGRAM</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordCounter
