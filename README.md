# ToDo-List (待辦清單)

一個使用 Express + node.js + MongoDB 建立的待辦清單
(heroku連結:https://frozen-gorge-01845.herokuapp.com/users/login)

![Login Page](/public/images/login.png)
![Register Page](/public/images/register.png)
![Home Page](/public/images/index.png)

(heroku 連結:https://frozen-gorge-01845.herokuapp.com/users/login)

![Login Page](/public/images/login.png)
![Register Page](/public/images/register.png)
![Home Page](/public/images/index.png)

### 功能描述 (features)：

- 使用者須註冊才可使用
- 使用者可以透過 Facebook Login 直接登入
- 使用者可以在首頁透過 "Create" 新增待辦事項
- 使用者可以在首頁看到所有待辦事項
- 使用者可以在首頁透過 "detail" 查看單一待辦事項
- 使用者可以在首頁透過 "edit" 編輯待辦事項，勾選方塊確認待辦事項完成
- 使用者可以在首頁透過 "delete" 刪除待辦事項

### 安裝

1.開啟終端機(Terminal)cd 到存放專案本機位置並執行:

```
git clone https://github.com/Goater1095/ToDo-List.git
```

2.初始

```
cd ToDo-List  //切至專案資料夾
```

```
npm install  //安裝套件
```

3.開啟程式

```
npm run dev  //執行程式
```

終端顯示 This Server start on http://localhost:3000
即啟動完成，請至 http://localhost:3000 開始使用程式

### 使用工具

- Visual Studio Code - 開發環境
- Node.js - 執行環境
- Express - 應用程式架構
- Express-Handlebars - 模板引擎
- Body-Parser - url-encoded
- MongoDB - Data base
- Mongoose - ODM for MongoDB
- Method-Override - Modify request Verb
- bcryptjs - 密碼加密
- connect-flash - 提示訊息
- dotenv - 環境參數設定
- express-session - 使用者認證相關套件
- passport- 使用者認證相關套件
- passport-facebook- 使用者認證相關套件
- passport-local- 使用者認證相關套件
