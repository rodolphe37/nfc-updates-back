  

# Admin Backend - Express  

  

- **Back end making with Nodejs and Express**

  

  

---

  

## Quick Links

  
  

[Demo](#demo)

  

- [Picture](#picture-demo)

  
  

[Tech Stack](#tech-stack)

  

- [Current components on this template](#Current-components-on-this-template)

  

[Author](#author)

  

[License](#license)

  
  

---

  

### Picture Demo


![BackExamplepng](BackExample.png)



---

  

  

## Tech Stack

 
  **Version of Node js**
-    v8.16.2 minimun

  **Version of MySQL**
-    v14.14 minimun

 | Tech used | Links |
 |---|---|
 | **argon2** (V-0.25.1) | https://argon2.online/ |
 | **bcryptjs** (V-2.4.3) | https://www.npmjs.com/package/bcryptjs |
 | **cors** (V-2.8.5) | https://www.npmjs.com/package/cors |
 | **dotenv** (V-8.2.0) | https://www.npmjs.com/package/dotenv |
 | **express** (V-4.17.1) | https://expressjs.com/fr/ |
 | **express-jwt** (V-5.3.1) | https://github.com/auth0/express-jwt |
 | **is-empty** (V-1.2.0) | https://www.npmjs.com/package/is-empty |
 | **jsonwebtoken** (V-8.5.1) | [https://www.npmjs.com/package/jsonwebtoken] |
 | **mysql2** (V-2.0.1) | https://www.npmjs.com/package/mysql2 |
 | **passport** (V-0.4.1) | https://www.npmjs.com/package/passport |
 | **passport-jwt** (V-4.0.0) | http://www.passportjs.org/packages/passport-jwt/ |
 | **randombytes** (V-2.1.0) | https://www.npmjs.com/package/randombytes |
 | **sequelize** (V-5.21.2) | https://sequelize.org/ |



---

  

### Dev Dependencies

  

- [eslint V6.6.0](https://eslint.org/)

- "eslint-config-airbnb": "^18.0.1",

- "eslint-plugin-import": "^2.18.2",

- "eslint-plugin-jsx-a11y": "^6.2.3",

- "eslint-plugin-react": "^7.17.0",

- "eslint-plugin-react-hooks": "^1.7.0"

  

- Express with highly complex Backend structure

  

---

 

### Current components on this template

  
  

| **Components** | **Description** |
|---|---|
| **connection** |  connection to database file |
| **keys** |  file for call secret key in dotenv file |
| **passport** | create passport configuration |
| **db** | sequelize initialization |
| **User** | user model for sequelize to MySQL |
| **authentication** | settings authentication|
| **users** | instances routes |
| **login** | login validation |
| **register** | register validation |
| **.env** | setting environment variables |
| **server** | setting middleware |

  

---

  

  

## Author

  

  

- Rodolphe Augusto - Dylan Belouis

  

  

---

  

  

## License

  

  

- MIT.

  

  

---

  

  

## Start project

### Warning ! 
**this administration template works with a Frontend that you can download or clone at this address**
[Frontend for this administration template](https://github.com/WildCodeSchool/nfc-updates-front)
---
  

- Clone this repo (https://github.com/WildCodeSchool/nfc-updates-back.git)

  

- Create ".env" file on your app's root :

- put it in this file :

- ``` DATABASE_URL=mysql://User:PasswordMySQL@localhost/NameOfYourDatabase ``` => This is a configuration for your MySQL database.  

- Do in the console :

  

- ```cd api```

  

- ``` npm i``` or ```npm install ```

  

to install the dependencies and

  

- ```npm run server```

  

to start project.

  

  

enjoy!!!
