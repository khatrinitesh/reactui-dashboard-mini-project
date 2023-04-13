import React from 'react'
import './custom.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


const MainLayout = React.lazy(() => import('./mainlayout'));
const DataTable = React.lazy(() => import('./pages/datatable'));
const Edit = React.lazy(() => import('./pages/edit'));
const TabForm = React.lazy(() => import('./pages/tabform'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DataTable />} /> 
          <Route path="/edit" element={<Edit />} /> 
          <Route path="/tabform" element={<TabForm />} /> 
        </Route>
      </Routes>
    </Router>
    </React.Suspense>
  );
}

export default App;
