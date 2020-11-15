const express = require('express');
const session = require('express-session');
// 載入設定檔，要寫在 express-session 以後
const usePassport = require('./config/passport');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT;
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// express定義會自動尋找目錄的index的檔案
const routes = require('./routes');

require('./config/mongoose');
//set template engine
app.engine('hbs', exhbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

//set use
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// 呼叫 Passport 函式並傳入 app，這條要寫在路由之前
usePassport(app);
app.use(flash());

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.user = req.user;
  res.locals.success_msg = req.flash('success_msg'); // 設定 success_msg
  res.locals.warning_msg = req.flash('warning_msg'); // 設定 warning_msg
  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`The Server is start on http://localhost:${PORT}`);
});
