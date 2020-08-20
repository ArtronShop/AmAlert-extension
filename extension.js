({
    name: "LINE Notify", // Category Name
    icon: "/static/icon.png", // Category icon
    color: "#1ABC9C", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="linenotify">
                    <value name="auth">
                        <shadow type="text">
                            <field name="TEXT">--linenotify-auth--</field>
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
    ]
});
