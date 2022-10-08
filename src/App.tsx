import { LoginPage } from './pages/loginPage';
import { MeetupPage } from './pages/meetupPage';
import { Routes, Route, Link } from 'react-router-dom';
import { RegistratePage } from './pages/registrationPage';
const setToken = (token: any) => {
  sessionStorage.setItem('token', JSON.stringify(token));
};


function App() {

  // if (!token) {
  //   return <LoginPage setToken={setToken} />;
  // }

  // return <MeetupPage />;
  return (
    <Routes>
      <Route path='/login' element={<LoginPage setToken={setToken} />} />
      <Route path='/meetups' element={<MeetupPage />} />
      <Route path='/registration' element={<RegistratePage  />} />
    </Routes>
  );
}

export default App;
