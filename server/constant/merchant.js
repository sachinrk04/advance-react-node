const MerchantJson = {
    "name": "Unit",
    "values": [
        {
            "value": "UNIT1",
            "output": "{\"unit\":\"UNIT1\"}",
            "next": {
                "name": "Super Category",
                "values": [
                    {
                        "value": "P2PM",
                        "output": "{\"unit\":\"UNIT1\",\"superCategory\":\"P2PM\"}",
                        "next": {
                            "name": "Category",
                            "values": [
                                {
                                    "value": "NEW LAUNCHES",
                                    "output": "{\"unit\":\"UNIT1\",\"superCategory\":\"P2PM\",\"category\":\"NEW_LAUNCHES\"}"
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "value": "UNIT2",
            "output": "{\"unit\":\"UNIT2\"}",
            "next": {
                "name": "Super Category",
                "values": [
                    {
                        "value": "CHAT ENABLE",
                        "output": "{\"unit\":\"UNIT2\",\"superCategory\":\"CHAT_ENABLE\"}",
                        "next": {
                            "name": "Category",
                            "values": [
                                {
                                    "value": "EDUCATION",
                                    "output": "{\"unit\":\"UNIT2\",\"superCategory\":\"CHAT_ENABLE\",\"category\":\"EDUCATION\"}"
                                }
                            ]
                        }
                    },
                    {
                        "value": "PROFILE",
                        "output": "{\"unit\":\"UNIT2\",\"superCategory\":\"PROFILE\"}",
                        "next": {
                            "name": "Category",
                            "values": [
                                {
                                    "value": "ACQUISITION",
                                    "output": "{\"unit\":\"UNIT2\",\"superCategory\":\"PROFILE\",\"category\":\"ACQUISITION\"}"
                                }
                            ]
                        }
                    },
                    {
                        "value": "UNIT1 TAB",
                        "output": "{\"unit\":\"UNIT2\",\"superCategory\":\"UNIT1_TAB\"}",
                    },
                    {
                        "value": "MANAGE ROLES",
                        "output": "{\"unit\":\"UNIT2\",\"superCategory\":\"MANAGE_ROLES\"{{#merchantId}},\"merchantId\":\"{{{merchantId}}}\"{{/merchantId}}{{#subMerchantId}},\"subMerchantId\":\"{{{subMerchantId}}}\"{{/subMerchantId}}}",
                        "inputs": [
                            {
                                "name": "Merchant ID",
                                "id": "merchantId"
                            },
                            {
                                "name": "Sub Merchant ID",
                                "id": "subMerchantId"
                            }
                        ]
                    },
                    {
                        "value": "LL",
                        "output": "{\"unit\":\"UNIT2\",\"superCategory\":\"LL\"{{#merchantId}},\"merchantId\":\"{{{merchantId}}}\"{{/merchantId}}{{#subMerchantId}},\"subMerchantId\":\"{{{subMerchantId}}}\"{{/subMerchantId}}}",
                        "inputs": [
                            {
                                "name": "Merchant ID",
                                "id": "merchantId"
                            },
                            {
                                "name": "Sub Merchant ID",
                                "id": "subMerchantId"
                            }
                        ]
                    },
                    {
                        "value": "CC",
                        "output": "{\"unit\":\"UNIT2\",\"superCategory\":\"CC\"{{#title}},\"title\":\"{{{title}}}\"{{/title}}{{#htmlLink}},\"htmlLink\":\"{{{htmlLink}}}\"{{/htmlLink}}}",
                        "inputs": [
                            {
                                "name": "Webpage Title",
                                "id": "title",
                                "regex": "..*",
                                "helper": "Webpage title is required."
                            },
                            {
                                "name": "HTML Link",
                                "id": "htmlLink",
                                "regex": "^https://*",
                                "helper": "Html link should be a valid url start with https://"
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

module.exports = MerchantJson;
