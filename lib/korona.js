exports.korona = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *COVID-19 UPDATE* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_


✅ Follow akun instagram admin ${instagramlu}


📺 *Iklan* :


♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

✳️ Official Grub : ${grupch1}


  
🔰 -----[ *POWERED BY LKS Project* ]----- 🔰`
}
