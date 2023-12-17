const { Configuration, OpenAI } = require("openai");

//aqui de la docum de openai declaro la configuración usando el módulo donde le paso la apikey
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

//ahora declaro variable para para pasarle la configuración
const openai = new OpenAI(configuration);


