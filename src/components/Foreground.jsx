import React, { useState ,useRef } from 'react'
import Card from './Card'


function Foreground() {

   const ref = useRef(null);

  const data = [
    {
        desc: "This is the bavkgrpinf of yhr card that will br displayed" ,
        filesize: ".9mb",
        close: false,
        tag: { isOpen : true , tagTitle :"Download Now" , tagColor:"blue"},
    },
    {
       desc: "This is the bavkgrpinf of yhr card that will be displayed" ,
       filesize: ".7mb",
       close: false,
       tag: { isOpen : false , tagTitle :"Upload" , tagColor:"Blue"},
    },
    {
       desc: "This is the bavkgrpinf of yhr card that will br displayed" ,
       filesize: ".5mb",
       close: true,
       tag: { isOpen : true , tagTitle :"Bottle" , tagColor:"red"},
    },
    {
      desc: "This is the bavkgrpinf of yhr card that will br displayed" ,
      filesize: ".5mb",
      close: true,
      tag: { isOpen : false , tagTitle :"NotNow " , tagColor:"red"},
   },
   {
    desc: "This is the bavkgrpinf of yhr card that will br displayed" ,
    filesize: ".5mb",
    close: true,
    tag: { isOpen : true , tagTitle :"Whatever" , tagColor:"blue"},
 },
  ];

 
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      { data.map((item,index)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>

  )
}

export default Foreground