const baseUrl = `https://url-shortener-857u.onrender.com`;
const getUrl = `${baseUrl}`;
const postUrl = `${baseUrl}/`;

const shortButton = document.getElementById("shortButton");
const appendUrl = document.querySelector("#appendShortUrl");
const originalUrl = document.querySelector(".originalUrl");

shortButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (originalUrl.value == "")
    return swal.fire({
      icon: "info",
      title: "Enter URL First",
      width:"auto"
    });
  let obj = { originalUrl: originalUrl.value };

  let data = originalUrl.value,
    flag = false,
    bag = "";

  for (let i = 0; i <= 4; i++) {
    bag += data[i];
    if (bag == "http" || bag == "https") {
      flag = true;
      break;
    }
  }
  console.log(flag);

  if (flag) {
    shortButton.innerHTML = `<div class="spinner"></div>`;
    postData(obj);
  } else
    return swal.fire({
      icon: "info",
      title: "You are not using valid URL!",
      width:"auto"
    });
});

const postData = async (data) => {
  try {
    const apiRes = await fetch(postUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataRes = await apiRes.json();

    let shortUrl = dataRes.data.shortUrl;
    if (apiRes.status == 201) {
      const ipAPI = `${baseUrl}/${shortUrl}`;
      shortButton.textContent = "Shorten URL";

      Swal.queue([
        {
          icon: "success",
          title: "Shorted URL",
          confirmButtonText: "Show my Shorted URL",
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return ipAPI
              ? (Swal.insertQueueStep({
                  title: ipAPI,
                  width: "auto",
                  color: "blue",
                  confirmButton: true,
                }),
                (originalUrl.value = ""))
              : +Swal.insertQueueStep({
                  icon: "error",
                  title: "Unable to get your URL",
                  width:"auto"
                });
          },
        },
      ]);
    }
  } catch (error) {
    swal.fire({
        icon: "error",
        title: "Internal error 500",
        width:"auto"
    });
    shortButton.textContent = "Shorten URL"
    width:"auto"
  }
};
