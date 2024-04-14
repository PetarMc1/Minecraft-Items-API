# Minecraft-Item-API
## NO LONGER SUPPORTED. WORKING ON A BETTER VERSION
![Discord](https://img.shields.io/discord/1217057211575042058?logo=Discord&label=Discord&color=blue&link=https%3A%2F%2Fdiscord.gg%2FPB5YnEypPE)
![GitHub Tag](https://img.shields.io/github/v/tag/PetarMc1/Minecraft-Items-API?label=version&color=darkred)
![License](https://img.shields.io/github/license/PetarMc1/Minecraft-Items-API)


## What is this?
This is an API that you can run locally and get data for Minecraft items and blocks. It uses SwaggerUI so it's easy to use.

## What is it made with?
- JavaScript
- [Swagger UI](https://swagger.io/tools/swagger-ui/)

# How to use

### 1. Clone the repository. If you plan to make changes, create a fork first!
```bash
git clone https://github.com/PetarMc1/Minecraft-Items-API
```

### 2. Install all required dependencies.
```bash
npm install
```

### 3. Set a custom port.
   
The default port is `6060`. <br>
You can set a custom port for the API to run on. To do so, modify the [port.js](/api/port.js) file.

### 4. Run the script.
```bash
npm start
```

### 5. Accessing API Documentation:
    
You can access the API documentation by navigating to a specific URL in your web  browser.

1. Open your web browser and type http://localhost:PORT/api-docs in the address bar, replacing PORT with the port number the API is running on.
    
### 6. Using the api.

Once you are in the /api-docs page you'll see a list of available endpoints along with their descriptions, request parameters, and response schemas.    

You can make requests directly from Swagger UI by clicking on the endpoint you want to test, filling in any required parameters, and clicking the "Try it out" button.     

Swagger will send the request to the API server and display the response, allowing you to inspect the data returned by the API.


# Contributing
Check [CONTRIBUTING.md](/CONTRIBUTING.md)

# Licence
This project is licensed under the [Mit License](/LICENSE) - see the LICENSE file for details.
