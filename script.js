// http://api.weatherstack.com/current?access_key=42009da6184210904083c73c43880e80&query=pune


function sendReq() {
    const promise = fetch(
      "https://api.weatherstack.com/current?access_key=79851ffaf00d1ddb562a5ce58338f114&query=pune"
    );
  
    promise
      .then((res) => res.json())
      .then((data) => {
        // show this data on front end
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
