ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(
        Commands.literal("zenkai")
            .then(Commands.argument("amount", Arguments.INTEGER.create(event))
                .executes(ctx => {
                    // Check if the player is an operator
                    if (!ctx.source.hasPermission(2)) {
                        ctx.source.player.tell("§cYou do not have permission to use this command.")
                        return 0
                    }

                    let player = ctx.source.player
                    let amount = Arguments.INTEGER.getResult(ctx, "amount")

                    let username = player.getGameProfile().getName()
                    let server = ctx.source.getServer()

                    server.runCommandSilent(`scoreboard players set ${username} zenkai ${amount}`)
                    player.tell(`§6Zenkai Boost set to §e${amount}`)

                    return 1
                })
            )
    )
})
