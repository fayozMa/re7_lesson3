import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import useMemoCode from '../assets/useMemoCode.png'
function Projects() {
  return (
    <div>
        <div className="useMemo mx-auto p-6 max-w-[1200px]">
            <h1 className='text-3xl'>useMemo qolganlari hooks papksi ichida</h1>
            <LazyLoadImage className='mb-5'
                src={useMemoCode}
            />
        </div>
    </div>
  )
}

export default Projects