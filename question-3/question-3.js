const fs = require("fs");
const path = require("path");

// Function that basically returns a promise of if the log folder exists or not
const logsExists = () => {
  return new Promise((resolve, reject) => {
    fs.access("./logs", (error) => {
      if (error) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};


// Simple function that uses the above helper function to check if the log exists and if not it uses the mkdir (not mkdirSync function as i wanted to use a callback in this example) function to create a file. The
// callback also returns an error if it cant be created. We cchange dir with process.chdir and then through a for loop that iterates 10 times we create 10 respective files with names ranging fromlogs0.txt to logs10.txt
const addLogs = async () => {
    const logExistss = await logsExists();
    if (!logExistss) {
      fs.mkdir("./logs", (err) => {
        if (err) {
          console.error("Sorry, I could not create that directory :(");
        } else {
          console.log("Logs directory created successfully.");
        }
      });
    }
    process.chdir("./logs");
  
    for (let i = 0; i <= 10; i++) {
      const logFileName = `log${i}.txt`;
      const logFilePath = path.join("./", logFileName);
      fs.writeFileSync(logFilePath, "");
      console.log(logFileName);
    }
  };


// This function is a little more complicated than it has to be but i wanted ot use Promise.all to wait for the resolving of all promises. Basically the same idea but we try to delete the directory and files inside
// we check if the folder exists, and from there we delete the files using the .map function and storing the promises in unlinkPromises, after we wait for them to be resolved using await Promise.all and then this time
// using rmdirSync we delete the logs folder
const removeLogs = async () => {
  const logExists = await logsExists();

  if (logExists) {
    const logFiles = await new Promise((resolve, reject) => {
      fs.readdir("./logs", (error, files) => {
        if (error) {
          reject(error);
        } else {
          resolve(files);
        }
      });
    });
    const unlinkPromises = logFiles.map((logFile) => {
      return new Promise((resolve, reject) => {
        fs.unlink(path.join("./logs", logFile), (err) => {
          if (err) {
            reject(err);
          } else {
            console.log("deleted files..." + logFile);
            resolve();
          }
        });
      });
    });

    await Promise.all(unlinkPromises);
    fs.rmdirSync("./logs");
  } else {
    console.log("The folder 'Log' does not exist! Sorry :(");
  }
};

addLogs();
removeLogs();
