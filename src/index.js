import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Apping from './Apping';
import UserData from './Client/Context/UserApplyData';
import DisplayAlert from './Client/Context/Alert';
import AdminSingleUserData from './Client/Context/AdminGetSingleUserData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <UserData>
      <DisplayAlert>
        <AdminSingleUserData>
          <Apping />
          </AdminSingleUserData>
        </DisplayAlert>
      </UserData>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
