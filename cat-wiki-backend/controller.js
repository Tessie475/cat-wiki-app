const apiKey = process.env.APIKEY;

exports.getAllBreeds = async (req, res) => {
  const api = await fetch("https://api.thecatapi.com/v1/breeds", {
    headers: { "x-api-key": apiKey },
  });
  if (api.ok) {
    const data = await api.json();
    console.log(data);

    try {
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }
};

exports.getOneBreed = async (req, res) => {
  const api = await fetch(
    `https://api.thecatapi.com/v1/breeds/search?q=${req.query.name}`,
    {
      headers: { "x-api-key": apiKey },
    }
  );

  if (api.ok) {
    const data = await api.json();
    console.log(data);
  }

  try {
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.getOneImage = async (req, res) => {
  const api = await fetch(
    `https://api.thecatapi.com/v1/images/${req.params.id}`,
    {
      headers: { "x-api-key": apiKey },
    }
  );

  if (api.ok) {
    const data = await api.json();
    console.log(data);
  }

  try {
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.getCatImages = (req, res)=> {
  const api = await fetch(
    'https://api.thecatapi.com/v1/breeds',
    {
      headers: { "x-api-key": apiKey },
    }
  );

  if (api.ok) {
    const data = await api.json();
    let img = []
    for (i = 0; i<=4; i++){
    let dataCount = Math.floor(Math.random() * data.length)
    let imgArr = data[num]
    let imageName = imgArr.name
    let imageMain = imgArr.image.url
    img.push({name: imageName, imageUrl: imageMain})
    }
    console.log(data);
  }

  try {
    res.json(img);
  } catch (error) {
    console.log(error);
  }
}
