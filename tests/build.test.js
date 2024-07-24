const { exec } = require('child_process');

test('Docusaurus build should succeed', done => {
  exec('npm run build', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      done(error);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    expect(stdout).toContain('Success');
    done();
  });
});
