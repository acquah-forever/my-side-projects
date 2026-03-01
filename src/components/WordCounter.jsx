import React,{useState} from 'react'

const WordCounter = () => {


    const [type, setType] = useState('')
    const [count, setCount] = useState(0)
    const [face, setFace] = useState(20)
    const[twitter, setTwitter] = useState(20)
    const [word, setWord] = useState(0)

    function handleChange(event){
        const value = event.target.value
        setType(value)

        const digits = value.length

        setCount(digits)
        setFace(10 - digits)
        setTwitter(20 - digits)

        const words = value.trim() === "" ? 
        (0) : (value.trim().split(/\s+/).length)

        setWord(words)
    }


    return (
        <div className='border mx-auto max-w-4xl h-150'>
            <div className='bg-sky-400 p-10 w-full flex justify-center mb-10'>
                <hi className="font-medium text-3xl">WORD COUNTER</hi>
            </div>
            <div className='grid grid-cols-1 md:flex md:justify-between px-7 h-80'>
                <div className='mt-12'>
                    <input className='outline-none py-2  w-4/2'onChange={handleChange}  placeholder='Enter You Text' />
                </div>

                <div className='px-5 text-center gap-x-20 gap-y-20 grid grid-cols-2 items-center'>
                    <div>
                        <span className="font-medium text-2xl">{count}</span>
                        <h1 className="text-2xl font-medium">LETTERS</h1>
                    </div>
                    <div>
                        <span className={`font-medium text-2xl ${face < 0 ? "text-red-500" : "text-black dark:text-white"}`}>{face}</span>
                        <h1 className={`font-medium text-2xl ${face < 0 ? "text-red-500" : "text-black dark:text-white"}`}>FACEBOOK</h1>
                    </div>
                    <div>
                        <span className={`font-medium text-2xl ${twitter < 0 ? "text-red-500" : "text-black dark:text-white"}`}>{twitter}</span>
                        <h1 className={`font-medium text-2xl ${twitter < 0 ? "text-red-500" : "text-black dark:text-white"}`}>TWITTER</h1>
                    </div>
                    <div>
                        <span className="font-medium text-2xl">{word}</span>
                        <h1 className="font-medium text-2xl">WORDS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordCounter
