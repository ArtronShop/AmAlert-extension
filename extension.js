({
    name: "LINE Notify", // Category Name
    description: "Send notification from everywhere to LINE",
    author: "microBlock",
    category: "Communication",
    version: "1.2.0",
    icon: "/static/icon.png", // Category icon
    color: "#28B463", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="linenotify">
                    <value name="auth">
                        <shadow type="text">
                            <field name="TEXT">--auth--</field>
                        </shadow>
                    </value>
                    <value name="msg">
                        <shadow type="text">
                            <field name="TEXT">Hello from microBlock</field>
                        </shadow>
                    </value>
                    <value name="stickerPackageId">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                    <value name="stickerId">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ],
    chip: [ // Chip support
        "ESP32",
        "RP2-WiFi",
        "Uno-R4-WiFi"
    ], 
    supportArduinoPlatform: true,
    depends: [ // Arduino library
        "ArtronShop_LineNotify@1.1.0"
    ]
});
