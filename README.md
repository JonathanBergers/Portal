# Portal proof of concept

This app is build upon the storpath react + express fullstack example project
https://github.com/stormpath/stormpath-express-react-example


# Techniques used:

###Stormpath react
https://github.com/stormpath/stormpath-sdk-react

###React refetch
https://github.com/heroku/react-refetch


##references
https://www.dreamfactory.com/
https://stormpath.com/


## 1. Getting Started

To run this example project on your local computer, you will need to have
[Node.js][] installed and a [Stormpath][] tenant account.
If you don't have a Stormpath account, sign up for a free account at [https://api.stormpath.com/register](https://api.stormpath.com/register).

## 2. Installation

Clone this repository, then using a terminal, navigate to the directory and run the following:

```bash
$ npm install
```

## 3. Configuration Stormpath

In the application directory, create a file named `stormpath.yml` and
place the configuration below in the file:

```yaml
client:
  apiKey:
    id: YOUR_API_KEY_ID
    secret: YOUR_API_KEY_SECRET
application:
  href: https://api.stormpath.com/v1/applications/XXXX <-- YOUR APP HREF
```

## 3 Configuration Dreamfactory

This application connects to a dreamfactory rest api and displays the data in a table.
To connect to the dreamfactory api you need a dreamfactory key.

Create the file config.js in the root with the following content:
```javascript
module.exports = {
    dreamfactory_api_key : 'YOUR KEY HERE'

}
```
## 4. Usage

To start the server, run this command in the folder:

```bash
$ npm start
```

If the server is able to start with your configuration, you will see this in
your terminal:

```bash
Stormpath Ready
Application running at http://localhost:3000
```

The application should now be running in your browser at [http://localhost:3000](http://localhost:3000).

