import fs from 'fs';

const createDir = (dirPath) => {
  fs.mkdir(
    process.cwd() + dirPath,
    { recursive: true },
    error => {
      if (error) {
        console.error(`An error occured`, error);
      } else {
        console.log(`Your directory is made!`);
      }
    }
  )
}

const createFile = (filePath, fileContents) => {
  fs.writeFile(
    filePath,
    fileContents,
    (error) => {
      if (error) {
        console.error(`An error occured`, error);
      } else {
        console.log(`Your file is made!`);
      }
    }
  )
}

const path = `/src/content/test`;
// const name = `words.txt`;
const contents = `The words in the file I am making and stuff and things and junk and crap.`;

createDir(path);
createFile(path, contents);