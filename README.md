  

# Admin Backend - Express  

  

- **Back end making with Nodejs and Express**

  

  

---

  

## Quick Links

  
  

[Demo](#demo)

- [Picture](#picture-demo)

[Start Project](#Start-project)

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

```bash

$ cd nfc-updates-back

  

$ npm i or npm install

  

$ npm run server

```

to start project.

  

  

enjoy!!!


 


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

