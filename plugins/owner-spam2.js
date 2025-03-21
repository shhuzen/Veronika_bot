const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const args = text.split('|').map(v => v.trim());

  if (args.length < 3) {
    return m.reply(`*⚠️ Debes ingresar el link del grupo, el mensaje y la cantidad de spam separados por "|".*\n\nEjemplo:\n${usedPrefix + command} httpsxxxx | Hola, ¿cómo están? | 5`);
  }

  const [groupLink, message, countStr] = args;
  const count = parseInt(countStr, 10);
  const MAX_MESSAGES = 10; // Límite para evitar bloqueos

  if (!groupLink.includes('chat.whatsapp.com')) {
    return m.reply('*⚠️ Proporcione un enlace válido del grupo.*');
  }
  if (isNaN(count) || count <= 0) {
    return m.reply('*⚠️ Especifique una cantidad válida de mensajes (mayor a 0).*');
  }
  if (count > MAX_MESSAGES) {
    return m.reply(`*⚠️ El número máximo de mensajes permitidos es ${MAX_MESSAGES}.*`);
  }

  try {
    const code = groupLink.split('chat.whatsapp.com/')[1];
    const groupId = await conn.groupAcceptInvite(code);

    m.reply(`✅ Unido al grupo con éxito. Iniciando spam de ${count} mensajes...`);

    for (let i = 0; i < count; i++) {
      await conn.sendMessage(groupId, { text: message });

      // Agregar un retraso aleatorio para evitar detección
      const randomDelay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
      await delay(randomDelay);
    }

    m.reply(`✅ Spam completado. Saliendo del grupo...`);
    await conn.groupLeave(groupId);
  } catch (error) {
    console.error(error);
    m.reply(`⚠️ Error al intentar realizar la operación: ${error.message}`);
  }
};

handler.command = /^(test45)$/i;
handler.owner = true;
export default handler;
