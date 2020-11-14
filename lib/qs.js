const fs = require('fs');

exports.qs = (id, BotName, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
  const data = fs.readFileSync('./lib/qs.json');
  const jsonData = JSON.parse(data);
  const randIndex = Math.floor(Math.random() * jsonData.length);
  const randKey = jsonData[randIndex];
  return `${randKey.quote} \n- ${randKey.by}`;
};
 