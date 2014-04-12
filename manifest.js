this.manifest = {
    "name": "Aria2c Integration",
    "icon": "icons/icon64.png",
    "settings": [
        {
            "tab": i18n.get("RPC"),
            "name": "rpcpath",
            "type": "text",
            "label": i18n.get("JSONRPCPath"),
            "text": i18n.get("JSONRPCPathExample")
        },
        {
            "tab": i18n.get("RPC"),
            "name": "rpctoken",
            "type": "text",
            "label": i18n.get("RPCToken")
        },
        {
            "tab": i18n.get("RPC"),
            "name": "rpctokenDescription",
            "type": "description",
            "text": i18n.get("rpctokenDescription")
        },
        {
            "tab": i18n.get("capture"),
            "name": "filesizesetting",
            "type": "text",
            "label": i18n.get("filesize"),
            "text": "500M"
        },
        {
            "tab": i18n.get("capture"),
            "name": "filesizeDescription",
            "type": "description",
            "text": i18n.get("filesizeDescription")
        },
        {
            "tab": i18n.get("capture"),
            "group": i18n.get("whitelisttype"),
            "name": "whitelisttype",
            "type": "textarea",
        },
        {
            "tab": i18n.get("capture"),
            "group": i18n.get("whitelisttype"),
            "name": "whitelisttypeDescription",
            "type": "description",
            "text": i18n.get("whitelisttypeDescription")
        },
        {
            "tab": i18n.get("capture"),
            "group": i18n.get("whitelistsite"),
            "name": "whitelistsite",
            "type": "textarea",
        },
        {
            "tab": i18n.get("capture"),
            "group": i18n.get("whitelistsite"),
            "name": "whitelistsiteDescription",
            "type": "description",
            "text": i18n.get("whitelistsiteDescription")
        },
        {
            "tab": i18n.get("capture"),
            "group": i18n.get("blacklistsite"),
            "name": "blacklistsite",
            "type": "textarea",
        },
        {
            "tab": i18n.get("capture"),
            "group": i18n.get("blacklistsite"),
            "name": "blacklistsiteDescription",
            "type": "description",
            "text": i18n.get("blacklistsiteDescription")
        },
    ],
    "alignment": [
        [
            "rpcpath",
            "rpctoken"
        ],
        [
        	"filesizesetting",
        ],
    ]
};
