https://www.youtube.com/watch?v=RYb9HcTNlAg&list=PLF5X0J2bZ_k7ZMUpMUshBDfkblMufQb99&index=2

ReactJS inside a Spring Boot Container.

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


npx create-react-app webapp

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd webapp
  npm install
  npm run-script build
  npm start

  npm run eject    (ale Uwaga - muszą być commity porobione)

  acek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-3/src/main/webapp2 (master)
  $ git add -A

  Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-3/src/main/webapp2 (master)
  $ git commit -a -m"20-10-2022 12:19"

$ npm run eject
Ejected successfully!


modyfikujemy plik: paths.js
C:\Users\Jacek\Documents\JAVA\SpringBoot\ReactJS\springboot-reactjs-gradle-3\src\main\webapp2\config\paths.js

linia 57:
było:  appBuild: resolveApp(buildPath),
jest:  appBuild: resolveApp('build/static'),

usuwamy zawartość katalogu build (ale katalog zostawiamy):
C:\Users\Jacek\Documents\JAVA\SpringBoot\ReactJS\springboot-reactjs-gradle-3\src\main\webapp2\build

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


