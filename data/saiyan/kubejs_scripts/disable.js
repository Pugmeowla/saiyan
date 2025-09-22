ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    // List of all valid forms
    const forms = [
        "ssj1", "ssj2", "ssj3", "ssj4",
        "ape", "golden_ape",
        "ssj2-fp", "ssj3-fp", "ssj4-fp",
        "ssj_blue", "ssj_blue-fp", "ssj_blue_evo",
        "ssj_god", "ue",
        "ui_perfect", "ui_true", "ui_sign"
    ]

    let root = Commands.literal("disable_transformation")

    // Add each form as a sub-argument
    for (let form of forms) {
        root = root.then(
            Commands.literal(form)
                .executes(ctx => {
                    // Check if the player is an operator
                    if (!ctx.source.hasPermission(2)) {
                        ctx.source.player.tell("§cYou do not have permission to use this command.")
                        return 0
                    }

                    let player = ctx.source.player
                    let username = player.getGameProfile().getName()
                    let server = ctx.source.getServer()

                    // Run the tag add command
                    server.runCommandSilent(`tag ${username} add ${form}_off`)
                    player.tell(`§6Transformation §e${form} §6has been disabled.`)

                    return 1
                })
        )
    }

    event.register(root)
})
