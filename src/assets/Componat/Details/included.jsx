import React from 'react'

const included = ({item}) => {
  return (
    <div className='mt-5'>
        <h3>What's included</h3>
        {item.included.map((item) => (
            <ul key={item.id} className='list-disc list-inside space-y-4 marker:text-orange-500 text-gray-600 text-lg'>
                <li>{item}</li>
            </ul>
        ))}
    </div>
  )
}

export default included