import React from 'react';
import TitleBlock from '../components/titleblock';
import CustomDataTable from '../components/datatable';

export default function DataTable() {
  return (
    <div className='inner_content'>
      <TitleBlock title="General"/>
      <CustomDataTable/>
    </div>
  )
}
