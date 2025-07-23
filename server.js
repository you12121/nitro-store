const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// تحميل إعدادات التكوين
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const allowedIps = config.allowedIps;

// Middleware للتحقق من عنوان IP
const ipFilter = (req, res, next) => {
    const clientIp = req.ip;
    if (allowedIps.includes(clientIp)) {
        next();
    } else {
        res.status(403).send('Forbidden: Access is denied');
    }
};

// تطبيق Middleware على جميع الطلبات
app.use(ipFilter);

// خدمة الملفات الثابتة من مجلد public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
