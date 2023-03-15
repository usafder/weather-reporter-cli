# Weather Reporter CLI

The Weather Reporter CLI is a Node.js command-line interface (CLI) tool that can be used to fetch information on the current weather of the specified city.

## Installation
To install and use the Weather Reporter CLI, follow these steps:
1. Open a terminal window and navigate to the directory where you have downloaded or cloned this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm link` to link and use this custom CLI locally.
4. To ensure that the installation was successful, you can run the command `weather version` in your terminal. This will display the version of the CLI, confirming that the setup was successful.

**Note:** Make sure you have node installed and that there is no existing CLI named `weather` to avoid any conflicts.

## Available Commands
The following commands are available for use with the Weather Reporter CLI:
1. ### `weather report [city]`:
    Provides the current weather details for the specified city. For example, if you want to get the weather report for the city Berlin, type `weather report berlin` that will display the weather report for the city Berlin. You can replace `berlin` with any name of the city for which you want to get the weather report for.

2. ### `weather version`:
    The `weather version` command can be used to view the current version of the CLI.

3. ### `weather help`:
    To get information on the supported commands, you can run the `weather help` command that will display the list of supported commands along with their description.
