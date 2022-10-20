https://www.youtube.com/watch?v=_hx2qeOZ8Co&list=PLF5X0J2bZ_k7ZMUpMUshBDfkblMufQb99&index=4

https://github.com/ekim197711/reactjs-springboot


ReactJS - Part 1 - Up and Running with simple Components.

=========================================================================

Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-2/src/main (master)
$ java -version
java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-LTS-39, mixed mode, sharing)


Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-3/src/main (master)
$ node -v
v16.18.0

Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-3/src/main (master)
$ npm -v
8.19.2

Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-3/src/main (master)
$ npx -v
8.19.2


================================= tworzymy aplikację ReactJS ============================
https://create-react-app.dev/docs/setting-up-your-editor

cd C:\Users\Jacek\Documents\JAVA\SpringBoot\ReactJS\springboot-reactjs-gradle-4\src\frontend
npx create-react-app myreactapp


  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd myreactapp
  npm install
  npm run-script build
  npm start

  npm run eject    (ale Uwaga - muszą być commity porobione)

  acek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-3/src/main/webapp (master)
  $ git add -A

  Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-3/src/main/webapp (master)
  $ git commit -a -m"20-10-2022 12:19"

$ npm run eject
Ejected successfully!


modyfikujemy plik: paths.js
C:\Users\Jacek\Documents\JAVA\SpringBoot\ReactJS\springboot-reactjs-gradle-3\src\main\webapp\config\paths.js

linia 57:
było:  appBuild: resolveApp(buildPath),
jest:  appBuild: resolveApp('build/static'),

usuwamy zawartość katalogu build (ale katalog zostawiamy):
C:\Users\Jacek\Documents\JAVA\SpringBoot\ReactJS\springboot-reactjs-gradle-3\src\main\webapp\build

modyfikujemy plik: build.gradle
C:\Users\Jacek\Documents\JAVA\SpringBoot\ReactJS\springboot-reactjs-gradle-3\build.gradle

cd /c/Users/Jacek/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-3


dodajemy cztery tagi do build.gradle:

UWGA: pamietaj w skrypcie gradle.build polecenie npm.cmd jeżeli pod Windowsem odpalamy !!!

------------------------
def webappDir = "$projectDir/src/main/webapp"
sourceSets {
	main {
		resources {
			srcDirs = ["$webappDir/build", "$projectDir/src/main/resources"]
		}
	}
}

processResources {
	dependsOn "buildReact"
}

task buildReact(type: Exec) {
	dependsOn "installReact"
	workingDir "$webappDir"
	inputs.dir "$webappDir"
	group = BasePlugin.BUILD_GROUP
	commandLine "npm.cmd", "run-script", "build"
}

task installReact(type: Exec) {
	workingDir "$webappDir"
	inputs.dir "$webappDir"
	group = BasePlugin.BUILD_GROUP
	commandLine "npm.cmd", "audit", "fix"
	commandLine "npm.cmd", "install"
}
---------------------------------------------------

Uruchamiamy testowo:  buildReact
jak się zakończy successfully

to odpalamy z gradle: clean build
> Task :processResources
> Task :classes
> Task :bootJarMainClassName
> Task :bootJar
> Task :jar
> Task :assemble
> Task :compileTestJava
> Task :processTestResources NO-SOURCE
> Task :testClasses
> Task :test
> Task :check
> Task :build

BUILD SUCCESSFUL in 35s
9 actionable tasks: 9 executed
15:40:44: Execution finished 'build'.


lub

Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-3 (master)
$ gradle clean build

BUILD SUCCESSFUL in 1m 10s
10 actionable tasks: 10 executed


dzięki temu między innymi udało nam się zintegrować ReactJS z Spring Bootem tzn. cała zawartość:
C:\Users\Jacek\Documents\JAVA\SpringBoot\ReactJS\springboot-reactjs-gradle-3\src\main\webapp\build\static\static

została skopiowana do obszaru Spring Boota:
C:\Users\Jacek\Documents\JAVA\SpringBoot\ReactJS\springboot-reactjs-gradle-3\build\resources\main\static

----------------   Uruchomienie aplikacji:
Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-3/build/libs (master)
$ java -jar springboot-reactjs-gradle-3-0.0.1-SNAPSHOT.jar

2022-10-20 15:51:14.290  INFO 4676 --- [nio-8080-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
2022-10-20 15:51:14.290  INFO 4676 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2022-10-20 15:51:14.290  INFO 4676 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 0 ms


------------>  Spring Boot
http://localhost:8080/welcome.html
lub   http://localhost:8080/api

------------>  ReactJS
http://localhost:8080/indx.html
lub  http://localhost:8080



---------------------  Add proxy to package.json in order to develop
"proxy": "http://localhost:9080"


--------------------   uruchamianie osobno Spring boota i Reacta
Spring Boota odpalamy z klasy SpringbootReactjsGradle3Application  (zielona strzałka)  lub z gradla taska: build

Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-3/build/libs (master)
$ curl http://localhost:8080/api
Up and running: 2022-10-20T16:32:00.554958300



ReactaJS odpalamy lokalnie (development server z portu 3000) z lokalicacji:

Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-3/src/main/webapp (master)
$ npm start

You can now view webapp in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.56.1:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully


UWAGA: i to najważniejsze !!!!!!!!!!!!!!!!
można się dostać z ReactaJS z instancji developerskiej na porcie 3000 do naszego backendu Spring Bootowego na port 8080
musi być jednak proxy localhost:8080 ustawione w package.json

Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-3/build/libs (master)
$ curl http://localhost:3000/api
Up and running: 2022-10-20T16:30:16.659741400




