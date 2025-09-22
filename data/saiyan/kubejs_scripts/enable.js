ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event

    const formTags = {
        "ssj1": "ssj1_off",
        "ssj2": "ssj2_off",
        "ssj3": "ssj3_off",
        "ssj4": "ssj4_off",
        "ape": "ape_off",
        "golden_ape": "golden_ape_off",
        "ssj2-fp": "ssj2-fp_off",
        "ssj3-fp": "ssj3-fp_off",
        "ssj4-fp": "ssj4-fp_off",
        "ssj_blue": "ssj_blue_off",
        "ssj_blue-fp": "ssj_blue-fp_off",
        "ssj_blue_evo": "ssj_blue_evo_off",
        "ssj_god": "ssj_god_off",
        "ue": "ue_off",
        "ui_perfect": "ui_perfect_off",
        "ui_true": "ui_true_off",
        "ui_sign": "ui_sign_off"
    }

    let root = Commands.literal("enable_transformation")

    for (let form in formTags) {
        root = root.then(
            Commands.literal(form)
                .executes(ctx => {
                    if (!ctx.source.hasPermission(2)) {
                        ctx.source.player.tell("§cYou do not have permission to use this command.")
                        return 0
                    }

                    let player = ctx.source.player
                    let username = player.getGameProfile().getName()
                    let server = ctx.source.getServer()

                    // Always remove the correct mapped tag
                    server.runCommandSilent(`tag ${username} remove ${formTags[form]}`)
                    player.tell(`§aTransformation §e${form} §ahas been enabled.`)

                    return 1
                })
        )
    }

    event.register(root)
})
