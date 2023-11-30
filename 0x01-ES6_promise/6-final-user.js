import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export function handleProfileSignup(firstName, lastName, fileName) {
  Promise.all([
    signUpUser,
    uploadPhoto
  ]).then((signUpUserMessage, uploadPhotoMessage) => {
    [
      {
        status,
	
      }
    ]
  }
}
