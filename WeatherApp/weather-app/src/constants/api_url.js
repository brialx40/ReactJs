//OPEN WEATHER MAP [API KEY] -> 14f7c4e765374451ddbdc231505f2d27

const location = "Cali,CO";
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;