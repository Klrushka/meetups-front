/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
const app = express();

app.use(express.static(`${process.cwd()}/build`));

app.get('/*', (req, res) => {
    res.sendFile(`${process.cwd()}/build/index.html`);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT}()`);
});