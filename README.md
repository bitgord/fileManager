#fileManager
A web interface to manage csv file uploads and store them in a mongo database

#Project Directory Overview
 * [api]  //Backend API
   * [controllers]
      * [fileController.js]   // Backend controller
   * [models] 
      * [fileSchema.js]       // Model Schema for file uploads
   * [routes]
      * [routes.js]           // Export api routes
 * [app] // Public Folder               
      * [assets]              // Folder to put images, fonts, etc
      * [Components]
          * [addFile]
              * [addFiles.html]     // View for addFiles template
              * [addFiles.js]       // Controller for addFiles view
          * [home]
              * [home.html]         // View for home template
              * [home.js]           // Controller for home template
      * [lib] // Third Party Libs
          * [css]                   // For bootstrap
          * [js]                    // For query
      * [styles] // Custom styles
      * [templates] // Front End Views
          * [footer.html] // Footer template
          * [navigation.html] // Nav bar template
      * [index.html] // Index template
 * [gulpfile.js]     // Task Manager
 * [package.json]    // NPM Dependencies
 * [bower.json]      // Bower dependencies
 * [README.md]       // Setup guide
 * [server.js]       // Node backend
 * [.gitignore]      // Git ignore these files
 * [.bowerrc]        // Bower directory setup 

#Setup
You must have Nodejs, Bower and MongoDB downloaded. 

#Install Instructions
Clone the repository <code>git clone https://github.com/bitgord/fileManager.git </code>
cd into the folder <code>cd fileManager</code>

Alternatively, you can download it as a zip and cd into the folder.

download npm dependencides <code>npm install</code>
download bower dependencies <code>bower install</code>

#Build Application
<code>gulp</code>

#Search Database (You must be running a mongo server)
Go into mongo shell <code>mongo</code><br>
Move into fileUploads database which should be created after you run your app if you are connected to mongo<code>use fileUploads</code><br>
Query database to find all the files that have been uploaded<code>db.files.find().pretty()</code><br>
Clear database<code>db.files.remove({})</code>

#Todo
Change pretax and tax amount to be a number instead of a string<br>
Calculate total expenses amount per-month based on data
