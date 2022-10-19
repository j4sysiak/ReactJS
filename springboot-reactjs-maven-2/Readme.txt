https://www.youtube.com/watch?v=7XxH-G9ckeU&list=PLF5X0J2bZ_k7ZMUpMUshBDfkblMufQb99&index=4

PS C:\Users\Jacek> npm -v
8.19.2
PS C:\Users\Jacek> node -v
v16.18.0

Uwaga!!!
Trzeba plinować, żeby w pomm.xml wersje noda i npm się zgadzały z tym co mamy zainstalowane

----------------------------------instalacja frontu React-------------------------------------

Jacek@BERLIN MINGW64 cd /C/Users/Jacek/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-maven-2/src/main
Jacek@BERLIN MINGW64 /C/Users/Jacek/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-maven-2/src/main (master)
$ ls
java/  resources/

Jacek@BERLIN MINGW64   npm install -g npx  ------------> tego tak na prawdę nie trzeba, bo już jest
Jacek@BERLIN MINGW64   npx create-react-app myreactapp
Jacek@BERLIN MINGW64   cd myreactapp
Jacek@BERLIN MINGW64   npm start

dodatkowo możemy:
npm run build
npm test
npm run eject


odpalamy Reacta na:
  Local:            http://localhost:3000
  On Your Network:  http://172.31.224.1:3000


------------------------------   uruchamiamy Sprint Boota
http://localhost:8080/myhtml.html

--------------------------------- tworzenie jara zawierającego Spring Boota i ReactaJS ---------------------------

1. BUILD REACTA:
Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-maven-2/src/main/myreactapp (master)
$ npm run build

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment

2. NPM CLEAN BUILD Spring Boota

[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  02:26 min
[INFO] Finished at: 2022-10-19T14:50:26+02:00
[INFO] ------------------------------------------------------------------------



W target/static/static/* powinna być zawartość z builda z Reacta: C:\Users\Jacek\Documents\JAVA\SpringBoot\ReactJS\springboot-reactjs-maven-2\src\main\myreactapp\build\static



