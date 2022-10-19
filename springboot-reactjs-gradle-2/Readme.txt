
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

Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-2/src/main (master)
$ npx -v
8.19.2

----------------------------------instalacja frontu React-------------------------------------

Jacek@BERLIN MINGW64 cd /c/Users/Jacek/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-2/src/main
Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-2/src/main (master)
$ ls
java  resources


Jacek@BERLIN MINGW64   npm install -g npx   --------> nie trzeba bo już jest
Jacek@BERLIN MINGW64   npx create-react-app myreactapp

  npm start
    Starts the development server.


$ cd myreactapp
$ npm run build   (opcjonalnie ale jak robi się zmianę w gradle.properties to obowiązkowo)
  The build folder is ready to be deployed.
  You may serve it with a static server:

    npm install -g serve
    serve -s build

  Find out more about deployment here:

    https://cra.link/deployment



$ npm start
You can now view myreactapp in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.31.224.1:3000


--------------  plugin node  (com.github.node-gradle.node) - tworzy taski npmBuild, npmInstall, npmSetup

cd /C/Users/Jacek/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-2
gradle tasks --all


[...]
Node tasks
----------
npmBuild
npmInstall - Install node packages from package.json.
npmInstall2
npmSetup - Setup a specific version of npm to be used by the build.
npmShowVersion
------------
[...]

Other tasks
-----------
Other to są taski, które sami stworzyliśmy (między innymi) w pliku build.gradle:
compileJava - Compiles main Java source.
compileTestJava - Compiles test Java source.
components - Displays the components produced by root project 'springboot-reactjs-gradle-2'. [deprecated]
copyFrontendToBuild
dependentComponents - Displays the dependent components of components in root project 'springboot-reactjs-gradle-2'. [deprecated]
model - Displays the configuration model of root project 'springboot-reactjs-gradle-2'. [deprecated]
prepareKotlinBuildScriptModel
processResources - Processes main resources.
processTestResources - Processes test resources.



----------------------------------------------------------------------

Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-2 (master)
$ ./gradlew build --dry-run

Welcome to Gradle 7.5.1!

Here are the highlights of this release:
 - Support for Java 18
 - Support for building with Groovy 4
 - Much more responsive continuous builds
 - Improved diagnostics for dependency resolution

For more details see https://docs.gradle.org/7.5.1/release-notes.html

Starting a Gradle Daemon, 1 incompatible Daemon could not be reused, use --status for details
:compileJava SKIPPED
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

BUILD SUCCESSFUL in 38s




Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-2 (master)
$ gradle build --dry-run
:compileJava SKIPPED
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

BUILD SUCCESSFUL in 2s


dodajemy w pliku buold.gradle zależnośi pomiędzy taskami od processResources()  dependsOn ....

i mamy budującą się całość:

Jacek@BERLIN MINGW64 ~/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-2 (master)
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

BUILD SUCCESSFUL in 13s


