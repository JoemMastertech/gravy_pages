const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index.js","./index.css"])))=>i.map(i=>d[i]);
import{g as d,L as l,o as s,_ as y,m as a}from"./index.js";var R={};const _=`
Eres un traductor profesional especializado en menús de restaurantes de alta gama.
Traduce nombres y descripciones de platillos y bebidas del español (es) a inglés (en), francés (fr), italiano (it) y chino simplificado (zh).

PRINCIPIOS FUNDAMENTALES:
1. PRECISIÓN GASTRONÓMICA SIN INVENTAR:
   Usa vocabulario culinario exacto y profesional de cada idioma (ej: "Asado de Tira" -> "Short Ribs", "Milanesa" -> "Breaded Cutlet", "Betabel" -> "Beetroot", "Jugo de Carne" -> "Beef Broth/Consommé").
   Traduce EXCLUSIVAMENTE los ingredientes y técnicas mencionados en el texto original.
   ESTÁ TERMINANTEMENTE PROHIBIDO añadir ingredientes, notas de cata, maridajes o adjetivos que no figuren en el español.

2. MANEJO DE DESCRIPCIONES VACÍAS:
   Si la descripción original está vacía o no tiene texto, la descripción en los 4 idiomas DEBE ser una cadena vacía "".
   JAMÁS generes texto de relleno como "No description", "N/A" ni redactes descripciones automáticas para productos sin texto.

3. PRESERVACIÓN DE MARCAS Y NOMBRES CULTURALES:
   Marcas comerciales registradas (Corona, Pacífico, Indio, Victoria, Bohemia, Tecate, Don Julio, Buchanan's, Moët, Aperol, Coca Cola, Heineken, Stella Artois, Jack Daniel's, Paulaner, Delirium Tremens, etc.) se mantienen 100% INTACTAS en todos los idiomas.
   Platillos culturales o tradicionales (Tacos al Pastor, Arrachera, Aguachile, Enmoladas, Chilaquiles, Caldo Tlalpeño) conservan su nombre propio y se traduce con precisión su preparación o guarnición descrita.

4. MANEJO DE AMBIGÜEDAD:
   Ante un término incierto o error tipográfico en el original, traduce de forma literal y neutral. Nunca sustituyas por una suposición ni inventes un ingrediente "similar".
   Si una palabra no tiene traducción culinaria clara, consérvala en el idioma original.

5. EJEMPLOS DE REFERENCIA CON PRODUCTOS REALES (Sigue este patrón exacto):

EJEMPLO 1 (Platillo con ingredientes — no agregar adjetivos ni textos de marketing):
Entrada:
  Nombre: "Ensalada de Betabel con Queso de Cabra y Nuez"
  Descripción: "Betabel rostizado, queso de cabra en trozos, nueces, lechuga, vinagreta y gajos de toronja."
Salida Correcta (EN):
  name: "Beetroot Salad with Goat Cheese and Walnuts"
  description: "Roasted beetroot, goat cheese chunks, walnuts, lettuce, vinaigrette, and grapefruit segments."
❌ INCORRECTO: "Roasted beetroot with creamy tangy goat cheese, crunchy toasted walnuts, fresh farm lettuce, house vinaigrette, and juicy grapefruit segments — a delightful refreshing starter." (PROHIBIDO: agregó adjetivos y frase de marketing).

EJEMPLO 2 (Bebida / Botella sin descripción — respetar campo vacío):
Entrada:
  Nombre: "Finca las Moras Malbec"
  Descripción: ""
Salida Correcta (EN / FR / IT / ZH):
  name: "Finca las Moras Malbec"
  description: ""
❌ INCORRECTO: description: "A bold and fruity red wine with notes of blackberry and plum, perfect for red meats." (PROHIBIDO: inventó nota de cata).

EJEMPLO 3 (Platillo cultural / identidad):
Entrada:
  Nombre: "Pizza de Chilaquiles con Arrachera"
  Descripción: "Masa crujiente y dorada con frijoles, queso mozzarella, totopos bañados en salsa verde, arrachera asada, crema y queso fresco."
Salida Correcta (EN):
  name: "Chilaquiles Pizza with Arrachera"
  description: "Crispy golden crust with beans, mozzarella cheese, tortilla chips in green sauce, grilled arrachera, cream, and fresh cheese."
❌ INCORRECTO: name: "Mexican-Style Fusion Flatbread with Marinated Flank Steak" (PROHIBIDO: destruyó la denominación cultural del platillo).

6. FORMATO DE SALIDA:
Devuelve exclusivamente un objeto JSON con la estructura exacta:
{
  "en": { "name": "...", "description": "..." },
  "fr": { "name": "...", "description": "..." },
  "it": { "name": "...", "description": "..." },
  "zh": { "name": "...", "description": "..." }
}
`,w=s({en:s({name:a(),description:a().default("")}),fr:s({name:a(),description:a().default("")}),it:s({name:a(),description:a().default("")}),zh:s({name:a(),description:a().default("")})}),M=["corona","pacifico","pacífico","indio","victoria","modelo","bohemia","tecate","heineken","stella artois","amstel","michelob","montejo","león","leon","dos equis","xx","delirium tremens","erdinger","paulaner","guinness","duvel","don julio","herradura","cuervo","1800","dobel","400 conejos","ojo de tigre","montelobos","bacardi","bacardí","matusalem","havana","captain morgan","zacapa","absolut","smirnoff","grey goose","tanqueray","bombay","hendrick","beefeater","johnnie walker","chivas","buchanan","jack daniel","jim beam","torres","hennessy","martell","moet","moët","veuve clicquot","dom perignon","dom pérignon","aperol","campari","licor 43","baileys","jagermeister","jägermeister","sambuca","fernet","kahlua","kahlúa","disaronno"];function D(u,t){var n;const p=u.toLowerCase();for(const c of M)if(p.includes(c))for(const e of["en","fr","it","zh"])(n=t[e])!=null&&n.name&&!t[e].name.toLowerCase().includes(c)&&(t[e].name=u)}class z{static async translateAndPersistProduct(t){var f,g,A;const{tenantId:p,productId:n,tableName:c,name:e,description:m}=t;if(!n||!e||!e.trim())return;const E=d("OPENAI_API_KEY")||(typeof process<"u"?R.OPENAI_API_KEY:"");if(!E){l.warn("[ProductTranslationPipeline] OPENAI_API_KEY no disponible, omitiendo auto-traducción en vivo.");return}const h=!!(m&&m.trim()),S=h?`Nombre del producto: ${e.trim()}
Descripción/Ingredientes: ${m.trim()}`:`Nombre del producto: ${e.trim()}
Descripción/Ingredientes: [VACÍA - El producto no tiene descripción en español, devuelve description: "" en todos los idiomas]`;try{const i=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${E}`},body:JSON.stringify({model:"gpt-4o-mini",response_format:{type:"json_object"},temperature:.1,messages:[{role:"system",content:_},{role:"user",content:S}]})});if(!i.ok){const o=await i.text();throw new Error(`OpenAI HTTP ${i.status}: ${o}`)}const b=(A=(g=(f=(await i.json()).choices)==null?void 0:f[0])==null?void 0:g.message)==null?void 0:A.content;if(!b)throw new Error("OpenAI devolvió contenido vacío");const r=w.parse(JSON.parse(b));D(e,r),h||(r.en.description="",r.fr.description="",r.it.description="",r.zh.description="");const P=d("VITE_SUPABASE_URL")||d("SUPABASE_URL"),I=d("VITE_SUPABASE_ANON_KEY");if(!P||!I)return;const{createClient:C}=await y(async()=>{const{createClient:o}=await import("./index.js").then(v=>v.b9);return{createClient:o}},__vite__mapDeps([0,1]),import.meta.url),O=C(P,I),T=["en","fr","it","zh"].map(o=>({restaurante_id:p,product_id:n,product_table:c||"menu_overrides",lang:o,name:r[o].name,description:r[o].description,status:"machine"})),{error:N}=await O.from("product_translations").upsert(T,{onConflict:"restaurante_id,product_id,lang"});N?l.error(`[ProductTranslationPipeline] Error guardando traducciones para ${n}:`,new Error(N.message)):l.info(`[ProductTranslationPipeline] ✅ Traducciones actualizadas con OpenAI para [${e}] en los 4 idiomas.`)}catch(i){l.warn(`[ProductTranslationPipeline] Error en pipeline de traducción para [${e}]:`,i)}}}export{z as ProductTranslationPipeline,z as default};
