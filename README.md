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
git clone https://github.com/ineshass/Weather-app.git
cd Weather-app

2/Obtain an API Key:
 Visit OpenWeatherMap.
 Sign up or log in to your account.
 Navigate to the API section and generate a new API key.
 
 3/Configure the API Key:
 Open the project in Visual Studio.
 Replace the placeholder API key in the code with your actual key:
   private const string ApiKey = "YOUR_API_KEY";
   
4/Install Dependencies:
 Open the Package Manager Console in Visual Studio.
 Run the following command to install the necessary NuGet package:
Install-Package Newtonsoft.Json

5/Build and Run:
Press F5 or click on the Start button in Visual Studio to build and run the application.



