'use strict'

var app = require('./app');
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('SERVIDOR CORRIENDO EN EL PUERTO ', PORT)
})

require('./util/cron')