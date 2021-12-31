export const data = {
  temp: 25,
  date: '30/12/2021',
  time: '20:48',
  condition_code: '29',
  description: 'Parcialmente nublado',
  currently: 'noite',
  cid: '',
  city: 'Serra, ES',
  img_id: '29n',
  humidity: 83,
  wind_speedy: '4.12 km/h',
  sunrise: '05:03 am',
  sunset: '06:23 pm',
  condition_slug: 'cloud',
  city_name: 'Serra',
  forecast: [
    {
      date: '30/12',
      weekday: 'Qui',
      max: 28,
      min: 22,
      description: 'Chuvas esparsas',
      condition: 'rain',
    },
    {
      date: '31/12',
      weekday: 'Sex',
      max: 28,
      min: 21,
      description: 'Chuvas esparsas',
      condition: 'rain',
    },
    {
      date: '01/01',
      weekday: 'Sáb',
      max: 28,
      min: 22,
      description: 'Chuvas esparsas',
      condition: 'rain',
    },
    {
      date: '02/01',
      weekday: 'Dom',
      max: 28,
      min: 22,
      description: 'Tempo nublado',
      condition: 'cloudly_day',
    },
    {
      date: '03/01',
      weekday: 'Seg',
      max: 30,
      min: 22,
      description: 'Tempo nublado',
      condition: 'cloudly_day',
    },
    {
      date: '04/01',
      weekday: 'Ter',
      max: 29,
      min: 22,
      description: 'Chuvas esparsas',
      condition: 'rain',
    },
    {
      date: '05/01',
      weekday: 'Qua',
      max: 30,
      min: 23,
      description: 'Tempo nublado',
      condition: 'cloudly_day',
    },
    {
      date: '06/01',
      weekday: 'Qui',
      max: 30,
      min: 23,
      description: 'Chuvas esparsas',
      condition: 'rain',
    },
    {
      date: '07/01',
      weekday: 'Sex',
      max: 30,
      min: 22,
      description: 'Chuvas esparsas',
      condition: 'rain',
    },
    {
      date: '08/01',
      weekday: 'Sáb',
      max: 31,
      min: 23,
      description: 'Tempo nublado',
      condition: 'cloudly_day',
    },
  ],
}

/* storm - tempestade
snow - neve
hail - granizo
rain - chuva
fog - neblina
clear_day - dia limpo
clear_night - noite limpa
cloud - nublado
cloudly_day - nublado de dia
cloudly_night - nublado de noite
none_day - erro ao obter mas está de dia
none_night - erro ao obter mas está de noite */

export const tempIcons = temp => {
  if (temp == 'snow') return 'snowflake'
  if (temp == 'hail') return 'cloudversify'
  if (temp == 'rain') return 'cloud-rain'
  if (temp == 'fog') return 'smog'
  if (temp == 'clear_day') return 'sun'
  if (temp == 'clear_night') return 'moon'
  if (temp == 'cloud') return 'cloud'
  if (temp == 'cloudly_day') return 'cloud-sun'
  if (temp == 'cloudly_night') return 'cloud-moon'
  if (temp == 'none_day') return 'sun'
  if (temp == 'none_night') return 'moon'
}
