// resolvedPromise and rejectPromise are two simple functions where all that happens is a promiseis resolved or rejected based onn the name after 500 miliseconds. I do this by using a resolve in the setTimeout function for
// resolved promise and ar eject on rejectPromise. The two functions are almost identical
const resolvedPromise = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`message: ${message}`);
    }, 500);
  });
};

const rejectPromise = (messageError) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`error message: ${messageError}`);
    }, 500);
  });
};

resolvedPromise("This promise will resolve in0.5 seconds!")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

rejectPromise("This promise will reject in 0.5 seconds!")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
