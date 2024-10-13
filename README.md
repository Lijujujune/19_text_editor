# Just Another Text Editor (J.A.T.E)

## Description

J.A.T.E is a progressive web application (PWA) that functions as a simple, offline-capable text editor. It allows users to write and save JavaScript code snippets using CodeMirror, a versatile text editor for the web. This application can be installed on a desktop as a PWA and has persistent data storage using IndexedDB.

Web page:
<img width="1552" alt="image" src="https://github.com/user-attachments/assets/4ab2628b-4ec8-436b-b459-e1e61adc31bd">

Installed App:
<img width="1312" alt="image" src="https://github.com/user-attachments/assets/ee4098c1-b248-4364-8586-840be03013ed">


## Links

Please use Chrome Dev to ensure better user experience.

Application deployed to Render: https://one9-text-editor-1-30hb.onrender.com/

GitHub repo: https://github.com/Lijujujune/19_text_editor/


## User Story
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Features

	•	Offline functionality: Works offline using service workers.
	•	Installable: Can be installed as a Progressive Web App (PWA) from the browser.
	•	Data Persistence: Saves and retrieves content using IndexedDB, and falls back to localStorage if necessary.
	•	Syntax Highlighting: Utilizes CodeMirror for syntax highlighting and line numbering.
	•	Automatic Saving: Saves content when clicking off the editor.

## Technologies Used

	•	Node.js
	•	Express.js
	•	Webpack: For bundling the front-end JavaScript and managing the build process.
	•	CodeMirror: Text editor library for highlighting JavaScript code.
	•	IndexedDB: For persistent data storage.
	•	Workbox: Service workers and caching for offline functionality.
	•	Progressive Web App (PWA): Allows the app to be installable and offline-ready.
 	•	Manifest.json
  
## License

This project is licensed under the MIT License.

You can adjust the repository URL, project name, and other details accordingly. This template provides a solid starting point for documenting your project!
