const API_DEPENDENCIES = {
    57: [{
        "id": 102,
    }],
    70: [{ // Gestão de AR
            "id": 75,
        }, {
            "id": 180,
        }
    ],
    71: [{
        "id": 75,
    }],
    73: [{
        "id": 75,
    }],
    79: [{
            "id": 75,
        }, {
            "id": 82,
        }, {
            "id": 122,
    }],
    82: [{
        "id": 122,
    }],
    85: [{
        "id": 126,
    }],
    87: [{
        "id": 86,
    }],
    90: [{
            "id": 75,
        }, {
            "id": 82,
        }, {
            "id": 122,
    }],
    93: [{ // Gestão Financeira de EC
            "id": 75,
        }, {
            "id": 122,
    }],
    96: [{
            "id": 75,
        }, {
            "id": 86,
    }],
    97: [{
        "id": 104,
    }],
    105: [{
        "id": 104,
    }],
    110: [{
        "id": 75,
    }],
    123: [{
        "id": 126,
    }],
    128: [{
        "id": 126,
    }],
    180: [{ // Gestão de AR internal
            "id": 122, // produtos
        }
    ],
    181: [{ // Gestão de AR de EC
            "id": 75, // permissionamento
        },
        {
            "id":180,
        }
    ]
}

const apisInternalIds = new Set() 
Object.keys(API_DEPENDENCIES).forEach(apiIdEx => { 
    API_DEPENDENCIES[apiIdEx].forEach(api => { apisInternalIds.add(api.id) })
})


console.log(apisInternalIds)
apisInternalIds.forEach(e => {
    console.log(e)
});