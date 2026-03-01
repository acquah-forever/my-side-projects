import React,{useState} from 'react'

const WordCounter = () => {

    const [count, setCount] = useState(0)
    const [word, setWord] = useState(0)
    const [face, setFace] = useState(150)
    const[twitter, setTwitter] = useState(300)

    function handleChange(event){
        setCount(event.target.value)

    }
    
    return (
        <div className='border mx-auto max-w-4xl h-150'>
            <div className='bg-sky-400 p-10 w-full flex justify-center mb-10'>
                <hi className="font-medium text-3xl">WORD COUNTER</hi>
            </div>
            <div className='grid grid-cols-1 md:flex md:justify-between px-7 h-80'>
                <div className='mt-12'>
                    <input className='outline-none  py-2  w-5/2'onChange={handleChange} type="text" placeholder='Enter You Text' />
                </div>

                <div className='px-5 text-center gap-x-20 gap-y-20 grid grid-cols-2 items-center'>
                    <div>
                        <span className="font-medium text-2xl">{count}</span>
                        <h1 className="text-2xl font-medium">ALPHABETS</h1>
                    </div>
                    <div>
                        <span className="font-medium text-2xl">{face}</span>
                        <h1 className="font-medium text-2xl">FACEBOOK</h1>
                    </div>
                    <div>
                        <span className="font-medium text-2xl">{twitter}</span>
                        <h1 className="font-medium text-2xl">TWITTER</h1>
                    </div>
                    <div>
                        <span className="font-medium text-2xl">0</span>
                        <h1 className="font-medium text-2xl">WORDS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordCounter
