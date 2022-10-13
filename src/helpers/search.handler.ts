import { search } from '@api';

export const searchHandler = function (setMeetups: Function) {
  return async (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = await search(event.target.value).then(result => result.json());
    if (result.body) {
      const findedMeetups = result.body.hits.hits.map((item) => item._source._doc);
      setMeetups(findedMeetups);
    } else {
      setMeetups(result);
    }
  }
}