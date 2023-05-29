<p style="text-align:center"> <b>👁 3D-eye</b> is a visualizer that loads 3D models in the browser.
</p>

## Developers
This project is made using [React](https://es.react.dev/) + [Vite](https://vitejs.dev/). 

Here you will find a custom configuration for the growing solution that uses methodologies such as [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/) and [BEM](https://getbem.com/). 

Also, you will see implemented features for **3D graphics** using [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) and [React Three Drei](https://github.com/pmndrs/drei), **UI styles** using [Sass](https://sass-lang.com/), CSS variables and Scalable Vector Graphics (SVG).

## Getting Started
Install the recommended version of Node.js from [here](https://nodejs.org/es/).

Once it's done, verify `node` installed version. On your terminal you can run: \
`node -v` 

## Run the Project
In the project directory, run: \
`npm install` \
Installs all modules listed as dependencies in package.json

Now in the project directory, you can run: \
`npm run dev` \
Runs the app in the development mode. Follow the instructions in the console, open the browser and you will see the project running.

`npm test` \
Launches the test runner in the interactive watch mode.

`npm run build` \
Builds the app for production to the `build` folder.
It bundles the project in production mode and optimizes the build for the best performance.

##  Main features
🤖 Visualization for 3D models in .OBJ and .GLTF file formats.

☝ Natural gestures to orbit around a given model.

🙈 Hide/Show different models in the same scene. 

## Coming soon

### 🪐 API
- `GET` `/api/models`: Retrieve a list of available 3D models.

    Response: An array of model objects, each containing information such as ID, name, format, and other relevant metadata.

- `GET` `javascript /api/models/{modelId}`: Retrieve a specific model by its ID.
    Parameters:
        {modelId}: The unique identifier of the model.
    Response: The model object containing detailed information about the model.

- `POST` `/api/models`: Upload a new 3D model.
    Request: The 3D model file (e.g., OBJ, STL, PLY) and any additional metadata.
    Response: The newly created model object with its assigned ID.

- `PUT` `/api/models/{modelId}`: Update an existing 3D model.
    Parameters:
        {modelId}: The unique identifier of the model to be updated.
    Request: The updated model object or specific fields to be modified.
    Response: The updated model object.
    
- `DELETE` `/api/models/{modelId}`: Delete a specific 3D model.
    Parameters:
        {modelId}: The unique identifier of the model to be deleted.
    Response: A success message or status indicating the deletion was successful.

### 🪐 UI controls
Panning and new buttons to easily interact with the model. 

### 🪐 Other formats: .PLY, .STL, .GLB
Support for most popular 3D model formats 