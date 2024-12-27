import { useQueryAutomation } from '@/hooks/user-queries';
import * as React from 'react';
import ActiveTrigger from './active';
import { Separator } from '@/components/ui/separator';
type Props={
    id:String
}
const Trigger =({id}:Props) =>{
  const {data} = useQueryAutomation(id)
  if(data?.data && data?.data?.trigger.length>0){
    return <div className='flex flex-col ga-y-6 items-center'>
      <ActiveTrigger
          type={data.data.trigger[0].type}
          keywords={data.data.keywords}
        />
        <>
        <div className='relative w-6/12'>
        <p className="absolute transform  px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
                or
              </p>
              <Separator
                orientation="horizontal"
                className="border-muted border-[1px]"
              />
        </div>
        <ActiveTrigger
              type={data.data.trigger[1].type}
              keywords={data.data.keywords}
            /> 
        </>
    </div>

  }
  ;
}
export default Trigger