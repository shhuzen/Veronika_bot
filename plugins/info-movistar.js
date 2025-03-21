 import axios from 'axios';

let handler = async (m, { conn, usedPrefix, command, args }) => {
    await m.react('🕓');

    // Verificar si se proporciona texto de búsqueda
    if (!args[0]) {
        return conn.reply(m.chat, `🚩 Por favor ingresa un texto para buscar deportes. Ejemplo:\n> *${usedPrefix + command}* fútbol`, m, rcanal);
    }

    // Texto a buscar
    const searchText = args.join(' ').toLowerCase();

    try {
        // Llamar a la API
        const response = await axios.get('https://delirius-apiofc.vercel.app/tools/movistar');
        const { status, data } = response.data;

        if (!status) return conn.reply(m.chat, '🚩 Не удалось получить информацию, повторите попытку позже.', m);

        // Filtrar resultados que contengan el texto especificado
        const filteredData = data.filter(item =>
            item.title.toLowerCase().includes(searchText) ||
            item.description.toLowerCase().includes(searchText)
        );

        // Verificar si hay resultados
        if (filteredData.length === 0) {
            return conn.reply(m.chat, `🚫 No se encontraron noticias sobre "${searchText}".`, m);
        }

        // Generar el texto de respuesta
        let txt = '乂 M O V I S T A R  -  N O T I C I A S\n\n';

        filteredData.forEach((item, index) => {
            txt += `✩ ${index + 1}. *Título*: ${item.title}\n`;
            txt += `✩ *Descripción*: ${item.description}\n`;
            txt += `✩ *Link*: ${item.url}\n`;
            txt += `✩ *Imagen*: ${item.image}\n\n`;
        });

        // Enviar el mensaje
        await conn.reply(m.chat, txt, m);
        await m.react('✅');
    } catch (error) {
        await m.react('✖');
        console.error(error);
        conn.reply(m.chat, '🚩 Ocurrió un error al obtener la información.', m);
    }
};

// Configuración del comando
handler.help = ['movistar <texto>'];
handler.tags = ['main'];
handler.command = ['movistar'];

export default handler;
