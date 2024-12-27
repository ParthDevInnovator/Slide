import React from 'react'


type Props = {}

const UpgradeCard = (props: Props) => {
  return (
    <div className="bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3">
      <span className="text-sm">
        Upgrade to {''}
        <span
          className="bg-gradient-to-r 
        from-[#CC3BD4] 
        to-[#D064AC] 
        font-bold 
        bg-clip-text 
        text-transparent"
        >
          Smart AI
        </span>
      </span>
      <p className="text-[#9B9CA0] font-light text-sm">
        Unlock all features <br /> including AI and more
      </p>
    
    </div>
  )
}

export default UpgradeCard