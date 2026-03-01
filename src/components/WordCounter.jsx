import React from 'react'

const WordCounter = () => {
    return (
        <div className='border'>
            <div className='flex justify-center mb-10'>
                <hi className="font-medium text-3xl">WORD COUNTER</hi>
            </div>
            <div className='flex justify-center border'>
                <div>
                    <input type="text" placeholder='Enter You Text' />
                </div>

                <div className='grid grid-cols-2'>
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
                        <hi className="font-medium text-2xl">INSTAGRAM</hi>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordCounter
