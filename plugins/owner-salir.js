let handler = async (m, { conn, text, command }) => {
  let id = text ? text : m.chat;

  let pp = 'https://telegra.ph/file/5ab1ca8bf65c1ddb36c20.mp4';

  try {
    await conn.sendMessage(m.chat,{ video: { url: pp }, gifPlayback: true, caption: '*До свидания всем, бот прощается! (≧ω≦)ゞ*', mentions: [m.sender],},{ quoted: m });

    await conn.groupLeave(id);
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['salir'];
handler.tags = ['owner'];
handler.command = /^(salir|out|leavegc|leave|salirdelgrupo)$/i;
handler.group = true; 
handler.rowner = true;

export default handler;
