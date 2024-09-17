NILA AAPS Dashboard Components

**Overview**

This React application provides a comprehensive dashboard to view and manage course details, assessment data, and attendance information. It includes three primary components:

  Component1: Displays course details such as course code, name, and type.
  Component2: Shows assessment progress using bar charts.
  Component3: Presents student attendance data.
  
The app retrieves its data from a mock JSON file (Test.json). If any of the data sections are missing, the application displays a NoData component to inform the user that the data is not available.

**Components**

**App.js**
  The main application component that:

    Imports course, assessment, and attendance data from Test.json.
    Passes this data to the Layout component.
    Registers the necessary Chart.js modules for rendering charts.

    
**Component1.js**

    Displays course details including:

      Course Code
      Course Name
      Course Type


**Component2.js**

  Renders assessment data using bar charts. It visualizes:

    Pending Tasks
    Completed Tasks

**Component3.js**

  Displays student attendance information.

**NoData.js**
  A fallback component rendered when there is no data available for a specific section.

**Test.json**
  A mock JSON file containing data for:

**INITIALIZATION**
  Clone the Repository
  Install Dependencies
  Install necessary packages using npm:
      * npm install
      * npm install react-chartjs-2 chart.js


**Start the Application**
  * npm start


License

This project is licensed under the MIT License. See the LICENSE file for details.
