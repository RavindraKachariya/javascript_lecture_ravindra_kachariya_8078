const countryInput = document.getElementById("countryInput")
const getData = document.getElementById("getData")
const result = document.getElementById("result")
const error = document.getElementById("error")

getData.addEventListener('click', CoronaData)

async function CoronaData() {
    const country = countryInput.value.trim()

    result.innerHTML = ""
    error.textContent = ""

    if (!country) {
        error.textContent = "Please Enter Country Name"
        return
    }

    const url = `https://disease.sh/v3/covid-19/countries/${country}`

    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error("Country Not Found")

        const data = await response.json()

        result.innerHTML = `
      <div class="text-center bg-gray-50 p-4 rounded-xl shadow">

        <h3 class="text-xl font-semibold mb-2">COVID-19 Report</h3>

        <img class="w-24 h-16 mx-auto border rounded" src="${data.countryInfo.flag}">
        <h2 class="text-2xl font-bold mt-2">${data.country}</h2>

        <div class="mt-4 grid grid-cols-2 gap-3">

          <div class="p-3 bg-blue-100 rounded-lg">
            <strong class="text-blue-700">Cases</strong>
            <p class="text-xl font-bold">${data.cases.toLocaleString()}</p>
          </div>

          <div class="p-3 bg-red-100 rounded-lg">
            <strong class="text-red-700">Deaths</strong>
            <p class="text-xl font-bold">${data.deaths.toLocaleString()}</p>
          </div>

          <div class="p-3 bg-green-100 rounded-lg">
            <strong class="text-green-700">Recovered</strong>
            <p class="text-xl font-bold">${data.recovered.toLocaleString()}</p>
          </div>

          <div class="p-3 bg-yellow-100 rounded-lg">
            <strong class="text-yellow-700">Active</strong>
            <p class="text-xl font-bold">${data.active.toLocaleString()}</p>
          </div>

        </div>
      </div>
    `
    }

    catch (err) {
        error.textContent = "Country Not Found. Try Again!"
    }
}
