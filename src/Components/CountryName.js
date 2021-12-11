const countryNames = {
  Algeria: 'AL',
  Angola: 'AN',
  Bantu: 'BA',
  Benin: 'BE',
  Botswana: 'BT',
  'Burkina Faso': 'BF',
  Burundi: 'BR',
  Bushman: 'BU',
  Bushongo: 'BH',
  Cameroon: 'CM',
  'Canary Is.': 'CI',
  'Cape Verde': 'CV',
  'Central African Republic': 'CA',
  Dahomean: 'DH',
  'Democratic Republic of the Congo': 'DC',
  Egypt: 'EG',
  Eritrea: 'ER',
  Ethiopia: 'ET',
  Gabon: 'GB',
  Gambia: 'GA',
  Ghana: 'GH',
  'Gold Coast': 'GC',
  Guinea: 'GU',
  Hottentot: 'HO',
  'Ivory Coast': 'IC',
  Kenya: 'KE',
  Lesotho: 'LE',
  Liberia: 'LI',
  Libya: 'LB',
  Madagascar: 'MD',
  Malawi: 'MW',
  Mali: 'ML',
  Mande: 'MN',
  Mauritania: 'MU',
  Mauritius: 'MA',
  Mbundu: 'MB',
  Mende: 'ME',
  Morocco: 'MR',
  Mozambique: 'MZ',
  Namibia: 'NM',
  Niger: 'NG',
  Nigeria: 'NI',
  Pygmy: 'PY',
  'Republic of Chad': 'CH',
  'Republic of Djibouti': 'RD',
  'Republic of Equatorial Guinea': 'RE',
  'Republic of Guinea- Bissau': 'RG',
  'Republic of Sao Tome and Principe': 'RS',
  'Republic of Seychelles': 'SY',
  'Republic of the Congo(Congo - Brazzaville)': 'RC',
  'Reunion Island': 'RI',
  Rwanda: 'RW',
  Semitic: 'SE',
  Senegal: 'SN',
  'Sierra Leone': 'SL',
  Somalia: 'SO',
  'South Africa': 'SA',
  ' South Sudan': 'SS',
  Sudan: 'SU',
  Swahili: 'SH',
  Swaziland: ' SW',
  Tanzania: 'TA',
  Togo: 'TO',
  Tunisia: 'TN',
  Uganda: 'UG',
  'Union of the Comoros': 'UC',
  Yao: 'YA',
  Zaire: 'ZA',
  Zambia: 'ZM',
  Zimbabwe: 'ZI',
  Zulu: 'ZU',
  Afghanistan: 'AF',
  Albania: 'AL',
  'American Samoa': 'AS',
  Andorra: 'AD',
  Anguilla: 'AI',
  Antarctica: 'AQ',
  'Antigua and Barbuda': 'AG',
  Argentina: 'AR',
  Armenia: 'AM',
  Aruba: 'AW',
  Australia: 'AU',
  Austria: 'AT',
  Azerbaijan: 'AZ',
  Bahamas: 'BS',
  Bahrain: 'BH',
  Bangladesh: 'BD',
  Barbados: 'BB',
  Belarus: 'BY',
  Belgium: 'BE',
  Belize: 'BZ',
  Bermuda: 'BM',
  Bhutan: 'BT',
  Bolivia: 'BO',
  'Bosnia and Herzegovina': 'BA',
  'Bouvet Island': 'BV',
  Brazil: 'BR',
  'British Indian Ocean Territory': 'IO',
  Brunei: 'BN',
  Bulgaria: 'BG',
  Cambodia: 'KH',
  Canada: 'CA',
  'Cabo Verde': 'CV',
  'Cayman Islands': 'KY',
  Chad: 'TD',
  Chile: 'CL',
  China: 'CN',
  'Christmas Island': 'CX',
  'Cocos (Keeling) Islands': 'CC',
  Colombia: 'CO',
  Comoros: 'KM',
  'Congo (Kinshasa)': 'CD',
  'Congo (Brazzaville)': 'CG',
  'Cook Islands': 'CK',
  'Costa Rica': 'CR',
  "Cote d'Ivoire": 'CI',
  Croatia: 'HR',
  Cuba: 'CU',
  Cyprus: 'CY',
  Czechia: 'CZ',
  Denmark: 'DK',
  Djibouti: 'DJ',
  Dominica: 'DM',
  'Dominican Republic': 'DO',
  Ecuador: 'EC',
  'El Salvador': 'SV',
  'Equatorial Guinea': 'GQ',
  Estonia: 'EE',
  'Falkland Islands (Malvinas)': 'FK',
  'Faroe Islands': 'FO',
  Fiji: 'FJ',
  Finland: 'FI',
  France: 'FR',
  'French Guiana': 'GF',
  'French Polynesia': 'PF',
  'French Southern Territories': 'TF',
  Georgia: 'GE',
  Germany: 'DE',
  Gibraltar: 'GI',
  Greece: 'GR',
  Greenland: 'GL',
  Grenada: 'GD',
  Guadeloupe: 'GP',
  Guam: 'GU',
  Guatemala: 'GT',
  'Guinea-Bissau': 'GW',
  Guyana: 'GY',
  Haiti: 'HT',
  'Heard Island and Mcdonald Islands': 'HM',
  'Holy See': 'VA',
  Honduras: 'HN',
  'Hong Kong': 'HK',
  Hungary: 'HU',
  Iceland: 'IS',
  India: 'IN',
  Indonesia: 'ID',
  Iran: 'IR',
  Iraq: 'IQ',
  Ireland: 'IE',
  Israel: 'IL',
  Italy: 'IT',
  Jamaica: 'JM',
  Japan: 'JP',
  Jordan: 'JO',
  Kazakhstan: 'KZ',
  Kiribati: 'KI',
  "Korea, Democratic People's Republic of": 'KP',
  'Korea, South': 'KR',
  Kuwait: 'KW',
  Kyrgyzstan: 'KG',
  "Lao People's Democratic Republic": 'LA',
  Latvia: 'LV',
  Lebanon: 'LB',
  Liechtenstein: 'LI',
  Lithuania: 'LT',
  Luxembourg: 'LU',
  Macao: 'MO',
  'North Macedonia': 'MK',
  Malaysia: 'MY',
  Maldives: 'MV',
  Malta: 'MT',
  'Marshall Islands': 'MH',
  Martinique: 'MQ',
  Mayotte: 'YT',
  Mexico: 'MX',
  'Micronesia, Federated States of': 'FM',
  Moldova: 'MD',
  Monaco: 'MC',
  Mongolia: 'MN',
  Montserrat: 'MS',
  Burma: 'MM',
  Nauru: 'NR',
  Nepal: 'NP',
  Netherlands: 'NL',
  'Netherlands Antilles': 'AN',
  'New Caledonia': 'NC',
  'New Zealand': 'NZ',
  Nicaragua: 'NI',
  Niue: 'NU',
  'Norfolk Island': 'NF',
  'Northern Mariana Islands': 'MP',
  Norway: 'NO',
  Oman: 'OM',
  Pakistan: 'PK',
  Palau: 'PW',
  'Palestinian Territory, Occupied': 'PS',
  Panama: 'PA',
  'Papua New Guinea': 'PG',
  Paraguay: 'PY',
  Peru: 'PE',
  Philippines: 'PH',
  Pitcairn: 'PN',
  Poland: 'PL',
  Portugal: 'PT',
  'Puerto Rico': 'PR',
  Qatar: 'QA',
  Reunion: 'RE',
  Romania: 'RO',
  Russia: 'RU',
  'Saint Helena': 'SH',
  'Saint Kitts and Nevis': 'KN',
  'Saint Lucia': 'LC',
  'Saint Pierre and Miquelon': 'PM',
  'Saint Vincent and the Grenadines': 'VC',
  'San Marino': 'SM',
  'Sao Tome and Principe': 'ST',
  'Saudi Arabia': 'SA',
  Serbia: 'RS',
  Montenegro: 'ME',
  Seychelles: 'SC',
  Singapore: 'SG',
  Slovakia: 'SK',
  Slovenia: 'SI',
  'Solomon Islands': 'SB',
  'South Georgia and the South Sandwich Islands': 'GS',
  Spain: 'ES',
  'Sri Lanka': 'LK',
  Suriname: 'SR',
  'Svalbard and Jan Mayen': 'SJ',
  Sweden: 'SE',
  Switzerland: 'CH',
  Syria: 'SY',
  'Taiwan*': 'TW',
  Tajikistan: 'TJ',
  Thailand: 'TH',
  'Timor-Leste': 'TL',
  Tokelau: 'TK',
  Tonga: 'TO',
  'Trinidad and Tobago': 'TT',
  Turkey: 'TR',
  Turkmenistan: 'TM',
  'Turks and Caicos Islands': 'TC',
  Tuvalu: 'TV',
  Ukraine: 'UA',
  'United Arab Emirates': 'AE',
  'United Kingdom': 'GB',
  US: 'US',
  'United States Minor Outlying Islands': 'UM',
  Uruguay: 'UY',
  Uzbekistan: 'UZ',
  Vanuatu: 'VU',
  Venezuela: 'VE',
  Vietnam: 'VN',
  'Virgin Islands, British': 'VG',
  'Virgin Islands, U.s.': 'VI',
  'Wallis and Futuna': 'WF',
  'Western Sahara': 'EH',
  Yemen: 'YE',
};

export default countryNames;
