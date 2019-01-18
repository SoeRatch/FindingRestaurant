### Prerequisites ##
1. Install MongoDB 
2. Install Node v8.12.0

### File Setup ##
1. In the root directory make a file called .babelrc and write the below content

		{
		  "presets": [ "env","react","stage-0" ],
		  "plugins": [ "transform-object-rest-spread" ]
		}

2. In the root directory make a file called .eslintrc and write the below content

	{
	  "extends": ["airbnb", "prettier", "prettier/react"],
	  "plugins": ["prettier"],
	  "parser": "babel-eslint",
	  "parserOptions": {
	    "ecmaVersion": 2016,
	    "sourceType": "module",
	    "ecmaFeatures": {
	      "jsx": true
	    }
	  },
	  "env": {
	    "es6": true,
	    "browser": true,
	    "node": true
	  },
	  "rules": {
	    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
	  }
	}

### Development envt setup ###

1. go to the root directory

2. install all dependencies
> **npm install**

3. initiate MONGODB connection
> **npm run dbon**

4. populate given csv data in the database
> **npm run dataimport**

5. start the project 
> **npm run start**

6. Go to browser and open
> **localhost:3000**