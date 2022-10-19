
Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-2/src/main (master)
$ java -version
java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-LTS-39, mixed mode, sharing)


Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-2/src/main (master)
$ node -v
v16.18.0

Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-2/src/main (master)
$ npm -v
8.19.2
-----------------------------------------------------------------------------------------

Demo of ReactJS in a Spring Boot Container with Gradle
Ressources
Install node
https://github.com/nodesource/distributions/blob/master/README.md

Gradle Node Plugin
https://github.com/srs/gradle-node-plugin

Copy files
https://docs.gradle.org/current/userguide/working_with_files.html

----------------------------------instalacja frontu React-------------------------------------

Jacek@BERLIN MINGW64 cd /C/Users/Jacek/Documents/JAVA/SpringBoot/ReactJS/demo13/src/main
Jacek@BERLIN MINGW64 /C/Users/Jacek/Documents/JAVA/SpringBoot/ReactJS/demo13/src/main (master)
$ ls
java/  resources/

Jacek@BERLIN MINGW64   npm install -g npx
Jacek@BERLIN MINGW64   npx create-react-app myreactapp


----------------------------------------------------------------------

Jacek@BERLIN MINGW64 /C/Users/Jacek/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle (master)
$ ./gradlew build --dry-run
:compileJava SKIPPED
:nodeSetup SKIPPED
:npmSetup SKIPPED
:npmInstallDependencies SKIPPED
:npmBuild SKIPPED
:copyFrontendToBuild SKIPPED
:processResources SKIPPED
:classes SKIPPED
:bootJarMainClassName SKIPPED
:bootJar SKIPPED
:jar SKIPPED
:assemble SKIPPED
:compileTestJava SKIPPED
:processTestResources SKIPPED
:testClasses SKIPPED
:test SKIPPED
:check SKIPPED
:build SKIPPED

BUILD SUCCESSFUL in 1s



