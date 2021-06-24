import requests
from .models import CovidModel


HEADER = {"Authorization": "Token c9d23b109021e3a78170b8d02e5014a21bb7a571",}

class CovidService():
    def get_data_covid(self, city_ibge_code, date):
        response = requests.get(url="https://api.brasil.io/v1/dataset/covid19/boletim/data?is_last=True&city_ibge_code={city_ibge_code}", headers=HEADER)
        if date is not None:
            response = requests.get(url="https://api.brasil.io/v1/dataset/covid19/boletim/data?date={date}&city_ibge_code={city_ibge_code}", headers=HEADER)
        if response.status_code != 200:
            return response.json()
        
        covid = CovidModel.object.filter(date=date).first()
        data = response.json()
        if covid is None and data.get("count") == 1:
            result = data.get("results")[0]
            CovidModel.object.save(
                city=result.get("city"),
                date=result.get("date"),
                state=result.get("state"),
                estimated_population=result.get("estimated_population"),
                last_available_confirmed=result.get("last_available_confirmed"),
                new_deaths=result.get("new_deaths"),
                new_confirmed=result.get("new_confirmed"),
                last_available_deaths=result.get("last_available_deaths"),
                last_available_death_rate=result.get("last_available_death_rate"),
            )
        return data.get("results")[0]

        
