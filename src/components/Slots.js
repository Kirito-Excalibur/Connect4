import React from 'react'

function Slots({ num }) {


  const rando = max => Math.floor(Math.random() * max + 1)
  const rgb = () => ({ r: rando(255), g: rando(255), b: rando(255) })
  console.log(rgb().r)
  return (
    <div className='w-[100px] h-[100px] border border-black flex rounded-[10rem] items-center justify-center' onDragOver={(e)=>onDragover(e)}>
      <div draggable='true' style={`background:rgb(${rgb().r},${rgb().g},${rgb().b})`} className={` w-full h-full rounded-[10rem]`}>
        {num}
      </div>

    </div>
  )
}

export default Slots