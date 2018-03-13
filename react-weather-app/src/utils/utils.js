import clear from '../assets/images/clear.png';
import clouds from '../assets/images/cloud.png';
import defaultImage from '../assets/images/default.png';
import drizzle from '../assets/images/drizzle.png';
import extreme from '../assets/images/extreme.png';
import mist from '../assets/images/mist.png';
import rain from '../assets/images/rain.png';
import snow from '../assets/images/snow.png';
import thunder from '../assets/images/thunder.png';

const utils = {

  getIcon(id) {
    let icon;
    let alt = "";
    if (id === 0) {
      icon = "";
    }else if (id >= 200 && id <= 232 ) {
      icon = thunder;
      alt="Thunderstorm";
    }else if (id >= 300 && id <= 321) {
      icon = drizzle;
      alt = "Drizzle";
    }else if (id >= 500 && id <= 531) {
      icon = rain;
      alt = "Rain";
    }else if (id >= 600 && id <= 622) {
      icon = snow;
      alt = "Snow";
    }else if (id >= 701 && id <= 781) {
      icon = mist;
      alt = "Mist";
    }else if (id === 800) {
      icon = clear;
      alt = "Clear";
    }else if (id >= 801 && id <= 804) {
      icon = clouds;
      alt = "Clouds";
    }else if (id >= 900 && id <= 962) {
      icon = extreme;
      alt = "Extreme";
    }else {
      icon = defaultImage;
      alt="DefaultImage";
    }
    return [icon, alt];
  }
}

export default utils;
