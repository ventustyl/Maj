const fs = require('fs');
const { exec } = require('child_process');

// Écrire la date actuelle dans un fichier log
const today = new Date().toLocaleString();
fs.writeFileSync('log.txt', `Last updated: ${today}`, 'utf-8');

// Commandes Git
exec('git add . && git commit -m "Daily update" && git push', (err, stdout, stderr) => {
  if (err) {
    console.error(`Erreur : ${err.message}`);
    return;
  }
  console.log(stdout || stderr);
});
