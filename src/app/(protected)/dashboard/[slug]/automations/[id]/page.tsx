import * as React from 'react';
import AutomationsBreadCrumb from '../../../../../../components/global/bread-crumbs/automations/index'
import { Warning } from '../../../../../../icons/warning';
import Trigger from '../../../../../../components/global/automations/trigger/index';
type Props={
  params:{id:string}
}
const page =({params}:Props) =>{
  return (
    <div className='flex flex-col items-center gap-y-20'>
      <AutomationsBreadCrumb id={params.id}/>   
      <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
          <div className="flex gap-x-2">
            <Warning/>
            when...
          </div>
         <Trigger id={params.id}/>
      </div>
       </div>
  );
}
export default page