const fetch = require('node-fetch');
const token="c9d23b109021e3a78170b8d02e5014a21bb7a571";
const datasetSlug="covid19";
const tableName="caso_full";
const filters = {state: "SC", city:"Palhoça", is_last: "True"};
const url=`https://api.brasil.io/v1/dataset/${datasetSlug}/${tableName}/data?state=${filters.state}&is_last=${filters.is_last}&city=${filters.city}`

 fetch(
  url,
  {
    method: 'get',
    headers: {
      Authorization: `Token ${token}`,
    },
  }
).then(res => res.json())
.then(json => console.log(json));
