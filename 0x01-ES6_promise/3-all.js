import { uploadPhoto, createUser } from "./utils";

function handleProfileSignUp() {
  Promise.all([
    uploadPhoto(),
    createUser()
  ]).then(([photoMessage, userMessage]) => {
    console.log(`${photoMessage.body} ${userMessage.firstName} ${userMessage.lastName}`);
  })
  .catch(error => {
    console.log("Signup system offline")
  });
}

export default handleProfileSignUp;
