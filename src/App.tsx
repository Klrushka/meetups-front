import { LoginPage } from './pages/loginPage';
import { MeetupPage } from './pages/meetupPage';
import { Routes, Route, Link } from 'react-router-dom';
import { RegistratePage } from './pages/registrationPage';
import { Csv } from './components/csv';
import { CsvPage } from './pages/csvPage';
import { PdfPage } from './pages/pdfPage';
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
