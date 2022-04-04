const carsMocks = [
  {
    car: "Pontiac",
    model: "Fiero",
    model_year: 1984,
    car_vin: "1FADP3E22EL984515",
  },
  {
    car: "Cadillac",
    model: "Seville",
    model_year: 2004,
    car_vin: "2HNYD18471H212597",
  },
  {
    car: "Plymouth",
    model: "Voyager",
    model_year: 1994,
    car_vin: "JN1AJ0HP7CM652889",
  },
  {
    car: "Chevrolet",
    model: "Aveo",
    model_year: 2006,
    car_vin: "1G6DU57V290670458",
  },
  {
    car: "Dodge",
    model: "Dakota",
    model_year: 2011,
    car_vin: "WBAVM1C55FV707630",
  },
  {
    car: "Plymouth",
    model: "Acclaim",
    model_year: 1992,
    car_vin: "3GYFNBE38FS376922",
  },
  {
    car: "Plymouth",
    model: "Voyager",
    model_year: 1995,
    car_vin: "WBAYA6C56FG643850",
  },
  {
    car: "Mercedes-Benz",
    model: "S-Class",
    model_year: 1985,
    car_vin: "WP0CA2A80FS243685",
  },
  {
    car: "Chrysler",
    model: "300",
    model_year: 1999,
    car_vin: "YV1382MS9A2100515",
  },
  {
    car: "Toyota",
    model: "Sequoia",
    model_year: 2001,
    car_vin: "1G4CW54K654498785",
  },
  {
    car: "Chevrolet",
    model: "Astro",
    model_year: 1995,
    car_vin: "SCBFU7ZA2EC816638",
  },
  {
    car: "Infiniti",
    model: "G",
    model_year: 1996,
    car_vin: "2T1BU4EE4BC932204",
  },
  {
    car: "Chevrolet",
    model: "Suburban 2500",
    model_year: 2004,
    car_vin: "KNADM4A33D6222120",
  },
  {
    car: "Volvo",
    model: "C70",
    model_year: 2012,
    car_vin: "SCFEBBBCXAG544793",
  },
  {
    car: "Nissan",
    model: "Murano",
    model_year: 2005,
    car_vin: "4T1BD1FK9EU829009",
  },
  {
    car: "Nissan",
    model: "Titan",
    model_year: 2006,
    car_vin: "5N1AA0NC3BN832843",
  },
  {
    car: "Honda",
    model: "Civic",
    model_year: 2011,
    car_vin: "KM8NU4CC7BU845264",
  },
  {
    car: "Ford",
    model: "Explorer",
    model_year: 2000,
    car_vin: "1G6DK67V090580480",
  },
  {
    car: "Ford",
    model: "Bronco",
    model_year: 1988,
    car_vin: "WVWED7AJ4CW996639",
  },
  {
    car: "Volvo",
    model: "960",
    model_year: 1992,
    car_vin: "WBAGL63464D674642",
  },
  {
    car: "Mitsubishi",
    model: "Endeavor",
    model_year: 2006,
    car_vin: "JTDBT4K3XA1313776",
  },
  {
    car: "Mercedes-Benz",
    model: "W201",
    model_year: 1986,
    car_vin: "1YVHZ8BH2B5059822",
  },
  {
    car: "Chevrolet",
    model: "Tahoe",
    model_year: 2004,
    car_vin: "KM8NU4CC5CU507394",
  },
  {
    car: "Honda",
    model: "Civic",
    model_year: 2001,
    car_vin: "WA1MYBFE0AD276000",
  },
  {
    car: "Jaguar",
    model: "XJ",
    model_year: 2010,
    car_vin: "1HGCR2F33FA582552",
  },
  {
    car: "Acura",
    model: "Legend",
    model_year: 1992,
    car_vin: "WBABS53401J753017",
  },
  {
    car: "Chevrolet",
    model: "Tahoe",
    model_year: 2003,
    car_vin: "WVGEF9BP0ED390421",
  },
  {
    car: "Acura",
    model: "Vigor",
    model_year: 1994,
    car_vin: "WBA3N7C50EK381551",
  },
  {
    car: "Mercedes-Benz",
    model: "E-Class",
    model_year: 1988,
    car_vin: "19UUA8F7XDA561437",
  },
  {
    car: "Acura",
    model: "Vigor",
    model_year: 1992,
    car_vin: "WAUEF48H27K717050",
  },
  {
    car: "Ford",
    model: "Mustang",
    model_year: 2010,
    car_vin: "WBA3D3C55FK909128",
  },
  {
    car: "Dodge",
    model: "Intrepid",
    model_year: 2001,
    car_vin: "3D7TP2CT4AG930075",
  },
  {
    car: "Honda",
    model: "CR-X",
    model_year: 1988,
    car_vin: "WAUWFAFRXCA153016",
  },
  {
    car: "Mitsubishi",
    model: "Diamante",
    model_year: 2002,
    car_vin: "1G6DA1E32C0612909",
  },
  {
    car: "Mercedes-Benz",
    model: "CLK-Class",
    model_year: 2009,
    car_vin: "1C6RD6JT9CS465156",
  },
  {
    car: "Dodge",
    model: "Aspen",
    model_year: 1976,
    car_vin: "KMHGH4JHXFU229723",
  },
  {
    car: "Dodge",
    model: "Viper",
    model_year: 2006,
    car_vin: "WA1VMAFE8ED219463",
  },
  {
    car: "Toyota",
    model: "T100 Xtra",
    model_year: 1998,
    car_vin: "WBAVC73588K095420",
  },
  {
    car: "Ford",
    model: "F350",
    model_year: 1994,
    car_vin: "3GYFNEE32ES364202",
  },
  {
    car: "Renault",
    model: "Alliance",
    model_year: 1983,
    car_vin: "WBAVB33566K207057",
  },
  {
    car: "Mercury",
    model: "Sable",
    model_year: 2008,
    car_vin: "1YVHZ8BA3A5499792",
  },
  {
    car: "Mercury",
    model: "Mariner",
    model_year: 2006,
    car_vin: "4USBT53565L533197",
  },
  {
    car: "Lexus",
    model: "LS",
    model_year: 1992,
    car_vin: "JN8AF5MR6ET025889",
  },
  {
    car: "Ferrari",
    model: "F430",
    model_year: 2006,
    car_vin: "WA1CFAFPXFA909978",
  },
  {
    car: "Chevrolet",
    model: "Camaro",
    model_year: 1975,
    car_vin: "1GYUKEEJ2AR996483",
  },
  {
    car: "Acura",
    model: "Vigor",
    model_year: 1993,
    car_vin: "3N1CN7AP5EK515372",
  },
  {
    car: "Chevrolet",
    model: "Lumina",
    model_year: 1994,
    car_vin: "WAUAGAFD7DN509413",
  },
  {
    car: "Volvo",
    model: "S40",
    model_year: 2008,
    car_vin: "3D73Y4HL0AG888912",
  },
  {
    car: "Isuzu",
    model: "Rodeo",
    model_year: 1997,
    car_vin: "WAUKF98E35A691115",
  },
  {
    car: "Audi",
    model: "S4",
    model_year: 1993,
    car_vin: "SAJWA4GC6EM290888",
  },
  {
    car: "GMC",
    model: "Yukon",
    model_year: 2001,
    car_vin: "1FTWX3A50AE693803",
  },
  {
    car: "Chevrolet",
    model: "Sportvan G20",
    model_year: 1993,
    car_vin: "4JGBB2FB2BA782673",
  },
  {
    car: "Pontiac",
    model: "Bonneville",
    model_year: 1968,
    car_vin: "1D7RB1GK6AS881751",
  },
  {
    car: "Isuzu",
    model: "Axiom",
    model_year: 2002,
    car_vin: "WAUKF78E96A317579",
  },
  {
    car: "Mitsubishi",
    model: "Precis",
    model_year: 1986,
    car_vin: "WBAPM735X9A634908",
  },
  {
    car: "Jeep",
    model: "Cherokee",
    model_year: 1992,
    car_vin: "WA1VMAFE8DD891425",
  },
  {
    car: "Honda",
    model: "CR-Z",
    model_year: 2012,
    car_vin: "SCBLC37F06C916011",
  },
  {
    car: "Ford",
    model: "Econoline E150",
    model_year: 1994,
    car_vin: "1FMJU2A53AE711834",
  },
  {
    car: "Suzuki",
    model: "Grand Vitara",
    model_year: 2008,
    car_vin: "1J4PN2GK0BW230280",
  },
  {
    car: "Lexus",
    model: "LS",
    model_year: 1991,
    car_vin: "1D4RE5GG0BC949156",
  },
  {
    car: "GMC",
    model: "Savana 1500",
    model_year: 1999,
    car_vin: "5N1AN0NU5CN278042",
  },
  {
    car: "Land Rover",
    model: "Range Rover",
    model_year: 2005,
    car_vin: "5UXKU2C59F0397070",
  },
  {
    car: "Acura",
    model: "TL",
    model_year: 1999,
    car_vin: "1N4AL3AP0EC948726",
  },
  {
    car: "Mazda",
    model: "MX-3",
    model_year: 1995,
    car_vin: "WAUEF98E57A765862",
  },
  {
    car: "Oldsmobile",
    model: "Cutlass Supreme",
    model_year: 1995,
    car_vin: "WBSBR93431E223602",
  },
  {
    car: "Nissan",
    model: "Sentra",
    model_year: 2005,
    car_vin: "19UYA425X2A632454",
  },
  {
    car: "Audi",
    model: "S6",
    model_year: 2009,
    car_vin: "WAUHGBFC5EN547641",
  },
  {
    car: "Ford",
    model: "Econoline E250",
    model_year: 1996,
    car_vin: "SAJWA2GT7EM498010",
  },
  {
    car: "Kia",
    model: "Sportage",
    model_year: 1997,
    car_vin: "1FTEW1CM0DF823200",
  },
  {
    car: "Volkswagen",
    model: "Type 2",
    model_year: 1991,
    car_vin: "5UXWZ7C58F0123326",
  },
  {
    car: "Honda",
    model: "CR-X",
    model_year: 1984,
    car_vin: "1G6AF5S39E0247616",
  },
  {
    car: "Acura",
    model: "RL",
    model_year: 2006,
    car_vin: "JHMZF1C66FS516869",
  },
  {
    car: "Honda",
    model: "Element",
    model_year: 2005,
    car_vin: "JH4NA21671T486211",
  },
  {
    car: "Daewoo",
    model: "Leganza",
    model_year: 2000,
    car_vin: "WBANV9C55AC535258",
  },
  {
    car: "Acura",
    model: "RSX",
    model_year: 2002,
    car_vin: "WAUAT48H03K398426",
  },
  {
    car: "Lexus",
    model: "RX",
    model_year: 2013,
    car_vin: "WBA3A5G53FN591796",
  },
  {
    car: "Lincoln",
    model: "MKS",
    model_year: 2009,
    car_vin: "1GYEK63N33R900766",
  },
  {
    car: "Chevrolet",
    model: "Blazer",
    model_year: 1992,
    car_vin: "WAU2GBFCXEN432247",
  },
  {
    car: "Subaru",
    model: "Legacy",
    model_year: 1998,
    car_vin: "WAUWFAFL0CA798219",
  },
  {
    car: "GMC",
    model: "Rally Wagon 3500",
    model_year: 1992,
    car_vin: "2HNYD28417H943900",
  },
  {
    car: "Acura",
    model: "Legend",
    model_year: 1988,
    car_vin: "2T1BU4EE5DC749641",
  },
  {
    car: "BMW",
    model: "X5",
    model_year: 2003,
    car_vin: "WAUCD54B44N276200",
  },
  {
    car: "GMC",
    model: "Envoy",
    model_year: 2007,
    car_vin: "YV1612FH5D2409440",
  },
  {
    car: "Buick",
    model: "Century",
    model_year: 1986,
    car_vin: "WBA8Z5C56FG320028",
  },
  {
    car: "Acura",
    model: "NSX",
    model_year: 1999,
    car_vin: "WAUSH78E28A841752",
  },
  {
    car: "BMW",
    model: "8 Series",
    model_year: 1995,
    car_vin: "JN1AZ4FH2FM855690",
  },
  {
    car: "Oldsmobile",
    model: "Bravada",
    model_year: 1996,
    car_vin: "19UUA56703A823785",
  },
  {
    car: "Suzuki",
    model: "Swift",
    model_year: 1993,
    car_vin: "JTHBE1BL3F1436480",
  },
  {
    car: "Dodge",
    model: "Ram 3500",
    model_year: 1999,
    car_vin: "1G4GF5G30DF667966",
  },
  {
    car: "GMC",
    model: "Sonoma Club Coupe",
    model_year: 1994,
    car_vin: "JTHBW1GG3F2073200",
  },
  {
    car: "Audi",
    model: "A4",
    model_year: 2008,
    car_vin: "1GYEE437X90057997",
  },
  {
    car: "Ford",
    model: "F150",
    model_year: 2005,
    car_vin: "JTEBU5JR2D5713641",
  },
  {
    car: "Ford",
    model: "Freestyle",
    model_year: 2007,
    car_vin: "1N4AL3AP8DC080778",
  },
  {
    car: "Acura",
    model: "CL",
    model_year: 2002,
    car_vin: "JTEBU5JR6F5426354",
  },
  {
    car: "Ford",
    model: "E-Series",
    model_year: 1995,
    car_vin: "WAUSF78E76A009178",
  },
  {
    car: "Volvo",
    model: "S60",
    model_year: 2004,
    car_vin: "WAUGVAFR4BA479982",
  },
  {
    car: "Toyota",
    model: "Camry",
    model_year: 1994,
    car_vin: "WUATNAFG4CN529017",
  },
  {
    car: "Land Rover",
    model: "Discovery",
    model_year: 2011,
    car_vin: "1C3BCBGG5DN733592",
  },
  {
    car: "Jaguar",
    model: "XK Series",
    model_year: 2003,
    car_vin: "WBAUC9C5XDV160767",
  },
  {
    car: "Chrysler",
    model: "PT Cruiser",
    model_year: 2008,
    car_vin: "5N1BA0ND6FN888939",
  },
];

module.exports = { carsMocks };