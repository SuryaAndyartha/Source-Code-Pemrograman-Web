// Data Benua & Negara
const negaraData = {
  asia: [
    "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh",
    "Bhutan", "Brunei", "Cambodia", "China", "Georgia",
    "Hong Kong", "India", "Indonesia", "Iran", "Iraq",
    "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait",
    "Kyrgyzstan", "Laos", "Lebanon", "Macau", "Malaysia",
    "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea",
    "Oman", "Pakistan", "Palestine", "Philippines", "Qatar",
    "Russia", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka",
    "Syria", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste",
    "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam",
    "Yemen"
  ], 

  eropa: [
    "Albania", "Andorra", "Austria", "Belarus", "Belgium",
    "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Faroe Islands", "Finland", "France",
    "Germany", "Gibraltar", "Greece", "Guernsey", "Hungary",
    "Iceland", "Ireland", "Isle of Man", "Italy", "Jersey",
    "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta",
    "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia",
    "Norway", "Poland", "Portugal", "Romania", "Russia",
    "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain",
    "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"
  ],

  amerika_utara: [
    "Anguilla", "Antigua and Barbuda", "Aruba", "Bahamas", "Barbados",
    "Belize", "Bermuda", "British Virgin Islands", "Canada", "Cayman Islands",
    "Costa Rica", "Cuba", "Curacao", "Dominica", "Dominican Republic",
    "El Salvador", "Greenland", "Grenada", "Guadeloupe", "Guatemala",
    "Haiti", "Honduras", "Jamaica", "Martinique", "Mexico",
    "Montserrat", "Nicaragua", "Panama", "Puerto Rico", "Saint Barthelemy",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines",
    "Sint Maarten", "Trinidad and Tobago", "Turks and Caicos Islands", "United States", "United States Virgin Islands"
  ],

  amerika_selatan: [
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia",
    "Ecuador", "Falkland Islands", "French Guiana", "Guyana", "Paraguay",
    "Peru", "Suriname", "Uruguay", "Venezuela"
  ],

  afrika: [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso",
    "Burundi", "Cameroon", "Cape Verde", "Central African Republic", "Chad",
    "Comoros", "Djibouti", "DR Congo", "Egypt", "Equatorial Guinea",
    "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia",
    "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya",
    "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi",
    "Mali", "Mauritania", "Mauritius", "Mayotte", "Morocco",
    "Mozambique", "Namibia", "Niger", "Nigeria", "Republic of the Congo",
    "Reunion", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles",
    "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan",
    "Tanzania", "Togo", "Tunisia", "Uganda", "Western Sahara",
    "Zambia", "Zimbabwe"
  ],

  oseania: [
    "American Samoa", "Australia", "Cook Islands", "Fiji", "French Polynesia",
    "Guam", "Kiribati", "Marshall Islands", "Micronesia", "Nauru",
    "New Caledonia", "New Zealand", "Niue", "Northern Mariana Islands", "Palau",
    "Papua New Guinea", "Samoa", "Solomon Islands", "Tokelau", "Tonga",
    "Tuvalu", "Vanuatu", "Wallis and Futuna"
  ]
};

const benuaSelect = document.getElementById("benua");
const negaraSelect = document.getElementById("negara");

// Update Negara ketika Benua dipilih
benuaSelect.addEventListener("change", function(){
  const benua = this.value;
  
  negaraSelect.innerHTML = '<option value="">-- Pilih Negara --</option>';

  if(benua && negaraData[benua]){
    negaraData[benua].forEach(function(p){
      const option = document.createElement("option");
      option.value = p.toLowerCase().replace(/\s+/g, "-");
      option.textContent = p;
      negaraSelect.appendChild(option);
    });
  }
});
