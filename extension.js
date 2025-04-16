({
    name: "Am Alert", // Category Name
    description: "Send notification from everywhere via Am Alert",
    author: "ArtronShop",
    category: "Communication",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#28B463", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="am-alert">
                    <value name="auth">
                        <shadow type="text">
                            <field name="TEXT">--room-token--</field>
                        </shadow>
                    </value>
                    <value name="msg">
                        <shadow type="text">
                            <field name="TEXT">Hello from microBlock</field>
                        </shadow>
                    </value>
                    <value name="image">
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
        "AmAlert-Arduino@1.0.1"
    ]
});
