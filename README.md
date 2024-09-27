Mortgage Rate Downloader

**Description:**
This Node.js application serves as a proof-of-concept (POC) for consuming data from an external API, retrieving mortgage rates, and writing the results to a file. It provides a foundational example for developers integrating external data sources into their applications.

**Features**

- Flexible API Key Management: Supports retrieval of API keys from environment variables or a separate .env file.
- Efficient Data Retrieval: Utilizes Node.js for streamlined data fetching and file output.
- Enhanced Debugging: The npm run show-api-key command facilitates easy debugging on servers.
- Customizable Output: Change the output file name directly in the index.ts file.
- Optimized Performance: Implements daily API call caching for efficient data updates.
- Scheduled Execution Potential: Can be integrated with cron jobs or SQL tasks for automated execution.
- Hardcoded the API call in the loadDataFromAPI.ts file
- Uses the [Federal Reserve Bank of St. Louis](https://fred.stlouisfed.org/series/MORTGAGE30US) for firing off the API call

**Getting and saving the an API Key**

- Create an account: Establish an account with the Federal Reserve Bank of St. Louis by visiting [here](https://fredaccount.stlouisfed.org/apikeys).
- Generate API Key: Navigate to the API Key page and follow the on-screen instructions to generate your unique API Key.
- Create .env files: Cerate a new file named .env in the same directory as the LICENSE file.
- Store API Key: Within the .env file, add the following line replacing YOU_API_KEY with the key you obtained:
  API_KEY=YOUR_API_KEY

**Installation**

- Note: This application is written in TypeScript and assumes you have GIT/Node/NPM installed.
- Open up your PowerShell/CMD/Terminal client (this part SHOULD be OS independent)
- Navigate to the folder you wish to git clone/download this application to
- Enter in the command to checkout the application: git clone https://github.com/dac5190/firstNodeAPI.git
- Change Directory into the FirstNodeAPI: cd firstNodeAPI
- Install the depencies that Node requires via NPM: npm i
- Follow the steps found within the section above: 'Getting and saving the an API Key' to ensure your .env file is created and the API Key is successfully mapped to your local API caller.
- Run the application: npm start

**Random Notes**
A lot of this was generated with the assistance of Gemini (Google's ChatGPT). Definitely give the next generation of search engines, an attempt than entrusting Microsoft with all your Smart Search Engine needs.
NEVER share your API key publicly

**License**
MIT all the way baby, ain't nobody got time to stop someone from helping others. If this helps you in anyway, that is awesome.
