import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error('❌ No se encontró ninguna GEMINI_API_KEY en el archivo .env');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function main() {
  console.log('🔍 Consultando modelos activos en tu cuenta de Google AI Studio...\n');
  try {
    const response = await ai.models.list();
    const models = [];
    for await (const m of response) {
      if (m.supportedActions?.includes('generateContent')) {
        models.push({
          id: m.name.replace('models/', ''),
          displayName: m.displayName || '',
          description: m.description || ''
        });
      }
    }

    console.log(`✅ ¡Se encontraron ${models.length} modelos disponibles para tu API Key!\n`);
    console.log('🌟 MODELOS PRINCIPALES RECOMENDADOS PARA EL ASISTENTE:');
    console.log('----------------------------------------------------');
    
    const highlight = [
      'gemini-2.5-flash',
      'gemini-2.5-pro',
      'gemini-2.5-flash-lite',
      'gemini-3.1-pro-preview',
      'gemini-3-flash-preview',
      'gemini-flash-latest'
    ];

    models.filter(m => highlight.includes(m.id)).forEach(m => {
      console.log(`• [${m.id}] — ${m.displayName}`);
    });

    console.log('\n📋 TODOS LOS MODELOS HABILITADOS EN TU CUENTA:');
    console.log('--------------------------------------------');
    models.forEach(m => {
      console.log(`- ${m.id}`);
    });

    console.log('\n💡 Para usar cualquiera de estos, solo escribe su ID en tu archivo .env:');
    console.log('   VITE_GEMINI_MODEL=gemini-2.5-flash');
  } catch (err) {
    console.error('❌ Error al consultar la API de Google Gemini:', err.message);
  }
}

main();
