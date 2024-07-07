import React from 'react';

import Breadcrumb from '../../components/ui/Breadcrumb';

function Resumes() {
  const breadcrumbItems = [
    {
      label: 'Resumes',
      href: '/resumes'
    }
  ];

  return (
    <div className="py-10 ml-8">
      <div className="flex flex-col">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex justify-start items-end my-5">
          <div>
            <h1 className="font-bold text-3xl mb-2">Resumes</h1>
            <h1 className="text-slate-500">Welcome to ResumeHub</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resumes;
