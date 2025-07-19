**Weather App**
A simple desktop weather application built using C# and Windows Forms. This app fetches real-time weather data from the OpenWeatherMap API and displays it in a user-friendly interface.

**Features**
*Current Weather Information: Displays temperature, humidity, wind speed, and weather conditions.
*City Search: Allows users to enter a city name to get the weather details.
*Refresh Functionality: Update weather data with a single click.

**Prerequisites**
Before running the application, ensure you have the following:
*Visual Studio installed.
*An active internet connection to fetch weather data.
*A valid OpenWeatherMap API key.

**Setup Instructions**
1/Clone the Repository:
git clone https://github.com/ineshass/Weather-app.git/
cd Weather-app/
npm install/
code ./

2/Getting Your OpenWeatherMap API Key
  Go to OpenWeatherMap.
  Sign up for a free account or log in if you already have one.
 After logging in, navigate to API keys in your account dashboard:
 Click your profile icon (top right) and select API keys, or visit   https://home.openweathermap.org/api_keys.
Create a new API key by clicking Create Key,and copy the generated key.

3/Adding the API Key to the Project
 In the root folder of the project, create a .env file if it doesn’t exist.
 Add the following line to the .env file, replacing "your_api_key_here" with the key you copied:
 VITE_APP_ID=your_api_key_here
 Save the .env file.

5/Build and Run:
Press F5 or npm run dev in terminal and copy the localhost address.



