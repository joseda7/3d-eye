/* 

 API -> Coming soon
--------------------

1. GET /api/models: Retrieve a list of available 3D models.

    Response: An array of model objects, each containing information such as ID, name, format, and other relevant metadata.

2. GET /api/models/{modelId}: Retrieve a specific model by its ID.
    Parameters:
        {modelId}: The unique identifier of the model.
    Response: The model object containing detailed information about the model.

3. POST /api/models: Upload a new 3D model.
    Request: The 3D model file (e.g., OBJ, STL, PLY) and any additional metadata.
    Response: The newly created model object with its assigned ID.

4. PUT /api/models/{modelId}: Update an existing 3D model.
    Parameters:
        {modelId}: The unique identifier of the model to be updated.
    Request: The updated model object or specific fields to be modified.
    Response: The updated model object.
    
5. DELETE /api/models/{modelId}: Delete a specific 3D model.
    Parameters:
        {modelId}: The unique identifier of the model to be deleted.
    Response: A success message or status indicating the deletion was successful.

*/