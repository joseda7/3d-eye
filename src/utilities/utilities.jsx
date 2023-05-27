export const getFileNameFromUrl = (url) => {
    
    const arr = url.split("/");
    
    let file = {
        fullName: arr[arr.length-1],
        name: arr[arr.length-1].split(".")[0],
        type: arr[arr.length-1].split(".")[1]
    };

    return file
}