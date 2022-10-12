import { LoginPage } from './pages/login-page';
import { MeetupPage } from './pages/meetup-page';
import { Routes, Route } from 'react-router-dom';
import { RegistratePage } from './pages/registration-page';
import { CsvPage } from './pages/csv-page';
import { PdfPage } from './pages/pdf-page';
const setToken = (token: any) => {
  sessionStorage.setItem('token', JSON.stringify(token));
};


function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage setToken={setToken} />} />
      <Route path='/meetups' element={<MeetupPage />} />
      <Route path='/registration' element={<RegistratePage  />} />
      <Route path='/pdf' element={<PdfPage  />} />
      <Route path='/csv' element={<CsvPage  />} />
    </Routes>
  );
}

export default App;
