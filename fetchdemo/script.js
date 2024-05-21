

var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
res.then((data)=>{
    return data.json()
}).then((data1)=>foo(data1)).catch((error)=>console.log(error));

var container = document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";

function foo(data1)
{
    data1.forEach((ele) => {
        var col=document.createElement("div");
            col.className="col-lg-4";
            col.innerHTML=`<div class="card border-primary mb-3" style="max-width: 18rem;">
             <div class="card-header">Country Data</div>
             <div class="card-body text-primary">
                <h5 class="card-title">${ele.name}</h5>
                <p class="card-text">Captial: ${ele.capital}</p>
                <p class="card-text">Region: ${ele.region}</p>
                <p class="card-text">Country Code: ${ele.alpha3Code}</p>
                <p class="card-text">Latlng: ${ele.latlng}</p>
             </div>
             </div>`;
            row.append(col);
            container.append(row);
            document.body.append(container);
    });
}


