import { ControlPanel } from '../components/controlPanel';
import { MeetupList } from '../components/meetupList';
import { Navbar } from '../components/navbar';
import { NewMeetupWindow } from '../components/newMeetup';
import { getToken } from '../services/token';
import { NotAuthPage } from './notAuthPage';

export const MeetupPage = () => {
  const token = getToken();

  if (token) {
    return (
      <div>
        <ControlPanel />
        <Navbar />
        <MeetupList />
      </div>
    );
  } else {
    return (
      <div>
        <NotAuthPage/>
      </div>
    );
  }
};
