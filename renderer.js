const infoContainer = document.getElementById("info");
infoContainer.innerText = `chrome: ${versions.chrome()}`;

const func = async () => {
  const res = await versions.size();
  console.log(res);
};

func();
