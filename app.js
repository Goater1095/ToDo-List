const express = require('express');
const session = require('express-session');
// 載入設定檔，要寫在 express-session 以後
const usePassport = require('./config/passport');

const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3000;
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');

// express定義會自動尋找目錄的index的檔案
const routes = require('./routes');

// 呼叫 Passport 函式並傳入 app，這條要寫在路由之前
usePassport(app);
require('./config/mongoose');
//set template engine
app.engine('hbs', exhbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

//set use
app.use(
  session({
    secret: 'ThisIsMySecret',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(routes);

app.listen(port, () => {
  console.log(`The Server is start on http://localhost:${port}`);
});
