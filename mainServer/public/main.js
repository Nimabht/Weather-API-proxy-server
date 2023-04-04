$(() => {
  $("#submit").on("click", () => {
    const city = $("#city").val();
    axios
      .post("http://localhost:3000/getWeather", { city })
      .then((response) => {
        $("#result").html(`Temp is ${response.data.main.temp} °C`);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  });
});
