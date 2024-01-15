const fs = require('fs');
const exec = require('child_process').exec;

// create file called newfile.txt
// code goes here...

fs.writeFile(__dirname + "/newfile.txt", "test", (err) => {
  console.log(err);
});


const main = async () => {
    const { stdout, stderr } = await exec('ls');
    if (stderr) {
      console.log(stderr)
    }

    let result = ' ';

    stdout.on('data', (data) => {
        //result = data.split('\n');
        console.log(data.split('\n').join(', '))
    })

    //console.log(`the list of files in this directory is: ${result.split('')}`)
  }
  
  main()