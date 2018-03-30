
- There seems to be like a favicon error or something? Logs errors when running NODEMON but everyrthing still seems to be working. I don't know what thats about.




# MLAB

+ CREATE NEW
+ AWS, SANDBOX
+ NAME DB
+ ADD DB USER

$ heroku config:set MLAB_URL=mongodb://<your_user_login>:<your_user_password>@ds015760.mlab.com:15760/<your_db_name>




# HEROKU

+ $ git checkout -b <deploying-branch>

+ $ heroku -v
+ $ heroku login

+ $ heroku create <your-app-name>

+ index.js

      ```js
      app.set('port', process.env.PORT || 3001)

      app.listen(app.get('port'), () => {
        console.log(`✅ PORT: ${app.get('port')} 🌟`)
      })
      ```

+ connection.js

      ```js
      if (process.env.NODE_ENV == "production") {
        mongoose.connect(process.env.MLAB_URL)
      } else {
        mongoose.connect("mongodb://localhost/whenpresident");
      }
      ```


+ touch Procfile

      ```js
      web: node index.js
      ```

+ $ git push heroku master
+ $ git push origin <branch>

+ $ heroku run node db/seed.js

+ $ heroku open



+ $ heroku logs --tail
