exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? 

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Silahkan donasi dibawah ini :
   
⚜ *DANA*: 0822-8816-8806
⚜ *PULSA*: 0822-8816-8806
⚜ *GOPAY*: 0822-8816-8806

✅ Follow akun instagram admin ${instagramlu}

📺 *Iklan* :

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

✳️ Official Grub : ${grupch1}


  
🔰 -----[ *POWERED BY LKS Project* ]----- 🔰`
}
