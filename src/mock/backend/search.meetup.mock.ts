import { data } from '@mock/data';

export const searchHandler = function (setMeetups: Function) {
  return async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      const searchData = data
        .map(item => JSON.stringify(item))
        .filter(item => item.includes(event.target.value))
        .map(item => JSON.parse(item));
      setMeetups(searchData);
    } else {
      setMeetups(data);
    }
  }
}